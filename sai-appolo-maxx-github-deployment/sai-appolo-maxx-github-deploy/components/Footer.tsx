import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Youtube, MapPin, Mail, Phone } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Brand Info */}
          <div>
            <h3 className="text-white text-base font-bold mb-2">SAI APPOLO MAXX</h3>
            <p className="text-xs leading-relaxed mb-3">
              Your trusted partner for high-quality motorcycle spare parts.
            </p>
            <div className="flex space-x-3">
              <a href={CONTACT_INFO.facebook} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-blue-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href={CONTACT_INFO.youtube} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-red-500 transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-base font-bold mb-2">Quick Links</h3>
            <ul className="space-y-1 text-sm">
              <li><Link to="/" className="hover:text-orange-500 transition-colors text-xs">Home</Link></li>
              <li><Link to="/products" className="hover:text-orange-500 transition-colors text-xs">Our Products</Link></li>
              <li><Link to="/contact" className="hover:text-orange-500 transition-colors text-xs">Contact Support</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-white text-base font-bold mb-2">Contact Us</h3>
            <ul className="space-y-2 text-xs">
              <li className="flex items-start gap-2">
                <MapPin className="text-orange-500 shrink-0" size={16} />
                <span>{CONTACT_INFO.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="text-orange-500 shrink-0" size={16} />
                <a href={`tel:${CONTACT_INFO.mobile}`} className="hover:text-white transition-colors">{CONTACT_INFO.mobile}</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="text-orange-500 shrink-0" size={16} />
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-white transition-colors">{CONTACT_INFO.email}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-6 pt-4 text-center text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} Sai Appolo Maxx. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;