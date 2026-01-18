
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
  source: string;
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
        <h3 className="text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-none mb-6">
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
        <p className="text-xl md:text-2xl font-serif font-medium leading-snug mb-6">
          {description}
        </p>
        <p className="text-[10px] uppercase tracking-widest opacity-40 font-bold">
          Source: {source}
        </p>
      </div>
    </div>
  );
};

export const ImpactStats: React.FC = () => {
  return (
    <section className="bg-white">
      {/* Title Section */}
      <div className="py-24 px-4 container mx-auto text-center max-w-4xl">
        <h2 className="text-xs font-bold tracking-[0.4em] uppercase text-gray-400 mb-6">The Data</h2>
        <h3 className="text-4xl md:text-6xl font-serif font-medium leading-tight mb-6">
            The numbers tell a story of systemic design, not accidental failure.
        </h3>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full">
        <StatCard 
          number="59%"
          numberValue={59}
          suffix="%"
          description="Of all race-based hate crimes in the US target Black people, despite being 14% of the population."
          source="FBI Hate Crime Statistics, 2022"
          theme="dark"
          delay="0ms"
        />
        <div className="relative h-[360px] md:h-auto overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1531384441138-2736e62e0919?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Portrait"
              className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
        </div>
        
        <StatCard 
          number="1/3"
          description="Black men are projected to be incarcerated at some point in their lifetime if current trends continue."
          source="The Sentencing Project"
          theme="gray"
          delay="100ms"
        />
        
        <div className="relative h-[360px] md:h-auto overflow-hidden group">
             <img 
              src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Portrait"
              className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-110"
            />
        </div>

        <div className="relative h-[360px] md:h-auto overflow-hidden group hidden lg:block">
            <img 
              src="https://images.unsplash.com/photo-1589156280159-27698a70f29e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Portrait"
              className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-110"
            />
        </div>

        <StatCard 
          number="2.5x"
          description="Black women are nearly 3 times more likely to die from pregnancy-related causes than white women."
          source="CDC Health Statistics"
          theme="light"
          delay="200ms"
        />
        
        <div className="relative h-[360px] md:h-auto overflow-hidden group lg:hidden">
            <img 
              src="https://images.unsplash.com/photo-1589156280159-27698a70f29e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Portrait"
              className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-110"
            />
        </div>

        <StatCard 
          number="84%"
          numberValue={84}
          suffix="%"
          description="Of Black adults say they believe the US economic system is stacked against them."
          source="Pew Research Center"
          theme="dark"
          delay="300ms"
        />
      </div>
    </section>
  );
};
