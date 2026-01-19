
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
  const contentWrapperRef = useRef<HTMLDivElement>(null);

  const [initialLogoPos, setInitialLogoPos] = useState<{x: number, y: number} | null>(null);
  
  // Video Management State
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoSources = STATIC_VIDEO_SOURCES;

  // Rotation Logic
  useEffect(() => {
    if (videoSources.length <= 1) return;
    const interval = setInterval(() => {
        setCurrentVideoIndex(prev => (prev + 1) % videoSources.length);
    }, 8000); 
    return () => clearInterval(interval);
  }, [videoSources.length]); 

  // Logo Position Measurement
  useEffect(() => {
    const measureLogo = () => {
      if (logoRef.current) {
        const rect = logoRef.current.getBoundingClientRect();
        // Store the initial center position of the logo relative to the viewport
        // We only want to capture this when scroll is at 0 ideally, but sticky handling makes it tricky.
        // Best approach: Measure relative to the sticky container if possible, or lock it.
        // For now, simple bounding rect works if we assume top of page.
        setInitialLogoPos({
          x: rect.left + rect.width / 2,
          y: rect.top + rect.height / 2
        });
      }
    };

    // Delay slightly to ensure layout stability
    const timer = setTimeout(measureLogo, 100);
    window.addEventListener('resize', measureLogo);
    return () => {
      window.removeEventListener('resize', measureLogo);
      clearTimeout(timer);
    };
  }, []);

  // Scroll Animation Logic
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !logoRef.current || !initialLogoPos) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const windowWidth = window.innerWidth;
      
      // Calculate scroll progress
      // totalScrollHeight is how much we can scroll inside this component
      const totalScrollDistance = containerRef.current.offsetHeight - windowHeight;
      
      if (totalScrollDistance <= 0) return;

      // rect.top is negative as we scroll down
      const scrolled = -rect.top;
      const progress = Math.max(0, Math.min(scrolled / totalScrollDistance, 1));
      
      requestAnimationFrame(() => {
        // 1. Fade out text elements
        const textFadeOutPoint = 0.4; // Fade out faster so logo can take over
        const textOpacity = Math.max(0, 1 - (progress / textFadeOutPoint));
        
        if (bottomBarRef.current) bottomBarRef.current.style.opacity = `${textOpacity}`;
        if (contentWrapperRef.current) {
            // Fade out the text content wrapper
            const textNodes = contentWrapperRef.current.querySelectorAll('.hero-text-fade');
            textNodes.forEach(node => {
                (node as HTMLElement).style.opacity = `${textOpacity}`;
            });
        }

        // 2. Logo Animation
        // Goal: Move logo from initial position to exact center of screen, then scale up.
        
        const centerScreenX = windowWidth / 2;
        const centerScreenY = windowHeight / 2;
        
        // Delta needed to move to center
        const deltaX = centerScreenX - initialLogoPos.x;
        const deltaY = centerScreenY - initialLogoPos.y;
        
        // Easing for movement (move to center quickly)
        const moveProgress = Math.min(progress * 2, 1); // Reaches center by 50% scroll
        const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);
        const currentX = deltaX * easeOut(moveProgress);
        const currentY = deltaY * easeOut(moveProgress);

        // Scale logic (start scaling after slightly moving, then massive expansion)
        // We want it to fill the screen ("in your face").
        // Scale 1 to 100.
        const scaleProgress = Math.max(0, (progress - 0.1) / 0.9);
        const scale = 1 + (scaleProgress * scaleProgress * 80); // Quadratic scale for "zoom" feel

        // Rotation
        const rotation = progress * 90;

        if (logoRef.current) {
             // Ensure z-index increases as it expands to cover text
             logoRef.current.style.zIndex = progress > 0.1 ? '50' : '10';
             logoRef.current.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) scale(${scale}) rotate(${rotation}deg)`;
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

  return (
    // Increased height to 250vh to give plenty of room for the "expansion" animation
    <div ref={containerRef} className="relative h-[250vh] w-full bg-black">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col items-center justify-center">
        
        {/* Video Background */}
        <div ref={bgRef} className="absolute inset-0 z-0 bg-black">
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
                    onError={(e) => console.warn("Video load error")}
                >
                    <source src={src} type="video/mp4" />
                </video>
             </div>
           ))}
           
           {/* Robust Fallback Image */}
           {videoSources.length === 0 && (
             <div className="absolute inset-0 bg-zinc-900">
                <img 
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1920&auto=format&fit=crop" 
                    alt="Fallback" 
                    className="absolute inset-0 w-full h-full object-cover opacity-50"
                />
             </div>
           )}

           <div className="absolute inset-0 bg-black/40 z-10 pointer-events-none"></div>
        </div>

        {/* Content Container */}
        <div ref={contentWrapperRef} className="relative z-20 w-full max-w-7xl px-6 md:px-8 flex flex-col md:flex-row items-center justify-between text-white pb-12 md:pb-0 h-full md:h-auto">
          
          {/* Text Section */}
          <div className="hero-text-fade text-center md:text-left space-y-6 max-w-xl mt-24 md:mt-0 order-1 md:order-1">
             <div className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-2 animate-fade-in-up">
                <span className="text-[9px] md:text-[10px] font-bold tracking-[0.3em] uppercase">The Perimeter</span>
             </div>
             <h1 className="text-5xl md:text-8xl font-serif font-bold italic tracking-tighter leading-[0.9] mb-4">
               Solidarity. <br/> Without <br/> Exception.
             </h1>
             <p className="text-lg md:text-2xl text-gray-300 font-light tracking-wide max-w-md mx-auto md:mx-0">
               A visual declaration of protection against Anti-Black hate.
             </p>
             <div className="pt-2">
                <span className="text-2xl md:text-4xl font-serif font-bold italic text-white/90">#jointhecircle⚫</span>
             </div>
          </div>

          {/* Logo Section - Order changes on mobile to ensure it's visible for the "Expand" effect */}
          <div className="mt-12 md:mt-0 flex flex-col items-center order-2 md:order-2 relative">
            <span ref={logoRef} className="block will-change-transform origin-center drop-shadow-[0_0_30px_rgba(255,255,255,0.2)] relative z-10">
                <Logo className="w-48 h-48 md:w-72 md:h-72" color="black" textStroke="white" textStrokeWidth="0.8" />
            </span>
            <p className="hero-text-fade mt-8 text-[9px] md:text-[10px] font-bold tracking-[0.4em] uppercase text-gray-400 animate-pulse">
               Scroll to Enter
            </p>
          </div>
        </div>

        {/* Floating Bottom Bar */}
        <div ref={bottomBarRef} className="absolute bottom-8 left-0 w-full px-6 md:px-12 flex justify-between items-end z-20 pointer-events-none">
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
