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
        paddingBottom: 'var(--space-10)',
        minHeight: '40vh',
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
          <div style={{ gridColumn: 'span 12' }}>
            <motion.h1 
              id="page-heading" 
              variants={itemVariants} 
              className="text-display" 
              style={{ marginBottom: 'var(--space-5)', outline: 'none' }}
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
