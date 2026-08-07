import React from 'react';
import AnimatedSection from '../components/AnimatedSection';
import { Mail, MapPin, ArrowRight } from 'lucide-react';
import LinkedinIcon from '../components/LinkedinIcon';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <section className="page-header container">
        <AnimatedSection>
          <h1 className="title-medium text-gradient">Let's Talk</h1>
          <p className="page-subtitle">Ready to collaborate, innovate, or learn more about our initiatives? Reach out to us.</p>
        </AnimatedSection>
      </section>

      <section className="contact-content section-padding">
        <div className="container">
          <div className="contact-grid">
            <AnimatedSection delay="delay-100" className="contact-info">
              <h2>Get in Touch</h2>
              <p className="contact-desc">
                Whether you're a student looking to join, an industry professional wanting to collaborate, or just curious about our events, we're here to help.
              </p>
              
              <div className="contact-details">
                <a href="https://gradientclub.in/" target="_blank" rel="noopener noreferrer" className="contact-item">
                  <div className="icon-wrapper"><Mail size={24} /></div>
                  <div>
                    <h4>Official Website</h4>
                    <p>gradientclub.in</p>
                  </div>
                </a>
                
                <a href="https://www.linkedin.com/company/spec-gradient-club" target="_blank" rel="noopener noreferrer" className="contact-item">
                  <div className="icon-wrapper"><LinkedinIcon size={24} /></div>
                  <div>
                    <h4>LinkedIn</h4>
                    <p>The SPEC Gradient Club</p>
                  </div>
                </a>
                
                <div className="contact-item">
                  <div className="icon-wrapper"><MapPin size={24} /></div>
                  <div>
                    <h4>Location</h4>
                    <p>St. Peter's Engineering College<br/>Hyderabad, Telangana</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay="delay-200" className="contact-form-container">
              <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" placeholder="John Doe" />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" placeholder="john@example.com" />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" rows="5" placeholder="How can we help you?"></textarea>
                </div>
                
                <button type="button" className="btn-primary form-submit">
                  Send Message <ArrowRight size={20} />
                </button>
              </form>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
