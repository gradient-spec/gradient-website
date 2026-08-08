import React from 'react';
import AnimatedSection from '../components/AnimatedSection';
import './About.css';

const About = () => {
  return (
    <div className="about-page page-container">
      <section className="page-header container">
        <AnimatedSection>
          <h1 className="title-medium text-gradient">About Gradient</h1>
          <p className="page-subtitle">The official technical club of the CSM Department at St. Peter's Engineering College.</p>
        </AnimatedSection>
      </section>

      {/* Mission & Vision Section */}
      <section className="about-content section-padding">
        <div className="container">
          <div className="about-grid">
            <AnimatedSection className="about-text" delay="delay-100">
              <h2 className="title-medium uppercase">Mission & Vision</h2>
              <h3 className="sub-heading mt-4">Mission</h3>
              <p>
                Gradient Club is dedicated to equipping students with cutting-edge skills, industry exposure, and hands-on experience in emerging technologies. Our mission is to foster a dynamic learning environment where students can explore innovative ideas, collaborate on real-world projects, and stay ahead of the latest technological advancements.
              </p>
              <h3 className="sub-heading mt-4">Vision</h3>
              <p>
                To be the leading technical community that empowers the next generation of AI & ML innovators, shaping a future where ideas are automated and technology solves real-world challenges.
              </p>
            </AnimatedSection>
            
            <AnimatedSection className="about-stats" delay="delay-200">
              <div className="stat-item">
                <span className="stat-number">AI & ML</span>
                <span className="stat-label">Core Focus</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">150+</span>
                <span className="stat-label">Active Members</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">36h</span>
                <span className="stat-label">Hackathons</span>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="history-section section-padding bg-dark">
        <div className="container">
          <AnimatedSection className="text-center max-w-800 mx-auto">
            <h2 className="title-medium uppercase mb-4">Our History</h2>
            <p className="desc-text">
              Founded as the technical society for the Artificial Intelligence and Machine Learning department at St. Peter's Engineering College, Gradient Club was established to bridge the gap between academic theory and practical industry application. Over the years, we have grown into a thriving community of tech enthusiasts, hosting major national-level events like Specathon.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section section-padding">
        <div className="container">
          <AnimatedSection className="text-center mb-6">
            <h2 className="title-medium uppercase">Core Values</h2>
          </AnimatedSection>
          
          <div className="values-grid">
            {[
              { title: "Innovation", desc: "Pushing boundaries and exploring new technological frontiers." },
              { title: "Collaboration", desc: "Building together and learning from one another." },
              { title: "Excellence", desc: "Striving for the highest quality in every project and event." },
              { title: "Impact", desc: "Creating solutions that solve real-world problems." }
            ].map((value, idx) => (
              <AnimatedSection key={idx} delay={`delay-${(idx+1)*100}`} className="value-card">
                <h3>{value.title}</h3>
                <p>{value.desc}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="timeline-section section-padding bg-dark">
        <div className="container">
          <AnimatedSection className="text-center mb-6">
            <h2 className="title-medium uppercase">Timeline</h2>
          </AnimatedSection>
          
          <div className="timeline">
            {[
              { year: "2023", title: "Club Foundation", desc: "Gradient Club is officially formed." },
              { year: "2024", title: "First Specathon", desc: "Hosted our first major 36-hour hackathon." },
              { year: "2025", title: "AI Infinity", desc: "Launched our flagship AI Technical Fest." },
              { year: "2026", title: "National Recognition", desc: "Awarded Best Technical Club." }
            ].map((item, idx) => (
              <AnimatedSection key={idx} delay={`delay-${(idx+1)*100}`} className="timeline-item">
                <div className="timeline-year">{item.year}</div>
                <div className="timeline-content">
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
