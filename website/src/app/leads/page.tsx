'use client';

import { useState, useEffect, useCallback } from 'react';

interface Lead {
  _id: string;
  email: string;
  campaign_id: string;
  name: string | null;
  message: string | null;
  source: string;
  ip: string;
  userAgent: string;
  referer: string | null;
  geo: { country: string; region: string; city: string } | null;
  status: string;
  notes?: string;
  submitted_at: string;
  updated_at?: string;
}

interface Stats {
  total: number;
  pending: number;
  contacted: number;
  converted: number;
}

export default function LeadsPage() {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [leads, setLeads] = useState<Lead[]>([]);
  const [stats, setStats] = useState<Stats>({ total: 0, pending: 0, contacted: 0, converted: 0 });
  const [sourceStats, setSourceStats] = useState<Record<string, number>>({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
  const [filter, setFilter] = useState<{ status: string; source: string }>({ status: '', source: '' });

  const fetchLeads = useCallback(async () => {
    setLoading(true);
    setError('');

    try {
      const params = new URLSearchParams();
      if (filter.status) params.set('status', filter.status);
      if (filter.source) params.set('source', filter.source);

      const res = await fetch(`/api/leads?${params}`, {
        headers: { Authorization: `Bearer ${password}` },
      });

      const data = await res.json();

      if (!data.success) {
        throw new Error(data.error);
      }

      setLeads(data.leads);
      setStats(data.stats);
      setSourceStats(data.sourceStats);
      setIsAuthenticated(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch leads');
      if ((err as Error).message === 'Unauthorized') {
        setIsAuthenticated(false);
      }
    } finally {
      setLoading(false);
    }
  }, [password, filter]);

  const updateLeadStatus = async (id: string, status: string, notes?: string) => {
    try {
      const res = await fetch('/api/leads', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${password}`,
        },
        body: JSON.stringify({ id, status, notes }),
      });

      const data = await res.json();
      if (!data.success) throw new Error(data.error);

      fetchLeads();
      setSelectedLead(null);
    } catch (err) {
      alert(err instanceof Error ? err.message : 'Failed to update lead');
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    fetchLeads();
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchLeads();
    }
  }, [filter, isAuthenticated, fetchLeads]);

  // Format date
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
    });
  };

  // Login screen
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[var(--bg-primary)] flex items-center justify-center p-8">
        <div className="max-w-md w-full">
          <div className="flex items-center gap-3 mb-8 justify-center">
            <span className="reg-mark">+</span>
            <span className="font-bold text-lg tracking-tight">PRECISE</span>
            <span className="reg-mark">+</span>
          </div>
          <div className="p-8 border-[3px] border-[var(--border)] bg-[var(--bg-elevated)]">
            <h1 className="type-display-sm mb-6 text-center">Leads Dashboard</h1>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="type-label block mb-2">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="input-field"
                  placeholder="Enter admin password"
                  autoFocus
                />
              </div>
              {error && (
                <p className="text-[var(--danger)] text-sm font-mono">{error}</p>
              )}
              <button type="submit" className="btn-primary w-full" disabled={loading}>
                {loading ? 'Loading...' : 'Access Leads'}
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  // Dashboard
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] p-8">
      <div className="max-w-[1600px] mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <span className="reg-mark">+</span>
            <span className="font-bold text-lg tracking-tight">PRECISE</span>
            <span className="reg-mark">+</span>
            <span className="text-[var(--text-tertiary)] ml-4">/ Leads Dashboard</span>
          </div>
          <button
            onClick={() => { setIsAuthenticated(false); setPassword(''); }}
            className="text-[var(--text-tertiary)] text-sm hover:text-[var(--text-primary)]"
          >
            Logout
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="p-4 border-[3px] border-[var(--border)] bg-[var(--bg-elevated)]">
            <span className="type-label block mb-1">Total</span>
            <span className="font-mono text-3xl font-bold">{stats.total}</span>
          </div>
          <div className="p-4 border-[3px] border-[var(--accent)] bg-[var(--accent-muted)]">
            <span className="type-label text-[var(--accent)] block mb-1">Pending</span>
            <span className="font-mono text-3xl font-bold text-[var(--accent)]">{stats.pending}</span>
          </div>
          <div className="p-4 border-[3px] border-[var(--border)] bg-[var(--bg-elevated)]">
            <span className="type-label block mb-1">Contacted</span>
            <span className="font-mono text-3xl font-bold">{stats.contacted}</span>
          </div>
          <div className="p-4 border-[3px] border-[var(--border)] bg-[var(--bg-elevated)]">
            <span className="type-label block mb-1">Converted</span>
            <span className="font-mono text-3xl font-bold">{stats.converted}</span>
          </div>
        </div>

        {/* Source breakdown */}
        <div className="mb-8 p-4 border-[3px] border-[var(--border)]">
          <span className="type-label block mb-3">By Source</span>
          <div className="flex flex-wrap gap-4">
            {Object.entries(sourceStats).map(([source, count]) => (
              <div key={source} className="flex items-center gap-2">
                <span className="font-mono text-sm text-[var(--text-tertiary)]">{source}:</span>
                <span className="font-mono font-bold">{count}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Filters */}
        <div className="flex gap-4 mb-6">
          <select
            value={filter.status}
            onChange={(e) => setFilter({ ...filter, status: e.target.value })}
            className="input-field w-48"
          >
            <option value="">All statuses</option>
            <option value="pending">Pending</option>
            <option value="contacted">Contacted</option>
            <option value="converted">Converted</option>
            <option value="lost">Lost</option>
          </select>
          <select
            value={filter.source}
            onChange={(e) => setFilter({ ...filter, source: e.target.value })}
            className="input-field w-48"
          >
            <option value="">All sources</option>
            <option value="main">Main</option>
            <option value="local-ctv">Local CTV</option>
            <option value="cdp">CDP</option>
          </select>
          <button onClick={fetchLeads} className="btn-secondary">
            Refresh
          </button>
        </div>

        {/* Leads table */}
        <div className="border-[3px] border-[var(--border)] overflow-hidden">
          <table className="w-full data-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Email</th>
                <th>Campaign</th>
                <th>Source</th>
                <th>Location</th>
                <th>Status</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {leads.map((lead) => (
                <tr
                  key={lead._id}
                  className={lead.status === 'pending' ? 'bg-[var(--accent-muted)]' : ''}
                >
                  <td className="font-mono text-xs">{formatDate(lead.submitted_at)}</td>
                  <td>
                    <a href={`mailto:${lead.email}`} className="text-[var(--accent)] hover:underline">
                      {lead.email}
                    </a>
                    {lead.name && <span className="block text-xs text-[var(--text-tertiary)]">{lead.name}</span>}
                  </td>
                  <td className="font-mono text-sm">{lead.campaign_id}</td>
                  <td>
                    <span className={`text-xs font-mono px-2 py-1 ${
                      lead.source === 'local-ctv' ? 'bg-[var(--accent-muted)] text-[var(--accent)]' :
                      lead.source === 'cdp' ? 'bg-blue-500/20 text-blue-400' :
                      'bg-[var(--bg-surface)]'
                    }`}>
                      {lead.source}
                    </span>
                  </td>
                  <td className="text-xs text-[var(--text-tertiary)]">
                    {lead.geo ? `${lead.geo.city}, ${lead.geo.region}` : lead.ip}
                  </td>
                  <td>
                    <span className={`text-xs font-mono font-bold ${
                      lead.status === 'pending' ? 'text-[var(--accent)]' :
                      lead.status === 'contacted' ? 'text-yellow-500' :
                      lead.status === 'converted' ? 'text-green-500' :
                      'text-[var(--text-tertiary)]'
                    }`}>
                      {lead.status.toUpperCase()}
                    </span>
                  </td>
                  <td>
                    <button
                      onClick={() => setSelectedLead(lead)}
                      className="text-xs text-[var(--text-tertiary)] hover:text-[var(--text-primary)]"
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
              {leads.length === 0 && (
                <tr>
                  <td colSpan={7} className="text-center py-8 text-[var(--text-tertiary)]">
                    No leads found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Lead detail modal */}
        {selectedLead && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-8 z-50">
            <div className="bg-[var(--bg-elevated)] border-[3px] border-[var(--border)] p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-start mb-6">
                <h2 className="type-display-sm">{selectedLead.email}</h2>
                <button
                  onClick={() => setSelectedLead(null)}
                  className="text-[var(--text-tertiary)] hover:text-[var(--text-primary)] text-2xl"
                >
                  ×
                </button>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <span className="type-label block mb-1">Campaign</span>
                  <span className="font-mono">{selectedLead.campaign_id}</span>
                </div>
                <div>
                  <span className="type-label block mb-1">Source</span>
                  <span className="font-mono">{selectedLead.source}</span>
                </div>
                <div>
                  <span className="type-label block mb-1">Name</span>
                  <span>{selectedLead.name || '—'}</span>
                </div>
                <div>
                  <span className="type-label block mb-1">Submitted</span>
                  <span className="font-mono text-sm">{new Date(selectedLead.submitted_at).toLocaleString()}</span>
                </div>
              </div>

              {selectedLead.message && (
                <div className="mb-6">
                  <span className="type-label block mb-2">Message</span>
                  <p className="p-4 bg-[var(--bg-primary)] border border-[var(--border)]">
                    {selectedLead.message}
                  </p>
                </div>
              )}

              <div className="mb-6 p-4 border border-[var(--border)]">
                <span className="type-label block mb-2">Technical Details</span>
                <div className="text-xs font-mono text-[var(--text-tertiary)] space-y-1">
                  <p>IP: {selectedLead.ip}</p>
                  {selectedLead.geo && <p>Geo: {selectedLead.geo.city}, {selectedLead.geo.region}, {selectedLead.geo.country}</p>}
                  <p>Referer: {selectedLead.referer || 'Direct'}</p>
                  <p className="truncate">UA: {selectedLead.userAgent}</p>
                </div>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => updateLeadStatus(selectedLead._id, 'contacted')}
                  className="btn-secondary text-sm"
                >
                  Mark Contacted
                </button>
                <button
                  onClick={() => updateLeadStatus(selectedLead._id, 'converted')}
                  className="btn-primary text-sm"
                >
                  Mark Converted
                </button>
                <button
                  onClick={() => updateLeadStatus(selectedLead._id, 'lost')}
                  className="text-[var(--danger)] border border-[var(--danger)] px-4 py-2 text-sm font-mono"
                >
                  Mark Lost
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
