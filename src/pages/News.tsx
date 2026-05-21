import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Clock } from 'lucide-react';

export function News() {
  const news = Array.from({ length: 6 }, (_, i) => ({
    id: i,
    title: i === 0 
      ? 'CEYLON PREMIER LEAGUE ANNOUNCES EXPANSION FOR 2027 SEASON' 
      : `Match Report: Thrilling finish in game ${i}`,
    excerpt: 'The league committee has officially announced that two new franchises will be added to the roster next season, bringing the total to 10 teams.',
    category: i === 0 ? 'ANNOUNCEMENT' : 'MATCH REPORT',
    date: 'May 8, 2026',
    image: `https://images.unsplash.com/photo-${1531427186611 + i}?auto=format&fit=crop&w=800&q=80`
  }));

  return (
    <div className="min-h-screen pt-32 md:pt-40 pb-24 relative overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-emerald/10 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-orangeGlow/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-bebas text-slate mb-4 drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]"
          >
            LATEST <span className="text-emerald drop-shadow-[0_0_20px_rgba(0,255,102,0.4)]">NEWS</span>
          </motion.h1>
          <motion.div className="w-24 h-1 bg-emerald mx-auto mb-6" initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.2 }} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-10">
            {/* Featured Article */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass-panel rounded-3xl overflow-hidden border border-emerald/30 group cursor-pointer shadow-[0_20px_50px_rgba(0,0,0,0.5)] hover:shadow-[0_30px_60px_rgba(0,255,102,0.15)] transition-all duration-500"
            >
              <div className="relative h-72 md:h-[450px] overflow-hidden">
                <img
                  src={news[0].image}
                  alt="Featured"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent" />
              </div>
              <div className="p-8 md:p-10 relative -mt-32">
                <span className="bg-emerald text-white text-sm font-oswald tracking-widest px-3 py-1 rounded border border-emerald/50 mb-4 inline-block shadow-[0_0_15px_rgba(0,255,102,0.3)]">
                  {news[0].category}
                </span>
                <h2 className="font-bebas text-4xl md:text-6xl text-slate mb-4 group-hover:text-emerald transition-colors leading-tight drop-shadow-md">
                  {news[0].title}
                </h2>
                <p className="text-darkgray mb-8 text-lg line-clamp-2">
                  {news[0].excerpt}
                </p>
                <div className="flex items-center justify-between border-t border-lightgray pt-6">
                  <span className="text-sm font-oswald text-midgray flex items-center gap-2">
                    <Clock className="w-4 h-4" /> {news[0].date}
                  </span>
                  <span className="text-emerald font-oswald text-base tracking-widest flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                    READ FULL STORY <ArrowRight className="w-5 h-5" />
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Article Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {news.slice(1).map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-panel rounded-2xl overflow-hidden border border-lightgray group cursor-pointer shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:border-lightgray transition-all duration-300"
                >
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent opacity-90" />
                  </div>
                  <div className="p-6 relative -mt-10">
                    <span className="text-xs font-oswald text-emerald tracking-widest uppercase mb-2 block border-l-2 border-emerald pl-2">
                      {item.category}
                    </span>
                    <h3 className="font-bebas text-2xl text-slate mb-4 group-hover:text-emerald transition-colors line-clamp-2 leading-tight">
                      {item.title}
                    </h3>
                    <div className="flex items-center justify-between border-t border-lightgray pt-4">
                      <span className="text-xs font-oswald text-midgray flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {item.date}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-10">
            <div className="glass-panel rounded-3xl p-8 border border-lightgray shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
              <h3 className="font-bebas text-3xl mb-8 border-b border-lightgray pb-4 text-slate flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-orangeGlow shadow-[0_0_10px_rgba(255,140,0,0.8)] animate-pulse" /> TRENDING
              </h3>
              <div className="space-y-8">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="flex gap-6 group cursor-pointer">
                    <div className="font-bebas text-5xl text-slate/10 group-hover:text-emerald transition-colors">
                      0{i}
                    </div>
                    <div>
                      <h4 className="font-bebas text-xl text-darkgray group-hover:text-slate transition-colors leading-tight mb-2">
                        Record breaking crowd expected for the finals
                      </h4>
                      <span className="text-xs font-oswald tracking-widest text-emerald">
                        2 HOURS AGO
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-panel rounded-3xl p-8 border border-orangeGlow/30 bg-orangeGlow/5 text-center shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-orangeGlow/20 blur-[50px] pointer-events-none" />
              <h3 className="font-bebas text-4xl text-slate mb-2 relative z-10">
                NEVER MISS AN UPDATE
              </h3>
              <p className="text-base text-darkgray mb-6 font-oswald tracking-wide relative z-10">
                Subscribe to our newsletter for exclusive news
              </p>
              <input
                type="email"
                placeholder="Enter your email"
                className="relative z-10 w-full bg-white/50 backdrop-blur-md border border-lightgray rounded-xl px-5 py-4 text-sm text-slate mb-4 focus:outline-none focus:border-orangeGlow transition-colors shadow-inner"
              />
              <button className="relative z-10 w-full bg-orangeGlow text-white font-bebas text-xl tracking-wider py-4 rounded-xl hover:bg-white hover:text-orangeGlow transition-colors shadow-[0_0_20px_rgba(255,140,0,0.3)] border border-transparent hover:border-orangeGlow">
                SUBSCRIBE NOW
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
