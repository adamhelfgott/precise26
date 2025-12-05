// Hand-stamped SVG icons for Local CTV page - 12-panel comic style

export function LocalTrader({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 60" className={className}>
      {/* Simple stick figure with money bag */}
      <circle cx="30" cy="12" r="8" fill="#00B894" stroke="#1A1A1A" strokeWidth="2"/>
      <path d="M30 20 L30 38" stroke="#1A1A1A" strokeWidth="3" strokeLinecap="round"/>
      <path d="M30 28 L20 36" stroke="#1A1A1A" strokeWidth="3" strokeLinecap="round"/>
      <path d="M30 28 L40 24" stroke="#1A1A1A" strokeWidth="3" strokeLinecap="round"/>
      <path d="M30 38 L22 52" stroke="#1A1A1A" strokeWidth="3" strokeLinecap="round"/>
      <path d="M30 38 L38 52" stroke="#1A1A1A" strokeWidth="3" strokeLinecap="round"/>
      {/* Money bag in hand */}
      <circle cx="42" cy="22" r="6" fill="#00B894"/>
      <text x="42" y="25" textAnchor="middle" fontSize="8" fontWeight="700" fill="#1A1A1A">$</text>
    </svg>
  );
}

export function NationalPlan({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 60" className={className}>
      {/* Big building with X */}
      <rect x="12" y="16" width="36" height="40" fill="#333" stroke="#1A1A1A" strokeWidth="2"/>
      {/* Windows */}
      <rect x="18" y="22" width="6" height="6" fill="#555"/>
      <rect x="27" y="22" width="6" height="6" fill="#555"/>
      <rect x="36" y="22" width="6" height="6" fill="#555"/>
      <rect x="18" y="32" width="6" height="6" fill="#555"/>
      <rect x="27" y="32" width="6" height="6" fill="#555"/>
      <rect x="36" y="32" width="6" height="6" fill="#555"/>
      {/* TTD label */}
      <text x="30" y="50" textAnchor="middle" fontSize="8" fontWeight="700" fill="#888">TTD</text>
      {/* Red X overlay */}
      <path d="M16 20 L44 52" stroke="#E84335" strokeWidth="4" strokeLinecap="round"/>
      <path d="M44 20 L16 52" stroke="#E84335" strokeWidth="4" strokeLinecap="round"/>
    </svg>
  );
}

export function BudgetArrow({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 40" className={className} style={{ transform: 'rotate(-2deg)' }}>
      {/* Thick arrow with money */}
      <path
        d="M5 20 L75 20"
        stroke="#00B894"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <path
        d="M65 10 L80 20 L65 30"
        fill="none"
        stroke="#00B894"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Dollar signs along the arrow */}
      <text x="20" y="16" fontSize="10" fontWeight="700" fill="#1A1A1A">$</text>
      <text x="35" y="16" fontSize="10" fontWeight="700" fill="#1A1A1A">$</text>
      <text x="50" y="16" fontSize="10" fontWeight="700" fill="#1A1A1A">$</text>
      {/* 100% label */}
      <text x="88" y="24" fontSize="10" fontWeight="700" fill="#00B894">100%</text>
    </svg>
  );
}

export function LocalStation({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 60" className={className}>
      {/* TV/Antenna icon */}
      <rect x="12" y="24" width="36" height="28" rx="2" fill="#1A1A1A" stroke="#00B894" strokeWidth="2"/>
      {/* Screen */}
      <rect x="16" y="28" width="28" height="18" fill="#00B894" opacity="0.3"/>
      {/* Antenna */}
      <path d="M24 24 L30 8 L36 24" fill="none" stroke="#00B894" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="30" cy="8" r="3" fill="#00B894"/>
      {/* Signal waves */}
      <path d="M40 12 Q48 8 48 16" fill="none" stroke="#00B894" strokeWidth="1.5" opacity="0.6"/>
      <path d="M44 10 Q54 4 54 18" fill="none" stroke="#00B894" strokeWidth="1.5" opacity="0.4"/>
    </svg>
  );
}

export function ProofBadge({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 60" className={className} style={{ transform: 'rotate(-3deg)' }}>
      {/* Shield shape */}
      <path
        d="M30 4 L52 12 L52 32 Q52 48 30 56 Q8 48 8 32 L8 12 Z"
        fill="#00B894"
        stroke="#1A1A1A"
        strokeWidth="2"
      />
      {/* Checkmark */}
      <path
        d="M20 30 L27 38 L42 22"
        fill="none"
        stroke="#FAFAFA"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Cryptographic hash pattern */}
      <text x="30" y="50" textAnchor="middle" fontSize="6" fill="#1A1A1A" opacity="0.5">PROOF</text>
    </svg>
  );
}

// 12-panel comic frames for Local page story
export function ComicPanel({
  number,
  children,
  className = ''
}: {
  number: number;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`relative border-[3px] border-[var(--border)] bg-[var(--bg-elevated)] p-4 ${className}`}>
      <span className="absolute -top-3 -left-3 w-7 h-7 bg-[var(--accent)] text-[var(--ink)] flex items-center justify-center font-mono font-bold text-sm">
        {number}
      </span>
      {children}
    </div>
  );
}
