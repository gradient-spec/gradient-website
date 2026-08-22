import React from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { events } from '@/data/events';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

export const PastEventsSection: React.FC = () => {
  const pastEvents = events.filter(e => e.status === 'past');
  
  // If no past events exist, remain entirely hidden as required by the architecture plan.
  if (pastEvents.length === 0) {
    return null;
  }

  return (
    <section 
      className="section" 
      aria-labelledby="past-events-heading"
      style={{
        paddingTop: 'var(--space-10)',
        paddingBottom: 'var(--space-10)',
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
            id="past-events-heading"
            variants={itemVariants} 
            className="text-heading" 
            style={{ marginBottom: 'var(--space-8)' }}
          >
            Archive
          </motion.h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-8)' }}>
            {pastEvents.map((event) => (
              <motion.article 
                key={event.id}
                variants={itemVariants}
                style={{ 
                  borderTop: '1px solid var(--color-border-subtle)',
                  paddingTop: 'var(--space-6)'
                }}
              >
                <div className="grid">
                  {/* Left: Date & Metadata (Span 3) */}
                  <div style={{ gridColumn: 'span 3' }}>
                    <div className="text-metadata" style={{ color: 'var(--color-text-primary)', marginBottom: 'var(--space-2)' }}>
                      {event.date}
                      {event.endDate && ` - ${event.endDate}`}
                    </div>
                    {event.location && (
                      <div className="text-metadata" style={{ color: 'var(--color-text-muted)', marginTop: 'var(--space-2)' }}>
                        {event.location}
                      </div>
                    )}
                  </div>
                  
                  {/* Right: Title, Description & Link (Span 9) */}
                  <div style={{ gridColumn: 'span 9' }}>
                    <h3 className="text-subheading" style={{ marginBottom: 'var(--space-3)' }}>
                      {event.title}
                    </h3>
                    {event.description && (
                      <p className="text-body" style={{ color: 'var(--color-text-secondary)', marginBottom: 'var(--space-4)', maxWidth: '80%' }}>
                        {event.description}
                      </p>
                    )}
                    {event.externalUrl && (
                      <a 
                        href={event.externalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-label"
                        style={{
                          display: 'inline-flex',
                          color: 'var(--color-text-primary)',
                          textDecoration: 'none',
                          borderBottom: '1px solid var(--color-border-subtle)',
                          paddingBottom: 'var(--space-1)'
                        }}
                      >
                        Event Details
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
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
