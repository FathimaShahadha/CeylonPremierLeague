import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  LayoutDashboard, Users, UserCircle, Calendar, Trophy, Handshake,
  Image as ImageIcon, Newspaper, Bell, BarChart3, Settings, LogOut,
  Plus, Edit2, Trash2, Upload, Send
} from 'lucide-react';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line
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
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
      <div className="flex justify-between items-end">
        <h1 className="font-bebas text-4xl text-white">OVERVIEW</h1>
        <button className="bg-electric text-midnight px-4 py-2 rounded font-oswald text-sm tracking-wider flex items-center gap-2 hover:bg-white transition-colors">
          <Plus className="w-4 h-4" /> QUICK ADD
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Total Teams', value: teams.length, color: 'text-electric' },
          { label: 'Total Players', value: players.length, color: 'text-gold' },
          { label: 'Matches Played', value: matches.filter(m => m.status === 'Completed').length, color: 'text-green-400' },
          { label: 'Live Matches', value: matches.filter(m => m.status === 'Live').length, color: 'text-red-400' }
        ].map((kpi, i) => (
          <div key={i} className="glass-panel p-6 rounded-xl border border-white/10 hover:border-white/30 transition-all">
            <div className="text-sm font-oswald text-gray-400 uppercase tracking-widest mb-2">{kpi.label}</div>
            <div className={`font-bebas text-5xl ${kpi.color}`}>{kpi.value}</div>
          </div>
        ))}
      </div>

      <div className="glass-panel rounded-xl border border-white/10 overflow-hidden">
        <div className="p-6 border-b border-white/10"><h3 className="font-bebas text-2xl text-white">RECENT MATCHES</h3></div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-white/5 text-xs font-oswald text-gray-400 uppercase tracking-widest">
                <th className="p-4">Date</th>
                <th className="p-4">Match</th>
                <th className="p-4">Status</th>
                <th className="p-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {matches.slice(0, 5).map(match => (
                <tr key={match.id} className="hover:bg-white/5">
                  <td className="p-4 text-sm text-gray-300">{match.date}</td>
                  <td className="p-4 font-bebas text-lg text-white">
                    {teams.find(t => t.id === match.team1Id)?.shortName} vs {teams.find(t => t.id === match.team2Id)?.shortName}
                  </td>
                  <td className="p-4">
                    <span className={`text-xs px-2 py-1 rounded font-bold ${match.status === 'Live' ? 'bg-red-500/20 text-red-500' : match.status === 'Completed' ? 'bg-green-500/20 text-green-500' : 'bg-gray-500/20 text-gray-400'}`}>
                      {match.status}
                    </span>
                  </td>
                  <td className="p-4 text-right">
                    <button className="text-gray-400 hover:text-electric mx-2"><Edit2 className="w-4 h-4" /></button>
                    <button className="text-gray-400 hover:text-red-500"><Trash2 className="w-4 h-4" /></button>
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
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
      <div className="flex justify-between items-end mb-4">
        <h1 className="font-bebas text-4xl text-white">TEAM MANAGEMENT</h1>
        <button className="bg-electric text-midnight px-4 py-2 rounded font-oswald text-sm tracking-wider flex items-center gap-2 hover:bg-white transition-colors">
          <Plus className="w-4 h-4" /> ADD TEAM
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {teams.map(team => (
          <div key={team.id} className="glass-panel p-6 rounded-xl border border-white/10 hover:border-electric/50 transition-all flex flex-col justify-between">
             <div className="flex items-center gap-4 mb-4">
                <img src={team.logo} className="w-12 h-12 rounded-full border-2 border-gold" alt={team.name} />
                <div>
                   <h3 className="font-bebas text-xl text-white">{team.name}</h3>
                   <p className="text-xs font-oswald text-gray-400 uppercase tracking-widest">{team.shortName}</p>
                </div>
             </div>
             <p className="text-sm text-gray-300">Captain: {team.captain}</p>
             <p className="text-sm text-gray-300 mb-4">Coach: {team.coach}</p>
             <div className="flex gap-2">
                <button className="flex-1 bg-white/10 hover:bg-electric/20 text-white font-oswald text-xs py-2 rounded transition border border-white/10">EDIT</button>
                <button className="flex-1 bg-red-500/10 hover:bg-red-500/30 text-red-400 font-oswald text-xs py-2 rounded transition border border-red-500/20">DELETE</button>
             </div>
          </div>
        ))}
      </div>
    </motion.div>
  );

  /* 3. Player Management */
  const renderPlayers = () => (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
      <div className="flex justify-between items-end mb-4">
        <h1 className="font-bebas text-4xl text-white">PLAYER MANAGEMENT</h1>
        <button className="bg-gold text-midnight px-4 py-2 rounded font-oswald text-sm tracking-wider flex items-center gap-2 hover:bg-white transition-colors">
          <Plus className="w-4 h-4" /> REGISTER PLAYER
        </button>
      </div>
      <div className="glass-panel rounded-xl overflow-hidden border border-white/10">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-white/5 text-xs font-oswald text-gray-400 uppercase tracking-widest">
              <th className="p-4">Player</th>
              <th className="p-4">Role</th>
              <th className="p-4">Team</th>
              <th className="p-4">MVP Pts</th>
              <th className="p-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {players.map(player => (
              <tr key={player.id} className="hover:bg-white/5">
                <td className="p-4 flex items-center gap-3">
                  <img src={player.image} alt={player.name} className="w-10 h-10 rounded-full object-cover" />
                  <span className="font-bebas text-lg text-white">{player.name}</span>
                </td>
                <td className="p-4 text-sm text-gray-300">{player.role}</td>
                <td className="p-4 text-sm text-gray-300">{teams.find(t => t.id === player.teamId)?.shortName}</td>
                <td className="p-4 text-sm font-bold text-gold">{player.mvpPoints}</td>
                <td className="p-4 text-right">
                  <button className="text-gray-400 hover:text-electric mx-2"><Edit2 className="w-4 h-4" /></button>
                  <button className="text-gray-400 hover:text-red-500"><Trash2 className="w-4 h-4" /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );

  /* 4. Match Management */
  const renderMatches = () => (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
      <div className="flex justify-between items-end mb-4">
        <h1 className="font-bebas text-4xl text-white">MATCH BUILDER</h1>
        <button className="bg-electric text-midnight px-4 py-2 rounded font-oswald text-sm tracking-wider flex items-center gap-2 hover:bg-white transition-colors">
          <Plus className="w-4 h-4" /> CREATE FIXTURE
        </button>
      </div>
      <div className="grid gap-4">
        {matches.map(m => (
          <div key={m.id} className="glass-panel p-4 rounded-xl border border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="text-center w-24">
                <div className="text-xs text-gray-400">{m.date}</div>
                <div className="font-bebas text-xl text-white">{m.time}</div>
              </div>
              <div className="h-12 w-px bg-white/10 mx-2 hidden md:block"></div>
              <div className="flex items-center gap-2 font-bebas text-2xl text-white">
                <span className="text-electric">{teams.find(t => t.id === m.team1Id)?.shortName}</span>
                <span className="text-gray-500 text-lg">VS</span>
                <span className="text-gold">{teams.find(t => t.id === m.team2Id)?.shortName}</span>
              </div>
            </div>
            
            <div className={`px-3 py-1 rounded font-oswald text-sm tracking-wide ${m.status === 'Live' ? 'bg-red-500/20 text-red-500 border border-red-500/50 blink' : m.status === 'Completed' ? 'bg-green-500/20 text-green-400 border border-green-500/50' : 'bg-white/10 text-gray-300 border border-white/20'}`}>
              {m.status}
            </div>

            <div className="flex gap-2 w-full md:w-auto">
              <button className="flex-1 md:flex-none px-4 py-2 bg-white/10 hover:bg-white/20 text-white font-oswald text-xs rounded transition border border-white/10">UPDATE SCORE</button>
              <button className="flex-1 md:flex-none px-4 py-2 bg-white/10 hover:bg-white/20 text-white font-oswald text-xs rounded transition border border-white/10">EDIT</button>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );

  /* 5. Tournament Stats */
  const renderStats = () => (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
      <h1 className="font-bebas text-4xl text-white mb-4">TOURNAMENT AWARDS</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {['Most Valuable Player', 'Orange Cap (Runs)', 'Purple Cap (Wickets)', 'Most Sixes', 'Emerging Player', 'Best Catch'].map((award, idx) => (
          <div key={idx} className="glass-panel p-6 rounded-xl border border-white/10">
            <h3 className="font-oswald text-lg text-gold uppercase tracking-widest mb-4 flex items-center gap-2"><Trophy className="w-5 h-5"/> {award}</h3>
            <div className="flex gap-4">
              <select className="w-full bg-midnight border border-white/20 rounded p-2 text-white font-inter text-sm outline-none focus:border-electric">
                <option>Assign Player...</option>
                {players.map(p => <option key={p.id}>{p.name}</option>)}
              </select>
              <button className="bg-electric text-midnight px-4 rounded font-oswald font-bold">SAVE</button>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );

  /* 6. Sponsors */
  const renderSponsors = () => (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
      <div className="flex justify-between items-end mb-4">
        <h1 className="font-bebas text-4xl text-white">SPONSOR MANAGEMENT</h1>
        <button className="bg-gold text-midnight px-4 py-2 rounded font-oswald text-sm tracking-wider flex items-center gap-2 hover:bg-white transition-colors">
          <Plus className="w-4 h-4" /> ADD SPONSOR
        </button>
      </div>
      <div className="glass-panel p-8 rounded-xl border border-white/10 flex flex-col items-center justify-center border-dashed border-2 hover:border-electric transition-colors cursor-pointer text-gray-400 hover:text-electric">
         <Upload className="w-12 h-12 mb-4 opacity-50" />
         <p className="font-oswald tracking-widest text-lg">UPLOAD SPONSOR LOGO</p>
         <p className="text-sm font-inter mt-2 opacity-50">PNG, SVG up to 2MB. Transparent background required.</p>
      </div>
    </motion.div>
  );

  /* 7. Media Gallery */
  const renderMedia = () => (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
      <h1 className="font-bebas text-4xl text-white mb-4">MEDIA CENTER</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="aspect-square glass-panel rounded-xl border border-white/10 border-dashed hover:border-electric transition-colors flex items-center justify-center text-gray-400 cursor-pointer">
           <div className="text-center"><Plus className="w-8 h-8 mx-auto mb-2 opacity-50"/><span className="font-oswald tracking-widest text-sm">UPLOAD</span></div>
        </div>
        {[1,2,3,4,5,6,7].map(i => (
          <div key={i} className="aspect-square bg-white/5 rounded-xl border border-white/10 relative group overflow-hidden">
             <img src={`https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=400&q=80`} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" alt="Gallery item" />
             <button className="absolute top-2 right-2 bg-red-500 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity drop-shadow text-white"><Trash2 className="w-4 h-4"/></button>
          </div>
        ))}
      </div>
    </motion.div>
  );

  /* 8. News */
  const renderNews = () => (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
      <h1 className="font-bebas text-4xl text-white mb-4">NEWS & ANNOUNCEMENTS</h1>
      <div className="glass-panel p-6 rounded-xl border border-white/10 text-white flex flex-col gap-4">
         <input type="text" placeholder="Article Headline" className="bg-midnight border border-white/20 p-3 rounded font-bebas text-2xl text-white outline-none focus:border-electric transition-all"/>
         <textarea rows={6} placeholder="Write your article here..." className="bg-midnight border border-white/20 p-3 rounded font-inter text-gray-300 outline-none focus:border-electric transition-all resize-none"></textarea>
         <button className="bg-electric text-midnight font-oswald text-lg px-6 py-3 rounded tracking-wider flex justify-center items-center gap-2 hover:bg-white transition-colors md:self-end">
            <Newspaper className="w-5 h-5"/> PUBLISH
         </button>
      </div>
    </motion.div>
  );

  /* 9. Notifications */
  const renderNotifications = () => (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
      <h1 className="font-bebas text-4xl text-white mb-4">PUSH NOTIFICATIONS</h1>
      <div className="glass-panel p-8 rounded-xl border border-white/10 flex flex-col gap-6">
         <div>
           <label className="font-oswald text-electric tracking-widest text-sm mb-2 block">NOTIFICATION TITLE</label>
           <input type="text" placeholder="e.g. CPL Final Starts Now!" className="w-full bg-midnight border border-white/20 p-3 rounded font-inter text-white outline-none focus:border-electric transition-all"/>
         </div>
         <div>
           <label className="font-oswald text-electric tracking-widest text-sm mb-2 block">MESSAGE</label>
           <input type="text" placeholder="Tune in to watch Mumbai vs Delhi live" className="w-full bg-midnight border border-white/20 p-3 rounded font-inter text-gray-300 outline-none focus:border-electric transition-all"/>
         </div>
         <button className="bg-red-500 text-white font-oswald text-lg px-6 py-3 rounded tracking-wider flex justify-center items-center gap-2 hover:bg-red-400 shadow-[0_0_15px_rgba(239,68,68,0.4)] transition-all">
            <Send className="w-5 h-5"/> SEND INSTANT ALERT
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
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
        <h1 className="font-bebas text-4xl text-white mb-4">PLATFORM ANALYTICS</h1>
        <div className="glass-panel p-6 rounded-xl border border-white/10 h-96">
           <h3 className="font-oswald text-gray-400 tracking-widest uppercase text-sm mb-6">Website Traffic (7 Days)</h3>
           <ResponsiveContainer width="100%" height="80%">
             <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                   <linearGradient id="colorTraffic" x1="0" y1="0" x2="0" y2="1">
                     <stop offset="5%" stopColor="#00E5FF" stopOpacity={0.8}/>
                     <stop offset="95%" stopColor="#00E5FF" stopOpacity={0}/>
                   </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#2A3142" />
                <XAxis dataKey="name" stroke="#6FE3FF" />
                <YAxis stroke="#6FE3FF" />
                <Tooltip contentStyle={{ backgroundColor: '#0B0F1A', border: '1px solid #00E5FF' }} />
                <Area type="monotone" dataKey="traffic" stroke="#00E5FF" fillOpacity={1} fill="url(#colorTraffic)" />
             </AreaChart>
           </ResponsiveContainer>
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
    <div className="min-h-screen bg-midnight pt-28 pb-12 relative">
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-electric/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col xl:flex-row gap-8">
          
          <div className="w-full xl:w-72 shrink-0">
            <div className="glass-panel rounded-2xl p-4 border border-white/10 sticky top-32 shadow-2xl">
              <div className="mb-6 px-2 border-b border-white/10 pb-6 flex flex-col items-center">
                <Logo className="mb-2" />
                <p className="text-xs font-oswald text-gold uppercase tracking-[0.3em] font-bold mt-2">
                  System Admin
                </p>
              </div>

              <nav className="space-y-1">
                {sidebarItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.name}
                      onClick={() => setActiveTab(item.name)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${activeTab === item.name ? 'bg-gradient-to-r from-electric/20 to-transparent text-electric border-l-4 border-electric' : 'text-gray-400 hover:bg-white/5 hover:text-white border-l-4 border-transparent'}`}>
                      <Icon className="w-5 h-5 shrink-0" />
                      <span className="font-oswald tracking-widest text-sm">
                        {item.name}
                      </span>
                    </button>
                  );
                })}
              </nav>

              <div className="mt-8 pt-4 border-t border-white/10">
                <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-red-400 hover:bg-red-400/10 transition-colors">
                  <LogOut className="w-5 h-5 shrink-0" />
                  <span className="font-oswald tracking-widest text-sm">SECURE LOGOUT</span>
                </button>
              </div>
            </div>
          </div>

          <div className="flex-grow">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
}