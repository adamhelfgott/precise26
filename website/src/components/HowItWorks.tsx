'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const panels = [
  {
    id: 1,
    scene: 'launch',
    title: 'You hit Launch',
    description: '52 data segments explode into your campaign. You only asked for 4.',
    visual: 'segments',
  },
  {
    id: 2,
    scene: 'confusion',
    title: 'The client calls',
    description: '"Why are we targeting Yacht Intenders in Kansas? We sell toothpaste."',
    visual: 'phone',
  },
  {
    id: 3,
    scene: 'search',
    title: 'You search for answers',
    description: 'Google "stop DSP waste" — nothing. You\'re on your own.',
    visual: 'search',
  },
  {
    id: 4,
    scene: 'precise-enters',
    title: 'Precise appears',
    description: '"Want me to veto those segments before the next bid fires?"',
    visual: 'robot',
    accent: true,
  },
  {
    id: 5,
    scene: 'veto',
    title: 'Real-time veto',
    description: '39 segments marked WASTE. Money saved. Control restored.',
    visual: 'stamp',
    accent: true,
  },
  {
    id: 6,
    scene: 'local-split',
    title: 'Local opportunity',
    description: 'National gets the budget. But Local opens Precise — splits into 220 cohorts.',
    visual: 'split',
  },
  {
    id: 7,
    scene: 'proof',
    title: 'Prove it works',
    description: 'Drop a cryptographically signed report: "Here\'s better ROAS." National takes notice.',
    visual: 'report',
    accent: true,
  },
  {
    id: 8,
    scene: 'direct',
    title: 'Direct the spend',
    description: 'Overwhelmed by DSP choices? "Let me Direct that for you."',
    visual: 'compass',
  },
  {
    id: 9,
    scene: 'routing',
    title: 'Optimal routing',
    description: 'MadHive CTV: 2.3x lift vs display elsewhere. Budget flows to performance.',
    visual: 'route',
    accent: true,
  },
  {
    id: 10,
    scene: 'provenance',
    title: 'Provenance injection',
    description: '"This segment already proved sales lift." "With proof?" "Always."',
    visual: 'fingerprint',
  },
  {
    id: 11,
    scene: 'automation',
    title: 'Future state',
    description: 'Sip your coffee while the system auto-buys. Cheaper. Better. Proven.',
    visual: 'coffee',
  },
  {
    id: 12,
    scene: 'partnership',
    title: 'Your advocate',
    description: 'Control today. Own tomorrow.',
    visual: 'handshake',
    accent: true,
  },
];

