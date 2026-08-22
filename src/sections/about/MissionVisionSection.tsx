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
        paddingTop: 'var(--space-12)',
        paddingBottom: 'var(--space-12)',
        backgroundColor: 'var(--color-surface-primary)',
      }}
    >
      <div className="container">
        <motion.div 
          className="grid" 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
        >
          {/* Mission Block - Left Aligned */}
          <div style={{ gridColumn: '2 / span 5' }}>
            <motion.div variants={itemVariants} className="text-metadata" style={{ color: 'var(--color-accent)', marginBottom: 'var(--space-4)', textTransform: 'uppercase' }}>
              WHAT WE DO
            </motion.div>
            
            <motion.h2 
              id="mission-heading" 
              variants={itemVariants} 
              className="text-heading" 
              style={{ marginBottom: 'var(--space-5)' }}
            >
              Ideas, made real.
            </motion.h2>
            
            <motion.div variants={itemVariants} className="text-body" style={{ color: 'var(--color-text-secondary)', display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
              <p>
                Gradient exists to provide students with opportunities to learn, build,
                experiment, collaborate and create.
              </p>
              <p>
                Created with the CSE-allied branches at its core, Gradient brings
                students together through technical events, workshops, hackathons,
                projects, mentorship and team-building opportunities. While rooted in
                the CSE community, the club remains open to students from other areas
                who want to bring forward an idea, explore it with others or work
                towards implementing it.
              </p>
              <p>
                At its core, Gradient is a place where ideas can be expressed,
                developed and taken beyond the starting point.
              </p>
              <p style={{ fontWeight: 'bold', color: 'var(--color-text-primary)', marginTop: 'var(--space-4)' }}>
                Gradient exists to create opportunities for students to turn ideas
                into reality.
              </p>
            </motion.div>
          </div>

          {/* Vision Block - Right Aligned, staggered vertically */}
          <div className="vision-block" style={{ gridColumn: '7 / span 5' }}>
            <motion.div variants={itemVariants} className="text-metadata" style={{ color: 'var(--color-accent)', marginBottom: 'var(--space-4)', textTransform: 'uppercase' }}>
              LOOKING AHEAD
            </motion.div>
            
            <motion.h2 
              variants={itemVariants} 
              className="text-heading" 
              style={{ marginBottom: 'var(--space-5)' }}
            >
              A platform that reaches beyond the campus.
            </motion.h2>
            
            <motion.div variants={itemVariants} className="text-body" style={{ color: 'var(--color-text-secondary)', display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
              <p>
                Gradient's future is to grow beyond being only a college technical
                club and become a broader platform for people who want to explore,
                create and build.
              </p>
              <p>
                While its roots remain in the college community, the ambition is to
                gradually extend that community beyond the campus and eventually reach
                an international audience.
              </p>
              <p>
                The goal is not simply to grow in size, but to create a platform where
                different kinds of people can come together, develop their abilities
                and turn ideas into meaningful work.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <style>{`
        .vision-block {
          margin-top: var(--space-12); /* Creates vertical stagger on desktop */
        }
        
        @media (max-width: 992px) {
          .grid > div {
            grid-column: span 12 !important;
          }
          .vision-block {
            margin-top: var(--space-10);
          }
        }
      `}</style>
    </section>
  );
};
