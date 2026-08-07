import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="massive-footer-text-container">
        <h1 className="massive-footer-text">GRADIENT</h1>
      </div>
      <div className="footer-bottom-bar">
        <p className="footer-copyright">Gradient © {new Date().getFullYear()}</p>
        <div className="footer-socials">
          <a href="#" className="hover-trigger">Instagram</a>
          <a href="#" className="hover-trigger">LinkedIn</a>
          <a href="#" className="hover-trigger">GitHub</a>
          <a href="#" className="hover-trigger">Discord</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
