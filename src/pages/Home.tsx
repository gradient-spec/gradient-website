import React, { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion, useScroll, useSpring, useTransform, useMotionValue, type MotionValue } from 'framer-motion';

import { GradientBrandMark } from '@/components/global/GradientBrandMark';
import { HeroSection } from '@/sections/home/HeroSection';
import { WhatIsGradientSection } from '@/sections/home/WhatIsGradientSection';
import { FeaturedProjectsSection } from '@/sections/projects/FeaturedProjectsSection';
import { FeaturedEventSection } from '@/sections/home/FeaturedEventSection';
import { CurrentBoardSection } from '@/sections/boards/CurrentBoardSection';
import { HomeCTASection } from '@/sections/home/HomeCTASection';

const WAYPOINTS = {
  // Sections: Hero (0), Mission (1), Projects (2), Events (3), Boards (4), CTA (5)
  scale:   [1.1,     0.8,      1.3,     2.5,     0.7,    1.0],
  x:       ['25vw',  '-35vw',  '10vw',  '-20vw', '35vw', '0vw'],
  y:       ['0vh',   '5vh',    '10vh',  '0vh',   '-5vh', '0vh'],
  rotate:  [0,       -15,      10,      -5,      45,     0],
  opacity: [0.85,    0.4,      0.3,     0.15,    0.4,    0.85]
};

const HomeBrandMarkLayer: React.FC<{ progress: MotionValue<number>, scrollMap: number[] }> = ({ progress, scrollMap }) => {
  const prefersReducedMotion = useReducedMotion();
  
  const scale = useTransform(progress, scrollMap, WAYPOINTS.scale);
  const x = useTransform(progress, scrollMap, WAYPOINTS.x);
  const y = useTransform(progress, scrollMap, WAYPOINTS.y);
  const rotate = useTransform(progress, scrollMap, WAYPOINTS.rotate);
  const opacity = useTransform(progress, scrollMap, WAYPOINTS.opacity);

  // --- Living Interaction (Mouse Parallax) ---
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const handleMouseMove = (e: MouseEvent) => {
      // Calculate cursor position relative to the center of the screen (-1 to 1)
      const normalizedX = (e.clientX / window.innerWidth) * 2 - 1;
      const normalizedY = (e.clientY / window.innerHeight) * 2 - 1;
      
      // Map to a subtle pixel offset (e.g., -20px to 20px)
      mouseX.set(normalizedX * 20);
      mouseY.set(normalizedY * 20);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY, prefersReducedMotion]);

  // Wrap raw mouse values in a spring for smooth, organic floating motion
  const parallaxX = useSpring(mouseX, { stiffness: 40, damping: 20, mass: 1 });
  const parallaxY = useSpring(mouseY, { stiffness: 40, damping: 20, mass: 1 });

  if (prefersReducedMotion) {
    return null;
  }

  return (
    <div 
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 5,
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <motion.div
        style={{
          width: '120vw',
          maxWidth: '1400px',
          aspectRatio: '1',
          scale,
          rotate,
          opacity
        }}
      >
        <motion.div style={{ width: '100%', height: '100%', x, y }}>
          {/* Apply the living parallax interaction to the innermost container */}
          <motion.div style={{ width: '100%', height: '100%', x: parallaxX, y: parallaxY }}>
            <GradientBrandMark />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

const HomePage = () => {
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 40, damping: 25, mass: 1.5 });
  
  const [scrollMap, setScrollMap] = useState([0, 0.2, 0.4, 0.6, 0.8, 1]);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const updateScrollMap = () => {
      const container = document.documentElement;
      const totalScroll = container.scrollHeight - window.innerHeight;
      
      if (totalScroll <= 0) return;

      let newMap = sectionRefs.current.map((ref, index) => {
        if (!ref) return index * 0.2;
        const rect = ref.getBoundingClientRect();
        const offsetTop = rect.top + window.scrollY;
        // Map offset top to 0-1 progress
        return offsetTop / totalScroll;
      });

      // Clamp to [0, 1]
      newMap = newMap.map(val => Math.max(0, Math.min(1, val)));
      
      // Hero always triggers at 0, CTA finishes at 1
      newMap[0] = 0;
      newMap[newMap.length - 1] = 1;

      // Ensure strict monotonicity for useTransform
      for (let i = 1; i < newMap.length; i++) {
        if (newMap[i] <= newMap[i - 1]) {
          newMap[i] = newMap[i - 1] + 0.01;
        }
      }

      setScrollMap(newMap);
    };

    // Calculate initial map
    updateScrollMap();

    // Recalculate on resize since DOM heights might shift
    window.addEventListener('resize', updateScrollMap);
    
    // Fallback recalculation slightly after mount for image loads
    const timeout = setTimeout(updateScrollMap, 500);

    return () => {
      window.removeEventListener('resize', updateScrollMap);
      clearTimeout(timeout);
    };
  }, []);

  const setRef = (index: number) => (el: HTMLDivElement | null) => {
    sectionRefs.current[index] = el;
  };

  return (
    <main id="main-content" style={{ position: 'relative', backgroundColor: 'var(--color-surface-primary)' }}>
      <HomeBrandMarkLayer progress={smoothProgress} scrollMap={scrollMap} />
      
      {/* Sections Wrapper - Removed zIndex to prevent flattening, allowing the fixed G Layer (zIndex 5) to weave behind text (zIndex 10) but above section backgrounds (zIndex auto) */}
      <div>
        
        <div ref={setRef(0)} style={{ backgroundColor: 'transparent' }}>
          <HeroSection />
        </div>
        
        <div ref={setRef(1)} style={{ backgroundColor: 'transparent' }}>
          <WhatIsGradientSection />
        </div>
        
        <div ref={setRef(2)} style={{ backgroundColor: 'transparent' }}>
          <FeaturedProjectsSection />
        </div>
        
        <div ref={setRef(3)} style={{ backgroundColor: 'transparent' }}>
          <FeaturedEventSection />
        </div>
        
        <div ref={setRef(4)} style={{ backgroundColor: 'transparent' }}>
          <CurrentBoardSection />
        </div>
        
        <div ref={setRef(5)} style={{ backgroundColor: 'transparent' }}>
          <HomeCTASection />
        </div>
      </div>
    </main>
  );
};

export default HomePage;
