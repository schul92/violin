import React, { useState, useRef, useCallback, useEffect } from 'react';

const Hero: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Audio Refs
  const audioContextRef = useRef<AudioContext | null>(null);
  const oscillatorRef = useRef<OscillatorNode | null>(null);
  const filterRef = useRef<BiquadFilterNode | null>(null);
  const gainRef = useRef<GainNode | null>(null);
  const lfoRef = useRef<OscillatorNode | null>(null); // For vibrato

  const initAudio = useCallback(() => {
    if (audioContextRef.current) return;

    const Ctx = window.AudioContext || (window as any).webkitAudioContext;
    const ctx = new Ctx();
    audioContextRef.current = ctx;

    // Create nodes
    const osc = ctx.createOscillator();
    const filter = ctx.createBiquadFilter();
    const gain = ctx.createGain();
    const lfo = ctx.createOscillator();
    const lfoGain = ctx.createGain();

    // Configuration
    osc.type = 'sawtooth'; // Richer, string-like sound
    osc.frequency.value = 196.00; // G3 (Violin G string)
    
    // Lowpass filter to simulate dull vs bright
    filter.type = 'lowpass';
    filter.Q.value = 5; // Resonance

    // Vibrato
    lfo.frequency.value = 6; // 6Hz vibrato
    lfoGain.gain.value = 3; // Depth
    
    // Connect graph
    lfo.connect(lfoGain);
    lfoGain.connect(osc.frequency);
    osc.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);

    // Store refs
    oscillatorRef.current = osc;
    filterRef.current = filter;
    gainRef.current = gain;
    lfoRef.current = lfo;

    // Start oscillators (muted by gain initially)
    osc.start();
    lfo.start();
    gain.gain.value = 0;
  }, []);

  const toggleSound = () => {
    if (!audioContextRef.current) initAudio();
    
    if (audioContextRef.current?.state === 'suspended') {
      audioContextRef.current.resume();
    }

    const newIsPlaying = !isPlaying;
    setIsPlaying(newIsPlaying);

    if (gainRef.current) {
      // Smooth fade in/out
      const now = audioContextRef.current!.currentTime;
      gainRef.current.gain.cancelScheduledValues(now);
      gainRef.current.gain.setValueAtTime(gainRef.current.gain.value, now);
      
      if (newIsPlaying) {
        gainRef.current.gain.linearRampToValueAtTime(0.3, now + 0.1);
      } else {
        gainRef.current.gain.linearRampToValueAtTime(0, now + 0.1);
      }
    }
  };

  // Update audio based on slider position
  useEffect(() => {
    if (filterRef.current && audioContextRef.current) {
      // Map 0-100 to Frequency (200Hz dull -> 8000Hz bright)
      const minFreq = 200;
      const maxFreq = 8000;
      // Exponential mapping feels more natural for frequency
      const frequency = minFreq * Math.pow(maxFreq / minFreq, sliderPosition / 100);
      
      const now = audioContextRef.current.currentTime;
      filterRef.current.frequency.setTargetAtTime(frequency, now, 0.1);
    }
  }, [sliderPosition]);

  const handleMove = useCallback((clientX: number) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const width = rect.width;
      const percentage = Math.max(0, Math.min(100, (x / width) * 100));
      setSliderPosition(percentage);
    }
  }, []);

  const onMouseDown = () => setIsDragging(true);
  const onMouseUp = () => setIsDragging(false);
  
  const onMouseMove = (e: React.MouseEvent) => {
    if (isDragging) handleMove(e.clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        handleMove(e.clientX);
      }
    };
    const handleGlobalMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      window.addEventListener('mousemove', handleGlobalMouseMove);
      window.addEventListener('mouseup', handleGlobalMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleGlobalMouseMove);
      window.removeEventListener('mouseup', handleGlobalMouseUp);
    };
  }, [isDragging, handleMove]);

  return (
    <>
      <header 
        ref={containerRef}
        className="relative w-full h-[85vh] min-h-[600px] flex flex-col justify-end bg-[#211a11] overflow-hidden group select-none touch-none"
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onTouchStart={onMouseDown}
        onTouchMove={onTouchMove}
        onTouchEnd={onMouseUp}
      >
        {/* Comparison Slider Implementation */}
        <div className="absolute inset-0 w-full h-full pointer-events-none">
          {/* 'After' Image (Background) */}
          <div 
            className="absolute inset-0 bg-cover bg-center" 
            style={{ 
              backgroundImage: "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.6)), url('https://lh3.googleusercontent.com/aida-public/AB6AXuB98unIzm8pi_CI9kBfZUrWBIb8mdPK2Qt06va-AQSpz8Uw6yYQfaC8xPxlLc7meafV-ExK8c_K9djHyfWHHqY3KTCI_fyQZKqeealwRTQks6N7agq4wuEId1G-fRjtGCh6seuH5KnaE1JGabvVUmMDL400VNjC4w-6zLQi0shyDgb_0e-4jSo8Sm2Y0MkPtwYl791qyiJ-GsVrT3r9cZ8hM5zOIhIY9xBGZK4O8feOrx6jWTpolclH35V9tMql4XQ35JZWpvtzigc')"
            }}
          ></div>

          {/* 'Before' Image (Overlay with Clip) */}
          <div 
            className="absolute inset-0 w-full h-full bg-cover bg-center border-r border-white/20"
            style={{ 
              backgroundImage: "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.6)), url('https://lh3.googleusercontent.com/aida-public/AB6AXuDtWWHAL6Q5Ttr6JK8zVBRbpQkpAZ9RhH5-H1cO0ax6qInVvFZudECqc8tTqlyh7VJizPzKRRZr_kcnKJ_xceM3wTrSHSW9NzqF8OsObr3cPiqTjixJL_aGxKh-HDGL3rQZVDopMgs4Q_KUo_6HniCbBITmfUlxSZNrCuBrr8UJCUkc6yo5kOAINZziBnKBxiFUN9plLxXFk54fvjFovRnLo-VaM4iVmvVvwvgvs4HLCmxATP-UtKZ50TM6in0X7jZz2cDNRqqwgP8')",
              filter: "sepia(0.8) brightness(0.7) contrast(1.2)",
              clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`
            }}
          >
            {/* Label for Before side */}
            <div className="absolute top-1/2 left-[25%] -translate-x-1/2 -translate-y-1/2 text-white/40 font-bold text-6xl tracking-widest pointer-events-none mix-blend-overlay">BEFORE</div>
          </div>

          {/* Drag Handle Line */}
          <div 
            className="absolute top-0 bottom-0 w-0.5 bg-white/50 shadow-[0_0_10px_rgba(0,0,0,0.5)] z-10 flex flex-col justify-center items-center pointer-events-auto cursor-ew-resize hover:scale-110 transition-transform"
            style={{ left: `${sliderPosition}%` }}
          >
            {/* Drag Button */}
            <div className={`size-12 rounded-full flex items-center justify-center shadow-glow transition-all duration-300 ${isPlaying ? 'bg-white scale-110' : 'bg-primary'}`}>
              <span className={`material-symbols-outlined transition-colors ${isPlaying ? 'text-primary' : 'text-[#1b150e]'}`}>
                {isPlaying ? 'volume_up' : 'code'}
              </span>
            </div>
          </div>

          {/* Label for After side */}
          <div className="absolute top-1/2 left-[75%] -translate-x-1/2 -translate-y-1/2 text-primary/40 font-bold text-6xl tracking-widest pointer-events-none mix-blend-screen">AFTER</div>

          {/* Interactive Sound Control */}
          <div className="absolute bottom-32 right-8 z-40 pointer-events-auto">
             <button 
               onClick={(e) => { e.stopPropagation(); toggleSound(); }}
               className={`flex items-center gap-3 px-4 py-2 rounded-full backdrop-blur-md border transition-all duration-300 ${isPlaying ? 'bg-primary/90 border-primary text-white shadow-[0_0_20px_rgba(230,144,25,0.6)]' : 'bg-black/40 border-white/20 text-white/80 hover:bg-black/60'}`}
             >
                <div className={`size-2 rounded-full ${isPlaying ? 'bg-white animate-pulse' : 'bg-red-500'}`}></div>
                <span className="font-bold text-sm tracking-wide">{isPlaying ? 'AUDIO SIMULATION ACTIVE' : 'TEST SOUND RESTORATION'}</span>
                <span className="material-symbols-outlined text-lg">{isPlaying ? 'graphic_eq' : 'play_arrow'}</span>
             </button>
             {isPlaying && (
                <div className="absolute -top-12 right-0 text-white/80 text-xs font-sans bg-black/60 px-3 py-1 rounded backdrop-blur-sm">
                  Drag slider to filter tone
                </div>
             )}
          </div>

          {/* Hotspots */}
          <div className={`absolute top-[30%] left-[35%] z-20 group/hotspot pointer-events-auto ${sliderPosition < 35 ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}>
            <div className="relative size-6 rounded-full bg-white/20 border-2 border-white cursor-pointer hotspot-ring flex items-center justify-center hover:bg-white transition-colors">
              <span className="material-symbols-outlined text-[10px] text-transparent group-hover/hotspot:text-black">add</span>
            </div>
            <div className="absolute left-8 top-0 w-48 bg-white/90 backdrop-blur-md p-3 rounded-lg shadow-xl opacity-0 group-hover/hotspot:opacity-100 transition-opacity pointer-events-none transform translate-x-2 group-hover/hotspot:translate-x-0">
              <h4 className="font-bold text-xs uppercase tracking-wider text-primary mb-1">Structural Assessment</h4>
              <p className="text-xs text-text-main font-sans">Identifying micro-fractures in the aged spruce top.</p>
            </div>
          </div>

          <div className={`absolute top-[60%] left-[60%] z-20 group/hotspot pointer-events-auto ${sliderPosition < 60 ? 'hidden' : 'block'}`}>
            <div className="relative size-6 rounded-full bg-primary/20 border-2 border-primary cursor-pointer hotspot-ring flex items-center justify-center hover:bg-primary transition-colors">
              <span className="material-symbols-outlined text-[10px] text-transparent group-hover/hotspot:text-black">check</span>
            </div>
            <div className="absolute right-8 top-0 w-48 bg-white/90 backdrop-blur-md p-3 rounded-lg shadow-xl opacity-0 group-hover/hotspot:opacity-100 transition-opacity pointer-events-none transform -translate-x-2 group-hover/hotspot:translate-x-0 text-right">
              <h4 className="font-bold text-xs uppercase tracking-wider text-primary mb-1">French Polish</h4>
              <p className="text-xs text-text-main font-sans">Traditional shellac application for superior resonance.</p>
            </div>
          </div>
        </div>

        {/* Hero Content Overlay */}
        <div className="relative z-30 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 pt-32 pointer-events-none">
          <div className="max-w-2xl pointer-events-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/30 backdrop-blur-sm border border-white/10 text-primary mb-6">
              <span className="material-symbols-outlined text-sm">handyman</span>
              <span className="text-sm font-sans font-medium text-white tracking-wide">Master Luthier Services</span>
            </div>
            <h1 className="text-white text-5xl md:text-7xl font-bold leading-tight tracking-tight mb-6 drop-shadow-lg">
              Reviving the <span className="italic text-primary font-display">Soul</span> of Your Instrument
            </h1>
            <p className="text-white/80 text-lg md:text-xl font-sans font-light leading-relaxed mb-8 max-w-xl drop-shadow-md">
              Blend centuries-old Cremonese tradition with modern precision. Toggle the sound test to hear the difference restoration makes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-[#1b150e] px-8 py-4 rounded-lg text-base font-bold transition-all shadow-glow group">
                <span>Book a Consultation</span>
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </button>
              <button className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-lg text-base font-medium transition-all">
                <span className="material-symbols-outlined">play_circle</span>
                <span>Watch Process</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Logo Strip */}
      <div className="w-full bg-white dark:bg-[#1a140d] border-b border-[#f3eee7] dark:border-white/5 py-8">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          <div className="h-8 flex items-center gap-2 font-bold text-xl text-text-main dark:text-white font-sans"><span className="material-symbols-outlined">piano</span> Philharmonic</div>
          <div className="h-8 flex items-center gap-2 font-bold text-xl text-text-main dark:text-white font-sans"><span className="material-symbols-outlined">queue_music</span> Conservatory</div>
          <div className="h-8 flex items-center gap-2 font-bold text-xl text-text-main dark:text-white font-sans"><span className="material-symbols-outlined">music_note</span> Royal Opera</div>
          <div className="h-8 flex items-center gap-2 font-bold text-xl text-text-main dark:text-white font-sans"><span className="material-symbols-outlined">library_music</span> Symphony</div>
        </div>
      </div>
    </>
  );
};

export default Hero;