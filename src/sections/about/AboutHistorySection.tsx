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
      className="section" 
      style={{ 
        overflow: 'hidden',
        paddingTop: 'var(--space-12)',
        paddingBottom: 'var(--space-8)'
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
                  background: 'linear-gradient(145deg, rgba(255,255,255,0.02) 0%, rgba(0,0,0,0.02) 100%)',
                  pointerEvents: 'none'
                }} 
              />
              <span className="text-technical" style={{ color: 'var(--color-text-muted)', letterSpacing: '0.05em' }}>
                IMAGE PLACEHOLDER
              </span>
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
        }
      `}</style>
    </section>
  );
};
