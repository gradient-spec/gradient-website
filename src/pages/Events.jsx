import React from 'react';
import AnimatedSection from '../components/AnimatedSection';
import { ArrowRight, Calendar, MapPin, Trophy } from 'lucide-react';
import './Events.css';

const Events = () => {
  return (
    <div className="events-page">
      <section className="page-header container">
        <AnimatedSection>
          <h1 className="title-medium text-gradient">Events & Hackathons</h1>
          <p className="page-subtitle">Bridging the gap between theory and practice through workshops, seminars, and competitive programming.</p>
        </AnimatedSection>
      </section>

      <section className="events-content section-padding">
        <div className="container">
          <AnimatedSection delay="delay-100">
            <h2 className="section-title">Featured Event</h2>
            
            <div className="featured-event-large">
              <div className="fel-content">
                <span className="event-badge">Registrations LIVE</span>
                <h3 className="fel-title">Specathon 2026</h3>
                <p className="fel-desc">
                  A 36-Hour National-Level Hackathon bringing together the brightest student minds across India to build, create, and lead. 
                </p>
                
                <div className="fel-meta">
                  <div className="meta-item">
                    <Calendar size={20} />
                    <span>11–12 September 2026</span>
                  </div>
                  <div className="meta-item">
                    <MapPin size={20} />
                    <span>St. Peter's Engineering College, Hyderabad</span>
                  </div>
                  <div className="meta-item">
                    <Trophy size={20} />
                    <span>Prize Pool: ₹60,000</span>
                  </div>
                </div>

                <div className="fel-tracks">
                  <h4>Tracks Include:</h4>
                  <ul>
                    <li>Artificial Intelligence</li>
                    <li>Cyber Security</li>
                    <li>Data Science</li>
                    <li>Blockchain</li>
                    <li>IoT</li>
                    <li>Open Innovation</li>
                  </ul>
                </div>
                
                <div className="fel-actions">
                  <a href="https://lnkd.in/euAA2B56" target="_blank" rel="noopener noreferrer" className="btn-primary">
                    Register on Unstop <ArrowRight size={20} />
                  </a>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay="delay-200" className="past-events">
            <h2 className="section-title">Other Activities</h2>
            <div className="events-grid">
              <div className="event-item">
                <h4>Technical Workshops</h4>
                <p>Learn cutting-edge skills directly from experts. Hands-on sessions focused on AI, Machine Learning, and Web Technologies.</p>
              </div>
              <div className="event-item">
                <h4>Expert-Led Seminars</h4>
                <p>Interactive sessions with industry leaders to gain insights into emerging trends and real-world project development.</p>
              </div>
              <div className="event-item">
                <h4>Industry Interactions</h4>
                <p>Bridge the gap between academia and industry requirements through networking sessions and corporate talks.</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Events;
