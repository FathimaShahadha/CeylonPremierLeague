import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Radio, Target, Zap } from 'lucide-react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer } from
'recharts';
import { matches, teams } from '../data/mockData';
export function LiveScores() {
  const liveMatch = matches.find((m) => m.status === 'Live') || matches[0]; // Fallback for UI testing
  const team1 = teams.find((t) => t.id === liveMatch.team1Id);
  const team2 = teams.find((t) => t.id === liveMatch.team2Id);
  // Mock Worm Data
  const wormData = Array.from(
    {
      length: 10
    },
    (_, i) => ({
      over: i + 1,
      runs: Math.floor(Math.random() * 15) + i * 10
    })
  );
  const recentBalls = ['1', '0', '4', 'W', '6', '2'];
  return (
    <div className="min-h-screen pt-32 md:pt-40 pb-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Live Indicator */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
          </span>
          <span className="font-oswald text-sm tracking-[0.3em] text-red-500 uppercase">
            Live Match Center
          </span>
        </div>

        {/* Main Scoreboard */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          className="glass-panel rounded-3xl p-6 md:p-10 border border-electric/30 shadow-[0_0_30px_rgba(0,194,255,0.1)] mb-8 relative overflow-hidden">
          
          <div className="absolute top-0 right-0 w-64 h-64 bg-electric/10 blur-[80px] pointer-events-none" />

          <div className="text-center mb-8">
            <p className="text-xs font-oswald text-darkgray tracking-widest uppercase mb-2">
              {liveMatch.venue}
            </p>
            <p className="text-sm font-oswald text-electric tracking-wider">
              {liveMatch.toss}
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4">
            {/* Team 1 */}
            <div className="flex items-center gap-6 flex-1 justify-end">
              <div className="text-right">
                <h2 className="font-bebas text-3xl md:text-4xl text-slate">
                  {team1?.shortName}
                </h2>
                <div className="font-bebas text-5xl md:text-7xl text-electric leading-none my-2">
                  {liveMatch.score?.team1.split(' ')[0]}
                </div>
                <div className="font-oswald text-sm text-darkgray tracking-wider">
                  Overs: {liveMatch.score?.team1.match(/\((.*?)\)/)?.[1]}
                </div>
              </div>
              <div
                className="w-20 h-20 md:w-28 md:h-28 rounded-full overflow-hidden border-4 bg-cream shrink-0"
                style={{
                  borderColor: team1?.color
                }}>
                
                <img
                  src={team1?.logo}
                  alt={team1?.name}
                  className="w-full h-full object-cover" />
                
              </div>
            </div>

            {/* VS / RR */}
            <div className="flex flex-col items-center justify-center px-8 shrink-0">
              <div className="font-bebas text-2xl text-gray-600 mb-4">VS</div>
              <div className="bg-slate/5 border border-lightgray rounded-lg p-3 text-center w-full min-w-[120px]">
                <div className="text-[10px] font-oswald text-darkgray uppercase tracking-widest mb-1">
                  CRR
                </div>
                <div className="font-bebas text-2xl text-slate">13.6</div>
              </div>
            </div>

            {/* Team 2 */}
            <div className="flex items-center gap-6 flex-1 justify-start">
              <div
                className="w-20 h-20 md:w-28 md:h-28 rounded-full overflow-hidden border-4 bg-cream shrink-0"
                style={{
                  borderColor: team2?.color
                }}>
                
                <img
                  src={team2?.logo}
                  alt={team2?.name}
                  className="w-full h-full object-cover" />
                
              </div>
              <div className="text-left">
                <h2 className="font-bebas text-3xl md:text-4xl text-slate">
                  {team2?.shortName}
                </h2>
                <div className="font-bebas text-5xl md:text-7xl text-midgray leading-none my-2">
                  YTB
                </div>
                <div className="font-oswald text-sm text-darkgray tracking-wider">
                  Yet to bat
                </div>
              </div>
            </div>
          </div>

          {/* Recent Balls Strip */}
          <div className="mt-10 pt-6 border-t border-lightgray">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <span className="font-oswald text-sm text-darkgray uppercase tracking-widest">
                Recent Balls
              </span>
              <div className="flex gap-2">
                {recentBalls.map((ball, i) =>
                <div
                  key={i}
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bebas text-xl ${ball === 'W' ? 'bg-red-500 text-white shadow-[0_0_10px_rgba(239,68,68,0.3)]' : ball === '6' ? 'bg-electric text-white shadow-[0_0_10px_rgba(0,194,255,0.3)]' : ball === '4' ? 'bg-gold text-white shadow-[0_0_10px_rgba(255,213,74,0.3)]' : 'bg-slate/5 text-slate border border-lightgray'}`}>
                  
                    {ball}
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Col: Stats & Worm */}
          <div className="lg:col-span-2 space-y-8">
            {/* Current Batters/Bowler */}
            <div className="glass-panel rounded-2xl p-6 border border-lightgray">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-oswald text-xs text-midgray uppercase tracking-widest mb-4 border-b border-lightgray pb-2">
                    Batters
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center bg-slate/5 p-3 rounded-lg border border-electric/30">
                      <div className="flex items-center gap-2">
                        <span className="text-electric">▶</span>
                        <span className="font-bebas text-xl text-slate">
                          Rohit S.
                        </span>
                      </div>
                      <div className="font-bebas text-xl">
                        <span className="text-slate">45</span>
                        <span className="text-midgray text-lg"> (22)</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center bg-slate/5 p-3 rounded-lg border border-lightgray">
                      <div className="flex items-center gap-2">
                        <span className="text-transparent">▶</span>
                        <span className="font-bebas text-xl text-slate">
                          Suryakumar Y.
                        </span>
                      </div>
                      <div className="font-bebas text-xl">
                        <span className="text-slate">28</span>
                        <span className="text-midgray text-lg"> (12)</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="font-oswald text-xs text-midgray uppercase tracking-widest mb-4 border-b border-lightgray pb-2">
                    Bowler
                  </h3>
                  <div className="bg-slate/5 p-3 rounded-lg border border-lightgray">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-bebas text-xl text-slate">
                        Kagiso R.
                      </span>
                      <div className="font-bebas text-xl">
                        <span className="text-slate">1-24</span>
                        <span className="text-midgray text-lg"> (1.2)</span>
                      </div>
                    </div>
                    <div className="text-xs font-oswald text-darkgray">
                      Economy: 18.0
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Worm Graph */}
            <div className="glass-panel rounded-2xl p-6 border border-lightgray">
              <h3 className="font-bebas text-2xl mb-6 flex items-center gap-2">
                <Activity className="text-electric w-5 h-5" /> INNINGS
                PROGRESSION
              </h3>
              <div className="h-[250px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={wormData}>
                    <defs>
                      <linearGradient
                        id="colorRuns"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1">
                        
                        <stop
                          offset="5%"
                          stopColor="#00C2FF"
                          stopOpacity={0.3} />
                        
                        <stop
                          offset="95%"
                          stopColor="#00C2FF"
                          stopOpacity={0} />
                        
                      </linearGradient>
                    </defs>
                    <CartesianGrid
                      strokeDasharray="3 3"
                      stroke="rgba(0,0,0,0.05)"
                      vertical={false} />
                    
                    <XAxis
                      dataKey="over"
                      stroke="rgba(0,0,0,0.3)"
                      tick={{
                        fontFamily: 'Oswald',
                        fontSize: 12,
                        fill: '#64748b'
                      }} />
                    
                    <YAxis
                      stroke="rgba(0,0,0,0.3)"
                      tick={{
                        fontFamily: 'Oswald',
                        fontSize: 12,
                        fill: '#64748b'
                      }} />
                    
                    <Tooltip
                      contentStyle={{
                        backgroundColor: '#FFFFFF',
                        border: '1px solid rgba(0,0,0,0.1)',
                        borderRadius: '8px',
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                      }}
                      itemStyle={{
                        fontFamily: 'Oswald',
                        color: '#00C2FF'
                      }} />
                    
                    <Area
                      type="monotone"
                      dataKey="runs"
                      stroke="#00C2FF"
                      strokeWidth={3}
                      fillOpacity={1}
                      fill="url(#colorRuns)" />
                    
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Right Col: Commentary */}
          <div className="glass-panel rounded-2xl p-6 border border-lightgray h-[600px] flex flex-col">
            <h3 className="font-bebas text-2xl mb-6 flex items-center gap-2 shrink-0">
              <Radio className="text-neonpurple w-5 h-5" /> LIVE COMMENTARY
            </h3>

            <div className="flex-grow overflow-y-auto pr-2 space-y-6 custom-scrollbar">
              {[
              {
                over: '8.2',
                text: 'Kagiso R. to Rohit S., 1 run. Full on middle, driven down to long-on.',
                type: 'normal'
              },
              {
                over: '8.1',
                text: 'Kagiso R. to Rohit S., SIX! What a shot! Picked the slower ball early and deposited it over deep mid-wicket into the second tier!',
                type: 'boundary'
              },
              {
                over: '8.0',
                text: 'End of over 8. Mumbai Strikers 105/3. They are accelerating now.',
                type: 'over'
              },
              {
                over: '7.6',
                text: 'Nortje to Suryakumar, FOUR! Cheeky! Ramps it over short fine leg.',
                type: 'boundary'
              },
              {
                over: '7.5',
                text: 'Nortje to Suryakumar, no run. Sharp bouncer, ducked under.',
                type: 'normal'
              },
              {
                over: '7.4',
                text: 'Nortje to Hardik P., OUT! Bowled him! Pace is pace. 152kph yorker crashes into middle stump.',
                type: 'wicket'
              }].
              map((comm, i) =>
              <div
                key={i}
                className={`flex gap-4 p-3 rounded-lg ${comm.type === 'boundary' ? 'bg-electric/10 border border-electric/20' : comm.type === 'wicket' ? 'bg-red-500/10 border border-red-500/20' : comm.type === 'over' ? 'bg-slate/5 border border-lightgray' : ''}`}>
                
                  <div
                  className={`font-bebas text-xl shrink-0 ${comm.type === 'boundary' ? 'text-electric' : comm.type === 'wicket' ? 'text-red-500' : 'text-darkgray'}`}>
                  
                    {comm.over}
                  </div>
                  <div className="text-sm text-darkgray leading-relaxed">
                    {comm.text}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>);

}
