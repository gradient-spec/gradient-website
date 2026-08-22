import React from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { projects } from '@/data/projects';

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
  hidden: { opacity: 0, y: 15 }, // CANDIDATE: 15px stagger
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

export const ProjectCollectionSection: React.FC = () => {
  // Exclude featured projects if they are already highlighted above, 
  // or simply show all depending on future content strategy. 
  // For now, we'll show non-featured projects here.
  const collectionProjects = projects.filter(p => !p.featured);

  // Per specification: Hide the section entirely when no verified data exists.
  if (collectionProjects.length === 0) {
    return null;
  }

  return (
    <section 
      className="section" 
      aria-labelledby="project-collection-heading"
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
            id="project-collection-heading" 
            variants={itemVariants} 
            className="text-heading" 
            style={{ marginBottom: 'var(--space-10)' }}
          >
            All Projects
          </motion.h2>

          <div 
            className="grid"
            style={{ 
              rowGap: 'var(--space-10)',
              // CANDIDATE: Structural layout relying on CSS Grid. 
              // Final composition selected based on actual content once available.
            }}
          >
            {collectionProjects.map((project) => (
              <motion.article 
                key={project.id} 
                variants={itemVariants}
                style={{
                  gridColumn: 'span 4', // CANDIDATE: 3-column desktop layout
                  display: 'flex',
                  flexDirection: 'column',
                  borderTop: '1px solid var(--color-border-subtle)',
                  paddingTop: 'var(--space-6)'
                }}
              >
                <h3 className="text-subheading" style={{ marginBottom: 'var(--space-3)' }}>
                  {project.title}
                </h3>

                {project.technologies && project.technologies.length > 0 && (
                  <div className="text-metadata" style={{ color: 'var(--color-text-muted)', marginBottom: 'var(--space-3)' }}>
                    {project.technologies.join(' · ')}
                  </div>
                )}

                <p className="text-body" style={{ color: 'var(--color-text-secondary)', marginBottom: 'var(--space-4)', flexGrow: 1 }}>
                  {project.description}
                </p>

                {project.externalUrl && (
                  <a 
                    href={project.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-metadata"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      color: 'var(--color-accent)',
                      textDecoration: 'none',
                      textTransform: 'uppercase',
                      marginTop: 'auto'
                    }}
                  >
                    View <span aria-hidden="true" style={{ marginLeft: 'var(--space-2)' }}>→</span>
                  </a>
                )}
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .grid > article {
            grid-column: span 6 !important; /* CANDIDATE: 2-column tablet layout */
          }
        }
        @media (max-width: 768px) {
          .grid > article {
            grid-column: span 12 !important; /* CANDIDATE: 1-column mobile layout */
          }
        }
      `}</style>
    </section>
  );
};
