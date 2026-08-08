import React from 'react';
import AnimatedSection from '../components/AnimatedSection';
import { Mail, MapPin, ArrowRight } from 'lucide-react';
import LinkedinIcon from '../components/LinkedinIcon';
import InstagramIcon from '../components/InstagramIcon';
import GithubIcon from '../components/GithubIcon';
import TwitterIcon from '../components/TwitterIcon';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page page-container">
      <section className="page-header container">
        <AnimatedSection>
          <h1 className="title-medium text-gradient">Contact Us</h1>
          <p className="page-subtitle">Ready to collaborate, innovate, or learn more about our initiatives? Reach out to us.</p>
        </AnimatedSection>
      </section>

      {/* Contact Information & Form Section */}
      <section className="contact-content section-padding">
        <div className="container">
          <AnimatedSection className="mb-6">
            <h2 className="title-medium uppercase">Contact Information</h2>
          </AnimatedSection>
          
          <div className="contact-grid">
            <AnimatedSection delay="delay-100" className="contact-info">
              <p className="contact-desc mb-6">
                Whether you're a student looking to join, an industry professional wanting to collaborate, or just curious about our events, we're here to help.
              </p>
              
              <div className="contact-details">
                <a href="mailto:hello@gradientclub.in" className="contact-item">
                  <div className="icon-wrapper"><Mail size={24} /></div>
                  <div>
                    <h4>Email Us</h4>
                    <p>hello@gradientclub.in</p>
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
                  <textarea id="message" rows="4" placeholder="How can we help you?"></textarea>
                </div>
                <button type="button" className="btn-primary form-submit">
                  Send Message <ArrowRight size={20} />
                </button>
              </form>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Social Links Section */}
      <section className="social-links-section section-padding bg-dark">
        <div className="container text-center">
          <AnimatedSection className="mb-6">
            <h2 className="title-medium uppercase text-gradient">Connect With Us</h2>
            <p className="subtitle-text mt-4">Follow our journey across the web.</p>
          </AnimatedSection>
          
          <div className="social-grid">
            <AnimatedSection delay="delay-100" className="social-card">
              <a href="https://www.linkedin.com/company/spec-gradient-club" target="_blank" rel="noopener noreferrer">
                <LinkedinIcon size={48} />
                <h4>LinkedIn</h4>
                <p>@spec-gradient-club</p>
              </a>
            </AnimatedSection>
            <AnimatedSection delay="delay-200" className="social-card">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <InstagramIcon size={48} />
                <h4>Instagram</h4>
                <p>@gradientclub</p>
              </a>
            </AnimatedSection>
            <AnimatedSection delay="delay-300" className="social-card">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <GithubIcon size={48} />
                <h4>GitHub</h4>
                <p>@gradientclub</p>
              </a>
            </AnimatedSection>
            <AnimatedSection delay="delay-400" className="social-card">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <TwitterIcon size={48} />
                <h4>Twitter / X</h4>
                <p>@gradient_spec</p>
              </a>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Join Gradient Section */}
      <section className="join-section section-padding">
        <div className="container">
          <AnimatedSection className="join-banner">
            <h2 className="title-large">Join Gradient</h2>
            <p className="desc-text mt-4 mb-6">
              Are you ready to accelerate your tech career? We recruit passionate students twice a year. Keep an eye out for our recruitment drives.
            </p>
            <button className="btn-primary">Apply Now</button>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Contact;
