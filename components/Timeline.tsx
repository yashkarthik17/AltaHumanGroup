
import React from 'react';

const EVENTS = [
  {
    year: "1619",
    title: "The Beginning",
    desc: "In late August 1619, 20-30 enslaved Africans landed at Point Comfort, Virginia. This marked the beginning of over two centuries of chattel slavery in America.",
    image: "/attached_assets/Generated_Image_January_18,_2026_-_5_24PM_1768785895873.jpeg"
  },
  {
    year: "1863",
    title: "Emancipation Proclamation",
    desc: "President Abraham Lincoln issued the Emancipation Proclamation, declaring 'that all persons held as slaves' within the rebellious states 'are, and henceforward shall be free.'",
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?q=80&w=800&auto=format&fit=crop" // Paper/History
  },
  {
    year: "1877-1960s",
    title: "Jim Crow Era",
    desc: "State and local laws introduced in the Southern United States enforced racial segregation. These laws remained in force until the 1960s, creating a legal framework for discrimination.",
    image: "/attached_assets/Generated_Image_January_18,_2026_-_5_18PM_1768785541967.jpeg"
  },
  {
    year: "1980s-1990s",
    title: "The Crack Epidemic",
    desc: "The 'War on Drugs' disproportionately targeted Black communities during the crack epidemic, contributing to mass incarceration that persists today.",
    image: "/attached_assets/Generated_Image_January_18,_2026_-_5_16PM_(1)_1768785457749.jpeg"
  },
  {
    year: "Present",
    title: "Systemic Legacy",
    desc: "Today, disparate outcomes in wealth, health, and justice reflect systems designed to produce inequality that continue to operate unless actively reformed.",
    image: "/attached_assets/Generated_Image_January_18,_2026_-_5_25PM_1768785940430.jpeg"
  }
];

export const Timeline: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-black text-white relative overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto mb-20 text-center">
            <span className="text-xs font-bold tracking-[0.4em] uppercase text-gray-500 mb-6 block">Historical Context</span>
            <h2 className="text-4xl md:text-6xl font-serif font-bold italic mb-6">A Timeline of Anti-Black Injustice</h2>
            <p className="text-gray-400 text-lg font-light">Understanding where we've been helps us see where we need to go.</p>
        </div>

        <div className="max-w-6xl mx-auto relative">
           {/* Vertical Line */}
           <div className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-px bg-white/10 transform md:-translate-x-1/2"></div>

           <div className="space-y-24 md:space-y-32">
               {EVENTS.map((evt, index) => {
                   const isEven = index % 2 === 0;
                   return (
                       <div key={index} className={`relative flex flex-col md:flex-row gap-8 md:gap-16 ${isEven ? 'md:flex-row-reverse' : ''} items-center group`}>
                           
                           {/* Content Side */}
                           <div className="w-full md:w-1/2 pl-12 md:pl-0 text-left md:text-right">
                               <div className={`${!isEven ? 'md:text-left' : ''} transition-all duration-700 transform translate-y-4 group-hover:translate-y-0 opacity-80 group-hover:opacity-100`}>
                                   <span className="text-6xl md:text-8xl font-bold text-white/5 group-hover:text-white/10 transition-colors duration-500 block mb-[-20px] md:mb-[-30px] z-0 relative">{evt.year}</span>
                                   <div className="relative z-10">
                                      <h3 className="text-3xl font-serif font-bold mb-4 text-white">{evt.title}</h3>
                                      <p className="text-gray-400 leading-relaxed text-sm md:text-base max-w-md ml-auto">{evt.desc}</p>
                                   </div>
                               </div>
                           </div>

                           {/* Center Dot */}
                           <div className="absolute left-0 md:left-1/2 w-[30px] h-[30px] rounded-full border border-white/30 bg-black flex items-center justify-center transform md:-translate-x-1/2 z-10 group-hover:scale-125 transition-transform duration-500 shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                               <div className="w-2 h-2 bg-white rounded-full"></div>
                           </div>

                           {/* Image Side */}
                           <div className="w-full md:w-1/2 pl-12 md:pl-0">
                               <div className={`relative aspect-[4/3] overflow-hidden rounded-sm border border-white/10 opacity-60 group-hover:opacity-100 transition-all duration-700 grayscale group-hover:grayscale-0 ${!isEven ? 'md:mr-auto' : 'md:ml-auto'}`}>
                                  <div className="absolute inset-0 bg-black/20 z-10"></div>
                                  <img 
                                    src={evt.image} 
                                    alt={evt.title}
                                    loading="lazy"
                                    className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-1000 will-change-transform"
                                  />
                               </div>
                           </div>
                       </div>
                   );
               })}
           </div>
        </div>
      </div>
    </section>
  );
};
