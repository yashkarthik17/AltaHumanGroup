
import React from 'react';
import { AHGLogo } from './Logo';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100 py-24">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-2">
            <AHGLogo className="h-12 mb-8" />
            <p className="text-lg text-gray-500 max-w-sm font-light leading-relaxed">
              Protecting civil rights and fostering global equity through advocacy, education, and response.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold tracking-[0.4em] uppercase mb-8 text-black">Resource Portal</h4>
            <ul className="space-y-4 text-sm font-bold uppercase tracking-widest text-gray-400">
              <li><Link to="/about" className="hover:text-black transition-colors">Our Charter</Link></li>
              <li><Link to="/news" className="hover:text-black transition-colors">Newsroom</Link></li>
              <li><Link to="/impact" className="hover:text-black transition-colors">Impact Data</Link></li>
              <li><Link to="/careers" className="hover:text-black transition-colors">Career Opportunities</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold tracking-[0.4em] uppercase mb-8 text-black">Social Impact</h4>
            <ul className="space-y-4 text-sm font-bold uppercase tracking-widest text-gray-400">
              <li><Link to="/campaign" className="hover:text-black transition-colors">Join The Circle</Link></li>
              <li><a href="#" className="hover:text-black transition-colors">Partner With Us</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Volunteer Hub</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Contact Support</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400">
          <p>&copy; {new Date().getFullYear()} Alta Humanitarian Group. All rights reserved.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-black">Privacy Charter</a>
            <a href="#" className="hover:text-black">Terms of Service</a>
            <a href="#" className="hover:text-black">Global Ethics</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
