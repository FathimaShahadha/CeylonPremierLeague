import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, User, Phone, UserPlus, Facebook, Instagram } from 'lucide-react';
import { toast } from 'sonner';

export const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    teamPreference: '',
  });
  const navigate = useNavigate();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }
    toast.success('Registration successful! Welcome to CPL.');
    navigate('/login');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen pt-24 pb-12 flex items-center justify-center relative overflow-hidden bg-softwhite">
      {/* Animated Light Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-emerald/10 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-float" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-electric/10 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10 flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-lg"
        >
          <div className="glass-panel p-8 rounded-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald to-electric"></div>
            
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bebas text-slate mb-2">Join the League</h2>
              <p className="text-darkgray">Create your CPL fan account</p>
            </div>

            <form onSubmit={handleRegister} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-slate mb-2">Full Name</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-midgray" />
                  </div>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3.5 bg-slate/5 border border-lightgray rounded-xl text-slate placeholder-gray-400 font-medium placeholder:font-normal focus:outline-none focus:border-emerald focus:bg-white focus:ring-4 focus:ring-emerald/10 transition-all shadow-inner"
                    placeholder="John Doe"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate mb-2">Email Address</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-midgray" />
                  </div>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3.5 bg-slate/5 border border-lightgray rounded-xl text-slate placeholder-gray-400 font-medium placeholder:font-normal focus:outline-none focus:border-emerald focus:bg-white focus:ring-4 focus:ring-emerald/10 transition-all shadow-inner"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate mb-2">Phone Number</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Phone className="h-5 w-5 text-midgray" />
                  </div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3.5 bg-slate/5 border border-lightgray rounded-xl text-slate placeholder-gray-400 font-medium placeholder:font-normal focus:outline-none focus:border-emerald focus:bg-white focus:ring-4 focus:ring-emerald/10 transition-all shadow-inner"
                    placeholder="+94 77 123 4567"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate mb-2">Password</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock className="h-5 w-5 text-midgray" />
                    </div>
                    <input
                      type="password"
                      name="password"
                      required
                      value={formData.password}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3.5 bg-slate/5 border border-lightgray rounded-xl text-slate placeholder-gray-400 font-medium placeholder:font-normal focus:outline-none focus:border-emerald focus:bg-white focus:ring-4 focus:ring-emerald/10 transition-all shadow-inner"
                      placeholder="••••••••"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate mb-2">Confirm</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock className="h-5 w-5 text-midgray" />
                    </div>
                    <input
                      type="password"
                      name="confirmPassword"
                      required
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3.5 bg-slate/5 border border-lightgray rounded-xl text-slate placeholder-gray-400 font-medium placeholder:font-normal focus:outline-none focus:border-emerald focus:bg-white focus:ring-4 focus:ring-emerald/10 transition-all shadow-inner"
                      placeholder="••••••••"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate mb-2">Favorite Team (Optional)</label>
                <select
                  name="teamPreference"
                  value={formData.teamPreference}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 bg-slate/5 border border-lightgray rounded-xl text-slate font-medium focus:outline-none focus:border-emerald focus:bg-white focus:ring-4 focus:ring-emerald/10 transition-all shadow-inner cursor-pointer"
                >
                  <option value="">Select a team</option>
                  <option value="colombo">Colombo Kings</option>
                  <option value="kandy">Kandy Tuskers</option>
                  <option value="galle">Galle Gladiators</option>
                  <option value="jaffna">Jaffna Stallions</option>
                  <option value="dambulla">Dambulla Viiking</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full flex justify-center items-center py-3.5 px-4 border border-transparent rounded-xl shadow-sm text-sm font-medium text-white bg-emerald hover:bg-electric transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald mt-6"
              >
                <UserPlus className="h-5 w-5 mr-2" />
                Create Account
              </button>
            </form>

            <div className="mt-8">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-lightgray"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-midgray">Or register with</span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3">
                <button type="button" className="flex justify-center items-center py-2.5 px-4 border border-lightgray rounded-xl bg-white hover:bg-slate/5 hover:border-slate/30 transition-all shadow-sm group">
                  <Facebook className="h-5 w-5 text-[#1877F2] group-hover:scale-110 transition-transform" />
                </button>
                <button type="button" className="flex justify-center items-center py-2.5 px-4 border border-lightgray rounded-xl bg-white hover:bg-slate/5 hover:border-slate/30 transition-all shadow-sm group">
                  <svg className="w-5 h-5 group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                </button>
                <button type="button" className="flex justify-center items-center py-2.5 px-4 border border-lightgray rounded-xl bg-white hover:bg-slate/5 hover:border-slate/30 transition-all shadow-sm group">
                  <Instagram className="h-5 w-5 text-[#E4405F] group-hover:scale-110 transition-transform" />
                </button>
              </div>
            </div>

            <p className="mt-8 text-center text-sm text-darkgray">
              Already have an account?{' '}
              <Link to="/login" className="font-medium text-emerald hover:text-electric">
                Sign in
              </Link>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
