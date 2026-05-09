import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';
import { MessageSquare, ThumbsUp } from 'lucide-react';
export function FanZone() {
  const [voted, setVoted] = useState(false);
  const handleVote = (team: string) => {
    if (voted) return;
    setVoted(true);
    toast.success(`Vote cast for ${team}!`);
  };
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bebas text-white mb-4">
            FAN <span className="text-neonpurple">ZONE</span>
          </h2>
          <p className="text-gray-400 font-oswald tracking-widest uppercase">
            Be part of the action
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Poll Card */}
          <motion.div
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
            className="glass-panel rounded-2xl p-8 border border-neonpurple/30 relative overflow-hidden">
            
            <div className="absolute top-0 right-0 w-32 h-32 bg-neonpurple/20 blur-[50px]" />
            <h3 className="font-bebas text-2xl mb-6 flex items-center gap-2">
              <ThumbsUp className="text-neonpurple w-6 h-6" />
              MATCH PREDICTION
            </h3>
            <p className="text-gray-300 mb-8">Who will win the next match?</p>

            <div className="space-y-4">
              <button
                onClick={() => handleVote('Mumbai Strikers')}
                disabled={voted}
                className="w-full relative overflow-hidden rounded-lg border border-white/10 bg-white/5 p-4 text-left hover:bg-white/10 transition-colors disabled:opacity-50 disabled:cursor-not-allowed group">
                
                <div className="relative z-10 flex justify-between items-center">
                  <span className="font-bebas text-xl">Mumbai Strikers</span>
                  {voted &&
                  <span className="font-bold text-electric">65%</span>
                  }
                </div>
                {voted &&
                <div className="absolute left-0 top-0 bottom-0 bg-electric/20 w-[65%] transition-all duration-1000" />
                }
              </button>

              <button
                onClick={() => handleVote('Delhi Dynamos')}
                disabled={voted}
                className="w-full relative overflow-hidden rounded-lg border border-white/10 bg-white/5 p-4 text-left hover:bg-white/10 transition-colors disabled:opacity-50 disabled:cursor-not-allowed group">
                
                <div className="relative z-10 flex justify-between items-center">
                  <span className="font-bebas text-xl">Delhi Dynamos</span>
                  {voted &&
                  <span className="font-bold text-neonpurple">35%</span>
                  }
                </div>
                {voted &&
                <div className="absolute left-0 top-0 bottom-0 bg-neonpurple/20 w-[35%] transition-all duration-1000" />
                }
              </button>
            </div>
          </motion.div>

          {/* Comments Card */}
          <motion.div
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
              delay: 0.2
            }}
            className="glass-panel rounded-2xl p-8 border border-white/10">
            
            <h3 className="font-bebas text-2xl mb-6 flex items-center gap-2">
              <MessageSquare className="text-electric w-6 h-6" />
              LIVE CHATTER
            </h3>

            <div className="space-y-6 mb-6 h-[200px] overflow-y-auto pr-2">
              {[
              {
                user: 'CricketFan99',
                text: 'Virat is looking in dangerous form today! 🔥',
                time: '2m ago'
              },
              {
                user: 'T10Lover',
                text: 'What a catch by Rohit! Unbelievable!',
                time: '5m ago'
              },
              {
                user: 'SportsNerd',
                text: 'The NRR for Mumbai is looking solid now.',
                time: '12m ago'
              }].
              map((comment, i) =>
              <div key={i} className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-electric to-neonpurple flex items-center justify-center shrink-0 font-bebas text-lg">
                    {comment.user.charAt(0)}
                  </div>
                  <div>
                    <div className="flex items-baseline gap-2">
                      <span className="font-bold text-sm text-electric">
                        {comment.user}
                      </span>
                      <span className="text-xs text-gray-500">
                        {comment.time}
                      </span>
                    </div>
                    <p className="text-sm text-gray-300 mt-1">{comment.text}</p>
                  </div>
                </div>
              )}
            </div>

            <div className="relative">
              <input
                type="text"
                placeholder="Join the conversation..."
                className="w-full bg-white/5 border border-white/10 rounded-full py-3 px-6 text-sm focus:outline-none focus:border-electric transition-colors" />
              
              <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-electric text-midnight px-4 py-1.5 rounded-full font-bold text-xs hover:bg-white transition-colors">
                SEND
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

}