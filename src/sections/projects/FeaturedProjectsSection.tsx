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
  hidden: { opacity: 0, y: 15, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 1.0,
      ease: [0.16, 1, 0.3, 1],
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
      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
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
                {/* Asymmetric split for featured projects - Subordinate scaling for idx > 0 */}
                <div style={{ gridColumn: idx === 0 ? 'span 5' : 'span 4', opacity: idx === 0 ? 1 : 0.6, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <h3 className="text-subheading" style={{ marginBottom: 'var(--space-4)', fontSize: idx === 0 ? 'clamp(1.5rem, 3vw, 2.5rem)' : 'var(--font-size-xl)' }}>
                    {project.title}
                  </h3>

                  {project.technologies && project.technologies.length > 0 && (
                    <div className="text-metadata" style={{ color: 'var(--color-text-muted)', marginBottom: 'var(--space-4)' }}>
                      {project.technologies.join(' · ')}
                    </div>
                  )}

                  <p className="text-body" style={{ color: 'var(--color-text-secondary)', marginBottom: 'var(--space-6)', maxWidth: idx === 0 ? '90%' : '100%' }}>
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
                        color: idx === 0 ? 'var(--color-accent)' : 'var(--color-text-secondary)',
                        textDecoration: 'none',
                        textTransform: 'uppercase'
                      }}
                    >
                      View Project <span aria-hidden="true" style={{ marginLeft: 'var(--space-2)' }}>→</span>
                    </a>
                  )}
                </div>

                <div style={{ gridColumn: idx === 0 ? 'span 7' : 'span 6', marginLeft: idx === 0 ? 0 : 'auto', opacity: idx === 0 ? 1 : 0.4 }}>
                  {/* Art-directed project canvas */}
                  <motion.div
                    className="project-canvas"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
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
                      <div className="project-placeholder-inner" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background-color 0.4s ease' }}>
                        {/* Structural crosshairs */}
                        <div className="crosshair-h" style={{ position: 'absolute', top: '50%', left: 0, width: '100%', height: '1px', backgroundColor: 'rgba(242,241,236,0.04)', transition: 'transform 0.4s ease' }} />
                        <div className="crosshair-v" style={{ position: 'absolute', top: 0, left: '50%', width: '1px', height: '100%', backgroundColor: 'rgba(242,241,236,0.04)', transition: 'transform 0.4s ease' }} />
                        
                        {/* Oversized Numbering */}
                        <div 
                          className="text-display project-number" 
                          style={{ 
                            fontSize: 'clamp(5rem, 12vw, 10rem)', 
                            lineHeight: 1, 
                            color: 'var(--color-text-muted)', 
                            opacity: 0.4,
                            userSelect: 'none',
                            transition: 'transform 0.4s ease, opacity 0.4s ease'
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
                  </motion.div>
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
        .project-canvas:hover .project-placeholder-inner {
          background-color: rgba(255, 255, 255, 0.02);
        }
        .project-canvas:hover .project-number {
          transform: scale(1.05);
          opacity: 0.6 !important;
        }
        .project-canvas:hover .crosshair-h {
          transform: scaleX(1.05);
        }
        .project-canvas:hover .crosshair-v {
          transform: scaleY(1.05);
        }
      `}</style>
    </section>
  );
};
