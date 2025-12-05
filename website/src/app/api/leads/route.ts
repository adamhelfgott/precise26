import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';

// Hardcoded password for now - change this!
const ADMIN_PASSWORD = 'precise2026!';

export async function GET(request: NextRequest) {
  try {
    // Check authorization
    const authHeader = request.headers.get('authorization');
    if (!authHeader || authHeader !== `Bearer ${ADMIN_PASSWORD}`) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized' },
        { status: 401 }
      );
    }

    // Get query params
    const { searchParams } = new URL(request.url);
    const limit = parseInt(searchParams.get('limit') || '100');
    const status = searchParams.get('status') || null;
    const source = searchParams.get('source') || null;

    // Connect to database
    const { db } = await connectToDatabase();
    const collection = db.collection('audit_requests');

    // Build query
    const query: Record<string, unknown> = { project: 'precise' };
    if (status) query.status = status;
    if (source) query.source = source;

    // Fetch leads
    const leads = await collection
      .find(query)
      .sort({ submitted_at: -1 })
      .limit(limit)
      .toArray();

    // Get stats
    const stats = await collection.aggregate([
      { $match: { project: 'precise' } },
      {
        $group: {
          _id: null,
          total: { $sum: 1 },
          pending: { $sum: { $cond: [{ $eq: ['$status', 'pending'] }, 1, 0] } },
          contacted: { $sum: { $cond: [{ $eq: ['$status', 'contacted'] }, 1, 0] } },
          converted: { $sum: { $cond: [{ $eq: ['$status', 'converted'] }, 1, 0] } },
        }
      }
    ]).toArray();

    const sourceStats = await collection.aggregate([
      { $match: { project: 'precise' } },
      {
        $group: {
          _id: '$source',
          count: { $sum: 1 }
        }
      }
    ]).toArray();

    return NextResponse.json({
      success: true,
      leads,
      stats: stats[0] || { total: 0, pending: 0, contacted: 0, converted: 0 },
      sourceStats: sourceStats.reduce((acc, s) => {
        acc[s._id || 'unknown'] = s.count;
        return acc;
      }, {} as Record<string, number>),
    });

  } catch (error) {
    console.error('Leads fetch error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch leads' },
      { status: 500 }
    );
  }
}

// Update lead status
export async function PATCH(request: NextRequest) {
  try {
    // Check authorization
    const authHeader = request.headers.get('authorization');
    if (!authHeader || authHeader !== `Bearer ${ADMIN_PASSWORD}`) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const body = await request.json();
    const { id, status, notes } = body;

    if (!id || !status) {
      return NextResponse.json(
        { success: false, error: 'ID and status required' },
        { status: 400 }
      );
    }

    const { db } = await connectToDatabase();
    const collection = db.collection('audit_requests');

    const { ObjectId } = await import('mongodb');
    const result = await collection.updateOne(
      { _id: new ObjectId(id) },
      {
        $set: {
          status,
          notes: notes || null,
          updated_at: new Date(),
        }
      }
    );

    if (result.matchedCount === 0) {
      return NextResponse.json(
        { success: false, error: 'Lead not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error('Lead update error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to update lead' },
      { status: 500 }
    );
  }
}
