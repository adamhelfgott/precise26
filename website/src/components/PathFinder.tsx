'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import { LocalPin, ProveIcon, AuditIcon } from './Icons';

export default function PathFinder() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section
      ref={sectionRef}
      id="path"
      className="section bg-[var(--bg-primary)] border-t-[3px] border-[var(--border)]"
    >
      <div className="max-w-[1000px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="type-label-accent mb-4 block">CHOOSE YOUR FIGHT</span>
          <h2 className="type-display-sm md:type-display-md mb-8 md:mb-12">
            Where are you in the battle?
          </h2>

          <div className="space-y-4">
            {/* Local CTV path */}
            <Link href="/local" className="block group">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="p-6 md:p-8 border-[3px] border-[var(--border)] bg-[var(--bg-elevated)] transition-all duration-200 group-hover:border-[var(--danger)] group-hover:translate-x-2"
              >
                <div className="flex items-center gap-6">
                  <LocalPin className="w-10 h-12 flex-shrink-0 hidden md:block" />
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="font-mono font-bold text-[var(--danger)]">LOCAL TRADER</span>
                      <span className="font-mono text-[var(--accent)]">→ /local</span>
                    </div>
                    <p className="text-[var(--text-secondary)]">
                      Pulling national budget with local proof?
                    </p>
                  </div>
                </div>
              </motion.div>
            </Link>

            {/* CDP path */}
            <Link href="/cdp" className="block group">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="p-6 md:p-8 border-[3px] border-[var(--border)] bg-[var(--bg-elevated)] transition-all duration-200 group-hover:border-[var(--accent)] group-hover:translate-x-2"
              >
                <div className="flex items-center gap-6">
                  <ProveIcon className="w-10 h-10 flex-shrink-0 hidden md:block" />
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="font-mono font-bold text-[var(--accent)]">CDP PARTNER</span>
                      <span className="font-mono text-[var(--accent)]">→ /cdp</span>
                    </div>
                    <p className="text-[var(--text-secondary)]">
                      Chasing churn because you can&apos;t prove lift?
                    </p>
                  </div>
                </div>
              </motion.div>
            </Link>

            {/* Stay here path */}
            <motion.a
              href="#contact"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="block group"
            >
              <div className="p-6 md:p-8 border-[3px] border-[var(--accent)] bg-[var(--accent-muted)] transition-all duration-200 group-hover:translate-x-2">
                <div className="flex items-center gap-6">
                  <AuditIcon className="w-10 h-12 flex-shrink-0 hidden md:block" />
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="font-mono font-bold text-[var(--accent)]">JUST AUDIT</span>
                      <span className="font-mono text-[var(--text-tertiary)]">↓ below</span>
                    </div>
                    <p className="text-[var(--text-primary)]">
                      Just want to see your waste? Run it below.
                    </p>
                  </div>
                </div>
              </div>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
