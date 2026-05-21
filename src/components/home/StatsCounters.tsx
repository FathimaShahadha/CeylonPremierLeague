import React from 'react';
import { motion } from 'framer-motion';

export function StatsCounters() {
  const stats = [
    { label: 'TEAMS', value: '8', suffix: '', top: '10%', left: '15%', delay: 0.1 },
    { label: 'MATCHES', value: '34', suffix: '', top: '60%', left: '10%', delay: 0.3 },
    { label: 'PLAYERS', value: '120', suffix: '+', top: '15%', left: '70%', delay: 0.2 },
    { label: 'RUNS', value: '4500', suffix: '+', top: '50%', left: '80%', delay: 0.4 },
    { label: 'SIXES', value: '350', suffix: '+', top: '80%', left: '45%', delay: 0.5 }
  ];

  return (
    <section className="py-32 relative border-y border-lightgray overflow-hidden">
      <div className="absolute inset-0 bg-softwhite" />
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 min-h-[600px] flex flex-col md:block items-center justify-center">
        
        {/* Central Graphic */}
        <motion.div 
          className="text-center relative z-20 flex-1 flex flex-col justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-emerald/20 blur-[120px] rounded-full pointer-events-none" />
          <h2 className="font-bebas text-7xl md:text-[180px] leading-none text-slate drop-shadow-sm mb-12 md:mb-0 relative z-10 pt-10 md:pt-0">
            TOURNAMENT<br/>
            <span className="text-emerald">STATS</span>
          </h2>
        </motion.div>

        {/* Floating Stats (Desktop) */}
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: stat.delay }}
            className="absolute hidden md:flex flex-col items-center justify-center glass-panel p-6 rounded-2xl border border-lightgray shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:border-emerald/50 hover:shadow-[0_0_30px_rgba(0,160,64,0.15)] hover:scale-110 transition-all duration-300 z-30 bg-white/80 backdrop-blur-xl"
            style={{ top: stat.top, left: stat.left }}
          >
            <div className="text-6xl lg:text-7xl font-bebas text-slate mb-1 drop-shadow-sm">
              {stat.value}
              <span className="text-emerald">{stat.suffix}</span>
            </div>
            <div className="font-oswald text-sm tracking-[0.2em] text-darkgray uppercase">
              {stat.label}
            </div>
          </motion.div>
        ))}

        {/* Mobile Grid Fallback */}
        <div className="relative z-30 flex md:hidden flex-wrap items-center justify-center gap-4 w-full">
           {stats.map((stat, i) => (
             <div key={i} className="glass-panel p-6 rounded-xl border border-lightgray w-[45%] text-center shadow-sm bg-white/80 backdrop-blur-md">
               <div className="text-4xl font-bebas text-slate mb-1">
                 {stat.value}
                 <span className="text-emerald">{stat.suffix}</span>
               </div>
               <div className="font-oswald text-xs tracking-widest text-darkgray uppercase">
                 {stat.label}
               </div>
             </div>
           ))}
        </div>
        
      </div>
    </section>
  );
}