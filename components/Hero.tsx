'use client';

import { useState, useRef, useCallback, useEffect } from 'react';
import { motion } from 'framer-motion';
import { TextReveal, MagneticButton, ScrollReveal } from './animations';
import { useLanguage } from '@/lib/LanguageContext';

export default function Hero() {
  const { t, locale } = useLanguage();
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Initial animation: gentle slide to demonstrate interactivity
  useEffect(() => {
    if (!hasAnimated) {
      // Start at center, then gently move left, then right, then back to center
      const timer0 = setTimeout(() => setSliderPosition(38), 1000); // slight left
      const timer1 = setTimeout(() => setSliderPosition(62), 2200); // slight right
      const timer2 = setTimeout(() => setSliderPosition(50), 3400); // back to center
      const timer3 = setTimeout(() => setHasAnimated(true), 3800);
      return () => {
        clearTimeout(timer0);
        clearTimeout(timer1);
        clearTimeout(timer2);
        clearTimeout(timer3);
      };
    }
  }, [hasAnimated]);

  const handleMove = useCallback((clientX: number) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const width = rect.width;
      const percentage = Math.max(0, Math.min(100, (x / width) * 100));
      setSliderPosition(percentage);
    }
  }, []);

  const onMouseDown = () => setIsDragging(true);
  const onMouseUp = () => setIsDragging(false);

  const onMouseMove = (e: React.MouseEvent) => {
    if (isDragging) handleMove(e.clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        handleMove(e.clientX);
      }
    };
    const handleGlobalMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      window.addEventListener('mousemove', handleGlobalMouseMove);
      window.addEventListener('mouseup', handleGlobalMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleGlobalMouseMove);
      window.removeEventListener('mouseup', handleGlobalMouseUp);
    };
  }, [isDragging, handleMove]);

  return (
    <>
      <header
        ref={containerRef}
        className="relative w-full h-[70vh] md:h-[85vh] min-h-[500px] md:min-h-[600px] flex flex-col justify-end bg-[#211a11] overflow-hidden group select-none md:touch-none"
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onTouchStart={onMouseDown}
        onTouchMove={onTouchMove}
        onTouchEnd={onMouseUp}
      >
        {/* Comparison Slider Implementation */}
        <div className="absolute inset-0 w-full h-full pointer-events-none">
          {/* 'After' Image (Background) - Restored violin */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.6)), url('https://images.pexels.com/photos/34221/violin-musical-instrument-music-sound.jpg?auto=compress&cs=tinysrgb&w=1920')"
            }}
          />

          {/* 'Before' Image (Overlay with Clip) - Hidden on mobile */}
          <div
            className={`hidden md:block absolute inset-0 w-full h-full bg-cover bg-center border-r border-white/20 ${!isDragging && !hasAnimated ? 'transition-[clip-path] duration-1000 ease-in-out' : ''}`}
            style={{
              backgroundImage: "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.6)), url('https://images.pexels.com/photos/34221/violin-musical-instrument-music-sound.jpg?auto=compress&cs=tinysrgb&w=1920')",
              filter: "sepia(0.8) brightness(0.7) contrast(1.2)",
              clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`
            }}
          >
          </div>

          {/* Animated Drag Handle Line - Hidden on mobile */}
          <motion.div
            className={`hidden md:flex absolute top-0 bottom-0 w-1 z-10 flex-col justify-center items-center pointer-events-auto cursor-ew-resize ${!isDragging && !hasAnimated ? 'transition-[left] duration-1000 ease-in-out' : ''}`}
            style={{ left: `${sliderPosition}%` }}
            initial={false}
          >
            {/* Glowing line effect */}
            <motion.div
              className="absolute inset-0 w-full bg-gradient-to-b from-transparent via-white to-transparent"
              animate={{
                opacity: [0.5, 0.8, 0.5],
                boxShadow: ['0 0 10px rgba(255,255,255,0.3)', '0 0 20px rgba(230,144,25,0.6)', '0 0 10px rgba(255,255,255,0.3)']
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Handle button */}
            <motion.div
              className="relative size-14 rounded-full flex items-center justify-center bg-primary border-4 border-white/30"
              style={{
                boxShadow: '0 0 30px rgba(230,144,25,0.6), 0 4px 20px rgba(0,0,0,0.3)'
              }}
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
              animate={{
                boxShadow: isDragging
                  ? '0 0 40px rgba(230,144,25,0.8), 0 4px 30px rgba(0,0,0,0.4)'
                  : '0 0 20px rgba(230,144,25,0.5), 0 4px 20px rgba(0,0,0,0.3)'
              }}
            >
              <motion.div
                className="flex items-center gap-1 text-[#1b150e]"
                animate={{ x: isDragging ? [-2, 2, -2] : 0 }}
                transition={{ duration: 0.3, repeat: isDragging ? Infinity : 0 }}
              >
                <span className="material-symbols-outlined text-sm">chevron_left</span>
                <span className="material-symbols-outlined text-sm">chevron_right</span>
              </motion.div>
            </motion.div>

            {/* Instruction tooltip */}
            <motion.div
              className="absolute -bottom-16 whitespace-nowrap bg-black/70 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full transition-all duration-300"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: isDragging ? 0 : 1, y: isDragging ? -10 : 0 }}
              transition={{ delay: 1 }}
              key={locale}
            >
              {t.hero.dragToCompare}
            </motion.div>
          </motion.div>

          {/* Animated SVG Text - BEFORE - Hidden on mobile */}
          <motion.div
            key={`before-${locale}`}
            className={`hidden md:block absolute top-[20%] left-[25%] -translate-x-1/2 -translate-y-1/2 pointer-events-none z-10 transition-opacity duration-500 ${sliderPosition > 20 ? 'opacity-100' : 'opacity-0'}`}
          >
            <svg width="280" height="80" viewBox="0 0 280 80" className="overflow-visible">
              <defs>
                <linearGradient id="beforeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgba(255,255,255,0.6)" />
                  <stop offset="50%" stopColor="rgba(255,255,255,0.3)" />
                  <stop offset="100%" stopColor="rgba(255,255,255,0.6)" />
                </linearGradient>
              </defs>
              <motion.text
                x="140"
                y="55"
                textAnchor="middle"
                className="font-bold text-5xl tracking-widest"
                fill="none"
                stroke="url(#beforeGradient)"
                strokeWidth="1.5"
                initial={{ strokeDasharray: 500, strokeDashoffset: 500 }}
                animate={{ strokeDashoffset: 0 }}
                transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
              >
                {t.hero.before}
              </motion.text>
              <motion.text
                x="140"
                y="55"
                textAnchor="middle"
                className="font-bold text-5xl tracking-widest"
                fill="rgba(255,255,255,0.15)"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 2 }}
              >
                {t.hero.before}
              </motion.text>
            </svg>
          </motion.div>

          {/* Animated SVG Text - AFTER - Hidden on mobile */}
          <motion.div
            key={`after-${locale}`}
            className="hidden md:block absolute top-[20%] left-[75%] -translate-x-1/2 -translate-y-1/2 pointer-events-none z-10"
          >
            <svg width="280" height="80" viewBox="0 0 280 80" className="overflow-visible">
              <defs>
                <linearGradient id="afterGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgba(230,144,25,0.8)" />
                  <stop offset="50%" stopColor="rgba(230,144,25,0.4)" />
                  <stop offset="100%" stopColor="rgba(230,144,25,0.8)" />
                </linearGradient>
              </defs>
              <motion.text
                x="140"
                y="55"
                textAnchor="middle"
                className="font-bold text-5xl tracking-widest"
                fill="none"
                stroke="url(#afterGradient)"
                strokeWidth="1.5"
                initial={{ strokeDasharray: 400, strokeDashoffset: 400 }}
                animate={{ strokeDashoffset: 0 }}
                transition={{ duration: 2, delay: 0.8, ease: "easeOut" }}
              >
                {t.hero.after}
              </motion.text>
              <motion.text
                x="140"
                y="55"
                textAnchor="middle"
                className="font-bold text-5xl tracking-widest"
                fill="rgba(230,144,25,0.2)"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 2.3 }}
              >
                {t.hero.after}
              </motion.text>
            </svg>
          </motion.div>

        </div>

        {/* Hero Content Overlay */}
        <div className="relative z-30 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 pt-32 pointer-events-none">
          <motion.div
            className="max-w-2xl pointer-events-auto"
            key={locale}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <ScrollReveal delay={0.2}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/30 backdrop-blur-sm border border-white/10 text-primary mb-6">
                <span className="material-symbols-outlined text-sm">handyman</span>
                <span className="text-sm font-sans font-medium text-white tracking-wide">{t.hero.badge}</span>
              </div>
            </ScrollReveal>

            <h1 className="text-white text-3xl sm:text-5xl md:text-7xl font-bold leading-tight tracking-tight mb-4 md:mb-6 drop-shadow-lg">
              {locale === 'ko' ? (
                <>
                  <TextReveal text={t.hero.title1} staggerDelay={0.05} key={`t1-${locale}`} />
                  {' '}
                  <span className="italic text-primary font-display">
                    <TextReveal text={t.hero.titleHighlight} staggerDelay={0.08} key={`th-${locale}`} />
                  </span>
                  <TextReveal text={t.hero.title2} staggerDelay={0.04} key={`t2-${locale}`} />
                </>
              ) : (
                <>
                  <TextReveal text={t.hero.title1} staggerDelay={0.05} key={`t1-${locale}`} />
                  {' '}
                  <span className="italic text-primary font-display">
                    <TextReveal text={t.hero.titleHighlight} staggerDelay={0.08} key={`th-${locale}`} />
                  </span>
                  {' '}
                  <TextReveal text={t.hero.title2} staggerDelay={0.04} key={`t2-${locale}`} />
                </>
              )}
            </h1>

            <ScrollReveal delay={0.6}>
              <p className="text-white/80 text-lg md:text-xl font-sans font-light leading-relaxed mb-8 max-w-xl drop-shadow-md">
                {t.hero.description}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.8}>
              <div className="flex flex-col sm:flex-row gap-4">
                <MagneticButton strength={0.4}>
                  <motion.button
                    className="flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-[#1b150e] px-8 py-4 rounded-lg text-base font-bold transition-colors shadow-glow group"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>{t.hero.cta}</span>
                    <motion.span
                      className="material-symbols-outlined"
                      initial={{ x: 0 }}
                      whileHover={{ x: 4 }}
                    >
                      arrow_forward
                    </motion.span>
                  </motion.button>
                </MagneticButton>

                <MagneticButton strength={0.3}>
                  <motion.button
                    className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-lg text-base font-medium transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="material-symbols-outlined">play_circle</span>
                    <span>{t.hero.watchProcess}</span>
                  </motion.button>
                </MagneticButton>
              </div>
            </ScrollReveal>
          </motion.div>
        </div>
      </header>

      {/* Logo Strip */}
      <ScrollReveal direction="up" delay={0.2}>
        <div className="w-full bg-white dark:bg-[#1a140d] border-b border-[#f3eee7] dark:border-white/5 py-6 md:py-8">
          <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-4 sm:gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {['piano', 'queue_music', 'music_note', 'library_music'].map((icon, i) => (
              <motion.div
                key={icon}
                className="h-8 flex items-center gap-2 font-bold text-sm sm:text-xl text-text-main dark:text-white font-sans"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
              >
                <span className="material-symbols-outlined text-lg sm:text-2xl">{icon}</span>
                <span className="hidden sm:inline">{['Philharmonic', 'Conservatory', 'Royal Opera', 'Symphony'][i]}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </>
  );
}
