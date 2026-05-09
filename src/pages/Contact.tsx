import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';
export function Contact() {
  return (
    <div className="min-h-screen pt-12 pb-24 relative">
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
            
            GET IN <span className="text-electric">TOUCH</span>
          </motion.h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{
              opacity: 0,
              x: -20
            }}
            animate={{
              opacity: 1,
              x: 0
            }}
            className="space-y-8">
            
            <div className="glass-panel p-8 rounded-2xl border border-white/10">
              <h2 className="font-bebas text-3xl text-white mb-6">
                HEADQUARTERS
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-electric/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-electric" />
                  </div>
                  <div>
                    <h3 className="font-oswald text-sm text-gray-400 uppercase tracking-widest mb-1">
                      Address
                    </h3>
                    <p className="text-white">
                      CPL Grand Arena
                      <br />
                      Sports City Boulevard
                      <br />
                      Global District, 10001
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-electric/10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-electric" />
                  </div>
                  <div>
                    <h3 className="font-oswald text-sm text-gray-400 uppercase tracking-widest mb-1">
                      Phone
                    </h3>
                    <p className="text-white">+1 (800) T10-FIRE</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-electric/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-electric" />
                  </div>
                  <div>
                    <h3 className="font-oswald text-sm text-gray-400 uppercase tracking-widest mb-1">
                      Email
                    </h3>
                    <p className="text-white">info@cplt10.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="h-64 rounded-2xl overflow-hidden border border-white/10 bg-deepnight relative group">
              <div className="absolute inset-0 bg-grid-pattern opacity-20" />
              <div className="absolute inset-0 flex items-center justify-center flex-col gap-2">
                <MapPin className="w-8 h-8 text-electric" />
                <span className="font-oswald text-sm text-gray-400 tracking-widest uppercase">
                  Interactive Map View
                </span>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{
              opacity: 0,
              x: 20
            }}
            animate={{
              opacity: 1,
              x: 0
            }}>
            
            <form
              className="glass-panel p-8 md:p-10 rounded-2xl border border-white/10 space-y-6"
              onSubmit={(e) => e.preventDefault()}>
              
              <h2 className="font-bebas text-3xl text-white mb-6">
                SEND A MESSAGE
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-oswald text-gray-400 uppercase tracking-widest mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-electric transition-colors" />
                  
                </div>
                <div>
                  <label className="block text-xs font-oswald text-gray-400 uppercase tracking-widest mb-2">
                    Last Name
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
                  Subject
                </label>
                <select className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-electric transition-colors appearance-none">
                  <option className="bg-midnight">General Inquiry</option>
                  <option className="bg-midnight">Ticketing</option>
                  <option className="bg-midnight">Media & Press</option>
                  <option className="bg-midnight">Sponsorship</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-oswald text-gray-400 uppercase tracking-widest mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-electric transition-colors resize-none">
                </textarea>
              </div>

              <button className="w-full bg-electric text-midnight font-bebas text-xl tracking-wider py-4 rounded-lg hover:bg-white transition-colors">
                SEND MESSAGE
              </button>
            </form>
          </motion.div>
        </div>

        {/* Floating WhatsApp (simulated) */}
        <button className="fixed bottom-20 md:bottom-8 right-4 md:right-8 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(34,197,94,0.4)] hover:scale-110 transition-transform z-50">
          <MessageCircle className="w-7 h-7 text-white" />
        </button>
      </div>
    </div>);

}