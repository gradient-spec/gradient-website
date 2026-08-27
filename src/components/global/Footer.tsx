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
        <div className="grid footer-grid" style={{ marginBottom: 'var(--space-10)' }}>
          {/* Identity & Contact */}
          <div className="footer-brand">
            <span className="text-display" style={{ fontSize: 'var(--font-size-2xl)', display: 'block', marginBottom: 'var(--space-4)', color: 'var(--color-text-primary)' }}>Gradient</span>
            <p className="text-body-small" style={{ color: 'var(--color-text-secondary)', marginBottom: 'var(--space-4)', maxWidth: '85%' }}>
              A technical club focused on building, experimentation, learning, and community.
            </p>
          </div>
          
          {/* Quick Nav */}
          <div className="footer-links-1">
            <h4 className="text-label" style={{ marginBottom: 'var(--space-5)', color: 'var(--color-text-primary)' }}>Platform</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
              <li><NavLink to="/" className="text-body-small footer-link">Home</NavLink></li>
              <li><NavLink to="/about" className="text-body-small footer-link">About</NavLink></li>
              <li><NavLink to="/events" className="text-body-small footer-link">Events</NavLink></li>
            </ul>
          </div>
          
          <div className="footer-links-2">
            <h4 className="text-label" style={{ marginBottom: 'var(--space-5)', color: 'var(--color-text-primary)' }}>Organization</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
              <li><NavLink to="/projects" className="text-body-small footer-link">Projects</NavLink></li>
              <li><NavLink to="/boards" className="text-body-small footer-link">Boards</NavLink></li>
              <li><NavLink to="/contact" className="text-body-small footer-link">Contact</NavLink></li>
            </ul>
          </div>

          <div className="footer-social">
            <h4 className="text-label" style={{ marginBottom: 'var(--space-5)', color: 'var(--color-text-primary)' }}>Connect</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
              <li>
                <a href="https://www.instagram.com/gradient_spec/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-body-small footer-link">Instagram</a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/spec-gradient-club" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-body-small footer-link">LinkedIn</a>
              </li>
            </ul>
          </div>
        </div>

        <style>{`
          .footer-brand { grid-column: span 5; }
          .footer-links-1 { grid-column: 7 / span 2; }
          .footer-links-2 { grid-column: 9 / span 2; }
          .footer-social { grid-column: 11 / span 2; }
          
          .footer-link {
            color: var(--color-text-secondary);
            text-decoration: none;
            transition: color var(--duration-micro) var(--easing-default);
            position: relative;
          }
          .footer-link:hover, .footer-link:focus-visible {
            color: var(--color-accent);
            outline: none;
          }
          .footer-link::after {
            content: '';
            position: absolute;
            bottom: -2px;
            left: 0;
            width: 100%;
            height: 1px;
            background-color: var(--color-accent);
            transform: scaleX(0);
            transform-origin: right;
            transition: transform 300ms ease-out;
          }
          .footer-link:hover::after, .footer-link:focus-visible::after {
            transform: scaleX(1);
            transform-origin: left;
          }
          
          @media (max-width: 992px) {
            .footer-brand { grid-column: span 12; margin-bottom: var(--space-6); }
            .footer-links-1 { grid-column: 1 / span 4; }
            .footer-links-2 { grid-column: 5 / span 4; }
            .footer-social { grid-column: 9 / span 4; }
          }
          @media (max-width: 768px) {
            .footer-grid { gap: var(--space-8); }
            .footer-brand, .footer-links-1, .footer-links-2, .footer-social { 
              grid-column: 1 / -1; 
            }
          }
        `}</style>

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
        </div>
      </div>
    </footer>
  );
};
