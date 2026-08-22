import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { timelineEntries } from '@/data/timeline';

export const TimelineSection: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 15 }, // CANDIDATE: 15px stagger
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
      aria-labelledby="timeline-heading"
      style={{
        paddingTop: 'var(--space-12)',
        paddingBottom: 'var(--space-12)',
      }}
    >
      <div className="container">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={containerVariants}
        >
          <motion.h2 
            id="timeline-heading" 
            variants={itemVariants} 
            className="text-heading" 
            style={{ marginBottom: 'var(--space-10)' }}
          >
            Chronology
          </motion.h2>

          <ol style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 'var(--space-10)' }}>
            {timelineEntries.map((entry) => (
              <motion.li 
                key={entry.id} 
                variants={itemVariants}
                style={{ 
                  borderTop: '1px solid var(--color-border-subtle)',
                  paddingTop: 'var(--space-6)' 
                }}
              >
                <div className="grid">
                  {/* Left: Date (Span 3) */}
                  <div style={{ gridColumn: 'span 3' }}>
                    <div className="text-metadata" style={{ color: 'var(--color-text-primary)' }}>
                      {entry.date}
                    </div>
                  </div>
                  
                  {/* Right: Title & Description (Span 9) */}
                  <div style={{ gridColumn: 'span 9' }}>
                    <h3 className="text-subheading" style={{ marginBottom: 'var(--space-4)' }}>
                      {entry.title}
                    </h3>
                    <p className="text-body" style={{ color: 'var(--color-text-secondary)', maxWidth: '90%' }}>
                      {entry.description}
                    </p>
                  </div>
                </div>
              </motion.li>
            ))}
          </ol>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .grid > div {
            grid-column: span 12 !important;
            margin-bottom: var(--space-4);
          }
        }
      `}</style>
    </section>
  );
};
