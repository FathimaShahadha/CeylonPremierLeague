import React, { useState } from 'react';
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
  PolarRadiusAxis } from
'recharts';
import { Trophy, Target, Zap, Shield, Star } from 'lucide-react';
import { players, teams } from '../data/mockData';
export function Stats() {
  const [activeCategory, setActiveCategory] = useState('Batting');
  const topRunScorers = [...players].
  filter((p) => p.role === 'Batter').
  sort((a, b) => b.stats.runs - a.stats.runs).
  slice(0, 5);
  const topWicketTakers = [...players].
  filter((p) => p.role === 'Bowler').
  sort((a, b) => b.stats.wickets - a.stats.wickets).
  slice(0, 5);
  const chartData = topRunScorers.map((p) => ({
    name: p.name.split(' ')[0],
    runs: p.stats.runs,
    sr: p.stats.strikeRate
  }));
  const radarData = [
  {
    subject: 'Power',
    A: 120,
    B: 110,
    fullMark: 150
  },
  {
    subject: 'Timing',
    A: 98,
    B: 130,
    fullMark: 150
  },
  {
    subject: 'Consistency',
    A: 86,
    B: 130,
    fullMark: 150
  },
  {
    subject: 'Strike Rate',
    A: 99,
    B: 100,
    fullMark: 150
  },
  {
    subject: 'Boundaries',
    A: 85,
    B: 90,
    fullMark: 150
  }];

  const categories = ['Batting', 'Bowling', 'Fielding', 'Team Stats'];
  return (
    <div className="min-h-screen pt-12 pb-24 relative">
      <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-neonpurple/10 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
            
            TOURNAMENT <span className="text-neonpurple">PULSE</span>
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
            
            Deep Dive Analytics
          </motion.p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-12 overflow-x-auto hide-scrollbar">
          <div className="flex glass rounded-lg p-1 border border-white/10">
            {categories.map((cat) =>
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-md font-oswald text-sm tracking-wider transition-all whitespace-nowrap ${activeCategory === cat ? 'bg-neonpurple text-white shadow-[0_0_15px_rgba(123,46,255,0.5)]' : 'text-gray-400 hover:text-white'}`}>
              
                {cat}
              </button>
            )}
          </div>
        </div>

        {/* Top Performers Podium */}
        <div className="mb-16">
          <h2 className="font-bebas text-3xl text-white mb-8 text-center flex items-center justify-center gap-2">
            <Trophy className="text-gold w-6 h-6" /> ORANGE CAP RACE
          </h2>

          <div className="flex flex-col md:flex-row justify-center items-end gap-4 md:gap-8 h-auto md:h-64 mt-20 md:mt-0">
            {/* Rank 2 */}
            <motion.div
              initial={{
                opacity: 0,
                y: 50
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                delay: 0.2
              }}
              className="flex flex-col items-center order-2 md:order-1 w-full md:w-48">
              
              <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-gray-400 bg-deepnight relative z-10 -mb-6">
                <img
                  src={topRunScorers[1]?.image}
                  alt={topRunScorers[1]?.name}
                  className="w-full h-full object-cover" />
                
              </div>
              <div className="glass-panel w-full pt-8 pb-4 px-4 rounded-t-xl border border-white/10 text-center bg-gradient-to-t from-gray-400/20 to-transparent h-32 flex flex-col justify-end">
                <div className="font-bebas text-xl text-white truncate">
                  {topRunScorers[1]?.name}
                </div>
                <div className="font-bebas text-3xl text-gray-400">
                  {topRunScorers[1]?.stats.runs}
                </div>
                <div className="text-[10px] font-oswald text-gray-500 uppercase">
                  Runs
                </div>
              </div>
            </motion.div>

            {/* Rank 1 */}
            <motion.div
              initial={{
                opacity: 0,
                y: 50
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                delay: 0.1
              }}
              className="flex flex-col items-center order-1 md:order-2 w-full md:w-56">
              
              <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-gold bg-deepnight relative z-10 -mb-8 shadow-[0_0_20px_rgba(255,213,74,0.5)]">
                <img
                  src={topRunScorers[0]?.image}
                  alt={topRunScorers[0]?.name}
                  className="w-full h-full object-cover" />
                
              </div>
              <div className="glass-panel w-full pt-10 pb-6 px-4 rounded-t-xl border border-gold/30 text-center bg-gradient-to-t from-gold/20 to-transparent h-40 flex flex-col justify-end relative">
                <div className="absolute top-2 right-2 text-gold">
                  <Star className="w-4 h-4 fill-gold" />
                </div>
                <div className="font-bebas text-2xl text-white truncate">
                  {topRunScorers[0]?.name}
                </div>
                <div className="font-bebas text-4xl text-gold">
                  {topRunScorers[0]?.stats.runs}
                </div>
                <div className="text-[10px] font-oswald text-gold/70 uppercase">
                  Runs
                </div>
              </div>
            </motion.div>

            {/* Rank 3 */}
            <motion.div
              initial={{
                opacity: 0,
                y: 50
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                delay: 0.3
              }}
              className="flex flex-col items-center order-3 md:order-3 w-full md:w-48">
              
              <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-[#CD7F32] bg-deepnight relative z-10 -mb-6">
                <img
                  src={topRunScorers[2]?.image}
                  alt={topRunScorers[2]?.name}
                  className="w-full h-full object-cover" />
                
              </div>
              <div className="glass-panel w-full pt-8 pb-4 px-4 rounded-t-xl border border-white/10 text-center bg-gradient-to-t from-[#CD7F32]/20 to-transparent h-24 flex flex-col justify-end">
                <div className="font-bebas text-xl text-white truncate">
                  {topRunScorers[2]?.name}
                </div>
                <div className="font-bebas text-2xl text-[#CD7F32]">
                  {topRunScorers[2]?.stats.runs}
                </div>
                <div className="text-[10px] font-oswald text-[#CD7F32]/70 uppercase">
                  Runs
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Bar Chart */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95
            }}
            whileInView={{
              opacity: 1,
              scale: 1
            }}
            viewport={{
              once: true
            }}
            className="glass-panel p-6 rounded-2xl border border-white/10">
            
            <h3 className="font-bebas text-2xl mb-6 flex items-center gap-2">
              <Target className="text-electric w-5 h-5" /> TOP RUN SCORERS
            </h3>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={chartData}
                  layout="vertical"
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5
                  }}>
                  
                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke="rgba(255,255,255,0.05)"
                    horizontal={false} />
                  
                  <XAxis
                    type="number"
                    stroke="rgba(255,255,255,0.3)"
                    tick={{
                      fontFamily: 'Oswald',
                      fontSize: 12
                    }} />
                  
                  <YAxis
                    dataKey="name"
                    type="category"
                    stroke="rgba(255,255,255,0.5)"
                    tick={{
                      fontFamily: 'Oswald',
                      fontSize: 12
                    }}
                    width={80} />
                  
                  <Tooltip
                    cursor={{
                      fill: 'rgba(255,255,255,0.05)'
                    }}
                    contentStyle={{
                      backgroundColor: '#0B0F1A',
                      border: '1px solid rgba(0,194,255,0.3)',
                      borderRadius: '8px'
                    }}
                    itemStyle={{
                      fontFamily: 'Oswald',
                      color: '#00C2FF'
                    }} />
                  
                  <Bar
                    dataKey="runs"
                    fill="#00C2FF"
                    radius={[0, 4, 4, 0]}
                    barSize={20} />
                  
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* Radar Chart */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95
            }}
            whileInView={{
              opacity: 1,
              scale: 1
            }}
            viewport={{
              once: true
            }}
            className="glass-panel p-6 rounded-2xl border border-white/10">
            
            <h3 className="font-bebas text-2xl mb-6 flex items-center justify-between">
              <span className="flex items-center gap-2">
                <Zap className="text-neonpurple w-5 h-5" /> PLAYER COMPARISON
              </span>
              <span className="text-xs font-oswald text-gray-500 uppercase tracking-widest">
                Virat vs Rohit
              </span>
            </h3>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart
                  cx="50%"
                  cy="50%"
                  outerRadius="70%"
                  data={radarData}>
                  
                  <PolarGrid stroke="rgba(255,255,255,0.1)" />
                  <PolarAngleAxis
                    dataKey="subject"
                    tick={{
                      fill: 'rgba(255,255,255,0.5)',
                      fontSize: 10,
                      fontFamily: 'Oswald'
                    }} />
                  
                  <PolarRadiusAxis
                    angle={30}
                    domain={[0, 150]}
                    tick={false}
                    axisLine={false} />
                  
                  <Radar
                    name="Virat"
                    dataKey="A"
                    stroke="#00C2FF"
                    fill="#00C2FF"
                    fillOpacity={0.3} />
                  
                  <Radar
                    name="Rohit"
                    dataKey="B"
                    stroke="#7B2EFF"
                    fill="#7B2EFF"
                    fillOpacity={0.3} />
                  
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#0B0F1A',
                      border: '1px solid rgba(255,255,255,0.1)',
                      borderRadius: '8px'
                    }}
                    itemStyle={{
                      fontFamily: 'Oswald'
                    }} />
                  
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>
      </div>
    </div>);

}