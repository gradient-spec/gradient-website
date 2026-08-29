import React, { useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { useFocusTrap } from '@/hooks/useFocusTrap';
import { motion, AnimatePresence } from 'framer-motion';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  triggerRef: React.RefObject<HTMLButtonElement | null>;
}

const NAV_LINKS = [
  { name: 'Home', path: '/', index: '01' },
  { name: 'About', path: '/about', index: '02' },
  { name: 'Events', path: '/events', index: '03' },
  { name: 'Projects', path: '/projects', index: '04' },
  { name: 'Boards', path: '/boards', index: '05' },
  { name: 'Contact', path: '/contact', index: '06' },
];

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, triggerRef }) => {
  const menuRef = useRef<HTMLDivElement>(null);

  useFocusTrap(menuRef as React.RefObject<HTMLElement | null>, isOpen, onClose, triggerRef as React.RefObject<HTMLElement | null>);

  const containerVariants: import('framer-motion').Variants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
        ease: 'easeIn',
        when: 'afterChildren',
        staggerChildren: 0.04,
        staggerDirection: -1
      }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.35,
        ease: 'easeOut',
        when: 'beforeChildren',
        staggerChildren: 0.05,
      }
    }
  };

  const itemVariants: import('framer-motion').Variants = {
    closed: { opacity: 0, y: -12, transition: { duration: 0.2, ease: 'easeIn' } },
    open: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeOut' } }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={menuRef}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
          initial="closed"
          animate="open"
          exit="closed"
          variants={containerVariants}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'var(--color-surface-primary)',
            zIndex: 'var(--z-overlay)',
            display: 'flex',
            flexDirection: 'column',
            padding: 'var(--space-6) var(--space-5)'
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-8)' }}>
            <span className="text-display" style={{ fontSize: 'var(--font-size-xl)', color: 'var(--color-text-primary)' }}>Gradient</span>
            <button
              onClick={onClose}
              className="text-metadata mobile-close-btn"
              aria-label="Close menu"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '44px',
                minWidth: '44px',
                padding: 'var(--space-2)',
                backgroundColor: 'transparent',
                border: '1px solid var(--color-border-default)',
                cursor: 'pointer',
                color: 'var(--color-text-secondary)',
                borderRadius: 'var(--radius-sm)'
              }}
            >
              <span aria-hidden="true" style={{ fontSize: '1rem', letterSpacing: 'var(--letter-spacing-wide)' }}>CLOSE</span>
            </button>
            <style>{`
              .mobile-close-btn {
                transition: color var(--duration-micro) var(--easing-default), border-color var(--duration-micro) var(--easing-default);
              }
              .mobile-close-btn:hover, .mobile-close-btn:focus-visible {
                color: var(--color-text-primary);
                border-color: var(--color-border-strong);
              }
              .mobile-close-btn:focus-visible {
                outline: var(--focus-ring-width) solid var(--color-accent);
                outline-offset: var(--focus-ring-offset);
              }
            `}</style>
          </div>

          <nav style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
            {NAV_LINKS.map(link => (
              <motion.div key={link.path} variants={itemVariants}>
                <NavLink
                  to={link.path}
                  onClick={onClose}
                  className={({ isActive }) => `text-display mobile-nav-link ${isActive ? 'active' : ''}`}
                  style={{
                    display: 'flex',
                    alignItems: 'baseline',
                    gap: 'var(--space-4)',
                    minHeight: '44px',
                    textDecoration: 'none',
                    fontSize: 'clamp(2rem, 8vh, 3.5rem)',
                    paddingBottom: 'var(--space-2)',
                    width: 'fit-content',
                    borderBottom: '1px solid var(--color-border-subtle)'
                  }}
                >
                  <span className="text-metadata" style={{ color: 'var(--color-text-muted)', fontSize: 'var(--font-size-xs)' }}>{link.index}</span>
                  {link.name}
                </NavLink>
              </motion.div>
            ))}
          </nav>

          <style>{`
            .mobile-nav-link {
              color: var(--color-text-secondary);
              position: relative;
              transition: color var(--duration-micro) var(--easing-default);
            }
            .mobile-nav-link.active {
              color: var(--color-text-primary);
            }
            .mobile-nav-link:focus-visible {
              color: var(--color-text-primary);
              outline: none;
            }
          `}</style>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
