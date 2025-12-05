'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Partners() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section
      ref={sectionRef}
      className="section bg-[var(--bg-surface)] border-t border-[var(--border)]"
    >
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-16 md:gap-24"
        >
          {/* Left column */}
          <div>
            <span className="type-label-accent mb-6 block">Partnership</span>
            <h2 className="type-display-sm mb-8">
              Strategic investment from MadHive
            </h2>
            <p className="type-body-lg text-[var(--text-secondary)] leading-relaxed mb-8">
              MadHive&apos;s equity investment validates our approach.
              We&apos;re embedded in their stack—powering transparency
              for the largest local CTV network in the country.
            </p>
            <div className="h-px w-full bg-[var(--rule)] mb-8" />
            <div className="flex flex-wrap gap-4">
              <span className="type-label text-[var(--text-tertiary)]">300+ station groups</span>
              <span className="type-label text-[var(--text-tertiary)]">·</span>
              <span className="type-label text-[var(--text-tertiary)]">Closed-loop outcomes</span>
              <span className="type-label text-[var(--text-tertiary)]">·</span>
              <span className="type-label text-[var(--text-tertiary)]">CTV-native</span>
            </div>
          </div>

          {/* Right column */}
          <div className="space-y-8">
            <div className="border-l-2 border-[var(--border)] pl-6">
              <span className="type-label text-[var(--accent)] mb-3 block">Outcome-linked data</span>
              <p className="text-[var(--text-secondary)]">
                Segments backed by real conversion data, not modeled proxies.
              </p>
            </div>
            <div className="border-l-2 border-[var(--border)] pl-6">
              <span className="type-label text-[var(--accent)] mb-3 block">Local dominance</span>
              <p className="text-[var(--text-secondary)]">
                Hyper-local CTV targeting with governance built in.
              </p>
            </div>
            <div className="border-l-2 border-[var(--border)] pl-6">
              <span className="type-label text-[var(--accent)] mb-3 block">Unified proof</span>
              <p className="text-[var(--text-secondary)]">
                Valence credentials across every activation.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Additional integrations note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20 pt-12 border-t border-[var(--border)]"
        >
          <p className="type-label text-[var(--text-tertiary)] text-center">
            Additional DSP integrations available · Trade Desk · DV360 · Yahoo
          </p>
        </motion.div>
      </div>
    </section>
  );
}
