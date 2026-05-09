import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Info } from 'lucide-react';
import { teams } from '../data/mockData';
export function PointsTable() {
  // Sort teams by points, then NRR
  const sortedTeams = [...teams].sort((a, b) => {
    if (b.stats.points !== a.stats.points) {
      return b.stats.points - a.stats.points;
    }
    return b.stats.nrr - a.stats.nrr;
  });
  return (
    <div className="min-h-screen pt-12 pb-24 relative">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-electric/5 blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <motion.h1
            initial={{
              opacity: 0,
              y: -20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            className="text-5xl md:text-7xl font-bebas text-white mb-2">
            
            POINTS <span className="text-electric">TABLE</span>
          </motion.h1>
          <motion.p
            initial={{
              opacity: 0
            }}
            animate={{
              opacity: 1
            }}
            transition={{
              delay: 0.2
            }}
            className="text-gray-400 font-oswald tracking-[0.2em] uppercase">
            
            The Road to the Playoffs
          </motion.p>
        </div>

        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            delay: 0.3
          }}
          className="glass-panel rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-white/5 border-b border-white/10">
                  <th className="p-4 font-oswald text-xs tracking-widest text-gray-400 uppercase w-16 text-center">
                    Pos
                  </th>
                  <th className="p-4 font-oswald text-xs tracking-widest text-gray-400 uppercase">
                    Team
                  </th>
                  <th className="p-4 font-oswald text-xs tracking-widest text-gray-400 uppercase text-center w-12">
                    P
                  </th>
                  <th className="p-4 font-oswald text-xs tracking-widest text-gray-400 uppercase text-center w-12">
                    W
                  </th>
                  <th className="p-4 font-oswald text-xs tracking-widest text-gray-400 uppercase text-center w-12">
                    L
                  </th>
                  <th className="p-4 font-oswald text-xs tracking-widest text-gray-400 uppercase text-center w-20">
                    NRR
                  </th>
                  <th className="p-4 font-oswald text-xs tracking-widest text-electric uppercase text-center w-16">
                    Pts
                  </th>
                  <th className="p-4 font-oswald text-xs tracking-widest text-gray-400 uppercase text-center w-32 hidden sm:table-cell">
                    Form
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {sortedTeams.map((team, index) => {
                  const isTop4 = index < 4;
                  // Generate random form for UI
                  const form = Array.from(
                    {
                      length: 5
                    },
                    () => Math.random() > 0.4 ? 'W' : 'L'
                  );
                  return (
                    <motion.tr
                      key={team.id}
                      initial={{
                        opacity: 0,
                        x: -20
                      }}
                      animate={{
                        opacity: 1,
                        x: 0
                      }}
                      transition={{
                        delay: index * 0.1
                      }}
                      className={`group hover:bg-white/5 transition-colors ${isTop4 ? 'bg-electric/5' : ''}`}>
                      
                      <td className="p-4 text-center">
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center mx-auto font-bebas text-xl ${isTop4 ? 'bg-electric text-midnight shadow-[0_0_10px_rgba(0,194,255,0.5)]' : 'bg-white/10 text-gray-400'}`}>
                          
                          {index + 1}
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          <div
                            className="w-10 h-10 rounded-full overflow-hidden border-2 shrink-0"
                            style={{
                              borderColor: team.color
                            }}>
                            
                            <img
                              src={team.logo}
                              alt={team.name}
                              className="w-full h-full object-cover" />
                            
                          </div>
                          <div>
                            <div className="font-bebas text-xl text-white group-hover:text-electric transition-colors">
                              {team.name}
                            </div>
                            <div className="text-xs font-oswald text-gray-500 hidden sm:block">
                              {team.shortName}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="p-4 text-center font-bebas text-xl text-gray-300">
                        {team.stats.played}
                      </td>
                      <td className="p-4 text-center font-bebas text-xl text-green-400">
                        {team.stats.won}
                      </td>
                      <td className="p-4 text-center font-bebas text-xl text-red-400">
                        {team.stats.lost}
                      </td>
                      <td className="p-4 text-center font-oswald text-sm text-gray-300">
                        {team.stats.nrr > 0 ? '+' : ''}
                        {team.stats.nrr.toFixed(3)}
                      </td>
                      <td className="p-4 text-center font-bebas text-2xl text-electric font-bold">
                        {team.stats.points}
                      </td>
                      <td className="p-4 text-center hidden sm:table-cell">
                        <div className="flex justify-center gap-1">
                          {form.map((result, i) =>
                          <div
                            key={i}
                            className={`w-5 h-5 rounded-sm flex items-center justify-center text-[10px] font-bold ${result === 'W' ? 'bg-green-500/20 text-green-400 border border-green-500/30' : 'bg-red-500/20 text-red-400 border border-red-500/30'}`}>
                            
                              {result}
                            </div>
                          )}
                        </div>
                      </td>
                    </motion.tr>);

                })}
              </tbody>
            </table>
          </div>
        </motion.div>

        <div className="mt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-oswald text-gray-400 tracking-wider">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-electric/20 border border-electric/50" />
            <span>Top 4 teams qualify for Playoffs</span>
          </div>
          <div className="flex items-center gap-2 text-gray-500">
            <Info className="w-4 h-4" />
            <span>Tied points are resolved by NRR</span>
          </div>
        </div>
      </div>
    </div>);

}