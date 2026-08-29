import React from 'react';
import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { boards } from '@/data/boards';

export const CurrentBoardSection: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();

  // CANDIDATE: Section-scoped motion values
  const CANDIDATE_STAGGER_DELAY = 0.15;
  const CANDIDATE_Y_TRANSLATION = 15;

  // Use the most recent board year for the home page, or empty state if none exists.
  const currentBoard = boards.length > 0 ? boards[0] : null;

  // Render a curated preview of up to 3 actual members
  const realMembers = currentBoard?.members.slice(0, 3) || [];

  // Per specification: Omit the section entirely when no verified board data exists.
  if (realMembers.length === 0) {
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
    <section className="section bg-atmospheric bg-glow-bottom-left" aria-labelledby="current-board-heading" style={{ overflow: 'hidden', position: 'relative' }}>
      <div className="container">
        <motion.div
          className="grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-10% 0px' }}
          variants={sectionVariants}
          style={{ alignItems: 'start' }}
        >
          {/* Left Block (Span 3) - Intro & Metadata */}
          <div className="board-intro-block">
            {/* Scoped style for responsive behavior without a new global CSS file */}
            <style>{`
              .board-intro-block { 
                grid-column: 1 / span 3;
              }
              .board-preview-grid { 
                grid-column: 4 / span 9; 
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                gap: var(--grid-gutter);
              }
              .board-member-frame {
                aspect-ratio: 4/5; /* CANDIDATE visual framing decision. Do not treat as a universal requirement. */
                background-color: var(--color-surface-secondary);
                border: 1px solid var(--color-border-default);
                border-radius: var(--radius-sm);
                display: flex;
                align-items: center;
                justify-content: center;
                text-align: center;
                padding: var(--space-3);
                margin-bottom: var(--space-4);
                position: relative;
                overflow: hidden;
              }
              /* CANDIDATE breakpoint: Tablet */
              @media (max-width: 992px) {
                .board-intro-block { 
                  grid-column: 1 / -1; 
                  margin-bottom: var(--space-6);
                }
                .board-preview-grid { 
                  grid-column: 1 / -1; 
                  grid-template-columns: repeat(2, 1fr);
                }
              }
              /* CANDIDATE breakpoint: Mobile */
              @media (max-width: 768px) {
                .board-preview-grid { 
                  grid-template-columns: 1fr;
                  gap: var(--space-7);
                }
              }
            `}</style>

            <motion.div variants={itemVariants} className="text-metadata" style={{ color: 'var(--color-accent)', marginBottom: 'var(--space-4)', textTransform: 'uppercase' }}>
              TEAM
            </motion.div>

            <motion.h2
              id="current-board-heading"
              variants={itemVariants}
              className="text-heading"
              style={{ marginBottom: 'var(--space-6)' }}
            >
              Current Board
            </motion.h2>

            <motion.div variants={itemVariants}>
              <a href="/boards" className="text-label" style={{ color: 'var(--color-accent)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                View Full Board <span aria-hidden="true">&rarr;</span>
              </a>
            </motion.div>

          </div>

          {/* Right Block (Span 9) - Curated Preview Grid */}
          <div className="board-preview-grid">
            {realMembers.map((member) => (
              <motion.div key={member.id} variants={itemVariants} className="board-member-item">
                <div className="board-member-frame">
                  {/* When a real image is provided, its fit behavior will be intentionally chosen 
                      (e.g. object-fit: cover, contain, or a specific object-position) */}
                  {member.image ? (
                    <img src={member.image} alt={member.imageAlt || member.name} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
                  ) : (
                    <>
                      <svg aria-hidden="true" viewBox="0 0 200 250" style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, opacity: 0.5 }}>
                        {/* Faint grid */}
                        <line x1="100" y1="0" x2="100" y2="250" stroke="rgba(242,241,236,0.04)" strokeWidth="1" />
                        <line x1="0" y1="125" x2="200" y2="125" stroke="rgba(242,241,236,0.04)" strokeWidth="1" />
                        {/* Head circle */}
                        <circle cx="100" cy="85" r="35" fill="none" stroke="rgba(242,241,236,0.08)" strokeWidth="1" />
                        {/* Shoulders arc */}
                        <ellipse cx="100" cy="200" rx="65" ry="45" fill="none" stroke="rgba(242,241,236,0.06)" strokeWidth="1" />
                      </svg>
                      <span className="text-metadata" style={{ color: 'var(--color-text-muted)', position: 'relative', zIndex: 1, fontSize: 'var(--font-size-lg)', letterSpacing: '0.1em' }}>
                        {member.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                      </span>
                    </>
                  )}
                </div>

                <h3 className="text-subheading" style={{ color: 'var(--color-text-primary)', marginBottom: 'var(--space-1)' }}>
                  {member.name}
                </h3>

                <p className="text-body" style={{ color: 'var(--color-text-secondary)', marginBottom: 'var(--space-1)' }}>
                  {member.role}
                </p>

                {member.team && (
                  <p className="text-metadata" style={{ color: 'var(--color-accent)' }}>
                    {member.team}
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
