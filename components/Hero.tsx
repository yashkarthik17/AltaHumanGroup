
import React, { useEffect, useRef, useState } from 'react';
import { ChevronDown, Wand2, Loader2 } from 'lucide-react';
import { Logo } from './Logo';
import { GoogleGenAI } from "@google/genai";

const VIDEO_SOURCES = [
  "https://assets.mixkit.co/videos/preview/mixkit-hands-of-a-diverse-group-of-people-united-4828-large.mp4",
  "https://assets.mixkit.co/videos/preview/mixkit-diversity-of-young-people-posing-for-camera-4247-large.mp4", 
  "https://assets.mixkit.co/videos/preview/mixkit-friends-with-colored-smoke-bombs-4256-large.mp4" 
];

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLSpanElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const bottomBarRef = useRef<HTMLDivElement>(null);

  const [initialLogoPos, setInitialLogoPos] = useState<{x: number, y: number} | null>(null);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  // Gemini Video Generation State
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedVideo, setGeneratedVideo] = useState<string | null>(null);

  useEffect(() => {
    // Rotate videos every 6 seconds only if we aren't showing a generated video
    if (generatedVideo) return;

    const interval = setInterval(() => {
        setCurrentVideoIndex(prev => (prev + 1) % VIDEO_SOURCES.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [generatedVideo]);

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
        // Text fades out early so we can focus on the zoom
        const textFadeOutPoint = 0.5;
        const textOpacity = Math.max(0, 1 - (progress / textFadeOutPoint));
        
        // Remove background fade to prevent black bar effect
        // The background will simply scroll up with the container naturally
        
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
           
           // Scale increases massively to create the "entering" effect
           // Increased multiplier slightly since scroll distance is shorter
           const scale = 1 + (progress * 180); 
           const x = deltaX * progress;
           const y = deltaY * progress;
           const rotation = progress * 180; 

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

  const handleGenerateVideo = async () => {
    if (isGenerating) return;

    try {
        // @ts-ignore
        if (window.aistudio?.hasSelectedApiKey && !(await window.aistudio.hasSelectedApiKey())) {
             // @ts-ignore
             await window.aistudio.openSelectKey();
        }

        setIsGenerating(true);
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
        
        let operation = await ai.models.generateVideos({
            model: 'veo-3.1-fast-generate-preview',
            prompt: 'Cinematic slow motion shot of a diverse group of people standing together in unity, holding hands, warm sunlight, hopeful atmosphere, high quality, photorealistic, 4k',
            config: {
                numberOfVideos: 1,
                resolution: '1080p',
                aspectRatio: '16:9'
            }
        });

        while (!operation.done) {
            await new Promise(resolve => setTimeout(resolve, 5000));
            operation = await ai.operations.getVideosOperation({operation: operation});
        }

        const videoUri = operation.response?.generatedVideos?.[0]?.video?.uri;
        if (videoUri) {
            setGeneratedVideo(`${videoUri}&key=${process.env.API_KEY}`);
        }
    } catch (e) {
        console.error("Failed to generate video", e);
    } finally {
        setIsGenerating(false);
    }
  };

  return (
    // Reduced height from 150vh to 120vh to eliminate the "long black bar" gap
    <div ref={containerRef} className="relative h-[120vh] w-full bg-black overflow-visible">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col items-center justify-center">
        
        {/* AI Video Generation Control */}
        <div className="absolute top-24 right-6 z-50 flex flex-col items-end gap-2 pointer-events-auto">
            <button 
                onClick={handleGenerateVideo}
                disabled={isGenerating}
                className="bg-white/10 backdrop-blur-md p-3 rounded-full hover:bg-white/20 transition-all border border-white/20 group relative overflow-hidden"
            >
                {isGenerating ? <Loader2 className="w-5 h-5 text-white animate-spin" /> : <Wand2 className="w-5 h-5 text-white" />}
                <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 text-[10px] font-bold uppercase tracking-widest text-white opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 px-3 py-1 rounded backdrop-blur-sm whitespace-nowrap">
                    {isGenerating ? "Creating Scene..." : "Generate AI Scene"}
                </span>
            </button>
        </div>

        {/* Video Background Container */}
        <div ref={bgRef} className="absolute inset-0 z-0 bg-black">
           
           {/* Generated Video Layer */}
           {generatedVideo && (
             <div className="absolute inset-0 z-10 animate-fade-in">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    key={generatedVideo} // Force remount on new video
                    className="w-full h-full object-cover scale-105"
                >
                    <source src={generatedVideo} type="video/mp4" />
                </video>
             </div>
           )}

           {/* Default Rotating Video Layer (Only visible if no generated video) */}
           {!generatedVideo && VIDEO_SOURCES.map((src, index) => (
             <div 
                key={src} 
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentVideoIndex ? 'opacity-100' : 'opacity-0'}`}
             >
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover scale-105"
                >
                    <source src={src} type="video/mp4" />
                </video>
             </div>
           ))}

          {/* Gradients for text readability - Lightened for better visibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/10 to-black/60 z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 z-10"></div>
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
