import React from 'react';
import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { events } from '@/data/events';

export const FeaturedEventSection: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();

  // CANDIDATE: Section-scoped motion values
  const CANDIDATE_STAGGER_DELAY = 0.15;
  const CANDIDATE_Y_TRANSLATION = 15;

  // Find the first upcoming event. If none exists, fallback to the placeholder state.
  // We explicitly do not fallback to a past event.
  const featuredEvent = events.find(e => e.status === 'upcoming') || null;

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

  // Render a structural placeholder instead of fake domain data
  const renderPlaceholders = () => (
    <>
      <motion.div variants={itemVariants} className="event-info-metadata text-metadata" style={{ color: 'var(--color-accent)', marginBottom: 'var(--space-4)', textTransform: 'uppercase' }}>
        [Dev Placeholder: Section Metadata]
      </motion.div>
      <motion.h2 variants={itemVariants} id="featured-event-heading" className="text-heading dev-placeholder" style={{ marginBottom: 'var(--space-4)' }}>
        [Dev Placeholder: Featured Event Title]
      </motion.h2>
      <motion.p variants={itemVariants} className="text-body dev-placeholder" style={{ color: 'var(--color-text-secondary)', marginBottom: 'var(--space-6)' }}>
        [Dev Placeholder: Short description explaining the purpose of the featured event and what it entails. Not an entire page of text.]
      </motion.p>
      
      <motion.div variants={itemVariants} className="event-info-details" style={{ marginBottom: 'var(--space-6)' }}>
        <p className="text-metadata" style={{ color: 'var(--color-text-primary)', marginBottom: 'var(--space-1)' }}>
          [Dev Placeholder: Date & Time]
        </p>
        <p className="text-metadata" style={{ color: 'var(--color-text-secondary)' }}>
          [Dev Placeholder: Location]
        </p>
      </motion.div>
      
      <motion.div variants={itemVariants}>
        <a href="#events-placeholder" className="text-label" style={{ color: 'var(--color-accent)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)' }}>
          [Dev Placeholder: View Event Details] <span aria-hidden="true">&rarr;</span>
        </a>
      </motion.div>
    </>
  );

  return (
    <section className="section" aria-labelledby="featured-event-heading" style={{ overflow: 'hidden' }}>
      <div className="container">
        
        {/* Scoped style for responsive behavior without a new global CSS file */}
        <style>{`
          .event-layout-grid {
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            gap: var(--grid-gutter);
            align-items: center;
          }
          .event-image-block { 
            grid-column: 1 / span 5;
          }
          .event-info-block { 
            /* 5:1:6 split creating a strong editorial whitespace margin in the center */
            grid-column: 7 / span 6; 
          }
          .event-image-frame {
            aspect-ratio: 4/3; /* CANDIDATE visual framing decision. Do not treat as a universal requirement. */
            background-color: var(--color-surface-secondary);
            border: 1px dashed var(--color-border-strong);
            border-radius: var(--radius-sm);
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            padding: var(--space-4);
            position: relative;
            overflow: hidden;
            width: 100%;
          }
          /* CANDIDATE breakpoint: Tablet */
          @media (max-width: 992px) {
            .event-layout-grid {
              grid-template-columns: 1fr;
              align-items: start;
            }
            .event-image-block { 
              grid-column: 1 / -1;
              margin-bottom: var(--space-6);
            }
            .event-info-block { 
              grid-column: 1 / -1; 
            }
            .event-image-frame {
              aspect-ratio: 16/9; /* Wider frame on tablet/mobile */
            }
          }
        `}</style>
        
        <motion.div 
          className="event-layout-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-10% 0px' }}
          variants={sectionVariants}
        >
          {/* Left Block (Span 5) - Event Image */}
          <motion.div variants={itemVariants} className="event-image-block">
            <div className="event-image-frame">
              {featuredEvent?.image ? (
                <img src={featuredEvent.image} alt={featuredEvent.imageAlt || featuredEvent.title} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
              ) : (
                <span className="text-metadata" style={{ color: 'var(--color-text-muted)' }}>
                  Event Image Placeholder
                </span>
              )}
            </div>
          </motion.div>

          {/* Right Block (Span 6, spaced at col 7) - Event Information */}
          <div className="event-info-block">
            {featuredEvent ? (
              <>
                <motion.div variants={itemVariants} className="text-metadata" style={{ color: 'var(--color-accent)', marginBottom: 'var(--space-4)', textTransform: 'uppercase' }}>
                  {featuredEvent.status === 'upcoming' ? 'Upcoming Event' : 'Event'}
                </motion.div>
                
                <motion.h2 
                  id="featured-event-heading"
                  variants={itemVariants} 
                  className="text-heading" 
                  style={{ marginBottom: 'var(--space-4)' }}
                >
                  {featuredEvent.title}
                </motion.h2>
                
                <motion.p variants={itemVariants} className="text-body" style={{ color: 'var(--color-text-secondary)', marginBottom: 'var(--space-6)' }}>
                  {featuredEvent.description}
                </motion.p>
                
                {(featuredEvent.date || featuredEvent.location) && (
                  <motion.div variants={itemVariants} className="event-info-details" style={{ marginBottom: 'var(--space-6)' }}>
                    {featuredEvent.date && (
                      <p className="text-metadata" style={{ color: 'var(--color-text-primary)', marginBottom: 'var(--space-1)' }}>
                        {featuredEvent.date}
                      </p>
                    )}
                    {featuredEvent.location && (
                      <p className="text-metadata" style={{ color: 'var(--color-text-secondary)' }}>
                        {featuredEvent.location}
                      </p>
                    )}
                  </motion.div>
                )}
                
                <motion.div variants={itemVariants}>
                  <a href={featuredEvent.externalUrl || "#events"} className="text-label" style={{ color: 'var(--color-accent)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                    {featuredEvent.externalUrl ? 'Register Now' : 'View Event Details'} <span aria-hidden="true">&rarr;</span>
                  </a>
                </motion.div>
              </>
            ) : (
              renderPlaceholders()
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
