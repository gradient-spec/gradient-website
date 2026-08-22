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
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
        >
          {/* Mission Row */}
          <div className="editorial-row">
            <div className="editorial-left">
              <motion.div variants={itemVariants} className="text-metadata" style={{ color: 'var(--color-accent)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                [ 01 / MISSION ]
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
          <div className="editorial-row vision-row">
            <div className="editorial-left">
              <motion.div variants={itemVariants} className="text-metadata" style={{ color: 'var(--color-text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                [ 02 / VISION ]
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
          padding-top: var(--space-6);
          padding-bottom: var(--space-6);
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
      `}</style>
    </section>
  );
};
