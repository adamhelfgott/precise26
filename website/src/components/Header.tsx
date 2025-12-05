'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-background/80 backdrop-blur-xl border-b border-border'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-16">
          <nav className="flex items-center justify-between h-20 md:h-24">
            {/* Logo */}
            <a href="#" className="relative group">
              <div className="flex items-center gap-1">
                <span className="text-muted text-xs font-mono opacity-50 group-hover:opacity-100 transition-opacity">+</span>
                <span
                  className="text-2xl md:text-3xl font-bold tracking-[-0.02em] text-foreground"
                  style={{ fontFamily: 'var(--font-display), sans-serif' }}
                >
                  PRECISE
                </span>
                <span className="text-muted text-xs font-mono opacity-50 group-hover:opacity-100 transition-opacity">+</span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-12">
              <a
                href="#products"
                className="text-sm text-muted hover:text-foreground transition-colors link-underline"
              >
                Products
              </a>
              <a
                href="#approach"
                className="text-sm text-muted hover:text-foreground transition-colors link-underline"
              >
                Approach
              </a>
              <a
                href="#partners"
                className="text-sm text-muted hover:text-foreground transition-colors link-underline"
              >
                Partners
              </a>
              <a
                href="#contact"
                className="btn-primary inline-block"
              >
                Get in Touch
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden relative w-10 h-10 flex items-center justify-center"
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-4">
                <span
                  className={`absolute left-0 w-full h-[1px] bg-foreground transition-all duration-300 ${
                    isMobileMenuOpen ? 'top-1/2 rotate-45' : 'top-0'
                  }`}
                />
                <span
                  className={`absolute left-0 top-1/2 w-full h-[1px] bg-foreground transition-all duration-300 ${
                    isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                  }`}
                />
                <span
                  className={`absolute left-0 w-full h-[1px] bg-foreground transition-all duration-300 ${
                    isMobileMenuOpen ? 'top-1/2 -rotate-45' : 'bottom-0'
                  }`}
                />
              </div>
            </button>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-background md:hidden"
          >
            <motion.nav
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="flex flex-col items-center justify-center h-full gap-8"
            >
              <a
                href="#products"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-3xl font-display tracking-wide text-foreground"
              >
                Products
              </a>
              <a
                href="#approach"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-3xl font-display tracking-wide text-foreground"
              >
                Approach
              </a>
              <a
                href="#partners"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-3xl font-display tracking-wide text-foreground"
              >
                Partners
              </a>
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="btn-primary mt-8"
              >
                Get in Touch
              </a>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
