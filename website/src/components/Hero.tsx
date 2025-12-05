'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 grid-pattern opacity-50" />

      {/* Corner Plus Signs */}
      <div className="absolute top-8 left-8 text-muted/30 font-mono text-sm">+</div>
      <div className="absolute top-8 right-8 text-muted/30 font-mono text-sm">+</div>
      <div className="absolute bottom-8 left-8 text-muted/30 font-mono text-sm">+</div>
      <div className="absolute bottom-8 right-8 text-muted/30 font-mono text-sm">+</div>

      {/* Gradient Orb */}
      <motion.div
        style={{ y }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-radial from-accent/5 via-transparent to-transparent blur-3xl pointer-events-none"
      />

      {/* Content */}
      <motion.div style={{ opacity }} className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 text-center">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-3 px-4 py-2 border border-border rounded-full text-xs font-mono tracking-wider text-muted uppercase">
            <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
            The Control Layer for Programmatic
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-[clamp(3rem,12vw,12rem)] leading-[0.85] tracking-[-0.03em] mb-8"
          style={{ fontFamily: 'var(--font-display), sans-serif' }}
        >
          <span className="block text-foreground">TAKE</span>
          <span className="block text-foreground">
            BACK{' '}
            <span className="text-accent">CONTROL</span>
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-muted leading-relaxed mb-12"
        >
          Every segment vetted. Every dollar proven. Every bid yours.
          <br className="hidden md:block" />
          <span className="text-foreground">The neutral intelligence layer between you and your DSP.</span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#contact" className="btn-primary">
            Start the Conversation
          </a>
          <a href="#products" className="btn-secondary">
            See How It Works
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="flex flex-col items-center gap-3"
          >
            <span className="text-xs font-mono tracking-wider text-muted uppercase">Scroll</span>
            <div className="w-[1px] h-12 bg-gradient-to-b from-muted to-transparent" />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Decorative Lines */}
      <div className="absolute left-0 top-1/2 w-32 h-[1px] bg-gradient-to-r from-transparent to-border" />
      <div className="absolute right-0 top-1/2 w-32 h-[1px] bg-gradient-to-l from-transparent to-border" />
    </section>
  );
}
