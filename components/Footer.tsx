'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/LanguageContext';

export default function Footer() {
  const { t, locale } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background-light dark:bg-[#1a140d] border-t border-[#f3eee7] dark:border-white/5 py-10 md:py-16">
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        key={locale}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-8 md:mb-12">
          {/* Brand */}
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-3 md:mb-4">
              <span className="material-symbols-outlined text-primary text-xl sm:text-2xl">music_note</span>
              <span className="text-base sm:text-lg font-bold text-text-main dark:text-white">Luthier Studio</span>
            </div>
            <p className="text-text-muted font-sans text-xs sm:text-sm max-w-md mb-3 md:mb-4">
              {t.footer.description}
            </p>
            <p className="text-text-muted font-sans text-xs sm:text-sm">
              <span className="text-primary font-semibold">{t.footer.serving}</span> {t.footer.areas}
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-sm sm:text-base text-text-main dark:text-white mb-3 md:mb-4">{t.footer.servicesTitle}</h4>
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm font-sans text-text-muted">
              <li><a href="#services" className="hover:text-primary transition-colors">{t.services.items.repair.title}</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">{t.services.items.varnish.title}</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">{t.services.items.sound.title}</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">{t.services.items.bow.title}</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-sm sm:text-base text-text-main dark:text-white mb-3 md:mb-4">{t.footer.contactTitle}</h4>
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm font-sans text-text-muted">
              <li>247 Craftsman Avenue</li>
              <li>Jersey City, NJ 07302</li>
              <li className="pt-1 sm:pt-2">+1 (201) 555-0123</li>
              <li>info@luthierstudio.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#f3eee7] dark:border-white/5 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex gap-4 sm:gap-8 text-xs sm:text-sm font-sans text-text-muted">
            <a href="#" className="hover:text-primary transition-colors">{t.footer.privacy}</a>
            <a href="#" className="hover:text-primary transition-colors">{t.footer.terms}</a>
            <a href="#" className="hover:text-primary transition-colors">{t.footer.sitemap}</a>
          </div>

          <div className="text-xs sm:text-sm font-sans text-text-muted text-center">
            &copy; {currentYear} Luthier Studio. {t.footer.rights}
          </div>
        </div>
      </motion.div>
    </footer>
  );
}