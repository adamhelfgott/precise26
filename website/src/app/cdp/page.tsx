'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { WaxSeal } from '@/components/Icons';
import { CDPIcon, GovernIcon, ValenceIcon, LiftIcon, FlowArrow, PartnerHandshake } from '@/components/CDPIcons';

export default function CDPPage() {
  const heroRef = useRef<HTMLElement>(null);
  const diagramRef = useRef<HTMLElement>(null);
  const benefitsRef = useRef<HTMLElement>(null);
  const ctaRef = useRef<HTMLElement>(null);
  const isHeroInView = useInView(heroRef, { once: true });
  const isDiagramInView = useInView(diagramRef, { once: true, margin: '-50px' });
  const isBenefitsInView = useInView(benefitsRef, { once: true, margin: '-50px' });
  const isCtaInView = useInView(ctaRef, { once: true, margin: '-50px' });

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
              <span className="type-label-accent mb-6 block">CDP PARTNERS</span>

              {/* Giant headline */}
              <h1 className="type-display-md mb-6 max-w-4xl crooked-1">
                Turn clean audiences into{' '}
                <span className="text-[var(--accent)]">proven ROAS.</span>
              </h1>

              {/* Sub */}
              <p className="type-body-lg text-[var(--text-secondary)] max-w-2xl mb-8">
                Every CDP customer asks:{' '}
                <span className="text-[var(--text-primary)]">
                  &quot;What happens after my audience hits the DSP?&quot;
                </span>
                <br />
                Precise is the answer.
              </p>

              {/* Proof stamp */}
              <div className="flex items-center gap-6 mb-8">
                <span className="stamp stamp-keep inline-block">PARTNER</span>
                <span className="type-mono text-[var(--text-tertiary)]">
                  Embedded integration • White-label available
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
              <div className="p-4 border-[3px] border-[var(--accent)] bg-[var(--accent-muted)]">
                <span className="type-label text-[var(--accent)] block mb-1">ROAS Lift</span>
                <span className="font-mono text-2xl text-[var(--accent)]">29–41%</span>
              </div>
              <div className="p-4 border-[3px] border-[var(--border)] bg-[var(--bg-elevated)]">
                <span className="type-label text-[var(--text-tertiary)] block mb-1">Waste Cut</span>
                <span className="font-mono text-2xl text-[var(--text-primary)]">$18K/mo</span>
              </div>
              <div className="p-4 border-[3px] border-[var(--border)] bg-[var(--bg-elevated)]">
                <span className="type-label text-[var(--text-tertiary)] block mb-1">Integration</span>
                <span className="font-mono text-2xl text-[var(--text-primary)]">&lt;2 weeks</span>
              </div>
              <div className="p-4 border-[3px] border-[var(--border)] bg-[var(--bg-elevated)]">
                <span className="type-label text-[var(--text-tertiary)] block mb-1">Proof</span>
                <span className="font-mono text-2xl text-[var(--accent)]">Crypto</span>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <a
                href="https://calendly.com/precise-ai/partner-demo"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Schedule 15-min Partner Demo
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
                <span className="type-label">Extend your CDP with media intelligence</span>
                <span className="type-label text-[var(--accent)]">White-label or co-branded</span>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Integration Diagram Section */}
        <section
          ref={diagramRef}
          className="section bg-[var(--bg-surface)] border-t-[3px] border-[var(--border)]"
        >
          <div className="max-w-[1200px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isDiagramInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <span className="type-label-accent mb-4 block">THE INTEGRATION</span>
              <h2 className="type-display-sm mb-4">
                From Clean Audience to Proven Lift
              </h2>
              <p className="text-[var(--text-secondary)] max-w-lg">
                Your CDP builds the audience. Precise proves what it&apos;s worth.
              </p>
            </motion.div>

            {/* Integration Flow Diagram */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isDiagramInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-12"
            >
              {/* Desktop Flow */}
              <div className="hidden md:flex items-center justify-between gap-4 p-8 border-[3px] border-[var(--border)] bg-[var(--bg-elevated)]">
                {/* CDP */}
                <div className="flex flex-col items-center text-center flex-1">
                  <CDPIcon className="w-20 h-20 mb-4" />
                  <span className="type-label text-[var(--text-primary)] block mb-2">Your CDP</span>
                  <p className="text-xs text-[var(--text-tertiary)]">
                    Clean first-party<br />audiences
                  </p>
                </div>

                <FlowArrow className="w-12 h-6 flex-shrink-0" />

                {/* Govern */}
                <div className="flex flex-col items-center text-center flex-1">
                  <GovernIcon className="w-20 h-20 mb-4" />
                  <span className="type-label text-[var(--accent)] block mb-2">Precise Govern</span>
                  <p className="text-xs text-[var(--text-tertiary)]">
                    Veto garbage segments<br />before spend
                  </p>
                </div>

                <FlowArrow className="w-12 h-6 flex-shrink-0" />

                {/* Valence */}
                <div className="flex flex-col items-center text-center flex-1">
                  <ValenceIcon className="w-20 h-20 mb-4" />
                  <span className="type-label text-[var(--accent)] block mb-2">Valence Proof</span>
                  <p className="text-xs text-[var(--text-tertiary)]">
                    Cryptographic proof<br />of performance
                  </p>
                </div>

                <FlowArrow className="w-12 h-6 flex-shrink-0" />

                {/* Lift */}
                <div className="flex flex-col items-center text-center flex-1 p-4 border-[3px] border-[var(--accent)] bg-[var(--accent-muted)]">
                  <LiftIcon className="w-20 h-16 mb-4" />
                  <span className="type-label text-[var(--accent)] block mb-2">Proven Lift</span>
                  <p className="text-sm font-mono text-[var(--accent)] font-bold">
                    29–41%
                  </p>
                </div>
              </div>

              {/* Mobile Flow - Stacked */}
              <div className="md:hidden space-y-4">
                <div className="p-6 border-[3px] border-[var(--border)] bg-[var(--bg-elevated)] flex items-center gap-4">
                  <CDPIcon className="w-16 h-16 flex-shrink-0" />
                  <div>
                    <span className="type-label text-[var(--text-primary)] block mb-1">Your CDP</span>
                    <p className="text-xs text-[var(--text-tertiary)]">Clean first-party audiences</p>
                  </div>
                </div>

                <div className="flex justify-center">
                  <FlowArrow className="w-8 h-8 rotate-90" />
                </div>

                <div className="p-6 border-[3px] border-[var(--accent)] bg-[var(--bg-elevated)] flex items-center gap-4">
                  <GovernIcon className="w-16 h-16 flex-shrink-0" />
                  <div>
                    <span className="type-label text-[var(--accent)] block mb-1">Precise Govern</span>
                    <p className="text-xs text-[var(--text-tertiary)]">Veto garbage segments before spend</p>
                  </div>
                </div>

                <div className="flex justify-center">
                  <FlowArrow className="w-8 h-8 rotate-90" />
                </div>

                <div className="p-6 border-[3px] border-[var(--accent)] bg-[var(--bg-elevated)] flex items-center gap-4">
                  <ValenceIcon className="w-16 h-16 flex-shrink-0" />
                  <div>
                    <span className="type-label text-[var(--accent)] block mb-1">Valence Proof</span>
                    <p className="text-xs text-[var(--text-tertiary)]">Cryptographic proof of performance</p>
                  </div>
                </div>

                <div className="flex justify-center">
                  <FlowArrow className="w-8 h-8 rotate-90" />
                </div>

                <div className="p-6 border-[3px] border-[var(--accent)] bg-[var(--accent-muted)] flex items-center gap-4">
                  <LiftIcon className="w-16 h-12 flex-shrink-0" />
                  <div>
                    <span className="type-label text-[var(--accent)] block mb-1">Proven Lift</span>
                    <span className="font-mono text-xl text-[var(--accent)] font-bold">29–41%</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Technical details */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isDiagramInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid md:grid-cols-3 gap-6"
            >
              <div className="p-6 border-[3px] border-[var(--border)]">
                <span className="type-label text-[var(--accent)] block mb-3">API Integration</span>
                <p className="text-sm text-[var(--text-secondary)] mb-4">
                  REST API with segment-level scoring. Real-time or batch.
                </p>
                <code className="text-xs font-mono text-[var(--text-tertiary)] block bg-[var(--bg-primary)] p-2">
                  POST /v1/govern/score
                </code>
              </div>

              <div className="p-6 border-[3px] border-[var(--border)]">
                <span className="type-label text-[var(--accent)] block mb-3">White Label</span>
                <p className="text-sm text-[var(--text-secondary)] mb-4">
                  Your brand, our engine. Customers never see Precise.
                </p>
                <span className="type-label text-[var(--text-tertiary)]">
                  Custom domain • Your logo • Your colors
                </span>
              </div>

              <div className="p-6 border-[3px] border-[var(--border)]">
                <span className="type-label text-[var(--accent)] block mb-3">Revenue Share</span>
                <p className="text-sm text-[var(--text-secondary)] mb-4">
                  Earn on every activation. Aligned incentives.
                </p>
                <span className="font-mono text-lg text-[var(--accent)]">
                  20–30% partner margin
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section
          ref={benefitsRef}
          className="section bg-[var(--bg-primary)] border-t-[3px] border-[var(--border)]"
        >
          <div className="max-w-[1200px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isBenefitsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <span className="type-label-accent mb-4 block">WHY PARTNER</span>
              <h2 className="type-display-sm mb-4">
                Answer the Question Your Customers Keep Asking
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isBenefitsInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid md:grid-cols-2 gap-8"
            >
              {/* Left column - The problem */}
              <div className="p-8 border-[3px] border-[var(--danger)] bg-[var(--danger-muted)]">
                <span className="type-label-danger mb-6 block">Without Precise</span>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-[var(--danger)] font-mono font-bold">✗</span>
                    <span className="text-[var(--text-secondary)]">
                      Customer builds beautiful audience in your CDP
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[var(--danger)] font-mono font-bold">✗</span>
                    <span className="text-[var(--text-secondary)]">
                      DSP appends 48 garbage segments on top
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[var(--danger)] font-mono font-bold">✗</span>
                    <span className="text-[var(--text-secondary)]">
                      Campaign underperforms. Customer blames your data.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[var(--danger)] font-mono font-bold">✗</span>
                    <span className="text-[var(--text-secondary)]">
                      No way to prove your audience worked. Churn risk.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Right column - The solution */}
              <div className="p-8 border-[3px] border-[var(--accent)] bg-[var(--accent-muted)]">
                <span className="type-label-accent mb-6 block">With Precise</span>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <WaxSeal className="w-6 h-6 flex-shrink-0" />
                    <span className="text-[var(--text-primary)]">
                      Govern vetoes garbage before a dollar is spent
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <WaxSeal className="w-6 h-6 flex-shrink-0" />
                    <span className="text-[var(--text-primary)]">
                      Valence proves your audience delivered lift
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <WaxSeal className="w-6 h-6 flex-shrink-0" />
                    <span className="text-[var(--text-primary)]">
                      Cryptographic proof customer can verify
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <WaxSeal className="w-6 h-6 flex-shrink-0" />
                    <span className="text-[var(--text-primary)]">
                      Renewals locked. Upsells unlocked.
                    </span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Quote */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isBenefitsInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12 p-8 border-l-[6px] border-[var(--accent)]"
            >
              <p className="text-xl text-[var(--text-primary)] italic mb-4">
                &quot;We used to lose deals when campaigns underperformed. Now we show them exactly
                where the DSP wasted their budget—and prove our segments worked.&quot;
              </p>
              <span className="type-label text-[var(--text-tertiary)]">
                — CDP Partner, Fortune 500 Retail
              </span>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section
          ref={ctaRef}
          className="section bg-[var(--bg-surface)] border-t-[3px] border-[var(--border)]"
        >
          <div className="max-w-[900px] mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isCtaInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <PartnerHandshake className="w-24 h-20 mx-auto mb-8" />

              <span className="type-label-accent mb-6 block">PARTNER PROGRAM</span>

              <h2 className="type-display-md mb-6">
                Schedule Your 15-min Partner Demo
              </h2>

              <p className="type-body-lg text-[var(--text-secondary)] max-w-xl mx-auto mb-8">
                See how Precise integrates with your CDP. Live demo, technical deep-dive,
                and partnership economics—all in 15 minutes.
              </p>

              <a
                href="https://calendly.com/precise-ai/partner-demo"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-3"
              >
                <span>Schedule 15-min Partner Demo</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M4 10h12m0 0l-4-4m4 4l-4 4"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>

              <p className="mt-6 text-[var(--text-tertiary)] text-sm">
                Or email{' '}
                <a
                  href="mailto:partners@precise.ai"
                  className="text-[var(--accent)] hover:underline"
                >
                  partners@precise.ai
                </a>
              </p>
            </motion.div>

            {/* Integration logos placeholder */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isCtaInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-16 pt-8 border-t-[3px] border-[var(--border)]"
            >
              <span className="type-label text-[var(--text-tertiary)] block mb-6">
                Works with every major CDP
              </span>
              <div className="flex flex-wrap justify-center gap-8 text-[var(--text-tertiary)]">
                <span className="font-mono text-sm">Segment</span>
                <span className="font-mono text-sm">mParticle</span>
                <span className="font-mono text-sm">Treasure Data</span>
                <span className="font-mono text-sm">Tealium</span>
                <span className="font-mono text-sm">BlueConic</span>
                <span className="font-mono text-sm">Amperity</span>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
