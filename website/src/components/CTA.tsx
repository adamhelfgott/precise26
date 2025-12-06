'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { AuditIcon } from './Icons';

type FormState = 'idle' | 'submitting' | 'success' | 'error';

export default function CTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const [formState, setFormState] = useState<FormState>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState({
    email: '',
    campaign_id: '',
    name: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    setErrorMessage('');

    try {
      const response = await fetch('/api/audit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, source: 'main' }),
      });

      const data = await response.json();

      if (data.success) {
        setFormState('success');
        setFormData({ email: '', campaign_id: '', name: '', message: '' });
      } else {
        setFormState('error');
        setErrorMessage(data.error || 'Something went wrong');
      }
    } catch {
      setFormState('error');
      setErrorMessage('Network error. Please try again or email hello@precise.ai');
    }
  };

  return (
    <section ref={sectionRef} id="contact" className="section bg-[var(--bg-surface)] border-t-[3px] border-[var(--border)]">
      <div className="max-w-[900px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="flex items-start gap-6 mb-12">
            <div className="hidden md:block w-16 h-20">
              <AuditIcon className="w-full h-full" />
            </div>
            <div>
              <span className="type-label-accent mb-4 block">Free Waste Audit</span>
              <h2 className="type-display-md mb-4">
                Request Your Report
              </h2>
              <p className="text-[var(--text-secondary)] text-lg max-w-lg">
                We&apos;ll analyze your campaign data and show you exactly where money is being wasted on segments that add zero value.
              </p>
            </div>
          </div>

          {/* Review season line */}
          <p className="text-[var(--text-primary)] font-bold mb-8 mt-4" style={{ fontSize: '24px' }}>
            For agencies in review: get the one-slide proof before your next deck is due.
          </p>

          {/* Success State */}
          {formState === 'success' ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-[var(--accent-muted)] border-[3px] border-[var(--accent)] p-8 md:p-12"
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="stamp stamp-keep text-lg">QUEUED</span>
              </div>
              <h3 className="type-display-sm text-[var(--accent)] mb-4">
                Audit queued — report in &lt;48h
              </h3>
              <p className="text-[var(--text-secondary)]">
                We&apos;ll analyze your data and send you a detailed waste report. No sales call unless you ask for one.
              </p>
            </motion.div>
          ) : (
            /* Form */
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Email */}
                <div>
                  <label className="type-label block mb-2">Email *</label>
                  <input
                    type="email"
                    required
                    placeholder="you@agency.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="input-field"
                    disabled={formState === 'submitting'}
                  />
                </div>

                {/* Campaign ID */}
                <div>
                  <label className="type-label block mb-2">Campaign ID or Name <span className="text-[var(--text-tertiary)]">(optional)</span></label>
                  <input
                    type="text"
                    placeholder="e.g. 2025_Q4_Nissan or just leave blank"
                    value={formData.campaign_id}
                    onChange={(e) => setFormData({ ...formData, campaign_id: e.target.value })}
                    className="input-field"
                    disabled={formState === 'submitting'}
                  />
                </div>
              </div>

              {/* Name (optional) */}
              <div>
                <label className="type-label block mb-2">Your Name <span className="text-[var(--text-tertiary)]">(optional)</span></label>
                <input
                  type="text"
                  placeholder="Jane Smith"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="input-field"
                  disabled={formState === 'submitting'}
                />
              </div>

              {/* Message (optional) */}
              <div>
                <label className="type-label block mb-2">Context <span className="text-[var(--text-tertiary)]">(optional)</span></label>
                <textarea
                  placeholder="What DSP are you using? Any specific concerns?"
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="input-field resize-none"
                  disabled={formState === 'submitting'}
                />
              </div>

              {/* Error message */}
              {formState === 'error' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="bg-[var(--danger-muted)] border-[3px] border-[var(--danger)] p-4"
                >
                  <p className="type-label-danger">{errorMessage}</p>
                </motion.div>
              )}

              {/* Submit */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-4">
                <button
                  type="submit"
                  disabled={formState === 'submitting'}
                  className="btn-primary"
                >
                  {formState === 'submitting' ? 'Submitting...' : 'Request Free Audit'}
                </button>
                <span className="text-[var(--text-tertiary)] text-sm">
                  No sales call unless you ask.
                </span>
              </div>
            </form>
          )}

          {/* Bottom info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16 pt-8 border-t-[3px] border-[var(--border)]"
          >
            <div className="flex flex-col sm:flex-row justify-between gap-6">
              <div className="flex flex-col sm:flex-row gap-8 sm:gap-16">
                <div>
                  <span className="type-label block mb-1">Timeline</span>
                  <span className="type-mono text-[var(--text-primary)]">&lt;48 hours</span>
                </div>
                <div>
                  <span className="type-label block mb-1">Pilot</span>
                  <span className="type-mono text-[var(--text-primary)]">45 days, no lock-in</span>
                </div>
                <div>
                  <span className="type-label block mb-1">Cost</span>
                  <span className="type-mono text-[var(--accent)]">Free audit</span>
                </div>
              </div>
              <div className="text-right">
                <span className="type-label block mb-1">Direct</span>
                <a href="mailto:hello@precise.ai" className="type-mono text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors">
                  hello@precise.ai
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
