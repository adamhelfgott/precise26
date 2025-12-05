# Precise Website - Session State
Last updated: 2025-12-05

## Project Overview
Building a marketing website for Precise.ai's pivot from privacy infrastructure to **agency control & performance optimization**.

## Target Audience
- Agency traders/reps
- DSPs
- Media buyers
- Sophisticated ad-tech professionals who are skeptical and have seen everything

## Core Positioning
**Precise is the agency's ADVOCATE** in an opaque programmatic ecosystem.

Key message: We use **math, cryptography, and science** to:
1. EXPOSE the reality of what's happening with spend
2. DECONSTRUCT how money is spent at high fidelity
3. Generate **perfect just-in-time cohorts**
4. Enable optimizations that make sense for the customer

**Tagline**: "Math, not promises."

## The Problem We Solve
- DSPs auto-append 40+ segments you never asked for
- You pay, they profit, you can't see a thing
- No visibility into what works vs what's waste
- Black-box reporting you didn't generate

## Product Suite (All part of the suite - no "Live" badges)

### GOVERN
- **Problem**: DSP auto-appends segments you didn't ask for
- **What we do**: Score each segment in real-time, show marginal lift vs cost
- **Action**: Veto segments that don't add value BEFORE the bid
- **Result**: Stop paying for garbage data

### PROVE
- **Problem**: Need to show clients/bosses that spend worked
- **What we do**: Generate cryptographically signed reports with provenance
- **Mechanism**: Every audience has a cryptographic fingerprint (Merkle root) proving composition. We sign reports showing what you eliminated, kept, and the lift achieved.
- **Result**: Walk into any review with YOUR proof, not DSP's black box

### LOCAL
- **Problem**: National budgets, but you're a local buyer
- **What we do**: Auto-split national audiences into 200+ hyper-local cohorts
- **Mechanism**: Privacy-safe splitting with cryptographic proof of composition
- **Result**: Pull national dollars into your market with evidence

### DIRECT
- **Problem**: Don't know where to buy next
- **What we do**: Real-time impression-level scoring across DSPs
- **Insight**: "This MadHive CTV pod = 2.1x lift vs display elsewhere"
- **Result**: Know exactly where your next dollar should go

### ROUTE
- **Problem**: Manual budget allocation is slow and reactive
- **What we do**: Automatically shift spend to best-performing paths
- **Mechanism**: Cross-DSP optimization based on outcomes
- **Result**: Budget follows performance, not guesswork

## Technical Foundation (from original doc)
- **Provenance Layer**: Cryptographic proofs using Merkle trees
  - Each audience segment gets a cryptographic fingerprint (Merkle root)
  - Proves audience composition without revealing members
  - Can verify any user was part of audience via Merkle proof
- **Identity Resolution**: Graph-based entity resolution
- **Federated Clean Room**: Secure multi-party computation
- **Activation Connectors**: MadHive, TTD, DV360, Yahoo

## Partnership
- **MadHive**: Strategic equity investment (October 2025)
- 300+ station groups
- Closed-loop outcome data
- CTV-native
- Spencer Potts (former MadHive CEO) now Precise CEO

## Design Direction

### Aesthetic
- Modern, fashion-like, clean, next-gen
- Closer to Balenciaga than Céline (bold, confident)
- Dark mode (#080808 background)
- Sharp, precise typography (Inter, light weights, wide tracking for small text)
- Accent: #c8ff00 (electric chartreuse) - used sparingly
- + registration marks from logo as design motif

### Typography Issues to Fix
- Large "PRECISE" headline has too-wide letter-spacing (0.25em too much)
- Reduce to ~0.1em for large display sizes

### Anti-Patterns (NO AI SLOP)
- No pill badges with pulsing dots
- No gradient orbs floating in background
- No "LIVE" status badges
- No generic card layouts
- No overly centered, symmetrical sections

## Content Needs

### "How it Works" Section
Need to show the MECHANISM, not just statements. Options discussed:
1. Recreate cartoon-style narrative from pivot doc (12 panels showing trader journey)
2. Step-by-step flow diagram
3. Before/after structure

**Decision**: Recreate illustrated sequence (CSS/SVG based)

### Product Details
Each product needs expandable detail showing:
- The problem
- What Precise does
- The mechanism (technical but accessible)
- The result

**Decision**: Expandable sections on same page (most impact, keeps user engaged)

### Provenance Explanation
- Don't say "Valence credentials" (Precise owns license, will rebrand)
- DO explain in detail: cryptographic fingerprints, Merkle proofs, verifiable composition
- Frame as "we know what performs and what doesn't" with proof

## Cartoon Narrative (from pivot doc)
12-panel story:
1. Trader hits "Launch" → 52 data stickers explode. "I only wanted 4..."
2. Client on Zoom: "Why Yacht Intenders in Kansas? We sell toothpaste."
3. Trader googles "stop DSP waste" → crickets
4. Precise robot appears: "Want me to veto those before the next bid?"
5. Robot stamps 39 "WASTE" → money back. Trader: "You're hired."
6. National exec: "Local gets 10%." Local trader opens Precise Local → splits into 220 cohorts
7. Local drops Prove report: "Here's better ROAS." National: "Take it all."
8. Trader overwhelmed by DSP choices. Robot: "Let me Direct that for you."
9. Robot routes to MadHive CTV: "2.3x lift here vs display elsewhere."
10. Robot injects Provenance segment: "This one's already proven sales lift." Trader: "With proof?" Robot: "Always."
11. Future vision: Trader sips coffee as robot auto-buys. "Cheaper, better, proven."
12. High-five under tagline: "Precise — Control today. Own tomorrow."

## Files Structure
```
/precise26
├── precise_logo.jpeg (+ PRECISE + logo, black/white)
├── precise_orig.md (original technical vision doc)
├── precise_pivot.md (pivot strategy doc)
├── SESSION.md (this file)
└── /website
    ├── src/app/
    │   ├── globals.css (design system)
    │   ├── layout.tsx (Inter + JetBrains Mono fonts)
    │   └── page.tsx
    └── src/components/
        ├── Header.tsx
        ├── Hero.tsx
        ├── Problem.tsx (includes principles: Neutral/Verified/Aligned)
        ├── Products.tsx (needs expansion)
        ├── Partners.tsx (MadHive)
        ├── CTA.tsx
        └── Footer.tsx
```

## Deployment
- GitHub: https://github.com/adamhelfgott/precise26
- Vercel: https://precise2026-qlqztnq8u-adams-projects-d47ce50a.vercel.app

## Next Steps
1. Fix PRECISE headline letter-spacing
2. Remove LIVE/Coming badges from products
3. Add expandable product details with full mechanism explanation
4. Create illustrated "How it Works" sequence (cartoon-style narrative)
5. Better explain provenance/cryptographic proof mechanism

## Key Phrases to Use
- "Math, not promises"
- "See where every dollar goes"
- "Perfect just-in-time cohorts"
- "Your advocate in programmatic"
- "Cryptographic proof at every step"
- "Auto-appended segments you never asked for"
- "Every segment deconstructed. Every dollar traced."
