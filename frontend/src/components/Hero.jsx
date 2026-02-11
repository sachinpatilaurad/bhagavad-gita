import React, { useRef } from "react";
import { Link } from "react-scroll";
import { motion, useScroll, useTransform } from "framer-motion";

const Hero = () => {
  const ref = useRef(null);
  const { scrollY } = useScroll();
  const yBackend = useTransform(scrollY, [0, 500], [0, 200]);
  const yText = useTransform(scrollY, [0, 500], [0, 100]);

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden bg-divine/5">
      {/* Divine Rays Background */}
      <div className="absolute inset-0 bg-gradient-radial from-amber-400/20 via-transparent to-transparent animate-pulse pointer-events-none"></div>

      {/* Floating Mantra Background */}
      <div className="absolute top-1/4 left-0 w-full text-center pointer-events-none opacity-5">
         <motion.div
           animate={{ y: [0, -20, 0] }}
           transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
           className="text-6xl md:text-9xl font-hindi font-bold text-saffron"
         >
           धर्मो रक्षति रक्षितः
         </motion.div>
      </div>

      {/* Main Content */}
      <motion.div 
        style={{ y: yText }}
        className="relative z-10 text-center px-4 max-w-4xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="mb-6"
        >
             <h1 className="text-5xl md:text-7xl font-divine text-transparent bg-clip-text bg-gradient-to-r from-divine via-saffron to-divine drop-shadow-sm mb-4 tracking-wide">
            Bhagavad Gita
          </h1>
          <p className="text-xl md:text-2xl text-amber-100/80 font-body italic">
            "The Song of God"
          </p>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-lg md:text-xl text-amber-50/90 mb-10 leading-relaxed font-body"
        >
          Discover spiritual wisdom, inner peace, and the path to righteousness.
          <br /> Let the divine words guide your soul.
        </motion.p>
        
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
        >
            <Link
              to="chapters"
              smooth={true}
              duration={1000}
              className="inline-block bg-gradient-to-r from-amber-600 to-amber-700 text-white font-divine uppercase tracking-wider py-4 px-10 rounded-full shadow-[0_0_20px_rgba(251,191,36,0.5)] hover:shadow-[0_0_30px_rgba(251,191,36,0.8)] hover:scale-105 transition-all duration-300 cursor-pointer border border-amber-400/30"
            >
              Begin Reading
            </Link>
        </motion.div>
      </motion.div>

        {/* Scroll Indicator */}
      <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-amber-400/70"
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </div>
  );
};

export default Hero;
