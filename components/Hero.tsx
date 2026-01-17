
import React, { useEffect, useRef, useState } from 'react';
import { Play, ChevronDown, Instagram, Twitter } from 'lucide-react';
import { Logo } from './Logo';

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLSpanElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const bottomBarRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const [initialLogoPos, setInitialLogoPos] = useState<{x: number, y: number} | null>(null);

  // Measure initial logo position on mount and resize
  useEffect(() => {
    const measureLogo = () => {
      if (logoRef.current) {
        const rect = logoRef.current.getBoundingClientRect();
        // Calculate center of the logo relative to the viewport
        setInitialLogoPos({
          x: rect.left + rect.width / 2,
          y: rect.top + rect.height / 2
        });
      }
    };

    // Slight delay to ensure layout is settled
    const timer = setTimeout(measureLogo, 100);
    window.addEventListener('resize', measureLogo);
    
    return () => {
      window.removeEventListener('resize', measureLogo);
      clearTimeout(timer);
    };
  }, []);

  // Ensure video plays
  useEffect(() => {
    if (videoRef.current) {
        videoRef.current.play().catch(error => {
            console.log("Video autoplay failed:", error);
        });
    }
  }, []);

  // Handle Scroll Animation
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !logoRef.current || !initialLogoPos) return;
      
      const containerTop = containerRef.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      const totalScrollHeight = containerRef.current.offsetHeight - windowHeight;
      
      // Calculate progress: 0 when top of container is at top of screen, 1 when we've scrolled the full distance
      // We use absolute value of top because it goes negative as we scroll down
      const scrollY = -containerTop; 
      const progress = Math.max(0, Math.min(scrollY / totalScrollHeight, 1));
      
      // Animation Logic
      requestAnimationFrame(() => {
        // 1. Fade out Background & Text
        const fadeOutPoint = 0.3; // Start fading early
        const opacity = Math.max(0, 1 - (progress / fadeOutPoint));
        
        if (contentRef.current) {
          // Keep logo visible, fade out other siblings by targeting specific classes if needed, 
          // but here we might need to fade the specific text wrapper.
          // Simpler: Fade the whole container, but keep Logo opacity 1? 
          // Actually, we'll transform the logo, so we can't fade its parent easily without fading it.
          // Solution: Fade specific elements refs.
        }

        if (bgRef.current) bgRef.current.style.opacity = `${opacity}`;
        if (bottomBarRef.current) bottomBarRef.current.style.opacity = `${opacity}`;
        
        // Target specifically the text parts excluding the logo
        const textElements = document.querySelectorAll('.hero-text-fade');
        textElements.forEach((el) => {
          (el as HTMLElement).style.opacity = `${opacity}`;
        });

        // 2. Transform Logo
        if (logoRef.current) {
           const centerScreenX = window.innerWidth / 2;
           const centerScreenY = window.innerHeight / 2;
           
           // Vector from initial logo pos to center screen
           const deltaX = centerScreenX - initialLogoPos.x;
           const deltaY = centerScreenY - initialLogoPos.y;
           
           // Scale factor - massive at the end to fill screen
           // Starts at 1, goes to 80 (enough to fill 4k screens with the white circle)
           const scale = 1 + (progress * 80);
           
           // Translation
           const x = deltaX * progress;
           const y = deltaY * progress;
           
           // Rotation - Spin faster as it grows?
           const rotation = progress * 360; 

           logoRef.current!.style.transform = `translate3d(${x}px, ${y}px, 0) scale(${scale}) rotate(${rotation}deg)`;
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [initialLogoPos]);

  const scrollToContent = () => {
    const nextSection = document.getElementById('typewriter-mission');
    if (nextSection) {
        nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    // Container height 300vh allows for a long scroll interactions
    <div ref={containerRef} className="relative h-[300vh] w-full bg-black">
      
      {/* Sticky Viewport */}
      <div ref={stickyRef} className="sticky top-0 h-screen w-full overflow-hidden flex flex-col items-center justify-center">
        
        {/* Background Video */}
        <div ref={bgRef} className="absolute inset-0 z-0 overflow-hidden transition-opacity duration-100 ease-linear">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover scale-105"
            poster="https://images.unsplash.com/photo-1601054704854-1a2e79dea4d3?q=80&w=2000&auto=format&fit=crop"
          >
             {/* Reliable dark abstract video source */}
             <source src="https://videos.pexels.com/video-files/4629633/4629633-hd_1920_1080_25fps.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/50 bg-gradient-to-b from-black/70 via-black/20 to-black/90"></div>
        </div>

        {/* Main Content */}
        <div ref={contentRef} className="relative z-10 w-full h-full flex flex-col items-center justify-center px-6 text-center pt-20 pb-32 pointer-events-none">
          {/* Pointer events none on container so scroll goes through, enable on interactive elements */}
          
          <div className="space-y-8 md:space-y-10 max-w-6xl mx-auto">
            
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-bold tracking-tight text-white drop-shadow-2xl leading-[1.05] uppercase">
              <span className="hero-text-fade transition-opacity duration-75">Stand Against</span> <br className="hidden md:block"/> 
              <span className="inline-flex items-center gap-3 sm:gap-5 md:gap-8 align-middle">
                <span className="hero-text-fade transition-opacity duration-75">Hate</span>
                {/* The Animated Logo */}
                <span ref={logoRef} className="inline-block relative z-50 origin-center will-change-transform">
                  <Logo className="w-10 h-10 sm:w-14 sm:h-14 md:w-20 md:h-20 lg:w-28 lg:h-28 opacity-90 animate-spin-slow" color="white" />
                </span>
              </span>
            </h1>
            
            <p className="hero-text-fade text-lg sm:text-xl md:text-2xl font-light text-gray-200 max-w-3xl mx-auto leading-relaxed drop-shadow-md transition-opacity duration-75">
              We are building an awareness movement that stands against hate and prejudice for African Americans.
            </p>

            <div className="hero-text-fade flex items-center justify-center gap-4 mt-8 md:mt-12 pointer-events-auto transition-opacity duration-75">
              <span className="text-xl sm:text-2xl font-light tracking-wide text-gray-200">#jointhecircle⚫️</span>
              
              <div className="group cursor-pointer relative" onClick={scrollToContent}>
                 <div className="w-12 h-12 md:w-16 md:h-16 bg-black rounded-full border border-white/20 flex items-center justify-center relative transition-all duration-500 group-hover:scale-110 group-hover:border-white/50">
                    <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                    <div className="absolute inset-0 rounded-full bg-white/5 opacity-0 group-hover:opacity-100 blur-md transition-opacity"></div>
                 </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Controls Bar */}
        <div ref={bottomBarRef} className="absolute bottom-0 left-0 w-full z-20 px-6 sm:px-12 py-6 sm:py-10 border-t border-white/10 bg-black/40 backdrop-blur-xl transition-opacity duration-75">
          <div className="flex flex-row justify-between items-center max-w-screen-2xl mx-auto pointer-events-auto">
            
            <button className="flex items-center gap-3 sm:gap-4 group">
                <div className="w-10 h-10 sm:w-14 sm:h-14 flex items-center justify-center border border-white/20 rounded-full bg-white/5 backdrop-blur-md group-hover:bg-white group-hover:text-black transition-all duration-500">
                    <Play size={16} fill="currentColor" className="ml-1" />
                </div>
                <span className="text-[10px] sm:text-xs font-bold tracking-[0.3em] uppercase text-white/80 group-hover:text-white transition-colors">
                    Our Story
                </span>
            </button>

            <button 
              onClick={scrollToContent}
              className="hidden lg:block p-2 group transition-transform hover:-translate-y-2"
            >
               <ChevronDown className="w-8 h-8 text-white/40 group-hover:text-white transition-all animate-bounce" />
            </button>

            <div className="flex items-center gap-3 sm:gap-5">
              {[Instagram, Twitter].map((Icon, idx) => (
                <a key={idx} href="#" className="p-3 bg-white/5 hover:bg-white hover:text-black rounded-full transition-all duration-300 border border-white/10 hover:border-white">
                    <Icon size={18} />
                </a>
              ))}
              <a href="#" className="p-3 bg-white/5 hover:bg-white rounded-full transition-all duration-300 border border-white/10 hover:border-white group">
                  <div className="w-4.5 h-4.5 rounded-full border border-white/30 bg-black flex items-center justify-center group-hover:border-black transition-colors">
                    <div className="w-0.5 h-0.5 rounded-full bg-white"></div>
                  </div>
              </a>
            </div>

          </div>
        </div>
        
      </div>
    </div>
  );
};
