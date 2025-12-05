// Hand-stamped style SVG icons with imperfect circles, slight rotation, ink bleed

export function VetoStamp({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 80 40"
      className={className}
      style={{ transform: 'rotate(-3deg)' }}
    >
      {/* Imperfect stamp border */}
      <path
        d="M4 6 Q2 4 6 3 L72 2 Q78 3 77 8 L78 32 Q77 38 72 37 L8 38 Q2 37 3 32 Z"
        fill="none"
        stroke="#E84335"
        strokeWidth="2.5"
        strokeLinecap="round"
        style={{ filter: 'url(#inkBleed)' }}
      />
      {/* VETO text */}
      <text
        x="40"
        y="26"
        textAnchor="middle"
        fontFamily="IBM Plex Mono, monospace"
        fontSize="18"
        fontWeight="700"
        fill="#E84335"
        style={{ filter: 'url(#inkBleed)' }}
      >
        VETO
      </text>
      {/* Ink bleed filter */}
      <defs>
        <filter id="inkBleed" x="-10%" y="-10%" width="120%" height="120%">
          <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="2" result="noise"/>
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="1.5" xChannelSelector="R" yChannelSelector="G"/>
        </filter>
      </defs>
    </svg>
  );
}

export function KeepStamp({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 80 40"
      className={className}
      style={{ transform: 'rotate(2deg)' }}
    >
      {/* Imperfect stamp border */}
      <path
        d="M5 5 Q3 3 7 4 L73 3 Q77 4 76 7 L77 33 Q76 37 73 36 L7 37 Q3 36 4 33 Z"
        fill="none"
        stroke="#00B894"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {/* KEEP text */}
      <text
        x="40"
        y="26"
        textAnchor="middle"
        fontFamily="IBM Plex Mono, monospace"
        fontSize="18"
        fontWeight="700"
        fill="#00B894"
      >
        KEEP
      </text>
    </svg>
  );
}

export function WaxSeal({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 60 60"
      className={className}
      style={{ transform: 'rotate(-5deg)' }}
    >
      {/* Imperfect wax circle */}
      <path
        d="M30 4 Q45 3 52 15 Q58 28 52 42 Q45 55 30 56 Q15 55 8 42 Q2 28 8 15 Q15 3 30 4"
        fill="#00B894"
        opacity="0.9"
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
      {/* Seal edge texture */}
      <circle cx="30" cy="30" r="24" fill="none" stroke="#00B894" strokeWidth="3" opacity="0.5"/>
    </svg>
  );
}

export function PushPin({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 50"
      className={className}
      style={{ transform: 'rotate(15deg)' }}
    >
      {/* Pin head - imperfect circle */}
      <path
        d="M20 4 Q32 3 33 15 Q32 27 20 28 Q8 27 7 15 Q8 3 20 4"
        fill="#E84335"
      />
      {/* Pin needle */}
      <path
        d="M20 28 L20 48"
        stroke="#1A1A1A"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* Highlight */}
      <circle cx="14" cy="12" r="3" fill="#FAFAFA" opacity="0.3"/>
    </svg>
  );
}

export function MoneyArrow({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 60 40"
      className={className}
      style={{ transform: 'rotate(-2deg)' }}
    >
      {/* Dollar sign */}
      <text
        x="12"
        y="28"
        fontFamily="IBM Plex Mono, monospace"
        fontSize="24"
        fontWeight="700"
        fill="#00B894"
      >
        $
      </text>
      {/* Arrow - hand-drawn style */}
      <path
        d="M28 20 Q35 19 42 20 Q48 21 54 20"
        fill="none"
        stroke="#00B894"
        strokeWidth="3"
        strokeLinecap="round"
      />
      {/* Arrow head */}
      <path
        d="M48 14 L56 20 L48 26"
        fill="none"
        stroke="#00B894"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function AuditIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 50 60"
      className={className}
      style={{ transform: 'rotate(1deg)' }}
    >
      {/* Document - slightly crooked */}
      <path
        d="M6 4 L38 3 L44 12 L45 56 L5 57 Z"
        fill="#FAFAFA"
        stroke="#1A1A1A"
        strokeWidth="2"
      />
      {/* Corner fold */}
      <path
        d="M38 3 L38 12 L44 12"
        fill="#1A1A1A"
        opacity="0.1"
      />
      <path
        d="M38 3 L38 12 L44 12"
        fill="none"
        stroke="#1A1A1A"
        strokeWidth="1.5"
      />
      {/* Lines */}
      <line x1="12" y1="22" x2="36" y2="21" stroke="#1A1A1A" strokeWidth="2" opacity="0.3"/>
      <line x1="12" y1="30" x2="32" y2="29" stroke="#1A1A1A" strokeWidth="2" opacity="0.3"/>
      <line x1="12" y1="38" x2="34" y2="37" stroke="#1A1A1A" strokeWidth="2" opacity="0.3"/>
      {/* Checkmark */}
      <path
        d="M14 46 L20 52 L36 36"
        fill="none"
        stroke="#00B894"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
