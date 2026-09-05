import React from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';

export interface GradientBrandMarkProps extends HTMLMotionProps<"div"> {}

export const GradientBrandMark: React.FC<GradientBrandMarkProps> = ({ style, ...props }) => {
  return (
    <motion.div
      {...props}
      aria-hidden="true"
      style={{
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        ...style
      }}
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 400 400"
        style={{ width: '100%', height: '100%' }}
      >
        <defs>
          <linearGradient id="global-g-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00D9FF" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#2878FF" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#A855F7" stopOpacity="0.5" />
          </linearGradient>

          {/* Subtle glow filter */}
          <filter id="global-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="12" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Structural intersecting lines — extending beyond the G */}
        <line x1="200" y1="-100" x2="200" y2="500" stroke="rgba(242,241,236,0.05)" strokeWidth="0.5" />
        <line x1="-100" y1="200" x2="500" y2="200" stroke="rgba(242,241,236,0.05)" strokeWidth="0.5" />

        {/* Massive G-inspired arc */}
        <path
          d="M 200 40 A 160 160 0 1 0 360 200 L 200 200"
          fill="none"
          stroke="url(#global-g-gradient)"
          strokeWidth="12"
          strokeLinecap="square"
          filter="url(#global-glow)"
        />

        {/* Accent Terminals */}
        <circle cx="200" cy="200" r="8" fill="#2878FF" opacity="0.9" />

        {/* Secondary architectural ring */}
        <circle cx="200" cy="200" r="220" fill="none" stroke="rgba(242,241,236,0.03)" strokeWidth="1" strokeDasharray="2 24" />
      </svg>
    </motion.div>
  );
};
