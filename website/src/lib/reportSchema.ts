/**
 * Waste Eliminated Report — Data Schema
 *
 * This schema defines all data needed to generate the 11×17 PDF report
 * that agencies print and tape to the wall when they win a client review.
 */

export interface WasteEliminatedReport {
  // Campaign identification
  campaign: {
    name: string;                    // "Q4 Auto Regional"
    client: string;                  // "Midwest Auto Group"
    startDate: string;               // "2024-10-01"
    endDate: string;                 // "2024-12-31"
    totalSpend: number;              // 445000 (in dollars)
    currency: string;                // "USD"
  };

  // Hero metrics (the big numbers)
  metrics: {
    wasteEliminated: number;         // 184200 (in dollars)
    roasLift: number;                // 41 (percentage)
    roasControl: number;             // 2.3 (baseline ROAS)
    roasPrecise: number;             // 3.24 (ROAS with Precise)
  };

  // Segment analysis
  segments: {
    total: number;                   // 52 (segments appended by DSP)
    vetoed: number;                  // 49 (segments vetoed by Precise)
    kept: number;                    // 3 (segments that proved value)

    // Detailed segment list
    items: SegmentItem[];
  };

  // Waste breakdown (for bar chart)
  wasteAnalysis: {
    before: {
      wastePercent: number;          // 41.4
      wasteAmount: number;           // 184200
    };
    after: {
      wastePercent: number;          // 0
      wasteAmount: number;           // 0
    };
  };

  // Daily ROAS data (for line chart)
  dailyRoas: DailyRoasPoint[];

  // Veto events (marked on the chart)
  vetoEvents: VetoEvent[];

  // Cryptographic proof
  valenceProof: {
    hash: string;                    // "0x7f3a8b2c1d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0c291"
    shortHash: string;               // "0x7f3a…c291"
    timestamp: string;               // ISO 8601 timestamp
    qrCodeData: string;              // URL or data for QR code
    signatureVersion: string;        // "valence-v2"
  };

  // Report metadata
  meta: {
    generatedAt: string;             // ISO 8601 timestamp
    reportVersion: string;           // "1.0"
    agency: string;                  // "Your Agency Name"
  };
}

export interface SegmentItem {
  id: string;                        // "seg_001"
  name: string;                      // "In-Market Auto Intenders"
  source: string;                    // "DSP Appended" | "Requested"
  status: 'vetoed' | 'kept';
  reason: string;                    // "Zero incremental lift" | "Proven 12% lift"
  liftPercent: number | null;        // null for vetoed, number for kept
  cost: number;                      // Cost attributed to this segment
  impressions: number;               // Impressions from this segment
}

export interface DailyRoasPoint {
  date: string;                      // "2024-10-01"
  roas: number;                      // 2.45
  isVetoDay?: boolean;               // true if veto happened this day
}

export interface VetoEvent {
  date: string;                      // "2024-10-15"
  segmentsVetoed: number;            // 12
  label: string;                     // "Wave 1: 12 segments vetoed"
}

