import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      {/* Top Bar for Contact */}
      <div className="bg-slate-900 text-white text-xs py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex space-x-4">
            <span className="flex items-center gap-1">
              <Phone size={12} /> {CONTACT_INFO.mobile}
            </span>
            <span className="hidden sm:flex items-center gap-1 text-green-400">
              <MessageCircle size={12} /> WhatsApp: {CONTACT_INFO.whatsapp}
            </span>
          </div>
          <div className="text-slate-300">
            Punasiya, Deoghar, Jharkhand
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center gap-3">
              {/* Logo using existing asset */}
              <img
                src="/assets/logo  final.png"
                alt="SAI APPOLO MAXX Logo"
                className="w-10 h-10 object-contain"
              />
              <span className="font-bold text-xl text-slate-800 tracking-tight">SAI APPOLO MAXX</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`${isActive(link.path)
                  ? 'text-orange-600 font-semibold'
                  : 'text-slate-600 hover:text-orange-600'
                  } transition-colors duration-200`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href={`https://wa.me/91${CONTACT_INFO.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full flex items-center gap-2 text-sm font-medium transition-colors"
            >
              <MessageCircle size={16} />
              Chat Now
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-slate-900 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${isActive(link.path)
                  ? 'bg-orange-50 text-orange-600'
                  : 'text-slate-700 hover:bg-slate-50'
                  }`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href={`https://wa.me/91${CONTACT_INFO.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="block w-full text-left px-3 py-2 text-green-600 font-medium"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;