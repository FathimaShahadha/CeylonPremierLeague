import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, TrendingUp } from 'lucide-react';
import { teams } from '../data/mockData';
export function Teams() {
  return (
    <div className="min-h-screen pt-32 md:pt-40 pb-24 relative">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-electric/10 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h1
            initial={{
              opacity: 0,
              y: -20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            className="text-5xl md:text-7xl font-bebas text-slate mb-4 drop-shadow-sm">
            
            THE <span className="text-electric">FRANCHISES</span>
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
            className="text-darkgray font-oswald tracking-[0.2em] uppercase">
            
            8 Teams. 1 Trophy. Ultimate Glory.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teams.map((team, index) =>
          <motion.div
            key={team.id}
            initial={{
              opacity: 0,
              y: 30
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              delay: index * 0.1
            }}>
            
              <Link to={`/teams/${team.id}`} className="block group">
                <div className="glass-panel rounded-2xl overflow-hidden relative transition-all duration-500 hover:-translate-y-2 hover:shadow-xl border border-lightgray hover:border-lightgray">
                  {/* Color Band */}
                  <div
                  className="h-2 w-full"
                  style={{
                    backgroundColor: team.color
                  }} />
                

                  {/* Glow Effect on Hover */}
                  <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at center, ${team.color}, transparent 70%)`
                  }} />
                

                  <div className="p-6 relative z-10">
                    <div className="flex justify-between items-start mb-6">
                      <div
                      className="w-20 h-20 rounded-full overflow-hidden border-2 bg-cream"
                      style={{
                        borderColor: team.color
                      }}>
                      
                        <img
                        src={team.logo}
                        alt={team.name}
                        className="w-full h-full object-cover" />
                      
                      </div>
                      <div className="text-right">
                        <span className="font-bebas text-3xl text-slate/20 group-hover:text-slate/40 transition-colors">
                          {team.shortName}
                        </span>
                      </div>
                    </div>

                    <h3 className="font-bebas text-3xl text-slate mb-1 group-hover:text-electric transition-colors">
                      {team.name}
                    </h3>
                    <p className="text-xs text-darkgray font-oswald tracking-wider mb-6">
                      Owner: {team.owner}
                    </p>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-slate/5 rounded-lg p-3 border border-lightgray">
                        <div className="text-[10px] text-midgray uppercase font-bold mb-1 flex items-center gap-1">
                          <Shield className="w-3 h-3" /> Captain
                        </div>
                        <div className="font-oswald text-sm text-slate">
                          {team.captain}
                        </div>
                      </div>
                      <div className="bg-slate/5 rounded-lg p-3 border border-lightgray">
                        <div className="text-[10px] text-midgray uppercase font-bold mb-1 flex items-center gap-1">
                          <TrendingUp className="w-3 h-3" /> W/L Record
                        </div>
                        <div className="font-oswald text-sm text-slate">
                          <span className="text-green-600">
                            {team.stats.won}
                          </span>{' '}
                          -{' '}
                          <span className="text-red-600">
                            {team.stats.lost}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-between items-center pt-4 border-t border-lightgray">
                      <div className="text-xs font-oswald text-darkgray">
                        NRR:{' '}
                        <span
                        className={
                        team.stats.nrr > 0 ?
                        'text-green-600' :
                        'text-red-600'
                        }>
                        
                          {team.stats.nrr > 0 ? '+' : ''}
                          {team.stats.nrr}
                        </span>
                      </div>
                      <div className="text-xs font-bold text-electric group-hover:translate-x-1 transition-transform">
                        VIEW PROFILE →
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          )}
        </div>
      </div>
    </div>);

}
