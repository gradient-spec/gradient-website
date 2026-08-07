import React, { useEffect, useState } from 'react';
import './CustomCursor.css';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only run on non-touch devices
    if (!window.matchMedia("(pointer: fine)").matches) {
      return;
    }
    
    setIsVisible(true);

    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const addHoverListeners = () => {
      const interactables = document.querySelectorAll('.hover-trigger, a, button, input, textarea');
      interactables.forEach(el => {
        el.addEventListener('mouseenter', handleMouseEnter);
        el.addEventListener('mouseleave', handleMouseLeave);
      });
    };

    const removeHoverListeners = () => {
      const interactables = document.querySelectorAll('.hover-trigger, a, button, input, textarea');
      interactables.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    window.addEventListener('mousemove', onMouseMove);
    
    // Initial binding
    addHoverListeners();

    // Use a MutationObserver to re-bind listeners when DOM changes (e.g. route change)
    const observer = new MutationObserver(() => {
      removeHoverListeners(); // Cleanup old listeners
      addHoverListeners();    // Bind new ones
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      removeHoverListeners();
      observer.disconnect();
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={`custom-cursor ${isHovered ? 'hovered' : ''}`}
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    />
  );
};

export default CustomCursor;
