import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import type { Variants } from 'framer-motion';

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

export const ConnectSection: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();
  const adjustedItemVariants: Variants = prefersReducedMotion ? {
    hidden: { opacity: 0, y: 0 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } }
  } : itemVariants;

  return (
    <section
      className="section"
      aria-labelledby="connect-heading"
      style={{
        paddingTop: 'var(--space-8)',
        paddingBottom: 'var(--space-12)',
        backgroundColor: 'var(--color-surface-primary)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Intimate atmospheric endpoint gradient */}
      <div 
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '100%',
          height: '100%',
          background: 'radial-gradient(circle at center, rgba(150, 14, 41, 0.03) 0%, transparent 60%)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={containerVariants}
        >
          <motion.h2
            id="connect-heading"
            variants={adjustedItemVariants}
            className="text-heading sr-only"
          >
            Connect
          </motion.h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-12)' }}>
            
            {/* Direct block */}
            <div>
              <motion.div variants={adjustedItemVariants} className="text-label" style={{ color: 'var(--color-accent)', marginBottom: 'var(--space-4)' }}>
                01 / DIRECT
              </motion.div>
              
              <motion.div variants={adjustedItemVariants}>
                <a
                  href="mailto:gradient@stpetershyd.com"
                  className="text-display email-link"
                  aria-label="Email gradient@stpetershyd.com"
                  style={{ fontSize: 'clamp(3rem, 7vw, 6rem)', lineHeight: '1', wordBreak: 'break-word', letterSpacing: '-0.02em' }}
                >
                  gradient@stpetershyd.com
                </a>
              </motion.div>
            </div>

            {/* Social block */}
            <div>
              <motion.div variants={adjustedItemVariants} className="text-label" style={{ color: 'var(--color-text-tertiary)', marginBottom: 'var(--space-4)' }}>
                02 / SOCIAL
              </motion.div>

              <div className="social-right">
                <motion.div variants={adjustedItemVariants}>
                  <a
                    href="https://www.instagram.com/gradient_spec/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-heading social-link"
                    aria-label="Visit official Instagram profile"
                    style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', lineHeight: '1.2' }}
                  >
                    Instagram <span aria-hidden="true" className="cta-arrow">&rarr;</span>
                  </a>
                </motion.div>

                <motion.div variants={adjustedItemVariants}>
                  <a
                    href="https://www.linkedin.com/company/spec-gradient-club"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-heading social-link"
                    aria-label="Visit official LinkedIn company page"
                    style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', lineHeight: '1.2' }}
                  >
                    LinkedIn <span aria-hidden="true" className="cta-arrow">&rarr;</span>
                  </a>
                </motion.div>
              </div>
            </div>
            
          </div>
        </motion.div>
      </div>

      <style>{`
        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border-width: 0;
        }

        
        .social-right {
          display: flex;
          flex-direction: column;
          gap: var(--space-6);
        }
        
        .email-link {
          color: var(--color-text-primary);
          text-decoration: none;
          position: relative;
          width: fit-content;
          transition: color var(--duration-micro) var(--easing-default);
          display: inline-block;
        }
        
        .email-link:hover, .email-link:focus-visible {
          color: var(--color-accent);
          outline: none;
        }

        .social-link {
          color: var(--color-text-secondary);
          text-decoration: none;
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: var(--space-2);
          width: fit-content;
          transition: color var(--duration-micro) var(--easing-default);
        }
        
        .social-link:hover, .social-link:focus-visible {
          color: var(--color-text-primary);
          outline: none;
        }
        
        .cta-arrow {
          display: inline-block;
          transition: transform 250ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
          color: var(--color-accent);
        }
        
        .social-link:hover .cta-arrow, .social-link:focus-visible .cta-arrow {
          transform: translateX(4px);
        }
        
        @media (min-width: 769px) {
          .email-link::after, .social-link::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 2px;
            background-color: var(--color-accent);
            transform: scaleX(0);
            transform-origin: right;
            transition: transform 300ms ease-out;
          }
          .email-link:hover::after, .email-link:focus-visible::after,
          .social-link:hover::after, .social-link:focus-visible::after {
            transform: scaleX(1);
            transform-origin: left;
          }
        }
        
        @media (max-width: 992px) {
          .email-link {
            font-size: clamp(2rem, 8vw, 4rem) !important;
          }
        }
      `}</style>
    </section>
  );
};
