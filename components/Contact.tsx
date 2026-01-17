'use client';

import { motion } from 'framer-motion';
import { ScrollReveal, MagneticButton } from './animations';
import { useLanguage } from '@/lib/LanguageContext';

export default function Contact() {
  const { t, locale } = useLanguage();

  return (
    <section id="contact" className="py-20 bg-[#211a11] text-white relative overflow-hidden">
      {/* Abstract background pattern */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#e69019" d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,81.6,-46.6C91.4,-34.1,98.1,-19.2,95.8,-4.9C93.5,9.3,82.1,22.9,71.1,34.5C60.1,46.1,49.5,55.8,37.8,63.5C26,71.2,13,77,-0.7,78.2C-14.4,79.4,-28.8,76,-41.2,68.8C-53.6,61.6,-64,50.6,-71.8,37.8C-79.6,25,-84.8,10.4,-83.4,-3.6C-81.9,-17.6,-73.8,-31,-63.3,-41.8C-52.8,-52.6,-39.9,-60.8,-27.1,-68.8C-14.3,-76.8,0.7,-84.6,14.8,-83.5C28.9,-82.4,42,-72.4,44.7,-76.4Z" transform="translate(100 100)" />
        </svg>
      </div>

      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        key={locale}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">{t.contact.title}</h2>
            <p className="text-white/70 font-sans text-lg mb-12 max-w-md">{t.contact.description}</p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="size-10 rounded-full bg-white/10 flex items-center justify-center text-primary shrink-0">
                  <span className="material-symbols-outlined">location_on</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">{t.contact.mainStudio}</h4>
                  <p className="text-white/70 font-sans">247 Craftsman Avenue<br/>Jersey City, NJ 07302</p>
                  <p className="text-primary text-sm mt-1 font-sans">5 min from PATH Grove St</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="size-10 rounded-full bg-white/10 flex items-center justify-center text-primary shrink-0">
                  <span className="material-symbols-outlined">apartment</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">{t.contact.nycShowroom}</h4>
                  <p className="text-white/70 font-sans">128 Harmony Lane, Suite 4B<br/>New York, NY 10012</p>
                  <p className="text-primary text-sm mt-1 font-sans">{t.contact.byAppointment}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="size-10 rounded-full bg-white/10 flex items-center justify-center text-primary shrink-0">
                  <span className="material-symbols-outlined">mail</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">{t.contact.emailUs}</h4>
                  <p className="text-white/70 font-sans">info@luthierstudio.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="size-10 rounded-full bg-white/10 flex items-center justify-center text-primary shrink-0">
                  <span className="material-symbols-outlined">call</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">{t.contact.callUs}</h4>
                  <p className="text-white/70 font-sans">+1 (201) 555-0123</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl p-8 text-text-main shadow-2xl">
            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold uppercase tracking-wide text-text-muted">{t.contact.form.firstName}</label>
                  <input type="text" placeholder="Jane" className="w-full bg-[#f8f7f6] border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary font-sans transition-all" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold uppercase tracking-wide text-text-muted">{t.contact.form.lastName}</label>
                  <input type="text" placeholder="Doe" className="w-full bg-[#f8f7f6] border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary font-sans transition-all" />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold uppercase tracking-wide text-text-muted">{t.contact.form.email}</label>
                <input type="email" placeholder="jane@example.com" className="w-full bg-[#f8f7f6] border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary font-sans transition-all" />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold uppercase tracking-wide text-text-muted">{t.contact.form.instrumentType}</label>
                <select className="w-full bg-[#f8f7f6] border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary font-sans transition-all appearance-none cursor-pointer">
                  <option>{t.contact.services.restoration}</option>
                  <option>{t.contact.services.repair}</option>
                  <option>{t.contact.services.soundAdjustment}</option>
                  <option>{t.contact.services.bowRehairing}</option>
                  <option>{t.contact.services.varnish}</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold uppercase tracking-wide text-text-muted">{t.contact.form.message}</label>
                <textarea rows={4} placeholder={t.contact.form.messagePlaceholder} className="w-full bg-[#f8f7f6] border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary font-sans transition-all resize-none"></textarea>
              </div>

              <button type="submit" className="mt-2 w-full bg-primary hover:bg-primary/90 text-white text-base font-bold py-4 rounded-lg transition-colors shadow-lg hover:shadow-glow">
                {t.contact.form.submit}
              </button>
            </form>
          </div>
        </div>
      </motion.div>
    </section>
  );
}