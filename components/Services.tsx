'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ScrollReveal, StaggeredList, CounterAnimation, RevealOnScroll } from './animations';
import { useLanguage } from '@/lib/LanguageContext';

export default function Services() {
  const { t, locale } = useLanguage();
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      id: "repair",
      icon: "build",
      title: t.services.items.repair.title,
      subtitle: t.services.items.repair.subtitle,
      desc: t.services.items.repair.desc,
      tools: t.services.items.repair.tools,
      note: t.services.items.repair.note
    },
    {
      id: "varnish",
      icon: "brush",
      title: t.services.items.varnish.title,
      subtitle: t.services.items.varnish.subtitle,
      desc: t.services.items.varnish.desc,
      tools: t.services.items.varnish.tools,
      note: t.services.items.varnish.note
    },
    {
      id: "sound",
      icon: "graphic_eq",
      title: t.services.items.sound.title,
      subtitle: t.services.items.sound.subtitle,
      desc: t.services.items.sound.desc,
      tools: t.services.items.sound.tools,
      note: t.services.items.sound.note
    },
    {
      id: "bow",
      icon: "cut",
      title: t.services.items.bow.title,
      subtitle: t.services.items.bow.subtitle,
      desc: t.services.items.bow.desc,
      tools: t.services.items.bow.tools,
      note: t.services.items.bow.note
    }
  ];

  return (
    <section id="services" className="py-12 md:py-32 bg-background-light dark:bg-background-dark relative">
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        key={locale}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-16 gap-4 md:gap-6">
          <div className="max-w-xl">
            <h2 className="text-primary font-sans font-bold text-xs sm:text-sm tracking-widest uppercase mb-2 md:mb-3">{t.services.sectionTitle}</h2>
            <h3 className="text-2xl sm:text-4xl md:text-5xl font-bold text-text-main dark:text-white leading-tight">{t.services.mainTitle}</h3>
          </div>
          <div className="hidden md:block text-text-muted text-sm font-sans">
            {t.services.selectService}
          </div>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
          {/* Interactive List */}
          <div className="lg:w-1/3 flex flex-col gap-4">
            <StaggeredList staggerDelay={0.15} direction="left">
              {services.map((service, index) => (
                <button
                  key={index}
                  onClick={() => setActiveService(index)}
                  className={`group text-left p-6 rounded-xl border transition-all duration-300 relative overflow-hidden w-full ${
                    activeService === index
                      ? 'bg-primary text-white border-primary shadow-lg scale-105'
                      : 'bg-white dark:bg-[#2a2218] border-[#f3eee7] dark:border-white/5 text-text-main dark:text-white hover:border-primary/50'
                  }`}
                >
                  <div className="flex items-center gap-4 relative z-10">
                    <motion.div
                      className={`size-10 rounded-full flex items-center justify-center transition-colors ${
                        activeService === index ? 'bg-white/20 text-white' : 'bg-primary/10 text-primary'
                      }`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <span className="material-symbols-outlined">{service.icon}</span>
                    </motion.div>
                    <div>
                      <h4 className="font-bold text-lg">{service.title}</h4>
                      <p className={`text-xs font-sans mt-1 ${activeService === index ? 'text-white/80' : 'text-text-muted'}`}>
                        {service.subtitle}
                      </p>
                    </div>
                    {activeService === index && (
                      <motion.span
                        className="material-symbols-outlined ml-auto"
                        animate={{ x: [0, 5, 0] }}
                        transition={{ repeat: Infinity, duration: 1 }}
                      >
                        arrow_right
                      </motion.span>
                    )}
                  </div>
                </button>
              ))}
            </StaggeredList>
          </div>

          {/* Dynamic Content Panel */}
          <div className="lg:w-2/3 bg-white dark:bg-[#2a2218] rounded-2xl p-5 sm:p-8 md:p-12 border border-[#f3eee7] dark:border-white/5 shadow-2xl relative overflow-hidden flex flex-col justify-between min-h-[400px] md:min-h-[500px]">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
              <span className="material-symbols-outlined text-[300px] text-text-main dark:text-white">
                {services[activeService].icon}
              </span>
            </div>

            <div className="relative z-10 animate-fadeIn key={services[activeService].id}">
              <div className="flex items-center gap-3 text-primary mb-6">
                 <span className="h-px w-12 bg-primary"></span>
                 <span className="text-sm font-bold uppercase tracking-widest">{t.services.spotlight}</span>
              </div>

              <h3 className="text-xl sm:text-2xl md:text-4xl font-bold text-text-main dark:text-white mb-4 md:mb-6 leading-snug">
                {services[activeService].desc}
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mt-6 md:mt-12">
                <div>
                  <h5 className="font-bold text-text-main dark:text-white mb-4 flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">construction</span>
                    {t.services.tools}
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {services[activeService].tools.map((tool, i) => (
                      <span key={i} className="px-3 py-1 rounded-full bg-background-light dark:bg-white/5 text-text-muted text-sm border border-black/5 dark:border-white/10">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-primary/5 rounded-xl p-6 border border-primary/10">
                  <h5 className="font-bold text-primary mb-2 flex items-center gap-2">
                    <span className="material-symbols-outlined">edit_note</span>
                    {t.services.luthierNote}
                  </h5>
                  <p className="font-display italic text-text-main dark:text-white text-lg">
                    "{services[activeService].note}"
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-black/5 dark:border-white/5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 relative z-10">
               <div className="text-xs font-sans text-text-muted">
                 Service Code: {services[activeService].id.toUpperCase()}-0{activeService + 1}
               </div>
               <button className="text-primary font-bold text-xs sm:text-sm hover:underline flex items-center gap-1">
                 {t.services.learnMore} <span className="hidden sm:inline">{services[activeService].title}</span> <span className="material-symbols-outlined text-sm">open_in_new</span>
               </button>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}