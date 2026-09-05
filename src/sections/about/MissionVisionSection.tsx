import React from 'react';
import { motion } from 'framer-motion';
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

export const MissionVisionSection: React.FC = () => {
  return (
    <section
      className="section"
      aria-labelledby="mission-heading"
      style={{
        paddingTop: 'var(--space-8)',
        paddingBottom: 'var(--space-12)',
        backgroundColor: 'var(--color-surface-primary)',
      }}
    >
      <div className="container">
        <motion.div
          className="grid"
          style={{ position: 'relative' }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
        >
          {/* Editorial Spine Continuation */}
          <div 
            aria-hidden="true"
            className="hide-on-mobile"
            style={{
              position: 'absolute',
              top: '-var(--space-12)',
              left: 0,
              width: '1px',
              height: 'calc(100% + var(--space-24))',
              background: 'var(--color-border-subtle)',
              zIndex: 0
            }}
          />
          
          {/* Mission Block - Immediate & Left Aligned */}
          <div style={{ position: 'relative', zIndex: 1, marginBottom: 'var(--space-20)', maxWidth: '600px', paddingLeft: 'var(--space-4)' }}>
            <div aria-hidden="true" className="text-display" style={{ position: 'absolute', top: '-20%', left: '-5%', fontSize: 'clamp(8rem, 20vw, 14rem)', lineHeight: 0.8, color: 'var(--color-border-subtle)', opacity: 0.15, zIndex: -1, userSelect: 'none' }}>
              01
            </div>
            
            <motion.div variants={itemVariants} className="text-label" style={{ color: 'var(--color-accent)', marginBottom: 'var(--space-4)' }}>
              MISSION
            </motion.div>
            
            <motion.h2
              id="mission-heading"
              variants={itemVariants}
              className="text-display"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: '1.1' }}
            >
              Ideas, made real.
            </motion.h2>
          </div>

          {/* Vision Block - Expansive & Right Aligned */}
          <div style={{ position: 'relative', zIndex: 1, marginLeft: 'auto', maxWidth: '700px', textAlign: 'right', paddingRight: 'var(--space-4)' }}>
            <div aria-hidden="true" className="text-display" style={{ position: 'absolute', top: '-20%', right: '-5%', fontSize: 'clamp(8rem, 20vw, 14rem)', lineHeight: 0.8, color: 'var(--color-border-subtle)', opacity: 0.15, zIndex: -1, userSelect: 'none' }}>
              02
            </div>

            <motion.div variants={itemVariants} className="text-label" style={{ color: 'var(--color-text-tertiary)', marginBottom: 'var(--space-4)' }}>
              VISION
            </motion.div>
            
            <motion.h2
              variants={itemVariants}
              className="text-display"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: '1.1' }}
            >
              A platform that reaches beyond the campus.
            </motion.h2>
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hide-on-mobile {
            display: none !important;
          }
        }
        @media (max-width: 768px) {
          .hide-on-mobile {
            display: none !important;
          }
          .editorial-row {
            padding-left: 0 !important;
          }
        }
      `}</style>
    </section>
  );
};
