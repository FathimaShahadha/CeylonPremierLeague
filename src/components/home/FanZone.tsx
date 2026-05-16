import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';
import { MessageSquare, ThumbsUp, Send } from 'lucide-react';

export function FanZone() {
  const [voted, setVoted] = useState(false);
  const handleVote = (team: string) => {
    if (voted) return;
    setVoted(true);
    toast.success(`Vote cast for ${team}!`);
  };

  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-orangeGlow/10 blur-[150px] rounded-full pointer-events-none -translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-6xl md:text-8xl font-bebas text-white mb-4"
          >
            FAN <span className="text-orangeGlow drop-shadow-[0_0_20px_rgba(255,140,0,0.4)]">ZONE</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 font-oswald tracking-[0.3em] uppercase text-sm md:text-base"
          >
            Feel the Energy. Join the Roar.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Poll Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-panel rounded-3xl p-8 md:p-12 border border-orangeGlow/30 relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-orangeGlow/20 blur-[80px] pointer-events-none" />
            
            <h3 className="font-bebas text-4xl mb-8 flex items-center gap-3 text-white">
              <ThumbsUp className="text-orangeGlow w-8 h-8" />
              MATCH PREDICTION
            </h3>
            <p className="text-gray-400 font-oswald tracking-widest uppercase mb-8">Who will win the next match?</p>

            <div className="space-y-6">
              <button
                onClick={() => handleVote('Mumbai Strikers')}
                disabled={voted}
                className="w-full relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 text-left hover:bg-white/10 transition-colors disabled:opacity-50 disabled:cursor-not-allowed group"
              >
                <div className="relative z-10 flex justify-between items-center">
                  <span className="font-bebas text-3xl text-white">Mumbai Strikers</span>
                  {voted && <span className="font-bebas text-3xl text-emerald drop-shadow-md">65%</span>}
                </div>
                {voted && <div className="absolute left-0 top-0 bottom-0 bg-emerald/30 w-[65%] transition-all duration-1000 ease-out" />}
              </button>

              <button
                onClick={() => handleVote('Delhi Dynamos')}
                disabled={voted}
                className="w-full relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 text-left hover:bg-white/10 transition-colors disabled:opacity-50 disabled:cursor-not-allowed group"
              >
                <div className="relative z-10 flex justify-between items-center">
                  <span className="font-bebas text-3xl text-white">Delhi Dynamos</span>
                  {voted && <span className="font-bebas text-3xl text-orangeGlow drop-shadow-md">35%</span>}
                </div>
                {voted && <div className="absolute left-0 top-0 bottom-0 bg-orangeGlow/30 w-[35%] transition-all duration-1000 ease-out" />}
              </button>
            </div>
          </motion.div>

          {/* Comments Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass-panel rounded-3xl p-8 md:p-12 border border-white/10 relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
          >
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-emerald/10 blur-[80px] pointer-events-none" />

            <h3 className="font-bebas text-4xl mb-8 flex items-center gap-3 text-white">
              <MessageSquare className="text-emerald w-8 h-8" />
              LIVE CHATTER
            </h3>

            <div className="space-y-8 mb-8 h-[250px] overflow-y-auto pr-4 hide-scrollbar relative z-10">
              {[
                { user: 'CricketFan99', text: 'Virat is looking in dangerous form today! 🔥', time: '2m ago' },
                { user: 'T10Lover', text: 'What a catch by Rohit! Unbelievable!', time: '5m ago' },
                { user: 'SportsNerd', text: 'The NRR for Mumbai is looking solid now.', time: '12m ago' }
              ].map((comment, i) => (
                <div key={i} className="flex gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald to-teal-500 flex items-center justify-center shrink-0 font-bebas text-2xl text-midnight shadow-lg group-hover:scale-110 transition-transform">
                    {comment.user.charAt(0)}
                  </div>
                  <div>
                    <div className="flex items-baseline gap-3">
                      <span className="font-bebas text-xl text-emerald tracking-wide">
                        {comment.user}
                      </span>
                      <span className="text-xs font-oswald text-gray-500 uppercase tracking-widest">
                        {comment.time}
                      </span>
                    </div>
                    <p className="text-base text-gray-300 mt-1">{comment.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="relative z-10">
              <input
                type="text"
                placeholder="Join the conversation..."
                className="w-full bg-white/5 border border-white/20 rounded-xl py-4 pl-6 pr-16 text-base focus:outline-none focus:border-emerald transition-colors text-white backdrop-blur-md"
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2 bg-emerald text-midnight p-2 rounded-lg hover:scale-105 transition-transform">
                <Send className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}