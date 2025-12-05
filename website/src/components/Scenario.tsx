'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { VetoStamp, KeepStamp, WaxSeal } from './Icons';

const segments = [
  { name: 'In-Market Auto Buyers', cost: 0.08, lift: '+2.3%', action: 'keep' },
  { name: 'Adults 25-54', cost: 0.02, lift: '+0.8%', action: 'keep' },
  { name: 'Regional DMA Match', cost: 0.04, lift: '+1.1%', action: 'keep' },
  { name: 'Luxury Lifestyle', cost: 0.12, lift: '-0.1%', action: 'veto' },
  { name: 'Pet Owners', cost: 0.08, lift: '+0.0%', action: 'veto' },
  { name: 'Yacht Enthusiasts', cost: 0.22, lift: '-0.3%', action: 'veto' },
  { name: 'Travel Intenders', cost: 0.15, lift: '+0.1%', action: 'veto' },
  { name: 'Fitness Enthusiasts', cost: 0.09, lift: '+0.0%', action: 'veto' },
  { name: 'Wine Connoisseurs', cost: 0.14, lift: '-0.2%', action: 'veto' },
  { name: 'Home Improvers', cost: 0.07, lift: '+0.2%', action: 'veto' },
];

export default function Scenario() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section
      ref={sectionRef}
      id="scenario"
      className="section bg-[var(--bg-surface)] border-t-[3px] border-[var(--border)]"
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="type-label-accent mb-4 block">In Action</span>
          <h2 className="type-display-md max-w-4xl">
            $50K Campaign. Regional Auto Dealer.
          </h2>
          <p className="text-[var(--text-secondary)] text-lg mt-4 max-w-xl">
            You requested 3 segments. The DSP appended 49 more. Here&apos;s what Precise found.
          </p>
        </motion.div>

        {/* Data table - forensic report style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="border-[3px] border-[var(--border)] bg-[var(--bg-elevated)]"
        >
          {/* Table header */}
          <div className="p-6 border-b-[3px] border-[var(--border)] flex items-center justify-between">
            <div>
              <span className="type-label text-[var(--accent)]">PRECISE INTERCEPT</span>
              <span className="type-label text-[var(--text-tertiary)] ml-4">REAL-TIME SCORING</span>
            </div>
            <div className="hidden md:block">
              <WaxSeal className="w-12 h-12" />
            </div>
          </div>

          {/* Table content */}
          <div className="overflow-x-auto">
            <table className="data-table w-full">
              <thead>
                <tr>
                  <th className="text-left">Segment</th>
                  <th className="text-right hidden md:table-cell">CPM</th>
                  <th className="text-right">Lift</th>
                  <th className="text-right">Action</th>
                </tr>
              </thead>
              <tbody>
                {segments.map((segment, index) => (
                  <motion.tr
                    key={segment.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                    className={segment.action === 'veto' ? 'vetoed' : ''}
                  >
                    <td className={segment.action === 'keep' ? 'text-[var(--text-primary)] font-semibold' : ''}>
                      {segment.name}
                    </td>
                    <td className="text-right hidden md:table-cell text-[var(--text-secondary)]">
                      ${segment.cost.toFixed(2)}
                    </td>
                    <td className={`text-right ${
                      segment.lift.startsWith('+') && segment.lift !== '+0.0%'
                        ? 'text-[var(--accent)]'
                        : segment.lift.startsWith('-')
                        ? 'text-[var(--danger)]'
                        : 'text-[var(--text-tertiary)]'
                    }`}>
                      {segment.lift}
                    </td>
                    <td className="text-right">
                      {segment.action === 'keep' ? (
                        <KeepStamp className="w-16 h-8 inline-block" />
                      ) : (
                        <VetoStamp className="w-16 h-8 inline-block" />
                      )}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>

            {/* More indicator */}
            <div className="p-4 text-center border-t border-[var(--border-subtle)]">
              <span className="type-label text-[var(--text-tertiary)]">+ 42 more segments scored</span>
            </div>
          </div>

          {/* Results summary */}
          <div className="p-6 border-t-[3px] border-[var(--border)] bg-[var(--bg-surface)]">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div>
                <span className="type-label text-[var(--text-tertiary)] block mb-1">Requested</span>
                <span className="font-mono text-2xl font-bold text-[var(--text-primary)]">3</span>
              </div>
              <div>
                <span className="type-label text-[var(--text-tertiary)] block mb-1">Appended</span>
                <span className="font-mono text-2xl font-bold text-[var(--text-secondary)]">49</span>
              </div>
              <div>
                <span className="type-label text-[var(--danger)] block mb-1">Vetoed</span>
                <span className="font-mono text-2xl font-bold text-[var(--danger)]">39</span>
              </div>
              <div>
                <span className="type-label text-[var(--accent)] block mb-1">Saved</span>
                <span className="font-mono text-2xl font-bold text-[var(--accent)]">$18.4K</span>
              </div>
            </div>
          </div>

          {/* Proof footer */}
          <div className="p-4 border-t border-[var(--border-subtle)] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <WaxSeal className="w-8 h-8" />
              <span className="type-label text-[var(--accent)]">PROOF VERIFIED</span>
            </div>
            <span className="font-mono text-xs text-[var(--text-tertiary)]">merkle: 0x7f3a...c291</span>
          </div>
        </motion.div>

        {/* The aha moment */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 p-6 border-l-[3px] border-[var(--danger)]"
        >
          <p className="text-lg text-[var(--text-secondary)]">
            <span className="text-[var(--text-primary)] font-semibold">Yacht Enthusiasts at $0.22 CPM.</span>
            {' '}You&apos;re selling trucks in Ohio.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
