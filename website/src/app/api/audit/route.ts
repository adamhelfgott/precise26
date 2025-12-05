import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate required fields
    const { email, campaign_id, name, message } = body;

    if (!email || typeof email !== 'string') {
      return NextResponse.json(
        { success: false, error: 'Email is required' },
        { status: 400 }
      );
    }

    if (!campaign_id || typeof campaign_id !== 'string') {
      return NextResponse.json(
        { success: false, error: 'Campaign ID is required' },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Connect to database
    const { db } = await connectToDatabase();
    const collection = db.collection('audit_requests');

    // Create document with permanent project field
    const document = {
      email: email.toLowerCase().trim(),
      campaign_id: campaign_id.trim(),
      name: name?.trim() || null,
      message: message?.trim() || null,
      project: 'precise', // Permanent field
      submitted_at: new Date(),
      status: 'pending',
    };

    // Insert document
    const result = await collection.insertOne(document);

    if (!result.acknowledged) {
      throw new Error('Failed to insert document');
    }

    return NextResponse.json({
      success: true,
      message: 'Audit request submitted successfully',
      id: result.insertedId.toString(),
    });

  } catch (error) {
    console.error('Audit submission error:', error);

    return NextResponse.json(
      {
        success: false,
        error: 'Something went wrong. Please try again or email hello@precise.ai directly.'
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  );
}
