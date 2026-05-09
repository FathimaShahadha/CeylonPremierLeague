import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { PlayCircle, Users, BarChart3, Handshake } from 'lucide-react';
export function Hero() {
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 14,
    minutes: 30,
    seconds: 45
  });
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev;
        if (seconds > 0) seconds--;else
        {
          seconds = 59;
          if (minutes > 0) minutes--;else
          {
            minutes = 59;
            if (hours > 0) hours--;else
            {
              hours = 23;
              if (days > 0) days--;
            }
          }
        }
        return {
          days,
          hours,
          minutes,
          seconds
        };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  return (
    <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Background Layers */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{
          backgroundImage:
          'url(https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=2000&q=80)'
        }} />
      
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-midnight/80 via-midnight/50 to-midnight" />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(0,194,255,0.15)_0%,transparent_60%)]" />

      {/* Animated Light Beams */}
      <motion.div
        className="absolute top-0 left-1/4 w-1 h-full bg-electric/20 blur-md"
        animate={{
          opacity: [0.2, 0.6, 0.2],
          rotate: [-5, 5, -5]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        style={{
          transformOrigin: 'top'
        }} />
      
      <motion.div
        className="absolute top-0 right-1/4 w-1 h-full bg-gold/20 blur-md"
        animate={{
          opacity: [0.2, 0.6, 0.2],
          rotate: [5, -5, 5]
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        style={{
          transformOrigin: 'top'
        }} />
      

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center text-center">
        <motion.div
          initial={{
            opacity: 0,
            y: 30
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.8,
            delay: 0.2
          }}>
          
          <h2 className="font-oswald text-electric tracking-[0.3em] uppercase text-sm md:text-lg mb-4 neon-glow-blue inline-block px-4 py-1 rounded-full border border-electric/30 bg-electric/10">
            The Ultimate Cricket Experience
          </h2>
        </motion.div>

        <motion.h1
          className="font-bebas text-6xl md:text-8xl lg:text-[120px] leading-[0.9] tracking-tight mb-6"
          initial={{
            opacity: 0,
            scale: 0.9
          }}
          animate={{
            opacity: 1,
            scale: 1
          }}
          transition={{
            duration: 1,
            type: 'spring'
          }}>
          
          <span className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
            CEYLON
          </span>
          <br />
          <span className="text-gradient-primary drop-shadow-[0_0_20px_rgba(0,229,255,0.5)] mr-4">
            PREMIER
          </span>
          <span className="text-4xl md:text-6xl lg:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-gold to-[#FFF5C3] drop-shadow-[0_0_15px_rgba(212,175,55,0.4)]">
            LEAGUE
          </span>
        </motion.h1>

        <motion.p
          className="font-oswald text-xl md:text-3xl text-gray-300 tracking-widest uppercase mb-12"
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1
          }}
          transition={{
            duration: 0.8,
            delay: 0.5
          }}>
          
          Power. Passion.{' '}
          <span className="text-electric">10 Overs of Fire.</span>
        </motion.p>

        {/* Countdown Timer */}
        <motion.div
          className="glass-panel rounded-2xl p-6 md:p-8 mb-12 border-electric/30 neon-glow-blue inline-block"
          initial={{
            opacity: 0,
            y: 20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.8,
            delay: 0.7
          }}>
          
          <p className="font-oswald text-sm text-gray-400 uppercase tracking-widest mb-4">
            Next Match Starts In
          </p>
          <div className="flex gap-4 md:gap-8">
            {[
            {
              label: 'Days',
              value: timeLeft.days
            },
            {
              label: 'Hours',
              value: timeLeft.hours
            },
            {
              label: 'Mins',
              value: timeLeft.minutes
            },
            {
              label: 'Secs',
              value: timeLeft.seconds
            }].
            map((item, i) =>
            <div key={i} className="flex flex-col items-center">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-deepnight rounded-xl flex items-center justify-center border border-white/10 shadow-inner mb-2">
                  <span className="font-bebas text-3xl md:text-4xl text-white">
                    {item.value.toString().padStart(2, '0')}
                  </span>
                </div>
                <span className="font-oswald text-xs text-electric uppercase tracking-wider">
                  {item.label}
                </span>
              </div>
            )}
          </div>
        </motion.div>

        {/* CTAs */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 md:gap-6"
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1
          }}
          transition={{
            duration: 0.8,
            delay: 0.9
          }}>
          
          <Link
            to="/live"
            className="group relative px-8 py-4 bg-electric text-midnight font-bebas text-xl tracking-wider rounded-lg overflow-hidden neon-glow-blue flex items-center gap-2 hover:scale-105 transition-transform">
            
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            <PlayCircle className="w-6 h-6 relative z-10" />
            <span className="relative z-10">WATCH LIVE</span>
          </Link>

          <Link
            to="/teams"
            className="px-8 py-4 glass text-white font-bebas text-xl tracking-wider rounded-lg hover:bg-white/10 transition-colors flex items-center gap-2 border border-white/20 hover:border-white/40">
            
            <Users className="w-6 h-6" />
            VIEW TEAMS
          </Link>

          <Link
            to="/stats"
            className="hidden md:flex px-8 py-4 glass text-white font-bebas text-xl tracking-wider rounded-lg hover:bg-white/10 transition-colors items-center gap-2 border border-white/20 hover:border-white/40">
            
            <BarChart3 className="w-6 h-6" />
            PLAYER STATS
          </Link>

          <Link
            to="/sponsors"
            className="hidden lg:flex px-8 py-4 glass text-white font-bebas text-xl tracking-wider rounded-lg hover:bg-white/10 transition-colors items-center gap-2 border border-white/20 hover:border-white/40">
            
            <Handshake className="w-6 h-6" />
            SPONSOR US
          </Link>
        </motion.div>
      </div>
    </div>);

}