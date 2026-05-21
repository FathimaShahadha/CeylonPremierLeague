import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Shield, Key, Mail, ArrowRight } from 'lucide-react';
import { toast } from 'sonner';

export const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === 'admin@cpl.com' && password === 'admin') {
      toast.success('Admin authentication successful');
      navigate('/admin');
    } else {
      toast.error('Invalid admin credentials');
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-12 flex items-center justify-center relative overflow-hidden bg-softwhite">
      {/* Animated Admin Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-gold/10 rounded-full mix-blend-multiply filter blur-[100px] opacity-60 animate-float" />
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-electric/10 rounded-full mix-blend-multiply filter blur-[80px] opacity-50 animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10 flex justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md"
        >
          <div className="bg-white/80 backdrop-blur-2xl p-8 rounded-2xl border border-lightgray shadow-xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold via-yellow-400 to-gold"></div>
            
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-gold/20 rounded-full border border-gold/30">
                <Shield className="h-10 w-10 text-gold" />
              </div>
            </div>

            <div className="text-center mb-8">
              <h2 className="text-3xl font-bebas tracking-wide mb-2 text-slate">Admin Portal</h2>
              <p className="text-darkgray text-sm">Secure access for authorized personnel only</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate mb-2">Admin Email</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-darkgray" />
                  </div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-4 py-3.5 bg-slate/5 border border-lightgray rounded-xl font-medium text-slate placeholder-gray-400 placeholder:font-normal focus:outline-none focus:border-gold focus:bg-white focus:ring-4 focus:ring-gold/10 transition-all shadow-inner"
                    placeholder="admin@cpl.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate mb-2">Security Key</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Key className="h-5 w-5 text-darkgray" />
                  </div>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-10 pr-4 py-3.5 bg-slate/5 border border-lightgray rounded-xl font-medium text-slate placeholder-gray-400 placeholder:font-normal focus:outline-none focus:border-gold focus:bg-white focus:ring-4 focus:ring-gold/10 transition-all shadow-inner"
                    placeholder="••••••••"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-xl shadow-[0_0_15px_rgba(212,175,55,0.4)] text-sm font-bold text-slate bg-gradient-to-r from-gold to-yellow-500 hover:from-yellow-400 hover:to-gold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold transition-all transform hover:scale-[1.02]"
              >
                Authenticate Request
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-xs text-darkgray">
                Unauthorized access is strictly prohibited and monitored.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
