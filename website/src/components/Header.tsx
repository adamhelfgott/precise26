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
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[var(--bg-primary)]/90 backdrop-blur-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          <nav className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2">
              <span className="reg-mark">+</span>
              <span className="type-display text-sm tracking-[0.3em]">
                PRECISE
              </span>
              <span className="reg-mark">+</span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-10">
              <a href="#approach" className="nav-link">
                Approach
              </a>
              <a href="#products" className="nav-link">
                Products
              </a>
              <a href="#contact" className="nav-link">
                Contact
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2"
              aria-label="Toggle menu"
            >
              <div className="w-5 h-3 flex flex-col justify-between">
                <span
                  className={`block h-px bg-[var(--text-primary)] transition-transform duration-300 ${
                    isMobileMenuOpen ? 'rotate-45 translate-y-[5px]' : ''
                  }`}
                />
                <span
                  className={`block h-px bg-[var(--text-primary)] transition-opacity duration-300 ${
                    isMobileMenuOpen ? 'opacity-0' : ''
                  }`}
                />
                <span
                  className={`block h-px bg-[var(--text-primary)] transition-transform duration-300 ${
                    isMobileMenuOpen ? '-rotate-45 -translate-y-[5px]' : ''
                  }`}
                />
              </div>
            </button>
          </nav>
        </div>

        {/* Hairline under header when scrolled */}
        <div
          className={`h-px bg-[var(--border)] transition-opacity duration-300 ${
            isScrolled ? 'opacity-100' : 'opacity-0'
          }`}
        />
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-[var(--bg-primary)] md:hidden pt-20"
          >
            <nav className="flex flex-col items-center justify-center h-full gap-8">
              <a
                href="#approach"
                onClick={() => setIsMobileMenuOpen(false)}
                className="type-display-sm"
              >
                Approach
              </a>
              <a
                href="#products"
                onClick={() => setIsMobileMenuOpen(false)}
                className="type-display-sm"
              >
                Products
              </a>
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="type-display-sm"
              >
                Contact
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
