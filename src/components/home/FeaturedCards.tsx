import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Star, Zap, Target } from 'lucide-react';
import { matches, teams, players } from '../../data/mockData';
export function FeaturedCards() {
  const liveMatch = matches.find((m) => m.status === 'Live');
  const lastMatch = matches.find((m) => m.status === 'Completed');
  const mvp = players.sort((a, b) => b.mvpPoints - a.mvpPoints)[0];
  const cards = [
  {
    title: 'LIVE NOW',
    icon: <Zap className="w-5 h-5 text-electric" />,
    glowClass: 'neon-glow-blue',
    content: liveMatch ?
    <div className="flex flex-col h-full justify-between">
          <div className="flex justify-between items-center mb-4">
            <span className="text-xs font-oswald text-gray-400">
              {liveMatch.venue}
            </span>
            <span className="animate-pulse text-xs font-bold text-electric bg-electric/10 px-2 py-1 rounded">
              LIVE
            </span>
          </div>
          <div className="flex justify-between items-center">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-white/10 mb-2 mx-auto overflow-hidden">
                <img
              src={teams.find((t) => t.id === liveMatch.team1Id)?.logo}
              alt="Team 1"
              className="w-full h-full object-cover" />
            
              </div>
              <span className="font-bebas text-lg">
                {teams.find((t) => t.id === liveMatch.team1Id)?.shortName}
              </span>
            </div>
            <div className="text-center px-4">
              <span className="text-2xl font-bebas text-electric">
                {liveMatch.score?.team1.split(' ')[0]}
              </span>
              <div className="text-xs text-gray-400">vs</div>
              <span className="text-xl font-bebas text-gray-400">YTB</span>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-white/10 mb-2 mx-auto overflow-hidden">
                <img
              src={teams.find((t) => t.id === liveMatch.team2Id)?.logo}
              alt="Team 2"
              className="w-full h-full object-cover" />
            
              </div>
              <span className="font-bebas text-lg">
                {teams.find((t) => t.id === liveMatch.team2Id)?.shortName}
              </span>
            </div>
          </div>
        </div> :

    <div className="flex items-center justify-center h-full text-gray-500">
          No Live Matches
        </div>

  },
  {
    title: 'LAST RESULT',
    icon: <Trophy className="w-5 h-5 text-gold" />,
    glowClass: 'neon-glow-gold',
    content: lastMatch ?
    <div className="flex flex-col h-full justify-between">
          <div className="text-xs font-oswald text-gray-400 mb-4 text-center">
            {lastMatch.date}
          </div>
          <div className="flex justify-between items-center mb-4">
            <span className="font-bebas text-xl">
              {teams.find((t) => t.id === lastMatch.team1Id)?.shortName}
            </span>
            <span className="font-bebas text-xl text-gold">
              {lastMatch.score?.team1.split(' ')[0]}
            </span>
          </div>
          <div className="flex justify-between items-center mb-4">
            <span className="font-bebas text-xl">
              {teams.find((t) => t.id === lastMatch.team2Id)?.shortName}
            </span>
            <span className="font-bebas text-xl text-gray-400">
              {lastMatch.score?.team2.split(' ')[0]}
            </span>
          </div>
          <div className="text-xs text-center text-electric font-oswald tracking-wider">
            {lastMatch.result}
          </div>
        </div> :
    null
  },
  {
    title: 'MVP OF THE WEEK',
    icon: <Star className="w-5 h-5 text-neonpurple" />,
    glowClass: 'neon-glow-purple',
    content: mvp ?
    <div className="flex items-center gap-4 h-full">
          <div className="w-20 h-20 rounded-lg overflow-hidden shrink-0 border border-neonpurple/50">
            <img
          src={mvp.image}
          alt={mvp.name}
          className="w-full h-full object-cover" />
        
          </div>
          <div>
            <h4 className="font-bebas text-2xl text-white mb-1">{mvp.name}</h4>
            <p className="text-xs text-gray-400 font-oswald mb-2">
              {teams.find((t) => t.id === mvp.teamId)?.name}
            </p>
            <div className="inline-block bg-neonpurple/20 text-neonpurple text-xs px-2 py-1 rounded font-bold">
              {mvp.mvpPoints} PTS
            </div>
          </div>
        </div> :
    null
  },
  {
    title: 'ORANGE CAP',
    icon: <Target className="w-5 h-5 text-[#FF8C00]" />,
    glowClass: 'border-[#FF8C00]/50 shadow-[0_0_15px_rgba(255,140,0,0.2)]',
    content:
    <div className="flex items-center gap-4 h-full">
          <div className="w-16 h-16 rounded-full overflow-hidden shrink-0 border-2 border-[#FF8C00]">
            <img
          src={players[0].image}
          alt="Top Batter"
          className="w-full h-full object-cover" />
        
          </div>
          <div>
            <h4 className="font-bebas text-xl text-white">{players[0].name}</h4>
            <p className="text-sm text-[#FF8C00] font-bold">
              {players[0].stats.runs} Runs
            </p>
            <p className="text-xs text-gray-400">
              SR: {players[0].stats.strikeRate}
            </p>
          </div>
        </div>

  }];

  return (
    <section className="py-16 relative z-10 -mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, i) =>
          <motion.div
            key={i}
            initial={{
              opacity: 0,
              y: 20
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              delay: i * 0.1
            }}
            className={`glass-panel rounded-xl p-6 border border-white/10 hover:${card.glowClass} transition-all duration-300 group`}>
            
              <div className="flex items-center gap-2 mb-6 border-b border-white/10 pb-3">
                {card.icon}
                <h3 className="font-oswald text-sm tracking-widest text-gray-300 group-hover:text-white transition-colors">
                  {card.title}
                </h3>
              </div>
              <div className="h-32">{card.content}</div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}