import React from 'react';
import { motion } from 'framer-motion';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  AreaChart,
  Area
} from 'recharts';
import { Trophy, Target, Zap, Activity, Star, Medal } from 'lucide-react';
import { players, teams, matches } from '../data/mockData';

export function Stats() {
  const sortedBatters = [...players].filter(p => p.role === 'Batter' || p.role === 'All-Rounder').sort((a, b) => b.stats.runs - a.stats.runs);
  const sortedBowlers = [...players].filter(p => p.role === 'Bowler' || p.role === 'All-Rounder').sort((a, b) => b.stats.wickets - a.stats.wickets);
  const sortedMVP = [...players].sort((a, b) => b.mvpPoints - a.mvpPoints);
  
  const bestBatter = sortedBatters[0];
  const bestBowler = sortedBowlers[0];
  const mvp = sortedMVP[0];
  
  // Safe accessor to prevent crashes when mock data is missing players
  const getPlayer = (arr: any[], index: number) => arr[index] || null;

  const tournamentRunRateData = [
    { match: 'M1', runRate: 8.5 },
    { match: 'M2', runRate: 9.2 },
    { match: 'M3', runRate: 8.8 },
    { match: 'M4', runRate: 10.1 },
    { match: 'M5', runRate: 9.7 },
    { match: 'M6', runRate: 11.2 },
  ];

  const radarData = [
    { subject: 'Power', A: 120, B: 110, fullMark: 150 },
    { subject: 'Timing', A: 98, B: 130, fullMark: 150 },
    { subject: 'Consistency', A: 86, B: 130, fullMark: 150 },
    { subject: 'Strike Rate', A: 99, B: 100, fullMark: 150 },
    { subject: 'Boundaries', A: 85, B: 90, fullMark: 150 }
  ];

  return (
    <div className="min-h-screen pt-32 md:pt-40 pb-24 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-electric/10 blur-[150px] pointer-events-none" />
      
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bebas text-white mb-2"
          >
            TOURNAMENT <span className="text-electric">ANALYTICS</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 font-oswald tracking-[0.2em] uppercase"
          >
            Real-time Performance Dashboard
          </motion.p>
        </div>

        {/* Top KPIs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            { title: 'Best Batsman', value: bestBatter?.name, sub: `${bestBatter?.stats.runs} Runs`, icon: Target, color: 'text-gold', borderColor: 'border-gold/30', bg: 'bg-gold/5' },
            { title: 'Best Bowler', value: bestBowler?.name, sub: `${bestBowler?.stats.wickets} Wickets`, icon: Zap, color: 'text-neonpurple', borderColor: 'border-neonpurple/30', bg: 'bg-neonpurple/5' },
            { title: 'Tournament MVP', value: mvp?.name, sub: `${mvp?.mvpPoints} Pts`, icon: Trophy, color: 'text-emerald', borderColor: 'border-emerald/30', bg: 'bg-emerald/5' },
            { title: 'Most Sixes', value: bestBatter?.name, sub: `${Math.floor(bestBatter?.stats.runs / 12)} Sixes`, icon: Star, color: 'text-orangeGlow', borderColor: 'border-orangeGlow/30', bg: 'bg-orangeGlow/5' }
          ].map((kpi, idx) => {
            const Icon = kpi.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className={`glass-panel p-6 rounded-2xl border ${kpi.borderColor} ${kpi.bg} shadow-lg relative overflow-hidden group`}
              >
                <Icon className={`absolute -right-4 -bottom-4 w-24 h-24 ${kpi.color} opacity-10 group-hover:scale-110 transition-transform`} />
                <h3 className="font-oswald text-xs text-gray-400 tracking-widest uppercase mb-2">{kpi.title}</h3>
                <div className={`font-bebas text-3xl md:text-4xl ${kpi.color} mb-1 truncate`}>{kpi.value || 'N/A'}</div>
                <div className="font-oswald text-sm text-gray-300 tracking-wider">{kpi.sub}</div>
              </motion.div>
            );
          })}
        </div>

        {/* Cap Races */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Orange Cap Leaderboard */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="glass-panel p-6 rounded-2xl border border-gold/20 shadow-[0_0_30px_rgba(255,213,74,0.05)]">
            <h2 className="font-bebas text-3xl text-white mb-6 flex items-center gap-3">
              <Trophy className="text-gold w-6 h-6" /> ORANGE CAP RACE
            </h2>
            <div className="space-y-4">
              {sortedBatters.slice(0, 5).map((player, idx) => (
                <div key={idx} className="flex items-center gap-4 bg-white/5 p-3 rounded-xl border border-white/5 hover:bg-white/10 transition-colors">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bebas text-xl shrink-0 ${idx === 0 ? 'bg-gold text-midnight shadow-[0_0_10px_rgba(255,213,74,0.5)]' : 'bg-white/10 text-gray-400'}`}>
                    {idx + 1}
                  </div>
                  <img src={player.image} alt={player.name} className="w-12 h-12 rounded-full object-cover border-2 border-white/10" />
                  <div className="flex-grow">
                    <div className="font-bebas text-xl text-white">{player.name}</div>
                    <div className="text-xs font-oswald text-gray-400 uppercase">{teams.find(t => t.id === player.teamId)?.shortName}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-bebas text-2xl text-gold">{player.stats.runs}</div>
                    <div className="text-[10px] font-oswald text-gray-500 uppercase tracking-widest">Runs</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Purple Cap Leaderboard */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="glass-panel p-6 rounded-2xl border border-neonpurple/20 shadow-[0_0_30px_rgba(176,38,255,0.05)]">
            <h2 className="font-bebas text-3xl text-white mb-6 flex items-center gap-3">
              <Medal className="text-neonpurple w-6 h-6" /> PURPLE CAP RACE
            </h2>
            <div className="space-y-4">
              {sortedBowlers.slice(0, 5).map((player, idx) => (
                <div key={idx} className="flex items-center gap-4 bg-white/5 p-3 rounded-xl border border-white/5 hover:bg-white/10 transition-colors">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bebas text-xl shrink-0 ${idx === 0 ? 'bg-neonpurple text-white shadow-[0_0_10px_rgba(176,38,255,0.5)]' : 'bg-white/10 text-gray-400'}`}>
                    {idx + 1}
                  </div>
                  <img src={player.image} alt={player.name} className="w-12 h-12 rounded-full object-cover border-2 border-white/10" />
                  <div className="flex-grow">
                    <div className="font-bebas text-xl text-white">{player.name}</div>
                    <div className="text-xs font-oswald text-gray-400 uppercase">{teams.find(t => t.id === player.teamId)?.shortName}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-bebas text-2xl text-neonpurple">{player.stats.wickets}</div>
                    <div className="text-[10px] font-oswald text-gray-500 uppercase tracking-widest">Wickets</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Analytics & Table */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          
          {/* Tournament Analytics Chart */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="lg:col-span-2 glass-panel p-6 rounded-2xl border border-white/10">
            <h3 className="font-bebas text-2xl mb-6 flex items-center gap-2">
              <Activity className="text-electric w-5 h-5" /> TOURNAMENT RUN RATE PROGRESSION
            </h3>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={tournamentRunRateData}>
                  <defs>
                    <linearGradient id="colorRR" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#00C2FF" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#00C2FF" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                  <XAxis dataKey="match" stroke="rgba(255,255,255,0.3)" tick={{fontFamily: 'Oswald', fontSize: 12}} />
                  <YAxis stroke="rgba(255,255,255,0.3)" tick={{fontFamily: 'Oswald', fontSize: 12}} />
                  <Tooltip contentStyle={{backgroundColor: '#0B0F1A', border: '1px solid rgba(0,194,255,0.3)', borderRadius: '8px'}} itemStyle={{fontFamily: 'Oswald', color: '#00C2FF'}} />
                  <Area type="monotone" dataKey="runRate" stroke="#00C2FF" strokeWidth={3} fillOpacity={1} fill="url(#colorRR)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* Mini Points Table Snapshot */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="glass-panel p-6 rounded-2xl border border-white/10 flex flex-col">
            <h3 className="font-bebas text-2xl mb-6 text-white flex items-center justify-between">
              <span>POINTS TABLE</span>
              <span className="text-xs font-oswald text-emerald tracking-widest uppercase">Live</span>
            </h3>
            <div className="flex-grow overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-white/10 text-xs font-oswald text-gray-500 uppercase tracking-widest">
                    <th className="pb-3">Team</th>
                    <th className="pb-3 text-center">P</th>
                    <th className="pb-3 text-center">Pts</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {[...teams].sort((a, b) => b.stats.points - a.stats.points).map((team, idx) => (
                    <tr key={idx} className="hover:bg-white/5">
                      <td className="py-3 flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full ${idx < 4 ? 'bg-emerald shadow-[0_0_5px_rgba(0,255,102,0.5)]' : 'bg-gray-600'}`} />
                        <span className="font-bebas text-lg text-white">{team.shortName}</span>
                      </td>
                      <td className="py-3 text-center font-oswald text-sm text-gray-300">{team.stats.played}</td>
                      <td className="py-3 text-center font-bebas text-xl text-emerald">{team.stats.points}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4 pt-4 border-t border-white/10 text-xs font-oswald text-gray-500 tracking-wider text-center">
              Top 4 Qualify for Playoffs
            </div>
          </motion.div>

        </div>

        {/* Player Comparison & Match Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="glass-panel p-6 rounded-2xl border border-white/10">
            <h3 className="font-bebas text-2xl mb-6 flex items-center justify-between">
              <span className="flex items-center gap-2">
                <Target className="text-neonpurple w-5 h-5" /> PLAYER COMPARISON
              </span>
              <span className="text-xs font-oswald text-gray-500 uppercase tracking-widest">Virat vs Rohit</span>
            </h3>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="70%" data={radarData}>
                  <PolarGrid stroke="rgba(255,255,255,0.1)" />
                  <PolarAngleAxis dataKey="subject" tick={{fill: 'rgba(255,255,255,0.5)', fontSize: 10, fontFamily: 'Oswald'}} />
                  <PolarRadiusAxis angle={30} domain={[0, 150]} tick={false} axisLine={false} />
                  <Radar name="Virat" dataKey="A" stroke="#00C2FF" fill="#00C2FF" fillOpacity={0.3} />
                  <Radar name="Rohit" dataKey="B" stroke="#7B2EFF" fill="#7B2EFF" fillOpacity={0.3} />
                  <Tooltip contentStyle={{backgroundColor: '#0B0F1A', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px'}} itemStyle={{fontFamily: 'Oswald'}} />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="glass-panel p-6 md:p-10 rounded-2xl border border-emerald/20 bg-emerald/5 flex flex-col justify-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald/10 blur-[80px] pointer-events-none" />
            <h3 className="font-bebas text-3xl mb-8 text-white relative z-10 flex items-center gap-2">
              <Zap className="text-emerald w-6 h-6" /> TOURNAMENT IMPACT
            </h3>
            <div className="grid grid-cols-2 gap-6 relative z-10">
              <div className="bg-midnight/50 p-6 rounded-xl border border-white/5 text-center shadow-inner">
                <div className="text-4xl font-bebas text-white mb-1">12,450</div>
                <div className="text-xs font-oswald text-gray-400 uppercase tracking-widest">Total Runs</div>
              </div>
              <div className="bg-midnight/50 p-6 rounded-xl border border-white/5 text-center shadow-inner">
                <div className="text-4xl font-bebas text-white mb-1">456</div>
                <div className="text-xs font-oswald text-gray-400 uppercase tracking-widest">Total Sixes</div>
              </div>
              <div className="bg-midnight/50 p-6 rounded-xl border border-white/5 text-center shadow-inner">
                <div className="text-4xl font-bebas text-white mb-1">320</div>
                <div className="text-xs font-oswald text-gray-400 uppercase tracking-widest">Total Wickets</div>
              </div>
              <div className="bg-midnight/50 p-6 rounded-xl border border-white/5 text-center shadow-inner">
                <div className="text-4xl font-bebas text-emerald mb-1">100%</div>
                <div className="text-xs font-oswald text-gray-400 uppercase tracking-widest">Entertainment</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
