'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface GlowingBorderProps {
  children: ReactNode;
  className?: string;
  glowColor?: string;
  duration?: number;
}

export default function GlowingBorder({
  children,
  className = '',
  glowColor = 'hsl(var(--primary))',
  duration = 3,
}: GlowingBorderProps) {
  return (
    <div className={`relative ${className}`}>
      <motion.div
        className="absolute -inset-[1px] rounded-lg opacity-75"
        style={{
          background: `linear-gradient(90deg, transparent, ${glowColor}, transparent)`,
          backgroundSize: '200% 100%',
        }}
        animate={{
          backgroundPosition: ['200% 0', '-200% 0'],
        }}
        transition={{
          duration,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
      <div className="relative bg-background rounded-lg">{children}</div>
    </div>
  );
}
