import React from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 }, // CANDIDATE: 20px entrance movement
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: 'easeOut',
    },
  },
};

export const AboutHistorySection: React.FC = () => {
  return (
    <section
      aria-label="History"
      className="section bg-atmospheric bg-glow-top-right"
      style={{
        overflow: 'hidden',
        paddingTop: 'var(--space-12)',
        paddingBottom: 'var(--space-8)',
        position: 'relative'
      }}
    >
      <div className="container">
        <motion.div
          className="grid"
          style={{ position: 'relative' }}
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Editorial Spine Origin */}
          <div 
            aria-hidden="true"
            className="hide-on-mobile"
            style={{
              position: 'absolute',
              top: 'var(--space-8)',
              left: 0,
              width: '1px',
              height: 'calc(100% + var(--space-8))',
              background: 'linear-gradient(to bottom, transparent, var(--color-border-subtle) 15%, var(--color-border-subtle) 100%)',
              zIndex: 0
            }}
          />
          {/* Asymmetric 5:7 layout on desktop */}
          <div style={{ gridColumn: 'span 5', position: 'relative', zIndex: 1, paddingLeft: 'var(--space-6)' }}>
            <motion.div variants={itemVariants} style={{ marginBottom: 'var(--space-3)' }}>
              <span className="text-metadata" style={{ color: 'var(--color-text-tertiary)', letterSpacing: '0.1em' }}>
                [ ORIGIN ]
              </span>
            </motion.div>

            <motion.h1
              id="page-heading"
              variants={itemVariants}
              className="text-display"
              style={{ marginBottom: 'var(--space-5)', outline: 'none', fontSize: 'clamp(4rem, 8vw, 6rem)', lineHeight: '1.1' }}
              tabIndex={-1}
            >
              About
            </motion.h1>
          </div>

          <div style={{ gridColumn: 'span 7' }}>
            {/* Structural placeholder for missing authentic imagery */}
            <motion.div
              variants={itemVariants}
              className="image-placeholder-frame"
              style={{
                width: '100%',
                height: '100%',
                position: 'relative',
                border: '1px solid var(--color-border-subtle)',
                backgroundColor: 'var(--color-surface-secondary)',
                borderRadius: 'var(--radius-md)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
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
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflow: 'hidden'
                }}
              >
                {/* Structural Grid lines */}
                <div style={{ position: 'absolute', top: 0, left: '50%', width: '1px', height: '100%', backgroundColor: 'var(--color-border-subtle)', opacity: 0.5 }} />
                <div style={{ position: 'absolute', top: '50%', left: 0, width: '100%', height: '1px', backgroundColor: 'var(--color-border-subtle)', opacity: 0.5 }} />
                
                {/* Massive Typographic Anchor */}
                <div 
                  className="text-display" 
                  style={{ 
                    fontSize: 'clamp(8rem, 20vw, 18rem)', 
                    lineHeight: 0.8, 
                    color: 'var(--color-border-default)', 
                    opacity: 0.3,
                    userSelect: 'none',
                    letterSpacing: '-0.05em'
                  }}
                >
                  2020
                </div>

                {/* Subtle G-inspired curve */}
                <svg 
                  viewBox="0 0 200 200" 
                  style={{ 
                    position: 'absolute', 
                    top: '10%', 
                    right: '-10%', 
                    width: '60%', 
                    opacity: 0.1 
                  }}
                >
                  <circle cx="100" cy="100" r="90" fill="none" stroke="var(--color-text-primary)" strokeWidth="1" />
                </svg>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <style>{`
        .image-placeholder-frame {
          min-height: 600px;
        }
        @media (max-width: 992px) {
          .image-placeholder-frame {
            min-height: 400px;
          }
        }
        @media (max-width: 768px) {
          .image-placeholder-frame {
            margin-top: var(--space-8);
            min-height: 300px;
          }
          .hide-on-mobile {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
};
