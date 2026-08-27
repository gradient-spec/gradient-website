import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import type { Variants } from 'framer-motion';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
};

export const HomeCTASection: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();
  const adjustedItemVariants: Variants = prefersReducedMotion ? {
    hidden: { opacity: 0, y: 0 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } }
  } : itemVariants;

  return (
    <section 
      className="section" 
      aria-labelledby="home-cta-heading"
      style={{
        paddingTop: 'var(--space-12)',
        paddingBottom: 'var(--space-12)',
        backgroundColor: 'var(--color-surface-primary)',
      }}
    >
      <div className="container">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={containerVariants}
          className="editorial-row"
        >
          <div className="editorial-left">
            <motion.div variants={adjustedItemVariants} className="text-label" style={{ color: 'var(--color-text-tertiary)', letterSpacing: '0.15em', marginBottom: 'var(--space-3)' }}>
              [ CONNECT ]
            </motion.div>
          </div>
          
          <div className="editorial-right">
            <motion.h2 
              id="home-cta-heading" 
              variants={adjustedItemVariants} 
              className="text-display" 
              style={{ fontSize: 'clamp(3rem, 7vw, 6rem)', lineHeight: '1.1', marginBottom: 'var(--space-4)' }}
            >
              Ideas are automated.
            </motion.h2>
            
            <motion.p 
              variants={adjustedItemVariants} 
              className="text-heading" 
              style={{ color: 'var(--color-text-secondary)', fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', marginBottom: 'var(--space-8)' }}
            >
              Ideas, made real.
            </motion.p>
            
            <motion.div variants={adjustedItemVariants}>
              <NavLink 
                to="/contact" 
                className="text-label cta-link"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 'var(--space-2)',
                  color: 'var(--color-text-primary)',
                  textDecoration: 'none',
                  borderBottom: '1px solid var(--color-border-subtle)',
                  paddingBottom: 'var(--space-1)',
                  transition: 'border-color var(--duration-micro) var(--easing-default)'
                }}
              >
                Connect with Gradient <motion.span aria-hidden="true" className="cta-arrow" transition={{ type: 'spring', stiffness: 300, damping: 20 }}>&rarr;</motion.span>
              </NavLink>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <style>{`
        .editorial-row {
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          gap: var(--grid-gutter);
          border-top: 1px solid var(--color-border-subtle);
          padding-top: var(--space-10);
          padding-bottom: var(--space-8);
        }

        .editorial-left {
          grid-column: 1 / span 3;
        }
        
        .editorial-right {
          grid-column: 4 / span 9;
        }

        .cta-link:hover { border-bottom-color: var(--color-accent) !important; }
        .cta-link:focus-visible { outline: var(--focus-ring-width) solid var(--color-accent); outline-offset: var(--focus-ring-offset); border-radius: var(--radius-sm); }
        .cta-link .cta-arrow { display: inline-block; transition: transform 250ms cubic-bezier(0.175, 0.885, 0.32, 1.275); }
        .cta-link:hover .cta-arrow, .cta-link:focus-visible .cta-arrow { transform: translateX(4px); }

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
