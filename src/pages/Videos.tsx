import React from 'react';
import { motion } from 'framer-motion';
import { PlayCircle, Clock } from 'lucide-react';

export function Videos() {
  const videos = Array.from({ length: 6 }, (_, i) => ({
    id: i,
    title: `Match ${i + 1} Highlights | CPL T10`,
    duration: '10:24',
    views: '124K',
    thumbnail: `https://images.unsplash.com/photo-${1540747913346 + i}?auto=format&fit=crop&w=600&q=80`
  }));

  return (
    <div className="min-h-screen pt-32 md:pt-40 pb-24 relative overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-orangeGlow/10 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-emerald/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-bebas text-slate mb-4 drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]"
          >
            THUNDER<span className="text-orangeGlow drop-shadow-[0_0_20px_rgba(255,140,0,0.4)]">TV</span>
          </motion.h1>
          <motion.div className="w-24 h-1 bg-orangeGlow mx-auto mb-6" initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.2 }} />
        </div>

        {/* Featured Video */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative w-full aspect-video rounded-3xl overflow-hidden mb-16 group cursor-pointer border border-lightgray shadow-[0_30px_60px_rgba(0,0,0,0.8)]"
        >
          <img
            src="https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=1200&q=80"
            alt="Featured"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-white/40 group-hover:bg-white/20 transition-colors flex items-center justify-center">
            <div className="w-24 h-24 rounded-full bg-orangeGlow/90 flex items-center justify-center backdrop-blur-md group-hover:scale-110 transition-transform shadow-[0_0_30px_rgba(255,140,0,0.8)]">
              <PlayCircle className="w-12 h-12 text-slate fill-white" />
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-10 bg-gradient-to-t from-white via-white/80 to-transparent">
            <span className="bg-orangeGlow text-white text-sm font-oswald tracking-widest px-3 py-1 rounded border border-orangeGlow mb-4 inline-block shadow-[0_0_15px_rgba(255,140,0,0.3)]">
              LATEST HIGHLIGHTS
            </span>
            <h2 className="font-bebas text-4xl md:text-6xl text-slate drop-shadow-lg leading-tight">
              MUMBAI STRIKERS VS DELHI DYNAMOS | FULL HIGHLIGHTS
            </h2>
          </div>
        </motion.div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer glass-panel p-4 rounded-2xl border border-lightgray hover:border-lightgray transition-all duration-300 hover:-translate-y-2 shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_40px_rgba(255,140,0,0.15)]"
            >
              <div className="relative aspect-video rounded-xl overflow-hidden mb-6 border border-lightgray">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-white/40 group-hover:bg-transparent transition-colors duration-500 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/50 backdrop-blur-sm flex items-center justify-center border border-lightgray group-hover:bg-orangeGlow/90 group-hover:border-orangeGlow group-hover:scale-110 transition-all duration-500 shadow-lg">
                    <PlayCircle className="w-8 h-8 text-slate fill-transparent group-hover:fill-white transition-all" />
                  </div>
                </div>
                <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded text-sm font-oswald tracking-wider text-slate flex items-center gap-2 border border-lightgray shadow-lg">
                  <Clock className="w-3 h-3 text-orangeGlow" /> {video.duration}
                </div>
              </div>
              <h3 className="font-bebas text-2xl text-slate group-hover:text-orangeGlow transition-colors line-clamp-2 leading-tight mb-2 px-2">
                {video.title}
              </h3>
              <div className="flex items-center justify-between px-2">
                <p className="text-sm font-oswald tracking-wide text-midgray">
                  {video.views} VIEWS • 2 DAYS AGO
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
