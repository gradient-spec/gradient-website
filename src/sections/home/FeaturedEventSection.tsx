import React from 'react';
import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { events } from '@/data/events';

export const FeaturedEventSection: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();

  // CANDIDATE: Section-scoped motion values
  const CANDIDATE_STAGGER_DELAY = 0.15;
  const CANDIDATE_Y_TRANSLATION = 15;

  // Find the first upcoming event.
  // We explicitly do not fallback to a past or ongoing event.
  const featuredEvent = events.find(e => e.status === 'upcoming') || null;

  // Per specification: Omit the section entirely when no verified upcoming event exists.
  if (!featuredEvent) {
    return null;
  }

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
            <div className="event-image-frame" style={{ borderRadius: 'var(--radius-md)' }}>
              {featuredEvent?.image ? (
                <img src={featuredEvent.image} alt={featuredEvent.imageAlt || featuredEvent.title} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
              ) : (
                <>
                  <div 
                    style={{ 
                      position: 'absolute', 
                      top: 0, 
                      left: 0, 
                      right: 0, 
                      bottom: 0, 
                      background: 'linear-gradient(145deg, rgba(255,255,255,0.02) 0%, rgba(0,0,0,0.02) 100%)',
                      pointerEvents: 'none'
                    }} 
                  />
                  <span className="text-technical" style={{ color: 'var(--color-text-muted)', letterSpacing: '0.05em' }}>
                    IMAGE PLACEHOLDER
                  </span>
                </>
              )}
            </div>
          </motion.div>

          {/* Right Block (Span 6, spaced at col 7) - Event Information */}
          <div className="event-info-block">
            <motion.div variants={itemVariants} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', marginBottom: 'var(--space-4)' }}>
              <span style={{ display: 'block', width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--color-accent)' }} />
              <span className="text-metadata" style={{ color: 'var(--color-text-secondary)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                {featuredEvent.status === 'upcoming' ? 'Upcoming Event' : 'Event'}
              </span>
            </motion.div>
            
            <motion.h2 
              id="featured-event-heading"
              variants={itemVariants} 
              className="text-heading" 
              style={{ marginBottom: 'var(--space-4)' }}
            >
              {featuredEvent.title}
            </motion.h2>
            
            {featuredEvent.description && (
              <motion.p variants={itemVariants} className="text-body" style={{ color: 'var(--color-text-secondary)', marginBottom: 'var(--space-6)' }}>
                {featuredEvent.description}
              </motion.p>
            )}
            
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
            
            {featuredEvent.externalUrl && (
              <motion.div variants={itemVariants} style={{ marginTop: 'var(--space-2)' }}>
                <a 
                  href={featuredEvent.externalUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-label event-register-link" 
                  style={{ 
                    color: 'var(--color-text-primary)', 
                    textDecoration: 'none', 
                    display: 'inline-flex', 
                    alignItems: 'center', 
                    gap: 'var(--space-2)',
                    borderBottom: '1px solid var(--color-border-subtle)',
                    paddingBottom: 'var(--space-1)',
                    transition: 'border-color var(--duration-micro) var(--easing-default)'
                  }}
                >
                  Register Now <motion.span aria-hidden="true" whileHover={{ x: 4 }} transition={{ type: 'spring', stiffness: 300 }}>&rarr;</motion.span>
                </a>
                <style>{`
                  .event-register-link:hover { border-bottom-color: var(--color-accent) !important; }
                  .event-register-link:focus-visible { outline: var(--focus-ring-width) solid var(--color-accent); outline-offset: var(--focus-ring-offset); }
                `}</style>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
