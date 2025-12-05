'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { WaxSeal } from './Icons';

export default function Partners() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section
      ref={sectionRef}
      className="section bg-[var(--bg-surface)] border-t-[3px] border-[var(--border)]"
    >
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-16 md:gap-24"
        >
          {/* Left column */}
          <div>
            <span className="type-label-accent mb-4 block">Partnership</span>
            <h2 className="type-display-sm mb-6">
              Strategic investment from MadHive
            </h2>
            <p className="text-[var(--text-secondary)] text-lg leading-relaxed mb-8">
              MadHive&apos;s equity investment validates our approach.
              We&apos;re embedded in their stack—powering transparency
              for the largest local CTV network in the country.
            </p>
            <div className="h-[3px] w-full bg-[var(--rule)] mb-8" />
            <div className="flex flex-wrap gap-6">
              <div>
                <span className="font-mono text-2xl font-bold text-[var(--text-primary)]">300+</span>
                <span className="type-label text-[var(--text-tertiary)] block">station groups</span>
              </div>
              <div>
                <span className="font-mono text-2xl font-bold text-[var(--accent)]">100%</span>
                <span className="type-label text-[var(--text-tertiary)] block">closed-loop</span>
              </div>
              <div>
                <span className="font-mono text-2xl font-bold text-[var(--text-primary)]">CTV</span>
                <span className="type-label text-[var(--text-tertiary)] block">native</span>
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className="space-y-6">
            <div className="p-6 border-[3px] border-[var(--border)] flex items-start gap-4">
              <WaxSeal className="w-10 h-10 flex-shrink-0" />
              <div>
                <span className="type-label text-[var(--accent)] mb-2 block">Outcome-linked data</span>
                <p className="text-[var(--text-secondary)] text-sm">
                  Segments backed by real conversion data, not modeled proxies.
                </p>
              </div>
            </div>
            <div className="p-6 border-[3px] border-[var(--border)] flex items-start gap-4">
              <WaxSeal className="w-10 h-10 flex-shrink-0" />
              <div>
                <span className="type-label text-[var(--accent)] mb-2 block">Local dominance</span>
                <p className="text-[var(--text-secondary)] text-sm">
                  Hyper-local CTV targeting with governance built in.
                </p>
              </div>
            </div>
            <div className="p-6 border-[3px] border-[var(--border)] flex items-start gap-4">
              <WaxSeal className="w-10 h-10 flex-shrink-0" />
              <div>
                <span className="type-label text-[var(--accent)] mb-2 block">Cryptographic proof</span>
                <p className="text-[var(--text-secondary)] text-sm">
                  Verifiable credentials across every activation.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Additional integrations note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 pt-8 border-t-[3px] border-[var(--border)]"
        >
          <p className="type-label text-[var(--text-tertiary)] text-center">
            DSP Integrations: Trade Desk · DV360 · Yahoo · MadHive
          </p>
        </motion.div>
      </div>
    </section>
  );
}
