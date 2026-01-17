import React, { useState } from 'react';

const Services: React.FC = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      id: "repair",
      icon: "build",
      title: "Structural Repair",
      subtitle: "The Foundation",
      desc: "Expert repair of cracks, rib fractures, and structural reinforcement. We use period-correct spruce and hide glue to ensure the instrument vibrates as one cohesive unit.",
      tools: ["Hide Glue", "Cleats", "Japanese Saws"],
      note: "A crack is not the end. With proper cleating, it can actually reinforce the structure against future stress."
    },
    {
      id: "varnish",
      icon: "brush",
      title: "Varnish Restoration",
      subtitle: "The Finish",
      desc: "Revitalizing the finish while preserving the original patina. We specialize in retouching that is invisible to the naked eye under UV light, preserving historical value.",
      tools: ["Sable Brushes", "Natural Resins", "UV Cabinet"],
      note: "We never strip original varnish. Our goal is conservation first, restoration second."
    },
    {
      id: "sound",
      icon: "graphic_eq",
      title: "Sound Adjustment",
      subtitle: "The Voice",
      desc: "Optimizing the bridge and soundpost placement. Millimeters matter; we adjust the soundpost to balance the tension between the top and back plates for maximum projection.",
      tools: ["Soundpost Setter", "Bridge Knives", "Calipers"],
      note: "The soundpost is the 'soul' of the violin. Moving it 0.5mm can change the entire character of the instrument."
    },
    {
      id: "bow",
      icon: "cut",
      title: "Bow Rehairing",
      subtitle: "The Breath",
      desc: "Premium Mongolian horsehair replacement. We sort hair individually to ensure consistent thickness, resulting in a smooth, grip-rich draw across the strings.",
      tools: ["Mongolian Hair", "Silver Wire", "Rosin"],
      note: "A fresh rehair restores the dynamic range often lost with old, slick hair."
    }
  ];

  return (
    <section id="services" className="py-20 md:py-32 bg-background-light dark:bg-background-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-primary font-sans font-bold text-sm tracking-widest uppercase mb-3">Our Expertise</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-text-main dark:text-white leading-tight">The Luthier's Workbench</h3>
          </div>
          <div className="hidden md:block text-text-muted text-sm font-sans">
            Select a service to view technique details
          </div>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
          {/* Interactive List */}
          <div className="lg:w-1/3 flex flex-col gap-4">
            {services.map((service, index) => (
              <button
                key={index}
                onClick={() => setActiveService(index)}
                className={`group text-left p-6 rounded-xl border transition-all duration-300 relative overflow-hidden ${
                  activeService === index 
                    ? 'bg-primary text-white border-primary shadow-lg scale-105' 
                    : 'bg-white dark:bg-[#2a2218] border-[#f3eee7] dark:border-white/5 text-text-main dark:text-white hover:border-primary/50'
                }`}
              >
                <div className="flex items-center gap-4 relative z-10">
                  <div className={`size-10 rounded-full flex items-center justify-center transition-colors ${
                    activeService === index ? 'bg-white/20 text-white' : 'bg-primary/10 text-primary'
                  }`}>
                    <span className="material-symbols-outlined">{service.icon}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">{service.title}</h4>
                    <p className={`text-xs font-sans mt-1 ${activeService === index ? 'text-white/80' : 'text-text-muted'}`}>
                      {service.subtitle}
                    </p>
                  </div>
                  {activeService === index && (
                    <span className="material-symbols-outlined ml-auto animate-pulse">arrow_right</span>
                  )}
                </div>
              </button>
            ))}
          </div>

          {/* Dynamic Content Panel */}
          <div className="lg:w-2/3 bg-white dark:bg-[#2a2218] rounded-2xl p-8 md:p-12 border border-[#f3eee7] dark:border-white/5 shadow-2xl relative overflow-hidden flex flex-col justify-between min-h-[500px]">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
              <span className="material-symbols-outlined text-[300px] text-text-main dark:text-white">
                {services[activeService].icon}
              </span>
            </div>

            <div className="relative z-10 animate-fadeIn key={services[activeService].id}">
              <div className="flex items-center gap-3 text-primary mb-6">
                 <span className="h-px w-12 bg-primary"></span>
                 <span className="text-sm font-bold uppercase tracking-widest">Technique Spotlight</span>
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold text-text-main dark:text-white mb-6">
                {services[activeService].desc}
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                <div>
                  <h5 className="font-bold text-text-main dark:text-white mb-4 flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">construction</span>
                    Tools of the Trade
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
                    Luthier's Note
                  </h5>
                  <p className="font-display italic text-text-main dark:text-white text-lg">
                    "{services[activeService].note}"
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-black/5 dark:border-white/5 flex justify-between items-center relative z-10">
               <div className="text-xs font-sans text-text-muted">
                 Service Code: {services[activeService].id.toUpperCase()}-0{activeService + 1}
               </div>
               <button className="text-primary font-bold text-sm hover:underline flex items-center gap-1">
                 Learn more about {services[activeService].title} <span className="material-symbols-outlined text-sm">open_in_new</span>
               </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;