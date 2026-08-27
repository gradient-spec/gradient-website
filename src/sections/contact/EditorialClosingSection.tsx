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

export const EditorialClosingSection: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();

  const itemVariants: Variants = {
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
        paddingBottom: 'var(--space-12)',
        minHeight: '60vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div 
        aria-hidden="true" 
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '50%',
          height: '100%',
          background: 'radial-gradient(circle at 100% 50%, var(--color-surface-secondary) 0%, transparent 60%)',
          opacity: 0.3,
          zIndex: -1
        }} 
      />
      <div className="container" style={{ width: '100%', position: 'relative', zIndex: 1 }}>
        <motion.div 
          className="grid" 
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div style={{ gridColumn: '2 / span 9' }}>
            <motion.div variants={itemVariants} style={{ marginBottom: 'var(--space-8)' }}>
              <span className="text-metadata" style={{ color: 'var(--color-text-secondary)', letterSpacing: '0.15em', fontSize: 'var(--font-size-sm)', fontWeight: 'var(--font-weight-medium)' }}>
                [ INQUIRIES ]
              </span>
            </motion.div>
            
            <motion.h1 
              id="page-heading" 
              variants={itemVariants} 
              className="text-display" 
              style={{ marginBottom: 'var(--space-5)', outline: 'none', fontSize: 'clamp(4.5rem, 9vw, 7rem)', lineHeight: '1.05', letterSpacing: '-0.02em' }}
              tabIndex={-1}
            >
              Contact
            </motion.h1>
            
            {/* The rest of the Editorial Closing copy is unverified and thus omitted */}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
