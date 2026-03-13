import React from 'react';
import { Phone, MapPin, Mail, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Info */}
          <div>
            <div className="mb-4">
              <span className="text-[10px] font-bold text-blue-400 leading-none block">
                బాషా హోమ్ అప్లయెన్సెస్
              </span>
              <h3 className="text-2xl font-black text-red-600 tracking-tighter leading-none">
                BASHA
              </h3>
              <span className="text-[10px] font-bold text-white tracking-widest leading-none block">
                HOME APPLIANCES
              </span>
            </div>
            <p className="text-gray-400 mb-4">
              Your trusted partner for quality home appliances. We bring comfort and convenience to your home with the best brands and reliable service.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-red-500">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-400 hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="/products" className="text-gray-400 hover:text-white transition-colors">Products</a>
              </li>
              <li>
                <a href="/about" className="text-gray-400 hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="https://example.com/services" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">Services</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-red-500">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                <span className="text-gray-400">
                  123 Main Street, Electronics Market,<br />
                  City Name, State - 123456
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-red-500 flex-shrink-0" />
                <a href="tel:+918019961896" className="text-gray-400 hover:text-white transition-colors">
                  +91 80199 61896
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-red-500 flex-shrink-0" />
                <a href="mailto:info@bashahomeappliances.com" className="text-gray-400 hover:text-white transition-colors">
                  info@bashahomeappliances.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Basha Home Appliances. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
