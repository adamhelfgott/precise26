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
      className="section bg-[var(--bg-surface)] border-t border-b border-[var(--border)]"
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Lead statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20 md:mb-32"
        >
          <span className="type-label-accent mb-6 block">The Reality</span>
          <h2 className="type-display-md max-w-4xl mb-8">
            Your DSP appends segments you never asked for.
            <span className="text-[var(--text-secondary)]"> You pay. They profit. You can&apos;t see a thing.</span>
          </h2>
        </motion.div>

        {/* The insight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-12 md:gap-20 mb-20 md:mb-32"
        >
          <div>
            <p className="type-body-lg text-[var(--text-secondary)] leading-relaxed">
              The programmatic supply chain wasn&apos;t built for transparency.
              DSPs, SSPs, data vendors, verification services—everyone takes a cut.
              No one shows their work.
            </p>
          </div>
          <div>
            <p className="type-body-lg text-[var(--text-primary)] leading-relaxed">
              We use cryptography and high-fidelity measurement to expose what&apos;s actually happening.
              Every segment deconstructed. Every dollar traced. Perfect just-in-time cohorts generated—for optimizations that make sense for you.
            </p>
          </div>
        </motion.div>

        {/* Principles - Large treatment */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="h-px w-full bg-[var(--rule)] mb-16" />

          <div className="grid md:grid-cols-3 gap-12 md:gap-8">
            {/* Principle 1 */}
            <div className="principle">
              <span className="principle-number">01</span>
              <h3 className="principle-title">Neutral</h3>
              <p className="principle-text">
                We don&apos;t sell media. We don&apos;t own inventory.
                Our only incentive is your performance.
              </p>
            </div>

            {/* Principle 2 */}
            <div className="principle">
              <span className="principle-number">02</span>
              <h3 className="principle-title">Verified</h3>
              <p className="principle-text">
                Cryptographic proof at every step. Not trust-us reporting—verify-it-yourself credentials.
              </p>
            </div>

            {/* Principle 3 */}
            <div className="principle">
              <span className="principle-number">03</span>
              <h3 className="principle-title">Aligned</h3>
              <p className="principle-text">
                We win when you win. Better performance, less waste, proof that holds up in any room.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
