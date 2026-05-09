import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, PlayCircle } from 'lucide-react';
import { Logo } from '../brand/Logo';
export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navLinks = [
  {
    name: 'Home',
    path: '/'
  },
  {
    name: 'Teams',
    path: '/teams'
  },
  {
    name: 'Matches',
    path: '/matches'
  },
  {
    name: 'Stats',
    path: '/stats'
  },
  {
    name: 'Points Table',
    path: '/points-table'
  }];

  return (
    <nav
      className={`fixed top-8 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? 'glass-panel py-2' : 'bg-transparent py-4'}`}>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link
            to="/"
            className="flex-shrink-0"
            onClick={() => setMobileMenuOpen(false)}>
            
            <Logo />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) =>
            <Link
              key={link.name}
              to={link.path}
              className={`font-oswald text-sm tracking-widest uppercase transition-colors hover:text-electric ${location.pathname === link.path ? 'text-electric drop-shadow-[0_0_8px_rgba(0,194,255,0.8)]' : 'text-gray-300'}`}>
              
                {link.name}
              </Link>
            )}
            <Link
              to="/admin"
              className="font-oswald text-sm tracking-widest uppercase transition-colors hover:text-electric text-gray-300 mr-2">
              Admin Area
            </Link>
            <Link
              to="/live"
              className="flex items-center gap-2 px-5 py-2 rounded-full bg-navy/80 border border-electric text-electric font-oswald tracking-wider text-sm hover:bg-electric hover:text-deepnight transition-all neon-glow-blue shadow-lg">
              
              <PlayCircle className="w-4 h-4" />
              WATCH LIVE
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white hover:text-electric transition-colors">
              
              {mobileMenuOpen ?
              <X className="w-6 h-6" /> :

              <Menu className="w-6 h-6" />
              }
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen &&
      <div className="md:hidden glass-panel absolute top-full left-0 right-0 border-t border-white/10">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) =>
          <Link
            key={link.name}
            to={link.path}
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-3 font-oswald text-base tracking-widest uppercase text-gray-300 hover:text-electric hover:bg-white/5 rounded-md">
            
                {link.name}
              </Link>
          )}
            <Link
              to="/admin"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-3 font-oswald text-base tracking-widest uppercase text-gray-300 hover:text-electric hover:bg-white/5 rounded-md">
              Admin Area
            </Link>
            <Link
            to="/live"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-4 flex items-center justify-center gap-2 px-5 py-3 rounded-md bg-navy/80 border border-electric text-electric font-oswald tracking-wider text-base neon-glow-blue">
            
              <PlayCircle className="w-5 h-5" />
              WATCH LIVE
            </Link>
          </div>
        </div>
      }
    </nav>);

}