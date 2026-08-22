import React from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { projects } from '@/data/projects';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 15 }, // CANDIDATE: 15px stagger
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: 'easeOut',
    },
  },
};

export const FeaturedProjectsSection: React.FC = () => {
  const featuredProjects = projects.filter(p => p.featured);

  // Per specification: Hide the section entirely when no verified data exists.
  if (featuredProjects.length === 0) {
    return null;
  }

  return (
    <section 
      className="section" 
      aria-labelledby="featured-projects-heading"
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
            id="featured-projects-heading" 
            variants={itemVariants} 
            className="text-heading" 
            style={{ marginBottom: 'var(--space-10)' }}
          >
            Featured Work
          </motion.h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-12)' }}>
            {featuredProjects.map((project) => (
              <motion.article 
                key={project.id} 
                variants={itemVariants}
                className="grid"
                style={{
                  borderTop: '1px solid var(--color-border-subtle)',
                  paddingTop: 'var(--space-8)'
                }}
              >
                {/* Asymmetric 5:7 split for featured projects */}
                <div style={{ gridColumn: 'span 5' }}>
                  <h3 className="text-subheading" style={{ marginBottom: 'var(--space-4)' }}>
                    {project.title}
                  </h3>
                  
                  {project.technologies && project.technologies.length > 0 && (
                    <div className="text-metadata" style={{ color: 'var(--color-text-muted)', marginBottom: 'var(--space-4)' }}>
                      {project.technologies.join(' · ')}
                    </div>
                  )}

                  <p className="text-body" style={{ color: 'var(--color-text-secondary)', marginBottom: 'var(--space-6)', maxWidth: '90%' }}>
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
                        textTransform: 'uppercase'
                      }}
                    >
                      View Project <span aria-hidden="true" style={{ marginLeft: 'var(--space-2)' }}>→</span>
                    </a>
                  )}
                </div>

                <div style={{ gridColumn: 'span 7' }}>
                  {/* Image container: Structural block ready to accept unpredictable authentic aspect ratios later */}
                  <div 
                    style={{
                      width: '100%',
                      backgroundColor: 'var(--color-surface-secondary)',
                      border: '1px solid var(--color-border-subtle)',
                      aspectRatio: '16/9', // CANDIDATE: Initial flexible ratio for structural planning
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      overflow: 'hidden'
                    }}
                  >
                    {project.image ? (
                      <img 
                        src={project.image} 
                        alt={project.imageAlt || project.title} 
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    ) : (
                      <span className="text-metadata" style={{ color: 'var(--color-text-muted)' }}>
                        Image Placeholder
                      </span>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .grid > div {
            grid-column: span 12 !important;
            margin-bottom: var(--space-6);
          }
        }
      `}</style>
    </section>
  );
};
