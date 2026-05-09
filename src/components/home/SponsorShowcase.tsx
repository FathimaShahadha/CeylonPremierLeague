import React from 'react';
import { motion } from 'framer-motion';
export function SponsorShowcase() {
  const sponsors = Array.from(
    {
      length: 8
    },
    (_, i) => `SPONSOR ${i + 1}`
  );
  return (
    <section className="py-16 bg-white/5 border-y border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
        <h3 className="font-oswald text-sm tracking-[0.3em] text-gray-400 uppercase">
          Official Partners
        </h3>
      </div>

      <div className="relative flex overflow-x-hidden group">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-midnight to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-midnight to-transparent z-10" />

        <div className="py-4 animate-marquee whitespace-nowrap flex items-center group-hover:[animation-play-state:paused]">
          {sponsors.concat(sponsors).map((sponsor, i) =>
          <span
            key={i}
            className="mx-12 text-3xl md:text-4xl font-bebas text-gray-600 hover:text-white transition-colors cursor-pointer">
            
              {sponsor}
            </span>
          )}
        </div>
      </div>
    </section>);

}