import React from 'react';
import { StaticLogo } from './Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-8 md:space-y-0">
          <div className="flex flex-col items-center md:items-start">
            <div className="bg-white p-2 rounded-full mb-4">
                <StaticLogo className="w-16 h-16" />
            </div>
            <p className="text-sm text-gray-400 max-w-xs text-center md:text-left">
              Standing together against hate. <br/>
              Building a future of unity and respect.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-12 text-center md:text-left">
            <div>
              <h4 className="text-sm font-bold tracking-[0.2em] uppercase mb-6 text-gray-500">Organization</h4>
              <ul className="space-y-4 text-sm text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-bold tracking-[0.2em] uppercase mb-6 text-gray-500">Connect</h4>
              <ul className="space-y-4 text-sm text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Newsletter</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-900 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 uppercase tracking-wider">
          <p>&copy; {new Date().getFullYear()} Join The Circle. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Design inspired by Blue Square Alliance</p>
        </div>
      </div>
    </footer>
  );
};