'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

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

  const keptCount = segments.filter(s => s.action === 'keep').length;
  const vetoedCount = segments.filter(s => s.action === 'veto').length;

  return (
    <section
      ref={sectionRef}
      id="scenario"
      className="section bg-[var(--bg-surface)] border-t border-[var(--border)]"
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-20"
        >
          <span className="type-label-accent mb-6 block">In Action</span>
          <h2 className="type-display-md max-w-4xl">
            A $50K campaign for a regional auto dealer
          </h2>
        </motion.div>

        {/* Scenario content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left: Context */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <div className="mb-8">
              <span className="type-label text-[var(--text-tertiary)] block mb-3">You Requested</span>
              <p className="text-[var(--text-primary)] leading-relaxed">
                In-market auto buyers, adults 25-54, within your regional DMA.
                <span className="text-[var(--text-secondary)]"> Three segments. Simple.</span>
              </p>
            </div>

            <div className="mb-8">
              <span className="type-label text-[var(--text-tertiary)] block mb-3">DSP Activated</span>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                52 segments appended automatically. Yacht Enthusiasts. Wine Connoisseurs. Pet Owners.
                <span className="text-[var(--text-primary)]"> You&apos;re selling trucks in Ohio.</span>
              </p>
            </div>

            <div className="h-px w-full bg-[var(--border)] my-8" />

            <div className="grid grid-cols-3 gap-6">
              <div>
                <span className="type-label text-[var(--text-tertiary)] block mb-2">Requested</span>
                <span className="text-2xl font-light text-[var(--text-primary)]">3</span>
              </div>
              <div>
                <span className="type-label text-[var(--text-tertiary)] block mb-2">Appended</span>
                <span className="text-2xl font-light text-[var(--text-primary)]">49</span>
              </div>
              <div>
                <span className="type-label text-[var(--text-tertiary)] block mb-2">You Saw</span>
                <span className="text-2xl font-light text-[var(--text-secondary)]">None</span>
              </div>
            </div>
          </motion.div>

          {/* Right: Intercept visualization */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-[var(--bg-primary)] border border-[var(--border)] p-6 md:p-8"
          >
            {/* Terminal header */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-[var(--border)]">
              <span className="type-label text-[var(--accent)]">PRECISE INTERCEPT</span>
              <span className="type-label text-[var(--text-tertiary)]">REAL-TIME</span>
            </div>

            {/* Segment table */}
            <div className="space-y-0">
              {/* Header row */}
              <div className="grid grid-cols-[1fr_60px_60px_60px] gap-2 pb-3 border-b border-[var(--border)]">
                <span className="type-label text-[var(--text-tertiary)]">Segment</span>
                <span className="type-label text-[var(--text-tertiary)] text-right">CPM</span>
                <span className="type-label text-[var(--text-tertiary)] text-right">Lift</span>
                <span className="type-label text-[var(--text-tertiary)] text-right">Action</span>
              </div>

              {/* Segment rows */}
              {segments.map((segment, index) => (
                <motion.div
                  key={segment.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                  className={`grid grid-cols-[1fr_60px_60px_60px] gap-2 py-2 border-b border-[var(--border-subtle)] ${
                    segment.action === 'veto' ? 'opacity-50' : ''
                  }`}
                >
                  <span className={`font-mono text-sm truncate ${
                    segment.action === 'keep' ? 'text-[var(--text-primary)]' : 'text-[var(--text-secondary)]'
                  }`}>
                    {segment.name}
                  </span>
                  <span className="font-mono text-sm text-[var(--text-secondary)] text-right">
                    ${segment.cost.toFixed(2)}
                  </span>
                  <span className={`font-mono text-sm text-right ${
                    segment.lift.startsWith('+') && segment.lift !== '+0.0%'
                      ? 'text-[var(--accent)]'
                      : 'text-[var(--text-tertiary)]'
                  }`}>
                    {segment.lift}
                  </span>
                  <span className={`font-mono text-sm text-right uppercase ${
                    segment.action === 'keep' ? 'text-[var(--accent)]' : 'text-[var(--text-tertiary)]'
                  }`}>
                    {segment.action}
                  </span>
                </motion.div>
              ))}

              {/* More indicator */}
              <div className="py-2 text-center">
                <span className="type-label text-[var(--text-tertiary)]">+ 42 more segments scored</span>
              </div>
            </div>

            {/* Results summary */}
            <div className="mt-6 pt-6 border-t border-[var(--border)]">
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <span className="type-label text-[var(--text-tertiary)] block mb-1">Vetoed</span>
                  <span className="font-mono text-lg text-[var(--text-primary)]">39</span>
                </div>
                <div>
                  <span className="type-label text-[var(--text-tertiary)] block mb-1">Saved</span>
                  <span className="font-mono text-lg text-[var(--accent)]">$18.4K</span>
                </div>
                <div>
                  <span className="type-label text-[var(--text-tertiary)] block mb-1">ROAS</span>
                  <span className="font-mono text-lg text-[var(--accent)]">+41%</span>
                </div>
              </div>
            </div>

            {/* Proof footer */}
            <div className="mt-6 pt-4 border-t border-[var(--border)] flex items-center justify-between">
              <span className="type-label text-[var(--text-tertiary)]">Proof Generated</span>
              <span className="font-mono text-xs text-[var(--text-tertiary)]">0x7f3a...c291</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
