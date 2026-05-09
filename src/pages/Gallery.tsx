import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Maximize2 } from 'lucide-react';
export function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const categories = ['All', 'Matches', 'Fans', 'Behind the Scenes'];
  // Generate mock images
  const images = Array.from(
    {
      length: 12
    },
    (_, i) => ({
      id: i,
      url: `https://images.unsplash.com/photo-${1500000000000 + i}?auto=format&fit=crop&w=800&q=80`,
      category:
      categories[Math.floor(Math.random() * (categories.length - 1)) + 1],
      title: `Gallery Image ${i + 1}`
    })
  );
  // Override some URLs with actual cricket/stadium related ones for better UI
  images[0].url =
  'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=800&q=80';
  images[1].url =
  'https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=800&q=80';
  images[2].url =
  'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&w=800&q=80';
  images[3].url =
  'https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?auto=format&fit=crop&w=800&q=80';
  const filteredImages =
  activeCategory === 'All' ?
  images :
  images.filter((img) => img.category === activeCategory);
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
            
            PHOTO <span className="text-electric">GALLERY</span>
          </motion.h1>
        </div>

        {/* Filters */}
        <div className="flex justify-center mb-12 overflow-x-auto hide-scrollbar">
          <div className="flex glass rounded-lg p-1 border border-white/10">
            {categories.map((cat) =>
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-md font-oswald text-sm tracking-wider transition-all whitespace-nowrap ${activeCategory === cat ? 'bg-electric text-midnight shadow-[0_0_15px_rgba(0,194,255,0.5)]' : 'text-gray-400 hover:text-white'}`}>
              
                {cat}
              </button>
            )}
          </div>
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredImages.map((img, index) =>
          <motion.div
            key={img.id}
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              delay: index * 0.05
            }}
            className="break-inside-avoid relative group cursor-pointer rounded-xl overflow-hidden"
            onClick={() => setSelectedImage(img.url)}>
            
              <img
              src={img.url}
              alt={img.title}
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110" />
            
              <div className="absolute inset-0 bg-gradient-to-t from-midnight/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <Maximize2 className="absolute top-4 right-4 w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity delay-100" />
                <span className="text-xs font-oswald text-electric tracking-widest uppercase mb-1">
                  {img.category}
                </span>
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage &&
        <motion.div
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1
          }}
          exit={{
            opacity: 0
          }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-midnight/95 backdrop-blur-sm p-4"
          onClick={() => setSelectedImage(null)}>
          
            <button
            className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
            onClick={() => setSelectedImage(null)}>
            
              <X className="w-8 h-8" />
            </button>
            <motion.img
            initial={{
              scale: 0.9
            }}
            animate={{
              scale: 1
            }}
            exit={{
              scale: 0.9
            }}
            src={selectedImage}
            alt="Enlarged view"
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()} />
          
          </motion.div>
        }
      </AnimatePresence>
    </div>);

}