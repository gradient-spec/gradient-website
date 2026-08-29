import React from 'react';
import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { boards } from '@/data/boards';

export const CurrentBoardSection: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();
  const currentBoardYear = boards.find(b => b.isCurrent);

  if (!currentBoardYear || currentBoardYear.members.length === 0) {
    return null;
  }

  const mainBoard = currentBoardYear.members.filter(m => m.team === 'Main Board' || !m.team);
  const coreTeam = currentBoardYear.members.filter(m => m.team === 'Core Team');

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.08,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section 
      className="section" 
      aria-labelledby="current-board-heading"
      style={{
        paddingTop: 'var(--space-12)',
        paddingBottom: 'var(--space-12)',
        backgroundColor: 'var(--color-surface-primary)',
      }}
    >
      <div className="container">
        <style>{`
          .board-section-grid {
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            gap: var(--grid-gutter);
            padding: var(--space-6) 0;
            margin-bottom: var(--space-10);
          }
          .board-section-title {
            grid-column: 1 / span 3;
          }
          .board-section-content {
            grid-column: 4 / span 9;
            display: flex;
            flex-direction: column;
            gap: 0;
          }
          .board-member-entry {
            display: flex;
            flex-direction: row;
            align-items: baseline;
            gap: var(--space-5);
            padding: var(--space-4) 0;
            border-bottom: 1px solid var(--color-border-subtle);
          }
          .board-member-entry:first-child {
            border-top: 1px solid var(--color-border-subtle);
          }
          .board-member-number {
            font-family: var(--font-mono);
            font-size: var(--font-size-sm);
            color: var(--color-text-muted);
            font-variant-numeric: tabular-nums;
            width: 2rem;
            flex-shrink: 0;
            text-align: right;
          }
          .board-member-name {
            flex: 1;
          }
          .board-member-role {
            font-family: var(--font-mono);
            font-size: var(--font-size-xs);
            color: var(--color-text-tertiary);
            text-transform: uppercase;
            letter-spacing: var(--letter-spacing-wide);
          }
          @media (max-width: 992px) {
            .board-section-title { grid-column: 1 / span 12; margin-bottom: var(--space-4); }
            .board-section-content { grid-column: 1 / span 12; }
          }
          @media (max-width: 768px) {
            .board-member-entry {
              flex-direction: column;
              gap: var(--space-1);
            }
            .board-member-number {
              text-align: left;
              width: auto;
            }
          }
        `}</style>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={containerVariants}
        >
          {/* Main Board */}
          {mainBoard.length > 0 && (
            <div className="board-section-grid">
              <div className="board-section-title">
                <motion.h2 
                  id="current-board-heading" 
                  variants={itemVariants} 
                  className="text-metadata" 
                  style={{ color: 'var(--color-text-tertiary)', textTransform: 'uppercase' }}
                >
                  Main Board
                </motion.h2>
              </div>
              <div className="board-section-content">
                {mainBoard.map((member, index) => (
                  <motion.div key={member.id} variants={itemVariants} className="board-member-entry">
                    <div className="board-member-number">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    <h3 className="text-display board-member-name" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', lineHeight: '1.2' }}>
                      {member.name}
                    </h3>
                    <div className="board-member-role">
                      {member.role}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Core Team */}
          {coreTeam.length > 0 && (
            <div className="board-section-grid" style={{ opacity: 0.5 }}>
              <div className="board-section-title">
                <motion.h2 
                  variants={itemVariants} 
                  className="text-metadata" 
                  style={{ color: 'var(--color-text-muted)', textTransform: 'uppercase' }}
                >
                  Core Team
                </motion.h2>
              </div>
              <div className="board-section-content">
                {coreTeam.map((member) => (
                  <motion.div key={member.id} variants={itemVariants} className="board-member-entry">
                    <h3 className="text-display board-member-name" style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)', lineHeight: '1.2' }}>
                      {member.name}
                    </h3>
                    <div className="board-member-role">
                      {member.role}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};
