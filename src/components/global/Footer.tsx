import React from 'react';
import { NavLink } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer 
      role="contentinfo" 
      style={{
        paddingTop: 'var(--space-10)',
        paddingBottom: 'var(--space-8)',
        backgroundColor: 'var(--color-surface-secondary)',
        borderTop: '1px solid var(--color-border-subtle)'
      }}
    >
      <div className="container">
        <div className="grid" style={{ marginBottom: 'var(--space-10)' }}>
          {/* Identity & Contact */}
          <div style={{ gridColumn: 'span 4' }}>
            <span className="text-display" style={{ fontSize: 'var(--font-size-2xl)', display: 'block', marginBottom: 'var(--space-4)', color: 'var(--color-text-primary)' }}>Gradient</span>
            <p className="text-body-small" style={{ color: 'var(--color-text-secondary)', marginBottom: 'var(--space-4)', maxWidth: '80%' }}>
              A technical club focused on building, experimentation, learning, and community.
            </p>
            <div className="text-metadata">
              <span className="dev-placeholder" style={{ color: 'var(--color-text-muted)' }} title="Placeholder Email">[Dev: hello@placeholder.test]</span>
            </div>
          </div>
          
          {/* Quick Nav */}
          <div style={{ gridColumn: 'span 2' }}>
            <h4 className="text-label" style={{ marginBottom: 'var(--space-4)', color: 'var(--color-text-primary)' }}>Platform</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
              <li><NavLink to="/" className="text-body-small" style={{ color: 'var(--color-text-secondary)', textDecoration: 'none' }}>Home</NavLink></li>
              <li><NavLink to="/about" className="text-body-small" style={{ color: 'var(--color-text-secondary)', textDecoration: 'none' }}>About</NavLink></li>
              <li><NavLink to="/events" className="text-body-small" style={{ color: 'var(--color-text-secondary)', textDecoration: 'none' }}>Events</NavLink></li>
            </ul>
          </div>
          
          <div style={{ gridColumn: 'span 2' }}>
            <h4 className="text-label" style={{ marginBottom: 'var(--space-4)', color: 'var(--color-text-primary)' }}>Organization</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
              <li><NavLink to="/projects" className="text-body-small" style={{ color: 'var(--color-text-secondary)', textDecoration: 'none' }}>Projects</NavLink></li>
              <li><NavLink to="/boards" className="text-body-small" style={{ color: 'var(--color-text-secondary)', textDecoration: 'none' }}>Boards</NavLink></li>
              <li><NavLink to="/contact" className="text-body-small" style={{ color: 'var(--color-text-secondary)', textDecoration: 'none' }}>Contact</NavLink></li>
            </ul>
          </div>
          
          {/* Socials */}
          <div style={{ gridColumn: 'span 4' }}>
            <h4 className="text-label" style={{ marginBottom: 'var(--space-4)', color: 'var(--color-text-primary)' }}>Socials</h4>
            <ul style={{ display: 'flex', gap: 'var(--space-4)' }}>
              <li><span className="text-body-small dev-placeholder" style={{ color: 'var(--color-text-muted)' }} title="Placeholder Twitter">[Dev: Twitter]</span></li>
              <li><span className="text-body-small dev-placeholder" style={{ color: 'var(--color-text-muted)' }} title="Placeholder GitHub">[Dev: GitHub]</span></li>
              <li><span className="text-body-small dev-placeholder" style={{ color: 'var(--color-text-muted)' }} title="Placeholder LinkedIn">[Dev: LinkedIn]</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{ 
          borderTop: '1px solid var(--color-border-subtle)', 
          paddingTop: 'var(--space-6)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <span className="text-metadata" style={{ color: 'var(--color-text-muted)' }}>
            &copy; {new Date().getFullYear()} Gradient Club. All rights reserved.
          </span>
          <span className="text-technical" style={{ color: 'var(--color-text-muted)' }}>
            PHASE 12C CALIBRATION
          </span>
        </div>
      </div>
    </footer>
  );
};
