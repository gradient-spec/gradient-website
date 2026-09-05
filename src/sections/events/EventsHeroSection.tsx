import React from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

export const EventsHeroSection: React.FC = () => {
  return (
    <section
      className="section bg-atmospheric bg-glow-bottom-left"
      aria-labelledby="events-hero-heading"
      style={{
        paddingTop: 'var(--space-12)',
        paddingBottom: 'var(--space-10)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div className="container">
        <motion.div
          className="grid"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Asymmetric 5:7 layout on desktop */}
          <div style={{ gridColumn: 'span 5' }}>
            <motion.div variants={itemVariants} style={{ marginBottom: 'var(--space-3)' }}>
              <span className="text-metadata" style={{ color: 'var(--color-text-tertiary)', letterSpacing: '0.1em' }}>
                [ AGENDA ]
              </span>
            </motion.div>

            <motion.h1
              id="page-heading"
              variants={itemVariants}
              className="text-display"
              style={{ marginBottom: 'var(--space-5)', outline: 'none', fontSize: 'clamp(4rem, 8vw, 6rem)', lineHeight: '1.1' }}
              tabIndex={-1}
            >
              Events
            </motion.h1>
          </div>

          <div style={{ gridColumn: 'span 7' }}>
            <motion.div
              variants={itemVariants}
              className="image-placeholder-frame"
              style={{
                width: '100%',
                height: '100%',
                position: 'relative',
                border: '1px solid var(--color-border-subtle)',
                backgroundColor: 'rgba(255,255,255,0.01)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden'
              }}
            >
              {/* Technical Grid Background */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundImage: 'linear-gradient(var(--color-border-subtle) 1px, transparent 1px), linear-gradient(90deg, var(--color-border-subtle) 1px, transparent 1px)',
                  backgroundSize: '40px 40px',
                  backgroundPosition: 'center center',
                  opacity: 0.1,
                  pointerEvents: 'none'
                }}
              />
              
              {/* Center Crosshair Target */}
              <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ position: 'absolute', width: '60px', height: '1px', backgroundColor: 'var(--color-text-muted)' }} />
                <div style={{ position: 'absolute', width: '1px', height: '60px', backgroundColor: 'var(--color-text-muted)' }} />
                <div style={{ width: '12px', height: '12px', border: '1px solid var(--color-text-primary)', borderRadius: '50%' }} />
              </div>

              {/* Corner Coordinate Metadata */}
              <div className="text-metadata" style={{ position: 'absolute', top: 'var(--space-4)', left: 'var(--space-4)', color: 'var(--color-text-muted)' }}>
                LAT: 17.5451° N
              </div>
              <div className="text-metadata" style={{ position: 'absolute', top: 'var(--space-4)', right: 'var(--space-4)', color: 'var(--color-text-muted)' }}>
                LONG: 78.4352° E
              </div>
              <div className="text-metadata" style={{ position: 'absolute', bottom: 'var(--space-4)', left: 'var(--space-4)', color: 'var(--color-text-muted)' }}>
                SECTOR 02
              </div>
              <div className="text-metadata" style={{ position: 'absolute', bottom: 'var(--space-4)', right: 'var(--space-4)', color: 'var(--color-text-muted)' }}>
                SYS.RDY
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <style>{`
        .image-placeholder-frame {
          min-height: 500px;
        }
        @media (max-width: 992px) {
          .image-placeholder-frame {
            min-height: 350px;
          }
        }
        @media (max-width: 768px) {
          .image-placeholder-frame {
            margin-top: var(--space-8);
            min-height: 250px;
          }
        }
      `}</style>
    </section>
  );
};
