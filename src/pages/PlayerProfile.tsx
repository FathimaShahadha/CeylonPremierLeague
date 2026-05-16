import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  Star,
  TrendingUp,
  Target,
  Award,
  Shield } from
'lucide-react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer } from
'recharts';
import { players, teams } from '../data/mockData';
export function PlayerProfile() {
  const { id } = useParams();
  const player = players.find((p) => p.id === id) || players[0];
  const team = teams.find((t) => t.id === player.teamId);
  const [activeTab, setActiveTab] = useState<'Overview' | 'Stats'>('Overview');
  // Mock chart data
  const performanceData = [
  {
    match: 'M1',
    runs: 45,
    sr: 150
  },
  {
    match: 'M2',
    runs: 12,
    sr: 100
  },
  {
    match: 'M3',
    runs: 82,
    sr: 210
  },
  {
    match: 'M4',
    runs: 34,
    sr: 145
  },
  {
    match: 'M5',
    runs: 72,
    sr: 185
  }];

  return (
    <div className="min-h-screen pb-24">
      {/* Hero Section */}
      <div className="relative pt-32 md:pt-40 pb-12 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-midnight via-midnight to-deepnight" />
        <div
          className="absolute top-0 right-0 w-1/2 h-full z-0 opacity-20 mix-blend-screen"
          style={{
            background: `radial-gradient(circle at center, ${team?.color || '#00FF66'}, transparent 70%)`
          }} />
        

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link
            to="/players"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors text-sm font-oswald tracking-wider">
            
            <ArrowLeft className="w-4 h-4" /> BACK TO DIRECTORY
          </Link>

          <div className="flex flex-col md:flex-row items-center md:items-end gap-8 md:gap-16">
            <motion.div
              initial={{
                y: 50,
                opacity: 0
              }}
              animate={{
                y: 0,
                opacity: 1
              }}
              className="relative w-48 h-48 md:w-64 md:h-64 shrink-0">
              
              <div className="absolute inset-0 rounded-full border-4 border-white/10 overflow-hidden bg-deepnight">
                <img
                  src={player.image}
                  alt={player.name}
                  className="w-full h-full object-cover object-top" />
                
              </div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-midnight rounded-full border-4 border-white/10 flex items-center justify-center font-bebas text-4xl text-white">
                {player.jerseyNumber}
              </div>
            </motion.div>

            <div className="text-center md:text-left flex-grow">
              <motion.div
                initial={{
                  opacity: 0
                }}
                animate={{
                  opacity: 1
                }}
                className="flex items-center justify-center md:justify-start gap-3 mb-2">
                
                <div className="w-6 h-6 rounded-full overflow-hidden">
                  <img
                    src={team?.logo}
                    alt={team?.shortName}
                    className="w-full h-full object-cover" />
                  
                </div>
                <span className="font-oswald text-sm tracking-widest text-gray-400 uppercase">
                  {team?.name}
                </span>
              </motion.div>

              <motion.h1
                initial={{
                  y: 20,
                  opacity: 0
                }}
                animate={{
                  y: 0,
                  opacity: 1
                }}
                className="text-5xl md:text-7xl lg:text-8xl font-bebas text-white mb-4">
                
                {player.name}
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
                className="flex flex-wrap justify-center md:justify-start gap-4">
                
                <div className="glass px-4 py-2 rounded-lg flex items-center gap-2">
                  <Shield className="w-4 h-4 text-emerald" />
                  <span className="font-oswald text-sm tracking-wider">
                    {player.role}
                  </span>
                </div>
                <div className="glass px-4 py-2 rounded-lg flex items-center gap-2 border-gold/30">
                  <Star className="w-4 h-4 text-gold fill-gold" />
                  <span className="font-oswald text-sm tracking-wider text-gold">
                    {player.mvpPoints} MVP PTS
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        {/* Tabs */}
        <div className="flex gap-4 mb-8 border-b border-white/10 pb-4">
          {['Overview', 'Stats'].map((tab) =>
          <button
            key={tab}
            onClick={() => setActiveTab(tab as any)}
            className={`font-bebas text-2xl tracking-wider transition-colors ${activeTab === tab ? 'text-emerald' : 'text-gray-500 hover:text-gray-300'}`}>
            
              {tab}
            </button>
          )}
        </div>

        {activeTab === 'Overview' &&
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Key Stats */}
            <div className="lg:col-span-2 space-y-8">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="glass-panel p-6 rounded-xl text-center border border-white/10">
                  <div className="text-4xl font-bebas text-white mb-1">
                    {player.stats.matches}
                  </div>
                  <div className="text-[10px] font-oswald text-gray-400 uppercase tracking-widest">
                    Matches
                  </div>
                </div>
                <div className="glass-panel p-6 rounded-xl text-center border border-white/10">
                  <div className="text-4xl font-bebas text-emerald mb-1">
                    {player.stats.runs}
                  </div>
                  <div className="text-[10px] font-oswald text-gray-400 uppercase tracking-widest">
                    Runs
                  </div>
                </div>
                <div className="glass-panel p-6 rounded-xl text-center border border-white/10">
                  <div className="text-4xl font-bebas text-white mb-1">
                    {player.stats.strikeRate}
                  </div>
                  <div className="text-[10px] font-oswald text-gray-400 uppercase tracking-widest">
                    Strike Rate
                  </div>
                </div>
                <div className="glass-panel p-6 rounded-xl text-center border border-white/10">
                  <div className="text-4xl font-bebas text-white mb-1">
                    {player.stats.highestScore}
                  </div>
                  <div className="text-[10px] font-oswald text-gray-400 uppercase tracking-widest">
                    Highest Score
                  </div>
                </div>
              </div>

              {/* Chart */}
              <div className="glass-panel p-6 rounded-xl border border-white/10">
                <h3 className="font-bebas text-2xl mb-6 flex items-center gap-2">
                  <TrendingUp className="text-emerald w-5 h-5" /> RECENT FORM
                  (RUNS)
                </h3>
                <div className="h-[300px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={performanceData}>
                      <CartesianGrid
                      strokeDasharray="3 3"
                      stroke="rgba(255,255,255,0.1)"
                      vertical={false} />
                    
                      <XAxis
                      dataKey="match"
                      stroke="rgba(255,255,255,0.5)"
                      tick={{
                        fontFamily: 'Oswald',
                        fontSize: 12
                      }} />
                    
                      <YAxis
                      stroke="rgba(255,255,255,0.5)"
                      tick={{
                        fontFamily: 'Oswald',
                        fontSize: 12
                      }} />
                    
                      <Tooltip
                      contentStyle={{
                        backgroundColor: '#121212',
                        border: '1px solid rgba(0,255,102,0.3)',
                        borderRadius: '8px'
                      }}
                      itemStyle={{
                        fontFamily: 'Oswald',
                        color: '#00FF66'
                      }} />
                    
                      <Line
                      type="monotone"
                      dataKey="runs"
                      stroke="#00FF66"
                      strokeWidth={3}
                      dot={{
                        r: 6,
                        fill: '#121212',
                        stroke: '#00FF66',
                        strokeWidth: 2
                      }}
                      activeDot={{
                        r: 8,
                        fill: '#00FF66'
                      }} />
                    
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

            {/* Badges & Info */}
            <div className="space-y-8">
              <div className="glass-panel p-6 rounded-xl border border-white/10">
                <h3 className="font-bebas text-2xl mb-6 flex items-center gap-2">
                  <Award className="text-gold w-5 h-5" /> AWARDS & BADGES
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 bg-white/5 p-3 rounded-lg border border-gold/20">
                    <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center shrink-0">
                      <Star className="w-5 h-5 text-gold fill-gold" />
                    </div>
                    <div>
                      <div className="font-bebas text-lg text-white">
                        MVP OF THE WEEK
                      </div>
                      <div className="text-xs font-oswald text-gray-400">
                        Week 2
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 bg-white/5 p-3 rounded-lg border border-emerald/20">
                    <div className="w-10 h-10 rounded-full bg-emerald/20 flex items-center justify-center shrink-0">
                      <Target className="w-5 h-5 text-emerald" />
                    </div>
                    <div>
                      <div className="font-bebas text-lg text-white">
                        POWER HITTER
                      </div>
                      <div className="text-xs font-oswald text-gray-400">
                        Most Sixes (Current)
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        }

        {activeTab === 'Stats' && (
          <div className="glass-panel p-6 md:p-8 rounded-xl border border-white/10">
            <h3 className="font-bebas text-3xl mb-8 flex items-center gap-2">
              <BarChart3 className="text-emerald w-6 h-6" /> {player.role.toUpperCase()} CAREER STATS
            </h3>
            
            {(player.role === 'Batter' || player.role === 'All-Rounder' || player.role === 'Wicket-Keeper') && (
              <div className="mb-12">
                <h4 className="font-oswald text-sm text-gray-400 tracking-widest uppercase mb-4 border-b border-white/10 pb-2">Batting Statistics</h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                  {[
                    { label: 'Matches', value: player.stats.matches },
                    { label: 'Innings', value: player.stats.matches },
                    { label: 'Runs', value: player.stats.runs, highlight: true },
                    { label: 'Highest Score', value: player.stats.highestScore },
                    { label: 'Strike Rate', value: player.stats.strikeRate },
                    { label: 'Average', value: ((player.stats.runs || 0) / Math.max(player.stats.matches - 1, 1)).toFixed(2) },
                    { label: '100s', value: Math.floor((player.stats.runs || 0) / 400) },
                    { label: '50s', value: Math.floor((player.stats.runs || 0) / 100) },
                    { label: 'Fours', value: Math.floor((player.stats.runs || 0) * 0.4 / 4) },
                    { label: 'Sixes', value: Math.floor((player.stats.runs || 0) * 0.3 / 6) }
                  ].map((stat, i) => (
                    <div key={i} className={`bg-white/5 p-4 rounded-xl text-center border ${stat.highlight ? 'border-emerald/30 shadow-[0_0_15px_rgba(0,255,102,0.1)]' : 'border-white/5'}`}>
                      <div className={`text-3xl font-bebas ${stat.highlight ? 'text-emerald' : 'text-white'} mb-1`}>{stat.value}</div>
                      <div className="text-[10px] font-oswald text-gray-400 uppercase tracking-widest">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {(player.role === 'Bowler' || player.role === 'All-Rounder') && (
              <div>
                <h4 className="font-oswald text-sm text-gray-400 tracking-widest uppercase mb-4 border-b border-white/10 pb-2">Bowling Statistics</h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                  {[
                    { label: 'Matches', value: player.stats.matches },
                    { label: 'Wickets', value: player.stats.wickets, highlight: true },
                    { label: 'Best Bowling', value: player.stats.bestBowling || '-' },
                    { label: 'Economy', value: player.stats.economy },
                    { label: 'Bowling SR', value: player.stats.wickets ? ((player.stats.matches * 24) / player.stats.wickets).toFixed(1) : '-' },
                    { label: 'Maidens', value: Math.floor((player.stats.matches || 0) * 0.1) },
                    { label: '4W Hauls', value: player.stats.bestBowling?.startsWith('4') ? 1 : 0 },
                    { label: '5W Hauls', value: player.stats.bestBowling?.startsWith('5') ? 1 : 0 },
                    { label: 'Dot Balls', value: Math.floor((player.stats.matches || 0) * 6.5) },
                    { label: 'Overs Bowled', value: player.stats.matches * 2 }
                  ].map((stat, i) => (
                    <div key={i} className={`bg-white/5 p-4 rounded-xl text-center border ${stat.highlight ? 'border-[#00E5FF]/30 shadow-[0_0_15px_rgba(0,229,255,0.1)]' : 'border-white/5'}`}>
                      <div className={`text-3xl font-bebas ${stat.highlight ? 'text-[#00E5FF]' : 'text-white'} mb-1`}>{stat.value}</div>
                      <div className="text-[10px] font-oswald text-gray-400 uppercase tracking-widest">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>);

}
// Need to import BarChart3 for the placeholder
import { BarChart3 } from 'lucide-react';
