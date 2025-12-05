'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-20">
      {/* Registration marks */}
      <div className="absolute top-6 left-6 reg-mark">+</div>
      <div className="absolute top-6 right-6 reg-mark">+</div>
      <div className="absolute bottom-6 left-6 reg-mark">+</div>
      <div className="absolute bottom-6 right-6 reg-mark">+</div>

      {/* Content */}
      <div className="max-w-[1400px] mx-auto w-full pt-24 md:pt-0">
        {/* Giant headline - forensic style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          {/* Big bold PRECISE */}
          <h1 className="type-display-lg mb-6 crooked-1">
            PRECISE
          </h1>

          {/* Main value prop */}
          <p className="type-display-sm text-[var(--text-primary)] max-w-2xl mb-2">
            Eliminate 35–47% of data waste.
          </p>
          <p className="type-body-lg text-[var(--text-secondary)] max-w-xl mb-8">
            Get the one-slide receipt that wins client reviews.
          </p>
        </motion.div>

        {/* Stats - the proof */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-10 p-6 md:p-8 border-[3px] border-[var(--accent)] bg-[var(--accent-muted)] max-w-xl"
        >
          <div className="space-y-4 font-mono">
            <div className="flex justify-between items-center">
              <span className="text-[var(--text-secondary)]">Average ROAS lift</span>
              <span className="text-[var(--accent)] font-bold text-xl">29–41%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-[var(--text-secondary)]">Savings per $50K flight</span>
              <span className="text-[var(--accent)] font-bold text-xl">$18.4K</span>
            </div>
            <div className="h-[2px] bg-[var(--border)]" />
            <div className="flex items-center gap-3">
              <span className="stamp stamp-keep text-sm">VALENCE-SIGNED</span>
              <span className="text-[var(--text-tertiary)] text-sm">Impossible to fake.</span>
            </div>
          </div>
        </motion.div>

        {/* Founder line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-[#666666] text-lg max-w-md mb-8"
          style={{ fontSize: '18px' }}
        >
          Built by Adam Helfgott — founder of MadHive — now fixing what comes next.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-6"
        >
          <a href="#contact" className="btn-primary text-lg py-5 px-10">
            → Free Waste Audit
          </a>
          <p className="mt-4 text-[var(--text-tertiary)] text-sm font-mono">
            48 hours. No sales call.
          </p>
        </motion.div>
      </div>

      {/* Bottom info bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="absolute bottom-0 left-0 right-0 border-t-[3px] border-[var(--border)]"
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 py-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <span className="type-label">Your advocate in programmatic</span>
            <span className="type-label text-[var(--accent)]">Cryptographic proof at every step</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
