'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function CTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section ref={sectionRef} id="contact" className="section">
      <div className="max-w-[800px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <span className="type-label-accent mb-6 block">Contact</span>
          <h2 className="type-display-md mb-8">
            See what you&apos;ve been missing
          </h2>
          <p className="type-body-lg text-[var(--text-secondary)] mb-12 max-w-lg mx-auto">
            Free waste audit. No commitment.
            <br />
            Just clarity on where your money actually goes.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href="mailto:hello@precise.ai" className="btn-primary">
              Start a conversation
            </a>
            <a
              href="mailto:hello@precise.ai"
              className="nav-link"
            >
              hello@precise.ai
            </a>
          </div>
        </motion.div>

        {/* Bottom details */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20 pt-12 border-t border-[var(--border)]"
        >
          <div className="flex flex-col sm:flex-row justify-center gap-8 sm:gap-16 text-center">
            <div>
              <span className="type-label text-[var(--text-tertiary)] block mb-2">Timeline</span>
              <span className="text-[var(--text-primary)]">Live in weeks</span>
            </div>
            <div>
              <span className="type-label text-[var(--text-tertiary)] block mb-2">Pilot</span>
              <span className="text-[var(--text-primary)]">45 days, no lock-in</span>
            </div>
            <div>
              <span className="type-label text-[var(--text-tertiary)] block mb-2">Audit</span>
              <span className="text-[var(--text-primary)]">Free waste analysis</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
