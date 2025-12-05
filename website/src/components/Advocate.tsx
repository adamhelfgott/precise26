'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Advocate() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-20%' });

  return (
    <section
      ref={sectionRef}
      className="relative section-padding overflow-hidden"
    >
      {/* Decorative grid lines */}
      <div className="absolute inset-0 grid-pattern opacity-20" />

      {/* Vertical accent line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-accent/20 to-transparent" />

      <div className="relative max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Column - Statement */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs font-mono tracking-widest text-accent uppercase mb-6 block">
              Your Advocate
            </span>
            <h2
              className="text-[clamp(2rem,5vw,3.5rem)] leading-[1] tracking-[-0.03em] mb-8"
              style={{ fontFamily: 'var(--font-display), sans-serif' }}
            >
              IN AN ECOSYSTEM
              <br />
              <span className="text-muted">DESIGNED TO OBSCURE,</span>
              <br />
              WE BRING <span className="text-accent">CLARITY</span>
            </h2>
            <p className="text-lg text-muted leading-relaxed mb-8 max-w-xl">
              The programmatic supply chain wasn&apos;t built for transparency.
              DSPs, SSPs, data brokers, verification vendors—everyone taking a cut,
              no one showing their work.
            </p>
            <p className="text-lg text-foreground leading-relaxed max-w-xl">
              <span className="text-accent">Precise sits on your side of the table.</span> We&apos;re not
              selling inventory. We&apos;re not marking up data. We exist to make sure
              your dollar does what you intended—and prove it did.
            </p>
          </motion.div>

          {/* Right Column - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* The ecosystem visualization */}
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Outer ring - The ecosystem */}
              <div className="absolute inset-0 border border-border rounded-full opacity-20" />
              <div className="absolute inset-8 border border-border rounded-full opacity-30" />
              <div className="absolute inset-16 border border-border rounded-full opacity-40" />

              {/* Ecosystem players - positioned around */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <span className="text-xs font-mono text-muted/50 whitespace-nowrap">DSPs</span>
              </div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
                <span className="text-xs font-mono text-muted/50 whitespace-nowrap">SSPs</span>
              </div>
              <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2">
                <span className="text-xs font-mono text-muted/50 whitespace-nowrap">Data Vendors</span>
              </div>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2">
                <span className="text-xs font-mono text-muted/50 whitespace-nowrap">Verification</span>
              </div>

              {/* Diagonal labels */}
              <div className="absolute top-[15%] left-[15%] -translate-x-1/2 -translate-y-1/2">
                <span className="text-xs font-mono text-muted/40 whitespace-nowrap">Exchanges</span>
              </div>
              <div className="absolute bottom-[15%] right-[15%] translate-x-1/2 translate-y-1/2">
                <span className="text-xs font-mono text-muted/40 whitespace-nowrap">Networks</span>
              </div>

              {/* Center - YOU + PRECISE */}
              <div className="absolute inset-24 flex items-center justify-center">
                <div className="relative">
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-accent/20 blur-xl rounded-full scale-150" />

                  {/* Center content */}
                  <div className="relative border border-accent bg-background p-8 text-center">
                    <div className="text-xs font-mono text-accent tracking-wider mb-2">YOU</div>
                    <div className="text-xs font-mono text-muted mb-4">+</div>
                    <div
                      className="text-2xl tracking-[-0.02em]"
                      style={{ fontFamily: 'var(--font-display), sans-serif' }}
                    >
                      PRECISE
                    </div>
                  </div>
                </div>
              </div>

              {/* Connecting lines from center */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                <line x1="50" y1="35" x2="50" y2="5" stroke="currentColor" strokeWidth="0.3" className="text-accent/30" />
                <line x1="50" y1="65" x2="50" y2="95" stroke="currentColor" strokeWidth="0.3" className="text-accent/30" />
                <line x1="35" y1="50" x2="5" y2="50" stroke="currentColor" strokeWidth="0.3" className="text-accent/30" />
                <line x1="65" y1="50" x2="95" y2="50" stroke="currentColor" strokeWidth="0.3" className="text-accent/30" />
              </svg>
            </div>
          </motion.div>
        </div>

        {/* Bottom Stats/Values */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-24 md:mt-32 grid sm:grid-cols-3 gap-8 md:gap-12"
        >
          <div className="text-center sm:text-left">
            <div className="text-xs font-mono text-accent tracking-wider mb-3">01 — NEUTRAL</div>
            <p className="text-muted text-sm leading-relaxed">
              We don&apos;t sell media. We don&apos;t own inventory. Our only incentive is your performance.
            </p>
          </div>
          <div className="text-center sm:text-left">
            <div className="text-xs font-mono text-accent tracking-wider mb-3">02 — VERIFIED</div>
            <p className="text-muted text-sm leading-relaxed">
              Cryptographic proof at every step. Not trust-us reporting—verify-it-yourself credentials.
            </p>
          </div>
          <div className="text-center sm:text-left">
            <div className="text-xs font-mono text-accent tracking-wider mb-3">03 — ALIGNED</div>
            <p className="text-muted text-sm leading-relaxed">
              We win when you win. Better performance, less waste, proof that holds up in any room.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
