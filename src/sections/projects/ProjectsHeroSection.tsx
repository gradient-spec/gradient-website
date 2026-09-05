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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: 'easeOut',
    },
  },
};

export const ProjectsHeroSection: React.FC = () => {
  return (
    <section
      className="section bg-atmospheric bg-glow-bottom-left"
      aria-labelledby="page-heading"
      style={{
        paddingTop: 'var(--space-12)',
        paddingBottom: 'var(--space-12)',
        minHeight: '60vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: 'var(--color-surface-primary)'
      }}
    >
      {/* Laboratory Background Structure */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: 'var(--space-12)',
          left: 'var(--space-6)',
          right: 'var(--space-6)',
          bottom: 'var(--space-12)',
          border: '1px solid var(--color-border-subtle)',
          opacity: 0.5,
          pointerEvents: 'none'
        }}
      />
      
      {/* Faint Grid Marks */}
      <div style={{ position: 'absolute', top: 'var(--space-12)', left: '50%', width: '1px', height: 'var(--space-4)', backgroundColor: 'var(--color-text-muted)' }} />
      <div style={{ position: 'absolute', bottom: 'var(--space-12)', left: '50%', width: '1px', height: 'var(--space-4)', backgroundColor: 'var(--color-text-muted)' }} />
      <div className="container" style={{ width: '100%', position: 'relative', zIndex: 1 }}>
        <motion.div
          className="grid"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div style={{ gridColumn: 'span 7' }}>
            <motion.div variants={itemVariants} style={{ marginBottom: 'var(--space-6)', position: 'relative' }}>
              <span className="text-metadata" style={{ color: 'var(--color-text-tertiary)', letterSpacing: '0.15em' }}>
                EXP / 04
              </span>
            </motion.div>

            <motion.div variants={itemVariants} style={{ marginBottom: 'var(--space-8)', borderTop: '1px solid var(--color-border-subtle)', paddingTop: 'var(--space-4)', display: 'inline-block' }}>
              <span className="text-metadata" style={{ color: 'var(--color-text-tertiary)' }}>
                PORTFOLIO
              </span>
            </motion.div>

            <motion.h1
              id="page-heading"
              variants={itemVariants}
              className="text-display"
              style={{ marginBottom: 'var(--space-5)', outline: 'none', fontSize: 'clamp(4.5rem, 9vw, 7rem)', lineHeight: '1', letterSpacing: '-0.03em' }}
              tabIndex={-1}
            >
              Projects
            </motion.h1>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
