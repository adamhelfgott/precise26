'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-16 md:py-24 px-6 md:px-12 lg:px-16 border-t border-border">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid md:grid-cols-[2fr,1fr,1fr,1fr] gap-12 md:gap-8 mb-16">
          {/* Brand Column */}
          <div>
            <a href="#" className="inline-block mb-6">
              <div className="flex items-center gap-1">
                <span className="text-muted text-xs font-mono">+</span>
                <span
                  className="text-2xl font-bold tracking-[-0.02em] text-foreground"
                  style={{ fontFamily: 'var(--font-display), sans-serif' }}
                >
                  PRECISE
                </span>
                <span className="text-muted text-xs font-mono">+</span>
              </div>
            </a>
            <p className="text-muted text-sm leading-relaxed max-w-xs">
              The control layer for programmatic.
              <br />
              Every segment vetted. Every dollar proven.
            </p>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-xs font-mono tracking-widest text-muted uppercase mb-4">
              Products
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#products" className="text-sm text-foreground hover:text-accent transition-colors">
                  Govern
                </a>
              </li>
              <li>
                <a href="#products" className="text-sm text-foreground hover:text-accent transition-colors">
                  Prove
                </a>
              </li>
              <li>
                <a href="#products" className="text-sm text-foreground hover:text-accent transition-colors">
                  Local
                </a>
              </li>
              <li>
                <a href="#products" className="text-sm text-foreground hover:text-accent transition-colors">
                  Direct
                </a>
                <span className="ml-2 text-xs font-mono text-muted">Soon</span>
              </li>
              <li>
                <a href="#products" className="text-sm text-foreground hover:text-accent transition-colors">
                  Route
                </a>
                <span className="ml-2 text-xs font-mono text-muted">Soon</span>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-mono tracking-widest text-muted uppercase mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#approach" className="text-sm text-foreground hover:text-accent transition-colors">
                  Approach
                </a>
              </li>
              <li>
                <a href="#partners" className="text-sm text-foreground hover:text-accent transition-colors">
                  Partners
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm text-foreground hover:text-accent transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-xs font-mono tracking-widest text-muted uppercase mb-4">
              Connect
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:hello@precise.ai"
                  className="text-sm text-foreground hover:text-accent transition-colors"
                >
                  hello@precise.ai
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/company/precise-ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-foreground hover:text-accent transition-colors"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted">
            &copy; {currentYear} Precise.ai. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-muted hover:text-foreground transition-colors">
              Privacy
            </a>
            <a href="#" className="text-xs text-muted hover:text-foreground transition-colors">
              Terms
            </a>
          </div>

          {/* Decorative */}
          <div className="hidden md:flex items-center gap-2 text-muted/30 font-mono text-xs">
            <span>+</span>
            <span>+</span>
            <span>+</span>
            <span>+</span>
          </div>
        </div>
      </div>

      {/* Large background text */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.02 }}
        viewport={{ once: true }}
        className="absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none"
      >
        <div
          className="text-[20vw] leading-none tracking-[-0.05em] text-foreground whitespace-nowrap"
          style={{ fontFamily: 'var(--font-display), sans-serif' }}
        >
          PRECISE
        </div>
      </motion.div>
    </footer>
  );
}
