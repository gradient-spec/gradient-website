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
            <ul style={{ display: 'flex', gap: 'var(--space-5)' }}>
              {NAV_LINKS.map(link => (
                <li key={link.path}>
                  <NavLink
                    to={link.path}
                    className="text-body"
                    style={({ isActive }) => ({
                      color: isActive ? 'var(--color-accent)' : 'var(--color-text-secondary)',
                      textDecoration: 'none',
                      fontWeight: isActive ? 'var(--font-weight-semibold)' : 'var(--font-weight-regular)',
                      borderBottom: isActive ? '2px solid var(--color-accent)' : '2px solid transparent',
                      paddingBottom: 'var(--space-1)',
                      transition: 'all var(--duration-micro) var(--easing-default)'
                    })}
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
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
