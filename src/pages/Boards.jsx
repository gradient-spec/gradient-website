import React from 'react';
import AnimatedSection from '../components/AnimatedSection';
import LinkedinIcon from '../components/LinkedinIcon';
import './Boards.css';

const Boards = () => {
  const currentBoard = [
    { name: 'Boga Rakesh', role: 'President', linkedin: 'https://in.linkedin.com/in/boga-rakesh-2007au' },
    { name: 'Suraj Choudhary', role: 'Vice President', linkedin: 'https://in.linkedin.com/in/surajchoudhary1116' },
    { name: 'Manasa Agraharam', role: 'Technical Lead', linkedin: 'https://in.linkedin.com/in/manasa-agraharam-953185308' },
    { name: 'Vamshi Bondugula', role: 'Operations Lead', linkedin: 'https://in.linkedin.com/in/vamshi0147' },
  ];

  const previousBoards = [
    {
      year: '2024-2025',
      members: [
        { name: 'Former President', role: 'President' },
        { name: 'Former VP', role: 'Vice President' },
        { name: 'Former Tech Lead', role: 'Technical Lead' }
      ]
    },
    {
      year: '2023-2024',
      members: [
        { name: 'Founding President', role: 'President' },
        { name: 'Founding VP', role: 'Vice President' }
      ]
    }
  ];

  return (
    <div className="board-page page-container">
      <section className="page-header container">
        <AnimatedSection>
          <h1 className="title-medium text-gradient">The Boards</h1>
          <p className="page-subtitle">Meet the leadership teams driving innovation at Gradient Club, past and present.</p>
        </AnimatedSection>
      </section>

      {/* Current Board Section */}
      <section className="current-board-section section-padding">
        <div className="container">
          <AnimatedSection className="mb-6 text-center">
            <h2 className="title-medium uppercase">Current Board</h2>
            <p className="subtitle-text mt-4">2025 - 2026</p>
          </AnimatedSection>
          
          <div className="board-grid">
            {currentBoard.map((member, index) => (
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

      {/* Previous Boards Section */}
      <section className="previous-boards-section section-padding bg-dark">
        <div className="container">
          <AnimatedSection className="mb-6 text-center">
            <h2 className="title-medium uppercase text-gradient">Previous Boards</h2>
            <p className="subtitle-text mt-4">Honoring the alumni who built our foundation.</p>
          </AnimatedSection>
          
          <div className="previous-boards-list">
            {previousBoards.map((board, idx) => (
              <AnimatedSection key={idx} delay={`delay-${(idx+1)*100}`} className="previous-board-year">
                <h3 className="year-title">{board.year}</h3>
                <div className="previous-members-grid">
                  {board.members.map((member, mIdx) => (
                    <div key={mIdx} className="prev-member-card border-accent">
                      <h4>{member.name}</h4>
                      <p>{member.role}</p>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Boards;
