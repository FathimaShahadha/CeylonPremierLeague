import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { players, teams } from '../../data/mockData';
import { TrendingUp, Medal } from 'lucide-react';

export function MiniLeaderboards() {
  const [activeTab, setActiveTab] = useState<'Batters' | 'Bowlers'>('Batters');
  const topBatters = [...players].filter(p => p.role === 'Batter').sort((a, b) => b.stats.runs - a.stats.runs).slice(0, 5);
  const topBowlers = [...players].filter(p => p.role === 'Bowler').sort((a, b) => b.stats.wickets - a.stats.wickets).slice(0, 5);
  const displayData = activeTab === 'Batters' ? topBatters : topBowlers;

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Cinematic Background */}
      <div className="absolute top-1/2 right-0 w-[800px] h-[800px] bg-emerald/5 blur-[150px] rounded-full pointer-events-none translate-x-1/2 -translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-2">
              <TrendingUp className="w-8 h-8 text-emerald" />
              <h2 className="text-5xl md:text-7xl font-bebas text-white">
                SEASON <span className="text-emerald">LEADERS</span>
              </h2>
            </div>
            <p className="text-gray-400 font-oswald tracking-[0.2em] uppercase text-sm md:ml-11">
              Top Performers of CPL 2026
            </p>
          </motion.div>

          <motion.div 
            className="flex bg-white/5 rounded-xl p-1 border border-white/10 backdrop-blur-md"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {['Batters', 'Bowlers'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as any)}
                className={`px-8 py-3 rounded-lg font-bebas text-xl tracking-wider transition-all duration-300 ${activeTab === tab ? 'bg-emerald text-midnight shadow-[0_0_20px_rgba(0,255,102,0.4)]' : 'text-gray-400 hover:text-white'}`}
              >
                {tab}
              </button>
            ))}
          </motion.div>
        </div>

        <div className="space-y-4">
          {displayData.map((player, index) => {
            const team = teams.find((t) => t.id === player.teamId);
            const isFirst = index === 0;
            return (
              <motion.div
                key={player.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative group flex flex-col sm:flex-row items-center gap-6 p-4 sm:p-6 rounded-2xl border transition-all duration-300 ${isFirst ? 'bg-emerald/10 border-emerald/50 shadow-[0_10px_30px_rgba(0,255,102,0.2)] scale-100 sm:scale-105 z-20 my-8' : 'bg-white/5 border-white/10 hover:border-white/30 hover:bg-white/10 z-10'}`}
              >
                {isFirst && (
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-gold rounded-full flex items-center justify-center border-4 border-midnight shadow-lg z-30">
                    <Medal className="w-6 h-6 text-midnight" />
                  </div>
                )}
                
                <div className={`font-bebas ${isFirst ? 'text-6xl text-emerald drop-shadow-md' : 'text-4xl text-gray-600'} w-12 text-center shrink-0`}>
                  #{index + 1}
                </div>
                
                <div className="flex items-center gap-6 flex-1 w-full">
                  <div className={`rounded-full overflow-hidden border-2 ${isFirst ? 'w-24 h-24 border-emerald shadow-[0_0_15px_rgba(0,255,102,0.4)]' : 'w-16 h-16 border-white/20'}`}>
                    <img src={player.image} alt={player.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="flex-1">
                    <h3 className={`font-bebas ${isFirst ? 'text-4xl text-white' : 'text-2xl text-gray-200'}`}>{player.name}</h3>
                    <div className="flex items-center gap-3 mt-1">
                      <span className="text-xs font-oswald tracking-widest text-gray-400 uppercase">{team?.name}</span>
                    </div>
                  </div>
                </div>

                <div className="shrink-0 text-center sm:text-right mt-4 sm:mt-0 w-full sm:w-auto bg-midnight/50 sm:bg-transparent p-4 sm:p-0 rounded-xl">
                  <div className="text-[10px] font-oswald text-gray-500 uppercase tracking-widest mb-1">
                    {activeTab === 'Batters' ? 'Total Runs' : 'Total Wickets'}
                  </div>
                  <div className={`font-bebas ${isFirst ? 'text-6xl text-emerald drop-shadow-[0_0_15px_rgba(0,255,102,0.5)]' : 'text-4xl text-white'}`}>
                    {activeTab === 'Batters' ? player.stats.runs : player.stats.wickets}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}