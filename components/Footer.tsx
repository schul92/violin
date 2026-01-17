import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-background-light dark:bg-[#1a140d] border-t border-[#f3eee7] dark:border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-2xl">music_note</span>
            <span className="text-lg font-bold text-text-main dark:text-white">Luthier Studio</span>
          </div>
          
          <div className="flex gap-8 text-sm font-sans text-text-muted">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors">Sitemap</a>
          </div>

          <div className="text-sm font-sans text-text-muted">
            &copy; 2024 Luthier Studio. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;