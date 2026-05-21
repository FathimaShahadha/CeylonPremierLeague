import React from 'react';
import { Link } from 'react-router-dom';
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Mail,
  MapPin,
  Phone
} from 'lucide-react';
import { Logo } from '../brand/Logo';

export function Footer() {
  return (
    <footer className="bg-white border-t border-lightgray pt-16 pb-24 md:pb-8 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Col */}
          <div className="space-y-6">
            <Logo />
            <p className="text-darkgray text-sm leading-relaxed font-inter">
              The premier T10 cricket league in the region. Where Champions Rise. 
              Experience the luxury, the passion, and the glory of cricket.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-slate/5 border border-lightgray shadow-sm flex items-center justify-center text-darkgray hover:text-white hover:bg-emerald hover:border-emerald hover:shadow-[0_4px_15px_rgba(0,255,102,0.4)] hover:-translate-y-1 transition-all duration-300"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bebas text-2xl text-slate mb-6 tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 bg-emerald rounded-full"></span> Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                'Teams',
                'Players',
                'Matches',
                'Points Table',
                'Stats Dashboard'
              ].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase().replace(' ', '-')}`}
                    className="text-darkgray hover:text-emerald hover:pl-2 transition-all duration-300 text-sm font-oswald tracking-wide uppercase flex items-center gap-2 before:content-[''] before:w-1 before:h-1 before:bg-emerald before:rounded-full before:opacity-0 hover:before:opacity-100"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* League Info */}
          <div>
            <h4 className="font-bebas text-2xl text-slate mb-6 tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 bg-orangeGlow rounded-full"></span> League Info
            </h4>
            <ul className="space-y-3">
              {[
                'About Tournament',
                'Rules & Format',
                'Sponsors',
                'News & Updates',
                'Contact Us'
              ].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase().split(' ')[0]}`}
                    className="text-darkgray hover:text-orangeGlow hover:pl-2 transition-all duration-300 text-sm font-oswald tracking-wide uppercase flex items-center gap-2 before:content-[''] before:w-1 before:h-1 before:bg-orangeGlow before:rounded-full before:opacity-0 hover:before:opacity-100"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bebas text-2xl text-slate mb-6 tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 bg-electric rounded-full"></span> Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-darkgray text-sm font-inter">
                <MapPin className="w-5 h-5 text-electric shrink-0 mt-0.5" />
                <span>CPL Grand Arena,<br/>Colombo, Sri Lanka</span>
              </li>
              <li className="flex items-center space-x-3 text-darkgray text-sm font-inter">
                <Phone className="w-5 h-5 text-electric shrink-0" />
                <span>+94 11 234 5678</span>
              </li>
              <li className="flex items-center space-x-3 text-darkgray text-sm font-inter">
                <Mail className="w-5 h-5 text-electric shrink-0" />
                <span>info@cplt10.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Sponsor Strip */}
        <div className="border-t border-lightgray py-10 mb-8 mt-12 bg-slate/5 rounded-2xl">
          <p className="text-center text-xs font-oswald text-slate uppercase tracking-[0.3em] font-bold mb-8">
            Official Partners
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
            {/* Elegant text placeholders for sponsors until images are added */}
            {[
              { name: 'SPORTSCORP', color: 'text-slate' },
              { name: 'TECHVISION', color: 'text-darkgray' },
              { name: 'GLOBALPAY', color: 'text-slate' },
              { name: 'AERODYNAMICS', color: 'text-darkgray' },
              { name: 'NEXTGEN', color: 'text-slate' }
            ].map((sponsor, i) => (
              <div 
                key={i} 
                className={`text-2xl font-bebas tracking-widest ${sponsor.color} opacity-40 hover:opacity-100 hover:scale-110 transition-all duration-300 cursor-pointer grayscale hover:grayscale-0`}
              >
                {sponsor.name}
              </div>
            ))}
          </div>
        </div>

        {/* Copyright Area */}
        <div className="border-t border-lightgray pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-midgray text-xs font-inter">
            © {new Date().getFullYear()} Ceylon Premier League. All rights reserved.
          </p>
          <div className="flex space-x-6 text-xs font-inter font-medium text-darkgray">
            <a href="#" className="hover:text-emerald transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-emerald transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-emerald transition-colors">
              Cookie Settings
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}