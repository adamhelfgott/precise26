'use client';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t-[3px] border-[var(--border)] py-12 px-6 md:px-12">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <span className="reg-mark">+</span>
            <span className="font-bold text-lg tracking-tight">PRECISE</span>
            <span className="reg-mark">+</span>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-6 md:gap-10">
            <a href="#approach" className="nav-link">Approach</a>
            <a href="#scenario" className="nav-link">In Action</a>
            <a href="#products" className="nav-link">Products</a>
            <a href="#contact" className="nav-link">Contact</a>
            <a href="mailto:hello@precise.ai" className="nav-link text-[var(--accent)]">hello@precise.ai</a>
          </div>
        </div>

        {/* Founder line */}
        <div className="mt-8 text-center md:text-left">
          <p className="text-[#666666] text-sm">
            Built by Adam Helfgott — founder of MadHive — now fixing what comes next.
          </p>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-8 border-t-[3px] border-[var(--border)] flex flex-col md:flex-row md:items-center justify-between gap-4">
          <span className="type-label text-[var(--text-tertiary)]">
            © {currentYear} Precise. Your advocate in programmatic.
          </span>
          <span className="font-mono text-sm text-[var(--accent)]">
            Math, not promises.
          </span>
        </div>
      </div>
    </footer>
  );
}
