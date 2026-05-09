import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Clock } from 'lucide-react';
export function News() {
  const news = Array.from(
    {
      length: 6
    },
    (_, i) => ({
      id: i,
      title:
      i === 0 ?
      'CEYLON PREMIER LEAGUE ANNOUNCES EXPANSION FOR 2027 SEASON' :
      `Match Report: Thrilling finish in game ${i}`,
      excerpt:
      'The league committee has officially announced that two new franchises will be added to the roster next season, bringing the total to 10 teams.',
      category: i === 0 ? 'ANNOUNCEMENT' : 'MATCH REPORT',
      date: 'May 8, 2026',
      image: `https://images.unsplash.com/photo-${1531427186611 + i}?auto=format&fit=crop&w=800&q=80`
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
            
            LATEST <span className="text-electric">NEWS</span>
          </motion.h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Featured Article */}
            <motion.div
              initial={{
                opacity: 0,
                y: 20
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              className="glass-panel rounded-2xl overflow-hidden border border-electric/30 group cursor-pointer">
              
              <div className="relative h-64 md:h-96 overflow-hidden">
                <img
                  src={news[0].image}
                  alt="Featured"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                
                <div className="absolute inset-0 bg-gradient-to-t from-midnight to-transparent" />
              </div>
              <div className="p-6 md:p-8 relative -mt-20">
                <span className="bg-electric text-midnight text-xs font-bold px-2 py-1 rounded mb-3 inline-block">
                  {news[0].category}
                </span>
                <h2 className="font-bebas text-3xl md:text-5xl text-white mb-4 group-hover:text-electric transition-colors leading-tight">
                  {news[0].title}
                </h2>
                <p className="text-gray-400 mb-6 line-clamp-2">
                  {news[0].excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-oswald text-gray-500 flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {news[0].date}
                  </span>
                  <span className="text-electric font-oswald text-sm flex items-center gap-1 group-hover:translate-x-2 transition-transform">
                    READ MORE <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Article Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {news.slice(1).map((item, index) =>
              <motion.div
                key={item.id}
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
                className="glass-panel rounded-xl overflow-hidden border border-white/10 group cursor-pointer">
                
                  <div className="relative h-48 overflow-hidden">
                    <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  
                  </div>
                  <div className="p-5">
                    <span className="text-[10px] font-oswald text-electric tracking-widest uppercase mb-2 block">
                      {item.category}
                    </span>
                    <h3 className="font-bebas text-xl text-white mb-2 group-hover:text-electric transition-colors line-clamp-2 leading-tight">
                      {item.title}
                    </h3>
                    <span className="text-xs font-oswald text-gray-500 flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {item.date}
                    </span>
                  </div>
                </motion.div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="glass-panel rounded-xl p-6 border border-white/10">
              <h3 className="font-bebas text-2xl mb-6 border-b border-white/10 pb-2 text-white">
                TRENDING
              </h3>
              <div className="space-y-6">
                {[1, 2, 3, 4].map((i) =>
                <div key={i} className="flex gap-4 group cursor-pointer">
                    <div className="font-bebas text-3xl text-white/10 group-hover:text-electric transition-colors">
                      0{i}
                    </div>
                    <div>
                      <h4 className="font-bebas text-lg text-gray-300 group-hover:text-white transition-colors leading-tight mb-1">
                        Record breaking crowd expected for the finals
                      </h4>
                      <span className="text-[10px] font-oswald text-gray-500">
                        2 hours ago
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="glass-panel rounded-xl p-6 border border-neonpurple/30 bg-neonpurple/5 text-center">
              <h3 className="font-bebas text-2xl text-white mb-2">
                NEVER MISS AN UPDATE
              </h3>
              <p className="text-sm text-gray-400 mb-4">
                Subscribe to our newsletter
              </p>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm text-white mb-3 focus:outline-none focus:border-neonpurple" />
              
              <button className="w-full bg-neonpurple text-white font-bebas tracking-wider py-2 rounded-lg hover:bg-white hover:text-midnight transition-colors">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>);

}