import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Star, Zap, Target, ArrowUpRight } from 'lucide-react';
import { matches, teams, players } from '../../data/mockData';
import { Link } from 'react-router-dom';

export function FeaturedCards() {
  const lastMatch = matches.find((m) => m.status === 'Completed');
  const mvp = players.sort((a, b) => b.mvpPoints - a.mvpPoints)[0];
  const orangeCap = players[0];

  return (
    <section className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 auto-rows-[minmax(180px,auto)]">
          
          {/* Card 1: MVP - Spans 8 cols */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-8 glass-panel p-8 md:p-10 rounded-3xl border border-lightgray hover:border-emerald/50 transition-all duration-500 group relative overflow-hidden flex flex-col justify-between shadow-[0_10px_30px_rgba(0,0,0,0.05)]"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald/10 blur-[80px] rounded-full group-hover:bg-emerald/20 transition-colors duration-500" />
            <div className="relative z-10 flex justify-between items-start mb-8">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-emerald/20 flex items-center justify-center border border-emerald/30">
                  <Star className="w-6 h-6 text-emerald" />
                </div>
                <h3 className="font-bebas text-2xl md:text-3xl tracking-widest text-slate">MVP OF THE WEEK</h3>
              </div>
              <ArrowUpRight className="w-6 h-6 text-darkgray group-hover:text-emerald transition-colors" />
            </div>

            {mvp && (
              <div className="relative z-10 flex flex-col sm:flex-row items-center sm:items-end gap-6 text-center sm:text-left">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden border-2 border-emerald/50 shadow-[0_0_20px_rgba(0,255,102,0.2)]">
                  <img src={mvp.image} alt={mvp.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="flex-1">
                  <p className="text-emerald font-oswald tracking-widest text-sm md:text-base mb-1">{teams.find((t) => t.id === mvp.teamId)?.name}</p>
                  <h4 className="font-bebas text-5xl md:text-6xl text-slate mb-4 drop-shadow-sm">{mvp.name}</h4>
                  <div className="inline-flex items-center gap-2 bg-emerald/10 border border-emerald/30 text-emerald px-4 py-2 rounded-lg font-bebas text-xl md:text-2xl">
                    <Zap className="w-5 h-5" /> {mvp.mvpPoints} POINTS
                  </div>
                </div>
              </div>
            )}
          </motion.div>

          {/* Card 2: Orange Cap - Spans 4 cols */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-4 glass-panel p-8 md:p-10 rounded-3xl border border-lightgray hover:border-orangeGlow/50 transition-all duration-500 group relative overflow-hidden flex flex-col justify-between shadow-[0_10px_30px_rgba(0,0,0,0.05)]"
          >
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-orangeGlow/10 blur-[60px] rounded-full group-hover:bg-orangeGlow/20 transition-colors duration-500" />
            
            <div className="relative z-10 flex justify-between items-start mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-orangeGlow/20 flex items-center justify-center border border-orangeGlow/30">
                  <Target className="w-5 h-5 text-orangeGlow" />
                </div>
                <h3 className="font-bebas text-2xl tracking-widest text-slate">ORANGE CAP</h3>
              </div>
            </div>

            {orangeCap && (
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-orangeGlow shadow-[0_0_20px_rgba(255,140,0,0.2)] mb-4">
                  <img src={orangeCap.image} alt={orangeCap.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <h4 className="font-bebas text-3xl md:text-4xl text-slate mb-1 drop-shadow-sm">{orangeCap.name}</h4>
                <p className="text-4xl md:text-5xl font-bebas text-orangeGlow mb-2 drop-shadow-[0_2px_4px_rgba(255,140,0,0.2)]">{orangeCap.stats.runs} RUNS</p>
                <p className="text-sm font-oswald text-darkgray tracking-wider">SR: {orangeCap.stats.strikeRate}</p>
              </div>
            )}
          </motion.div>

          {/* Card 3: Last Match Result - Spans 12 cols, overlapping visually */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="md:col-span-12 glass-panel p-8 md:p-12 rounded-3xl border border-lightgray hover:border-gold/30 transition-all duration-500 group relative overflow-hidden mt-0 md:-mt-10 z-20 shadow-[0_15px_40px_rgba(0,0,0,0.08)] bg-white/80"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-2xl bg-gold/10 blur-[100px] rounded-full group-hover:bg-gold/20 transition-colors duration-500" />
            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex flex-col items-center md:items-start gap-2">
                <div className="flex items-center gap-3 bg-gold/10 border border-gold/20 px-4 py-2 rounded-full">
                  <Trophy className="w-5 h-5 text-gold" />
                  <span className="font-bebas text-xl text-gold tracking-widest">LAST MATCH RESULT</span>
                </div>
                <p className="font-oswald text-darkgray text-sm tracking-widest pl-2">{lastMatch?.date}</p>
              </div>

              {lastMatch && (
                <div className="flex-1 flex flex-col sm:flex-row items-center justify-center gap-8 md:gap-16 w-full md:w-auto">
                  <div className="text-center sm:text-right flex-1">
                    <h4 className="font-bebas text-4xl md:text-5xl text-slate mb-2">{teams.find((t) => t.id === lastMatch.team1Id)?.shortName}</h4>
                    <p className="font-bebas text-3xl md:text-4xl text-darkgray">{lastMatch.score?.team1}</p>
                  </div>
                  
                  <div className="hidden sm:block w-px h-24 bg-gradient-to-b from-transparent via-lightgray to-transparent" />
                  <div className="sm:hidden w-full h-px bg-gradient-to-r from-transparent via-lightgray to-transparent" />
                  
                  <div className="text-center sm:text-left flex-1">
                    <h4 className="font-bebas text-4xl md:text-5xl text-slate mb-2">{teams.find((t) => t.id === lastMatch.team2Id)?.shortName}</h4>
                    <p className="font-bebas text-3xl md:text-4xl text-darkgray">{lastMatch.score?.team2}</p>
                  </div>
                </div>
              )}

              <div className="text-center md:text-right shrink-0">
                <Link to="/matches" className="inline-flex items-center gap-2 bg-slate/10 hover:bg-slate/20 px-8 py-4 rounded-xl font-bebas text-xl text-slate transition-all hover:scale-105 border border-lightgray">
                  VIEW ALL FIXTURES
                  <ArrowUpRight className="w-6 h-6" />
                </Link>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}