// Example data for testing/demo
export const exampleReportData: WasteEliminatedReport = {
  campaign: {
    name: "Q4 Auto Regional",
    client: "Midwest Auto Group",
    startDate: "2024-10-01",
    endDate: "2024-12-31",
    totalSpend: 445000,
    currency: "USD",
  },
  metrics: {
    wasteEliminated: 184200,
    roasLift: 41,
    roasControl: 2.3,
    roasPrecise: 3.24,
  },
  segments: {
    total: 52,
    vetoed: 49,
    kept: 3,
    items: [
      // Kept segments (showing value)
      {
        id: "seg_001",
        name: "In-Market Auto Intenders",
        source: "Requested",
        status: "kept",
        reason: "Proven 18% lift",
        liftPercent: 18,
        cost: 45000,
        impressions: 2400000,
      },
      {
        id: "seg_002",
        name: "Local Dealership Visitors",
        source: "Requested",
        status: "kept",
        reason: "Proven 12% lift",
        liftPercent: 12,
        cost: 38000,
        impressions: 1800000,
      },
      {
        id: "seg_003",
        name: "Competitive Conquesting",
        source: "Requested",
        status: "kept",
        reason: "Proven 8% lift",
        liftPercent: 8,
        cost: 32000,
        impressions: 1500000,
      },
      // Vetoed segments (examples)
      {
        id: "seg_004",
        name: "Auto Enthusiasts",
        source: "DSP Appended",
        status: "vetoed",
        reason: "Zero incremental lift",
        liftPercent: null,
        cost: 12400,
        impressions: 580000,
      },
      {
        id: "seg_005",
        name: "Males 25-54",
        source: "DSP Appended",
        status: "vetoed",
        reason: "Zero incremental lift",
        liftPercent: null,
        cost: 8900,
        impressions: 420000,
      },
      {
        id: "seg_006",
        name: "Household Income $75K+",
        source: "DSP Appended",
        status: "vetoed",
        reason: "Zero incremental lift",
        liftPercent: null,
        cost: 7600,
        impressions: 360000,
      },
      {
        id: "seg_007",
        name: "Sports Fans",
        source: "DSP Appended",
        status: "vetoed",
        reason: "Zero incremental lift",
        liftPercent: null,
        cost: 6200,
        impressions: 290000,
      },
      {
        id: "seg_008",
        name: "News Readers",
        source: "DSP Appended",
        status: "vetoed",
        reason: "Zero incremental lift",
        liftPercent: null,
        cost: 5800,
        impressions: 275000,
      },
      // ... more vetoed segments would follow
    ],
  },
  wasteAnalysis: {
    before: {
      wastePercent: 41.4,
      wasteAmount: 184200,
    },
    after: {
      wastePercent: 0,
      wasteAmount: 0,
    },
  },
  dailyRoas: [
    { date: "2024-10-01", roas: 2.1 },
    { date: "2024-10-02", roas: 2.2 },
    { date: "2024-10-03", roas: 2.15 },
    { date: "2024-10-04", roas: 2.3 },
    { date: "2024-10-05", roas: 2.25 },
    { date: "2024-10-06", roas: 2.28 },
    { date: "2024-10-07", roas: 2.32 },
    { date: "2024-10-08", roas: 2.35 },
    { date: "2024-10-09", roas: 2.38 },
    { date: "2024-10-10", roas: 2.4 },
    { date: "2024-10-11", roas: 2.42 },
    { date: "2024-10-12", roas: 2.45 },
    { date: "2024-10-13", roas: 2.48 },
    { date: "2024-10-14", roas: 2.5 },
    { date: "2024-10-15", roas: 2.65, isVetoDay: true },  // Wave 1
    { date: "2024-10-16", roas: 2.72 },
    { date: "2024-10-17", roas: 2.78 },
    { date: "2024-10-18", roas: 2.82 },
    { date: "2024-10-19", roas: 2.85 },
    { date: "2024-10-20", roas: 2.88 },
    { date: "2024-10-21", roas: 2.92 },
    { date: "2024-10-22", roas: 2.95 },
    { date: "2024-10-23", roas: 2.98 },
    { date: "2024-10-24", roas: 3.0 },
    { date: "2024-10-25", roas: 3.02, isVetoDay: true },  // Wave 2
    { date: "2024-10-26", roas: 3.08 },
    { date: "2024-10-27", roas: 3.12 },
    { date: "2024-10-28", roas: 3.15 },
    { date: "2024-10-29", roas: 3.18 },
    { date: "2024-10-30", roas: 3.2 },
    { date: "2024-10-31", roas: 3.22 },
    { date: "2024-11-01", roas: 3.24 },
  ],
  vetoEvents: [
    {
      date: "2024-10-15",
      segmentsVetoed: 28,
      label: "Wave 1: 28 segments vetoed",
    },
    {
      date: "2024-10-25",
      segmentsVetoed: 21,
      label: "Wave 2: 21 segments vetoed",
    },
  ],
  valenceProof: {
    hash: "0x7f3a8b2c1d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0c291",
    shortHash: "0x7f3a…c291",
    timestamp: "2024-12-31T23:59:59Z",
    qrCodeData: "https://valence.precise.ai/verify/0x7f3a8b2c1d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0c291",
    signatureVersion: "valence-v2",
  },
  meta: {
    generatedAt: "2025-01-02T14:30:00Z",
    reportVersion: "1.0",
    agency: "Midwest Media Partners",
  },
};
