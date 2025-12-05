'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const products = [
  {
    id: 'govern',
    name: 'Govern',
    tagline: 'Veto what doesn\'t work',
    description: 'Real-time scoring and automatic veto of auto-appended segments that add cost without value. Stop paying for data you never asked for.',
    features: ['Segment-level scoring', 'Automatic waste detection', 'Pre-bid veto power', 'Full transparency'],
    status: 'Live',
  },
  {
    id: 'prove',
    name: 'Prove',
    tagline: 'Win the room',
    description: 'Cryptographic proof of what you eliminated and what you gained. Walk into any review with reports you generated—not your DSP.',
    features: ['Valence-signed reports', 'Waste elimination tracking', 'ROAS verification', 'Audit-ready'],
    status: 'Live',
  },
  {
    id: 'local',
    name: 'Local',
    tagline: 'Own your market',
    description: 'Auto-split national audiences into hyper-local cohorts with privacy-safe proof. Pull national dollars into your territory.',
    features: ['200+ geo cohorts', 'Privacy-safe splits', 'CTV optimized', 'Market-level proof'],
    status: 'Live',
  },
  {
    id: 'direct',
    name: 'Direct',
    tagline: 'Know where to buy',
    description: 'Real-time impression scoring that tells you exactly where your next dollar should go. No guessing, no hoping.',
    features: ['Impression-level scoring', 'Cross-DSP intelligence', 'Real-time recommendations', 'Lift predictions'],
    status: 'Q1 2026',
  },
  {
    id: 'route',
    name: 'Route',
    tagline: 'Let performance decide',
    description: 'Budget automatically follows performance across DSPs and modalities. Set the goal. We handle the routing.',
    features: ['Automatic reallocation', 'Cross-platform optimization', 'Performance-driven routing', 'Outcome-based bidding'],
    status: 'Q2 2026',
  },
];

export default function Products() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-10%' });
  const [activeProduct, setActiveProduct] = useState(products[0].id);

  const currentProduct = products.find((p) => p.id === activeProduct) || products[0];

  return (
    <section
      ref={sectionRef}
      id="products"
      className="relative section-padding overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-radial from-accent/5 via-transparent to-transparent pointer-events-none" />

      <div className="relative max-w-[1400px] mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-24"
        >
          <span className="text-xs font-mono tracking-widest text-accent uppercase mb-4 block">
            The Suite
          </span>
          <h2
            className="text-[clamp(2.5rem,8vw,6rem)] leading-[0.9] tracking-[-0.03em]"
            style={{ fontFamily: 'var(--font-display), sans-serif' }}
          >
            FIVE WAYS TO
            <br />
            <span className="text-accent">TAKE CONTROL</span>
          </h2>
        </motion.div>

        {/* Product Navigation + Detail */}
        <div className="grid lg:grid-cols-[1fr,1.5fr] gap-12 lg:gap-16">
          {/* Product Tabs */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-2"
          >
            {products.map((product) => (
              <button
                key={product.id}
                onClick={() => setActiveProduct(product.id)}
                className={`w-full text-left p-6 border transition-all duration-300 group ${
                  activeProduct === product.id
                    ? 'border-accent bg-accent/5'
                    : 'border-border hover:border-muted bg-transparent'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`text-2xl md:text-3xl tracking-[-0.02em] transition-colors ${
                      activeProduct === product.id ? 'text-accent' : 'text-foreground'
                    }`}
                    style={{ fontFamily: 'var(--font-display), sans-serif' }}
                  >
                    {product.name}
                  </span>
                  <span
                    className={`text-xs font-mono tracking-wider px-2 py-1 ${
                      product.status === 'Live'
                        ? 'text-accent bg-accent/10'
                        : 'text-muted bg-muted/10'
                    }`}
                  >
                    {product.status}
                  </span>
                </div>
                <p className="text-sm text-muted">{product.tagline}</p>
              </button>
            ))}
          </motion.div>

          {/* Product Detail */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <motion.div
              key={activeProduct}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="border border-border p-8 md:p-12 bg-surface/50 relative overflow-hidden"
            >
              {/* Corner decoration */}
              <div className="absolute top-0 right-0 w-32 h-32">
                <div className="absolute top-4 right-4 text-6xl font-mono text-accent/10">+</div>
              </div>

              {/* Product Name */}
              <div className="mb-8">
                <span className="text-xs font-mono tracking-widest text-accent uppercase mb-3 block">
                  Precise {currentProduct.name}
                </span>
                <h3
                  className="text-4xl md:text-5xl tracking-[-0.02em] mb-4"
                  style={{ fontFamily: 'var(--font-display), sans-serif' }}
                >
                  {currentProduct.tagline}
                </h3>
                <p className="text-lg text-muted leading-relaxed max-w-xl">
                  {currentProduct.description}
                </p>
              </div>

              {/* Features */}
              <div className="grid sm:grid-cols-2 gap-4">
                {currentProduct.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 text-sm"
                  >
                    <span className="text-accent">+</span>
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Bottom CTA */}
              <div className="mt-10 pt-8 border-t border-border">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-foreground transition-colors group"
                >
                  Learn more about {currentProduct.name}
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
