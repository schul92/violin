'use client';

import { motion } from 'framer-motion';
import { ScrollReveal, TiltCard } from './animations';
import { useLanguage } from '@/lib/LanguageContext';

export default function Testimonials() {
  const { t, locale } = useLanguage();

  return (
    <section id="testimonials" className="py-20 md:py-32 bg-background-light dark:bg-background-dark">
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        key={locale}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <h2 className="text-center text-primary font-sans font-bold text-sm tracking-widest uppercase mb-16">{t.testimonials.sectionTitle}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          
          {/* Main Feature Testimonial */}
          <ScrollReveal direction="left">
            <div className="relative h-full min-h-[400px] rounded-2xl overflow-hidden shadow-2xl group">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
                style={{ backgroundImage: "url('https://images.pexels.com/photos/7095517/pexels-photo-7095517.jpeg?auto=compress&cs=tinysrgb&w=800')" }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 text-white">
                <motion.div
                  className="flex gap-1 text-primary mb-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ staggerChildren: 0.1 }}
                >
                  {[...Array(5)].map((_, i) => (
                    <motion.span
                      key={i}
                      className="material-symbols-outlined text-lg"
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      transition={{ delay: i * 0.1, type: "spring" }}
                    >
                      star
                    </motion.span>
                  ))}
                </motion.div>
                <p className="text-2xl font-bold italic font-display mb-4">"The depth of tone they unlocked in my Guarneri is simply indescribable. It feels like a completely new instrument."</p>
                <p className="font-sans font-bold text-sm tracking-wide">ELENA ROSTOVA</p>
                <p className="font-sans text-xs text-white/70">Principal Violin, Vienna Symphony</p>
              </div>
            </div>
          </ScrollReveal>

          <div className="flex flex-col gap-6">
            {/* Quote 2 */}
            <ScrollReveal direction="right" delay={0.2}>
              <motion.div
                className="bg-white dark:bg-[#2a2218] p-8 rounded-xl border border-[#f3eee7] dark:border-white/5 shadow-sm hover:shadow-md transition-shadow"
                whileHover={{ x: 5 }}
              >
                <p className="text-text-main dark:text-white text-lg italic mb-4">"Luthier Studio understands that a restoration isn't just about fixing wood; it's about preserving history. Their attention to varnish detail is unmatched."</p>
                <div className="flex items-center gap-4">
                  <div className="size-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">JC</div>
                  <div>
                    <p className="font-sans font-bold text-sm text-text-main dark:text-white">JAMES CHEN</p>
                    <p className="font-sans text-xs text-text-muted">Concert Soloist</p>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>

            {/* Quote 3 */}
            <ScrollReveal direction="right" delay={0.4}>
              <motion.div
                className="bg-white dark:bg-[#2a2218] p-8 rounded-xl border border-[#f3eee7] dark:border-white/5 shadow-sm hover:shadow-md transition-shadow"
                whileHover={{ x: 5 }}
              >
                <p className="text-text-main dark:text-white text-lg italic mb-4">"I trust no one else with my bow rehairing. The consistency and bite I get from their work allows me to play with full confidence."</p>
                <div className="flex items-center gap-4">
                  <div className="size-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">SM</div>
                  <div>
                    <p className="font-sans font-bold text-sm text-text-main dark:text-white">SARAH MILLER</p>
                    <p className="font-sans text-xs text-text-muted">Professor, Royal Academy of Music</p>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          </div>
        </div>
      </motion.div>
    </section>
  );
}