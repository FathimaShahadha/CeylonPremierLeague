import React from 'react';
import { motion } from 'framer-motion';
import { Handshake, Mail } from 'lucide-react';
export function Sponsors() {
  const tiers = [
  {
    name: 'TITLE SPONSOR',
    color: 'text-gold',
    borderColor: 'border-gold/50',
    glow: 'shadow-[0_0_30px_rgba(255,213,74,0.2)]',
    sponsors: [1]
  },
  {
    name: 'POWERED BY',
    color: 'text-electric',
    borderColor: 'border-electric/50',
    glow: 'shadow-[0_0_20px_rgba(0,194,255,0.15)]',
    sponsors: [2, 3]
  },
  {
    name: 'ASSOCIATE PARTNERS',
    color: 'text-white',
    borderColor: 'border-white/20',
    glow: '',
    sponsors: [4, 5, 6, 7]
  }];

  return (
    <div className="min-h-screen pt-12 pb-24 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gold/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
            
            OUR <span className="text-gold">PARTNERS</span>
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
            className="text-gray-400 font-oswald tracking-[0.2em] uppercase">
            
            Powering the Ceylon Premier League
          </motion.p>
        </div>

        <div className="space-y-16 mb-24">
          {tiers.map((tier, index) =>
          <motion.div
            key={tier.name}
            initial={{
              opacity: 0,
              y: 30
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              delay: index * 0.1
            }}
            className="text-center">
            
              <h2
              className={`font-bebas text-2xl md:text-3xl tracking-widest mb-8 ${tier.color}`}>
              
                {tier.name}
              </h2>
              <div className="flex flex-wrap justify-center gap-6 md:gap-8">
                {tier.sponsors.map((s) =>
              <div
                key={s}
                className={`glass-panel flex items-center justify-center rounded-xl border ${tier.borderColor} ${tier.glow} transition-transform hover:scale-105 ${tier.name === 'TITLE SPONSOR' ? 'w-full max-w-2xl h-48 md:h-64' : tier.name === 'POWERED BY' ? 'w-64 h-32 md:w-80 md:h-40' : 'w-40 h-24 md:w-48 md:h-32'}`}>
                
                    <span className="font-bebas text-2xl md:text-4xl text-gray-500 opacity-50">
                      BRAND {s}
                    </span>
                  </div>
              )}
              </div>
            </motion.div>
          )}
        </div>

        {/* Inquiry Form */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}
          className="max-w-3xl mx-auto glass-panel rounded-2xl p-8 md:p-12 border border-white/10">
          
          <div className="text-center mb-8">
            <Handshake className="w-12 h-12 text-electric mx-auto mb-4" />
            <h2 className="font-bebas text-4xl text-white mb-2">
              BECOME A SPONSOR
            </h2>
            <p className="text-gray-400 font-oswald tracking-wider text-sm">
              Join the fastest growing cricket league in the world.
            </p>
          </div>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-oswald text-gray-400 uppercase tracking-widest mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-electric transition-colors" />
                
              </div>
              <div>
                <label className="block text-xs font-oswald text-gray-400 uppercase tracking-widest mb-2">
                  Contact Person
                </label>
                <input
                  type="text"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-electric transition-colors" />
                
              </div>
            </div>
            <div>
              <label className="block text-xs font-oswald text-gray-400 uppercase tracking-widest mb-2">
                Email Address
              </label>
              <input
                type="email"
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-electric transition-colors" />
              
            </div>
            <div>
              <label className="block text-xs font-oswald text-gray-400 uppercase tracking-widest mb-2">
                Partnership Interest
              </label>
              <select className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-electric transition-colors appearance-none">
                <option value="title" className="bg-midnight">
                  Title Sponsorship
                </option>
                <option value="associate" className="bg-midnight">
                  Associate Partner
                </option>
                <option value="digital" className="bg-midnight">
                  Digital Partner
                </option>
                <option value="other" className="bg-midnight">
                  Other
                </option>
              </select>
            </div>
            <button className="w-full bg-electric text-midnight font-bebas text-xl tracking-wider py-4 rounded-lg hover:bg-white transition-colors flex items-center justify-center gap-2">
              <Mail className="w-5 h-5" /> SUBMIT INQUIRY
            </button>
          </form>
        </motion.div>
      </div>
    </div>);

}