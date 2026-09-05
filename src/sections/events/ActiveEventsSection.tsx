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
  hidden: { opacity: 0, y: 20, filter: 'blur(10px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 1.0,
      ease: [0.16, 1, 0.3, 1],
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
      className="section bg-glow-top-right" 
      aria-labelledby="active-events-heading"
      style={{
        paddingTop: 'var(--space-10)',
        paddingBottom: 'var(--space-10)',
        backgroundColor: 'var(--color-surface-primary)',
        position: 'relative',
        overflow: 'hidden'
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

        <style>{`
          .active-event-link:hover { border-bottom-color: var(--color-accent) !important; }
          .active-event-link:focus-visible { outline: var(--focus-ring-width) solid var(--color-accent); outline-offset: var(--focus-ring-offset); border-radius: var(--radius-sm); }
          .active-event-link .cta-arrow { display: inline-block; transition: transform 250ms cubic-bezier(0.175, 0.885, 0.32, 1.275); }
          .active-event-link:hover .cta-arrow, .active-event-link:focus-visible .cta-arrow { transform: translateX(4px); }
          
          .event-metadata-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: var(--space-6);
            margin-top: var(--space-8);
            margin-bottom: var(--space-10);
            padding-top: var(--space-6);
            border-top: 1px solid var(--color-border-subtle);
          }

          .domains-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: var(--space-3) var(--space-6);
            margin-top: var(--space-6);
            margin-bottom: var(--space-10);
          }

          @media (max-width: 768px) {
            .grid > div {
              grid-column: span 12 !important;
              margin-bottom: var(--space-4);
            }
            .event-metadata-grid, .domains-grid {
              grid-template-columns: 1fr;
            }
            .event-right-col {
              border-left: none !important;
              padding-left: 0 !important;
              padding-top: var(--space-4);
              border-top: 2px solid var(--color-border-subtle);
            }
          }
        `}</style>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-12)' }}>
            {activeEvents.map((event) => (
                <motion.article 
                  key={event.id}
                  variants={itemVariants}
                  style={{ 
                    borderTop: '1px solid var(--color-border-subtle)',
                    paddingTop: 'var(--space-8)'
                  }}
                >
                  <div className="grid">
                    {/* Left: Status (Span 3) */}
                    <div style={{ gridColumn: 'span 3' }}>
                      <div className="text-metadata" style={{ color: 'var(--color-text-primary)', display: 'flex', alignItems: 'center', gap: 'var(--space-3)', fontSize: 'var(--font-size-sm)', fontWeight: 'var(--font-weight-medium)', marginBottom: 'var(--space-4)' }}>
                        <span style={{ display: 'block', width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--color-accent)' }} />
                        <span style={{ textTransform: 'uppercase', letterSpacing: '0.15em' }}>
                          {event.status === 'ongoing' ? 'Ongoing Event' : 'Upcoming Event'}
                        </span>
                      </div>
                      
                      {event.registrationStatus === 'closed' && (
                        <div className="text-metadata" style={{ color: 'var(--color-text-tertiary)', letterSpacing: '0.15em', fontSize: 'var(--font-size-xs)' }}>
                          [ REGISTRATION CLOSED ]
                        </div>
                      )}
                    </div>
                    
                    {/* Right: Full Content (Span 9) */}
                    <div className="event-right-col" style={{ gridColumn: 'span 9', borderLeft: '2px solid var(--color-border-subtle)', paddingLeft: 'var(--space-6)' }}>
                      <h3 className="text-display" style={{ fontSize: 'clamp(4rem, 10vw, 8rem)', marginBottom: 'var(--space-4)', lineHeight: '0.9', letterSpacing: '-0.03em' }}>
                        {event.title}
                      </h3>
                      
                      <div className="text-display" style={{ color: 'var(--color-text-primary)', marginBottom: 'var(--space-8)', fontSize: 'clamp(2rem, 4vw, 3rem)', display: 'flex', flexWrap: 'wrap', gap: 'var(--space-6)' }}>
                        <span>{event.date}</span>
                        {(event.duration || event.type) && (
                          <span style={{ color: 'var(--color-text-secondary)' }}>
                            // {event.duration} {event.type}
                          </span>
                        )}
                        {event.location && (
                          <span style={{ color: 'var(--color-text-tertiary)' }}>
                            // {event.location}
                          </span>
                        )}
                      </div>

                      {event.posterCopy && event.posterCopy.length > 0 && (
                        <div style={{ marginBottom: 'var(--space-6)' }}>
                          {event.posterCopy.map((copy, i) => (
                            <p key={i} className="text-heading" style={{ fontSize: 'clamp(1.25rem, 2.5vw, 2rem)', color: 'var(--color-text-primary)', marginBottom: 'var(--space-2)' }}>
                              {copy}
                            </p>
                          ))}
                        </div>
                      )}

                      {event.description && (
                        <p className="text-body" style={{ color: 'var(--color-text-secondary)', marginBottom: 'var(--space-6)', maxWidth: '85%', lineHeight: '1.6' }}>
                          {event.description}
                        </p>
                      )}

                      {/* Event Details Grid */}
                      {(event.eligibility || event.teamSize || event.prize || event.organizingDepartment) && (
                        <div className="event-metadata-grid">
                          {event.eligibility && (
                            <div>
                              <span className="text-metadata" style={{ display: 'block', color: 'var(--color-text-tertiary)', letterSpacing: '0.1em', marginBottom: 'var(--space-2)' }}>ELIGIBILITY</span>
                              <span className="text-display" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', color: 'var(--color-text-primary)' }}>{event.eligibility}</span>
                            </div>
                          )}
                          {event.teamSize && (
                            <div>
                              <span className="text-metadata" style={{ display: 'block', color: 'var(--color-text-tertiary)', letterSpacing: '0.1em', marginBottom: 'var(--space-2)' }}>TEAM SIZE</span>
                              <span className="text-display" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', color: 'var(--color-text-primary)' }}>{event.teamSize}</span>
                            </div>
                          )}
                          {event.prize && (
                            <div>
                              <span className="text-metadata" style={{ display: 'block', color: 'var(--color-text-tertiary)', letterSpacing: '0.1em', marginBottom: 'var(--space-2)' }}>PRIZE</span>
                              <span className="text-display" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', color: 'var(--color-text-primary)' }}>{event.prize}</span>
                            </div>
                          )}
                          {event.organizingDepartment && (
                            <div>
                              <span className="text-metadata" style={{ display: 'block', color: 'var(--color-text-tertiary)', letterSpacing: '0.1em', marginBottom: 'var(--space-2)' }}>DEPARTMENT</span>
                              <span className="text-display" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', color: 'var(--color-text-primary)' }}>{event.organizingDepartment}</span>
                            </div>
                          )}
                        </div>
                      )}

                      {/* Domains */}
                      {event.domains && event.domains.length > 0 && (
                        <div style={{ marginBottom: 'var(--space-10)' }}>
                          <span className="text-metadata" style={{ display: 'block', color: 'var(--color-text-tertiary)', letterSpacing: '0.15em', marginBottom: 'var(--space-4)', borderBottom: '1px solid var(--color-border-subtle)', paddingBottom: 'var(--space-2)' }}>
                            DOMAINS
                          </span>
                          <div className="domains-grid">
                            {event.domains.map((domain, index) => (
                              <div 
                                key={index} 
                                className="text-body" 
                                style={{ 
                                  color: 'var(--color-text-secondary)', 
                                  display: 'flex', 
                                  alignItems: 'baseline',
                                  gap: 'var(--space-4)',
                                  borderBottom: '1px solid var(--color-border-subtle)',
                                  paddingBottom: 'var(--space-3)'
                                }}
                              >
                                <span className="text-metadata" style={{ color: 'var(--color-text-primary)', textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: 'var(--font-size-lg)' }}>
                                  <span style={{ color: 'var(--color-text-muted)', marginRight: 'var(--space-2)' }}>{String(index + 1).padStart(2, '0')} &mdash;</span> {domain}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {event.externalUrl && (
                        <div>
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
                            Visit {event.title} <motion.span aria-hidden="true" className="cta-arrow" transition={{ type: 'spring', stiffness: 300, damping: 20 }}>&rarr;</motion.span>
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
      </section>
    );
  };
