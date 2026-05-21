import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { PlayCircle, ChevronRight, Zap } from 'lucide-react';
import { LiveTicker } from '../layout/LiveTicker';
import { matches, teams } from '../../data/mockData';

export function Hero() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 14,
    minutes: 30,
    seconds: 45
  });

  const liveMatch = matches.find((m) => m.status === 'Live') || matches[0];
  const team1 = teams.find(t => t.id === liveMatch.team1Id);
  const team2 = teams.find(t => t.id === liveMatch.team2Id);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { hours, minutes, seconds } = prev;
        if (seconds > 0) seconds--;
        else {
          seconds = 59;
          if (minutes > 0) minutes--;
          else {
            minutes = 59;
            if (hours > 0) hours--;
          }
        }
        return { hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const particles = Array.from({ length: 30 });

  return (
    <div className="relative min-h-screen flex flex-col justify-end overflow-hidden bg-softwhite pt-20">
      {/* Light Premium Backgrounds */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=2000&q=80)',
          filter: 'grayscale(0.5)'
        }}
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-softwhite via-softwhite/90 to-transparent" />
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-softwhite via-softwhite/95 to-transparent w-full md:w-2/3" />
      
      {/* Particle Effects */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {particles.map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-emerald rounded-full opacity-30"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
              scale: Math.random() * 2
            }}
            animate={{
              y: [null, Math.random() * -500],
              opacity: [0.2, 0.8, 0],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      {/* Spotlights */}
      <motion.div 
        className="absolute -top-1/4 -right-1/4 w-[1000px] h-[1000px] bg-emerald/10 rounded-full blur-[150px] mix-blend-screen"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-32 flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Left Content - Typography */}
        <div className="flex-1 w-full text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="font-oswald text-emerald tracking-[0.4em] uppercase text-sm md:text-base mb-6 flex items-center gap-4">
              <span className="w-12 h-px bg-emerald" />
              The Pinnacle of T10 Cricket
            </h2>
          </motion.div>

          <motion.h1 
            className="font-bebas text-7xl md:text-[140px] leading-[0.85] tracking-tight mb-8 relative"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, type: "spring", damping: 20 }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-slate to-gray-500">
              CEYLON
            </span>
            <br />
            <span className="text-emerald drop-shadow-[0_0_15px_rgba(0,160,64,0.3)] relative inline-block">
              PREMIER
              <motion.div 
                className="absolute inset-0 bg-emerald/20 blur-2xl -z-10"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orangeGlow to-gold">
              LEAGUE
            </span>
          </motion.h1>

          <motion.div 
            className="flex flex-wrap gap-6 mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link to="/live" className="group relative px-8 py-5 bg-emerald text-white font-bebas text-2xl tracking-wider rounded-lg overflow-hidden flex items-center gap-3 shadow-[0_4px_15px_rgba(0,160,64,0.3)] hover:shadow-[0_6px_20px_rgba(0,160,64,0.4)] transition-shadow">
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              <PlayCircle className="w-8 h-8 relative z-10 group-hover:scale-110 transition-transform" />
              <span className="relative z-10">WATCH LIVE</span>
            </Link>
            
            <Link to="/matches" className="px-8 py-5 glass-panel text-slate font-bebas text-2xl tracking-wider rounded-lg hover:bg-cream transition-colors flex items-center gap-3 border border-lightgray group hover:border-emerald/50">
              <span className="relative z-10">FIXTURES</span>
              <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Right Content - Floating Glass Card */}
        <motion.div 
          className="flex-1 w-full max-w-md hidden lg:block perspective-1000"
          initial={{ opacity: 0, rotateY: 20, x: 50 }}
          animate={{ opacity: 1, rotateY: 0, x: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <motion.div 
            className="glass-panel p-8 rounded-3xl border border-lightgray shadow-[0_20px_50px_rgba(0,0,0,0.05)] relative overflow-hidden"
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald/20 blur-[50px]" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-orangeGlow/20 blur-[50px]" />
            
            <div className="flex justify-between items-center mb-8 relative z-10">
              <span className="font-oswald text-xs tracking-widest text-darkgray uppercase">Live Now</span>
              <span className="animate-pulse flex items-center gap-2 text-xs font-bold text-emerald bg-emerald/10 px-3 py-1.5 rounded-full border border-emerald/20">
                <Zap className="w-3 h-3" /> MATCH 34
              </span>
            </div>

            <div className="space-y-6 relative z-10">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full border-2 border-lightgray overflow-hidden bg-cream">
                    <img src={team1?.logo} alt={team1?.shortName} className="w-full h-full object-cover" />
                  </div>
                  <span className="font-bebas text-3xl text-slate">{team1?.shortName}</span>
                </div>
                <span className="font-bebas text-3xl text-emerald">112/3</span>
              </div>
              
              <div className="h-px w-full bg-gradient-to-r from-transparent via-lightgray to-transparent" />
              
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full border-2 border-lightgray overflow-hidden bg-cream">
                    <img src={team2?.logo} alt={team2?.shortName} className="w-full h-full object-cover" />
                  </div>
                  <span className="font-bebas text-3xl text-slate">{team2?.shortName}</span>
                </div>
                <span className="font-bebas text-3xl text-darkgray">YTB</span>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-lightgray flex justify-between items-center relative z-10">
              <div>
                <div className="font-oswald text-[10px] text-darkgray uppercase tracking-widest mb-1">Time to next innings</div>
                <div className="font-bebas text-2xl text-slate flex gap-2">
                  <span>{timeLeft.minutes.toString().padStart(2, '0')}</span>:
                  <span>{timeLeft.seconds.toString().padStart(2, '0')}</span>
                </div>
              </div>
              <Link to="/live" className="text-emerald hover:text-slate transition-colors">
                <ChevronRight className="w-8 h-8" />
              </Link>
            </div>
          </motion.div>
        </motion.div>

      </div>

      {/* Embedded Live Ticker overlapping bottom edge */}
      <div className="absolute bottom-0 left-0 w-full z-20">
        <LiveTicker />
      </div>
    </div>
  );
}