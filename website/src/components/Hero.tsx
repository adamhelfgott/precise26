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
        {/* Main headline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-12 md:mb-16"
        >
          <h1 className="type-display-lg mb-6">
            PRECISE
          </h1>
          <div className="h-px w-24 bg-[var(--rule)] mb-8" />
          <p className="type-body-lg text-[var(--text-secondary)] max-w-xl leading-relaxed">
            See where every dollar goes.
            <br />
            <span className="text-[var(--text-primary)]">Math, not promises.</span>
          </p>
        </motion.div>

        {/* Secondary content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-12"
        >
          <a href="#contact" className="btn-primary">
            Start a conversation
          </a>
          <a href="#approach" className="nav-link">
            How it works →
          </a>
        </motion.div>
      </div>

      {/* Bottom info bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute bottom-0 left-0 right-0 border-t border-[var(--border)]"
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 py-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-[var(--text-tertiary)]">
            <span className="type-label">Your advocate in programmatic</span>
            <span className="type-label">Cryptographic proof at every step</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
