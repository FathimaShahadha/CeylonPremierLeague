import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Maximize2 } from 'lucide-react';

export function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const categories = ['All', 'Matches', 'Fans', 'Behind the Scenes'];

  // Generate mock images
  const images = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    url: `https://images.unsplash.com/photo-${1500000000000 + i}?auto=format&fit=crop&w=800&q=80`,
    category: categories[Math.floor(Math.random() * (categories.length - 1)) + 1],
    title: `Gallery Image ${i + 1}`,
  }));

  // Override some URLs with actual cricket/stadium related ones for better UI
  images[0].url = 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=800&q=80';
  images[1].url = 'https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=800&q=80';
  images[2].url = 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&w=800&q=80';
  images[3].url = 'https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?auto=format&fit=crop&w=800&q=80';

  const filteredImages = activeCategory === 'All' 
    ? images 
    : images.filter((img) => img.category === activeCategory);

  return (
    <div className="min-h-screen pt-32 md:pt-40 pb-24 relative overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-emerald/10 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[800px] h-[600px] bg-orangeGlow/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-bebas text-slate mb-4 drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]"
          >
            PHOTO <span className="text-emerald drop-shadow-[0_0_20px_rgba(0,255,102,0.4)]">GALLERY</span>
          </motion.h1>
          <motion.div className="w-24 h-1 bg-emerald mx-auto mb-6" initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.2 }} />
        </div>

        {/* Filters */}
        <div className="flex justify-center mb-16 overflow-x-auto hide-scrollbar">
          <div className="flex bg-white/50 backdrop-blur-md rounded-2xl p-2 border border-lightgray shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-8 py-3 rounded-xl font-oswald text-base tracking-wider transition-all duration-300 whitespace-nowrap ${
                  activeCategory === cat
                    ? 'bg-emerald text-white shadow-[0_0_20px_rgba(0,255,102,0.5)] scale-105'
                    : 'text-darkgray hover:text-slate hover:bg-slate/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">
          {filteredImages.map((img, index) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="break-inside-avoid relative group cursor-pointer rounded-2xl overflow-hidden border border-lightgray shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_50px_rgba(0,255,102,0.2)] hover:border-emerald/50 transition-all duration-500"
              onClick={() => setSelectedImage(img.url)}
            >
              <img
                src={img.url}
                alt={img.title}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <Maximize2 className="absolute top-6 right-6 w-8 h-8 text-slate opacity-0 group-hover:opacity-100 transition-all delay-100 group-hover:scale-110 drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
                <span className="text-sm font-oswald text-emerald tracking-widest uppercase mb-2 block border-l-2 border-emerald pl-3">
                  {img.category}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-white/95 backdrop-blur-xl p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-8 right-8 text-slate/50 hover:text-slate transition-colors hover:rotate-90 duration-300"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-12 h-12" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", bounce: 0.4 }}
              src={selectedImage}
              alt="Enlarged view"
              className="max-w-full max-h-[90vh] object-contain rounded-2xl shadow-[0_0_100px_rgba(0,0,0,0.8)] border border-lightgray"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
