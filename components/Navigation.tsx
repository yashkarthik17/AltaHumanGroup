import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { Logo } from './Logo';

export const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Dynamic colors based on scroll state
  const textColor = isScrolled ? 'text-black' : 'text-white';
  const logoColor = isScrolled ? 'black' : 'white';
  const buttonBg = isScrolled ? 'bg-black text-white hover:bg-zinc-800' : 'bg-white text-black hover:bg-gray-200';
  const navBg = isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-6';

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ease-in-out ${navBg}`}>
      <div className="max-w-screen-2xl mx-auto px-6 sm:px-12">
        <div className="flex justify-between items-center">
          
          {/* Left: Animated Logo */}
          <div className="flex items-center gap-4">
             <a href="#" className="block group">
                {/* We use the Animated Logo here as requested */}
                <Logo 
                  className={`transition-all duration-500 ${isScrolled ? 'w-12 h-12' : 'w-16 h-16'}`} 
                  color={logoColor}
                />
             </a>
             {/* Text Brand only visible on scroll or desktop to keep hero clean */}
             <div className={`hidden md:block transition-opacity duration-300 ${isScrolled ? 'opacity-100' : 'opacity-0'}`}>
                <span className={`block text-[10px] font-bold tracking-[0.2em] leading-none ${textColor}`}>JOIN THE</span>
                <span className={`block text-[10px] font-bold tracking-[0.2em] leading-none ${textColor}`}>CIRCLE</span>
             </div>
          </div>

          {/* Right: Actions */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#mission" className={`text-sm font-semibold tracking-wide hover:opacity-70 transition-opacity ${textColor}`}>
              The Mission
            </a>
            
            <a href="#education" className={`text-sm font-semibold tracking-wide hover:opacity-70 transition-opacity ${textColor}`}>
              Education
            </a>

            <a href="#donate" className={`px-8 py-3 text-xs font-bold tracking-[0.15em] uppercase transition-all duration-300 rounded-full ${buttonBg}`}>
              Support
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className={`p-2 ${textColor}`}>
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
          <div className="flex flex-col h-full justify-center items-center space-y-8 p-8">
            <Logo className="w-24 h-24 mb-8" />
            <a href="#mission" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-bold text-black">Our Mission</a>
            <a href="#education" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-bold text-black">Education</a>
            <a href="#donate" onClick={() => setIsMobileMenuOpen(false)} className="px-10 py-4 bg-black text-white text-sm font-bold tracking-widest uppercase rounded-full">Support</a>
          </div>
      </div>
    </nav>
  );
};