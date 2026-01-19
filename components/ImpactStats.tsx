
import React, { useEffect, useState, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';

// Hook for counting up numbers when visible
const useCountUp = (end: number, duration: number = 2000, start = false) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    
    let startTime: number | null = null;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = currentTime - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      const easeOutQuart = (x: number) => 1 - Math.pow(1 - x, 4);
      
      setCount(Math.floor(end * easeOutQuart(percentage)));

      if (progress < duration) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [end, duration, start]);

  return count;
};

interface StatCardProps {
  number: string;
  numberValue?: number;
  suffix?: string;
  prefix?: string;
  description: string;
  source?: string; // Made optional
  theme?: 'dark' | 'light' | 'gray';
  delay?: string;
}

const StatCard: React.FC<StatCardProps> = ({ 
  number, 
  numberValue, 
  prefix = "", 
  suffix = "", 
  description, 
  source, 
  theme = 'dark',
  delay = "0ms"
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  
  const animatedNumber = useCountUp(numberValue || 0, 2500, isVisible);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  const getThemeClasses = () => {
      switch(theme) {
          case 'light': return 'bg-white text-black hover:bg-gray-50';
          case 'gray': return 'bg-zinc-100 text-black hover:bg-zinc-200';
          default: return 'bg-black text-white hover:bg-zinc-900';
      }
  };

  return (
    <div 
      ref={cardRef}
      className={`group relative p-8 md:p-10 flex flex-col justify-between min-h-[360px] transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} ${getThemeClasses()}`}
      style={{ transitionDelay: delay }}
    >
      <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
         <ArrowUpRight size={20} />
      </div>

      <div className="flex-1 flex flex-col justify-center">
        <h3 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-none mb-6">
          {numberValue ? (
            <>
              {prefix}{animatedNumber}{suffix}
            </>
          ) : (
            number
          )}
        </h3>
      </div>
      <div>
        <div className="w-12 h-1 bg-current mb-6 opacity-20 group-hover:opacity-100 transition-opacity"></div>
        <p className="text-lg md:text-xl font-serif font-medium leading-snug mb-6">
          {description}
        </p>
        {source && (
            <p className="text-[10px] uppercase tracking-widest opacity-40 font-bold">
            Source: {source}
            </p>
        )}
      </div>
    </div>
  );
};

export const ImpactStats: React.FC = () => {
  return (
    <section className="bg-white border-t border-gray-100">
      {/* Title Section */}
      <div className="py-24 px-6 container mx-auto text-center max-w-4xl">
        <h2 className="text-xs font-bold tracking-[0.4em] uppercase text-gray-400 mb-6">By The Numbers</h2>
        <h3 className="text-4xl md:text-6xl font-serif font-medium leading-tight mb-6">
            The Toll of Anti-Black
        </h3>
        <p className="text-lg text-gray-600 font-light">
            These statistics reflect systemic patterns, not isolated incidents.
        </p>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full">
        <StatCard 
          number="28h"
          numberValue={28}
          suffix="h"
          description="An African American is killed by police, security, or vigilantes approximately every 28 hours."
          theme="dark"
          delay="0ms"
          source="MXGM"
        />
         <StatCard 
          number="5.7x"
          description="African Americans are incarcerated at 5.7 times the rate of white Americans."
          theme="gray"
          delay="100ms"
        />
        
        <div className="relative h-[360px] md:h-auto overflow-hidden group col-span-1 md:col-span-2 lg:col-span-1 bg-zinc-900">
             <div className="absolute inset-0 p-10 flex flex-col justify-center text-white z-10">
                 <h4 className="text-6xl font-bold mb-4">44%</h4>
                 <p className="text-gray-300 font-serif">Of all assault victims in the United States are African American.</p>
                 <p className="text-[10px] uppercase tracking-widest opacity-40 font-bold mt-4">Source: Bureau of Justice</p>
             </div>
             <img 
              src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=800&auto=format&fit=crop" // Gavel/Justice/Law
              alt="Justice texture"
              className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-10 transition-opacity duration-700"
            />
        </div>

        <StatCard 
          number="10x"
          numberValue={10}
          suffix="x"
          description="The median white family holds approximately ten times the wealth of the median Black family."
          theme="light"
          delay="200ms"
        />
        
        <StatCard 
            number="$4B+"
            description="Estimated economic value extracted through slave labor (in 19th-century dollars)."
            theme="dark"
            delay="300ms"
        />

        <StatCard 
          number="35%"
          numberValue={35}
          suffix="%"
          description="African American women experience intimate partner violence at a rate 35% higher than white women."
          theme="gray"
          delay="400ms"
          source="NCADV"
        />

        <div className="relative h-[360px] md:h-auto overflow-hidden group lg:col-span-1 bg-white border border-gray-100 flex items-center justify-center">
             <div className="text-center p-8">
                <div className="text-5xl font-bold mb-2 text-black">1 in 3</div>
                <p className="text-gray-500 text-sm uppercase tracking-widest font-bold">Black men face a lifetime probability of incarceration</p>
             </div>
        </div>
      </div>
    </section>
  );
};
