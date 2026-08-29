import React from 'react';
import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { events } from '@/data/events';

export const FeaturedEventSection: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();

  const featuredEvent = events.find(e => e.status === 'upcoming') || null;
  if (!featuredEvent) return null;

  const sectionVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section 
      className="section" 
      aria-labelledby="featured-event-heading" 
      style={{ 
        overflow: 'hidden', 
        backgroundColor: 'var(--color-surface-secondary)', 
        position: 'relative',
        paddingTop: 'var(--space-12)',
        paddingBottom: 'var(--space-12)',
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      {/* 
        SCALE SHOCK: Massive "2026" in the background 
        It sits fixed or absolute in the background, providing texture and impact.
      */}
      <div 
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          pointerEvents: 'none',
          zIndex: 0
        }}
      >
        <div style={{
          fontSize: 'clamp(12rem, 45vw, 40rem)',
          fontFamily: 'var(--font-display)',
          fontWeight: 'var(--font-weight-bold)',
          lineHeight: 0.8,
          color: 'transparent',
          WebkitTextStroke: '1px rgba(242,241,236,0.04)',
          whiteSpace: 'nowrap',
          userSelect: 'none',
          letterSpacing: '-0.05em'
        }}>
          2026
        </div>
      </div>

      {/* Restrained gradient light field */}
      <div 
        style={{
          position: 'absolute',
          bottom: '0',
          right: '10%',
          width: '50vw',
          height: '50vw',
          background: 'radial-gradient(circle, rgba(168, 85, 247, 0.05) 0%, transparent 60%)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1, width: '100%' }}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-20% 0px' }}
          variants={sectionVariants}
        >
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            textAlign: 'center',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            <motion.div variants={itemVariants} style={{ marginBottom: 'var(--space-6)' }}>
              <span className="text-route-label" style={{ borderBottom: '1px solid var(--color-border-strong)', paddingBottom: 'var(--space-2)' }}>
                03 / EXECUTION
              </span>
            </motion.div>

            {/* PRIMARY HIERARCHY */}
            <motion.h2
              id="featured-event-heading"
              variants={itemVariants}
              className="text-display"
              style={{ 
                fontSize: 'clamp(4rem, 10vw, 8rem)', 
                lineHeight: '1', 
                marginBottom: 'var(--space-6)',
                letterSpacing: '-0.03em',
                textTransform: 'uppercase',
                color: 'var(--color-text-primary)'
              }}
            >
              Specathon
            </motion.h2>

            {/* SECONDARY HIERARCHY */}
            <motion.div 
              variants={itemVariants}
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: 'var(--space-6)',
                marginBottom: 'var(--space-8)'
              }}
            >
              {featuredEvent.date && (
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <span className="text-technical" style={{ color: 'var(--color-text-secondary)', fontSize: 'clamp(1rem, 2vw, 1.25rem)', letterSpacing: '0.05em' }}>
                    {featuredEvent.date}
                  </span>
                </div>
              )}
              {featuredEvent.duration && (
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <span className="text-technical" style={{ color: 'var(--color-text-secondary)', fontSize: 'clamp(1rem, 2vw, 1.25rem)', letterSpacing: '0.05em' }}>
                    // {featuredEvent.duration}
                  </span>
                </div>
              )}
            </motion.div>

            {/* TERTIARY HIERARCHY */}
            <motion.div 
              variants={itemVariants}
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: 'var(--space-4) var(--space-8)',
                paddingTop: 'var(--space-6)',
                borderTop: '1px solid var(--color-border-subtle)',
                width: '100%',
                maxWidth: '600px'
              }}
            >
              {featuredEvent.teamSize && (
                <div style={{ textAlign: 'center' }}>
                  <span className="text-metadata" style={{ display: 'block', color: 'var(--color-text-tertiary)', marginBottom: 'var(--space-1)' }}>TEAM</span>
                  <span className="text-technical" style={{ color: 'var(--color-text-primary)' }}>{featuredEvent.teamSize}</span>
                </div>
              )}
              {featuredEvent.prize && (
                <div style={{ textAlign: 'center' }}>
                  <span className="text-metadata" style={{ display: 'block', color: 'var(--color-text-tertiary)', marginBottom: 'var(--space-1)' }}>PRIZE POOL</span>
                  <span className="text-technical" style={{ color: 'var(--color-text-primary)' }}>{featuredEvent.prize}</span>
                </div>
              )}
              {featuredEvent.eligibility && (
                <div style={{ textAlign: 'center' }}>
                  <span className="text-metadata" style={{ display: 'block', color: 'var(--color-text-tertiary)', marginBottom: 'var(--space-1)' }}>ELIGIBILITY</span>
                  <span className="text-technical" style={{ color: 'var(--color-text-primary)' }}>{featuredEvent.eligibility}</span>
                </div>
              )}
            </motion.div>

            {/* SUPPORTING */}
            <motion.div variants={itemVariants} style={{ marginTop: 'var(--space-8)' }}>
              {featuredEvent.externalUrl ? (
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
                    borderBottom: '1px solid var(--color-border-strong)',
                    paddingBottom: 'var(--space-1)',
                    transition: 'border-color var(--duration-micro) var(--easing-default)'
                  }}
                >
                  View Details <motion.span aria-hidden="true" className="cta-arrow" transition={{ type: 'spring', stiffness: 300, damping: 20 }}>&rarr;</motion.span>
                </a>
              ) : (
                <span className="text-metadata" style={{ color: 'var(--color-text-tertiary)' }}>
                  [ DETAILS PENDING ]
                </span>
              )}
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      <style>{`
        .event-register-link:hover { border-bottom-color: var(--color-accent) !important; }
        .event-register-link:focus-visible { outline: var(--focus-ring-width) solid var(--color-accent); outline-offset: var(--focus-ring-offset); border-radius: var(--radius-sm); }
        .event-register-link .cta-arrow { display: inline-block; transition: transform 250ms cubic-bezier(0.175, 0.885, 0.32, 1.275); }
        .event-register-link:hover .cta-arrow, .event-register-link:focus-visible .cta-arrow { transform: translateX(4px); }
      `}</style>
    </section>
  );
};
