'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Partners() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-20%' });

  return (
    <section
      ref={sectionRef}
      id="partners"
      className="relative section-padding bg-surface overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-radial from-accent/5 via-transparent to-transparent" />
      </div>

      <div className="relative max-w-[1400px] mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-24"
        >
          <span className="text-xs font-mono tracking-widest text-accent uppercase mb-4 block">
            Partnership
          </span>
          <h2
            className="text-[clamp(2rem,6vw,4.5rem)] leading-[0.95] tracking-[-0.03em] mb-6"
            style={{ fontFamily: 'var(--font-display), sans-serif' }}
          >
            BUILT FOR THE
            <br />
            <span className="text-accent">CTV FUTURE</span>
          </h2>
          <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto leading-relaxed">
            Strategic partnership with MadHive—the leader in local CTV.
            <br />
            <span className="text-foreground">Closed-loop outcomes. Proven lift. Real proof.</span>
          </p>
        </motion.div>

        {/* Partnership Card */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="border border-border p-8 md:p-16 relative">
            {/* Corner plus signs */}
            <div className="absolute top-4 left-4 text-accent/30 font-mono text-sm">+</div>
            <div className="absolute top-4 right-4 text-accent/30 font-mono text-sm">+</div>
            <div className="absolute bottom-4 left-4 text-accent/30 font-mono text-sm">+</div>
            <div className="absolute bottom-4 right-4 text-accent/30 font-mono text-sm">+</div>

            <div className="grid md:grid-cols-2 gap-12 md:gap-16">
              {/* Left Column */}
              <div>
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-[1px] w-8 bg-accent" />
                  <span className="text-xs font-mono tracking-widest text-muted uppercase">
                    October 2025
                  </span>
                </div>

                <h3
                  className="text-3xl md:text-4xl mb-6 tracking-[-0.02em]"
                  style={{ fontFamily: 'var(--font-display), sans-serif' }}
                >
                  Strategic Investment
                  <br />
                  <span className="text-muted">& Integration</span>
                </h3>

                <p className="text-muted leading-relaxed mb-8">
                  MadHive&apos;s equity investment validates our approach to transparency and performance.
                  We&apos;re now embedded in their stack—powering governance, proof, and optimization
                  for the largest local CTV network in the country.
                </p>

                <div className="flex flex-wrap gap-3">
                  <span className="px-3 py-1 text-xs font-mono tracking-wider border border-border text-muted">
                    300+ Station Groups
                  </span>
                  <span className="px-3 py-1 text-xs font-mono tracking-wider border border-border text-muted">
                    Closed-Loop Data
                  </span>
                  <span className="px-3 py-1 text-xs font-mono tracking-wider border border-border text-muted">
                    Maverick AI
                  </span>
                </div>
              </div>

              {/* Right Column - Benefits */}
              <div className="space-y-6">
                <div className="p-6 border border-border hover:border-accent/30 transition-colors">
                  <span className="text-accent text-xs font-mono mb-2 block">01</span>
                  <h4 className="text-lg font-medium mb-2">Outcome-Linked Segments</h4>
                  <p className="text-sm text-muted">
                    Access provenance-backed data segments with proven real-world lift—not modeled, not estimated. Proven.
                  </p>
                </div>

                <div className="p-6 border border-border hover:border-accent/30 transition-colors">
                  <span className="text-accent text-xs font-mono mb-2 block">02</span>
                  <h4 className="text-lg font-medium mb-2">Local Market Dominance</h4>
                  <p className="text-sm text-muted">
                    Hyper-local CTV targeting with governance built in. No waste, just reach.
                  </p>
                </div>

                <div className="p-6 border border-border hover:border-accent/30 transition-colors">
                  <span className="text-accent text-xs font-mono mb-2 block">03</span>
                  <h4 className="text-lg font-medium mb-2">Unified Proof Layer</h4>
                  <p className="text-sm text-muted">
                    Valence-signed credentials across every activation. Your proof, your reports.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center text-sm text-muted mt-12"
        >
          Additional DSP integrations available. Trade Desk, DV360, and others via our activation layer.
        </motion.p>
      </div>
    </section>
  );
}
