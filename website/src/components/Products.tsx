'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const products = [
  {
    id: 'govern',
    name: 'Govern',
    description: 'Real-time scoring and veto of auto-appended segments. See what adds value. Kill what doesn\'t.',
    status: 'Live',
  },
  {
    id: 'prove',
    name: 'Prove',
    description: 'Cryptographically signed reports of what you eliminated and what you gained. Your proof, not theirs.',
    status: 'Live',
  },
  {
    id: 'local',
    name: 'Local',
    description: 'Auto-split audiences into hyper-local cohorts. Pull national dollars into your market with privacy-safe proof.',
    status: 'Live',
  },
  {
    id: 'direct',
    name: 'Direct',
    description: 'Impression-level scoring that shows exactly where your next dollar should go. Real-time, cross-DSP.',
    status: 'Coming Q1',
  },
  {
    id: 'route',
    name: 'Route',
    description: 'Budget follows performance automatically. Set the outcome, we handle the allocation.',
    status: 'Coming Q2',
  },
];

export default function Products() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);

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
          <span className="type-label-accent mb-6 block">Products</span>
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
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
              className="group border-t border-[var(--border)] last:border-b"
            >
              <div className="py-8 md:py-10 grid md:grid-cols-[200px_1fr_120px] gap-4 md:gap-8 items-start md:items-center">
                {/* Product name */}
                <div className="flex items-center gap-4">
                  <span className="type-label text-[var(--text-tertiary)]">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3
                    className={`type-display-sm transition-colors duration-300 ${
                      hoveredProduct === product.id ? 'text-[var(--accent)]' : ''
                    }`}
                  >
                    {product.name}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-[var(--text-secondary)] leading-relaxed md:pl-4">
                  {product.description}
                </p>

                {/* Status */}
                <div className="md:text-right">
                  <span
                    className={`type-label ${
                      product.status === 'Live'
                        ? 'text-[var(--accent)]'
                        : 'text-[var(--text-tertiary)]'
                    }`}
                  >
                    {product.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
