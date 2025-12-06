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
                Your market can beat the national plan.{' '}
                <span className="text-[var(--accent)]">With proof.</span>
              </h1>

              {/* Sub */}
              <p className="type-body-lg text-[var(--text-secondary)] max-w-2xl mb-8">
                This already happened with the{' '}
                <span className="text-[var(--text-primary)] font-bold">Chicago Cubs.</span>
              </p>

              {/* Proof stamp */}
              <div className="flex items-center gap-6 mb-8">
                <span className="stamp stamp-keep inline-block">VERIFIED</span>
                <span className="type-mono text-[var(--text-tertiary)]">
                  Chicago Cubs • $10M Sponsorship Campaign
                </span>
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

        {/* Chicago Cubs Story Section */}
        <section
          ref={storyRef}
          className="section bg-[var(--bg-surface)] border-t-[3px] border-[var(--border)]"
        >
          <div className="max-w-[1200px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isStoryInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <span className="type-label-accent mb-4 block">THE REAL STORY</span>
              <h2 className="type-display-sm mb-4">
                Chicago Cubs • $10M Sponsorship Campaign
              </h2>
            </motion.div>

            {/* The Setup */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isStoryInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-8 p-6 border-[3px] border-[var(--border)] bg-[var(--bg-elevated)]"
            >
              <p className="text-lg text-[var(--text-secondary)] mb-6">
                Cubs marketing ran a <span className="text-[var(--text-primary)] font-bold">$10M sponsorship campaign.</span>
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-4 border-l-[3px] border-[var(--danger)]">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-mono font-bold text-[var(--danger)]">National TTD Plan</span>
                    <span className="font-mono text-xl text-[var(--danger)]">$8M</span>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)]">
                    52 segments, most auto-appended by Koa
                  </p>
                </div>
                <div className="p-4 border-l-[3px] border-[var(--accent)]">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-mono font-bold text-[var(--accent)]">Local CTV</span>
                    <span className="font-mono text-xl text-[var(--accent)]">$2M</span>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)]">
                    Through MadHive
                  </p>
                </div>
              </div>
            </motion.div>

            {/* What Precise + MadHive Did */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isStoryInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8 p-6 border-[3px] border-[var(--accent)] bg-[var(--accent-muted)]"
            >
              <h3 className="font-mono font-bold text-[var(--accent)] mb-6">
                Precise + MadHive ran the local flight:
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <VetoStamp className="w-16 h-8 flex-shrink-0" />
                  <p className="text-[var(--text-primary)]">
                    Vetoed <span className="font-bold">39 low-lift segments</span> → saved <span className="font-mono font-bold text-[var(--accent)]">$720K</span>
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <KeepStamp className="w-16 h-8 flex-shrink-0" />
                  <p className="text-[var(--text-primary)]">
                    Kept <span className="font-bold">13 proven segments</span> (Valence-signed)
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <WaxSeal className="w-8 h-8 flex-shrink-0" />
                  <p className="text-[var(--text-primary)]">
                    Split into <span className="font-bold">220 DMAs</span>
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="font-mono text-2xl text-[var(--accent)] w-8 text-center">↑</span>
                  <p className="text-[var(--text-primary)]">
                    ROAS <span className="font-mono font-bold text-[var(--accent)]">1.6×</span> vs national <span className="font-mono text-[var(--danger)]">1.1×</span>
                  </p>
                </div>
              </div>
            </motion.div>

            {/* The Result */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isStoryInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-8 p-6 border-[3px] border-[var(--border)] bg-[var(--bg-elevated)]"
            >
              <p className="text-lg text-[var(--text-secondary)] mb-4">
                Cubs leadership saw the <span className="text-[var(--accent)] font-bold">one-slide Valence receipt.</span>
              </p>
              <div className="p-6 bg-[var(--bg-surface)] border-[3px] border-[var(--accent)]">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <span className="type-label text-[var(--danger)] block mb-1">National TTD Budget</span>
                    <span className="font-mono text-3xl font-bold text-[var(--danger)]">-60%</span>
                  </div>
                  <div>
                    <span className="type-label text-[var(--accent)] block mb-1">Local Budget</span>
                    <span className="font-mono text-3xl font-bold text-[var(--accent)]">2×</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* The Moral */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isStoryInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="p-8 border-l-[6px] border-[var(--accent)]"
            >
              <p className="text-xl text-[var(--text-primary)] font-bold mb-4">
                Local didn&apos;t just save money.
              </p>
              <p className="text-xl text-[var(--text-primary)] font-bold mb-6">
                Local took the national budget — <span className="text-[var(--accent)]">with proof.</span>
              </p>
              <p className="text-lg text-[var(--text-secondary)]">
                Your market can do the same.
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
