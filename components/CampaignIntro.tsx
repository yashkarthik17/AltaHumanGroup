
import React, { useEffect, useRef, useState } from 'react';
import { ArrowDown } from 'lucide-react';

export const CampaignIntro: React.FC = () => {
  const imageRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0.9);
  const [opacity, setOpacity] = useState(0.5);

  useEffect(() => {
    const handleScroll = () => {
      if (!imageRef.current) return;
      const rect = imageRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate how far the image is into the viewport
      if (rect.top < windowHeight && rect.bottom > 0) {
        const progress = 1 - (rect.top / windowHeight);
        // Clamp progress between 0 and 1
        const clamped = Math.min(Math.max(progress, 0), 1);
        
        // Scale from 0.9 to 1.1 based on scroll for expansion effect
        setScale(0.9 + (clamped * 0.2));
        setOpacity(0.5 + (clamped * 0.5));
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="bg-white py-24 md:py-32 border-b border-gray-100 overflow-hidden">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="grid md:grid-cols-12 gap-12 mb-20">
           <div className="md:col-span-4">
              <span className="text-xs font-bold tracking-[0.4em] uppercase text-gray-400 mb-6 block flex items-center gap-2">
                 The Reality <span className="w-8 h-px bg-black/20"></span>
              </span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight mb-8">
                 Systemic Anti-Black: Not History—Present Day.
              </h2>
           </div>
           
           <div className="md:col-span-8 space-y-8">
              <p className="text-xl md:text-2xl text-black font-light leading-relaxed">
                 Anti-Black racism isn't a relic of the past—it's embedded in policies, institutions, and cultural practices that continue to create disparate outcomes today.
              </p>
              <div className="prose prose-lg text-gray-600">
                  <p>
                    From housing and healthcare to education and criminal justice, the evidence is clear: Anti-Black bias continues to shape opportunity and safety in America.
                  </p>
                  <blockquote className="border-l-4 border-black pl-6 italic text-black font-serif my-8">
                    "Disparate outcomes in wealth, health, and justice aren't anomalies or accidents. They reflect systems that were designed to produce Anti-Black inequality—and that continue to operate unless actively reformed."
                  </blockquote>
              </div>
           </div>
        </div>

        {/* Expansion Image Effect */}
        <div className="relative w-full aspect-[21/9] overflow-hidden rounded-sm bg-gray-100 mt-12">
            <div 
                ref={imageRef}
                className="w-full h-full transition-transform duration-100 ease-out will-change-transform"
                style={{ 
                    transform: `scale(${scale})`,
                    opacity: opacity,
                    backgroundImage: 'url(https://images.unsplash.com/photo-1596796929552-3200d4399e5f?q=80&w=2000&auto=format&fit=crop)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
                <div className="absolute inset-0 bg-black/20"></div>
            </div>
            <div className="absolute bottom-6 left-6 text-white z-10">
                <p className="text-[10px] font-bold uppercase tracking-[0.3em]">Visual Evidence</p>
                <p className="font-serif italic text-lg">The March Continues</p>
            </div>
        </div>
        
        <div className="mt-16 flex justify-center">
            <ArrowDown className="animate-bounce text-gray-300" />
        </div>
      </div>
    </section>
  );
};
