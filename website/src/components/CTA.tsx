'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function CTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-20%' });

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative section-padding bg-surface overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient orb */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-radial from-accent/10 via-transparent to-transparent blur-3xl" />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-30" />

      {/* Corner plus signs */}
      <div className="absolute top-8 left-8 text-accent/30 font-mono text-lg">+</div>
      <div className="absolute top-8 right-8 text-accent/30 font-mono text-lg">+</div>
      <div className="absolute bottom-8 left-8 text-accent/30 font-mono text-lg">+</div>
      <div className="absolute bottom-8 right-8 text-accent/30 font-mono text-lg">+</div>

      <div className="relative max-w-[1000px] mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="text-xs font-mono tracking-widest text-accent uppercase mb-6 block">
            Ready?
          </span>

          <h2
            className="text-[clamp(2.5rem,8vw,6rem)] leading-[0.9] tracking-[-0.03em] mb-8"
            style={{ fontFamily: 'var(--font-display), sans-serif' }}
          >
            LET&apos;S BUILD
            <br />
            <span className="text-accent">SOMETHING</span>
          </h2>

          <p className="text-lg md:text-xl text-muted leading-relaxed max-w-2xl mx-auto mb-12">
            Whether you&apos;re prepping for a review, tired of black-box reporting,
            or just want to know where your money actually goes—
            <span className="text-foreground"> we should talk.</span>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="mailto:hello@precise.ai"
            className="btn-primary text-lg px-10 py-5"
          >
            Get in Touch
          </a>
          <span className="text-muted text-sm">or</span>
          <a
            href="mailto:hello@precise.ai"
            className="text-foreground hover:text-accent transition-colors font-mono text-sm link-underline"
          >
            hello@precise.ai
          </a>
        </motion.div>

        {/* Quick pitch points */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 pt-12 border-t border-border"
        >
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-sm text-muted">
            <div className="flex items-center gap-2">
              <span className="text-accent">+</span>
              <span>Free waste audit</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-accent">+</span>
              <span>45-day pilot</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-accent">+</span>
              <span>No lock-in</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-accent">+</span>
              <span>Live in weeks</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
