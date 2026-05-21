import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Bell, Ticket } from 'lucide-react';
import { matches, teams } from '../data/mockData';
import { toast } from 'sonner';
export function Matches() {
  const [activeTab, setActiveTab] = useState<'Upcoming' | 'Live' | 'Completed'>(
    'Upcoming'
  );
  const filteredMatches = matches.filter((m) => m.status === activeTab);
  const handleReminder = () => {
    toast.success('Reminder set! We will notify you before the match starts.');
  };
  return (
    <div className="min-h-screen pt-32 md:pt-40 pb-24 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald/5 blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
            className="text-5xl md:text-7xl font-bebas text-slate mb-2">
            
            MATCH <span className="text-emerald">FIXTURES</span>
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
            
            Follow the action
          </motion.p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="flex glass rounded-lg p-1 border border-lightgray">
            {['Upcoming', 'Live', 'Completed'].map((tab) =>
            <button
              key={tab}
              onClick={() => setActiveTab(tab as any)}
              className={`px-6 md:px-10 py-3 rounded-md font-bebas text-xl tracking-wider transition-all ${activeTab === tab ? 'bg-emerald text-white shadow-[0_0_15px_rgba(0,255,102,0.5)]' : 'text-darkgray hover:text-slate'}`}>
              
                {tab}
                {tab === 'Live' && matches.some((m) => m.status === 'Live') &&
              <span className="ml-2 inline-block w-2 h-2 bg-red-500 rounded-full animate-pulse" />
              }
              </button>
            )}
          </div>
        </div>

        {/* Match List */}
        <div className="space-y-6">
          {filteredMatches.length > 0 ?
          filteredMatches.map((match, index) => {
            const team1 = teams.find((t) => t.id === match.team1Id);
            const team2 = teams.find((t) => t.id === match.team2Id);
            return (
              <motion.div
                key={match.id}
                initial={{
                  opacity: 0,
                  y: 20
                }}
                animate={{
                  opacity: 1,
                  y: 0
                }}
                transition={{
                  delay: index * 0.1
                }}
                className={`glass-panel rounded-2xl overflow-hidden border ${match.status === 'Live' ? 'border-emerald shadow-[0_0_20px_rgba(0,255,102,0.15)]' : 'border-lightgray'}`}>
                
                  {/* Header */}
                  <div className="bg-slate/5 px-6 py-3 border-b border-lightgray flex justify-between items-center">
                    <div className="flex items-center gap-4 text-xs font-oswald tracking-widest text-darkgray uppercase">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" /> {match.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" /> {match.venue}
                      </span>
                    </div>
                    {match.status === 'Live' &&
                  <span className="bg-red-500/20 text-red-500 border border-red-500/50 px-3 py-1 rounded text-xs font-bold animate-pulse">
                        LIVE NOW
                      </span>
                  }
                  </div>

                  {/* Body */}
                  <div className="p-6 md:p-8">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                      {/* Team 1 */}
                      <div className="flex flex-col items-center flex-1">
                        <div
                        className="w-24 h-24 rounded-full overflow-hidden border-4 bg-cream mb-4"
                        style={{
                          borderColor: team1?.color
                        }}>
                        
                          <img
                          src={team1?.logo}
                          alt={team1?.name}
                          className="w-full h-full object-cover" />
                        
                        </div>
                        <h3 className="font-bebas text-2xl md:text-3xl text-slate text-center">
                          {team1?.name}
                        </h3>
                        {match.score &&
                      <div className="font-bebas text-3xl text-emerald mt-2">
                            {match.score.team1}
                          </div>
                      }
                      </div>

                      {/* VS / Info */}
                      <div className="flex flex-col items-center justify-center shrink-0">
                        <div className="w-12 h-12 rounded-full bg-lightgray flex items-center justify-center font-bebas text-2xl text-midgray mb-4">
                          VS
                        </div>
                        {match.status === 'Upcoming' &&
                      <div className="text-center">
                            <div className="font-bebas text-3xl text-slate mb-1">
                              {match.time}
                            </div>
                            <div className="text-xs font-oswald text-darkgray uppercase tracking-widest">
                              Local Time
                            </div>
                          </div>
                      }
                      </div>

                      {/* Team 2 */}
                      <div className="flex flex-col items-center flex-1">
                        <div
                        className="w-24 h-24 rounded-full overflow-hidden border-4 bg-cream mb-4"
                        style={{
                          borderColor: team2?.color
                        }}>
                        
                          <img
                          src={team2?.logo}
                          alt={team2?.name}
                          className="w-full h-full object-cover" />
                        
                        </div>
                        <h3 className="font-bebas text-2xl md:text-3xl text-slate text-center">
                          {team2?.name}
                        </h3>
                        {match.score &&
                      <div className="font-bebas text-3xl text-darkgray mt-2">
                            {match.score.team2}
                          </div>
                      }
                      </div>
                    </div>

                    {/* Footer Info */}
                    {(match.toss || match.result) &&
                  <div className="mt-8 pt-6 border-t border-lightgray text-center">
                        <p className="font-oswald text-sm tracking-wider text-emerald">
                          {match.result || match.toss}
                        </p>
                      </div>
                  }
                  </div>

                  {/* Actions */}
                  {match.status === 'Upcoming' &&
                <div className="bg-slate/5 px-6 py-4 border-t border-lightgray flex justify-center gap-4">
                      <button
                    onClick={handleReminder}
                    className="flex items-center gap-2 px-6 py-2 rounded-lg border border-lightgray text-sm font-oswald tracking-wider hover:bg-lightgray transition-colors">
                    
                        <Bell className="w-4 h-4" /> REMIND ME
                      </button>
                      <button className="flex items-center gap-2 px-6 py-2 rounded-lg bg-emerald text-white border border-emerald text-sm font-oswald tracking-wider hover:bg-white hover:text-emerald transition-colors">
                        <Ticket className="w-4 h-4" /> BOOK TICKETS
                      </button>
                    </div>
                }
                </motion.div>);

          }) :

          <div className="text-center py-20 glass-panel rounded-2xl border border-lightgray">
              <p className="text-midgray font-oswald tracking-widest text-lg">
                No {activeTab.toLowerCase()} matches found.
              </p>
            </div>
          }
        </div>
      </div>
    </div>);

}
