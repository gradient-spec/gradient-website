import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import type { Variants } from 'framer-motion';

export const HomeCTASection: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      className="section"
      aria-labelledby="home-cta-heading"
      style={{
        paddingTop: 'var(--space-12)',
        paddingBottom: 'var(--space-12)',
        backgroundColor: 'var(--color-surface-primary)', // Quiet, dark background
        position: 'relative',
        overflow: 'hidden',
        minHeight: '60vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
      }}
    >
      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-20% 0px' }}
          variants={containerVariants}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            textAlign: 'left',
            maxWidth: '800px',
          }}
        >
          <motion.div variants={itemVariants} style={{ marginBottom: 'var(--space-8)' }}>
            <span className="text-route-label" style={{ borderBottom: '1px solid var(--color-border-subtle)', paddingBottom: 'var(--space-2)' }}>
              04 / CONNECT
            </span>
          </motion.div>

          <motion.h2
            id="home-cta-heading"
            variants={itemVariants}
            className="text-display"
            style={{
              fontSize: 'clamp(3rem, 7vw, 6rem)',
              lineHeight: '1.1',
              marginBottom: 'var(--space-10)',
              color: 'var(--color-text-primary)',
              letterSpacing: '-0.02em',
              maxWidth: '80%'
            }}
          >
            Ideas are automated.
          </motion.h2>

          <motion.div variants={itemVariants}>
            <NavLink
              to="/contact"
              className="text-label cta-link"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 'var(--space-2)',
                color: 'var(--color-text-primary)',
                textDecoration: 'none',
                borderBottom: '1px solid var(--color-border-strong)',
                paddingBottom: 'var(--space-1)',
                transition: 'border-color var(--duration-micro) var(--easing-default)'
              }}
            >
              Connect with Gradient <motion.span aria-hidden="true" className="cta-arrow" transition={{ type: 'spring', stiffness: 300, damping: 20 }}>&rarr;</motion.span>
            </NavLink>
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        .cta-link:hover { border-bottom-color: var(--color-accent) !important; }
        .cta-link:focus-visible { outline: var(--focus-ring-width) solid var(--color-accent); outline-offset: var(--focus-ring-offset); border-radius: var(--radius-sm); }
        .cta-link .cta-arrow { display: inline-block; transition: transform 250ms cubic-bezier(0.175, 0.885, 0.32, 1.275); }
        .cta-link:hover .cta-arrow, .cta-link:focus-visible .cta-arrow { transform: translateX(4px); }
      `}</style>
    </section>
  );
};
