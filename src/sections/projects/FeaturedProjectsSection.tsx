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
  hidden: { opacity: 0, y: 15 },
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
        backgroundColor: 'var(--color-surface-secondary)',
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
            {featuredProjects.map((project, idx) => (
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
                  {/* Art-directed project canvas */}
                  <div
                    style={{
                      width: '100%',
                      backgroundColor: 'var(--color-surface-elevated)',
                      border: '1px solid var(--color-border-subtle)',
                      aspectRatio: '16/9',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      overflow: 'hidden',
                      position: 'relative',
                      borderRadius: 'var(--radius-md)'
                    }}
                  >
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.imageAlt || project.title}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    ) : (
                      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        {/* Structural crosshairs */}
                        <div style={{ position: 'absolute', top: '50%', left: 0, width: '100%', height: '1px', backgroundColor: 'rgba(242,241,236,0.04)' }} />
                        <div style={{ position: 'absolute', top: 0, left: '50%', width: '1px', height: '100%', backgroundColor: 'rgba(242,241,236,0.04)' }} />
                        
                        {/* Oversized Numbering */}
                        <div 
                          className="text-display" 
                          style={{ 
                            fontSize: 'clamp(5rem, 12vw, 10rem)', 
                            lineHeight: 1, 
                            color: 'var(--color-text-muted)', 
                            opacity: 0.4,
                            userSelect: 'none'
                          }}
                        >
                          {String(project.id).padStart(2, '0')}
                        </div>
                        
                        {/* Gradient accent edge (rare — only on Project 01) */}
                        {idx === 0 && (
                          <div 
                            aria-hidden="true"
                            style={{ 
                              position: 'absolute', 
                              top: 0, 
                              left: 0, 
                              width: '2px', 
                              height: '40%', 
                              background: 'var(--gradient-brand)',
                              opacity: 0.6
                            }} 
                          />
                        )}
                        
                        {/* Corner bracket */}
                        <div style={{ position: 'absolute', bottom: 'var(--space-4)', right: 'var(--space-4)', width: '20px', height: '20px', borderBottom: '1px solid var(--color-border-default)', borderRight: '1px solid var(--color-border-default)' }} />
                        
                        {/* Metadata Tag */}
                        <div className="text-metadata" style={{ position: 'absolute', top: 'var(--space-4)', left: 'var(--space-4)', color: 'var(--color-text-muted)' }}>
                          P—{String(project.id).padStart(2, '0')}
                        </div>
                      </div>
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
