'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function ContributionBarChart() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const segments = [
    { name: 'In-Market Auto Buyers', bars: 16, value: '+$1,410,000', action: 'KEEP', positive: true },
    { name: 'High-LTV Lookalikes', bars: 6, value: '+$320,000', action: 'KEEP', positive: true },
    { name: 'Yacht Enthusiasts', bars: 3, value: '–$87,000', action: 'VETO', positive: false },
    { name: '39 other segments', bars: 6, value: '–$184,000 total', action: 'VETO', positive: false },
  ];

  return (
    <section
      ref={sectionRef}
      className="section bg-[var(--bg-surface)] border-t-[3px] border-[var(--border)]"
    >
      <div className="max-w-[1000px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <span className="type-label-accent mb-4 block">VALENCE PROOF</span>
          <h2 className="type-display-sm mb-2">
            Actual Dollar Contribution by Segment
          </h2>
          <p className="font-mono text-sm text-[var(--text-tertiary)]">
            Valence Proof 0x7f3a…c291
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="border-[3px] border-[var(--border)] bg-[var(--bg-elevated)] p-6 md:p-8"
        >
          <div className="space-y-6 font-mono">
            {segments.map((segment, index) => (
              <motion.div
                key={segment.name}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4"
              >
                {/* Segment name */}
                <div className="w-full md:w-48 flex-shrink-0">
                  <span className={`text-sm ${segment.positive ? 'text-[var(--text-primary)]' : 'text-[var(--text-secondary)]'}`}>
                    {segment.name}
                  </span>
                </div>

                {/* Bar */}
                <div className="flex-grow flex items-center gap-2">
                  <div className="flex">
                    {Array.from({ length: segment.bars }).map((_, i) => (
                      <span
                        key={i}
                        className={`inline-block w-2 md:w-3 h-4 ${segment.positive ? 'bg-[var(--accent)]' : 'bg-[var(--danger)]'}`}
                        style={{ marginRight: '1px' }}
                      />
                    ))}
                  </div>

                  {/* Value */}
                  <span className={`text-sm font-bold ${segment.positive ? 'text-[var(--accent)]' : 'text-[var(--danger)]'}`}>
                    {segment.value}
                  </span>
                </div>

                {/* Action */}
                <div className="flex-shrink-0">
                  <span className={`stamp text-xs ${segment.positive ? 'stamp-keep' : 'stamp-veto'}`}>
                    {segment.action}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
