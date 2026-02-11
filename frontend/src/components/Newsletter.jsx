import React, { useState } from 'react';
import chariotImg from '../assets/hero-bg.jpg';
import { motion } from "framer-motion";
import { subscribe } from '../services/api';

const Newsletter = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    setMessage('');

    try {
      await subscribe(email);
      setStatus('success');
      setMessage('Successfully subscribed! check your email for confirmation.');
      setName('');
      setEmail('');
    } catch (error) {
      console.error(error);
      setStatus('error');
      setMessage(error?.response?.data?.message || 'Something went wrong. Please try again.');
    }
  };

  return (
    <section className="max-w-7xl mx-auto my-24 px-6 relative z-10">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-gradient-to-br from-temple to-black rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col md:flex-row border border-amber-500/20"
      >
        {/* Left Side: Form */}
        <div className="flex-1 p-12 md:p-20 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_rgba(212,175,55,0.1),_transparent_70%)] pointer-events-none"></div>
            
          <h2 className="text-4xl font-divine font-bold text-amber-50 mb-4 relative z-10">Daily Wisdom</h2>
          <p className="text-amber-200/60 font-body text-lg mb-10 relative z-10">
            Receive a sacred shloka and its meaning in your inbox every morning. Start your day with divine guidance.
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
            <div className="relative group">
              <input 
                type="text" 
                placeholder="Your Name" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-white/5 border border-amber-500/20 text-amber-50 placeholder-amber-500/40 rounded-xl py-4 px-12 focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-all font-body" 
              />
              <i className="fa-regular fa-user absolute left-4 top-5 text-amber-500/60 group-hover:text-amber-500 transition-colors"></i>
            </div>
            <div className="relative group">
              <input 
                type="email" 
                placeholder="Your Email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-white/5 border border-amber-500/20 text-amber-50 placeholder-amber-500/40 rounded-xl py-4 px-12 focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-all font-body" 
              />
              <i className="fa-regular fa-envelope absolute left-4 top-5 text-amber-500/60 group-hover:text-amber-500 transition-colors"></i>
            </div>
            
            {message && (
                <div className={`p-3 rounded-lg text-sm font-body ${status === 'success' ? 'bg-green-900/30 text-green-200 border border-green-500/30' : 'bg-red-900/30 text-red-200 border border-red-500/30'}`}>
                    {message}
                </div>
            )}

            <button 
                type="submit" 
                disabled={status === 'loading'}
                className="w-full bg-gradient-to-r from-amber-600 to-amber-700 text-white font-divine font-bold uppercase tracking-widest py-4 rounded-xl shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] hover:from-amber-500 hover:to-amber-600 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {status === 'loading' ? (
                  <span className="flex items-center gap-2">
                      <i className="fa-solid fa-circle-notch fa-spin"></i> Subscribing...
                  </span>
              ) : (
                  <>
                    <span className="text-xl">✨</span> Subscribe
                  </>
              )}
            </button>
          </form>
          <p className="mt-6 text-amber-500/40 text-sm italic relative z-10 text-center">Join 10,000+ seekers on this spiritual journey</p>
        </div>

        {/* Right Side: Image with Quote Overlay */}
        <div className="flex-1 relative hidden md:block">
          <div className="absolute inset-0 bg-black/40 z-10"></div>
          <img src={chariotImg} alt="Lord Krishna" className="h-full w-full object-cover opacity-80" />
          <div className="absolute inset-0 z-20 flex items-end p-12 bg-gradient-to-t from-black/90 via-black/20 to-transparent">
            <div className="bg-white/5 backdrop-blur-md p-8 rounded-xl border border-amber-500/20 shadow-lg">
              <p className="text-amber-50 italic font-body text-xl mb-4 leading-relaxed">"The mind is restless and difficult to restrain, but it is subdued by practice."</p>
              <div className="flex items-center gap-3">
                  <div className="h-px bg-amber-500 w-12"></div>
                  <p className="text-saffron font-divine font-bold text-sm tracking-widest uppercase">Bhagavad Gita 6.35</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Newsletter;