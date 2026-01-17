'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/LanguageContext';
import { Locale } from '@/lib/translations';

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();

  const languages: { code: Locale; label: string; short: string }[] = [
    { code: 'en', label: 'EN', short: 'EN' },
    { code: 'ko', label: '한', short: 'KO' },
  ];

  const toggleLanguage = () => {
    setLocale(locale === 'en' ? 'ko' : 'en');
  };

  return (
    <motion.button
      onClick={toggleLanguage}
      className="relative flex items-center h-10 rounded-full bg-gradient-to-r from-primary/20 to-primary/10 border-2 border-primary/50 overflow-hidden cursor-pointer"
      whileHover={{ scale: 1.05, borderColor: 'hsl(35, 82%, 50%)' }}
      whileTap={{ scale: 0.95 }}
      style={{ width: '90px' }}
    >
      {/* Sliding background */}
      <motion.div
        className="absolute top-1 bottom-1 w-[42px] rounded-full bg-primary shadow-lg"
        animate={{ x: locale === 'en' ? 2 : 44 }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
      />

      {/* Language options */}
      <div className="relative flex w-full">
        {languages.map((lang) => (
          <motion.span
            key={lang.code}
            className={`flex-1 flex items-center justify-center text-sm font-bold z-10 transition-colors duration-200 ${
              locale === lang.code ? 'text-[#1b150e]' : 'text-white/70'
            }`}
            animate={{
              scale: locale === lang.code ? 1.1 : 1,
            }}
          >
            {lang.label}
          </motion.span>
        ))}
      </div>

      {/* Glow effect on hover */}
      <motion.div
        className="absolute inset-0 rounded-full opacity-0 pointer-events-none"
        style={{
          boxShadow: '0 0 20px hsl(35, 82%, 50%)',
        }}
        whileHover={{ opacity: 0.5 }}
      />
    </motion.button>
  );
}
