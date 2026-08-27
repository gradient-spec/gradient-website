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
          {/* Asymmetric 7:5 layout on desktop */}
          <div style={{ 
            gridColumn: 'span 7', 
            borderTop: '1px solid var(--color-border-subtle)', 
            borderBottom: '1px solid var(--color-border-subtle)',
            paddingTop: 'var(--space-6)',
            paddingBottom: 'var(--space-6)' 
          }}>
            <motion.div variants={safeItemVariants} style={{ marginBottom: 'var(--space-8)' }}>
              <span className="text-metadata" style={{ color: 'var(--color-text-secondary)', letterSpacing: '0.15em', fontSize: 'var(--font-size-sm)', fontWeight: 'var(--font-weight-medium)' }}>
                [ LEADERSHIP ]
              </span>
            </motion.div>
            
            <motion.h1 
              id="page-heading" 
              variants={safeItemVariants} 
              className="text-display" 
              style={{ margin: 0, outline: 'none', fontSize: 'clamp(4.5rem, 9vw, 7rem)', lineHeight: '1.05', letterSpacing: '-0.02em' }}
              tabIndex={-1}
            >
              Boards
            </motion.h1>
          </div>
        </motion.div>
      </div>

      <style>{`
        /* Handled by layout.css grid collapse at 768px */
      `}</style>
    </section>
  );
};
