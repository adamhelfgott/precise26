'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const problems = [
  {
    number: '01',
    title: 'Invisible Tax',
    description: 'Your DSP auto-appends segments you never asked for. Dozens of them. On every buy.',
  },
  {
    number: '02',
    title: 'Zero Visibility',
    description: "You can't see which segments hit, which miss, or which are pure waste.",
  },
  {
    number: '03',
    title: 'No Proof',
    description: "When it's time to prove ROAS, you're showing black-box reports you didn't generate.",
  },
];

export default function Problem() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-20%' });

  return (
    <section
      ref={sectionRef}
      id="approach"
      className="relative section-padding bg-surface"
    >
      {/* Background accent line */}
      <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-accent/20 to-transparent" />

      <div className="max-w-[1400px] mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-24 md:mb-32"
        >
          <span className="text-xs font-mono tracking-widest text-accent uppercase mb-4 block">
            The Problem
          </span>
          <h2
            className="text-[clamp(2.5rem,8vw,6rem)] leading-[0.9] tracking-[-0.03em] max-w-4xl"
            style={{ fontFamily: 'var(--font-display), sans-serif' }}
          >
            YOUR DSP IS
            <br />
            <span className="text-muted">SPENDING YOUR MONEY</span>
            <br />
            FOR YOU
          </h2>
        </motion.div>

        {/* Problem Cards */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.number}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.15 }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative p-8 md:p-10 border border-border hover:border-accent/30 transition-colors duration-500 bg-background/50">
                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-accent/30 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-accent/30 opacity-0 group-hover:opacity-100 transition-opacity" />

                {/* Number */}
                <span className="block text-xs font-mono tracking-widest text-muted mb-6">
                  {problem.number}
                </span>

                {/* Title */}
                <h3
                  className="text-2xl md:text-3xl mb-4 tracking-[-0.02em]"
                  style={{ fontFamily: 'var(--font-display), sans-serif' }}
                >
                  {problem.title}
                </h3>

                {/* Description */}
                <p className="text-muted leading-relaxed">
                  {problem.description}
                </p>

                {/* Bottom line accent */}
                <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-accent/0 group-hover:bg-accent/30 transition-colors duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-24 md:mt-32 text-center"
        >
          <p className="text-xl md:text-2xl text-muted max-w-3xl mx-auto leading-relaxed">
            You built the audience. You set the strategy.
            <br />
            <span className="text-foreground">Why is someone else making the calls?</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
