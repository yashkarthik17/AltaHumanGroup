
import React from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { TypewriterSection } from './components/TypewriterSection';
import { Manifesto } from './components/Manifesto';
import { ImpactStats } from './components/ImpactStats';
import { WearTheCircle } from './components/WearTheCircle';
import { SocialShare } from './components/SocialShare';
import { EducationAI } from './components/EducationAI';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 selection:bg-black selection:text-white">
      <Navigation />
      <main>
        {/* Visual impactful intro */}
        <Hero />
        
        {/* Rhythmic transition component */}
        <TypewriterSection />

        {/* Narrative and data sections */}
        <Manifesto />
        <ImpactStats />
        
        {/* New Merchandise/Pin Section */}
        <WearTheCircle />

        {/* Parallax Social Media Section (Word in Middle Effect) */}
        <SocialShare />

        {/* Interactive education tool */}
        <EducationAI />
        
        {/* Final Conversion Point */}
        <section id="join" className="py-24 bg-black text-white text-center border-t border-gray-900">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl md:text-6xl font-serif mb-8 leading-tight">Will you join us?</h2>
            <p className="text-gray-400 text-xl mb-12 max-w-2xl mx-auto font-light leading-relaxed">
              Add your name to the growing list of allies standing against prejudice. Together, we are an unbreakable perimeter.
            </p>
            <div className="flex justify-center">
              <form className="w-full max-w-lg flex flex-col sm:flex-row gap-0 overflow-hidden rounded-none" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1 px-6 py-4 text-black focus:outline-none bg-white font-light text-lg"
                />
                <button className="px-10 py-4 bg-zinc-800 text-white font-bold uppercase tracking-widest hover:bg-zinc-700 transition-colors">
                  Join Circle
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
