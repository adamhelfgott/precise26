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
              <h1 className="type-display-md mb-6 max-w-4xl crooked-1">
                Your market can beat the national plan.{' '}
                <span className="text-[var(--accent)]">With proof.</span>
              </h1>

              {/* Sub */}
              <p className="type-body-lg text-[var(--text-secondary)] max-w-2xl mb-8">
                This is already happening in real local CTV campaigns.
              </p>
            </motion.div>
          </div>
        </section>

        {/* The Story Section */}
        <section
          ref={storyRef}
          className="section bg-[var(--bg-surface)] border-t-[3px] border-[var(--border)]"
        >
          <div className="max-w-[1000px] mx-auto">
            {/* The Problem */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isStoryInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <p className="text-xl text-[var(--text-secondary)] mb-8">
                National plans run dozens of segments — many auto-appended, many low-lift, many impossible to justify to the client.
              </p>

              <p className="text-xl text-[var(--text-primary)] font-semibold mb-8">
                Local agencies running Precise + MadHive do it differently:
              </p>
            </motion.div>

            {/* The Process */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isStoryInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-12 p-8 border-[3px] border-[var(--accent)] bg-[var(--accent-muted)]"
            >
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <span className="text-[var(--accent)] font-mono font-bold text-xl">→</span>
                  <p className="text-[var(--text-primary)] text-lg">
                    Every segment is scored for actual contribution before the buy
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <VetoStamp className="w-16 h-8 flex-shrink-0" />
                  <p className="text-[var(--text-primary)] text-lg">
                    Low-lift and redundant segments are vetoed in real time{' '}
                    <span className="text-[var(--accent)] font-mono">(average 35–47% of data spend eliminated in live flights)</span>
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <KeepStamp className="w-16 h-8 flex-shrink-0" />
                  <p className="text-[var(--text-primary)] text-lg">
                    Only proven segments stay — each one Valence-signed with its real-world lift
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <WaxSeal className="w-8 h-8 flex-shrink-0" />
                  <p className="text-[var(--text-primary)] text-lg">
                    Audience is split hyper-locally <span className="font-mono text-[var(--accent)]">(200+ DMAs)</span> for maximum relevance
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-[var(--accent)] font-mono font-bold text-xl">$</span>
                  <p className="text-[var(--text-primary)] text-lg">
                    Budget is routed to the highest-performing inventory paths
                  </p>
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
              <h3 className="type-label-accent mb-6">Result in real campaigns:</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-6 border-[3px] border-[var(--accent)] bg-[var(--bg-elevated)]">
                  <span className="font-mono text-3xl font-bold text-[var(--accent)]">2×</span>
                  <p className="text-[var(--text-secondary)] mt-2">
                    Local ROAS consistently outperforms national by double-digit percentages
                  </p>
                </div>
                <div className="p-6 border-[3px] border-[var(--accent)] bg-[var(--bg-elevated)]">
                  <span className="font-mono text-3xl font-bold text-[var(--accent)]">35–47%</span>
                  <p className="text-[var(--text-secondary)] mt-2">
                    Waste reduced
                  </p>
                </div>
                <div className="p-6 border-[3px] border-[var(--accent)] bg-[var(--bg-elevated)]">
                  <span className="font-mono text-3xl font-bold text-[var(--accent)]">1 slide</span>
                  <p className="text-[var(--text-secondary)] mt-2">
                    Valence proof that holds up in any client review
                  </p>
                </div>
              </div>
            </motion.div>

            {/* The Moral */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isStoryInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-12"
            >
              <div className="grid md:grid-cols-2 gap-8">
                <div className="p-6 border-l-[6px] border-[var(--danger)]">
                  <p className="text-xl text-[var(--text-secondary)]">
                    National plans rely on <span className="text-[var(--danger)] font-bold">&quot;trust us.&quot;</span>
                  </p>
                </div>
                <div className="p-6 border-l-[6px] border-[var(--accent)]">
                  <p className="text-xl text-[var(--text-primary)]">
                    Local plans with Precise <span className="text-[var(--accent)] font-bold">bring the receipt.</span>
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Final CTA line */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isStoryInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="p-8 border-[3px] border-[var(--border)] bg-[var(--bg-elevated)]"
            >
              <p className="text-xl text-[var(--text-primary)] font-bold mb-4">
                That receipt is how local teams are taking budget from national desks — right now.
              </p>
              <p className="text-lg text-[var(--text-secondary)]">
                Run your free local audit. See your own numbers in 48 hours.
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
                    See your own numbers in 48 hours. No sales call unless you ask.
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