function PanelVisual({ visual, accent }: { visual: string; accent?: boolean }) {
  const visuals: Record<string, React.ReactNode> = {
    segments: (
      <div className="relative w-full h-full flex items-center justify-center">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-8 h-4 border border-[var(--text-tertiary)] opacity-40"
            style={{
              transform: `rotate(${i * 30}deg) translateX(${20 + (i % 3) * 10}px)`,
            }}
          />
        ))}
        <div className="w-6 h-6 border-2 border-[var(--accent)]" />
      </div>
    ),
    phone: (
      <div className="flex items-center justify-center h-full">
        <div className="w-12 h-20 border border-[var(--text-tertiary)] rounded-sm relative">
          <div className="absolute top-2 left-1/2 w-4 h-0.5 bg-[var(--text-tertiary)] -translate-x-1/2" />
          <div className="absolute bottom-2 left-1/2 w-3 h-3 border border-[var(--text-tertiary)] rounded-full -translate-x-1/2" />
        </div>
      </div>
    ),
    search: (
      <div className="flex items-center justify-center h-full">
        <div className="relative">
          <div className="w-12 h-12 border-2 border-[var(--text-tertiary)] rounded-full" />
          <div className="absolute bottom-0 right-0 w-6 h-1 bg-[var(--text-tertiary)] rotate-45 origin-left translate-x-1 translate-y-1" />
        </div>
      </div>
    ),
    robot: (
      <div className="flex items-center justify-center h-full">
        <div className="relative">
          <div className="w-14 h-12 border border-[var(--accent)]" />
          <div className="absolute top-3 left-3 w-2 h-2 bg-[var(--accent)]" />
          <div className="absolute top-3 right-3 w-2 h-2 bg-[var(--accent)]" />
          <div className="absolute bottom-3 left-4 right-4 h-0.5 bg-[var(--accent)]" />
          <div className="absolute -top-3 left-1/2 w-0.5 h-3 bg-[var(--accent)] -translate-x-1/2" />
          <div className="absolute -top-3 left-1/2 w-3 h-3 border border-[var(--accent)] rounded-full -translate-x-1/2 -translate-y-1" />
        </div>
      </div>
    ),
    stamp: (
      <div className="flex items-center justify-center h-full">
        <div className="relative">
          <div className="w-16 h-10 border-2 border-[var(--accent)] flex items-center justify-center">
            <span className="type-label text-[var(--accent)]" style={{ fontSize: '8px' }}>WASTE</span>
          </div>
          <div className="absolute -bottom-1 left-1/2 w-4 h-4 bg-[var(--accent)] opacity-20 -translate-x-1/2" />
        </div>
      </div>
    ),
    split: (
      <div className="flex items-center justify-center h-full">
        <div className="relative">
          <div className="w-10 h-10 border border-[var(--text-tertiary)]" />
          <div className="absolute -right-4 top-0 w-4 h-4 border border-[var(--text-tertiary)]" />
          <div className="absolute -right-4 bottom-0 w-4 h-4 border border-[var(--text-tertiary)]" />
          <div className="absolute -right-8 top-1 w-2 h-2 border border-[var(--text-tertiary)]" />
          <div className="absolute -right-8 bottom-1 w-2 h-2 border border-[var(--text-tertiary)]" />
        </div>
      </div>
    ),
    report: (
      <div className="flex items-center justify-center h-full">
        <div className="relative">
          <div className="w-12 h-16 border border-[var(--accent)]">
            <div className="m-2 space-y-1">
              <div className="h-0.5 w-6 bg-[var(--accent)]" />
              <div className="h-0.5 w-4 bg-[var(--accent)] opacity-60" />
              <div className="h-0.5 w-5 bg-[var(--accent)] opacity-60" />
            </div>
          </div>
          <div className="absolute -bottom-2 -right-2 w-6 h-6 border border-[var(--accent)] flex items-center justify-center">
            <span className="text-[var(--accent)]" style={{ fontSize: '10px' }}>✓</span>
          </div>
        </div>
      </div>
    ),
    compass: (
      <div className="flex items-center justify-center h-full">
        <div className="w-14 h-14 border border-[var(--text-tertiary)] rounded-full relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-0 h-0 border-l-[6px] border-r-[6px] border-b-[16px] border-l-transparent border-r-transparent border-b-[var(--text-tertiary)]" />
          </div>
        </div>
      </div>
    ),
    route: (
      <div className="flex items-center justify-center h-full">
        <div className="relative">
          <div className="w-4 h-4 bg-[var(--accent)]" />
          <svg width="60" height="40" className="absolute -right-12 -top-3">
            <path d="M0,20 Q30,0 60,20" stroke="var(--accent)" strokeWidth="1" fill="none" />
            <path d="M0,20 Q30,40 60,20" stroke="var(--accent)" strokeWidth="1" fill="none" strokeOpacity="0.4" />
          </svg>
          <div className="absolute -right-16 top-1 w-3 h-3 border border-[var(--accent)]" />
        </div>
      </div>
    ),
    fingerprint: (
      <div className="flex items-center justify-center h-full">
        <div className="relative">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="absolute border border-[var(--text-tertiary)] rounded-full"
              style={{
                width: `${24 + i * 12}px`,
                height: `${24 + i * 12}px`,
                left: `${-i * 6}px`,
                top: `${-i * 6}px`,
                opacity: 1 - i * 0.2,
              }}
            />
          ))}
        </div>
      </div>
    ),
    coffee: (
      <div className="flex items-center justify-center h-full">
        <div className="relative">
          <div className="w-10 h-12 border border-[var(--text-tertiary)] rounded-b-sm">
            <div className="absolute -right-3 top-2 w-3 h-6 border border-[var(--text-tertiary)] rounded-r-full" />
          </div>
          <svg width="20" height="10" className="absolute -top-3 left-1/2 -translate-x-1/2">
            <path d="M2,10 Q5,0 10,10 Q15,0 18,10" stroke="var(--text-tertiary)" strokeWidth="1" fill="none" />
          </svg>
        </div>
      </div>
    ),
    handshake: (
      <div className="flex items-center justify-center h-full">
        <div className="relative flex items-center gap-1">
          <div className="w-8 h-3 bg-[var(--accent)]" />
          <div className="w-8 h-3 border border-[var(--accent)]" />
        </div>
      </div>
    ),
  };

  return visuals[visual] || null;
}

export default function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section ref={sectionRef} id="how-it-works" className="section bg-[var(--bg-surface)] border-t border-[var(--border)]">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-24"
        >
          <span className="type-label-accent mb-6 block">How It Works</span>
          <h2 className="type-display-md max-w-3xl">
            A day in the life
            <span className="text-[var(--text-secondary)]"> — before and after Precise.</span>
          </h2>
        </motion.div>

        {/* Panels grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px bg-[var(--border)]"
        >
          {panels.map((panel, index) => (
            <motion.div
              key={panel.id}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className={`bg-[var(--bg-surface)] p-6 md:p-8 flex flex-col min-h-[240px] ${
                panel.accent ? 'bg-[var(--accent-muted)]' : ''
              }`}
            >
              {/* Panel number */}
              <span className={`type-label mb-4 ${panel.accent ? 'text-[var(--accent)]' : 'text-[var(--text-tertiary)]'}`}>
                {String(panel.id).padStart(2, '0')}
              </span>

              {/* Visual */}
              <div className="flex-1 flex items-center justify-center mb-4 min-h-[60px]">
                <PanelVisual visual={panel.visual} accent={panel.accent} />
              </div>

              {/* Title */}
              <h3 className={`text-sm font-medium uppercase tracking-wider mb-2 ${
                panel.accent ? 'text-[var(--accent)]' : 'text-[var(--text-primary)]'
              }`}>
                {panel.title}
              </h3>

              {/* Description */}
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                {panel.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="type-body-lg text-[var(--text-primary)]">
            Math, not promises.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
