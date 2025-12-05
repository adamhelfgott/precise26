'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';

export default function PathFinder() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section
      ref={sectionRef}
      className="section bg-[var(--bg-primary)] border-t-[3px] border-[var(--border)]"
    >
      <div className="max-w-[1000px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="type-label-accent mb-4 block">Choose Your Fight</span>
          <h2 className="type-display-md mb-12">
            Where are you in the battle?
          </h2>

          <div className="space-y-6">
            {/* Local CTV path */}
            <Link href="/local" className="block group">
              <div className="p-6 md:p-8 border-[3px] border-[var(--border)] bg-[var(--bg-elevated)] transition-all duration-200 group-hover:border-[var(--accent)] group-hover:bg-[var(--accent-muted)]">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <span className="type-label text-[var(--danger)] mb-2 block">LOCAL TRADER</span>
                    <p className="text-lg text-[var(--text-primary)]">
                      Pulling national budget with local proof?
                    </p>
                    <p className="text-[var(--text-secondary)] text-sm mt-1">
                      See how local agencies stole 100% of a $340K auto budget from national TTD.
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-[var(--accent)] font-mono font-bold group-hover:translate-x-2 transition-transform">
                    <span>→ /local</span>
                  </div>
                </div>
              </div>
            </Link>

            {/* CDP path */}
            <Link href="/cdp" className="block group">
              <div className="p-6 md:p-8 border-[3px] border-[var(--border)] bg-[var(--bg-elevated)] transition-all duration-200 group-hover:border-[var(--accent)] group-hover:bg-[var(--accent-muted)]">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <span className="type-label text-[var(--accent)] mb-2 block">CDP PARTNER</span>
                    <p className="text-lg text-[var(--text-primary)]">
                      Turning clean audiences into proven ROAS?
                    </p>
                    <p className="text-[var(--text-secondary)] text-sm mt-1">
                      Finally answer &quot;what happens after my audience hits the DSP?&quot;
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-[var(--accent)] font-mono font-bold group-hover:translate-x-2 transition-transform">
                    <span>→ /cdp</span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Stay here path */}
            <a href="#contact" className="block group">
              <div className="p-6 md:p-8 border-[3px] border-[var(--accent)] bg-[var(--accent-muted)]">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <span className="type-label text-[var(--accent)] mb-2 block">EVERYONE ELSE</span>
                    <p className="text-lg text-[var(--text-primary)]">
                      Just want to see your waste?
                    </p>
                    <p className="text-[var(--text-secondary)] text-sm mt-1">
                      Stay here and run the free audit. 48 hours. No sales call.
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-[var(--accent)] font-mono font-bold group-hover:translate-x-2 transition-transform">
                    <span>↓ Run Audit</span>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
