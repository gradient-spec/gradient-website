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
                  <div className="timeline-date" style={{ gridColumn: 'span 3', position: 'relative' }}>
                    <div className="text-metadata" style={{ color: 'var(--color-text-secondary)', position: 'sticky', top: 'var(--space-20)' }}>
                      {entry.date}
                    </div>
                  </div>

                  {/* Right: Title & Description (Span 9) */}
                  <div className="timeline-content">
                    <h3 className="text-heading" style={{ fontSize: 'var(--font-size-3xl)', marginBottom: 'var(--space-3)' }}>
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
          position: relative;
        }

        /* Connecting vertical line */
        .timeline-list::before {
          content: '';
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          width: 1px;
          background-color: var(--color-border-subtle);
          z-index: 0;
        }

        @media (min-width: 769px) {
          .timeline-list::before {
            left: calc(25% - 0.5px); /* Matches the 3-column start for the timeline-content */
          }
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
          padding-left: var(--space-8);
          padding-bottom: var(--space-12);
          position: relative;
          z-index: 1;
        }
        
        .timeline-item.is-last .timeline-content {
          padding-bottom: 0;
        }

        /* Red Accent Node */
        .timeline-content::before {
          content: '';
          position: absolute;
          left: -4px; /* Centers the 7px dot on the 1px line */
          top: 6px; /* Align visually with text */
          width: 9px;
          height: 9px;
          border-radius: 50%;
          background-color: var(--color-surface-primary);
          border: 2px solid var(--color-border-strong);
          transition: border-color var(--duration-micro) ease, transform var(--duration-micro) ease;
        }

        /* Hover Interaction */
        .timeline-item:hover .timeline-content::before {
          border-color: var(--color-accent);
          transform: scale(1.2);
        }
        
        @media (max-width: 992px) {
          .timeline-date {
            grid-column: 1 / span 4;
          }
          .timeline-content {
            grid-column: 5 / span 8;
          }
          .timeline-list::before {
            left: calc(33.333% - 0.5px); /* Matches 4-column span */
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
            padding-left: var(--space-6);
            padding-bottom: var(--space-8);
          }
          .timeline-list::before {
            left: 0;
          }
          .timeline-content::before {
            left: -4.5px;
            top: 6px;
          }
        }
      `}</style>
    </section>
  );
};
