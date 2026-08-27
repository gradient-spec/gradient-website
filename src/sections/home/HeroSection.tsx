import React from 'react';
import { motion, useReducedMotion, type Variants } from 'framer-motion';

export const HeroSection: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();

  // Typography/Text entrance motion (subtle fade + y-transform)
  const textVariants: Variants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: 'easeOut', staggerChildren: 0.15 } 
    }
  };

  const childVariants: Variants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  // Image reveal (transformational motion)
  const imageVariants: Variants = {
    hidden: { opacity: 0, clipPath: prefersReducedMotion ? 'inset(0% 0% 0% 0%)' : 'inset(10% 0% 10% 0%)', scale: prefersReducedMotion ? 1 : 1.02 },
    visible: { 
      opacity: 1, 
      clipPath: 'inset(0% 0% 0% 0%)', 
      scale: 1,
      transition: { duration: 0.8, ease: 'easeOut', delay: 0.3 } 
    }
  };

  return (
    <section 
      aria-label="Introduction" 
      className="section" 
      style={{ 
        overflow: 'hidden',
        paddingTop: 'var(--space-12)',
        paddingBottom: 'var(--space-8)' 
      }}
    >
      <div className="container">
        <div 
          className="grid" 
          style={{ 
            alignItems: 'center', 
            // We use the global .grid but override the columns behavior for responsiveness natively via CSS inline styles using standard CSS functions or rely on the grid auto flow.
            // A simple way to handle the 7/5 split responsive behavior without writing a new CSS class:
          }}
        >
          {/* Text Content Block */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="hero-text-block"
            style={{ 
              gridColumn: '1 / span 6',
            }}
          >
            {/* Scoped style for responsive behavior without a new global CSS file */}
            <style>{`
              .hero-text-block { grid-column: 1 / span 6; }
              .hero-image-block { 
                grid-column: 7 / span 6; 
                min-height: var(--hero-frame-height-desktop, 70vh);
              }
              @media (max-width: 992px) {
                .hero-text-block { grid-column: 1 / span 5; }
                .hero-image-block { 
                  grid-column: 6 / span 7; 
                  min-height: var(--hero-frame-height-tablet, 50vh);
                }
              }
              @media (max-width: 768px) {
                .hero-text-block, .hero-image-block { grid-column: 1 / -1 !important; }
                .hero-image-block { 
                  margin-top: var(--space-6); 
                  min-height: var(--hero-frame-height-mobile, 40vh);
                }
              }
            `}</style>
            
            <motion.div variants={childVariants} style={{ marginBottom: 'var(--space-4)' }}>
              <span className="text-metadata" style={{ color: 'var(--color-text-secondary)', letterSpacing: '0.15em', fontSize: 'var(--font-size-sm)', fontWeight: 'var(--font-weight-medium)' }}>
                [ EST. 2020 ]
              </span>
            </motion.div>
            
            <motion.h1 
              variants={childVariants} 
              id="page-heading" 
              tabIndex={-1} 
              className="text-display" 
              style={{ outline: 'none', fontSize: 'clamp(4.5rem, 9vw, 7rem)', lineHeight: '1.05', letterSpacing: '-0.02em' }}
            >
              Gradient
            </motion.h1>
          </motion.div>

          {/* Image Content Block */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={imageVariants}
            className="hero-image-block"
            style={{ 
              position: 'relative',
              width: '100%',
              backgroundColor: 'var(--color-surface-secondary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid var(--color-border-default)',
              boxShadow: 'var(--shadow-sm)',
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden'
            }}
          >
            <div 
              style={{ 
                position: 'absolute', 
                top: 0, 
                left: 0, 
                right: 0, 
                bottom: 0, 
                background: 'linear-gradient(145deg, rgba(255,255,255,0.02) 0%, rgba(0,0,0,0.02) 100%)',
                pointerEvents: 'none'
              }} 
            />
            <div className="text-technical" style={{ color: 'var(--color-text-muted)', textAlign: 'center', padding: 'var(--space-4)', letterSpacing: '0.05em' }}>
              IMAGE PLACEHOLDER
            </div>
            {/* When a real image is provided, its fit behavior will be intentionally chosen (e.g. object-fit: cover, contain, or a specific object-position) instead of universally assuming cover.
                <img src="..." alt="..." style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
            */}
          </motion.div>

        </div>
      </div>
    </section>
  );
};
