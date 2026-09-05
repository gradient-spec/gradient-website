import React from 'react';
import { motion, useReducedMotion, type Variants } from 'framer-motion';

export const WhatIsGradientSection: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();

  const sectionVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 20, filter: prefersReducedMotion ? 'blur(0px)' : 'blur(10px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 1.0, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section
      className="section"
      aria-labelledby="what-is-gradient-heading"
      style={{
        overflow: 'hidden',
        paddingTop: 'var(--space-12)',
        paddingBottom: 'var(--space-12)',
        backgroundColor: 'var(--color-surface-primary)', // Seamless from Hero
        position: 'relative'
      }}
    >
      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <motion.div
          className="grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-10% 0px' }}
          variants={sectionVariants}
          style={{ alignItems: 'start' }}
        >
          <style>{`
            .mission-block {
              grid-column: 2 / span 5;
            }
            .vision-block {
              grid-column: 7 / span 5;
              padding-top: var(--space-12); /* offset to create tension */
            }
            .chapter-number {
              display: block;
              margin-bottom: var(--space-4);
              color: var(--color-text-tertiary);
              border-bottom: 1px solid var(--color-border-subtle);
              padding-bottom: var(--space-2);
            }
            @media (max-width: 992px) {
              .mission-block { grid-column: 1 / span 6; }
              .vision-block { grid-column: 7 / span 6; padding-top: var(--space-8); }
            }
            @media (max-width: 768px) {
              .mission-block, .vision-block { grid-column: 1 / -1 !important; padding-top: 0; }
              .vision-block { margin-top: var(--space-8); }
            }
          `}</style>

          {/* 01 / MISSION */}
          <div className="mission-block">
            <motion.div variants={itemVariants}>
              <span className="text-route-label chapter-number">
                01 / MISSION
              </span>
              <h2
                id="what-is-gradient-heading"
                className="text-heading"
                style={{
                  fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                  color: 'var(--color-text-primary)',
                  lineHeight: '1.1',
                  letterSpacing: '-0.02em'
                }}
              >
                Ideas, made real.
              </h2>
            </motion.div>
          </div>

          {/* 02 / VISION */}
          <div className="vision-block">
            <motion.div variants={itemVariants}>
              <span className="text-route-label chapter-number">
                02 / VISION
              </span>
              <p
                className="text-subheading"
                style={{
                  fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                  color: 'var(--color-text-secondary)',
                  lineHeight: '1.4'
                }}
              >
                A platform that reaches beyond the campus.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
