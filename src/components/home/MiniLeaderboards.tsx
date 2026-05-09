import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { players, teams } from '../../data/mockData';
export function MiniLeaderboards() {
  const [activeTab, setActiveTab] = useState<'Batters' | 'Bowlers'>('Batters');
  const topBatters = [...players].
  filter((p) => p.role === 'Batter').
  sort((a, b) => b.stats.runs - a.stats.runs).
  slice(0, 5);
  const topBowlers = [...players].
  filter((p) => p.role === 'Bowler').
  sort((a, b) => b.stats.wickets - a.stats.wickets).
  slice(0, 5);
  const displayData = activeTab === 'Batters' ? topBatters : topBowlers;
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-bebas text-white mb-2">
              LEADERBOARDS
            </h2>
            <p className="text-gray-400 font-oswald tracking-widest uppercase text-sm">
              Top Performers of the Season
            </p>
          </div>

          <div className="flex glass rounded-lg p-1 border border-white/10">
            {['Batters', 'Bowlers'].map((tab) =>
            <button
              key={tab}
              onClick={() => setActiveTab(tab as any)}
              className={`px-6 py-2 rounded-md font-oswald text-sm tracking-wider transition-all ${activeTab === tab ? 'bg-electric text-midnight font-bold shadow-[0_0_10px_rgba(0,194,255,0.5)]' : 'text-gray-400 hover:text-white'}`}>
              
                {tab}
              </button>
            )}
          </div>
        </div>

        <div className="glass-panel rounded-2xl overflow-hidden border border-white/10">
          <div className="grid grid-cols-[50px_1fr_100px_100px] gap-4 p-4 border-b border-white/10 bg-white/5 font-oswald text-xs tracking-widest text-gray-400 uppercase">
            <div className="text-center">Rank</div>
            <div>Player</div>
            <div className="text-right">Team</div>
            <div className="text-right">
              {activeTab === 'Batters' ? 'Runs' : 'Wickets'}
            </div>
          </div>

          <div className="divide-y divide-white/5">
            {displayData.map((player, index) => {
              const team = teams.find((t) => t.id === player.teamId);
              return (
                <motion.div
                  key={player.id}
                  initial={{
                    opacity: 0,
                    x: -20
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0
                  }}
                  viewport={{
                    once: true
                  }}
                  transition={{
                    delay: index * 0.1
                  }}
                  className="grid grid-cols-[50px_1fr_100px_100px] gap-4 p-4 items-center hover:bg-white/5 transition-colors group">
                  
                  <div className="text-center font-bebas text-2xl text-gray-500 group-hover:text-electric transition-colors">
                    #{index + 1}
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden border border-white/10">
                      <img
                        src={player.image}
                        alt={player.name}
                        className="w-full h-full object-cover" />
                      
                    </div>
                    <div>
                      <div className="font-bebas text-xl text-white">
                        {player.name}
                      </div>
                      <div className="text-xs text-gray-400">{player.role}</div>
                    </div>
                  </div>
                  <div className="text-right font-oswald text-sm text-gray-300">
                    {team?.shortName}
                  </div>
                  <div className="text-right font-bebas text-2xl text-electric">
                    {activeTab === 'Batters' ?
                    player.stats.runs :
                    player.stats.wickets}
                  </div>
                </motion.div>);

            })}
          </div>
        </div>
      </div>
    </section>);

}