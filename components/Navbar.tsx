'use client';

import { motion } from 'framer-motion';
import { MagneticButton } from './animations';
import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from '@/lib/LanguageContext';

export default function Navbar() {
  const { t } = useLanguage();

  const navItems = [
    { label: t.nav.services, href: '#services' },
    { label: t.nav.gallery, href: '#gallery' },
    { label: t.nav.testimonials, href: '#testimonials' },
    { label: t.nav.contact, href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
      className="sticky top-0 z-50 w-full border-b border-[#f3eee7] bg-background-light/95 backdrop-blur-sm dark:bg-background-dark/95 dark:border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            className="flex items-center gap-3"
            whileHover={{ scale: 1.02 }}
          >
            <div className="size-8 text-primary flex items-center justify-center">
              <span className="material-symbols-outlined text-3xl">music_note</span>
            </div>
            <h2 className="text-text-main dark:text-white text-2xl font-bold tracking-tight">Luthier Studio</h2>
          </motion.div>

          {/* Desktop Menu - fixed width items to prevent layout shift */}
          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                className="relative text-text-main dark:text-white/90 text-sm font-medium hover:text-primary transition-colors px-4 py-2 min-w-[90px] text-center"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.1 }}
                whileHover={{ y: -2 }}
              >
                {item.label}
                <motion.span
                  className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-0.5 bg-primary"
                  initial={{ width: 0 }}
                  whileHover={{ width: '80%' }}
                  transition={{ duration: 0.2 }}
                />
              </motion.a>
            ))}
          </div>

          {/* Right side: Language + CTA - fixed widths to prevent layout shift */}
          <div className="flex items-center gap-3">
            <LanguageSwitcher />

            <MagneticButton strength={0.3}>
              <motion.button
                className="hidden sm:block bg-primary hover:bg-primary/90 text-white dark:text-[#1b150e] px-5 py-2.5 rounded-lg text-sm font-bold tracking-wide transition-colors shadow-lg hover:shadow-glow min-w-[140px] text-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >
                {t.nav.bookConsultation}
              </motion.button>
            </MagneticButton>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
