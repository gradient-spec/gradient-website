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
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Events', path: '/events' },
  { name: 'Projects', path: '/projects' },
  { name: 'Boards', path: '/boards' },
  { name: 'Contact', path: '/contact' },
];

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, triggerRef }) => {
  const menuRef = useRef<HTMLDivElement>(null);

  useFocusTrap(menuRef as React.RefObject<HTMLElement | null>, isOpen, onClose, triggerRef as React.RefObject<HTMLElement | null>);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={menuRef}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
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
            <span className="text-display" style={{ fontSize: 'var(--font-size-2xl)' }}>Gradient</span>
            <button
              onClick={onClose}
              className="text-label"
              aria-label="Close menu"
              style={{
                padding: 'var(--space-2)',
                backgroundColor: 'transparent',
                border: '1px solid var(--color-border-subtle)',
                borderRadius: 'var(--radius-sm)'
              }}
            >
              Close
            </button>
          </div>

          <nav style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
            {NAV_LINKS.map(link => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={onClose}
                className={({ isActive }) => `text-display ${isActive ? 'text-display-italic' : ''}`}
                style={({ isActive }) => ({
                  color: isActive ? 'var(--color-accent)' : 'var(--color-text-primary)',
                  textDecoration: 'none',
                  fontSize: 'var(--font-size-3xl)',
                  borderBottom: isActive ? '2px solid var(--color-accent)' : '2px solid transparent',
                  alignSelf: 'flex-start',
                  paddingBottom: 'var(--space-1)'
                })}
              >
                {link.name}
              </NavLink>
            ))}
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
