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
          backgroundColor: 'var(--color-surface-primary)',
          borderBottom: isScrolled ? '1px solid var(--color-border-subtle)' : '1px solid transparent',
          boxShadow: isScrolled ? 'var(--shadow-sm)' : 'none',
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
              fontSize: 'var(--font-size-2xl)', 
              textDecoration: 'none', 
              color: 'var(--color-text-primary)' 
            }}
          >
            Gradient
          </NavLink>

          {/* Desktop Nav */}
          <nav aria-label="Primary Desktop Navigation" className="desktop-nav">
            <ul style={{ display: 'flex', gap: 'var(--space-6)' }}>
              {NAV_LINKS.map(link => (
                <li key={link.path}>
                  <NavLink
                    to={link.path}
                    className="text-body nav-link-item"
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
            <style>{`
              .nav-link-item {
                position: relative;
                color: var(--color-text-secondary);
                text-decoration: none;
                font-weight: var(--font-weight-regular);
                padding-bottom: var(--space-1);
                transition: color 200ms ease-out, opacity 200ms ease-out;
              }
              .nav-link-item:hover, .nav-link-item:focus-visible {
                color: var(--color-text-primary);
                opacity: 0.8;
                outline: none;
              }
              .nav-link-item.active {
                color: var(--color-accent);
                font-weight: var(--font-weight-medium);
              }
              .nav-link-item::after {
                content: '';
                position: absolute;
                bottom: 0;
                left: 0;
                width: 100%;
                height: 1px;
                background-color: var(--color-accent);
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
            className="mobile-trigger text-label"
            style={{
              padding: 'var(--space-2) var(--space-4)',
              backgroundColor: 'var(--color-surface-secondary)',
              border: '1px solid var(--color-border-subtle)',
              borderRadius: 'var(--radius-sm)',
              cursor: 'pointer',
              color: 'var(--color-text-primary)'
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
