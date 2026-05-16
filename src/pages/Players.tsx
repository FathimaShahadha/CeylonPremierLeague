import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Search, Filter, Star } from 'lucide-react';
import { players, teams } from '../data/mockData';
export function Players() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeRole, setActiveRole] = useState<string>('All');
  const roles = ['All', 'Batter', 'Bowler', 'All-Rounder', 'Wicket-Keeper'];
  const filteredPlayers = players.filter((player) => {
    const matchesSearch = player.name.
    toLowerCase().
    includes(searchTerm.toLowerCase());
    const matchesRole = activeRole === 'All' || player.role === activeRole;
    return matchesSearch && matchesRole;
  });
  return (
    <div className="min-h-screen pt-32 md:pt-40 pb-24 relative">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald/10 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <motion.h1
              initial={{
                opacity: 0,
                x: -20
              }}
              animate={{
                opacity: 1,
                x: 0
              }}
              className="text-5xl md:text-7xl font-bebas text-white mb-2">
              
              PLAYER <span className="text-emerald">DIRECTORY</span>
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
              
              The stars of Ceylon Premier League
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
            className="w-full md:w-auto flex flex-col sm:flex-row gap-4">
            
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input
                type="text"
                placeholder="Search players..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full sm:w-64 bg-white/5 border border-white/10 rounded-lg py-2 pl-10 pr-4 text-sm focus:outline-none focus:border-emerald transition-colors text-white" />
              
            </div>
            <div className="flex bg-white/5 rounded-lg p-1 border border-white/10 overflow-x-auto hide-scrollbar">
              {roles.map((role) =>
              <button
                key={role}
                onClick={() => setActiveRole(role)}
                className={`px-4 py-1.5 rounded-md font-oswald text-xs tracking-wider whitespace-nowrap transition-all ${activeRole === role ? 'bg-emerald text-midnight shadow-[0_0_15px_rgba(0,255,102,0.5)]' : 'text-gray-400 hover:text-white'}`}>
                
                  {role}
                </button>
              )}
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredPlayers.map((player, index) => {
            const team = teams.find((t) => t.id === player.teamId);
            return (
              <motion.div
                key={player.id}
                initial={{
                  opacity: 0,
                  scale: 0.9
                }}
                animate={{
                  opacity: 1,
                  scale: 1
                }}
                transition={{
                  delay: index * 0.05
                }}>
                
                <Link to={`/players/${player.id}`} className="block group">
                  <div className="glass-panel rounded-xl overflow-hidden border border-white/10 hover:border-emerald/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,255,102,0.2)]">
                    <div className="relative h-48 bg-deepnight overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-midnight to-transparent z-10" />
                      <img
                        src={player.image}
                        alt={player.name}
                        className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700" />
                      
                      <div className="absolute top-2 right-2 z-20 bg-midnight/80 backdrop-blur-sm border border-white/10 px-2 py-1 rounded flex items-center gap-1">
                        <Star className="w-3 h-3 text-gold fill-gold" />
                        <span className="text-[10px] font-bold text-white">
                          {player.mvpPoints}
                        </span>
                      </div>
                      <div className="absolute bottom-0 right-2 z-0 font-bebas text-8xl text-white/5 leading-none translate-y-4">
                        {player.jerseyNumber}
                      </div>
                    </div>

                    <div className="p-5 relative z-20 -mt-6">
                      <div className="flex justify-between items-end mb-2">
                        <h3 className="font-bebas text-2xl text-white group-hover:text-emerald transition-colors">
                          {player.name}
                        </h3>
                        <span className="font-bebas text-xl text-gray-500">
                          #{player.jerseyNumber}
                        </span>
                      </div>

                      <div className="flex items-center gap-2 mb-4">
                        <div
                          className="w-4 h-4 rounded-full"
                          style={{
                            backgroundColor: team?.color
                          }} />
                        
                        <span className="text-xs font-oswald text-gray-400 tracking-wider uppercase">
                          {team?.name}
                        </span>
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        <div className="bg-white/5 rounded p-2 text-center border border-white/5">
                          <div className="text-[10px] text-gray-500 uppercase font-bold">
                            Role
                          </div>
                          <div className="text-xs text-white font-oswald">
                            {player.role}
                          </div>
                        </div>
                        <div className="bg-white/5 rounded p-2 text-center border border-white/5">
                          <div className="text-[10px] text-gray-500 uppercase font-bold">
                            {player.role === 'Bowler' ? 'Wickets' : 'Runs'}
                          </div>
                          <div className="text-xs text-emerald font-bold">
                            {player.role === 'Bowler' ?
                            player.stats.wickets :
                            player.stats.runs}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>);

          })}
        </div>

        {filteredPlayers.length === 0 &&
        <div className="text-center py-20">
            <p className="text-gray-500 font-oswald tracking-widest text-lg">
              No players found matching your criteria.
            </p>
          </div>
        }
      </div>
    </div>);

}
