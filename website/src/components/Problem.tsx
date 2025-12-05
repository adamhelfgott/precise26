'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Problem() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section
      ref={sectionRef}
      id="approach"
      className="section bg-[var(--bg-surface)] border-t-[3px] border-b-[3px] border-[var(--border)]"
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Lead statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24"
        >
          <span className="type-label-danger mb-4 block">The Reality</span>
          <h2 className="type-display-md max-w-4xl mb-6">
            Your DSP appends segments you never asked for.
          </h2>
          <p className="type-body-lg text-[var(--text-secondary)] max-w-2xl">
            You pay. They profit. You can&apos;t see a thing.
            <span className="text-[var(--text-primary)]"> The programmatic supply chain wasn&apos;t built for transparency.</span>
          </p>
        </motion.div>

        {/* Agency Teaser */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mb-16 md:mb-24 p-8 border-[3px] border-[var(--accent)] bg-[var(--accent-muted)]"
        >
          <h3 className="font-mono text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-4">
            Trading Head in Q4 Review?
          </h3>
          <p className="font-mono text-lg text-[var(--text-secondary)] mb-6">
            Veto 35–47% waste. Prove 29–41% lift.
          </p>
          <p className="text-[var(--text-secondary)]">
            <a href="#contact" className="text-[var(--accent)] font-semibold hover:underline">Start your audit below</a>
            —or <a href="#path" className="text-[var(--accent)] font-semibold hover:underline">choose your path</a>.
          </p>
        </motion.div>

        {/* The insight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-12 md:gap-20 mb-16 md:mb-24"
        >
          <div className="p-6 border-l-[3px] border-[var(--danger)]">
            <h3 className="type-label-danger mb-4">Without Precise</h3>
            <ul className="space-y-3 text-[var(--text-secondary)]">
              <li>→ 52 segments appended, you asked for 4</li>
              <li>→ Black-box reporting you didn&apos;t generate</li>
              <li>→ No visibility into what works vs waste</li>
              <li>→ DSPs, SSPs, data vendors all take cuts</li>
            </ul>
          </div>
          <div className="p-6 border-l-[3px] border-[var(--accent)]">
            <h3 className="type-label-accent mb-4">With Precise</h3>
            <ul className="space-y-3 text-[var(--text-secondary)]">
              <li className="text-[var(--text-primary)]">→ Every segment scored in real-time</li>
              <li className="text-[var(--text-primary)]">→ Cryptographic proof you generated</li>
              <li className="text-[var(--text-primary)]">→ Clear visibility into lift vs cost</li>
              <li className="text-[var(--text-primary)]">→ Your advocate, not another vendor</li>
            </ul>
          </div>
        </motion.div>

        {/* Principles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="h-[3px] w-full bg-[var(--rule)] mb-12" />

          <div className="grid md:grid-cols-3 gap-8">
            {/* Principle 1 */}
            <div className="p-6 border-[3px] border-[var(--border)]">
              <span className="font-mono text-4xl font-bold text-[var(--accent)]">01</span>
              <h3 className="type-display-sm mt-4 mb-3">Neutral</h3>
              <p className="text-[var(--text-secondary)] text-sm">
                We don&apos;t sell media. We don&apos;t own inventory.
                Our only incentive is your performance.
              </p>
            </div>

            {/* Principle 2 */}
            <div className="p-6 border-[3px] border-[var(--border)]">
              <span className="font-mono text-4xl font-bold text-[var(--accent)]">02</span>
              <h3 className="type-display-sm mt-4 mb-3">Verified</h3>
              <p className="text-[var(--text-secondary)] text-sm">
                Cryptographic proof at every step. Not trust-us reporting—verify-it-yourself credentials.
              </p>
            </div>

            {/* Principle 3 */}
            <div className="p-6 border-[3px] border-[var(--border)]">
              <span className="font-mono text-4xl font-bold text-[var(--accent)]">03</span>
              <h3 className="type-display-sm mt-4 mb-3">Aligned</h3>
              <p className="text-[var(--text-secondary)] text-sm">
                We win when you win. Better performance, less waste, proof that holds up in any room.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
