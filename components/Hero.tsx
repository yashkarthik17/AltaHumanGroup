
import React, { useEffect, useRef, useState } from 'react';
import { Logo } from './Logo';

// Restoring the local video file as requested
const STATIC_VIDEO_SOURCES = [
  "Videos/Generated File January 17, 2026 - 11_27PM.mp4"
];

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLSpanElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const bottomBarRef = useRef<HTMLDivElement>(null);

  const [initialLogoPos, setInitialLogoPos] = useState<{x: number, y: number} | null>(null);
  
  // Video Management State
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoSources = STATIC_VIDEO_SOURCES;

  // Rotation Logic (kept in case more static videos are added later)
  useEffect(() => {
    if (videoSources.length <= 1) return;

    const interval = setInterval(() => {
        setCurrentVideoIndex(prev => (prev + 1) % videoSources.length);
    }, 8000); 
    return () => clearInterval(interval);
  }, [videoSources.length]); 

  // Standard Scroll Animation Logic
  useEffect(() => {
    const measureLogo = () => {
      if (logoRef.current) {
        const rect = logoRef.current.getBoundingClientRect();
        setInitialLogoPos({
          x: rect.left + rect.width / 2,
          y: rect.top + rect.height / 2
        });
      }
    };

    const timer = setTimeout(measureLogo, 200);
    window.addEventListener('resize', measureLogo);
    return () => {
      window.removeEventListener('resize', measureLogo);
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !logoRef.current || !initialLogoPos) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalScrollHeight = containerRef.current.offsetHeight - windowHeight;
      
      if (totalScrollHeight <= 0) return;

      const scrollY = -rect.top; 
      const progress = Math.max(0, Math.min(scrollY / totalScrollHeight, 1));
      
      requestAnimationFrame(() => {
        // Slow down text fade
        const textFadeOutPoint = 0.8;
        const textOpacity = Math.max(0, 1 - (progress / textFadeOutPoint));
        
        if (bottomBarRef.current) bottomBarRef.current.style.opacity = `${textOpacity}`;
        
        const textElements = document.querySelectorAll('.hero-text-fade');
        textElements.forEach((el) => {
          (el as HTMLElement).style.opacity = `${textOpacity}`;
        });

        if (logoRef.current) {
           const centerScreenX = window.innerWidth / 2;
           const centerScreenY = window.innerHeight / 2;
           const deltaX = centerScreenX - initialLogoPos.x;
           const deltaY = centerScreenY - initialLogoPos.y;
           
           // Drastically reduced scale and rotation for smoother/slower feel
           const scale = 1 + (progress * 30); 
           const x = deltaX * progress;
           const y = deltaY * progress;
           const rotation = progress * 45; 

           logoRef.current.style.transform = `translate3d(${x}px, ${y}px, 0) scale(${scale}) rotate(${rotation}deg)`;
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [initialLogoPos]);

  const scrollToContent = () => {
    if (containerRef.current) {
        const height = containerRef.current.offsetHeight;
        window.scrollTo({ top: height, behavior: 'smooth' });
    }
  };

  const onVideoError = (e: React.SyntheticEvent<HTMLVideoElement, Event>, src: string) => {
    console.warn(`Video load error for URL: ${src}.`);
  };

  return (
    <div ref={containerRef} className="relative h-[120vh] w-full bg-black overflow-visible">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col items-center justify-center">
        
        {/* Video Background Container */}
        <div ref={bgRef} className="absolute inset-0 z-0 bg-black">
           
           {/* Video Rendering */}
           {videoSources.map((src, index) => (
             <div 
                key={src} 
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentVideoIndex ? 'opacity-100' : 'opacity-0'}`}
             >
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover scale-105 opacity-50" 
                    onError={(e) => onVideoError(e, src)}
                >
                    <source src={src} type="video/mp4" />
                </video>
             </div>
           ))}
           
           {/* Fallback if no videos */}
           {videoSources.length === 0 && (
             <div className="absolute inset-0 bg-zinc-900 flex items-center justify-center overflow-hidden">
                <img 
                    src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=1920&auto=format&fit=crop" 
                    alt="Fallback" 
                    className="absolute inset-0 w-full h-full object-cover opacity-50"
                />
                <span className="relative z-10 text-white/20 font-serif italic text-2xl drop-shadow-md">Visuals Loading...</span>
             </div>
           )}

          {/* Gradients for text readability - slightly reduced for testing visibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40 z-10 pointer-events-none"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 z-10 pointer-events-none"></div>
        </div>

        {/* Content Container */}
        <div className="relative z-20 w-full max-w-7xl px-6 md:px-8 flex flex-col md:flex-row items-center justify-between text-white pb-12 md:pb-0">
          <div className="text-center md:text-left space-y-6 max-w-xl hero-text-fade">
             <div className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-2 animate-fade-in-up">
                <span className="text-[9px] md:text-[10px] font-bold tracking-[0.3em] uppercase">The Perimeter</span>
             </div>
             <h1 className="text-5xl md:text-8xl font-serif font-bold italic tracking-tighter leading-[0.9] mb-4">
               Solidarity. <br/> Without <br/> Exception.
             </h1>
             <p className="text-lg md:text-2xl text-gray-300 font-light tracking-wide max-w-md mx-auto md:mx-0">
               A visual declaration of protection for the African American community.
             </p>
             <div className="pt-2">
                <span className="text-2xl md:text-4xl font-serif font-bold italic text-white/90">#BlackCircle</span>
             </div>
          </div>

          <div className="mt-12 md:mt-0 flex flex-col items-center">
            <span ref={logoRef} className="block transition-transform duration-75 will-change-transform drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                <Logo className="w-48 h-48 md:w-72 md:h-72" color="white" />
            </span>
            <p className="mt-8 text-[9px] md:text-[10px] font-bold tracking-[0.4em] uppercase text-gray-400 hero-text-fade animate-pulse">
               Scroll to Enter
            </p>
          </div>
        </div>

        {/* Floating Bottom Bar */}
        <div ref={bottomBarRef} className="absolute bottom-8 left-0 w-full px-6 md:px-12 flex justify-between items-end z-20 hero-text-fade pointer-events-none">
            <div className="hidden lg:block pointer-events-auto">
                 <div className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-500 mb-2">Initiative</div>
                 <div className="text-sm font-serif italic text-white">Join The Circle Campaign</div>
            </div>
            
            <button 
                onClick={scrollToContent}
                className="group flex flex-col items-center gap-4 text-white hover:opacity-70 transition-opacity pointer-events-auto mx-auto lg:mx-0"
            >
                <div className="w-px h-12 md:h-16 bg-white/20 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full bg-white animate-scroll-indicator"></div>
                </div>
                <div className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest mt-2">Explore</div>
            </button>

            <div className="hidden lg:block text-right pointer-events-auto">
                 <div className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-500 mb-2">Social</div>
                 <div className="flex gap-6 text-white/50">
                    <span className="text-xs hover:text-white cursor-pointer transition-colors uppercase tracking-[0.2em] font-bold">IG</span>
                    <span className="text-xs hover:text-white cursor-pointer transition-colors uppercase tracking-[0.2em] font-bold">X</span>
                 </div>
            </div>
        </div>
      </div>
    </div>
  );
};
