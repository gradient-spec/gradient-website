import React from 'react';
import AnimatedSection from '../components/AnimatedSection';
import LinkedinIcon from '../components/LinkedinIcon';
import './Board.css';

const Board = () => {
  const members = [
    { name: 'Boga Rakesh', role: 'Board Member', linkedin: 'https://in.linkedin.com/in/boga-rakesh-2007au' },
    { name: 'Vamshi Bondugula', role: 'Board Member', linkedin: 'https://in.linkedin.com/in/vamshi0147' },
    { name: 'Suraj Choudhary', role: 'Board Member', linkedin: 'https://in.linkedin.com/in/surajchoudhary1116' },
    { name: 'Manasa Agraharam', role: 'Board Member', linkedin: 'https://in.linkedin.com/in/manasa-agraharam-953185308' },
  ];

  return (
    <div className="board-page">
      <section className="page-header container">
        <AnimatedSection>
          <h1 className="title-medium text-gradient">The Board</h1>
          <p className="page-subtitle">Meet the minds driving innovation at Gradient Club.</p>
        </AnimatedSection>
      </section>

      <section className="board-content section-padding">
        <div className="container">
          <div className="board-grid">
            {members.map((member, index) => (
              <AnimatedSection key={index} delay={`delay-${(index % 4) * 100 + 100}`} className="member-card">
                <div className="member-image-placeholder">
                  <div className="member-initials">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>
                <div className="member-info">
                  <h3>{member.name}</h3>
                  <p>{member.role}</p>
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="linkedin-link">
                    <LinkedinIcon size={20} />
                  </a>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Board;
