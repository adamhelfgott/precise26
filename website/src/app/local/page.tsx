'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { AuditIcon, VetoStamp, KeepStamp } from '@/components/Icons';
import { LocalTrader, NationalPlan, BudgetArrow, LocalStation, ProofBadge, ComicPanel } from '@/components/LocalIcons';

type FormState = 'idle' | 'submitting' | 'success' | 'error';

export default function LocalPage() {
  const heroRef = useRef<HTMLElement>(null);
  const comicRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLElement>(null);
  const isHeroInView = useInView(heroRef, { once: true });
  const isComicInView = useInView(comicRef, { once: true, margin: '-50px' });
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
          className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-20"
        >
          {/* Registration marks */}
          <div className="absolute top-6 left-6 reg-mark">+</div>
          <div className="absolute top-6 right-6 reg-mark">+</div>
          <div className="absolute bottom-6 left-6 reg-mark">+</div>
          <div className="absolute bottom-6 right-6 reg-mark">+</div>

          <div className="max-w-[1400px] mx-auto w-full pt-24 md:pt-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              {/* Badge */}
              <span className="type-label-accent mb-6 block">LOCAL CTV AGENCIES</span>

              {/* Giant headline */}
              <h1 className="type-display-md mb-6 max-w-4xl crooked-1">
                Your market just beat the national plan.{' '}
                <span className="text-[var(--accent)]">With proof.</span>
              </h1>

              {/* Sub */}
              <p className="type-body-lg text-[var(--text-secondary)] max-w-2xl mb-8">
                Local CTV agencies using Precise took{' '}
                <span className="text-[var(--accent)] font-bold">100%</span> of the 2026 auto budget
                from the national TTD plan.
              </p>

              {/* Proof stamp */}
              <div className="flex items-center gap-6 mb-8">
                <span className="stamp stamp-keep inline-block">VERIFIED</span>
                <span className="type-mono text-[var(--text-tertiary)]">
                  Q1 2026 • Midwest Auto Group
                </span>
              </div>
            </motion.div>

            {/* Hero stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
            >
              <div className="p-4 border-[3px] border-[var(--border)] bg-[var(--bg-elevated)]">
                <span className="type-label text-[var(--text-tertiary)] block mb-1">National TTD</span>
                <span className="font-mono text-2xl text-[var(--danger)] line-through">$0</span>
              </div>
              <div className="p-4 border-[3px] border-[var(--accent)] bg-[var(--accent-muted)]">
                <span className="type-label text-[var(--accent)] block mb-1">Local Precise</span>
                <span className="font-mono text-2xl text-[var(--accent)]">$340K</span>
              </div>
              <div className="p-4 border-[3px] border-[var(--border)] bg-[var(--bg-elevated)]">
                <span className="type-label text-[var(--text-tertiary)] block mb-1">ROAS Lift</span>
                <span className="font-mono text-2xl text-[var(--accent)]">+47%</span>
              </div>
              <div className="p-4 border-[3px] border-[var(--border)] bg-[var(--bg-elevated)]">
                <span className="type-label text-[var(--text-tertiary)] block mb-1">Markets</span>
                <span className="font-mono text-2xl text-[var(--text-primary)]">12 DMAs</span>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <a href="#audit-form" className="btn-primary">
                Run Your Free Local Audit
              </a>
            </motion.div>
          </div>

          {/* Bottom bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isHeroInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="absolute bottom-0 left-0 right-0 border-t-[3px] border-[var(--border)]"
          >
            <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 py-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <span className="type-label">Beat national plans with local precision</span>
                <span className="type-label text-[var(--accent)]">Cryptographic proof of performance</span>
              </div>
            </div>
          </motion.div>
        </section>

        {/* 12-Panel Comic Section */}
        <section
          ref={comicRef}
          className="section bg-[var(--bg-surface)] border-t-[3px] border-[var(--border)]"
        >
          <div className="max-w-[1200px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isComicInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <span className="type-label-accent mb-4 block">THE STORY</span>
              <h2 className="type-display-sm mb-4">
                How Local Stole the Budget
              </h2>
              <p className="text-[var(--text-secondary)] max-w-lg">
                A 12-panel tale of data transparency, verifiable proof, and a very nervous national buyer.
              </p>
            </motion.div>

            {/* 12-Panel Grid */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isComicInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
            >
              <ComicPanel number={1}>
                <NationalPlan className="w-12 h-12 mx-auto mb-2" />
                <p className="text-xs text-center text-[var(--text-secondary)]">
                  National agency lands $340K auto budget. Plans TTD buy.
                </p>
              </ComicPanel>

              <ComicPanel number={2}>
                <div className="text-center mb-2">
                  <span className="font-mono text-2xl text-[var(--danger)]">52</span>
                </div>
                <p className="text-xs text-center text-[var(--text-secondary)]">
                  TTD appends 52 segments. Client asked for 4.
                </p>
              </ComicPanel>

              <ComicPanel number={3}>
                <LocalStation className="w-12 h-12 mx-auto mb-2" />
                <p className="text-xs text-center text-[var(--text-secondary)]">
                  Local agency hears about the buy. Smells opportunity.
                </p>
              </ComicPanel>

              <ComicPanel number={4}>
                <AuditIcon className="w-10 h-10 mx-auto mb-2" />
                <p className="text-xs text-center text-[var(--text-secondary)]">
                  Local runs free Precise audit. Finds $14K/mo waste.
                </p>
              </ComicPanel>

              <ComicPanel number={5}>
                <VetoStamp className="w-16 h-8 mx-auto mb-2" />
                <p className="text-xs text-center text-[var(--text-secondary)]">
                  39 segments vetoed. Zero incremental lift proven.
                </p>
              </ComicPanel>

              <ComicPanel number={6}>
                <ProofBadge className="w-12 h-12 mx-auto mb-2" />
                <p className="text-xs text-center text-[var(--text-secondary)]">
                  Cryptographic proof generated. Can&apos;t be disputed.
                </p>
              </ComicPanel>

              <ComicPanel number={7}>
                <div className="text-center">
                  <span className="font-mono text-lg text-[var(--accent)]">+47%</span>
                  <span className="block text-xs text-[var(--text-secondary)]">ROAS</span>
                </div>
                <p className="text-xs text-center text-[var(--text-secondary)] mt-2">
                  Local plan projects 47% better ROAS. Math, not promises.
                </p>
              </ComicPanel>

              <ComicPanel number={8}>
                <LocalTrader className="w-12 h-12 mx-auto mb-2" />
                <p className="text-xs text-center text-[var(--text-secondary)]">
                  Local pitches CMO directly. Shows the proof.
                </p>
              </ComicPanel>

              <ComicPanel number={9}>
                <div className="text-center mb-2">
                  <span className="text-2xl">🤔</span>
                </div>
                <p className="text-xs text-center text-[var(--text-secondary)]">
                  CMO asks national: &quot;Why are we paying for 52 segments?&quot;
                </p>
              </ComicPanel>

              <ComicPanel number={10}>
                <div className="text-center mb-2">
                  <span className="text-2xl">😰</span>
                </div>
                <p className="text-xs text-center text-[var(--text-secondary)]">
                  National can&apos;t explain. No proof. Just &quot;trust us.&quot;
                </p>
              </ComicPanel>

              <ComicPanel number={11}>
                <BudgetArrow className="w-full h-8 mx-auto mb-2" />
                <p className="text-xs text-center text-[var(--text-secondary)]">
                  Budget moves to local. 100% of $340K.
                </p>
              </ComicPanel>

              <ComicPanel number={12} className="border-[var(--accent)] bg-[var(--accent-muted)]">
                <KeepStamp className="w-16 h-8 mx-auto mb-2" />
                <p className="text-xs text-center text-[var(--text-primary)] font-semibold">
                  Local wins. Proof wins. You could be next.
                </p>
              </ComicPanel>
            </motion.div>

            {/* Moral */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isComicInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12 p-8 border-[3px] border-[var(--border)]"
            >
              <div className="flex items-start gap-6">
                <ProofBadge className="w-16 h-16 flex-shrink-0 hidden md:block" />
                <div>
                  <h3 className="type-display-sm mb-3">The moral?</h3>
                  <p className="text-[var(--text-secondary)] text-lg">
                    National agencies rely on &quot;trust us&quot; reporting. Local agencies with Precise
                    have <span className="text-[var(--accent)] font-semibold">verifiable proof</span> that
                    holds up in the CMO&apos;s office. When performance is provable, budgets move.
                  </p>
                </div>
              </div>
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
                    We&apos;ll analyze your local CTV campaigns and show you exactly where national plans
                    are vulnerable—and where you can win.
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
                    Local audit queued — report in &lt;48h
                  </h3>
                  <p className="text-[var(--text-secondary)]">
                    We&apos;ll analyze your local performance data and send you a detailed report showing
                    where you can outperform national plans. No sales call unless you ask.
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
                      <label className="type-label block mb-2">Campaign / DMA *</label>
                      <input
                        type="text"
                        required
                        placeholder="Detroit_Auto_Q1"
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
                      {formState === 'submitting' ? 'Submitting...' : 'Run Your Free Local Audit'}
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
