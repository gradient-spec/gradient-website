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

          <ol className="timeline-list">
            {timelineEntries.map((entry, index) => (
              <motion.li 
                key={entry.id} 
                variants={itemVariants}
                className={`timeline-item ${index === timelineEntries.length - 1 ? 'is-last' : ''}`}
              >
                <div className="grid timeline-grid">
                  {/* Left: Date (Span 3) */}
                  <div className="timeline-date">
                    <div className="text-metadata" style={{ color: 'var(--color-text-primary)', letterSpacing: '0.05em' }}>
                      {entry.date}
                    </div>
                  </div>
                  
                  {/* Right: Title & Description (Span 9) */}
                  <div className="timeline-content">
                    <h3 className="text-heading" style={{ fontSize: 'var(--font-size-xl)', marginBottom: 'var(--space-4)' }}>
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
        .timeline-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
        }

        .timeline-grid {
          align-items: start;
        }

        .timeline-date {
          grid-column: 1 / span 3;
          padding-top: var(--space-2);
        }

        .timeline-content {
          grid-column: 4 / span 9;
          border-left: 1px solid var(--color-border-subtle);
          padding-left: var(--space-6);
          padding-bottom: var(--space-10);
          position: relative;
        }
        
        .timeline-item.is-last .timeline-content {
          padding-bottom: 0;
        }

        /* Red Accent Node */
        .timeline-content::before {
          content: '';
          position: absolute;
          left: -4px; /* Centers the 7px dot on the 1px border */
          top: calc(var(--space-2) + 6px); /* Align visually with text */
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background-color: var(--color-border-strong);
          transition: background-color var(--duration-micro) ease, transform var(--duration-micro) ease;
        }

        /* Hover Interaction */
        .timeline-item:hover .timeline-content::before {
          background-color: var(--color-accent);
          transform: scale(1.5);
        }
        
        @media (max-width: 992px) {
          .timeline-date {
            grid-column: 1 / span 4;
          }
          .timeline-content {
            grid-column: 5 / span 8;
          }
        }

        @media (max-width: 768px) {
          .timeline-grid > div {
            grid-column: span 12 !important;
          }
          .timeline-date {
            padding-top: 0;
            margin-bottom: var(--space-4);
          }
          .timeline-content {
            border-left: none;
            padding-left: 0;
            padding-bottom: var(--space-8);
          }
          .timeline-content::before {
            display: none;
          }
        }
      `}</style>
    </section>
  );
};
