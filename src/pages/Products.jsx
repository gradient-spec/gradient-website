import React from 'react';
import AnimatedSection from '../components/AnimatedSection';
import { ArrowRight, Code, Terminal, Beaker, Globe } from 'lucide-react';
import './Products.css';

const Products = () => {
  return (
    <div className="products-page page-container">
      <section className="page-header container">
        <AnimatedSection>
          <h1 className="title-medium text-gradient">Products & Research</h1>
          <p className="page-subtitle">Innovative solutions built by the community, for the community.</p>
        </AnimatedSection>
      </section>

      {/* Products Section */}
      <section className="products-section section-padding">
        <div className="container">
          <AnimatedSection className="mb-6">
            <h2 className="title-medium uppercase">Products</h2>
            <p className="subtitle-text mt-4">Full-scale applications deployed by Gradient Club.</p>
          </AnimatedSection>
          
          <div className="projects-grid">
            {[
              { icon: <Globe size={32} />, title: "Gradient Hub", desc: "The central portal for all club resources, event registrations, and member profiles." },
              { icon: <Terminal size={32} />, title: "Specathon Management System", desc: "A robust platform built to handle hackathon registrations, team formations, and live judging." }
            ].map((prod, idx) => (
              <AnimatedSection key={idx} delay={`delay-${(idx+1)*100}`} className="project-card">
                <div className="project-icon">{prod.icon}</div>
                <h3>{prod.title}</h3>
                <p>{prod.desc}</p>
                <button className="btn-link mt-4">View Product <ArrowRight size={16} /></button>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects-section section-padding bg-dark">
        <div className="container">
          <AnimatedSection className="mb-6 text-right">
            <h2 className="title-medium uppercase text-gradient">Internal Projects</h2>
            <p className="subtitle-text mt-4">Exploratory tools built by our members.</p>
          </AnimatedSection>
          
          <div className="projects-grid">
            {[
              { title: "AI Attendance Tracker", desc: "Computer vision based attendance system using face recognition for club meetings." },
              { title: "Campus Nav", desc: "An AR-based campus navigation assistant built for incoming freshmen." },
              { title: "ChatSPEC", desc: "A fine-tuned LLM assistant trained on college documentation to help students." }
            ].map((proj, idx) => (
              <AnimatedSection key={idx} delay={`delay-${(idx+1)*100}`} className="project-card-small border-accent">
                <h4>{proj.title}</h4>
                <p>{proj.desc}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Open Source Section */}
      <section className="opensource-section section-padding">
        <div className="container">
          <AnimatedSection className="mb-6">
            <h2 className="title-medium uppercase">Open Source</h2>
          </AnimatedSection>
          
          <AnimatedSection delay="delay-100" className="opensource-banner text-center">
            <Code size={48} className="mx-auto mb-4" color="var(--accent-color)" />
            <h3>We ♥ Open Source</h3>
            <p className="desc-text max-w-800 mx-auto mt-4">
              Gradient Club actively contributes to the open-source ecosystem. Many of our internal libraries, UI components, and ML models are open-sourced on our GitHub organization for anyone to use and improve.
            </p>
            <a href="#" className="btn-outline mt-6">Visit our GitHub</a>
          </AnimatedSection>
        </div>
      </section>

      {/* Research Section */}
      <section className="research-section section-padding bg-dark">
        <div className="container">
          <AnimatedSection className="mb-6">
            <h2 className="title-medium uppercase text-gradient">Research</h2>
          </AnimatedSection>
          
          <div className="research-grid">
            <AnimatedSection delay="delay-100" className="research-item">
              <div className="research-icon">
                <Beaker size={24} />
              </div>
              <div className="research-content">
                <h4>Generative AI in Education</h4>
                <p>Exploring how LLMs can be utilized to create personalized learning paths for engineering students.</p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay="delay-200" className="research-item">
              <div className="research-icon">
                <Beaker size={24} />
              </div>
              <div className="research-content">
                <h4>Edge Computing for IoT</h4>
                <p>Researching efficient ML model deployment strategies on low-power IoT devices for campus sustainability.</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
