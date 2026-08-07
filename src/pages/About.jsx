import React from 'react';
import AnimatedSection from '../components/AnimatedSection';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <section className="page-header container">
        <AnimatedSection>
          <h1 className="title-medium text-gradient">About Gradient</h1>
          <p className="page-subtitle">The official technical club of the CSM Department at St. Peter's Engineering College.</p>
        </AnimatedSection>
      </section>

      <section className="about-content section-padding">
        <div className="container">
          <div className="about-grid">
            <AnimatedSection className="about-text" delay="delay-100">
              <h2>Our Mission</h2>
              <p>
                Gradient Club is dedicated to equipping students with cutting-edge skills, industry exposure, and hands-on experience in emerging technologies. Our mission is to foster a dynamic learning environment where students can explore innovative ideas, collaborate on real-world projects, and stay ahead of the latest technological advancements.
              </p>
              <p>
                By engaging with Gradient, members gain the opportunity to enhance their technical expertise, develop problem-solving skills, and prepare for future careers in the ever-evolving tech landscape.
              </p>
            </AnimatedSection>
            
            <AnimatedSection className="about-stats" delay="delay-200">
              <div className="stat-item">
                <span className="stat-number">AI & ML</span>
                <span className="stat-label">Core Focus</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">100+</span>
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
    </div>
  );
};

export default About;
