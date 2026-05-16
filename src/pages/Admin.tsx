import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  LayoutDashboard, Users, UserCircle, Calendar, Trophy, Handshake,
  Image as ImageIcon, Newspaper, Bell, BarChart3, LogOut,
  Plus, Edit2, Trash2, Upload, Send
} from 'lucide-react';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';
import { teams, players, matches } from '../data/mockData';
import { Logo } from '../components/brand/Logo';

export function Admin() {
  const [activeTab, setActiveTab] = useState('Overview');

  const sidebarItems = [
    { name: 'Overview', icon: LayoutDashboard },
    { name: 'Teams', icon: Users },
    { name: 'Players', icon: UserCircle },
    { name: 'Matches', icon: Calendar },
    { name: 'Tournament Stats', icon: Trophy },
    { name: 'Sponsors', icon: Handshake },
    { name: 'Media', icon: ImageIcon },
    { name: 'News', icon: Newspaper },
    { name: 'Notifications', icon: Bell },
    { name: 'Analytics', icon: BarChart3 }
  ];

  /* 1. Dashboard Overview */
  const renderOverview = () => (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
        <div>
          <h1 className="font-bebas text-4xl md:text-5xl text-white leading-none">OVERVIEW</h1>
          <p className="text-gray-400 font-oswald text-sm tracking-widest uppercase mt-1">System Metrics</p>
        </div>
        <button className="bg-electric text-midnight px-6 py-3 rounded-lg font-oswald text-sm tracking-widest flex items-center gap-2 hover:bg-white transition-all shadow-[0_0_20px_rgba(0,194,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]">
          <Plus className="w-4 h-4" /> QUICK ADD
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Total Teams', value: teams.length, color: 'text-electric', borderColor: 'border-electric/30' },
          { label: 'Total Players', value: players.length, color: 'text-gold', borderColor: 'border-gold/30' },
          { label: 'Matches Played', value: matches.filter(m => m.status === 'Completed').length, color: 'text-emerald', borderColor: 'border-emerald/30' },
          { label: 'Live Matches', value: matches.filter(m => m.status === 'Live').length, color: 'text-red-400', borderColor: 'border-red-500/30' }
        ].map((kpi, i) => (
          <div key={i} className={`glass-panel p-6 rounded-2xl border ${kpi.borderColor} hover:bg-white/5 transition-all shadow-lg`}>
            <div className="text-sm font-oswald text-gray-400 uppercase tracking-widest mb-2">{kpi.label}</div>
            <div className={`font-bebas text-5xl md:text-6xl ${kpi.color}`}>{kpi.value}</div>
          </div>
        ))}
      </div>

      <div className="glass-panel rounded-2xl border border-white/10 overflow-hidden shadow-xl">
        <div className="p-6 border-b border-white/10">
          <h3 className="font-bebas text-2xl text-white">RECENT MATCHES</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left whitespace-nowrap">
            <thead>
              <tr className="bg-white/5 text-xs font-oswald text-gray-400 uppercase tracking-widest">
                <th className="p-4 font-normal">Date</th>
                <th className="p-4 font-normal">Match</th>
                <th className="p-4 font-normal text-center">Status</th>
                <th className="p-4 font-normal text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {matches.slice(0, 5).map(match => (
                <tr key={match.id} className="hover:bg-white/5 transition-colors">
                  <td className="p-4 text-sm font-oswald text-gray-300 tracking-wide">{match.date}</td>
                  <td className="p-4 font-bebas text-xl text-white">
                    {teams.find(t => t.id === match.team1Id)?.shortName} <span className="text-gray-500 text-sm mx-2 font-oswald">VS</span> {teams.find(t => t.id === match.team2Id)?.shortName}
                  </td>
                  <td className="p-4 text-center">
                    <span className={`inline-block text-xs font-oswald tracking-widest px-3 py-1 rounded-full border ${match.status === 'Live' ? 'bg-red-500/10 text-red-500 border-red-500/30' : match.status === 'Completed' ? 'bg-emerald/10 text-emerald border-emerald/30' : 'bg-gray-500/10 text-gray-400 border-gray-500/30'}`}>
                      {match.status}
                    </span>
                  </td>
                  <td className="p-4 text-right">
                    <button className="text-gray-400 hover:text-electric mx-2 p-2 rounded hover:bg-electric/10 transition-colors"><Edit2 className="w-4 h-4" /></button>
                    <button className="text-gray-400 hover:text-red-500 p-2 rounded hover:bg-red-500/10 transition-colors"><Trash2 className="w-4 h-4" /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </motion.div>
  );

  /* 2. Team Management */
  const renderTeams = () => (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-4">
        <div>
          <h1 className="font-bebas text-4xl md:text-5xl text-white leading-none">TEAM MANAGEMENT</h1>
          <p className="text-gray-400 font-oswald text-sm tracking-widest uppercase mt-1">Manage Franchise Data</p>
        </div>
        <button className="bg-electric text-midnight px-6 py-3 rounded-lg font-oswald text-sm tracking-widest flex items-center gap-2 hover:bg-white transition-all shadow-[0_0_20px_rgba(0,194,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]">
          <Plus className="w-4 h-4" /> ADD TEAM
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {teams.map(team => (
          <div key={team.id} className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-electric/50 transition-all flex flex-col justify-between h-full shadow-lg hover:shadow-[0_10px_30px_rgba(0,194,255,0.1)]">
             <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full border-2 p-1 shrink-0" style={{ borderColor: team.color }}>
                  <img src={team.logo} className="w-full h-full rounded-full object-cover" alt={team.name} />
                </div>
                <div>
                   <h3 className="font-bebas text-2xl text-white leading-tight">{team.name}</h3>
                   <p className="text-xs font-oswald text-gray-400 uppercase tracking-widest">{team.shortName}</p>
                </div>
             </div>
             
             <div className="space-y-2 mb-6 flex-grow">
               <div className="flex justify-between border-b border-white/5 pb-2">
                 <span className="text-xs font-oswald text-gray-500 uppercase tracking-widest">Captain</span>
                 <span className="text-sm font-oswald text-gray-300">{team.captain}</span>
               </div>
               <div className="flex justify-between border-b border-white/5 pb-2">
                 <span className="text-xs font-oswald text-gray-500 uppercase tracking-widest">Coach</span>
                 <span className="text-sm font-oswald text-gray-300">{team.coach}</span>
               </div>
             </div>
             
             <div className="flex gap-3">
                <button className="flex-1 bg-white/5 hover:bg-electric/20 text-white font-oswald tracking-widest text-xs py-3 rounded-lg transition-colors border border-white/10 hover:border-electric/50">EDIT</button>
                <button className="flex-1 bg-red-500/5 hover:bg-red-500/20 text-red-400 font-oswald tracking-widest text-xs py-3 rounded-lg transition-colors border border-red-500/20 hover:border-red-500/50">DELETE</button>
             </div>
          </div>
        ))}
      </div>
    </motion.div>
  );

  /* 3. Player Management */
  const renderPlayers = () => (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-4">
        <div>
          <h1 className="font-bebas text-4xl md:text-5xl text-white leading-none">PLAYER MANAGEMENT</h1>
          <p className="text-gray-400 font-oswald text-sm tracking-widest uppercase mt-1">Roster & Registration</p>
        </div>
        <button className="bg-gold text-midnight px-6 py-3 rounded-lg font-oswald text-sm tracking-widest flex items-center gap-2 hover:bg-white transition-all shadow-[0_0_20px_rgba(255,213,74,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]">
          <Plus className="w-4 h-4" /> REGISTER PLAYER
        </button>
      </div>
      
      <div className="glass-panel rounded-2xl overflow-hidden border border-white/10 shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left whitespace-nowrap">
            <thead>
              <tr className="bg-white/5 text-xs font-oswald text-gray-400 uppercase tracking-widest">
                <th className="p-5 font-normal">Player</th>
                <th className="p-5 font-normal">Role</th>
                <th className="p-5 font-normal">Team</th>
                <th className="p-5 font-normal text-center">MVP Pts</th>
                <th className="p-5 font-normal text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {players.map(player => (
                <tr key={player.id} className="hover:bg-white/5 transition-colors">
                  <td className="p-5 flex items-center gap-4">
                    <img src={player.image} alt={player.name} className="w-12 h-12 rounded-full object-cover border-2 border-white/10" />
                    <span className="font-bebas text-xl text-white">{player.name}</span>
                  </td>
                  <td className="p-5">
                    <span className="text-xs font-oswald tracking-widest text-gray-300 bg-white/5 px-3 py-1 rounded-full border border-white/10">{player.role}</span>
                  </td>
                  <td className="p-5 text-sm font-oswald tracking-wider text-gray-300">
                    {teams.find(t => t.id === player.teamId)?.shortName}
                  </td>
                  <td className="p-5 text-center text-lg font-bebas text-gold">
                    {player.mvpPoints}
                  </td>
                  <td className="p-5 text-right">
                    <button className="text-gray-400 hover:text-electric mx-2 p-2 rounded hover:bg-electric/10 transition-colors"><Edit2 className="w-4 h-4" /></button>
                    <button className="text-gray-400 hover:text-red-500 p-2 rounded hover:bg-red-500/10 transition-colors"><Trash2 className="w-4 h-4" /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </motion.div>
  );

  /* 4. Match Management */
  const renderMatches = () => (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-4">
        <div>
          <h1 className="font-bebas text-4xl md:text-5xl text-white leading-none">MATCH BUILDER</h1>
          <p className="text-gray-400 font-oswald text-sm tracking-widest uppercase mt-1">Schedule & Scores</p>
        </div>
        <button className="bg-electric text-midnight px-6 py-3 rounded-lg font-oswald text-sm tracking-widest flex items-center gap-2 hover:bg-white transition-all shadow-[0_0_20px_rgba(0,194,255,0.3)]">
          <Plus className="w-4 h-4" /> CREATE FIXTURE
        </button>
      </div>
      
      <div className="grid gap-4">
        {matches.map(m => (
          <div key={m.id} className="glass-panel p-6 rounded-2xl border border-white/10 flex flex-col xl:flex-row items-center justify-between gap-6 shadow-lg hover:border-white/30 transition-all">
            <div className="flex items-center gap-6 w-full xl:w-auto justify-between xl:justify-start">
              <div className="text-center w-24 shrink-0">
                <div className="text-xs font-oswald tracking-widest text-gray-400 uppercase mb-1">{m.date}</div>
                <div className="font-bebas text-2xl text-white">{m.time}</div>
              </div>
              <div className="h-16 w-px bg-white/10 hidden xl:block"></div>
              <div className="flex flex-col items-center gap-1 min-w-[200px]">
                <div className="flex items-center gap-3 font-bebas text-3xl text-white">
                  <span className="text-electric">{teams.find(t => t.id === m.team1Id)?.shortName}</span>
                  <span className="text-gray-600 text-xl font-oswald">VS</span>
                  <span className="text-gold">{teams.find(t => t.id === m.team2Id)?.shortName}</span>
                </div>
                {m.score && (
                  <div className="text-xs font-oswald tracking-widest text-gray-400 uppercase">
                    {m.score.team1} / {m.score.team2}
                  </div>
                )}
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full xl:w-auto">
              <div className={`px-4 py-2 rounded-full font-oswald text-xs tracking-widest uppercase text-center w-full sm:w-32 ${m.status === 'Live' ? 'bg-red-500/10 text-red-500 border border-red-500/30 animate-pulse' : m.status === 'Completed' ? 'bg-emerald/10 text-emerald border border-emerald/30' : 'bg-white/5 text-gray-400 border border-white/10'}`}>
                {m.status}
              </div>

              <div className="flex gap-2 w-full sm:w-auto">
                <button className="flex-1 sm:flex-none px-6 py-3 bg-white/5 hover:bg-electric/20 text-white font-oswald tracking-widest text-xs rounded-lg transition-colors border border-white/10 hover:border-electric/50 whitespace-nowrap">UPDATE SCORE</button>
                <button className="flex-1 sm:flex-none px-4 py-3 bg-white/5 hover:bg-white/20 text-white font-oswald tracking-widest text-xs rounded-lg transition-colors border border-white/10">EDIT</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );

  /* 5. Tournament Stats */
  const renderStats = () => (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
      <div className="mb-6">
        <h1 className="font-bebas text-4xl md:text-5xl text-white leading-none">TOURNAMENT AWARDS</h1>
        <p className="text-gray-400 font-oswald text-sm tracking-widest uppercase mt-1">Manage Cap Holders</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {['Most Valuable Player', 'Orange Cap (Runs)', 'Purple Cap (Wickets)', 'Most Sixes', 'Emerging Player', 'Best Catch'].map((award, idx) => (
          <div key={idx} className="glass-panel p-6 rounded-2xl border border-white/10 flex flex-col justify-between h-full shadow-lg">
            <h3 className="font-oswald text-sm text-gold uppercase tracking-widest mb-6 flex items-center gap-2"><Trophy className="w-5 h-5"/> {award}</h3>
            <div className="flex flex-col gap-3 mt-auto">
              <select className="w-full bg-midnight/50 backdrop-blur-md border border-white/10 rounded-lg px-4 py-3 text-white font-inter text-sm outline-none focus:border-gold transition-colors appearance-none cursor-pointer">
                <option value="" className="bg-midnight">Select Player...</option>
                {players.map(p => <option key={p.id} value={p.id} className="bg-midnight">{p.name}</option>)}
              </select>
              <button className="w-full bg-white/5 hover:bg-gold/20 text-gold font-oswald tracking-widest text-sm py-3 rounded-lg border border-gold/30 hover:border-gold transition-colors">ASSIGN AWARD</button>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );

  /* 6. Sponsors */
  const renderSponsors = () => (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-4">
        <div>
          <h1 className="font-bebas text-4xl md:text-5xl text-white leading-none">SPONSOR MANAGEMENT</h1>
          <p className="text-gray-400 font-oswald text-sm tracking-widest uppercase mt-1">Partners & Brands</p>
        </div>
        <button className="bg-emerald text-midnight px-6 py-3 rounded-lg font-oswald text-sm tracking-widest flex items-center gap-2 hover:bg-white transition-all shadow-[0_0_20px_rgba(0,255,102,0.3)]">
          <Plus className="w-4 h-4" /> ADD SPONSOR
        </button>
      </div>
      
      <div className="glass-panel p-12 rounded-2xl border border-white/10 flex flex-col items-center justify-center border-dashed border-2 hover:border-emerald hover:bg-emerald/5 transition-colors cursor-pointer text-gray-400 hover:text-emerald min-h-[300px]">
         <Upload className="w-16 h-16 mb-4 opacity-50" />
         <p className="font-bebas text-3xl tracking-wide mb-2 text-white">UPLOAD SPONSOR LOGO</p>
         <p className="text-sm font-inter opacity-50 tracking-wide text-center">Drag and drop or click to browse<br/>PNG, SVG up to 2MB. Transparent background required.</p>
      </div>
    </motion.div>
  );

  /* 7. Media Gallery */
  const renderMedia = () => (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
      <div className="mb-6">
        <h1 className="font-bebas text-4xl md:text-5xl text-white leading-none">MEDIA CENTER</h1>
        <p className="text-gray-400 font-oswald text-sm tracking-widest uppercase mt-1">Assets & Gallery</p>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div className="aspect-square glass-panel rounded-2xl border border-white/10 border-dashed hover:border-electric hover:bg-electric/5 transition-colors flex items-center justify-center text-gray-400 hover:text-electric cursor-pointer">
           <div className="text-center">
             <Plus className="w-10 h-10 mx-auto mb-3 opacity-50"/>
             <span className="font-oswald tracking-widest text-sm uppercase">Upload Media</span>
           </div>
        </div>
        {[1,2,3,4,5,6,7].map(i => (
          <div key={i} className="aspect-square bg-midnight rounded-2xl border border-white/10 relative group overflow-hidden shadow-lg">
             <img src={`https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=400&q=80`} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" alt="Gallery item" />
             <div className="absolute inset-0 bg-gradient-to-t from-midnight/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
               <button className="w-full bg-red-500/80 hover:bg-red-500 text-white py-2 rounded-lg font-oswald text-xs tracking-widest flex items-center justify-center gap-2 transition-colors">
                 <Trash2 className="w-4 h-4"/> DELETE
               </button>
             </div>
          </div>
        ))}
      </div>
    </motion.div>
  );

  /* 8. News */
  const renderNews = () => (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
      <div className="mb-6">
        <h1 className="font-bebas text-4xl md:text-5xl text-white leading-none">NEWS & ANNOUNCEMENTS</h1>
        <p className="text-gray-400 font-oswald text-sm tracking-widest uppercase mt-1">Content Management</p>
      </div>
      
      <div className="glass-panel p-8 rounded-2xl border border-white/10 flex flex-col gap-6 shadow-xl relative overflow-hidden">
         <div className="absolute top-0 right-0 w-64 h-64 bg-emerald/10 blur-[80px] pointer-events-none" />
         
         <div className="relative z-10">
           <label className="font-oswald text-gray-400 tracking-widest text-xs mb-2 block uppercase ml-1">Article Headline</label>
           <input type="text" placeholder="Enter an engaging headline..." className="w-full bg-midnight/50 backdrop-blur-md border border-white/10 p-4 rounded-xl font-bebas text-3xl text-white outline-none focus:border-emerald transition-all shadow-inner"/>
         </div>
         
         <div className="relative z-10">
           <label className="font-oswald text-gray-400 tracking-widest text-xs mb-2 block uppercase ml-1">Article Content</label>
           <textarea rows={8} placeholder="Write your article body here..." className="w-full bg-midnight/50 backdrop-blur-md border border-white/10 p-4 rounded-xl font-inter text-gray-300 outline-none focus:border-emerald transition-all resize-none shadow-inner leading-relaxed"></textarea>
         </div>
         
         <button className="relative z-10 bg-emerald text-midnight font-bebas text-2xl px-8 py-4 rounded-xl tracking-wider flex justify-center items-center gap-3 hover:bg-white transition-all md:self-end shadow-[0_0_20px_rgba(0,255,102,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]">
            <Newspaper className="w-6 h-6"/> PUBLISH ARTICLE
         </button>
      </div>
    </motion.div>
  );

  /* 9. Notifications */
  const renderNotifications = () => (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
      <div className="mb-6">
        <h1 className="font-bebas text-4xl md:text-5xl text-white leading-none">PUSH NOTIFICATIONS</h1>
        <p className="text-gray-400 font-oswald text-sm tracking-widest uppercase mt-1">Instant Alerts</p>
      </div>
      
      <div className="glass-panel p-8 rounded-2xl border border-white/10 flex flex-col gap-6 shadow-xl relative overflow-hidden">
         <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/10 blur-[80px] pointer-events-none" />
         
         <div className="relative z-10">
           <label className="font-oswald text-red-400 tracking-widest text-xs mb-2 block uppercase ml-1">Alert Title</label>
           <input type="text" placeholder="e.g. MATCH STARTING SOON!" className="w-full bg-midnight/50 backdrop-blur-md border border-white/10 p-4 rounded-xl font-bebas text-2xl text-white outline-none focus:border-red-500 transition-all shadow-inner"/>
         </div>
         
         <div className="relative z-10">
           <label className="font-oswald text-red-400 tracking-widest text-xs mb-2 block uppercase ml-1">Message Body</label>
           <input type="text" placeholder="Tune in to watch Mumbai vs Delhi live now on the platform." className="w-full bg-midnight/50 backdrop-blur-md border border-white/10 p-4 rounded-xl font-inter text-gray-300 outline-none focus:border-red-500 transition-all shadow-inner"/>
         </div>
         
         <button className="relative z-10 bg-red-500 text-white font-bebas text-2xl px-8 py-4 rounded-xl tracking-wider flex justify-center items-center gap-3 hover:bg-red-400 transition-all shadow-[0_0_20px_rgba(239,68,68,0.4)] hover:shadow-[0_0_30px_rgba(239,68,68,0.6)]">
            <Send className="w-6 h-6"/> SEND INSTANT ALERT
         </button>
      </div>
    </motion.div>
  );

  /* 10. Analytics */
  const renderAnalytics = () => {
    const data = [
      { name: 'Mon', traffic: 4000 },
      { name: 'Tue', traffic: 3000 },
      { name: 'Wed', traffic: 2000 },
      { name: 'Thu', traffic: 2780 },
      { name: 'Fri', traffic: 1890 },
      { name: 'Sat', traffic: 2390 },
      { name: 'Sun', traffic: 3490 },
    ];
    return (
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
        <div className="mb-6">
          <h1 className="font-bebas text-4xl md:text-5xl text-white leading-none">PLATFORM ANALYTICS</h1>
          <p className="text-gray-400 font-oswald text-sm tracking-widest uppercase mt-1">Traffic & Engagement</p>
        </div>
        
        <div className="glass-panel p-8 rounded-2xl border border-white/10 shadow-xl flex flex-col h-[500px]">
           <h3 className="font-oswald text-gray-400 tracking-widest uppercase text-sm mb-8 flex items-center gap-2">
             <Activity className="w-4 h-4 text-electric" /> Website Traffic (Last 7 Days)
           </h3>
           <div className="flex-grow w-full">
             <ResponsiveContainer width="100%" height="100%">
               <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                  <defs>
                     <linearGradient id="colorTraffic" x1="0" y1="0" x2="0" y2="1">
                       <stop offset="5%" stopColor="#00E5FF" stopOpacity={0.5}/>
                       <stop offset="95%" stopColor="#00E5FF" stopOpacity={0}/>
                     </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                  <XAxis dataKey="name" stroke="rgba(255,255,255,0.3)" tick={{fontFamily: 'Oswald', fontSize: 12}} />
                  <YAxis stroke="rgba(255,255,255,0.3)" tick={{fontFamily: 'Oswald', fontSize: 12}} />
                  <Tooltip contentStyle={{ backgroundColor: '#0B0F1A', border: '1px solid rgba(0,229,255,0.3)', borderRadius: '8px' }} itemStyle={{fontFamily: 'Oswald', color: '#00E5FF'}} />
                  <Area type="monotone" dataKey="traffic" stroke="#00E5FF" strokeWidth={3} fillOpacity={1} fill="url(#colorTraffic)" />
               </AreaChart>
             </ResponsiveContainer>
           </div>
        </div>
      </motion.div>
    );
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'Overview': return renderOverview();
      case 'Teams': return renderTeams();
      case 'Players': return renderPlayers();
      case 'Matches': return renderMatches();
      case 'Tournament Stats': return renderStats();
      case 'Sponsors': return renderSponsors();
      case 'Media': return renderMedia();
      case 'News': return renderNews();
      case 'Notifications': return renderNotifications();
      case 'Analytics': return renderAnalytics();
      default: return renderOverview();
    }
  };

  return (
    <div className="min-h-screen bg-midnight pb-12 relative pt-24 md:pt-32">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-electric/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col xl:flex-row gap-8 items-start">
          
          {/* Sidebar Area */}
          <div className="w-full xl:w-72 shrink-0 xl:sticky xl:top-32">
            <div className="glass-panel rounded-2xl p-4 border border-white/10 shadow-2xl flex flex-col">
              
              {/* Branding */}
              <div className="mb-6 px-4 border-b border-white/10 pb-6 flex flex-row xl:flex-col items-center justify-between xl:justify-center">
                <Logo className="scale-75 xl:scale-100 origin-left xl:origin-center xl:mb-2" />
                <p className="text-[10px] xl:text-xs font-oswald text-gold uppercase tracking-[0.3em] font-bold xl:mt-2 px-3 py-1 bg-gold/10 rounded-full border border-gold/30">
                  System Admin
                </p>
              </div>

              {/* Navigation Tabs */}
              <nav className="flex flex-row xl:flex-col gap-2 overflow-x-auto xl:overflow-x-visible pb-4 xl:pb-0 hide-scrollbar scroll-smooth">
                {sidebarItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.name}
                      onClick={() => setActiveTab(item.name)}
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all whitespace-nowrap outline-none ${activeTab === item.name ? 'bg-gradient-to-r from-electric/20 to-electric/5 text-electric border border-electric/30 shadow-[0_0_15px_rgba(0,194,255,0.15)]' : 'text-gray-400 hover:bg-white/5 hover:text-white border border-transparent'}`}>
                      <Icon className="w-5 h-5 shrink-0" />
                      <span className="font-oswald tracking-widest text-sm uppercase">
                        {item.name}
                      </span>
                    </button>
                  );
                })}
              </nav>

              {/* Logout Button */}
              <div className="mt-6 pt-6 border-t border-white/10 hidden xl:block">
                <button className="w-full flex items-center justify-center gap-3 px-4 py-3 rounded-xl text-red-400 hover:bg-red-500 hover:text-white transition-colors border border-red-500/20 hover:border-red-500 hover:shadow-[0_0_15px_rgba(239,68,68,0.4)]">
                  <LogOut className="w-5 h-5 shrink-0" />
                  <span className="font-oswald tracking-widest text-sm uppercase">Secure Logout</span>
                </button>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="flex-grow w-full min-w-0">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
}
