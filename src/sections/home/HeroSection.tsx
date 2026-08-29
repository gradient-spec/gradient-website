import React from 'react';
import { motion, useReducedMotion, type Variants } from 'framer-motion';

export const HeroSection: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();

  const textVariants: Variants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], staggerChildren: 0.15 }
    }
  };

  const childVariants: Variants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  const gVariants: Variants = {
    hidden: { opacity: 0, scale: prefersReducedMotion ? 1 : 0.9, rotate: prefersReducedMotion ? 0 : -5 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }
    }
  };

  const scrollVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1, delay: 1.2 } }
  };

  return (
    <section
      aria-label="Introduction"
      className="bg-atmospheric"
      style={{
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: 'var(--color-surface-primary)',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* 
        LAYER 1: Dark Surface (set by section bg)
        LAYER 2: Grid (bg-atmospheric pseudo-element) 
      */}

      <div style={{
        marginTop: 'clamp(60px, 12vh, 120px)', // Precise breathing room below Navbar
        position: 'relative',
        width: '100%'
      }}>

        {/* LAYER 3: Light / G Geometry */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={gVariants}
          style={{
            position: 'absolute',
            top: '50%',
            right: '-10%',
            transform: 'translate(0%, -50%)',
            width: '120vw',
            maxWidth: '1400px',
            aspectRatio: '1',
            zIndex: 0,
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mixBlendMode: 'screen'
          }}
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 400 400"
            style={{ width: '100%', height: '100%', opacity: 0.85 }}
          >
            <defs>
              <linearGradient id="hero-g-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00D9FF" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#2878FF" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#A855F7" stopOpacity="0.5" />
              </linearGradient>

              {/* Subtle glow filter */}
              <filter id="hero-glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="12" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Structural intersecting lines — extending beyond the G */}
            <line x1="200" y1="-100" x2="200" y2="500" stroke="rgba(242,241,236,0.05)" strokeWidth="0.5" />
            <line x1="-100" y1="200" x2="500" y2="200" stroke="rgba(242,241,236,0.05)" strokeWidth="0.5" />

            {/* Massive G-inspired arc */}
            <path
              d="M 200 40 A 160 160 0 1 0 360 200 L 200 200"
              fill="none"
              stroke="url(#hero-g-gradient)"
              strokeWidth="12"
              strokeLinecap="square"
              filter="url(#hero-glow)"
            />

            {/* Accent Terminals */}
            <circle cx="200" cy="200" r="8" fill="#2878FF" opacity="0.9" />

            {/* Secondary architectural ring */}
            <circle cx="200" cy="200" r="220" fill="none" stroke="rgba(242,241,236,0.03)" strokeWidth="1" strokeDasharray="2 24" />
          </svg>
        </motion.div>

        {/* Ambient gradient light field behind the text */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '5%',
            transform: 'translateY(-50%)',
            width: '70vw',
            height: '70vw',
            background: 'radial-gradient(circle, rgba(40, 120, 255, 0.05) 0%, transparent 60%)',
            pointerEvents: 'none',
            zIndex: 0
          }}
        />

        {/* LAYER 4: Typography (Foreground) */}
        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={textVariants}
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-start',
            }}
          >
            <motion.div variants={childVariants} style={{ marginBottom: 'var(--space-8)' }}>
              <span className="text-route-label" style={{ paddingLeft: 'var(--space-3)', borderLeft: '2px solid var(--color-accent)' }}>
                01 / IDENTITY
              </span>
            </motion.div>

            <motion.h1
              variants={childVariants}
              id="page-heading"
              tabIndex={-1}
              className="text-display"
              style={{
                outline: 'none',
                fontSize: 'clamp(5rem, 15vw, 14rem)',
                lineHeight: '0.85',
                letterSpacing: '-0.05em',
                marginBottom: 'var(--space-8)',
                textTransform: 'uppercase',
                color: 'var(--color-text-primary)',
                position: 'relative',
                left: '-0.05em', // optical alignment
                // mixBlendMode: 'difference' // Removed to ensure high contrast against the gradient G
              }}
            >
              Gradient
            </motion.h1>

            <motion.div
              variants={childVariants}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--space-5)',
                maxWidth: '500px',
                paddingLeft: 'var(--space-2)'
              }}
            >
              <p className="text-heading" style={{ color: 'var(--color-text-primary)', fontSize: 'clamp(1.75rem, 4vw, 3rem)', fontWeight: 'var(--font-weight-regular)', letterSpacing: '-0.02em' }}>
                Ideas are automated.
              </p>
              <p className="text-technical" style={{ color: 'var(--color-text-tertiary)', letterSpacing: '0.05em' }}>
                [ AUTOMATION & INTELLIGENCE // EST. 2020 ]
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* HERO EXIT TRANSITION */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={scrollVariants}
        style={{
          position: 'absolute',
          bottom: 0,
          left: 'max(var(--space-5), calc((100vw - var(--grid-max-width)) / 2 + var(--space-5)))', // Align with container
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: 'var(--space-4)',
          paddingBottom: 'var(--space-12)',
          zIndex: 10
        }}
      >
        {/* Structural vertical line bleeding into next section */}
        <div style={{ width: '1px', height: '160px', background: 'linear-gradient(to bottom, transparent, var(--color-border-strong))', position: 'absolute', bottom: '-40px', left: 0 }} />

        <span className="text-technical" style={{ color: 'var(--color-text-tertiary)', writingMode: 'vertical-rl', transform: 'rotate(180deg)', letterSpacing: '0.15em', fontSize: '10px' }}>
          SCROLL TO EXPLORE
        </span>
      </motion.div>

      {/* Tablet/Mobile Adjustments via inline style block for simplicity */}
      <style>{`
        @media (max-width: 768px) {
          #page-heading {
            font-size: clamp(4rem, 18vw, 6rem) !important;
          }
        }
      `}</style>
    </section>
  );
};
