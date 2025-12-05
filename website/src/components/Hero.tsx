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
          className="mb-12"
        >
          {/* Big bold PRECISE */}
          <h1 className="type-display-lg mb-8 crooked-1">
            PRECISE
          </h1>

          {/* Tagline with stamp effect */}
          <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 mb-8">
            <span className="stamp stamp-keep inline-block">VERIFIED</span>
            <p className="type-body-lg text-[var(--text-secondary)] max-w-md">
              See where every dollar goes.
              <br />
              <span className="text-[var(--text-primary)] font-semibold">Stop paying for garbage data.</span>
            </p>
          </div>
        </motion.div>

        {/* Stats preview - monospace table style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12 p-6 md:p-8 border-[3px] border-[var(--border)] bg-[var(--bg-elevated)] max-w-xl"
        >
          <div className="type-label text-[var(--text-tertiary)] mb-4">TYPICAL RESULTS</div>
          <div className="space-y-3 font-mono">
            <div className="flex justify-between items-center">
              <span className="text-[var(--text-secondary)]">Segments vetoed</span>
              <span className="text-[var(--danger)] font-bold text-xl">39</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-[var(--text-secondary)]">Waste eliminated</span>
              <span className="text-[var(--accent)] font-bold text-xl">$18.4K</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-[var(--text-secondary)]">ROAS improvement</span>
              <span className="text-[var(--accent)] font-bold text-xl">+41%</span>
            </div>
          </div>
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-start gap-6"
        >
          <a href="#contact" className="btn-primary">
            Request Free Audit
          </a>
          <a href="#scenario" className="btn-secondary">
            See It In Action
          </a>
        </motion.div>
      </div>

      {/* Bottom info bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
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
