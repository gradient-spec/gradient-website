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

          <div style={{ gridColumn: 'span 7', display: 'flex', alignItems: 'center', position: 'relative' }}>
            {/* Editorial Artifact */}
            <motion.div
              variants={itemVariants}
              className="image-placeholder-frame"
              style={{
                width: '100%',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                paddingTop: 'var(--space-12)'
              }}
            >
              {/* Massive Typographic Anchor - Boxless */}
              <div 
                className="text-display" 
                style={{ 
                  fontSize: 'clamp(10rem, 25vw, 22rem)', 
                  lineHeight: 0.8, 
                  color: 'var(--color-text-primary)', 
                  opacity: 0.05,
                  userSelect: 'none',
                  letterSpacing: '-0.06em',
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  whiteSpace: 'nowrap'
                }}
              >
                2020
              </div>

              {/* Faint crop marks (editorial artifact, not tech grid) */}
              <div style={{ position: 'absolute', top: 0, left: 0, width: '15px', height: '1px', backgroundColor: 'var(--color-border-default)' }} />
              <div style={{ position: 'absolute', top: 0, left: 0, width: '1px', height: '15px', backgroundColor: 'var(--color-border-default)' }} />
              
              <div style={{ position: 'absolute', bottom: 0, right: 0, width: '15px', height: '1px', backgroundColor: 'var(--color-border-default)' }} />
              <div style={{ position: 'absolute', bottom: 0, right: 0, width: '1px', height: '15px', backgroundColor: 'var(--color-border-default)' }} />

              {/* Textural detail (Origin statement) */}
              <div className="text-body" style={{ color: 'var(--color-text-secondary)', maxWidth: '280px', position: 'relative', zIndex: 1, padding: 'var(--space-4)', borderLeft: '1px solid var(--color-border-subtle)' }}>
                Founded as a collaborative platform for automation and intelligence on campus.
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <style>{`
        .image-placeholder-frame {
          min-height: 400px;
        }
        @media (max-width: 992px) {
          .image-placeholder-frame {
            min-height: 300px;
          }
        }
        @media (max-width: 768px) {
          .image-placeholder-frame {
            margin-top: var(--space-8);
            min-height: 250px;
            padding-top: var(--space-8) !important;
          }
          .hide-on-mobile {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
};
