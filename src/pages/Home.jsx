import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';
import { ArrowRight } from 'lucide-react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section container">
        <div className="hero-breathing-light"></div>
        <AnimatedSection className="hero-content">
          <p className="hero-pre-header delay-100">ST. PETER'S ENGINEERING COLLEGE</p>
          
          <h1 className="title-large hero-main-title">
            <span className="block delay-200">INNOVATE.</span>
            <span className="block delay-300">LEARN.</span>
            <span className="block outlined-text delay-400">GROW.</span>
          </h1>
          
          <div className="hero-bottom-content delay-500">
            <p className="hero-desc">
              The official technical club of the AI & ML Department,<br/>
              dedicated to equipping students with cutting-edge<br/>
              skills and industry exposure.
            </p>
            <Link to="/about" className="btn-discover">
              DISCOVER MORE <ArrowRight size={20} />
            </Link>
          </div>
        </AnimatedSection>
      </section>

      {/* Infinite Marquee Divider */}
      <div className="marquee-wrapper">
        <div className="marquee-content">
          <span>ARTIFICIAL INTELLIGENCE</span> <span className="marquee-dot">•</span> 
          <span>MACHINE LEARNING</span> <span className="marquee-dot">•</span> 
          <span>DATA SCIENCE</span> <span className="marquee-dot">•</span> 
          <span>INTERNET OF THINGS</span> <span className="marquee-dot">•</span> 
          <span>CYBERSECURITY</span> <span className="marquee-dot">•</span> 
          <span>BLOCKCHAIN</span> <span className="marquee-dot">•</span> 
          {/* Duplicate for seamless loop */}
          <span>ARTIFICIAL INTELLIGENCE</span> <span className="marquee-dot">•</span> 
          <span>MACHINE LEARNING</span> <span className="marquee-dot">•</span> 
          <span>DATA SCIENCE</span> <span className="marquee-dot">•</span> 
          <span>INTERNET OF THINGS</span> <span className="marquee-dot">•</span> 
          <span>CYBERSECURITY</span> <span className="marquee-dot">•</span> 
          <span>BLOCKCHAIN</span> <span className="marquee-dot">•</span>
        </div>
      </div>

      {/* About Preview Section */}
      <section className="about-preview section-padding">
        <div className="container">
          <div className="about-grid">
            <AnimatedSection className="about-text-content">
              <h2 className="title-medium uppercase">Who<br/>We Are</h2>
              <p className="subtitle-text">
                Gradient Club is the official technical club of the CSM (AI & ML) Department at St. Peter's Engineering College.
              </p>
              <p className="desc-text">
                Our mission is to foster a dynamic learning environment where students can explore innovative ideas, collaborate on real-world projects, and stay ahead of the latest technological advancements. Through workshops, hackathons, and expert seminars, we bridge the gap between theory and practice.
              </p>
              
              <div className="stats-grid">
                <div className="stat-item">
                  <h3>150+</h3>
                  <p>Active Members</p>
                </div>
                <div className="stat-item">
                  <h3>24</h3>
                  <p>Projects Built</p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay="delay-200" className="about-image-wrapper">
              <img src="https://placehold.co/800x1000/222222/555555?text=Club+Meeting+Photo" alt="Club Meeting" className="about-image" />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Board Preview Section */}
      <section className="board-preview section-padding">
        <div className="container">
          <AnimatedSection className="board-header">
            <h2 className="title-medium uppercase">The Board</h2>
            <p className="subtitle-text text-center">
              Meet the dedicated team working behind the scenes to make everything possible.
            </p>
          </AnimatedSection>

          <div className="board-members-grid">
            {[
              { name: 'Suraj Choudhary', role: 'AI & ML Core Member', img: 'Suraj', linkType: 'LinkedIn', url: 'https://in.linkedin.com/in/surajchoudhary1116' },
              { name: 'Boga Rakesh', role: 'Technical Member', img: 'Rakesh', linkType: 'Github', url: 'https://in.linkedin.com/in/boga-rakesh-2007au' },
              { name: 'Manasa Agraharam', role: 'AI & DS Core Member', img: 'Manasa', linkType: 'LinkedIn', url: 'https://in.linkedin.com/in/manasa-agraharam-953185308' },
              { name: 'Vamshi Bondugula', role: 'Alumni / Advisory', img: 'Vamshi', linkType: 'LinkedIn', url: 'https://in.linkedin.com/in/vamshi0147' }
            ].map((member, index) => (
              <AnimatedSection key={index} delay={`delay-${(index + 1) * 100}`} className="board-member-card group hover-trigger">
                <a href={member.url} target="_blank" rel="noopener noreferrer" className="board-image-link">
                  <div className="board-image-wrapper">
                    <img src={`https://placehold.co/400x533/111111/444444?text=${member.img}`} alt={member.name} className="board-image" />
                    <div className="board-social-overlay">
                      <span className="social-pill">{member.linkType}</span>
                    </div>
                  </div>
                  <h4 className="board-name">{member.name}</h4>
                  <p className="board-role">{member.role}</p>
                </a>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Events Preview Section */}
      <section className="events-preview section-padding">
        <div className="container">
          <AnimatedSection className="events-header">
            <h2 className="title-medium uppercase">Our<br/>Events</h2>
            <p className="events-header-desc">
              National level hackathons, AI technical fests, and workshops. We host the best tech gatherings on campus.
            </p>
          </AnimatedSection>

          <AnimatedSection delay="delay-100" className="flagship-events">
            <h3 className="section-label">Flagship Events</h3>
            
            <div className="events-cards-grid">
              <Link to="/events" className="event-card group hover-trigger">
                <div className="event-card-icon">
                  <ArrowRight size={32} />
                </div>
                <p className="event-date">Sep 19-20, 2025</p>
                <h4 className="event-title">SPECATHON 2025</h4>
                <p className="event-desc">A 36-hour National Level Hackathon. Solve real-world challenges in AI, Cybersecurity, IoT, and more with a ₹30,000 prize pool.</p>
              </Link>

              <Link to="/events" className="event-card group hover-trigger delay-100">
                <div className="event-card-icon">
                  <ArrowRight size={32} />
                </div>
                <p className="event-date">Jul 31, 2025</p>
                <h4 className="event-title">AI INFINITY</h4>
                <p className="event-desc">An AI-Technical Fest celebrating AI Appreciation Day. Features Idea Pitches, Cognitive Canvas, Neuro Debugg, and more.</p>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Home;
