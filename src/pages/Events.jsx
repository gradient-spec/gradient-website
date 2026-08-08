import React from 'react';
import AnimatedSection from '../components/AnimatedSection';
import { ArrowRight, Calendar, MapPin, Trophy, Image as ImageIcon } from 'lucide-react';
import './Events.css';

const Events = () => {
  return (
    <div className="events-page page-container">
      <section className="page-header container">
        <AnimatedSection>
          <h1 className="title-medium text-gradient">Events</h1>
          <p className="page-subtitle">Where ideas meet action. Discover our upcoming hackathons, ongoing workshops, and past successes.</p>
        </AnimatedSection>
      </section>

      {/* Upcoming Events Section */}
      <section className="upcoming-events-section section-padding">
        <div className="container">
          <AnimatedSection className="mb-6">
            <h2 className="title-medium uppercase">Upcoming Events</h2>
          </AnimatedSection>
          
          <AnimatedSection delay="delay-100">
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
                
                <div className="fel-actions mt-4">
                  <a href="https://unstop.com/" target="_blank" rel="noopener noreferrer" className="btn-primary">
                    Register Now <ArrowRight size={20} />
                  </a>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Ongoing Events Section */}
      <section className="ongoing-events-section section-padding bg-dark">
        <div className="container">
          <AnimatedSection className="mb-6 text-right">
            <h2 className="title-medium uppercase text-gradient">Ongoing Events</h2>
          </AnimatedSection>
          
          <div className="events-grid">
            {[
              { title: "Weekly AI Workshops", date: "Every Saturday", desc: "Hands-on sessions focusing on NLP, Computer Vision, and Generative AI models." },
              { title: "Competitive Programming Club", date: "Wednesdays", desc: "Sharpening DSA skills and preparing for national-level coding competitions." }
            ].map((event, idx) => (
              <AnimatedSection key={idx} delay={`delay-${(idx+1)*100}`} className="event-card-small border-accent">
                <span className="event-date-small">{event.date}</span>
                <h4>{event.title}</h4>
                <p>{event.desc}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events Section */}
      <section className="past-events-section section-padding">
        <div className="container">
          <AnimatedSection className="mb-6">
            <h2 className="title-medium uppercase">Past Events</h2>
          </AnimatedSection>

          <div className="events-grid">
            {[
              { title: "AI Infinity 2025", date: "Jul 31, 2025", desc: "AI-Technical Fest celebrating AI Appreciation Day. Featured Idea Pitches, Cognitive Canvas, and Neuro Debugg." },
              { title: "Specathon 2024", date: "Sep 2024", desc: "Our inaugural 36-hour hackathon that put Gradient Club on the map." },
              { title: "WebDev Bootcamp", date: "Mar 2024", desc: "A 2-week intensive bootcamp covering React, Node.js, and modern web deployment." }
            ].map((event, idx) => (
              <AnimatedSection key={idx} delay={`delay-${(idx+1)*100}`} className="event-card-small">
                <span className="event-date-small">{event.date}</span>
                <h4>{event.title}</h4>
                <p>{event.desc}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Event Gallery Section */}
      <section className="gallery-section section-padding bg-dark">
        <div className="container">
          <AnimatedSection className="text-center mb-6">
            <h2 className="title-medium uppercase text-gradient">Event Gallery</h2>
            <p className="subtitle-text mt-4">Capturing moments of innovation and teamwork.</p>
          </AnimatedSection>

          <div className="gallery-grid">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <AnimatedSection key={item} delay={`delay-${item*100}`} className="gallery-item">
                <div className="gallery-placeholder">
                  <ImageIcon size={48} opacity={0.2} />
                  <span>Gallery Image {item}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
