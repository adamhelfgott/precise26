// Hand-stamped SVG icons for CDP integration page

export function CDPIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 60" className={className} style={{ transform: 'rotate(1deg)' }}>
      {/* Database stack */}
      <ellipse cx="30" cy="16" rx="20" ry="8" fill="#333" stroke="#FAFAFA" strokeWidth="2"/>
      <path d="M10 16 L10 28 Q10 36 30 36 Q50 36 50 28 L50 16" fill="#333" stroke="#FAFAFA" strokeWidth="2"/>
      <ellipse cx="30" cy="28" rx="20" ry="8" fill="none" stroke="#FAFAFA" strokeWidth="1" opacity="0.5"/>
      <path d="M10 28 L10 40 Q10 48 30 48 Q50 48 50 40 L50 28" fill="#333" stroke="#FAFAFA" strokeWidth="2"/>
      <ellipse cx="30" cy="40" rx="20" ry="8" fill="none" stroke="#FAFAFA" strokeWidth="1" opacity="0.5"/>
      {/* CDP label */}
      <text x="30" y="54" textAnchor="middle" fontSize="8" fontWeight="700" fill="#888">CDP</text>
    </svg>
  );
}

export function GovernIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 60" className={className} style={{ transform: 'rotate(-2deg)' }}>
      {/* Gavel/Judge icon */}
      <rect x="16" y="44" width="28" height="6" rx="1" fill="#00B894"/>
      <rect x="26" y="38" width="8" height="8" fill="#00B894"/>
      {/* Gavel head */}
      <rect x="8" y="16" width="24" height="12" rx="2" fill="#00B894" style={{ transform: 'rotate(-30deg)', transformOrigin: '20px 22px' }}/>
      <rect x="18" y="22" width="4" height="18" fill="#00B894"/>
      {/* Stars for authority */}
      <text x="44" y="20" fontSize="12" fill="#00B894">*</text>
      <text x="48" y="32" fontSize="8" fill="#00B894">*</text>
      {/* Label */}
      <text x="30" y="56" textAnchor="middle" fontSize="6" fontWeight="700" fill="#888">GOVERN</text>
    </svg>
  );
}

export function ValenceIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 60" className={className} style={{ transform: 'rotate(2deg)' }}>
      {/* Valence = proof of value */}
      <circle cx="30" cy="28" r="22" fill="none" stroke="#00B894" strokeWidth="3"/>
      {/* Check and dollar intertwined */}
      <path
        d="M18 28 L26 36 L42 20"
        fill="none"
        stroke="#00B894"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Value indicator */}
      <text x="30" y="46" textAnchor="middle" fontSize="10" fontWeight="700" fill="#00B894">$</text>
      {/* Label */}
      <text x="30" y="56" textAnchor="middle" fontSize="6" fontWeight="700" fill="#888">VALENCE</text>
    </svg>
  );
}

export function LiftIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 60" className={className} style={{ transform: 'rotate(-1deg)' }}>
      {/* Bar chart showing lift */}
      <rect x="8" y="40" width="12" height="12" fill="#555"/>
      <rect x="24" y="28" width="12" height="24" fill="#555"/>
      <rect x="40" y="14" width="12" height="38" fill="#00B894"/>
      {/* Arrow pointing up */}
      <path
        d="M60 40 L60 14"
        stroke="#00B894"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M54 20 L60 12 L66 20"
        fill="none"
        stroke="#00B894"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Percentage */}
      <text x="60" y="56" textAnchor="middle" fontSize="10" fontWeight="700" fill="#00B894">+41%</text>
    </svg>
  );
}

export function FlowArrow({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 20" className={className}>
      <path
        d="M4 10 L28 10"
        stroke="#00B894"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="4 4"
      />
      <path
        d="M24 5 L32 10 L24 15"
        fill="none"
        stroke="#00B894"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function PartnerHandshake({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 50" className={className} style={{ transform: 'rotate(-2deg)' }}>
      {/* Two hands shaking */}
      <path
        d="M8 30 L16 22 L24 26 L32 22 L40 26 L48 22 L52 28"
        fill="none"
        stroke="#00B894"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Wrist/arm left */}
      <path
        d="M4 38 L12 32 L16 22"
        fill="none"
        stroke="#FAFAFA"
        strokeWidth="3"
        strokeLinecap="round"
      />
      {/* Wrist/arm right */}
      <path
        d="M56 38 L48 32 L48 22"
        fill="none"
        stroke="#FAFAFA"
        strokeWidth="3"
        strokeLinecap="round"
      />
      {/* Sparkles */}
      <text x="30" y="12" textAnchor="middle" fontSize="10" fill="#00B894">*</text>
      <text x="20" y="16" fontSize="6" fill="#00B894">*</text>
      <text x="40" y="16" fontSize="6" fill="#00B894">*</text>
    </svg>
  );
}
