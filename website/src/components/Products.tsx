'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { VetoStamp, WaxSeal, PushPin, MoneyArrow } from './Icons';

const products = [
  {
    id: 'govern',
    name: 'Govern',
    tagline: 'Stop paying for garbage data.',
    description: 'Real-time segment scoring. Veto auto-appended segments before the bid fires. Keep only what adds value.',
    icon: 'veto',
    stat: '39',
    statLabel: 'segments vetoed avg',
  },
  {
    id: 'prove',
    name: 'Prove',
    tagline: 'Your proof, not theirs.',
    description: 'Cryptographic fingerprints prove audience composition. Walk into any meeting with verifiable evidence.',
    icon: 'seal',
    stat: '100%',
    statLabel: 'audit trail',
  },
  {
    id: 'local',
    name: 'Local',
    tagline: 'Pull national dollars into your market.',
    description: 'Auto-split national audiences into 200+ hyper-local cohorts with proof of equal value.',
    icon: 'pin',
    stat: '200+',
    statLabel: 'local cohorts',
  },
  {
    id: 'direct',
    name: 'Direct',
    tagline: 'Know exactly where to buy.',
    description: 'Real-time impression scoring across DSPs. Route spend to highest-performing paths.',
    icon: 'arrow',
    stat: '2.1x',
    statLabel: 'avg lift identified',
  },
  {
    id: 'route',
    name: 'Route',
    tagline: 'Budget follows performance.',
    description: 'Automatic cross-DSP optimization based on outcomes, not vendor self-reporting.',
    icon: 'arrow',
    stat: '+41%',
    statLabel: 'ROAS improvement',
  },
];

function ProductIcon({ icon }: { icon: string }) {
  switch (icon) {
    case 'veto':
      return <VetoStamp className="w-20 h-10" />;
    case 'seal':
      return <WaxSeal className="w-14 h-14" />;
    case 'pin':
      return <PushPin className="w-10 h-12" />;
    case 'arrow':
      return <MoneyArrow className="w-14 h-10" />;
    default:
      return null;
  }
}

export default function Products() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section ref={sectionRef} id="products" className="section">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="type-label-accent mb-4 block">The Suite</span>
          <h2 className="type-display-md max-w-3xl">
            Five tools to deconstruct your spend.
          </h2>
        </motion.div>

        {/* Product grid - brutalist cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              className="suite-card flex flex-col"
            >
              {/* Icon */}
              <div className="mb-6 h-14 flex items-center">
                <ProductIcon icon={product.icon} />
              </div>

              {/* Name */}
              <h3 className="type-display-sm mb-2">{product.name}</h3>

              {/* Tagline */}
              <p className="text-[var(--accent)] font-mono text-sm font-semibold mb-4">
                {product.tagline}
              </p>

              {/* Description */}
              <p className="text-[var(--text-secondary)] text-sm leading-relaxed flex-1">
                {product.description}
              </p>

              {/* Stat */}
              <div className="mt-6 pt-4 border-t border-[var(--border)]">
                <span className="font-mono text-2xl font-bold text-[var(--text-primary)]">
                  {product.stat}
                </span>
                <span className="type-label text-[var(--text-tertiary)] ml-3">
                  {product.statLabel}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="type-label text-[var(--text-tertiary)]">
            All tools include cryptographic proof generation
          </p>
        </motion.div>
      </div>
    </section>
  );
}
