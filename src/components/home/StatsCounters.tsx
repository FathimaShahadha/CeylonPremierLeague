import React from 'react';
import { motion } from 'framer-motion';
export function StatsCounters() {
  const stats = [
  {
    label: 'TOTAL TEAMS',
    value: '8',
    suffix: ''
  },
  {
    label: 'MATCHES',
    value: '34',
    suffix: ''
  },
  {
    label: 'PLAYERS',
    value: '120',
    suffix: '+'
  },
  {
    label: 'TOTAL RUNS',
    value: '4500',
    suffix: '+'
  },
  {
    label: 'SIXES HIT',
    value: '350',
    suffix: '+'
  }];

  return (
    <section className="py-20 relative border-y border-white/5 bg-deepnight/50">
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-center">
          {stats.map((stat, i) =>
          <motion.div
            key={i}
            initial={{
              opacity: 0,
              scale: 0.5
            }}
            whileInView={{
              opacity: 1,
              scale: 1
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.5,
              delay: i * 0.1
            }}
            className="flex flex-col items-center justify-center p-4">
            
              <div className="text-4xl md:text-5xl lg:text-6xl font-bebas text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 mb-2 drop-shadow-lg">
                {stat.value}
                <span className="text-electric">{stat.suffix}</span>
              </div>
              <div className="font-oswald text-xs md:text-sm tracking-[0.2em] text-gray-400 uppercase">
                {stat.label}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}