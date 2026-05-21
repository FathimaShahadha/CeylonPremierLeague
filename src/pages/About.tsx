import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Target, Globe } from 'lucide-react';

export function About() {
  return (
    <div className="min-h-screen pt-32 md:pt-40 pb-24 relative overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-emerald/10 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-orangeGlow/10 blur-[150px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-bebas text-slate mb-4 drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]"
          >
            ABOUT <span className="text-emerald drop-shadow-[0_0_20px_rgba(0,255,102,0.4)]">CEYLON</span> PREMIER LEAGUE
          </motion.h1>
          <motion.div className="w-24 h-1 bg-emerald mx-auto mb-6" initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.2 }} />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="prose prose-invert prose-lg max-w-none space-y-12"
        >
          {/* Vision Card */}
          <div className="glass-panel p-8 md:p-12 rounded-3xl border border-lightgray shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald/20 blur-[80px] pointer-events-none" />
            <h2 className="font-bebas text-4xl text-emerald mb-6 relative z-10">
              THE VISION
            </h2>
            <p className="text-darkgray leading-relaxed mb-6 text-xl relative z-10">
              Ceylon Premier League was born from a simple idea: cricket
              needs to be faster, more explosive, and more accessible. We've
              taken the gentleman's game and injected it with pure adrenaline.
              <span className="text-slate font-bold block mt-2 text-2xl font-bebas tracking-wider">10 overs per side. 60 balls to make history.</span>
            </p>
            <p className="text-darkgray leading-relaxed text-lg relative z-10">
              Our mission is to globalize the sport by presenting it in a format
              that fits the modern fan's lifestyle—a 90-minute spectacle of
              power hitting, athletic fielding, and strategic bowling.
            </p>
          </div>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
            {[
              { icon: <Zap className="w-8 h-8 text-orangeGlow" />, title: 'FAST PACED', desc: '90 minutes of pure entertainment. No slow overs.', glow: 'hover:border-orangeGlow/50 hover:shadow-[0_0_30px_rgba(255,140,0,0.2)]' },
              { icon: <Globe className="w-8 h-8 text-emerald" />, title: 'GLOBAL REACH', desc: 'Broadcasted to over 50 countries worldwide.', glow: 'hover:border-emerald/50 hover:shadow-[0_0_30px_rgba(0,255,102,0.2)]' },
              { icon: <Target className="w-8 h-8 text-gold" />, title: 'ELITE TALENT', desc: 'Featuring the best international and domestic players.', glow: 'hover:border-gold/50 hover:shadow-[0_0_30px_rgba(255,215,0,0.2)]' },
              { icon: <Shield className="w-8 h-8 text-neonpurple" />, title: 'FAIR PLAY', desc: 'Strict adherence to the highest standards of integrity.', glow: 'hover:border-neonpurple/50 hover:shadow-[0_0_30px_rgba(123,46,255,0.2)]' }
            ].map((item, i) => (
              <div key={i} className={`glass-panel p-8 rounded-2xl border border-lightgray flex flex-col items-start gap-4 transition-all duration-500 hover:-translate-y-2 group cursor-default ${item.glow}`}>
                <div className="p-4 bg-white/50 rounded-xl group-hover:scale-110 transition-transform">{item.icon}</div>
                <div>
                  <h3 className="font-bebas text-3xl text-slate mb-2">{item.title}</h3>
                  <p className="text-base text-darkgray">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Rules Card */}
          <div className="glass-panel p-8 md:p-12 rounded-3xl border border-lightgray shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden">
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-orangeGlow/10 blur-[80px] pointer-events-none" />
            <h2 className="font-bebas text-4xl text-slate mb-8 relative z-10">
              T10 RULES AT A GLANCE
            </h2>
            <ul className="space-y-6 text-darkgray relative z-10">
              {[
                "Matches last 90 minutes (45 minutes per innings).",
                "Bowlers are limited to a maximum of 2 overs each.",
                "Powerplay lasts for the first 3 overs (only 2 fielders outside the 30-yard circle).",
                "Strict time penalties for slow over rates."
              ].map((rule, idx) => (
                <li key={idx} className="flex items-start gap-4 group">
                  <span className="font-bebas text-3xl text-emerald bg-emerald/10 w-12 h-12 flex items-center justify-center rounded-xl shrink-0 group-hover:scale-110 group-hover:bg-emerald group-hover:text-white transition-all">
                    {idx + 1}
                  </span>
                  <span className="text-xl pt-2 font-oswald tracking-wide">{rule}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
