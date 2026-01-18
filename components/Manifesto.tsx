
import React from 'react';

export const Manifesto: React.FC = () => {
  return (
    <section id="mission" className="py-16 md:py-24 bg-zinc-50">
      <div className="container mx-auto px-6 sm:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="space-y-6 md:space-y-8 text-center md:text-left">
            <h2 className="text-xs font-bold tracking-[0.2em] uppercase text-gray-400">The Symbol</h2>
            <h3 className="text-3xl md:text-5xl font-serif leading-tight">
              Why the Black Circle?
            </h3>
            <div className="w-12 h-1 bg-black mx-auto md:mx-0"></div>
            <p className="text-gray-600 leading-loose text-base md:text-lg">
              Like the Blue Square represents a stand against antisemitism, the <strong>Black Circle</strong> represents our unwavering commitment to protecting Black lives.
            </p>
            <p className="text-gray-600 leading-loose text-base md:text-lg">
              A circle has no beginning and no end. It represents wholeness, unity, and protection. 
              By "Joining the Circle," you are creating a perimeter of safety and support around a community 
              that has faced centuries of systemic prejudice.
            </p>
          </div>
          
          <div className="relative h-64 md:h-96 bg-white shadow-xl md:shadow-2xl p-8 md:p-12 flex items-center justify-center border border-gray-100">
             <div className="absolute top-2 left-2 md:top-4 md:left-4 text-4xl md:text-6xl font-serif text-gray-100">"</div>
             <p className="text-xl md:text-2xl font-serif text-center italic text-gray-800 leading-relaxed px-4">
               In the end, we will remember not the words of our enemies, but the silence of our friends.
             </p>
             <p className="absolute bottom-6 md:bottom-12 text-[10px] md:text-sm font-bold tracking-widest uppercase mt-6 text-gray-500">— Martin Luther King Jr.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
