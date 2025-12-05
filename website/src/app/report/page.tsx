'use client';

import { useState } from 'react';
import { exampleReportData, type WasteEliminatedReport } from '@/lib/reportSchema';

// Format currency
function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

// Format date
function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

function WasteReport({ data }: { data: WasteEliminatedReport }) {
  const keptSegments = data.segments.items.filter(s => s.status === 'kept');
  const vetoedSegments = data.segments.items.filter(s => s.status === 'vetoed');

  return (
    <div className="bg-[#FAFAFA] text-[#1A1A1A] p-8 print:p-12" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Header */}
      <div className="flex justify-between items-start mb-8 pb-4 border-b-[3px] border-[#1A1A1A]">
        <div className="flex items-center gap-2">
          <span className="text-[#888] text-sm font-mono">+</span>
          <span className="font-bold text-xl tracking-tight">PRECISE</span>
          <span className="text-[#888] text-sm font-mono">+</span>
        </div>
        <div className="text-right">
          <div className="text-[#00B894] font-mono text-xs tracking-widest uppercase mb-1">
            Waste Eliminated Report
          </div>
          <div className="font-bold text-lg">{data.campaign.name}</div>
          <div className="text-xs text-[#888] font-mono">
            {data.campaign.client} • {formatDate(data.campaign.startDate)} – {formatDate(data.campaign.endDate)}
          </div>
        </div>
      </div>

      {/* Hero Numbers */}
      <div className="grid grid-cols-3 gap-6 mb-8">
        <div className="p-6 border-[3px] border-[#1A1A1A] bg-white">
          <div className="text-xs font-mono text-[#888] uppercase tracking-widest mb-2">Total Spend</div>
          <div className="font-mono text-4xl font-bold">{formatCurrency(data.campaign.totalSpend)}</div>
        </div>
        <div className="p-6 border-[3px] border-[#00B894] bg-[rgba(0,184,148,0.1)]">
          <div className="text-xs font-mono text-[#00B894] uppercase tracking-widest mb-2">Waste Eliminated</div>
          <div className="font-mono text-4xl font-bold text-[#00B894]">{formatCurrency(data.metrics.wasteEliminated)}</div>
          <div className="text-xs text-[#888] mt-1">in garbage segment spend</div>
        </div>
        <div className="p-6 border-[3px] border-[#00B894] bg-[rgba(0,184,148,0.1)]">
          <div className="text-xs font-mono text-[#00B894] uppercase tracking-widest mb-2">ROAS Lift</div>
          <div className="font-mono text-4xl font-bold text-[#00B894]">+{data.metrics.roasLift}%</div>
          <div className="text-xs text-[#888] mt-1">{data.metrics.roasControl}x → {data.metrics.roasPrecise}x</div>
        </div>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-4 gap-4 mb-8">
        <div className="p-4 border-[2px] border-[#CCC] text-center">
          <div className="font-mono text-2xl font-bold">{data.segments.total}</div>
          <div className="text-xs font-mono text-[#888] uppercase tracking-widest">Appended</div>
        </div>
        <div className="p-4 border-[2px] border-[#E84335] text-center bg-[rgba(232,67,53,0.05)]">
          <div className="font-mono text-2xl font-bold text-[#E84335]">{data.segments.vetoed}</div>
          <div className="text-xs font-mono text-[#E84335] uppercase tracking-widest">Vetoed</div>
        </div>
        <div className="p-4 border-[2px] border-[#00B894] text-center bg-[rgba(0,184,148,0.05)]">
          <div className="font-mono text-2xl font-bold text-[#00B894]">{data.segments.kept}</div>
          <div className="text-xs font-mono text-[#00B894] uppercase tracking-widest">Kept</div>
        </div>
        <div className="p-4 border-[2px] border-[#00B894] text-center bg-[rgba(0,184,148,0.05)]">
          <div className="font-mono text-2xl font-bold text-[#00B894]">{data.wasteAnalysis.before.wastePercent.toFixed(0)}%</div>
          <div className="text-xs font-mono text-[#00B894] uppercase tracking-widest">Waste Cut</div>
        </div>
      </div>

      {/* Two columns: Segments */}
      <div className="grid grid-cols-2 gap-8 mb-8">
        {/* Kept */}
        <div>
          <div className="flex items-center gap-2 mb-4 pb-2 border-b-[2px] border-[#CCC]">
            <span className="font-mono text-sm font-bold uppercase tracking-widest">Segments Kept</span>
            <span className="bg-[#00B894] text-white text-xs font-mono px-2 py-0.5">{data.segments.kept} PROVEN</span>
          </div>
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[#1A1A1A] text-white">
                <th className="text-left p-2 font-mono text-xs uppercase">Segment</th>
                <th className="text-left p-2 font-mono text-xs uppercase">Reason</th>
                <th className="text-right p-2 font-mono text-xs uppercase">Lift</th>
              </tr>
            </thead>
            <tbody>
              {keptSegments.map((seg) => (
                <tr key={seg.id} className="border-b border-[#E5E5E5]">
                  <td className="p-2">{seg.name}</td>
                  <td className="p-2 font-mono text-[#00B894]">{seg.reason}</td>
                  <td className="p-2 text-right font-mono font-bold text-[#00B894]">+{seg.liftPercent}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Vetoed */}
        <div>
          <div className="flex items-center gap-2 mb-4 pb-2 border-b-[2px] border-[#CCC]">
            <span className="font-mono text-sm font-bold uppercase tracking-widest">Segments Vetoed</span>
            <span className="bg-[#E84335] text-white text-xs font-mono px-2 py-0.5">{data.segments.vetoed} ZERO LIFT</span>
          </div>
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[#1A1A1A] text-white">
                <th className="text-left p-2 font-mono text-xs uppercase">Segment</th>
                <th className="text-left p-2 font-mono text-xs uppercase">Reason</th>
                <th className="text-right p-2 font-mono text-xs uppercase">Cost</th>
              </tr>
            </thead>
            <tbody>
              {vetoedSegments.slice(0, 6).map((seg) => (
                <tr key={seg.id} className="border-b border-[#E5E5E5] bg-[rgba(232,67,53,0.03)]">
                  <td className="p-2 line-through text-[#E84335] opacity-60">{seg.name}</td>
                  <td className="p-2 font-mono text-[#E84335]">{seg.reason}</td>
                  <td className="p-2 text-right font-mono text-[#E84335]">{formatCurrency(seg.cost)}</td>
                </tr>
              ))}
              {vetoedSegments.length > 6 && (
                <tr className="border-b border-[#E5E5E5]">
                  <td colSpan={3} className="p-2 text-[#888] font-mono text-xs">
                    + {vetoedSegments.length - 6} more vetoed segments...
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Waste Bar Chart */}
      <div className="mb-8 p-6 border-[2px] border-[#CCC]">
        <div className="font-mono text-sm font-bold uppercase tracking-widest mb-4">Waste % Before vs After</div>
        <div className="flex items-end gap-16 justify-center h-24">
          <div className="text-center">
            <div className="font-mono font-bold text-xl text-[#E84335] mb-2">{data.wasteAnalysis.before.wastePercent.toFixed(1)}%</div>
            <div className="w-20 bg-[#E84335]" style={{ height: `${(data.wasteAnalysis.before.wastePercent / 50) * 80}px` }}></div>
            <div className="font-mono text-xs text-[#888] mt-2">BEFORE</div>
          </div>
          <div className="text-center">
            <div className="font-mono font-bold text-xl text-[#00B894] mb-2">{data.wasteAnalysis.after.wastePercent.toFixed(1)}%</div>
            <div className="w-20 bg-[#00B894]" style={{ height: `${Math.max((data.wasteAnalysis.after.wastePercent / 50) * 80, 4)}px` }}></div>
            <div className="font-mono text-xs text-[#888] mt-2">AFTER</div>
          </div>
        </div>
      </div>

      {/* Valence Proof */}
      <div className="p-6 border-[3px] border-[#00B894] bg-[rgba(0,184,148,0.05)]">
        <div className="flex justify-between items-center mb-4">
          <span className="font-mono font-bold text-[#00B894] uppercase tracking-widest">Valence Cryptographic Proof</span>
          <span className="font-mono text-xs text-[#888]">{data.valenceProof.signatureVersion}</span>
        </div>
        <div className="flex gap-6">
          {/* QR Placeholder */}
          <div className="w-24 h-24 border-[2px] border-[#1A1A1A] bg-white flex items-center justify-center">
            <div className="text-center">
              <div className="grid grid-cols-5 gap-0.5 w-16 h-16">
                {[...Array(25)].map((_, i) => (
                  <div
                    key={i}
                    className={`w-3 h-3 ${[0,1,2,4,5,6,10,14,18,20,21,22,24].includes(i) ? 'bg-[#1A1A1A]' : 'bg-white'}`}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div className="font-mono text-lg font-bold mb-2">{data.valenceProof.shortHash}</div>
            <div className="font-mono text-xs text-[#888] mb-1">
              Full: {data.valenceProof.hash.slice(0, 40)}...
            </div>
            <div className="font-mono text-xs text-[#888] mb-1">
              Timestamp: {formatDate(data.valenceProof.timestamp)}
            </div>
            <div className="font-mono text-xs text-[#888]">
              Verify: valence.precise.ai/verify/{data.valenceProof.shortHash}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-8 pt-4 border-t-[2px] border-[#CCC] flex justify-between">
        <span className="font-mono text-xs text-[#888]">
          {data.meta.agency} • Generated {formatDate(data.meta.generatedAt)} • v{data.meta.reportVersion}
        </span>
        <span className="font-mono text-xs font-bold text-[#00B894]">
          Signed by Valence — impossible to forge
        </span>
      </div>
    </div>
  );
}

export default function ReportPage() {
  const [showSchema, setShowSchema] = useState(false);

  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      {/* Controls (hidden in print) */}
      <div className="p-8 print:hidden">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <span className="reg-mark">+</span>
            <span className="font-bold text-lg tracking-tight">PRECISE</span>
            <span className="reg-mark">+</span>
          </div>
          <span className="type-label-accent block mb-4">INTERNAL DOCUMENTATION</span>
          <h1 className="type-display-md mb-4">Waste Eliminated Report</h1>
          <p className="text-[var(--text-secondary)] max-w-xl mb-8">
            11×17 forensic evidence packet. Print via browser (Cmd+P) or save as PDF.
          </p>

          <div className="flex gap-4 mb-8">
            <button onClick={() => window.print()} className="btn-primary">
              Print / Save as PDF
            </button>
            <button onClick={() => setShowSchema(!showSchema)} className="btn-secondary">
              {showSchema ? 'Hide' : 'Show'} Data Schema
            </button>
          </div>

          {showSchema && (
            <div className="mb-8 p-6 border-[3px] border-[var(--border)] bg-[var(--bg-elevated)]">
              <h2 className="type-display-sm mb-4">Required Data Schema</h2>
              <pre className="bg-[var(--bg-primary)] p-6 overflow-x-auto text-sm font-mono text-[var(--text-secondary)] border-[2px] border-[var(--border)] max-h-[400px]">
                {JSON.stringify(exampleReportData, null, 2)}
              </pre>
            </div>
          )}
        </div>
      </div>

      {/* Report Preview */}
      <div className="max-w-[1100px] mx-auto print:max-w-none print:m-0">
        <WasteReport data={exampleReportData} />
      </div>
    </div>
  );
}
