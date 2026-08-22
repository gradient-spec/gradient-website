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

export const ActiveEventsSection: React.FC = () => {
  // Distinguish Upcoming and Ongoing
  const activeEvents = events.filter(e => e.status === 'upcoming' || e.status === 'ongoing');
  
  // Per specification: Omit the section entirely when no verified active event exists.
  if (activeEvents.length === 0) {
    return null;
  }
  
  return (
    <section 
      className="section" 
      aria-labelledby="active-events-heading"
      style={{
        paddingTop: 'var(--space-10)',
        paddingBottom: 'var(--space-10)',
        backgroundColor: 'var(--color-surface-primary)',
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
            id="active-events-heading"
            variants={itemVariants} 
            className="text-heading" 
            style={{ fontSize: 'var(--font-size-xl)', marginBottom: 'var(--space-8)' }}
          >
            Active
          </motion.h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-8)' }}>
            {activeEvents.map((event) => (
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
                      <div className="text-metadata" style={{ color: 'var(--color-text-primary)', marginBottom: 'var(--space-3)' }}>
                        {event.date}
                        {event.endDate && ` - ${event.endDate}`}
                      </div>
                      <div className="text-metadata" style={{ color: 'var(--color-text-secondary)', display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                        <span style={{ display: 'block', width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--color-accent)' }} />
                        <span style={{ textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                          {event.status === 'ongoing' ? 'Ongoing Event' : 'Upcoming Event'}
                        </span>
                      </div>
                      {event.location && (
                        <div className="text-metadata" style={{ color: 'var(--color-text-muted)', marginTop: 'var(--space-2)' }}>
                          {event.location}
                        </div>
                      )}
                    </div>
                    
                    {/* Right: Title, Description & Link (Span 9) */}
                    <div style={{ gridColumn: 'span 9' }}>
                      <h3 className="text-heading" style={{ fontSize: 'var(--font-size-2xl)', marginBottom: 'var(--space-3)' }}>
                        {event.title}
                      </h3>
                      {event.description && (
                        <p className="text-body" style={{ color: 'var(--color-text-secondary)', marginBottom: 'var(--space-4)', maxWidth: '80%' }}>
                          {event.description}
                        </p>
                      )}
                      {event.externalUrl && (
                        <div style={{ marginTop: 'var(--space-2)' }}>
                          <a 
                            href={event.externalUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-label active-event-link"
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
                            View Details <motion.span aria-hidden="true" whileHover={{ x: 4 }} transition={{ type: 'spring', stiffness: 300 }}>&rarr;</motion.span>
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </div>

        <style>{`
          .active-event-link:hover { border-bottom-color: var(--color-accent) !important; }
          .active-event-link:focus-visible { outline: var(--focus-ring-width) solid var(--color-accent); outline-offset: var(--focus-ring-offset); }
          
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
