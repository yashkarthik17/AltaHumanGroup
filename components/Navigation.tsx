
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { AHGLogo } from './Logo';
import { Link, useLocation } from 'react-router-dom';

export const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  const logoColor = "black"; 
  
  // Header background logic - Solid white to prevent blur/transparency issues
  const navBg = (isScrolled || isMobileMenuOpen) 
    ? 'bg-white shadow-sm py-3 md:py-4' 
    : 'bg-white py-3 md:py-6';

  return (
    <>
      {/* Main Navbar */}
      <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ease-in-out ${navBg} border-b border-gray-100`}>
        <div className="max-w-screen-2xl mx-auto px-6 sm:px-12 relative z-[102]">
          <div className="flex justify-between items-center">
            
            {/* Left: AHG Branding */}
            <div className="flex items-center gap-4">
               <Link to="/" onClick={handleLinkClick} className="block">
                  <AHGLogo className={`transition-all duration-300 ${isScrolled ? 'h-6 md:h-7' : 'h-8 md:h-10'}`} color={logoColor} />
               </Link>
            </div>

            {/* Right: Desktop Actions */}
            <div className="hidden md:flex items-center space-x-12">
              <Link to="/" className={`text-[10px] font-bold uppercase tracking-[0.3em] hover:opacity-50 transition-opacity ${location.pathname === '/' ? 'text-black opacity-100' : 'text-gray-400'}`}>
                The Group
              </Link>
              <Link to="/about" className={`text-[10px] font-bold uppercase tracking-[0.3em] hover:opacity-50 transition-opacity ${location.pathname === '/about' ? 'text-black opacity-100' : 'text-gray-400'}`}>
                Our Charter
              </Link>
              <div className="w-px h-4 bg-gray-200"></div>
              <Link to="/campaign" className="text-[10px] font-bold uppercase tracking-[0.3em] px-6 py-2.5 bg-black text-white hover:bg-zinc-800 transition-all shadow-lg shadow-black/5">
                Join The Circle
              </Link>
              <Link to="/get-involved" className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400 hover:text-black transition-colors">
                Contact
              </Link>
            </div>

            {/* Mobile Menu Toggle - Only visible when menu is CLOSED */}
            <div className="md:hidden">
              <button 
                type="button"
                onClick={() => setIsMobileMenuOpen(true)} 
                className={`p-2 -mr-2 text-black hover:opacity-70 transition-opacity ${isMobileMenuOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
                aria-label="Open menu"
              >
                <Menu size={28} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay - Portal/Sibling approach for guaranteed z-index stacking */}
      <div 
        className={`fixed inset-0 bg-white z-[9999] md:hidden transition-transform duration-300 ease-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
          {/* Menu Header (Internal) - Ensures Close button is always accessible */}
          <div className="flex justify-between items-center px-6 sm:px-12 py-3 sm:py-4 border-b border-gray-100 bg-white">
             <div className="h-8 w-24 flex items-center">
                <Link to="/" onClick={handleLinkClick}>
                   <AHGLogo className="h-6" color="black" />
                </Link>
             </div>
             <button 
                type="button"
                onClick={() => setIsMobileMenuOpen(false)} 
                className="p-2 -mr-2 text-black hover:opacity-70 transition-opacity"
                aria-label="Close menu"
              >
                <X size={28} />
             </button>
          </div>

          {/* Menu Content - Scrollable independent of body */}
          <div className="h-full overflow-y-auto pb-24 bg-white">
            <div className="px-8 py-10 flex flex-col space-y-8">
              <div className="mb-2">
                  <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-gray-400 block mb-4">Navigation</span>
                  <div className="w-12 h-0.5 bg-black/10"></div>
              </div>
              
              <div className="flex flex-col space-y-6">
                <Link to="/" onClick={handleLinkClick} className="text-3xl font-serif italic font-bold tracking-tighter text-black block">
                  The Group
                </Link>
                <Link to="/about" onClick={handleLinkClick} className="text-3xl font-serif italic font-bold tracking-tighter text-black block">
                  Our Charter
                </Link>
                <Link to="/campaign" onClick={handleLinkClick} className="text-3xl font-serif italic font-bold tracking-tighter text-black block">
                  Join The Circle
                </Link>
                <Link to="/news" onClick={handleLinkClick} className="text-3xl font-serif italic font-bold tracking-tighter text-black block">
                  Newsroom
                </Link>
                <Link to="/get-involved" onClick={handleLinkClick} className="text-3xl font-serif italic font-bold tracking-tighter text-black block">
                  Contact
                </Link>
              </div>
              
              <div className="pt-10 border-t border-gray-100">
                  <div className="flex flex-col gap-4">
                     <Link to="/campaign" onClick={handleLinkClick} className="w-full py-4 bg-black text-white text-center text-xs font-bold uppercase tracking-[0.2em] block shadow-md">
                        Active Campaign
                     </Link>
                     <div className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-400 text-center mt-4">
                        Alta Humanitarian Group
                     </div>
                  </div>
              </div>
            </div>
          </div>
      </div>
    </>
  );
};
