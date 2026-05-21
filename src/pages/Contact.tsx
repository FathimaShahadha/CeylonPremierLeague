import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, MessageCircle, Send } from 'lucide-react';

export function Contact() {
  return (
    <div className="min-h-screen pt-32 md:pt-40 pb-24 relative overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-emerald/10 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gold/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-bebas text-slate mb-4 drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]"
          >
            GET IN <span className="text-emerald drop-shadow-[0_0_20px_rgba(0,255,102,0.4)]">TOUCH</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-darkgray font-oswald tracking-[0.3em] uppercase text-sm md:text-base"
          >
            We're here to help you experience the thrill
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="glass-panel p-8 md:p-12 rounded-3xl border border-lightgray shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden">
              <div className="absolute top-0 left-0 w-48 h-48 bg-emerald/20 blur-[60px] pointer-events-none" />
              <h2 className="font-bebas text-4xl text-slate mb-10 relative z-10">
                HEADQUARTERS
              </h2>
              <div className="space-y-8 relative z-10">
                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-emerald/10 border border-emerald/30 flex items-center justify-center shrink-0 group-hover:bg-emerald group-hover:scale-110 transition-all shadow-[0_0_15px_rgba(0,255,102,0.2)]">
                    <MapPin className="w-6 h-6 text-emerald group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-oswald text-base text-darkgray uppercase tracking-widest mb-1">Address</h3>
                    <p className="text-slate text-lg font-oswald tracking-wide">
                      CPL Grand Arena<br />
                      Sports City Boulevard<br />
                      Global District, 10001
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-emerald/10 border border-emerald/30 flex items-center justify-center shrink-0 group-hover:bg-emerald group-hover:scale-110 transition-all shadow-[0_0_15px_rgba(0,255,102,0.2)]">
                    <Phone className="w-6 h-6 text-emerald group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-oswald text-base text-darkgray uppercase tracking-widest mb-1">Phone</h3>
                    <p className="text-slate text-xl font-oswald tracking-wide">+1 (800) T10-FIRE</p>
                  </div>
                </div>
                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-emerald/10 border border-emerald/30 flex items-center justify-center shrink-0 group-hover:bg-emerald group-hover:scale-110 transition-all shadow-[0_0_15px_rgba(0,255,102,0.2)]">
                    <Mail className="w-6 h-6 text-emerald group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-oswald text-base text-darkgray uppercase tracking-widest mb-1">Email</h3>
                    <p className="text-slate text-xl font-oswald tracking-wide hover:text-emerald transition-colors cursor-pointer">info@cplt10.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Map Visual */}
            <div className="h-64 rounded-3xl overflow-hidden border border-emerald/20 bg-[#060D14] relative group shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=800&q=80')] bg-cover bg-center opacity-30 mix-blend-luminosity group-hover:opacity-40 transition-opacity duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-midnight to-transparent opacity-80" />
              <div className="absolute inset-0 bg-grid-pattern opacity-20" />
              
              {/* Pulse Marker */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                <div className="relative">
                  <div className="absolute -inset-4 bg-emerald/20 rounded-full blur-md animate-pulse" />
                  <div className="absolute -inset-8 bg-emerald/10 rounded-full blur-xl animate-ping" style={{ animationDuration: '3s' }} />
                  <MapPin className="w-10 h-10 text-emerald relative z-10 drop-shadow-[0_0_15px_rgba(0,255,102,0.8)]" />
                </div>
                <div className="mt-4 bg-white/80 backdrop-blur-md border border-emerald/30 px-4 py-2 rounded-full shadow-[0_0_20px_rgba(0,255,102,0.2)] group-hover:border-emerald transition-colors">
                  <span className="font-oswald text-sm text-slate tracking-widest uppercase">
                    CPL Grand Arena
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <form className="glass-panel p-8 md:p-12 rounded-3xl border border-lightgray space-y-8 shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden" onSubmit={(e) => e.preventDefault()}>
              <div className="absolute top-0 right-0 w-64 h-64 bg-orangeGlow/10 blur-[80px] pointer-events-none" />
              
              <h2 className="font-bebas text-4xl text-slate mb-8 relative z-10 flex items-center gap-3">
                <Send className="w-8 h-8 text-orangeGlow" /> SEND A MESSAGE
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
                <div>
                  <label className="block text-xs font-oswald text-darkgray uppercase tracking-widest mb-2 ml-1">First Name</label>
                  <input type="text" className="w-full bg-white/50 backdrop-blur-md border border-lightgray rounded-xl px-5 py-4 text-slate focus:outline-none focus:border-emerald transition-all hover:bg-white/5 shadow-inner" />
                </div>
                <div>
                  <label className="block text-xs font-oswald text-darkgray uppercase tracking-widest mb-2 ml-1">Last Name</label>
                  <input type="text" className="w-full bg-white/50 backdrop-blur-md border border-lightgray rounded-xl px-5 py-4 text-slate focus:outline-none focus:border-emerald transition-all hover:bg-white/5 shadow-inner" />
                </div>
              </div>

              <div className="relative z-10">
                <label className="block text-xs font-oswald text-darkgray uppercase tracking-widest mb-2 ml-1">Email Address</label>
                <input type="email" className="w-full bg-white/50 backdrop-blur-md border border-lightgray rounded-xl px-5 py-4 text-slate focus:outline-none focus:border-emerald transition-all hover:bg-white/5 shadow-inner" />
              </div>

              <div className="relative z-10">
                <label className="block text-xs font-oswald text-darkgray uppercase tracking-widest mb-2 ml-1">Subject</label>
                <select className="w-full bg-white/50 backdrop-blur-md border border-lightgray rounded-xl px-5 py-4 text-slate focus:outline-none focus:border-emerald transition-all hover:bg-white/5 shadow-inner appearance-none cursor-pointer">
                  <option className="bg-softwhite">General Inquiry</option>
                  <option className="bg-softwhite">Ticketing</option>
                  <option className="bg-softwhite">Media & Press</option>
                  <option className="bg-softwhite">Sponsorship</option>
                </select>
              </div>

              <div className="relative z-10">
                <label className="block text-xs font-oswald text-darkgray uppercase tracking-widest mb-2 ml-1">Message</label>
                <textarea rows={5} className="w-full bg-white/50 backdrop-blur-md border border-lightgray rounded-xl px-5 py-4 text-slate focus:outline-none focus:border-emerald transition-all hover:bg-white/5 shadow-inner resize-none"></textarea>
              </div>

              <button className="relative z-10 w-full bg-emerald text-white font-bebas text-2xl tracking-wider py-5 rounded-xl hover:bg-white transition-colors shadow-[0_0_20px_rgba(0,255,102,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] hover:-translate-y-1 transform duration-300">
                SEND MESSAGE
              </button>
            </form>
          </motion.div>
        </div>

        {/* Floating WhatsApp (simulated) */}
        <button className="fixed bottom-24 md:bottom-8 right-6 md:right-8 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(34,197,94,0.5)] hover:scale-110 transition-transform z-50 group border-2 border-lightgray">
          <MessageCircle className="w-8 h-8 text-slate group-hover:scale-110 transition-transform" />
        </button>
      </div>
    </div>
  );
}
