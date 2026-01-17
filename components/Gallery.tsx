import React, { useState } from 'react';

type Category = 'All' | 'Restoration' | 'Maintenance' | 'Bow Work';

const Gallery: React.FC = () => {
  const [filter, setFilter] = useState<Category>('All');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});

  const items = [
    {
      category: 'Restoration',
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB1lGOCHxTW7-KOZS2GIgiVf-TZVKyXI-4HrOiNBLq9yXBLGNmPP6MabyaOyieDCG98Ddvfck0rejNo2WMyc-Wwl2Dm_-F2UxLY9NgUKNEkqpPTssB0XCje9IIxxNh7etFgePRnHGfcaf0k3Ve_Mb4NX6-TFJnbXUCb-8KyNyETInb0_4QPnqMqAzodRUrAm6YpsC8wyqL0UMc_R8PJ46gx9QEbUPkYbsHwRwANd3GE1KSyKIkQ9NH84d67hfu83YjDxpsN016C5hw",
      tag: "1704 Stradivarius Model",
      title: "Complete Structural Rebuild",
      desc: "Recovering from extensive water damage involved removing the top plate and regraduating the bass bar.",
      date: "Oct 2023"
    },
    {
      category: 'Bow Work',
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCze8he1E6L02JpTyNYtDJ0G71b4Wxrus4wGcOsMPuKSnoBK4SELBvuyjUkq01syBZm94jfey42P0utMKdbrgwhJTfzSCET4bCnfv2rNVEm6PgH-q0F_E8BD77dJVgYRub2z2BrkdU-7Y0iIuiQT1NPY5-lfcCtHuKDaObDab83rfJj8AVURCXf0734P5kEjQjkbD_cUgYVWs7TExurTGwZ3j-VD8SQOetq5no68a0wYD7deWdlEUZvmbsi2ZT6vrt_XQNUuHorods",
      tag: "Late 19th Century French",
      title: "Tourte Copy Rehair",
      desc: "Using premium Mongolian stallion hair. The camber was heated and corrected to restore the stick's spring.",
      date: "Nov 2023"
    },
    {
      category: 'Maintenance',
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD1kR77H7hDa45IRm7761Rwt8fUekpLuwqrUrv4YeeixvG1ArcYw8Hhy8-gjQ0VLgPCgTudVoyZ6CgyCTwWH0r-NfsAeVdplp-ypads35eKCmhiz2C1Z4C_H0YqarZvQScOtqv8bISx9i-2dQoiO9v1w6ZtpB-LL9bn7NNPyw-JFbHn2WqQefxu2tnT3Jj5OIQtrp80uBz2Mfs1vQMSpeGSDPVZ4BtOSqePQ_aOc-5IN8sxZB4U5xgBQOref8WDXufgNTdXAcsd97M",
      tag: "Modern Italian Cello",
      title: "Soundpost Optimization",
      desc: "Micro-adjustments to the soundpost position significantly opened up the C-string response.",
      date: "Dec 2023"
    },
     {
      category: 'Restoration',
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDiqnK12N2O-0mXC_HGoDvTqBUH44mn-0o69LhsSjf7wts9gwyAbdAbjMM61p_yDfiGBlNs_MNE3Cx7yhifFQjx9EqSHo0nUV8tRfw1WKXLsksrrlUWSKu8SWGXP7Tk1V0VDKTCeLBPVLLCleNFkPh60eDvUGE2kEEpFb7TaaB3z4Na9c07QKK6JM0vKC06w-PG1tgDin1NYvc5BC7yyn6D6TjWNiDulTfAqroJEoxfgtJWs5IUQ7NQz3o3xvA0mWuNGvRoMbR-rp8",
      tag: "German Trade Violin",
      title: "Varnish Retouching",
      desc: "Seamless blending of new varnish into the original coat after repairing a lower bout crack.",
      date: "Jan 2024"
    }
  ];

  const filteredItems = filter === 'All' ? items : items.filter(i => i.category === filter);

  const handleImageLoad = (url: string) => {
    setLoadedImages(prev => ({...prev, [url]: true}));
  };

  return (
    <section id="gallery" className="py-20 bg-[#f3eee7] dark:bg-[#1a140d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-12">
          <span className="text-primary font-sans font-bold text-sm tracking-widest uppercase mb-3 block">Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-bold text-text-main dark:text-white mb-8 text-center">The Restoration Archive</h2>
          
          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 p-1 bg-white dark:bg-[#2a2218] rounded-full border border-black/5 dark:border-white/5 shadow-sm">
            {(['All', 'Restoration', 'Maintenance', 'Bow Work'] as Category[]).map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                  filter === cat 
                    ? 'bg-primary text-white shadow-md' 
                    : 'text-text-muted hover:text-primary hover:bg-primary/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <div 
              key={index} 
              onClick={() => setSelectedImage(index)}
              className="group relative cursor-pointer rounded-xl bg-white dark:bg-[#2a2218] shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              <div className="relative overflow-hidden aspect-[4/3] bg-gray-200 dark:bg-gray-800">
                <img 
                  src={item.image} 
                  alt={item.title}
                  loading="lazy"
                  onLoad={() => handleImageLoad(item.image)}
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105 ${
                    loadedImages[item.image] ? 'opacity-100 blur-0' : 'opacity-0 blur-sm'
                  }`}
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/20 backdrop-blur-md p-3 rounded-full text-white border border-white/30 transform scale-90 group-hover:scale-100 transition-transform duration-300">
                        <span className="material-symbols-outlined">visibility</span>
                    </div>
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
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/90 backdrop-blur-sm animate-fadeIn"
            onClick={() => setSelectedImage(null)}
          ></div>
          
          <div className="relative w-full max-w-5xl bg-white dark:bg-[#211a11] rounded-2xl overflow-hidden shadow-2xl animate-scaleIn flex flex-col md:flex-row">
            {/* Image Side */}
            <div className="md:w-2/3 h-[50vh] md:h-[70vh] bg-black relative group flex items-center justify-center">
              <img 
                src={filteredItems[selectedImage].image} 
                alt={filteredItems[selectedImage].title}
                className="w-full h-full object-contain animate-fadeIn"
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
              <button 
                 onClick={() => setSelectedImage(null)}
                 className="absolute top-6 right-6 text-text-muted hover:text-text-main dark:hover:text-white transition-colors hidden md:block"
              >
                <span className="material-symbols-outlined text-2xl">close</span>
              </button>

              <div className="mt-2 mb-auto">
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full mb-4 uppercase tracking-wide">
                    {filteredItems[selectedImage].category}
                </span>
                <h3 className="text-2xl font-bold text-text-main dark:text-white mb-2">
                    {filteredItems[selectedImage].tag}
                </h3>
                <h4 className="text-lg font-medium text-text-muted mb-6">
                    {filteredItems[selectedImage].title}
                </h4>
                
                <div className="space-y-6">
                    <div>
                        <h5 className="text-sm font-bold uppercase text-text-main dark:text-white mb-2 flex items-center gap-2">
                            <span className="material-symbols-outlined text-lg">description</span>
                            Restoration Notes
                        </h5>
                        <p className="font-sans text-text-muted leading-relaxed">
                            {filteredItems[selectedImage].desc}
                        </p>
                    </div>
                    
                    <div>
                        <h5 className="text-sm font-bold uppercase text-text-main dark:text-white mb-2 flex items-center gap-2">
                            <span className="material-symbols-outlined text-lg">calendar_month</span>
                            Completion Date
                        </h5>
                        <p className="font-sans text-text-muted">
                            {filteredItems[selectedImage].date}
                        </p>
                    </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-black/5 dark:border-white/5 flex gap-4">
                  <button className="flex-1 bg-primary text-white py-3 rounded-lg font-bold shadow-lg hover:shadow-glow hover:bg-primary/90 transition-all">
                    Inquire Similar
                  </button>
                  <button className="flex-1 border border-primary text-primary py-3 rounded-lg font-bold hover:bg-primary/5 transition-all">
                    Share
                  </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;