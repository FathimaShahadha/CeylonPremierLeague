import React from 'react';
import { Link } from 'react-router-dom';
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Mail,
  MapPin,
  Phone } from
'lucide-react';
import { Logo } from '../brand/Logo';
export function Footer() {
  return (
    <footer className="bg-deepnight border-t border-white/10 pt-16 pb-24 md:pb-8 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-electric/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Col */}
          <div className="space-y-6">
            <Logo />
            <p className="text-gray-400 text-sm leading-relaxed">
              The premier T10 cricket league in the region. Where Champions Rise. 
              Experience the luxury, the passion, and the glory of cricket.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) =>
              <a
                key={i}
                href="#"
                className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-400 hover:text-electric hover:border-electric transition-all hover:neon-glow-blue">
                
                  <Icon className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bebas text-xl text-white mb-6 tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
              'Teams',
              'Players',
              'Matches',
              'Points Table',
              'Stats Dashboard'].
              map((item) =>
              <li key={item}>
                  <Link
                  to={`/${item.toLowerCase().replace(' ', '-')}`}
                  className="text-gray-400 hover:text-electric transition-colors text-sm font-medium">
                  
                    {item}
                  </Link>
                </li>
              )}
            </ul>
          </div>

          {/* League Info */}
          <div>
            <h4 className="font-bebas text-xl text-white mb-6 tracking-wider">
              League Info
            </h4>
            <ul className="space-y-3">
              {[
              'About Tournament',
              'Rules & Format',
              'Sponsors',
              'News & Updates',
              'Contact Us'].
              map((item) =>
              <li key={item}>
                  <Link
                  to={`/${item.toLowerCase().split(' ')[0]}`}
                  className="text-gray-400 hover:text-electric transition-colors text-sm font-medium">
                  
                    {item}
                  </Link>
                </li>
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bebas text-xl text-white mb-6 tracking-wider">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-gray-400 text-sm">
                <MapPin className="w-5 h-5 text-electric shrink-0" />
                <span>CPL Grand Arena, Colombo</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400 text-sm">
                <Phone className="w-5 h-5 text-electric shrink-0" />
                <span>+94 11 234 5678</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400 text-sm">
                <Mail className="w-5 h-5 text-electric shrink-0" />
                <span>info@cplt10.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Sponsor Strip */}
        <div className="border-t border-white/10 py-8 mb-8">
          <p className="text-center text-xs font-oswald text-gray-500 uppercase tracking-widest mb-6">
            Official Partners
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Placeholder sponsor logos */}
            {[1, 2, 3, 4, 5].map((i) =>
            <div key={i} className="text-xl font-bebas text-white">
                SPONSOR {i}
              </div>
            )}
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs">
            © 2026 Ceylon Premier League. All rights reserved.
          </p>
          <div className="flex space-x-6 text-xs text-gray-500">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>);

}