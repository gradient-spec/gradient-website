import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container container">
        <Link to="/" className="navbar-logo">
          Gradient<span>Club</span>
        </Link>
        
        <button 
          className={`menu-toggle ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
          <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About</Link>
          <Link to="/events" className={location.pathname === '/events' ? 'active' : ''}>Events</Link>
          <Link to="/board" className={location.pathname === '/board' ? 'active' : ''}>Board</Link>
          <Link to="/contact" className={`contact-btn ${location.pathname === '/contact' ? 'active' : ''}`}>Contact Us</Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
