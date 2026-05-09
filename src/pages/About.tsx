import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Target, Globe } from 'lucide-react';
export function About() {
  return (
    <div className="min-h-screen pt-12 pb-24 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
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
            
            ABOUT <span className="text-electric">CEYLON</span> PREMIER LEAGUE
          </motion.h1>
        </div>

        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          className="prose prose-invert prose-lg max-w-none">
          
          <div className="glass-panel p-8 md:p-12 rounded-2xl border border-white/10 mb-12">
            <h2 className="font-bebas text-3xl text-electric mb-4">
              THE VISION
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Ceylon Premier League was born from a simple idea: cricket
              needs to be faster, more explosive, and more accessible. We've
              taken the gentleman's game and injected it with pure adrenaline.
              10 overs per side. 60 balls to make history.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Our mission is to globalize the sport by presenting it in a format
              that fits the modern fan's lifestyle—a 90-minute spectacle of
              power hitting, athletic fielding, and strategic bowling.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {[
            {
              icon: <Zap className="w-6 h-6 text-electric" />,
              title: 'FAST PACED',
              desc: '90 minutes of pure entertainment. No slow overs.'
            },
            {
              icon: <Globe className="w-6 h-6 text-neonpurple" />,
              title: 'GLOBAL REACH',
              desc: 'Broadcasted to over 50 countries worldwide.'
            },
            {
              icon: <Target className="w-6 h-6 text-gold" />,
              title: 'ELITE TALENT',
              desc: 'Featuring the best international and domestic players.'
            },
            {
              icon: <Shield className="w-6 h-6 text-green-400" />,
              title: 'FAIR PLAY',
              desc: 'Strict adherence to the highest standards of integrity.'
            }].
            map((item, i) =>
            <div
              key={i}
              className="bg-white/5 p-6 rounded-xl border border-white/5 flex gap-4">
              
                <div className="shrink-0">{item.icon}</div>
                <div>
                  <h3 className="font-bebas text-xl text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-400">{item.desc}</p>
                </div>
              </div>
            )}
          </div>

          <div className="glass-panel p-8 md:p-12 rounded-2xl border border-white/10">
            <h2 className="font-bebas text-3xl text-white mb-6">
              T10 RULES AT A GLANCE
            </h2>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-electric font-bold">1.</span>
                <span>Matches last 90 minutes (45 minutes per innings).</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-electric font-bold">2.</span>
                <span>Bowlers are limited to a maximum of 2 overs each.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-electric font-bold">3.</span>
                <span>
                  Powerplay lasts for the first 3 overs (only 2 fielders outside
                  the 30-yard circle).
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-electric font-bold">4.</span>
                <span>Strict time penalties for slow over rates.</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>);

}