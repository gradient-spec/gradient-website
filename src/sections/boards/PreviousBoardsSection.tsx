import React from 'react';
import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { boards } from '@/data/boards';

export const PreviousBoardsSection: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();
  const previousBoards = boards.filter(b => !b.isCurrent);

  // Per specification: gracefully handle the empty data source.
  // If there is no verified previous-board data, return null.
  // Do not fabricate historical board information or render empty cards.
  if (previousBoards.length === 0) {
    return null;
  }

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section 
      className="section" 
      aria-labelledby="previous-boards-heading"
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
            id="previous-boards-heading" 
            variants={itemVariants} 
            className="text-heading" 
            style={{ marginBottom: 'var(--space-10)' }}
          >
            Previous Boards
          </motion.h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-10)' }}>
            {previousBoards.map((board) => (
              <motion.div 
                key={board.year}
                variants={itemVariants}
                style={{
                  borderTop: '1px solid var(--color-border-subtle)',
                  paddingTop: 'var(--space-6)'
                }}
              >
                <h3 className="text-subheading" style={{ marginBottom: 'var(--space-6)' }}>
                  {board.year}
                </h3>
                
                <div 
                  className="grid"
                  style={{ rowGap: 'var(--space-8)' }}
                >
                  {board.members.map((member) => (
                    <div 
                      key={member.id}
                      style={{
                        gridColumn: 'span 3',
                        display: 'flex',
                        flexDirection: 'column'
                      }}
                    >
                      <h4 className="text-body" style={{ color: 'var(--color-text-primary)', fontWeight: 'var(--font-weight-semibold)', marginBottom: 'var(--space-1)' }}>
                        {member.name}
                      </h4>
                      <div className="text-metadata" style={{ color: 'var(--color-text-secondary)' }}>
                        {member.role}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .grid > div {
            grid-column: span 4 !important;
          }
        }
        @media (max-width: 768px) {
          .grid > div {
            grid-column: span 6 !important;
          }
        }
        @media (max-width: 480px) {
          .grid > div {
            grid-column: span 12 !important;
          }
        }
      `}</style>
    </section>
  );
};
