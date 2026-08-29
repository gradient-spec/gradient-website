import React from 'react';
import { NavLink } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer
      role="contentinfo"
      style={{
        paddingTop: 'var(--space-12)',
        paddingBottom: 'var(--space-8)',
        backgroundColor: 'var(--color-surface-secondary)',
        borderTop: '1px solid var(--color-border-subtle)'
      }}
    >
      <div className="container">
        {/* Brand Statement */}
        <div style={{ marginBottom: 'var(--space-10)' }}>
          <h2 className="text-display" style={{ fontSize: 'clamp(3rem, 7vw, 5rem)', lineHeight: 1.05, letterSpacing: '-0.03em', color: 'var(--color-text-primary)', marginBottom: 'var(--space-4)' }}>
            Gradient
          </h2>
          <p className="text-body" style={{ color: 'var(--color-text-tertiary)', fontSize: 'var(--font-size-lg)', maxWidth: '400px' }}>
            Ideas are automated.
          </p>
          {/* Gradient accent rule — rare material accent */}
          <div 
            aria-hidden="true" 
            style={{ 
              width: '60px', 
              height: '2px', 
              background: 'var(--gradient-brand)', 
              marginTop: 'var(--space-6)',
              borderRadius: '1px'
            }} 
          />
        </div>

        <div className="grid footer-grid" style={{ marginBottom: 'var(--space-10)' }}>
          {/* Quick Nav */}
          <div className="footer-links-1">
            <h4 className="text-metadata" style={{ marginBottom: 'var(--space-5)', color: 'var(--color-text-tertiary)' }}>PLATFORM</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
              <li><NavLink to="/" className="text-body-small footer-link">Home</NavLink></li>
              <li><NavLink to="/about" className="text-body-small footer-link">About</NavLink></li>
              <li><NavLink to="/events" className="text-body-small footer-link">Events</NavLink></li>
            </ul>
          </div>

          <div className="footer-links-2">
            <h4 className="text-metadata" style={{ marginBottom: 'var(--space-5)', color: 'var(--color-text-tertiary)' }}>ORGANIZATION</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
              <li><NavLink to="/projects" className="text-body-small footer-link">Projects</NavLink></li>
              <li><NavLink to="/boards" className="text-body-small footer-link">Boards</NavLink></li>
              <li><NavLink to="/contact" className="text-body-small footer-link">Contact</NavLink></li>
            </ul>
          </div>

          <div className="footer-social">
            <h4 className="text-metadata" style={{ marginBottom: 'var(--space-5)', color: 'var(--color-text-tertiary)' }}>CONNECT</h4>
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
          .footer-links-1 { grid-column: 7 / span 2; }
          .footer-links-2 { grid-column: 9 / span 2; }
          .footer-social { grid-column: 11 / span 2; }
          
          .footer-link {
            color: var(--color-text-secondary);
            text-decoration: none;
            transition: color var(--duration-micro) var(--easing-default);
          }
          .footer-link:hover, .footer-link:focus-visible {
            color: var(--color-text-primary);
            outline: none;
          }
          
          @media (max-width: 992px) {
            .footer-links-1 { grid-column: 1 / span 4; }
            .footer-links-2 { grid-column: 5 / span 4; }
            .footer-social { grid-column: 9 / span 4; }
          }
          @media (max-width: 768px) {
            .footer-grid { gap: var(--space-8); }
            .footer-links-1, .footer-links-2, .footer-social { 
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
            &copy; {new Date().getFullYear()} Gradient Club
          </span>
          <span className="text-metadata" style={{ color: 'var(--color-text-muted)' }}>
            St. Peter's Engineering College
          </span>
        </div>
      </div>
    </footer>
  );
};
