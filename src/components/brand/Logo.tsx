import React from 'react';
import { motion } from 'framer-motion';

export function Logo({ className = '' }: {className?: string;}) {
  return (
    <motion.div
      className={`relative flex items-center justify-center ${className}`}
      initial={{
        opacity: 0,
        scale: 0.8
      }}
      animate={{
        opacity: 1,
        scale: 1
      }}
      transition={{
        duration: 0.6,
        ease: "easeOut"
      }}>
      
      <div className="relative flex items-center justify-center h-16 w-auto md:h-20 shrink-0 transition-transform hover:scale-105">
        <img 
          src="/logo.svg" 
          alt="Ceylon Premier League" 
          className="h-full w-full object-contain drop-shadow-[0_0_10px_rgba(212,175,55,0.3)]"
        />
      </div>
    </motion.div>
  );
}