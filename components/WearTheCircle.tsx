
import React, { useEffect, useRef } from 'react';

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  speed?: number;
  baseRotation?: number;
}

const ParallaxImage: React.FC<ParallaxImageProps> = ({ 
  src, 
  alt, 
  className = "", 
  speed = 0.1, 
  baseRotation = 0 
}) => {
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const parent = ref.current.closest('section');
      if (!parent) return;
      
      const rect = parent.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top < windowHeight && rect.bottom > 0) {
        const distanceFromCenter = (windowHeight / 2) - (rect.top + rect.height / 2);
        // Smoother factor
        const yOffset = distanceFromCenter * speed;
        
        ref.current.style.transform = `translateY(${yOffset}px) rotate(${baseRotation}deg)`;
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed, baseRotation]);

  return (
    <div ref={ref} className={`${className} will-change-transform transition-transform duration-75 ease-out`}>
      <img src={src} className="w-full h-full object-cover" alt={alt} />
    </div>
  );
};

export const WearTheCircle: React.FC = () => {
  return (
    <section className="py-20 md:py-32 bg-white relative overflow-hidden border-t border-gray-100">
        <div className="container mx-auto px-6 relative z-10">
            <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
                <h2 className="text-4xl sm:text-5xl md:text-7xl font-serif font-bold mb-6 md:mb-8 tracking-tight text-black">
                    Show you care
                </h2>
                <p className="text-lg sm:text-xl md:text-2xl text-gray-700 leading-relaxed mb-8 md:mb-10 max-w-2xl font-light">
                    The <span className="font-bold text-black">#BlackCircle</span> is more than just a symbol. It’s a powerful and visible statement of unity and allyship with the Black community.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                    <button className="bg-[#0000FF] text-white px-8 py-4 md:px-10 md:py-5 text-base md:text-xl font-bold uppercase tracking-widest hover:bg-blue-700 transition-all hover:scale-105 rounded-sm shadow-xl w-full sm:w-auto">
                        Request a Black Circle
                    </button>
                </div>
            </div>
        </div>
        
        {/* Desktop Parallax Images */}
        <ParallaxImage 
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop"
            alt="Portrait of woman looking confident"
            className="absolute top-[20%] left-[5%] w-64 lg:w-80 h-[350px] lg:h-[450px] hidden xl:block rounded-r-3xl overflow-hidden shadow-2xl border-4 border-white z-0 grayscale hover:grayscale-0 transition-all duration-700"
            speed={0.08}
            baseRotation={-3}
        />

        <ParallaxImage 
            src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=800&auto=format&fit=crop"
            alt="Group of diverse friends"
            className="absolute top-[30%] right-[2%] w-72 lg:w-96 h-[300px] lg:h-[400px] hidden xl:block rounded-l-3xl overflow-hidden shadow-2xl border-4 border-white z-0 grayscale hover:grayscale-0 transition-all duration-700"
            speed={-0.12}
            baseRotation={4}
        />
        
        {/* Mobile Grid Layout for Images */}
        <div className="grid grid-cols-2 gap-4 mt-12 xl:hidden px-4 relative z-10 max-w-2xl mx-auto">
             <div className="aspect-[3/4] rounded-xl overflow-hidden shadow-lg border-2 border-white transform -rotate-1">
                 <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop" className="w-full h-full object-cover grayscale" alt="Portrait" />
             </div>
             <div className="aspect-[3/4] rounded-xl overflow-hidden shadow-lg border-2 border-white transform rotate-1 mt-6">
                 <img src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=600&auto=format&fit=crop" className="w-full h-full object-cover grayscale" alt="Group" />
             </div>
        </div>
        
        {/* Subtle Background Text */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-[0.02] text-[15rem] font-bold font-serif whitespace-nowrap select-none">
            SOLIDARITY
        </div>
    </section>
  );
};
