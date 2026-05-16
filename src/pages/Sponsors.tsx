import React from 'react';
import { motion } from 'framer-motion';
import { Handshake, Mail, ArrowRight } from 'lucide-react';

export function Sponsors() {
  const tiers = [
    {
      name: 'TITLE SPONSOR',
      color: 'text-gold drop-shadow-[0_0_10px_rgba(255,215,0,0.5)]',
      borderColor: 'border-gold/50',
      glow: 'shadow-[0_0_40px_rgba(255,213,74,0.3)] hover:shadow-[0_0_60px_rgba(255,213,74,0.5)]',
      sponsors: [1],
      bgOverlay: 'bg-gradient-to-br from-gold/10 to-transparent'
    },
    {
      name: 'POWERED BY',
      color: 'text-emerald drop-shadow-[0_0_10px_rgba(0,255,102,0.5)]',
      borderColor: 'border-emerald/50',
      glow: 'shadow-[0_0_30px_rgba(0,255,102,0.2)] hover:shadow-[0_0_50px_rgba(0,255,102,0.4)]',
      sponsors: [2, 3],
      bgOverlay: 'bg-gradient-to-br from-emerald/10 to-transparent'
    },
    {
      name: 'ASSOCIATE PARTNERS',
      color: 'text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]',
      borderColor: 'border-white/20',
      glow: 'shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_40px_rgba(255,255,255,0.1)]',
      sponsors: [4, 5, 6, 7],
      bgOverlay: 'bg-white/5'
    }
  ];

  return (
    <div className="min-h-screen pt-32 md:pt-40 pb-24 relative overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gold/10 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-emerald/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-bebas text-white mb-4 drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]"
          >
            OUR <span className="text-gold drop-shadow-[0_0_20px_rgba(255,215,0,0.4)]">PARTNERS</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 font-oswald tracking-[0.3em] uppercase text-sm md:text-base"
          >
            Powering the Ceylon Premier League
          </motion.p>
          <motion.div className="w-24 h-1 bg-gold mx-auto mt-6" initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.4 }} />
        </div>

        <div className="space-y-24 mb-32">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="text-center"
            >
              <h2 className={`font-bebas text-3xl md:text-4xl tracking-[0.2em] mb-10 ${tier.color}`}>
                {tier.name}
              </h2>
              <div className="flex flex-wrap justify-center gap-8 md:gap-10">
                {tier.sponsors.map((s) => (
                  <div
                    key={s}
                    className={`glass-panel relative overflow-hidden flex items-center justify-center rounded-2xl border ${tier.borderColor} ${tier.glow} transition-all duration-500 hover:-translate-y-2 cursor-pointer group ${
                      tier.name === 'TITLE SPONSOR'
                        ? 'w-full max-w-3xl h-56 md:h-72'
                        : tier.name === 'POWERED BY'
                        ? 'w-72 h-40 md:w-96 md:h-48'
                        : 'w-48 h-32 md:w-56 md:h-36'
                    }`}
                  >
                    <div className={`absolute inset-0 ${tier.bgOverlay} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    <span className="font-bebas text-3xl md:text-5xl text-white/30 group-hover:text-white/80 transition-colors relative z-10 tracking-wider">
                      BRAND {s}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Inquiry Form */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto glass-panel rounded-3xl p-8 md:p-14 border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.6)] relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-80 h-80 bg-gold/10 blur-[80px] pointer-events-none" />
          
          <div className="text-center mb-12 relative z-10">
            <div className="w-20 h-20 mx-auto bg-gold/10 rounded-full flex items-center justify-center mb-6 border border-gold/30 shadow-[0_0_20px_rgba(255,215,0,0.2)]">
              <Handshake className="w-10 h-10 text-gold" />
            </div>
            <h2 className="font-bebas text-5xl text-white mb-4">
              BECOME A SPONSOR
            </h2>
            <p className="text-gray-400 font-oswald tracking-widest text-base">
              Join the fastest growing cricket league in the world.
            </p>
          </div>

          <form className="space-y-8 relative z-10" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block text-xs font-oswald text-gray-400 uppercase tracking-widest mb-2 ml-1">Company Name</label>
                <input type="text" className="w-full bg-midnight/50 backdrop-blur-md border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-gold transition-all hover:bg-white/5 shadow-inner" />
              </div>
              <div>
                <label className="block text-xs font-oswald text-gray-400 uppercase tracking-widest mb-2 ml-1">Contact Person</label>
                <input type="text" className="w-full bg-midnight/50 backdrop-blur-md border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-gold transition-all hover:bg-white/5 shadow-inner" />
              </div>
            </div>
            <div>
              <label className="block text-xs font-oswald text-gray-400 uppercase tracking-widest mb-2 ml-1">Email Address</label>
              <input type="email" className="w-full bg-midnight/50 backdrop-blur-md border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-gold transition-all hover:bg-white/5 shadow-inner" />
            </div>
            <div>
              <label className="block text-xs font-oswald text-gray-400 uppercase tracking-widest mb-2 ml-1">Partnership Interest</label>
              <select className="w-full bg-midnight/50 backdrop-blur-md border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-gold transition-all hover:bg-white/5 shadow-inner appearance-none cursor-pointer">
                <option value="title" className="bg-midnight">Title Sponsorship</option>
                <option value="associate" className="bg-midnight">Associate Partner</option>
                <option value="digital" className="bg-midnight">Digital Partner</option>
                <option value="other" className="bg-midnight">Other</option>
              </select>
            </div>
            <button className="w-full bg-gold text-midnight font-bebas text-2xl tracking-wider py-5 rounded-xl hover:bg-white transition-all shadow-[0_0_20px_rgba(255,215,0,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] hover:-translate-y-1 duration-300 flex items-center justify-center gap-3">
              SUBMIT INQUIRY <ArrowRight className="w-6 h-6" />
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
