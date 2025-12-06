'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { WaxSeal } from './Icons';

export default function ContributionAnalysis() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section
      ref={sectionRef}
      className="section bg-[var(--bg-primary)] border-t-[3px] border-[var(--border)]"
    >
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="type-label-accent mb-4 block">THE DIFFERENCE</span>
          <h2 className="type-display-md max-w-3xl">
            Dollar-for-Dollar Contribution
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="p-8 border-[3px] border-[var(--accent)] bg-[var(--accent-muted)]"
        >
          <div className="flex items-start gap-6">
            <WaxSeal className="w-16 h-16 flex-shrink-0 hidden md:block" />
            <div>
              <p className="text-xl text-[var(--text-primary)] mb-6">
                Every impression carries a <span className="font-bold text-[var(--accent)]">Valence proof</span> that shows exactly how many dollars each segment drove.
              </p>
              <div className="space-y-2 font-mono text-lg">
                <p className="text-[var(--text-secondary)]">
                  <span className="text-[var(--danger)]">No lift studies.</span>
                </p>
                <p className="text-[var(--text-secondary)]">
                  <span className="text-[var(--danger)]">No models.</span>
                </p>
                <p className="text-[var(--text-primary)] font-bold">
                  Actual dollars. Signed. <span className="text-[var(--accent)]">Impossible to fake.</span>
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
