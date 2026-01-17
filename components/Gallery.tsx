'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TiltCard, ScrollReveal } from './animations';
import { useLanguage } from '@/lib/LanguageContext';

type Category = 'All' | 'Restoration' | 'Maintenance' | 'Bow Work';

const items = [
  {
    category: 'Restoration' as const,
    image: "https://images.pexels.com/photos/34221/violin-musical-instrument-music-sound.jpg?auto=compress&cs=tinysrgb&w=800",
    tag: "1704 Stradivarius Model",
    title: "Complete Structural Rebuild",
    desc: "Recovering from extensive water damage involved removing the top plate and regraduating the bass bar.",
    date: "Oct 2023"
  },
  {
    category: 'Bow Work' as const,
    image: "https://images.pexels.com/photos/8044157/pexels-photo-8044157.jpeg?auto=compress&cs=tinysrgb&w=800",
    tag: "Late 19th Century French Bow",
    title: "Tourte Copy Rehair",
    desc: "Using premium Mongolian stallion hair. The camber was heated and corrected to restore the stick's spring.",
    date: "Nov 2023"
  },
  {
    category: 'Maintenance' as const,
    image: "https://images.pexels.com/photos/7095517/pexels-photo-7095517.jpeg?auto=compress&cs=tinysrgb&w=800",
    tag: "Italian Violin",
    title: "Soundpost Optimization",
    desc: "Micro-adjustments to the soundpost position significantly opened up the G-string response.",
    date: "Dec 2023"
  },
  {
    category: 'Restoration' as const,
    image: "https://images.pexels.com/photos/7095514/pexels-photo-7095514.jpeg?auto=compress&cs=tinysrgb&w=800",
    tag: "German Trade Violin",
    title: "Varnish Retouching",
    desc: "Seamless blending of new varnish into the original coat after repairing a lower bout crack.",
    date: "Jan 2024"
  }
];

export default function Gallery() {
  const { t, locale } = useLanguage();
  const [filter, setFilter] = useState<Category>('All');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});

  const filteredItems = filter === 'All' ? items : items.filter(i => i.category === filter);

  const handleImageLoad = (url: string) => {
    setLoadedImages(prev => ({ ...prev, [url]: true }));
  };

  const categoryLabels: Record<Category, string> = {
    'All': t.gallery.all,
    'Restoration': t.gallery.restoration,
    'Maintenance': t.gallery.maintenance,
    'Bow Work': t.gallery.bowWork,
  };

  return (
    <section id="gallery" className="py-20 bg-[#f3eee7] dark:bg-[#1a140d]">
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        key={locale}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <ScrollReveal>
          <div className="flex flex-col items-center mb-12">
            <span className="text-primary font-sans font-bold text-sm tracking-widest uppercase mb-3 block">{t.gallery.sectionTitle}</span>
            <h2 className="text-4xl md:text-5xl font-bold text-text-main dark:text-white mb-8 text-center">{t.gallery.mainTitle}</h2>

            {/* Filter Tabs */}
            <div className="flex flex-wrap justify-center gap-2 p-1 bg-white dark:bg-[#2a2218] rounded-full border border-black/5 dark:border-white/5 shadow-sm">
              {(['All', 'Restoration', 'Maintenance', 'Bow Work'] as Category[]).map((cat) => (
                <motion.button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${filter === cat
                    ? 'bg-primary text-white shadow-md'
                    : 'text-text-muted hover:text-primary hover:bg-primary/5'
                    }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {categoryLabels[cat]}
                </motion.button>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.tag}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <TiltCard
                  className="cursor-pointer"
                  tiltAmount={10}
                  scale={1.02}
                >
                  <div
                    onClick={() => setSelectedImage(index)}
                    className="group relative rounded-xl bg-white dark:bg-[#2a2218] shadow-sm overflow-hidden"
                  >
                    <div className="relative overflow-hidden aspect-[4/3] bg-gray-200 dark:bg-gray-800">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <motion.div
                          className="bg-white/20 backdrop-blur-md p-3 rounded-full text-white border border-white/30"
                          initial={{ scale: 0.8 }}
                          whileHover={{ scale: 1.1 }}
                        >
                          <span className="material-symbols-outlined">visibility</span>
                        </motion.div>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <span className="text-xs font-bold text-primary uppercase tracking-wider">{item.category}</span>
                        <span className="text-xs font-sans text-text-muted">{item.date}</span>
                      </div>
                      <h3 className="text-xl font-bold text-text-main dark:text-white mb-2">{item.tag}</h3>
                      <p className="text-sm font-sans text-text-muted line-clamp-2">{item.title}</p>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </motion.div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4"
          >
            <motion.div
              className="absolute inset-0 bg-black/90 backdrop-blur-sm"
              onClick={() => setSelectedImage(null)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            <motion.div
              className="relative w-full max-w-5xl bg-white dark:bg-[#211a11] rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row"
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            >
              {/* Image Side */}
              <div className="md:w-2/3 h-[50vh] md:h-[70vh] bg-black relative group flex items-center justify-center">
                <motion.img
                  src={filteredItems[selectedImage].image}
                  alt={filteredItems[selectedImage].title}
                  className="w-full h-full object-contain"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                />
                <button
                  onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }}
                  className="absolute top-4 left-4 bg-black/50 hover:bg-black/80 text-white p-2 rounded-full md:hidden"
                >
                  <span className="material-symbols-outlined">close</span>
                </button>
              </div>

              {/* Content Side */}
              <div className="md:w-1/3 p-8 flex flex-col relative">
                <motion.button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-6 right-6 text-text-muted hover:text-text-main dark:hover:text-white transition-colors hidden md:block"
                  whileHover={{ rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="material-symbols-outlined text-2xl">close</span>
                </motion.button>

                <div className="mt-2 mb-auto">
                  <motion.span
                    className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full mb-4 uppercase tracking-wide"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    {filteredItems[selectedImage].category}
                  </motion.span>
                  <motion.h3
                    className="text-2xl font-bold text-text-main dark:text-white mb-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    {filteredItems[selectedImage].tag}
                  </motion.h3>
                  <motion.h4
                    className="text-lg font-medium text-text-muted mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    {filteredItems[selectedImage].title}
                  </motion.h4>

                  <motion.div
                    className="space-y-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                  >
                    <div>
                      <h5 className="text-sm font-bold uppercase text-text-main dark:text-white mb-2 flex items-center gap-2">
                        <span className="material-symbols-outlined text-lg">description</span>
                        {t.gallery.restorationNotes}
                      </h5>
                      <p className="font-sans text-text-muted leading-relaxed">
                        {filteredItems[selectedImage].desc}
                      </p>
                    </div>

                    <div>
                      <h5 className="text-sm font-bold uppercase text-text-main dark:text-white mb-2 flex items-center gap-2">
                        <span className="material-symbols-outlined text-lg">calendar_month</span>
                        {t.gallery.completionDate}
                      </h5>
                      <p className="font-sans text-text-muted">
                        {filteredItems[selectedImage].date}
                      </p>
                    </div>
                  </motion.div>
                </div>

                <motion.div
                  className="mt-8 pt-6 border-t border-black/5 dark:border-white/5 flex gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <motion.button
                    className="flex-1 bg-primary text-white py-3 rounded-lg font-bold shadow-lg hover:shadow-glow transition-shadow"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {t.gallery.inquireSimilar}
                  </motion.button>
                  <motion.button
                    className="flex-1 border border-primary text-primary py-3 rounded-lg font-bold hover:bg-primary/5 transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {t.gallery.share}
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
