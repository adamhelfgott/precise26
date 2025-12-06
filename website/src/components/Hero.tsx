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
            Eliminate 35–47% of programmatic data waste.
          </p>
          <p className="type-body-lg text-[var(--text-secondary)] max-w-xl mb-8">
            Get the one-slide receipt that wins client reviews.
          </p>
        </motion.div>

        {/* Founder line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[#666666] text-lg max-w-2xl mb-4"
          style={{ fontSize: '18px' }}
        >
          Built by Adam Helfgott — founder of MadHive — now fixing what comes next.
        </motion.p>

        {/* MadHive explanation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-8 max-w-2xl"
        >
          <p className="text-[var(--text-secondary)] text-lg mb-2">
            MadHive is the only DSP that owns its own supply and can distribute profitably into thousands of micro-markets.
          </p>
          <p className="text-[var(--text-primary)] text-lg font-semibold">
            That&apos;s why local agencies running Precise + MadHive are beating national plans — with proof.
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-8"
        >
          <a href="#contact" className="btn-primary text-lg py-5 px-10">
            → Free Waste Audit
          </a>
          <p className="mt-4 text-[var(--text-tertiary)] text-sm font-mono">
            48 hours. No sales call.
          </p>
        </motion.div>

        {/* Category clarity line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-[#666666] mb-6"
          style={{ fontSize: '16px' }}
        >
          Programmatic transparency &amp; control platform
        </motion.p>

        {/* Trust signal row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap items-center gap-4 text-[#888888] text-sm font-mono"
        >
          <span>Trusted by leading agencies</span>
          <span className="text-[var(--text-tertiary)]">•</span>
          <span className="font-semibold text-[var(--text-secondary)]">MadHive (official partner)</span>
          <span className="text-[var(--text-tertiary)]">•</span>
          <span className="font-semibold text-[var(--text-secondary)]">Fortune 500 CPG</span>
          <span className="text-[var(--text-tertiary)]">•</span>
          <span className="font-semibold text-[var(--text-secondary)]">Top 5 CTV Agency Group</span>
        </motion.div>
      </div>

      {/* Bottom info bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
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
