import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Trophy, Users, Activity, Star } from 'lucide-react';
import { teams, players } from '../data/mockData';
export function TeamProfile() {
  const { id } = useParams();
  const team = teams.find((t) => t.id === id) || teams[0]; // Fallback to first team if not found
  const teamPlayers = players.filter((p) => p.teamId === team.id);
  return (
    <div className="min-h-screen pb-24">
      {/* Hero Banner */}
      <div className="relative h-[40vh] md:h-[50vh] flex items-end pb-12 pt-32 md:pt-40">
        <div
          className="absolute inset-0 z-0 opacity-40 mix-blend-overlay"
          style={{
            backgroundImage: `url(${team.logo})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(20px)'
          }} />
        
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-midnight via-midnight/80 to-transparent" />
        <div
          className="absolute top-0 left-0 w-full h-2 z-20"
          style={{
            backgroundColor: team.color
          }} />
        

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <Link
            to="/teams"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-6 transition-colors text-sm font-oswald tracking-wider">
            
            <ArrowLeft className="w-4 h-4" /> BACK TO TEAMS
          </Link>

          <div className="flex flex-col md:flex-row items-center md:items-end gap-6 md:gap-8">
            <motion.div
              initial={{
                scale: 0.8,
                opacity: 0
              }}
              animate={{
                scale: 1,
                opacity: 1
              }}
              className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden border-4 bg-deepnight shadow-2xl shrink-0"
              style={{
                borderColor: team.color,
                boxShadow: `0 0 30px ${team.color}40`
              }}>
              
              <img
                src={team.logo}
                alt={team.name}
                className="w-full h-full object-cover" />
              
            </motion.div>

            <div className="text-center md:text-left flex-grow">
              <motion.h1
                initial={{
                  y: 20,
                  opacity: 0
                }}
                animate={{
                  y: 0,
                  opacity: 1
                }}
                className="text-5xl md:text-7xl font-bebas text-white mb-2">
                
                {team.name}
              </motion.h1>
              <motion.div
                initial={{
                  y: 20,
                  opacity: 0
                }}
                animate={{
                  y: 0,
                  opacity: 1
                }}
                transition={{
                  delay: 0.1
                }}
                className="flex flex-wrap justify-center md:justify-start gap-4 text-sm font-oswald tracking-wider text-gray-300">
                
                <span className="bg-white/10 px-3 py-1 rounded-full border border-white/5">
                  Captain: <span className="text-white">{team.captain}</span>
                </span>
                <span className="bg-white/10 px-3 py-1 rounded-full border border-white/5">
                  Coach: <span className="text-white">{team.coach}</span>
                </span>
                <span className="bg-white/10 px-3 py-1 rounded-full border border-white/5">
                  Owner: <span className="text-white">{team.owner}</span>
                </span>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Col: Stats & Info */}
          <div className="space-y-8">
            <motion.div
              initial={{
                opacity: 0,
                y: 20
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              className="glass-panel p-6 rounded-2xl border border-white/10">
              
              <h3 className="font-bebas text-2xl mb-6 flex items-center gap-2">
                <Activity className="text-electric w-5 h-5" /> SEASON STATS
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 p-4 rounded-xl text-center">
                  <div className="text-3xl font-bebas text-white">
                    {team.stats.played}
                  </div>
                  <div className="text-[10px] font-oswald text-gray-400 uppercase tracking-widest">
                    Matches
                  </div>
                </div>
                <div className="bg-white/5 p-4 rounded-xl text-center">
                  <div className="text-3xl font-bebas text-white">
                    {team.stats.points}
                  </div>
                  <div className="text-[10px] font-oswald text-gray-400 uppercase tracking-widest">
                    Points
                  </div>
                </div>
                <div className="bg-white/5 p-4 rounded-xl text-center">
                  <div className="text-3xl font-bebas text-green-400">
                    {team.stats.won}
                  </div>
                  <div className="text-[10px] font-oswald text-gray-400 uppercase tracking-widest">
                    Won
                  </div>
                </div>
                <div className="bg-white/5 p-4 rounded-xl text-center">
                  <div className="text-3xl font-bebas text-red-400">
                    {team.stats.lost}
                  </div>
                  <div className="text-[10px] font-oswald text-gray-400 uppercase tracking-widest">
                    Lost
                  </div>
                </div>
              </div>
              <div className="mt-4 bg-white/5 p-4 rounded-xl flex justify-between items-center">
                <span className="text-xs font-oswald text-gray-400 uppercase tracking-widest">
                  Net Run Rate
                </span>
                <span
                  className={`font-bebas text-xl ${team.stats.nrr > 0 ? 'text-green-400' : 'text-red-400'}`}>
                  
                  {team.stats.nrr > 0 ? '+' : ''}
                  {team.stats.nrr}
                </span>
              </div>
            </motion.div>

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
                delay: 0.2
              }}
              className="glass-panel p-6 rounded-2xl border border-white/10">
              
              <h3 className="font-bebas text-2xl mb-6 flex items-center gap-2">
                <Trophy className="text-gold w-5 h-5" /> RECENT FORM
              </h3>
              <div className="flex justify-between items-center">
                {['W', 'W', 'L', 'W', 'L'].map((result, i) =>
                <div
                  key={i}
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bebas text-lg ${result === 'W' ? 'bg-green-500/20 text-green-400 border border-green-500/50' : 'bg-red-500/20 text-red-400 border border-red-500/50'}`}>
                  
                    {result}
                  </div>
                )}
              </div>
            </motion.div>
          </div>

          {/* Right Col: Squad */}
          <div className="lg:col-span-2">
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
              className="glass-panel p-6 md:p-8 rounded-2xl border border-white/10">
              
              <div className="flex justify-between items-center mb-8">
                <h3 className="font-bebas text-3xl flex items-center gap-2">
                  <Users className="text-electric w-6 h-6" /> CURRENT SQUAD
                </h3>
                <Link
                  to="/players"
                  className="text-xs font-oswald text-electric hover:text-white transition-colors tracking-widest uppercase">
                  
                  View All Players →
                </Link>
              </div>

              {teamPlayers.length > 0 ?
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {teamPlayers.map((player) =>
                <Link key={player.id} to={`/players/${player.id}`}>
                      <div className="bg-white/5 border border-white/5 rounded-xl p-4 flex items-center gap-4 hover:bg-white/10 transition-colors group">
                        <div className="w-16 h-16 rounded-lg overflow-hidden shrink-0">
                          <img
                        src={player.image}
                        alt={player.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                      
                        </div>
                        <div className="flex-grow">
                          <div className="flex justify-between items-start">
                            <h4 className="font-bebas text-xl text-white group-hover:text-electric transition-colors">
                              {player.name}
                            </h4>
                            <span className="font-bebas text-xl text-white/20">
                              {player.jerseyNumber}
                            </span>
                          </div>
                          <p className="text-xs text-gray-400 font-oswald tracking-wider">
                            {player.role}
                          </p>
                        </div>
                      </div>
                    </Link>
                )}
                </div> :

              <div className="text-center py-12 text-gray-500 font-oswald tracking-widest">
                  Squad data currently unavailable.
                </div>
              }
            </motion.div>
          </div>
        </div>
      </div>
    </div>);

}
