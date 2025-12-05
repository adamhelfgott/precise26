'use client';

import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';

const products = [
  {
    id: 'govern',
    name: 'Govern',
    tagline: 'Stop paying for garbage data.',
    problem: 'Your DSP auto-appends 40+ segments you never asked for. You pay for every one. Most add zero value.',
    mechanism: 'We score each segment in real-time, showing marginal lift vs cost. Before the bid fires, you see exactly what\'s being added—and veto anything that doesn\'t perform.',
    result: 'Eliminate 35-47% waste. Keep only segments that actually drive outcomes.',
  },
  {
    id: 'prove',
    name: 'Prove',
    tagline: 'Your proof, not theirs.',
    problem: 'You need to show clients and bosses that spend worked. But all you have is black-box DSP reporting you didn\'t generate.',
    mechanism: 'Every audience gets a cryptographic fingerprint—a Merkle root proving its exact composition without revealing members. We sign reports showing what you eliminated, what you kept, and the lift achieved. Verifiable by anyone.',
    result: 'Walk into any review with cryptographic proof that holds up. Not trust-us. Verify-it-yourself.',
  },
  {
    id: 'local',
    name: 'Local',
    tagline: 'Pull national dollars into your market.',
    problem: 'National budgets go to national buyers. You\'re a local trader watching dollars flow past your market.',
    mechanism: 'Auto-split national audiences into 200+ hyper-local cohorts. Each split carries cryptographic proof of composition—privacy-safe verification that your local cohort is as valuable as the national one.',
    result: 'Prove your market\'s ROAS is better. Take budget that used to bypass you.',
  },
  {
    id: 'direct',
    name: 'Direct',
    tagline: 'Know exactly where your next dollar should go.',
    problem: 'You\'re buying across multiple DSPs but have no way to compare real performance. Which impression is actually worth more?',
    mechanism: 'Real-time impression-level scoring across every DSP. "This MadHive CTV pod = 2.1x lift vs display elsewhere." Cross-platform intelligence that follows the signal, not the vendor.',
    result: 'Allocate with precision. Every dollar to the highest-performing path.',
  },
  {
    id: 'route',
    name: 'Route',
    tagline: 'Budget follows performance, not guesswork.',
    problem: 'Manual budget allocation is slow and reactive. By the time you shift spend, the opportunity is gone.',
    mechanism: 'Set your outcome targets. Route automatically shifts budget to best-performing paths in real-time. Cross-DSP optimization based on actual outcomes, not vendor self-reporting.',
    result: 'Continuous optimization without manual intervention. Better outcomes while you sleep.',
  },
];

export default function Products() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const [expandedProduct, setExpandedProduct] = useState<string | null>(null);

  const toggleProduct = (id: string) => {
    setExpandedProduct(expandedProduct === id ? null : id);
  };

  return (
    <section ref={sectionRef} id="products" className="section">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-24"
        >
          <span className="type-label-accent mb-6 block">The Suite</span>
          <h2 className="type-display-md max-w-3xl">
            Five tools to deconstruct your spend
            <span className="text-[var(--text-secondary)]"> and optimize what matters.</span>
          </h2>
        </motion.div>

        {/* Product list */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {products.map((product, index) => (
            <div
              key={product.id}
              className="border-t border-[var(--border)] last:border-b"
            >
              {/* Product header - clickable */}
              <button
                onClick={() => toggleProduct(product.id)}
                className="w-full py-8 md:py-10 flex items-center justify-between gap-4 text-left group cursor-pointer"
              >
                <div className="flex items-center gap-4 md:gap-8">
                  <span className="type-label text-[var(--text-tertiary)]">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3
                      className={`type-display-sm transition-colors duration-300 ${
                        expandedProduct === product.id ? 'text-[var(--accent)]' : 'group-hover:text-[var(--accent)]'
                      }`}
                    >
                      {product.name}
                    </h3>
                    <p className="text-[var(--text-secondary)] mt-2 text-sm md:text-base">
                      {product.tagline}
                    </p>
                  </div>
                </div>

                {/* Expand indicator */}
                <div className={`text-[var(--text-tertiary)] transition-transform duration-300 ${
                  expandedProduct === product.id ? 'rotate-45' : ''
                }`}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </div>
              </button>

              {/* Expanded content */}
              <AnimatePresence>
                {expandedProduct === product.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="pb-10 md:pb-12 pl-0 md:pl-20">
                      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
                        {/* Problem */}
                        <div>
                          <span className="type-label text-[var(--text-tertiary)] block mb-3">The Problem</span>
                          <p className="text-[var(--text-secondary)] leading-relaxed">
                            {product.problem}
                          </p>
                        </div>

                        {/* Mechanism */}
                        <div>
                          <span className="type-label text-[var(--accent)] block mb-3">What We Do</span>
                          <p className="text-[var(--text-primary)] leading-relaxed">
                            {product.mechanism}
                          </p>
                        </div>

                        {/* Result */}
                        <div>
                          <span className="type-label text-[var(--text-tertiary)] block mb-3">The Result</span>
                          <p className="text-[var(--text-secondary)] leading-relaxed">
                            {product.result}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
