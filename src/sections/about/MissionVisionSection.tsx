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
  hidden: { opacity: 0, y: 15 }, // CANDIDATE: 15px stagger
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: 'easeOut',
    },
  },
};

export const MissionVisionSection: React.FC = () => {
  return (
    <section
      className="section"
      aria-labelledby="mission-heading"
      style={{
        paddingTop: 'var(--space-8)',
        paddingBottom: 'var(--space-12)',
        backgroundColor: 'var(--color-surface-primary)',
      }}
    >
      <div className="container">
        <motion.div
          className="grid"
          style={{ position: 'relative' }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
        >
          {/* Editorial Spine Continuation */}
          <div 
            aria-hidden="true"
            className="hide-on-mobile"
            style={{
              position: 'absolute',
              top: '-var(--space-12)',
              left: 0,
              width: '1px',
              height: 'calc(100% + var(--space-24))',
              background: 'var(--color-border-subtle)',
              zIndex: 0
            }}
          />
          
          {/* Mission Row */}
          <div className="editorial-row" style={{ position: 'relative', zIndex: 1, paddingLeft: 'var(--space-6)' }}>
            {/* Background Numbering Anchor */}
            <div aria-hidden="true" className="text-display" style={{ position: 'absolute', top: 0, right: 0, fontSize: 'clamp(8rem, 20vw, 15rem)', lineHeight: 0.8, color: 'var(--color-border-subtle)', opacity: 0.3, zIndex: -1, userSelect: 'none' }}>
              01
            </div>
            
            <div className="editorial-left">
              <motion.div variants={itemVariants} className="text-label" style={{ color: 'var(--color-accent)', marginBottom: 'var(--space-3)' }}>
                MISSION
              </motion.div>
            </div>

            <div className="editorial-right">
              <motion.h2
                id="mission-heading"
                variants={itemVariants}
                className="text-display"
                style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: '1.2' }}
              >
                Ideas, made real.
              </motion.h2>
            </div>
          </div>

          {/* Vision Row */}
          <div className="editorial-row vision-row" style={{ position: 'relative', zIndex: 1, paddingLeft: 'var(--space-6)' }}>
            {/* Background Numbering Anchor */}
            <div aria-hidden="true" className="text-display" style={{ position: 'absolute', top: 0, right: 0, fontSize: 'clamp(8rem, 20vw, 15rem)', lineHeight: 0.8, color: 'var(--color-border-subtle)', opacity: 0.3, zIndex: -1, userSelect: 'none' }}>
              02
            </div>

            <div className="editorial-left">
              <motion.div variants={itemVariants} className="text-label" style={{ color: 'var(--color-text-tertiary)', marginBottom: 'var(--space-3)' }}>
                VISION
              </motion.div>
            </div>

            <div className="editorial-right">
              <motion.h2
                variants={itemVariants}
                className="text-display"
                style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: '1.2' }}
              >
                A platform that reaches beyond the campus.
              </motion.h2>
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        .editorial-row {
          grid-column: 1 / -1;
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          gap: var(--grid-gutter);
          border-top: 1px solid var(--color-border-subtle);
          padding-top: var(--space-8);
          padding-bottom: var(--space-8);
        }
        
        .vision-row {
          padding-bottom: 0;
        }

        .editorial-left {
          grid-column: 1 / span 3;
        }
        
        .editorial-right {
          grid-column: 4 / span 9;
        }
        
        @media (max-width: 992px) {
          .editorial-left {
            grid-column: 1 / -1;
            margin-bottom: var(--space-4);
          }
          .editorial-right {
            grid-column: 1 / -1;
          }
        }
        @media (max-width: 768px) {
          .hide-on-mobile {
            display: none !important;
          }
          .editorial-row {
            padding-left: 0 !important;
          }
        }
      `}</style>
    </section>
  );
};
