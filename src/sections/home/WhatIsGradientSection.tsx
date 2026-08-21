import React from 'react';
import { motion, useReducedMotion, type Variants } from 'framer-motion';

export const WhatIsGradientSection: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();

  // CANDIDATE: Section-scoped motion values
  // These represent deferred global motion design decisions.
  const CANDIDATE_STAGGER_DELAY = 0.15;
  const CANDIDATE_Y_TRANSLATION = 15;

  // Subtle entrance motion for the section
  const sectionVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: prefersReducedMotion ? 0 : CANDIDATE_STAGGER_DELAY,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : CANDIDATE_Y_TRANSLATION },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  return (
    <section className="section" aria-labelledby="what-is-gradient-heading" style={{ overflow: 'hidden' }}>
      <div className="container">
        <motion.div 
          className="grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-10% 0px' }}
          variants={sectionVariants}
          style={{ alignItems: 'start' }}
        >
          {/* Left Margin (Span 4) */}
          <div className="what-is-left-margin">
            {/* Scoped style for responsive behavior without a new global CSS file */}
            <style>{`
              .what-is-left-margin { 
                grid-column: 1 / span 4;
                border-left: 1px solid var(--color-border-subtle);
                padding-left: var(--space-4);
                height: 100%;
              }
              .what-is-right-content { 
                grid-column: 5 / span 8; 
              }
              .mission-vision-grid {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: var(--grid-gutter);
                margin-top: var(--space-7);
              }
              /* CANDIDATE breakpoint: Tablet */
              @media (max-width: 992px) {
                .what-is-left-margin { grid-column: 1 / span 3; }
                .what-is-right-content { grid-column: 4 / span 9; }
                .mission-vision-grid { grid-template-columns: 1fr; }
              }
              /* CANDIDATE breakpoint: Mobile */
              @media (max-width: 768px) {
                .what-is-left-margin, .what-is-right-content { grid-column: 1 / -1 !important; }
                .what-is-left-margin { 
                  border-left: none; 
                  border-top: 1px solid var(--color-border-subtle);
                  padding-left: 0;
                  padding-top: var(--space-4);
                  margin-bottom: var(--space-5);
                  height: auto;
                }
              }
            `}</style>
            
            <motion.div variants={itemVariants} className="text-metadata" style={{ color: 'var(--color-accent)' }}>
              [Dev Placeholder: Section Metadata]
            </motion.div>
          </div>

          {/* Right Content (Span 8) */}
          <div className="what-is-right-content">
            <motion.h2 
              id="what-is-gradient-heading"
              variants={itemVariants} 
              className="text-heading dev-placeholder" 
              style={{ marginBottom: 'var(--space-5)' }}
            >
              [Dev Placeholder: Primary intellectual introduction statement regarding Gradient's purpose and identity.]
            </motion.h2>

            <motion.div variants={itemVariants} className="text-subheading dev-placeholder" style={{ color: 'var(--color-text-secondary)', maxWidth: '90%' }}>
              [Dev Placeholder: Supporting introductory paragraph.]
            </motion.div>

            <div className="mission-vision-grid">
              {/* Mission Block */}
              <motion.div variants={itemVariants}>
                <h3 className="text-label dev-placeholder" style={{ color: 'var(--color-text-primary)', marginBottom: 'var(--space-3)' }}>
                  [Dev Placeholder: Mission Label]
                </h3>
                <p className="text-body dev-placeholder" style={{ color: 'var(--color-text-secondary)' }}>
                  [Dev Placeholder: What Gradient exists to do. An editorial paragraph explaining the organization's core mission without marketing jargon.]
                </p>
              </motion.div>

              {/* Vision Block */}
              <motion.div variants={itemVariants}>
                <h3 className="text-label dev-placeholder" style={{ color: 'var(--color-text-primary)', marginBottom: 'var(--space-3)' }}>
                  [Dev Placeholder: Vision Label]
                </h3>
                <p className="text-body dev-placeholder" style={{ color: 'var(--color-text-secondary)' }}>
                  [Dev Placeholder: Where Gradient is heading. An editorial paragraph explaining the long-term vision and trajectory.]
                </p>
              </motion.div>
            </div>
            
            {/* About Link Placeholder */}
            <motion.div variants={itemVariants} style={{ marginTop: 'var(--space-7)' }}>
              {/* Using a placeholder for the link. In production, this would use a router Link */}
              <a href="#about-placeholder" className="text-label" style={{ color: 'var(--color-accent)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                [Dev Placeholder: About Action] <span aria-hidden="true">&rarr;</span>
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
