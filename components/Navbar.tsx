import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-[#f3eee7] bg-background-light/95 backdrop-blur-sm dark:bg-background-dark/95 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="size-8 text-primary flex items-center justify-center">
              <span className="material-symbols-outlined text-3xl">music_note</span>
            </div>
            <h2 className="text-text-main dark:text-white text-2xl font-bold tracking-tight">Luthier Studio</h2>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a className="text-text-main dark:text-white/90 text-base font-medium hover:text-primary transition-colors" href="#services">Services</a>
            <a className="text-text-main dark:text-white/90 text-base font-medium hover:text-primary transition-colors" href="#gallery">Gallery</a>
            <a className="text-text-main dark:text-white/90 text-base font-medium hover:text-primary transition-colors" href="#testimonials">Testimonials</a>
            <a className="text-text-main dark:text-white/90 text-base font-medium hover:text-primary transition-colors" href="#contact">Contact</a>
          </div>

          {/* CTA */}
          <div className="flex items-center">
            <button className="bg-primary hover:bg-primary/90 text-white dark:text-[#1b150e] px-6 py-2.5 rounded-lg text-sm font-bold tracking-wide transition-all shadow-lg hover:shadow-glow">
              Start Restoration
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;