import React, { useState } from 'react';
import { Download, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* --- Logo Section --- */}
        <div className="flex-shrink-0 cursor-pointer">
          <span className="text-2xl font-bold tracking-tighter text-gray-900">
            Park<span className="text-orange-500">Karo</span>
          </span>
        </div>

        {/* --- Desktop Navigation & Actions --- */}
        <div className="hidden md:flex items-center gap-8">
          
          {/* Action Button (From Reference) */}
          <button className="flex items-center gap-2 cursor-pointer px-5 py-2.5 rounded-full border border-gray-200 text-gray-700 font-medium hover:border-orange-200 hover:text-orange-600 hover:bg-orange-50 transition-all duration-300 group">
            <Download size={18} className="group-hover:-translate-y-0.5 transition-transform duration-300" />
            <span>Get the app</span>
          </button>

          {/* Navigation Links */}
          <div className="flex items-center gap-8 text-sm font-medium text-gray-600">
            <a href="#" className="hover:text-purple-600 transition-colors">
              Home
            </a>
            <a href="#" className="hover:text-purple-600 transition-colors">
              How it works
            </a>
            <a href="#" className="hover:text-purple-600 transition-colors">
              Rent out your space
            </a>
            <a href="#" className="hover:text-purple-600 transition-colors">
              Help
            </a>
          </div>
        </div>

        {/* --- Mobile Menu Button --- */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* --- Mobile Dropdown (Optional) --- */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 animate-in slide-in-from-top-5 duration-200">
          <div className="px-6 py-4 flex flex-col gap-4">
            <a href="#" className="text-gray-600 font-medium hover:text-purple-600">Home</a>
            <a href="#" className="text-gray-600 font-medium hover:text-purple-600">How it works</a>
            <a href="#" className="text-gray-600 font-medium hover:text-purple-600">Rent out your space</a>
            <a href="#" className="text-gray-600 font-medium hover:text-purple-600">Help</a>
            <hr className="border-gray-100" />
            <button className="flex w-full items-center justify-center gap-2 px-5 py-3 rounded-xl bg-orange-50 text-orange-600 font-medium hover:bg-orange-100 transition">
              <Download size={18} />
              Get the app
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;