
import React, { useEffect } from 'react';
import { Hero } from '../components/Hero';
import { TypewriterSection } from '../components/TypewriterSection';
import { Manifesto } from '../components/Manifesto';
import { ImpactStats } from '../components/ImpactStats';
import { WearTheCircle } from '../components/WearTheCircle';
import { SocialShare } from '../components/SocialShare';
import { EducationAI } from '../components/EducationAI';

export const Campaign: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900 selection:bg-black selection:text-white pt-0">
      <main>
        {/* Visual impactful intro with zooming logo and inclusive video */}
        <Hero />
        
        {/* Rhythmic transition component */}
        <TypewriterSection />

        {/* Narrative and data sections */}
        <Manifesto />
        <ImpactStats />
        
        {/* New Merchandise/Pin Section */}
        <WearTheCircle />

        {/* Parallax Social Media Section */}
        <SocialShare />

        {/* Interactive education tool */}
        <EducationAI />
        
        {/* Final Conversion Point */}
        <section id="join" className="py-32 bg-black text-white text-center">
          <div className="container mx-auto px-6">
            <div className="mb-12">
                <span className="text-4xl md:text-6xl font-serif font-bold italic tracking-tighter">#BlackCircle</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-serif italic mb-8 leading-tight tracking-tighter">Will you join us?</h2>
            <p className="text-gray-400 text-xl mb-12 max-w-2xl mx-auto font-light leading-relaxed">
              Add your voice to the perimeter. Together, we are creating a world where hate has no place to hide.
            </p>
            <div className="flex justify-center">
              <form className="w-full max-w-lg flex flex-col sm:flex-row gap-0 overflow-hidden rounded-none" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1 px-6 py-5 text-black focus:outline-none bg-white font-light text-lg"
                />
                <button className="px-10 py-5 bg-white text-black border-l border-gray-200 font-bold uppercase tracking-widest hover:bg-gray-100 transition-colors">
                  Join Circle
                </button>
              </form>
            </div>
            <div className="mt-12 text-zinc-500 text-[10px] uppercase tracking-widest font-bold">
                Project of Alta Humanitarian Group
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
