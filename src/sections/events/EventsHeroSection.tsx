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
      className="section" 
      aria-labelledby="events-hero-heading"
      style={{
        paddingTop: 'var(--space-12)',
        paddingBottom: 'var(--space-10)',
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
            <motion.h1 
              id="page-heading" 
              variants={itemVariants} 
              className="text-display" 
              style={{ marginBottom: 'var(--space-5)', outline: 'none' }}
              tabIndex={-1}
            >
              Events
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
                minHeight: '400px',
                border: '1px solid var(--color-border-subtle)',
                backgroundColor: 'var(--color-surface-secondary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <span className="text-metadata" style={{ color: 'var(--color-text-muted)' }}>
                Image Placeholder
              </span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .grid > div {
            grid-column: span 12 !important;
          }
          .image-placeholder-frame {
            margin-top: var(--space-8);
          }
        }
      `}</style>
    </section>
  );
};
