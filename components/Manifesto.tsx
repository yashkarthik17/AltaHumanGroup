
import React, { useRef, useState, useEffect } from 'react';
import { Scale, HeartPulse, Building2, GraduationCap, Brain, Leaf, Monitor, ShieldAlert, BadgeDollarSign, History, ArrowRight } from 'lucide-react';

const RevealOnScroll: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} ${className}`}>
      {children}
    </div>
  );
};

// --- Spotlight Card Component ---
interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
  theme?: 'light' | 'dark';
}

const SpotlightCard: React.FC<SpotlightCardProps> = ({ children, className = "", theme = "light" }) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseEnter = () => setOpacity(1);
  const handleMouseLeave = () => setOpacity(0);

  const bgColor = theme === 'dark' ? 'bg-zinc-900' : 'bg-white';
  const textColor = theme === 'dark' ? 'text-white' : 'text-black';
  const borderColor = theme === 'dark' ? 'border-zinc-800' : 'border-gray-200';
  const spotlightColor = theme === 'dark' ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.04)';

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden rounded-2xl border ${borderColor} ${bgColor} ${textColor} shadow-sm transition-all duration-300 hover:shadow-xl group ${className}`}
    >
      <div
        className="pointer-events-none absolute -inset-px transition duration-300 opacity-0 group-hover:opacity-100"
        style={{
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 40%)`,
        }}
      />
      <div className="relative h-full z-10">{children}</div>
    </div>
  );
};

// --- Info Card Content Wrapper ---
const InfoCardContent: React.FC<{ 
  title: string; 
  content: string; 
  icon: React.ReactNode; 
  stat?: string; 
  statLabel?: string; 
  theme?: 'dark' | 'light' 
}> = ({ title, content, icon, stat, statLabel, theme = 'light' }) => (
  <div className="p-8 md:p-10 h-full flex flex-col">
    <div className="flex items-start justify-between mb-8">
       <div className={`p-4 rounded-xl ${theme === 'dark' ? 'bg-zinc-800 text-white' : 'bg-gray-50 text-black'} transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-sm`}>
         {icon}
       </div>
       {stat && (
         <div className="text-right">
            <div className="text-3xl md:text-4xl font-bold font-serif leading-none tracking-tighter">{stat}</div>
            <div className={`text-[10px] uppercase tracking-widest font-bold mt-2 ${theme === 'dark' ? 'text-zinc-500' : 'text-gray-400'}`}>{statLabel}</div>
         </div>
       )}
    </div>
    <h3 className="text-2xl font-serif font-bold italic mb-4 leading-tight">{title}</h3>
    <p className={`text-base md:text-lg leading-relaxed font-light ${theme === 'dark' ? 'text-zinc-400' : 'text-gray-600'} flex-grow`}>{content}</p>
    
    <div className={`mt-8 pt-6 border-t ${theme === 'dark' ? 'border-zinc-800' : 'border-gray-100'} flex items-center text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0`}>
        <span>Learn more</span> <ArrowRight size={14} className="ml-2" />
    </div>
  </div>
);

export const Manifesto: React.FC = () => {
  return (
    <section id="manifesto" className="bg-zinc-50 border-b border-gray-200">
      
      {/* 1. The Definition (Sticky Layout) */}
      <div className="relative">
         {/* Reduced padding on mobile */}
         <div className="container mx-auto px-6 pt-12 pb-16 md:pt-32 md:pb-24">
             <div className="grid md:grid-cols-12 gap-12 lg:gap-24">
                
                {/* Title */}
                <div className="md:col-span-5 relative">
                   <div className="md:sticky md:top-32">
                       <h2 className="text-xs font-bold tracking-[0.4em] uppercase text-gray-400 mb-6 flex items-center gap-3">
                          <span className="w-8 h-px bg-black/20"></span>
                          The Definition
                       </h2>
                       {/* Adjusted font size for mobile to prevent overflow/awkward wrap */}
                       <h3 className="text-5xl md:text-7xl lg:text-9xl font-serif font-bold italic leading-[0.85] text-black mb-10 tracking-tighter">
                         Anti-<br/>Black.
                       </h3>
                       <p className="text-lg md:text-xl text-gray-500 font-light leading-relaxed max-w-sm">
                          Not a moment. Not a feeling.<br/>A designed system.
                       </p>
                       <div className="mt-8 md:mt-12 p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
                          <p className="font-serif italic text-lg text-black">
                             "The specific antagonism directed at Black people, rooted in the history of chattel slavery."
                          </p>
                       </div>
                   </div>
                </div>

                {/* Deep Overview Text */}
                <div className="md:col-span-7 space-y-12 md:space-y-20 pt-0 md:pt-32">
                   <RevealOnScroll>
                       <div className="prose prose-lg md:prose-xl prose-gray max-w-none">
                           <p className="text-2xl md:text-4xl leading-tight font-serif font-medium text-black mb-6 md:mb-8">
                              Anti-Black is the specific mechanism that devalues Black existence. 
                           </p>
                           <p className="text-lg md:text-xl text-gray-600 leading-loose">
                              It is distinct from general "racism" or "prejudice." It is the foundational architecture of a society that was built on the conversion of Black humanity into capital. It operates by stripping Black people of the presumption of innocence, safety, and capability.
                           </p>
                       </div>
                   </RevealOnScroll>

                   <RevealOnScroll>
                      <div className="border-l-4 border-black pl-8 py-2">
                          <h4 className="text-lg font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
                             <History size={18} /> Historical Root
                          </h4>
                          <p className="text-lg text-gray-600 leading-loose">
                              From the slave codes of the 1700s to the Black Codes of 1865, to Redlining in the 1930s, and Mass Incarceration today—the system has evolved, but the core function remains: <strong>control and extraction</strong>.
                          </p>
                      </div>
                   </RevealOnScroll>

                   <RevealOnScroll>
                       <div className="bg-black text-white p-8 md:p-10 rounded-2xl shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
                           <h4 className="text-2xl md:text-3xl font-serif italic mb-6">The Objective</h4>
                           <p className="text-lg text-gray-300 leading-loose">
                              To understand Anti-Black is to understand that disparate outcomes (in health, wealth, and justice) are not "glitches" in the system—they are the system working exactly as it was designed. 
                           </p>
                       </div>
                   </RevealOnScroll>
                </div>
             </div>
         </div>
      </div>

      {/* 2. The Structure (Grid with Spotlight Cards) */}
      <div className="bg-white py-16 md:py-32 relative overflow-hidden">
         {/* Background decoration */}
         <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-black/10 to-transparent"></div>
         <div className="absolute -left-24 top-1/4 w-96 h-96 bg-gray-50 rounded-full blur-3xl -z-10"></div>
         <div className="absolute -right-24 bottom-1/4 w-96 h-96 bg-gray-50 rounded-full blur-3xl -z-10"></div>

         <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto mb-16 md:mb-20 text-center">
                <h2 className="text-xs font-bold tracking-[0.4em] uppercase text-gray-400 mb-6">Part II: The Structure</h2>
                <h3 className="text-3xl md:text-6xl font-serif font-bold italic mb-6 leading-tight">
                    How it Manifests.
                </h3>
                <p className="text-lg md:text-xl text-gray-600 font-light">
                    Anti-Black is an operating system running in the background of every major institution.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <RevealOnScroll className="h-full">
                    <SpotlightCard className="h-full">
                        <InfoCardContent 
                            title="Economic Exclusion"
                            content="The wealth gap is manufactured. Redlining, appraisal bias, and predatory lending have systematically blocked Black generational wealth."
                            icon={<BadgeDollarSign size={28} />}
                            stat="10x"
                            statLabel="Median Wealth Gap"
                        />
                    </SpotlightCard>
                </RevealOnScroll>
                
                <RevealOnScroll className="h-full">
                    <SpotlightCard className="h-full" theme="dark">
                        <InfoCardContent 
                            title="Medical Bias"
                            content="False beliefs about biological differences persist, leading to the undertreatment of pain and critical neglect in maternal care."
                            icon={<HeartPulse size={28} />}
                            stat="3x"
                            statLabel="Maternal Mortality"
                            theme="dark"
                        />
                    </SpotlightCard>
                </RevealOnScroll>

                <RevealOnScroll className="h-full">
                    <SpotlightCard className="h-full">
                        <InfoCardContent 
                            title="Legal System"
                            content="The presumption of guilt attaches to Black bodies. Policing and sentencing policies disproportionately target Black communities."
                            icon={<Scale size={28} />}
                            stat="5x"
                            statLabel="Incarceration Rate"
                        />
                    </SpotlightCard>
                </RevealOnScroll>

                {/* Row 2: Expanded Topics */}
                <RevealOnScroll className="h-full">
                    <SpotlightCard className="h-full">
                        <InfoCardContent 
                            title="Environmental"
                            content="Black neighborhoods are statistically more likely to be situated near toxic waste sites and heavy industry. (e.g. Cancer Alley, Flint)."
                            icon={<Leaf size={28} />}
                            stat="56%"
                            statLabel="Higher Pollution Risk"
                        />
                    </SpotlightCard>
                </RevealOnScroll>

                <RevealOnScroll className="h-full">
                    <SpotlightCard className="h-full">
                        <InfoCardContent 
                            title="Algorithmic Bias"
                            content="Facial recognition and hiring AI are trained on biased datasets, automating discrimination in policing, housing, and employment."
                            icon={<Monitor size={28} />}
                            stat="AI"
                            statLabel="Digital Redlining"
                        />
                    </SpotlightCard>
                </RevealOnScroll>

                <RevealOnScroll className="h-full">
                    <SpotlightCard className="h-full" theme="dark">
                        <InfoCardContent 
                            title="Psychological Toll"
                            content="The 'Weathering' effect: chronic stress from daily exposure to racism leads to early health deterioration and biological aging."
                            icon={<Brain size={28} />}
                            stat="7yrs"
                            statLabel="Life Expectancy Gap"
                            theme="dark"
                        />
                    </SpotlightCard>
                </RevealOnScroll>
            </div>
         </div>
      </div>

      {/* 3. The Culture (Full Width Parallax) */}
      <div className="relative py-24 md:py-32 bg-black overflow-hidden group">
          <div className="absolute inset-0 opacity-40 group-hover:opacity-30 transition-opacity duration-1000 transform scale-105 group-hover:scale-100">
             <img src="https://images.unsplash.com/photo-1516575150278-77136aed6920?q=80&w=2000&auto=format&fit=crop" className="w-full h-full object-cover grayscale" alt="Cultural texture" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black"></div>
          
          <div className="container mx-auto px-6 relative z-10">
              <div className="grid md:grid-cols-2 gap-16 items-center">
                  <div className="text-white">
                      <h2 className="text-xs font-bold tracking-[0.4em] uppercase text-zinc-400 mb-6">Part III: The Paradox</h2>
                      <h3 className="text-4xl md:text-7xl font-serif font-bold italic mb-8 leading-tight">
                          "Love the Rhythm,<br/>Ignore the Blues."
                      </h3>
                      <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light mb-8">
                          We live in a paradox where Black culture—music, fashion, slang, athletics—is globally consumed and celebrated, while Black people are marginalized.
                      </p>
                      <div className="pl-6 border-l border-white/30">
                          <p className="text-lg text-gray-400 italic">
                             "To consume the fruit while poisoning the root is the ultimate form of Anti-Black. True allyship means valuing the creator as much as the creation."
                          </p>
                      </div>
                  </div>
                  
                  <div className="relative perspective-1000">
                      {/* Floating Cards Effect */}
                      <div className="bg-white/5 backdrop-blur-md p-8 md:p-10 border border-white/10 rounded-2xl transform md:rotate-2 hover:rotate-0 transition-all duration-700 hover:shadow-2xl hover:bg-white/10">
                           <div className="flex items-center gap-4 mb-6">
                               <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center animate-pulse-subtle">
                                   <ShieldAlert size={24} className="text-black" />
                               </div>
                               <div>
                                   <h4 className="text-white font-bold uppercase tracking-widest text-sm">Action Item</h4>
                                   <div className="text-xs text-gray-400 uppercase tracking-wider">Immediate</div>
                               </div>
                           </div>
                           <p className="text-white text-xl md:text-2xl font-serif italic mb-6">Protect the People.</p>
                           <p className="text-gray-300 text-base leading-relaxed mb-6">
                               Next time you enjoy Black art, ask yourself: How am I supporting Black lives? Am I speaking up? Am I voting for equity? Am I donating to defense funds?
                           </p>
                           <button className="w-full py-4 bg-white text-black font-bold uppercase tracking-widest text-xs hover:bg-gray-200 transition-colors">
                               Take the Pledge
                           </button>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </section>
  );
};
