'use client';

import { motion, useInView, useAnimation, Variants } from 'framer-motion';
import { ReactNode, useRef, useEffect } from 'react';

interface RevealOnScrollProps {
  children: ReactNode;
  width?: 'fit-content' | '100%';
  className?: string;
  delay?: number;
}

export default function RevealOnScroll({
  children,
  width = 'fit-content',
  className = '',
  delay = 0,
}: RevealOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
      slideControls.start('visible');
    }
  }, [isInView, mainControls, slideControls]);

  const mainVariants: Variants = {
    hidden: { opacity: 0, y: 75 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: delay + 0.25,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const slideVariants: Variants = {
    hidden: { left: 0 },
    visible: {
      left: '100%',
      transition: {
        duration: 0.5,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden ${className}`}
      style={{ width }}
    >
      <motion.div variants={mainVariants} initial="hidden" animate={mainControls}>
        {children}
      </motion.div>
      <motion.div
        variants={slideVariants}
        initial="hidden"
        animate={slideControls}
        className="absolute top-0 bottom-0 left-0 right-0 bg-primary z-20"
      />
    </div>
  );
}
