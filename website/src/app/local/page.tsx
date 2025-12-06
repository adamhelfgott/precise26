'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { AuditIcon, VetoStamp, KeepStamp, WaxSeal } from '@/components/Icons';

type FormState = 'idle' | 'submitting' | 'success' | 'error';

export default function LocalPage() {
  const heroRef = useRef<HTMLElement>(null);
  const storyRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLElement>(null);
  const isHeroInView = useInView(heroRef, { once: true });
  const isStoryInView = useInView(storyRef, { once: true, margin: '-50px' });
  const isFormInView = useInView(formRef, { once: true, margin: '-50px' });

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
        body: JSON.stringify({ ...formData, source: 'local-ctv' }),
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
      setErrorMessage('Network error. Please try again.');
    }
  };

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section
          ref={heroRef}
          className="relative min-h-[70vh] flex flex-col justify-center px-6 md:px-12 lg:px-20 py-24"
        >
          {/* Registration marks */}
          <div className="absolute top-6 left-6 reg-mark">+</div>
          <div className="absolute top-6 right-6 reg-mark">+</div>
          <div className="absolute bottom-6 left-6 reg-mark">+</div>
          <div className="absolute bottom-6 right-6 reg-mark">+</div>

          <div className="max-w-[1400px] mx-auto w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              {/* Badge */}
              <span className="type-label-accent mb-6 block">LOCAL CTV AGENCIES</span>

              {/* Giant headline */}
              <h1 className="type-display-md mb-4 max-w-4xl crooked-1">
                Your market doesn&apos;t just compete with national.
              </h1>
              <h1 className="type-display-md mb-8 max-w-4xl">
                It <span className="text-[var(--accent)]">beats national.</span> With proof.
              </h1>
            </motion.div>
          </div>
        </section>

        {/* The Story Section */}
        <section
          ref={storyRef}
          className="section bg-[var(--bg-surface)] border-t-[3px] border-[var(--border)]"
        >
          <div className="max-w-[1000px] mx-auto">
            {/* National Problem */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isStoryInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <p className="text-xl text-[var(--text-secondary)] mb-6">
                National plans paint with a broad brush:
              </p>
              <div className="p-6 border-l-[6px] border-[var(--danger)] bg-[var(--bg-elevated)]">
                <ul className="space-y-3 text-lg text-[var(--text-secondary)]">
                  <li className="flex items-start gap-3">
                    <span className="text-[var(--danger)] font-mono">•</span>
                    <span>40–70 segments, most auto-appended</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[var(--danger)] font-mono">•</span>
                    <span>Same creative and targeting in New York and rural Ohio</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[var(--danger)] font-mono">•</span>
                    <span><span className="text-[var(--danger)] font-bold">&quot;trust us&quot;</span> reporting</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Local Solution */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isStoryInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-12"
            >
              <p className="text-xl text-[var(--text-primary)] font-semibold mb-6">
                Local agencies running Precise + MadHive do the opposite:
              </p>

              <div className="p-8 border-[3px] border-[var(--accent)] bg-[var(--accent-muted)]">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="text-[var(--accent)] font-mono font-bold text-xl">→</span>
                    <p className="text-[var(--text-primary)] text-lg">
                      We split every campaign into <span className="font-bold">thousands of micro-markets by ZIP code and micro-demographic cohorts</span> (down to the neighborhood level)
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <VetoStamp className="w-16 h-8 flex-shrink-0" />
                    <p className="text-[var(--text-primary)] text-lg">
                      Every micro-market gets its own segment veto and budget allocation in real time
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <KeepStamp className="w-16 h-8 flex-shrink-0" />
                    <p className="text-[var(--text-primary)] text-lg">
                      Only the highest-lift segments survive — <span className="font-mono text-[var(--accent)]">average 35–47% of data waste eliminated</span>
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <WaxSeal className="w-8 h-8 flex-shrink-0" />
                    <p className="text-[var(--text-primary)] text-lg">
                      Every kept segment is Valence-signed with its actual contribution
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-[var(--accent)] font-mono font-bold text-xl">◆</span>
                    <p className="text-[var(--text-primary)] text-lg">
                      <span className="font-bold">MadHive</span> — the best local CTV DSP in America — distributes perfectly into these micro-markets at scale
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Results */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isStoryInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-12"
            >
              <h3 className="type-label-accent mb-6">Result in live local campaigns:</h3>
              <div className="p-6 border-[3px] border-[var(--accent)] bg-[var(--bg-elevated)]">
                <p className="text-xl text-[var(--text-primary)] mb-4">
                  Local consistently outperforms national plans by <span className="font-bold text-[var(--accent)]">double-digit ROAS percentages.</span>
                </p>
                <p className="text-lg text-[var(--text-secondary)]">
                  One-slide Valence receipt proves it.
                </p>
              </div>
            </motion.div>

            {/* Final CTA line */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isStoryInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="p-8 border-[3px] border-[var(--border)] bg-[var(--bg-elevated)]"
            >
              <p className="text-xl text-[var(--text-primary)] font-bold mb-6">
                That receipt is how local teams are pulling budget away from national desks — right now.
              </p>
              <p className="text-lg text-[var(--text-secondary)] mb-2">
                Run your free local audit.
              </p>
              <p className="text-lg text-[var(--text-secondary)]">
                See your own micro-market numbers in 48 hours.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Audit Form Section */}
        <section
          ref={formRef}
          id="audit-form"
          className="section bg-[var(--bg-primary)] border-t-[3px] border-[var(--border)]"
        >
          <div className="max-w-[900px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isFormInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              {/* Header */}
              <div className="flex items-start gap-6 mb-12">
                <div className="hidden md:block w-16 h-20">
                  <AuditIcon className="w-full h-full" />
                </div>
                <div>
                  <span className="type-label-accent mb-4 block">Free Local Performance Audit</span>
                  <h2 className="type-display-md mb-4">
                    Run Your Free Local Audit
                  </h2>
                  <p className="text-[var(--text-secondary)] text-lg max-w-lg">
                    See your own micro-market numbers in 48 hours. No sales call unless you ask.
                  </p>
                </div>
              </div>

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
                    Queued — 48h receipt. No sales call.
                  </h3>
                  <p className="text-[var(--text-secondary)]">
                    We&apos;ll analyze your local performance data and send you a detailed report showing
                    where you can outperform national plans.
                  </p>
                </motion.div>
              ) : (
                /* Form */
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="type-label block mb-2">Email *</label>
                      <input
                        type="email"
                        required
                        placeholder="you@localagency.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="input-field"
                        disabled={formState === 'submitting'}
                      />
                    </div>
                    <div>
                      <label className="type-label block mb-2">
                        Campaign ID or Name <span className="text-[var(--text-tertiary)]">(optional)</span>
                      </label>
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

                  <div>
                    <label className="type-label block mb-2">
                      Your Name <span className="text-[var(--text-tertiary)]">(optional)</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Jane Smith"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="input-field"
                      disabled={formState === 'submitting'}
                    />
                  </div>

                  <div>
                    <label className="type-label block mb-2">
                      Context <span className="text-[var(--text-tertiary)]">(optional)</span>
                    </label>
                    <textarea
                      placeholder="Which verticals? Any specific national competitors you're up against?"
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="input-field resize-none"
                      disabled={formState === 'submitting'}
                    />
                  </div>

                  {formState === 'error' && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="bg-[var(--danger-muted)] border-[3px] border-[var(--danger)] p-4"
                    >
                      <p className="type-label-danger">{errorMessage}</p>
                    </motion.div>
                  )}

                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-4">
                    <button
                      type="submit"
                      disabled={formState === 'submitting'}
                      className="btn-primary"
                    >
                      {formState === 'submitting' ? 'Submitting...' : 'Free Local Performance Audit'}
                    </button>
                    <span className="text-[var(--text-tertiary)] text-sm">
                      48 hours. No sales call.
                    </span>
                  </div>
                </form>
              )}

              {/* Bottom info */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={isFormInView ? { opacity: 1 } : {}}
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
                    <a
                      href="mailto:local@precise.ai"
                      className="type-mono text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors"
                    >
                      local@precise.ai
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
