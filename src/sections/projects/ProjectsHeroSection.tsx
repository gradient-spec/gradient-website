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
      <div className="container" style={{ width: '100%', position: 'relative', zIndex: 1 }}>
        <motion.div
          className="grid"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div style={{ gridColumn: 'span 7' }}>
            <motion.div variants={itemVariants} style={{ marginBottom: 'var(--space-6)' }}>
              <span className="text-route-label">
                04 / PROJECTS
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
