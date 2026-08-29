

import React, { useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { useScroll } from '@/hooks/useScroll';
import { MobileMenu } from './MobileMenu';

const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Events', path: '/events' },
  { name: 'Projects', path: '/projects' },
  { name: 'Boards', path: '/boards' },
  { name: 'Contact', path: '/contact' },
];

export const Navbar: React.FC = () => {
  const { isScrolled } = useScroll();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileTriggerRef = useRef<HTMLButtonElement>(null);

  return (
    <>
      <header
        role="banner"
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 'var(--z-nav)',
          backgroundColor: isScrolled ? 'rgba(7, 8, 10, 0.85)' : 'transparent',
          backdropFilter: isScrolled ? 'blur(12px)' : 'none',
          WebkitBackdropFilter: isScrolled ? 'blur(12px)' : 'none',
          borderBottom: isScrolled ? '1px solid var(--color-border-subtle)' : '1px solid transparent',
          transition: 'all var(--duration-content) var(--easing-default)',
          padding: 'var(--space-4) 0'
        }}
      >
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {/* Logo */}
          <NavLink
            to="/"
            className="text-display"
            style={{
              fontSize: 'var(--font-size-xl)',
              textDecoration: 'none',
              color: 'var(--color-text-primary)',
              letterSpacing: '-0.02em',
              fontWeight: 'var(--font-weight-bold)'
            }}
          >
            Gradient
          </NavLink>

          {/* Desktop Nav */}
          <nav aria-label="Primary Desktop Navigation" className="desktop-nav">
            <ul style={{ display: 'flex', gap: 'var(--space-6)', alignItems: 'center' }}>
              {NAV_LINKS.map(link => (
                <li key={link.path}>
                  <NavLink
                    to={link.path}
                    className="text-metadata nav-link-item"
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
            <style>{`
              .nav-link-item {
                position: relative;
                color: var(--color-text-tertiary);
                text-decoration: none;
                font-size: var(--font-size-xs);
                letter-spacing: var(--letter-spacing-wide);
                text-transform: uppercase;
                padding-bottom: var(--space-1);
                transition: color 200ms ease-out;
              }
              .nav-link-item:hover, .nav-link-item:focus-visible {
                color: var(--color-text-primary);
                outline: none;
              }
              .nav-link-item.active {
                color: var(--color-text-primary);
              }
              .nav-link-item::after {
                content: '';
                position: absolute;
                bottom: 0;
                left: 0;
                width: 100%;
                height: 1px;
                background: var(--gradient-brand);
                transform: scaleX(0);
                transform-origin: right;
                transition: transform 300ms ease-out;
              }
              .nav-link-item.active::after, .nav-link-item:focus-visible::after {
                transform: scaleX(1);
                transform-origin: left;
              }
            `}</style>
          </nav>

          {/* Mobile Trigger */}
          <button
            ref={mobileTriggerRef}
            aria-expanded={isMobileMenuOpen}
            aria-label="Open mobile menu"
            onClick={() => setIsMobileMenuOpen(true)}
            className="mobile-trigger text-metadata"
            style={{
              padding: 'var(--space-2) var(--space-4)',
              backgroundColor: 'transparent',
              border: '1px solid var(--color-border-default)',
              borderRadius: 'var(--radius-sm)',
              cursor: 'pointer',
              color: 'var(--color-text-secondary)',
              textTransform: 'uppercase',
              letterSpacing: 'var(--letter-spacing-wide)',
              fontSize: 'var(--font-size-xs)'
            }}
          >
            Menu
          </button>
        </div>
      </header>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        triggerRef={mobileTriggerRef}
      />
    </>
  );
};
