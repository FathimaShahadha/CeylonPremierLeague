import React from 'react';
import { motion } from 'framer-motion';
export function LiveTicker() {
  const items = [
  '⚡ LIVE: Mumbai Strikers 112/3 (8.2 ov) vs Delhi Dynamos',
  '🏆 NEXT MATCH: Bangalore Blitz vs Chennai Chargers @ 20:00 IST',
  '🔥 NEW RECORD: Virat K. hits fastest 50 in 14 balls!',
  '🎟️ TICKETS: Final match tickets go live tomorrow at 10 AM',
  '⚡ LIVE: Mumbai Strikers 112/3 (8.2 ov) vs Delhi Dynamos'];

  return (
    <div className="w-full h-8 bg-charcoal border-b border-white/10 text-gray-300 flex items-center overflow-hidden relative z-50">
      <div className="absolute left-0 top-0 bottom-0 w-20 md:w-24 bg-emerald text-midnight z-10 flex items-center justify-center font-bold text-[10px] md:text-xs px-2 shadow-[5px_0_15px_rgba(0,255,102,0.4)]">
        LATEST
      </div>
      <motion.div
        className="flex whitespace-nowrap pl-24 text-xs md:text-sm font-semibold tracking-wide"
        animate={{
          x: [0, -1000]
        }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: 'linear'
        }}>
        
        {items.map((item, i) =>
        <span key={i} className="mx-8">
            {item}
          </span>
        )}
      </motion.div>
    </div>);

}