import React from 'react';
import { motion, useReducedMotion, type Variants } from 'framer-motion';

export const HomeCTASection: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();

  // CANDIDATE: Section-scoped motion values.
  // The closing section uses the quietest motion (10px vs Hero's 20px) 
  // to feel like the page settling into its final state.
  const CANDIDATE_Y_TRANSLATION = 10;
  const CANDIDATE_STAGGER_DELAY = 0.15;

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
    <section className="section" aria-labelledby="home-cta-heading" style={{ overflow: 'hidden' }}>
      <div className="container">
        
        {/* Scoped style for responsive behavior without a new global CSS file */}
        <style>{`
          .cta-layout-grid {
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            gap: var(--grid-gutter);
            align-items: center;
          }
          .cta-empty-block { 
            grid-column: 1 / span 5;
          }
          .cta-content-block { 
            /* 5:6:1 split creating generous editorial whitespace on the left */
            grid-column: 6 / span 6; 
          }
          .cta-link {
            display: inline-flex;
            align-items: center;
            gap: var(--space-2);
            color: var(--color-accent);
            text-decoration: none;
            padding-bottom: 2px;
            border-bottom: 1px solid transparent;
            transition: border-color 0.2s ease;
          }
          .cta-link:hover, .cta-link:focus-visible {
            border-bottom-color: var(--color-accent);
          }
          /* CANDIDATE breakpoint: Tablet */
          @media (max-width: 992px) {
            .cta-layout-grid {
              grid-template-columns: 1fr;
              align-items: start;
            }
            .cta-empty-block { 
              display: none;
            }
            .cta-content-block { 
              grid-column: 1 / -1; 
            }
          }
        `}</style>
        
        <motion.div 
          className="cta-layout-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-10% 0px' }}
          variants={sectionVariants}
        >
          {/* Left Block (Span 5) - Empty Editorial Whitespace */}
          <div className="cta-empty-block" aria-hidden="true" />

          {/* Right Content Block (Span 6) */}
          <div className="cta-content-block">
            <motion.div variants={itemVariants} className="text-metadata" style={{ color: 'var(--color-text-secondary)', marginBottom: 'var(--space-4)', textTransform: 'uppercase' }}>
              [Dev Placeholder: Closing Section]
            </motion.div>
            
            <motion.h2 
              id="home-cta-heading"
              variants={itemVariants} 
              className="text-heading dev-placeholder" 
              style={{ marginBottom: 'var(--space-4)' }}
            >
              [Dev Placeholder: Primary Closing Statement]
            </motion.h2>
            
            <motion.p variants={itemVariants} className="text-body dev-placeholder" style={{ color: 'var(--color-text-secondary)', marginBottom: 'var(--space-6)', maxWidth: '40ch' }}>
              [Dev Placeholder: Final supporting copy inviting the user to continue exploring Gradient without aggressive sales pressure or recruitment language.]
            </motion.p>
            
            <motion.div variants={itemVariants}>
              <span 
                className="text-label cta-link" 
              >
                [Dev Placeholder: CTA Action Destination]
              </span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
