'use client';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border)] py-12 px-6 md:px-12">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="reg-mark">+</span>
            <span className="type-display text-sm tracking-[0.3em]">PRECISE</span>
            <span className="reg-mark">+</span>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-6 md:gap-10">
            <a href="#approach" className="nav-link">Approach</a>
            <a href="#products" className="nav-link">Products</a>
            <a href="#contact" className="nav-link">Contact</a>
            <a href="mailto:hello@precise.ai" className="nav-link">hello@precise.ai</a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-[var(--border)] flex flex-col md:flex-row md:items-center justify-between gap-4">
          <span className="type-label text-[var(--text-tertiary)]">
            © {currentYear} Precise
          </span>
          <span className="type-label text-[var(--text-tertiary)]">
            Math, not promises.
          </span>
        </div>
      </div>
    </footer>
  );
}
