'use client';

import { useEffect, useState } from 'react';

interface ViolinSVGProps {
  className?: string;
  delay?: number; // Delay before animation starts (ms)
  duration?: number; // Total animation duration (ms)
}

const ViolinSVG: React.FC<ViolinSVGProps> = ({
  className = '',
  delay = 500,
  duration = 3000
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  // Stagger timing for each path group
  const getAnimationStyle = (index: number, totalPaths: number) => {
    const staggerDelay = (index / totalPaths) * (duration * 0.6);
    const pathDuration = duration * 0.5;

    return {
      strokeDasharray: 1000,
      strokeDashoffset: isVisible ? 0 : 1000,
      transition: `stroke-dashoffset ${pathDuration}ms cubic-bezier(0.4, 0, 0.2, 1) ${staggerDelay}ms`,
    };
  };

  return (
    <svg
      viewBox="0 0 200 500"
      className={`${className} ${isVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Scroll / Pegbox Head */}
      <path
        d="M100 20
           C85 20, 75 30, 75 45
           C75 55, 80 60, 85 60
           C80 60, 78 65, 78 70
           C78 80, 85 85, 95 85
           L95 95"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        style={getAnimationStyle(0, 10)}
      />

      {/* Scroll Spiral */}
      <path
        d="M75 45
           C70 45, 65 40, 65 35
           C65 28, 72 22, 80 22
           C88 22, 92 28, 92 35
           C92 42, 86 48, 78 48"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        style={getAnimationStyle(1, 10)}
      />

      {/* Pegbox */}
      <path
        d="M88 85 L88 130
           M112 85 L112 130
           M88 85 C88 80, 95 75, 100 75 C105 75, 112 80, 112 85"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        style={getAnimationStyle(2, 10)}
      />

      {/* Tuning Pegs */}
      <g style={getAnimationStyle(3, 10)}>
        <line x1="75" y1="95" x2="88" y2="95" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <line x1="112" y1="100" x2="125" y2="100" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <line x1="75" y1="110" x2="88" y2="110" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <line x1="112" y1="115" x2="125" y2="115" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </g>

      {/* Neck */}
      <path
        d="M92 130 L92 200
           M108 130 L108 200"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        style={getAnimationStyle(4, 10)}
      />

      {/* Upper Bout (Top curves of body) */}
      <path
        d="M92 200
           C92 200, 60 210, 50 240
           C40 270, 45 290, 55 305"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        style={getAnimationStyle(5, 10)}
      />
      <path
        d="M108 200
           C108 200, 140 210, 150 240
           C160 270, 155 290, 145 305"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        style={getAnimationStyle(5, 10)}
      />

      {/* C-Bouts (Waist curves) */}
      <path
        d="M55 305
           C70 320, 75 340, 60 360"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        style={getAnimationStyle(6, 10)}
      />
      <path
        d="M145 305
           C130 320, 125 340, 140 360"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        style={getAnimationStyle(6, 10)}
      />

      {/* Lower Bout (Bottom curves) */}
      <path
        d="M60 360
           C45 380, 40 420, 55 450
           C70 475, 90 480, 100 480"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        style={getAnimationStyle(7, 10)}
      />
      <path
        d="M140 360
           C155 380, 160 420, 145 450
           C130 475, 110 480, 100 480"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        style={getAnimationStyle(7, 10)}
      />

      {/* F-Holes */}
      <g style={getAnimationStyle(8, 10)}>
        {/* Left F-hole */}
        <path
          d="M70 290 C65 300, 65 320, 70 340
             M68 295 C72 295, 74 297, 74 300
             M68 335 C72 335, 74 333, 74 330"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        {/* Right F-hole */}
        <path
          d="M130 290 C135 300, 135 320, 130 340
             M132 295 C128 295, 126 297, 126 300
             M132 335 C128 335, 126 333, 126 330"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </g>

      {/* Bridge */}
      <path
        d="M75 370
           C80 360, 90 355, 100 355
           C110 355, 120 360, 125 370
           M80 370 L80 375
           M120 370 L120 375"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        style={getAnimationStyle(9, 10)}
      />

      {/* Tailpiece */}
      <path
        d="M85 420
           L85 460
           C85 465, 90 470, 100 470
           C110 470, 115 465, 115 460
           L115 420
           C115 415, 110 410, 100 410
           C90 410, 85 415, 85 420"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        style={getAnimationStyle(9, 10)}
      />

      {/* Strings (subtle) */}
      <g style={{ ...getAnimationStyle(10, 10), opacity: 0.4 }}>
        <line x1="94" y1="130" x2="94" y2="410" stroke="currentColor" strokeWidth="0.5" />
        <line x1="98" y1="130" x2="98" y2="410" stroke="currentColor" strokeWidth="0.5" />
        <line x1="102" y1="130" x2="102" y2="410" stroke="currentColor" strokeWidth="0.5" />
        <line x1="106" y1="130" x2="106" y2="410" stroke="currentColor" strokeWidth="0.5" />
      </g>

      {/* Chinrest hint */}
      <path
        d="M55 440 C45 445, 40 460, 50 470 C60 480, 75 475, 80 465"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        style={{ ...getAnimationStyle(10, 10), opacity: 0.6 }}
      />
    </svg>
  );
};

export default ViolinSVG;
