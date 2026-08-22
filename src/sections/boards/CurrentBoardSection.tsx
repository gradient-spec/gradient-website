import React from 'react';
import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { boards } from '@/data/boards';

export const CurrentBoardSection: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();
  const currentBoardYear = boards.find(b => b.isCurrent);

  // Per specification: gracefully handle the empty data source.
  // If no verified current board members exist, return null.
  if (!currentBoardYear || currentBoardYear.members.length === 0) {
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
      aria-labelledby="current-board-heading"
      style={{
        paddingTop: 'var(--space-12)',
        paddingBottom: 'var(--space-12)',
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
            id="current-board-heading" 
            variants={itemVariants} 
            className="text-heading" 
            style={{ marginBottom: 'var(--space-10)' }}
          >
            Current Board
          </motion.h2>

          <div 
            className="grid"
            style={{ 
              rowGap: 'var(--space-10)'
            }}
          >
            {currentBoardYear.members.map((member) => (
              <motion.article 
                key={member.id} 
                variants={itemVariants}
                style={{
                  gridColumn: 'span 4',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                {/* Member Photo Frame */}
                <div 
                  style={{
                    width: '100%',
                    aspectRatio: '4/5',
                    backgroundColor: 'var(--color-surface-secondary)',
                    border: '1px solid var(--color-border-subtle)',
                    marginBottom: 'var(--space-5)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'hidden'
                  }}
                >
                  {member.image ? (
                    <img 
                      src={member.image} 
                      alt={member.imageAlt || member.name} 
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  ) : (
                    <span className="text-metadata" style={{ color: 'var(--color-text-muted)' }}>
                      Photo
                    </span>
                  )}
                </div>

                <h3 className="text-subheading" style={{ marginBottom: 'var(--space-2)' }}>
                  {member.name}
                </h3>
                
                <div className="text-metadata" style={{ color: 'var(--color-text-secondary)', marginBottom: 'var(--space-3)' }}>
                  {member.role}
                  {member.team && ` · ${member.team}`}
                </div>

                {member.socials && member.socials.length > 0 && (
                  <div style={{ display: 'flex', gap: 'var(--space-4)', marginTop: 'auto' }}>
                    {member.socials.map((social) => (
                      <a 
                        key={social.platform}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-metadata"
                        style={{
                          color: 'var(--color-accent)',
                          textDecoration: 'none'
                        }}
                      >
                        {social.label || social.platform}
                      </a>
                    ))}
                  </div>
                )}
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .grid > article {
            grid-column: span 6 !important;
          }
        }
        @media (max-width: 768px) {
          .grid > article {
            grid-column: span 12 !important;
          }
        }
      `}</style>
    </section>
  );
};
