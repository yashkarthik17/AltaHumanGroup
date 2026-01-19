
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Globe, Users, ChevronRight, Scale, Building2, GraduationCap, ArrowUpRight } from 'lucide-react';
import { AHGLogo, Logo } from '../components/Logo';

const PillarCard: React.FC<{ title: string; desc: string; icon: React.ReactNode }> = ({ title, desc, icon }) => (
    <div className="p-8 md:p-10 border border-gray-100 hover:border-black transition-all duration-500 bg-white group text-center md:text-left">
        <div className="mb-6 md:mb-8 text-black transform group-hover:scale-110 transition-transform flex justify-center md:justify-start">
            {icon}
        </div>
        <h3 className="text-xl md:text-2xl font-bold mb-4 uppercase tracking-tighter italic font-serif">/ {title}</h3>
        <p className="text-gray-600 leading-relaxed font-light text-base md:text-lg">{desc}</p>
    </div>
);

const NewsCard: React.FC<{ category: string; date: string; title: string; image: string }> = ({ category, date, title, image }) => (
    <div className="group cursor-pointer">
        <div className="aspect-[3/2] overflow-hidden mb-6 bg-gray-100 relative">
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-10"></div>
            <img 
                src={image} 
                alt={title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
            />
        </div>
        <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-gray-400 mb-3 justify-center md:justify-start">
            <span className="text-black">{category}</span>
            <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
            <span>{date}</span>
        </div>
        <h3 className="text-xl md:text-2xl font-serif font-bold leading-tight mb-4 group-hover:underline decoration-1 underline-offset-4 text-center md:text-left">
            {title}
        </h3>
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-black opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0 justify-center md:justify-start">
            Read Dispatch <ArrowUpRight size={14} />
        </div>
    </div>
);

export const Home: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white text-black selection:bg-black selection:text-white">
        {/* Organizational Hero - Distinct from Campaign Hero */}
        <section className="relative min-h-[85vh] flex items-center bg-white pt-24 md:pt-20 overflow-hidden border-b border-gray-100">
            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center z-10 pb-12 md:pb-0">
                <div className="animate-fade-in-up text-center md:text-left">
                    <div className="mb-10 md:mb-12 flex justify-center md:justify-start">
                        <AHGLogo className="h-16 md:h-20" color="black" />
                    </div>
                    <h1 className="text-5xl md:text-8xl font-serif font-bold leading-[0.9] tracking-tighter mb-8 italic">
                        Advocacy. <br/> Equity. <br/> Protection.
                    </h1>
                    <p className="text-lg md:text-2xl text-gray-400 max-w-lg font-light mb-10 md:mb-12 leading-relaxed mx-auto md:mx-0">
                        Alta Humanitarian Group operates at the intersection of civil rights and systemic reform. We are the architects of a more just future.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center md:justify-start">
                        <Link to="/campaign" className="px-8 py-5 bg-black text-white font-bold uppercase tracking-widest hover:bg-zinc-800 transition-all flex items-center justify-center gap-3 group text-xs md:text-sm">
                            Current Campaign <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link to="/about" className="px-8 py-5 border-2 border-black text-black font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all text-center text-xs md:text-sm">
                            Our Governance
                        </Link>
                    </div>
                </div>
                <div className="relative hidden md:block">
                    <div className="aspect-[4/5] bg-gray-50 overflow-hidden">
                        <img 
                            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1000&auto=format&fit=crop" 
                            alt="Legal and humanitarian professional setting" 
                            className="w-full h-full object-cover grayscale opacity-60 mix-blend-multiply"
                        />
                    </div>
                    <div className="absolute -bottom-10 -left-10 bg-black p-12 text-white w-72 shadow-2xl">
                        <div className="text-xs uppercase tracking-[0.4em] opacity-50 mb-4">Charter established</div>
                        <div className="text-4xl font-serif italic font-bold">2024</div>
                    </div>
                </div>
            </div>
            
            {/* Corporate Accents */}
            <div className="absolute top-0 right-0 w-1/4 h-full bg-gray-50 -z-0"></div>
        </section>

        {/* The Group's Mission */}
        <section className="py-24 md:py-32 container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center md:text-left">
                <span className="text-xs font-bold tracking-[0.5em] uppercase text-gray-400 mb-8 block">Global Mission</span>
                <h2 className="text-3xl md:text-6xl font-serif font-bold italic tracking-tighter mb-10 md:mb-12 leading-tight">
                    We stand as a bulwark against systemic prejudice and institutional hate.
                </h2>
                <div className="grid md:grid-cols-2 gap-8 md:gap-12 text-base md:text-lg text-gray-600 font-light leading-relaxed text-left">
                    <p>
                        Alta Humanitarian Group (AHG) was founded on the principle that humanitarian work must go beyond aid—it must include advocacy and structural protection for marginalized communities, specifically focusing on the African American experience.
                    </p>
                    <p>
                        Through our legal networks, educational outreach, and high-visibility public campaigns, we ensure that allyship is not just a sentiment, but a measurable, effective force for change.
                    </p>
                </div>
            </div>
        </section>

        {/* Operational Pillars */}
        <section className="py-24 md:py-32 bg-gray-50 border-y border-gray-100">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-20 gap-8">
                    <div className="max-w-2xl mx-auto md:mx-0 text-center md:text-left">
                        <span className="text-xs font-bold tracking-[0.4em] uppercase text-gray-400 mb-6 block">Our Framework</span>
                        <h2 className="text-4xl md:text-6xl font-serif font-bold italic tracking-tighter">Fields of Operation</h2>
                    </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-l border-gray-200">
                    <PillarCard 
                        title="Advocacy" 
                        desc="Leading high-level policy discussions and lobbying for federal civil rights protections."
                        icon={<Shield size={40} strokeWidth={1} />}
                    />
                    <PillarCard 
                        title="Equity" 
                        desc="Redistributing resources and social capital to communities affected by systemic disinvestment."
                        icon={<Globe size={40} strokeWidth={1} />}
                    />
                    <PillarCard 
                        title="Protection" 
                        desc="Providing real-time legal and security resources for communities facing direct hate and violence."
                        icon={<Users size={40} strokeWidth={1} />}
                    />
                </div>
            </div>
        </section>

        {/* Latest Intelligence / Newsroom */}
        <section className="py-24 md:py-32 container mx-auto px-6 border-b border-gray-100">
             <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6 text-center md:text-left">
                 <div className="w-full md:w-auto">
                     <span className="text-xs font-bold tracking-[0.4em] uppercase text-gray-400 mb-4 block">Newsroom</span>
                     <h2 className="text-4xl md:text-5xl font-serif font-bold italic tracking-tighter">Latest Intelligence</h2>
                 </div>
                 <Link to="/news" className="hidden md:flex text-xs font-bold uppercase tracking-widest border-b border-black pb-1 hover:opacity-50 transition-opacity">
                    View All Dispatches
                 </Link>
             </div>

             <div className="grid md:grid-cols-3 gap-12">
                 <NewsCard 
                    category="Press Release"
                    date="Oct 12, 2024"
                    title="AHG Expands Legal Defense Fund for Civil Rights Cases"
                    image="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=800&auto=format&fit=crop"
                 />
                 <NewsCard 
                    category="Policy Report"
                    date="Sep 28, 2024"
                    title="Systemic Reform: The 2025 Legislative Agenda"
                    image="https://images.unsplash.com/photo-1577415124269-fc1140a69e91?q=80&w=800&auto=format&fit=crop"
                 />
                 <NewsCard 
                    category="Community"
                    date="Sep 15, 2024"
                    title="Launch of the National 'Safety Perimeter' Initiative"
                    image="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=800&auto=format&fit=crop"
                 />
             </div>
             
             <div className="mt-12 flex justify-center md:hidden">
                 <Link to="/news" className="text-xs font-bold uppercase tracking-widest border-b border-black pb-1 hover:opacity-50 transition-opacity">
                    View All Dispatches
                 </Link>
             </div>
        </section>

        {/* Strategic Coalition */}
        <section className="py-20 bg-zinc-50">
             <div className="container mx-auto px-6 text-center">
                  <span className="text-xs font-bold tracking-[0.4em] uppercase text-gray-400 mb-8 block">Strategic Coalition</span>
                  <h3 className="text-2xl md:text-3xl font-serif italic mb-12 max-w-3xl mx-auto leading-relaxed">
                      United with industry leaders to dismantle barriers and build equitable systems.
                  </h3>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-20 items-center opacity-60 grayscale">
                       <div className="flex flex-col items-center gap-3">
                           <Scale size={32} />
                           <span className="text-[10px] font-bold uppercase tracking-[0.2em]">National Law Center</span>
                       </div>
                       <div className="flex flex-col items-center gap-3">
                           <Building2 size={32} />
                           <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Urban Development Corp</span>
                       </div>
                       <div className="flex flex-col items-center gap-3">
                           <GraduationCap size={32} />
                           <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Academic Alliance</span>
                       </div>
                       <div className="flex flex-col items-center gap-3">
                           <Globe size={32} />
                           <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Global Rights Watch</span>
                       </div>
                  </div>
             </div>
        </section>

        {/* Active Initiative Callout: Join The Circle */}
        <section className="py-24 md:py-32 container mx-auto px-6">
            <div className="flex flex-col md:flex-row gap-12 md:gap-20 items-center">
                <div className="w-full md:w-1/2 flex justify-center md:justify-start">
                    <div className="p-8 bg-zinc-50 border border-gray-100 inline-block mb-0 md:mb-12">
                        <Logo className="w-40 h-40 md:w-48 md:h-48 animate-spin-slow" />
                    </div>
                </div>
                <div className="w-full md:w-1/2 text-center md:text-left">
                    <span className="text-xs font-bold tracking-[0.4em] uppercase text-gray-400 mb-6 block">Flagship Initiative</span>
                    <h2 className="text-5xl md:text-7xl font-serif font-bold italic mb-8 leading-[0.9] tracking-tighter">Join The Circle.</h2>
                    <p className="text-lg md:text-xl text-gray-500 mb-10 font-light leading-relaxed">
                        Our active awareness campaign is a visual declaration of allyship. While AHG handles the structural reform, the Circle movement builds the community required to sustain it.
                    </p>
                    <Link to="/campaign" className="flex items-center justify-center md:justify-start gap-4 text-black font-bold uppercase tracking-widest text-sm hover:opacity-50 transition-opacity">
                        Enter Campaign Portal <ChevronRight size={18} />
                    </Link>
                </div>
            </div>
        </section>
    </div>
  );
};
