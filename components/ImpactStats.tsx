import React, { useEffect, useState, useRef } from 'react';

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
      
      // Easing function for smooth animation
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
  bgColor?: string;
  textColor?: string;
  delay?: string;
}

const StatCard: React.FC<StatCardProps> = ({ 
  number, 
  numberValue, 
  prefix = "", 
  suffix = "", 
  description, 
  source, 
  bgColor = "bg-black", 
  textColor = "text-white",
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

  return (
    <div 
      ref={cardRef}
      className={`relative p-8 ${bgColor} ${textColor} flex flex-col justify-between min-h-[320px] transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ transitionDelay: delay }}
    >
      <div className="flex-1 flex items-center">
        <h3 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter">
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
        <p className="text-xl md:text-2xl font-serif font-medium leading-snug mb-4">
          {description}
        </p>
        <p className={`text-xs uppercase tracking-widest opacity-60 font-semibold border-t ${textColor === 'text-white' ? 'border-gray-800' : 'border-gray-300'} pt-4`}>
          Source: {source}
        </p>
      </div>
    </div>
  );
};

const ImageCard: React.FC<{ src: string; alt: string; delay?: string }> = ({ src, alt, delay = "0ms" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    // Visibility observer
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
    
    // Parallax Scroll Effect
    const handleScroll = () => {
        if (!cardRef.current || !imgRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // Check if element is in view
        if (rect.top < windowHeight && rect.bottom > 0) {
            // Calculate relative position (0 at center of screen)
            const relativeY = (rect.top + rect.height / 2) - windowHeight / 2;
            // Move image based on scroll
            imgRef.current.style.transform = `scale(1.1) translateY(${relativeY * 0.1}px)`;
        }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
        observer.disconnect();
        window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div 
      ref={cardRef}
      className={`relative h-full min-h-[320px] overflow-hidden transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ transitionDelay: delay }}
    >
      <img 
        ref={imgRef}
        src={src} 
        alt={alt} 
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-75 will-change-transform" 
        style={{ transform: 'scale(1.1)' }} // Initial scale to allow for movement
      />
    </div>
  );
};

export const ImpactStats: React.FC = () => {
  return (
    <section className="bg-white">
      {/* Title Section */}
      <div className="py-20 px-4 container mx-auto text-center">
        <h2 className="text-sm font-bold tracking-[0.2em] uppercase text-gray-400 mb-4">The Reality</h2>
        <h3 className="text-4xl md:text-6xl font-serif font-medium">Why We Must Act</h3>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full">
        {/* Row 1 */}
        <ImageCard 
          src="https://images.unsplash.com/photo-1531384441138-2736e62e0919?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
          alt="Young Black man portrait" 
          delay="0ms"
        />
        <StatCard 
          number="59%"
          numberValue={59}
          suffix="%"
          description="Of all race-based hate crimes in the US targeted Black people, despite being 14% of the population."
          source="FBI Hate Crime Statistics, 2022"
          bgColor="bg-black"
          textColor="text-white"
          delay="100ms"
        />
        <ImageCard 
          src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
          alt="Black woman portrait" 
          delay="200ms"
        />
        <StatCard 
          number="1 in 3"
          description="Black men are projected to be incarcerated at some point in their lifetime."
          source="The Sentencing Project"
          bgColor="bg-zinc-100"
          textColor="text-black"
          delay="300ms"
        />

        {/* Row 2 */}
        <StatCard 
          number="2.5x"
          description="Black women are nearly 3 times more likely to die from pregnancy-related causes than white women."
          source="CDC Health Statistics"
          bgColor="bg-zinc-900" 
          textColor="text-white"
          delay="0ms"
        />
        <ImageCard 
          src="https://images.unsplash.com/photo-1589156280159-27698a70f29e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
          alt="Black professional woman" 
          delay="100ms"
        />
        <StatCard 
          number="84%"
          numberValue={84}
          suffix="%"
          description="Of Black adults say they believe the US economic system is stacked against them."
          source="Pew Research Center"
          bgColor="bg-black"
          textColor="text-white"
          delay="200ms"
        />
        <div className="relative min-h-[320px] bg-zinc-800 flex items-center justify-center p-8 text-center text-white transition-all duration-1000 hover:bg-zinc-700">
           <div>
             <p className="text-xl font-serif italic mb-4">"Injustice anywhere is a threat to justice everywhere."</p>
             <p className="text-xs uppercase tracking-widest text-gray-400">Join The Movement</p>
           </div>
        </div>
      </div>
    </section>
  );
};