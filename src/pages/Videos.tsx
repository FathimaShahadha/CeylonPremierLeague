import React from 'react';
import { motion } from 'framer-motion';
import { PlayCircle, Clock } from 'lucide-react';
export function Videos() {
  const videos = Array.from(
    {
      length: 6
    },
    (_, i) => ({
      id: i,
      title: `Match ${i + 1} Highlights | CPL T10`,
      duration: '10:24',
      views: '124K',
      thumbnail: `https://images.unsplash.com/photo-${1540747913346 + i}?auto=format&fit=crop&w=600&q=80`
    })
  );
  return (
    <div className="min-h-screen pt-12 pb-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
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
            
            THUNDER<span className="text-neonpurple">TV</span>
          </motion.h1>
        </div>

        {/* Featured Video */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          className="relative w-full aspect-video rounded-2xl overflow-hidden mb-12 group cursor-pointer border border-white/10 shadow-[0_0_30px_rgba(123,46,255,0.2)]">
          
          <img
            src="https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=1200&q=80"
            alt="Featured"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
          
          <div className="absolute inset-0 bg-midnight/40 group-hover:bg-midnight/20 transition-colors flex items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-neonpurple/80 flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(123,46,255,0.8)]">
              <PlayCircle className="w-10 h-10 text-white fill-white" />
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-midnight to-transparent">
            <span className="bg-neonpurple text-white text-xs font-bold px-2 py-1 rounded mb-3 inline-block">
              LATEST
            </span>
            <h2 className="font-bebas text-3xl md:text-5xl text-white drop-shadow-lg">
              MUMBAI STRIKERS VS DELHI DYNAMOS | FULL HIGHLIGHTS
            </h2>
          </div>
        </motion.div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video, index) =>
          <motion.div
            key={video.id}
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              delay: index * 0.1
            }}
            className="group cursor-pointer">
            
              <div className="relative aspect-video rounded-xl overflow-hidden mb-4 border border-white/10">
                <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              
                <div className="absolute inset-0 bg-midnight/20 group-hover:bg-transparent transition-colors flex items-center justify-center">
                  <PlayCircle className="w-12 h-12 text-white/80 group-hover:text-white transition-colors" />
                </div>
                <div className="absolute bottom-2 right-2 bg-midnight/80 backdrop-blur-sm px-2 py-1 rounded text-xs font-oswald text-white flex items-center gap-1">
                  <Clock className="w-3 h-3" /> {video.duration}
                </div>
              </div>
              <h3 className="font-bebas text-xl text-white group-hover:text-neonpurple transition-colors line-clamp-2 leading-tight mb-1">
                {video.title}
              </h3>
              <p className="text-xs font-oswald text-gray-500">
                {video.views} views • 2 days ago
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </div>);

}