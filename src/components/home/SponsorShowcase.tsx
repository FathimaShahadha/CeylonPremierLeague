import React from 'react';
import { motion } from 'framer-motion';

export function SponsorShowcase() {
  const sponsors = Array.from({ length: 8 }, (_, i) => `SPONSOR ${i + 1}`);
  
  return (
    <section className="py-24 relative overflow-hidden bg-cream">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[200px] bg-emerald/10 blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center relative z-10">
        <h3 className="font-oswald text-sm md:text-base tracking-[0.4em] text-emerald uppercase flex items-center justify-center gap-4">
          <span className="w-12 h-px bg-emerald/50" />
          Official Partners
          <span className="w-12 h-px bg-emerald/50" />
        </h3>
      </div>

      <div className="relative flex overflow-x-hidden group z-10 py-10 border-y border-lightgray bg-white/80 backdrop-blur-sm">
        <div className="absolute left-0 top-0 bottom-0 w-48 bg-gradient-to-r from-cream to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-48 bg-gradient-to-l from-cream to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee whitespace-nowrap flex items-center group-hover:[animation-play-state:paused]">
          {sponsors.concat(sponsors).map((sponsor, i) => (
            <div key={i} className="mx-16 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-500 opacity-60 hover:opacity-100 hover:scale-110 cursor-pointer">
              <span className="text-4xl md:text-6xl font-bebas text-slate-800 tracking-wider drop-shadow-sm">
                {sponsor}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}