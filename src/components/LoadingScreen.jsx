import React, { useState, useEffect } from 'react';
import './LoadingScreen.css';

export default function LoadingScreen({ onComplete }) {
  const [phase, setPhase] = useState('initial'); // 'initial' | 'gradient-in' | 'club-in' | 'glow' | 'fade-out'
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    // Phase 1: Show "Gradient" text with fade in
    const t1 = setTimeout(() => setPhase('gradient-in'), 300);

    // Phase 2: Slide "Club" out from inside "Gradient"
    const t2 = setTimeout(() => setPhase('club-in'), 1200);

    // Phase 3: Golden glow burst from divider
    const t3 = setTimeout(() => setPhase('glow'), 2000);

    // Phase 4: Fade out and complete
    const t4 = setTimeout(() => setPhase('fade-out'), 3200);

    // Phase 5: Remove from DOM
    const t5 = setTimeout(() => {
      setIsFinished(true);
      if (onComplete) onComplete();
    }, 4000);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
    };
  }, [onComplete]);

  if (isFinished) return null;

  return (
    <div className={`loading-overlay ${phase === 'fade-out' ? 'is-fading' : ''}`}>
      {/* Subtle grid background */}
      <div className="loading-grid-bg"></div>

      {/* Main pill container */}
      <div className="loading-pill">
        {/* "Gradient" text - left side */}
        <div className={`loading-word loading-gradient-word ${
          phase === 'gradient-in' || phase === 'club-in' || phase === 'glow' || phase === 'fade-out' ? 'visible' : ''
        }`}>
          Gradient
        </div>

        {/* Golden divider line */}
        <div className={`loading-divider ${
          phase === 'club-in' || phase === 'glow' || phase === 'fade-out' ? 'visible' : ''
        }`}>
          <div className="divider-line"></div>
          {/* Glow effect on the divider */}
          <div className={`divider-glow ${phase === 'glow' || phase === 'fade-out' ? 'active' : ''}`}></div>
        </div>

        {/* "Club" text - slides out from inside Gradient */}
        <div className={`loading-club-wrapper ${
          phase === 'club-in' || phase === 'glow' || phase === 'fade-out' ? 'visible' : ''
        }`}>
          <span className="loading-club-word">Club</span>
        </div>
      </div>

      {/* Comet / light streak */}
      <div className={`loading-light-streak ${phase === 'glow' || phase === 'fade-out' ? 'active' : ''}`}></div>
    </div>
  );
}
