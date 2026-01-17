'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, ReactNode } from 'react';

interface ParallaxProps {
  children: ReactNode;
  className?: string;
  speed?: number; // Positive = slower, Negative = faster
  direction?: 'vertical' | 'horizontal';
}

export default function Parallax({
  children,
  className = '',
  speed = 0.5,
  direction = 'vertical',
}: ParallaxProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const yRange = useTransform(scrollYProgress, [0, 1], [speed * 100, speed * -100]);
  const xRange = useTransform(scrollYProgress, [0, 1], [speed * 100, speed * -100]);

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div
        style={{
          y: direction === 'vertical' ? yRange : 0,
          x: direction === 'horizontal' ? xRange : 0,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}

// Parallax layer component for stacking multiple parallax elements
interface ParallaxLayerProps {
  children: ReactNode;
  className?: string;
  speed?: number;
  zIndex?: number;
}

export function ParallaxLayer({
  children,
  className = '',
  speed = 0.5,
  zIndex = 0,
}: ParallaxLayerProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [speed * 100, speed * -100]);

  return (
    <motion.div
      ref={ref}
      style={{ y, zIndex }}
      className={`absolute inset-0 ${className}`}
    >
      {children}
    </motion.div>
  );
}
