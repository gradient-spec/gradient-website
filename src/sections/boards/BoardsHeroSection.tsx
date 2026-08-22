import React from 'react';
import { motion, useReducedMotion, type Variants } from 'framer-motion';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export const BoardsHeroSection: React.FC = () => {

  const prefersReducedMotion = useReducedMotion();

  // Re-adjust itemVariants for reduced motion
  const safeItemVariants: Variants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section 
      className="section" 
      aria-labelledby="page-heading"
      style={{
        paddingTop: 'var(--space-12)',
        paddingBottom: 'var(--space-10)',
        minHeight: '50vh',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <div className="container" style={{ width: '100%' }}>
        <motion.div 
          className="grid" 
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Asymmetric 7:5 layout on desktop */}
          <div style={{ gridColumn: 'span 7' }}>
            <motion.div variants={safeItemVariants} style={{ marginBottom: 'var(--space-3)' }}>
              <span className="text-metadata" style={{ color: 'var(--color-text-tertiary)', letterSpacing: '0.1em' }}>
                [ LEADERSHIP ]
              </span>
            </motion.div>
            
            <motion.h1 
              id="page-heading" 
              variants={safeItemVariants} 
              className="text-display" 
              style={{ marginBottom: 'var(--space-5)', outline: 'none', fontSize: 'clamp(4rem, 8vw, 6rem)', lineHeight: '1.1' }}
              tabIndex={-1}
            >
              Boards
            </motion.h1>
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .grid > div {
            grid-column: span 12 !important;
          }
        }
      `}</style>
    </section>
  );
};
