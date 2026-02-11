import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ShlokaCard = () => {
  const [shloka, setShloka] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getShloka = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/verses/random");
        setShloka(res.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching shloka", err);
        setLoading(false);
      }
    };
    getShloka();
  }, []);

  if (loading)
    return (
      <div className="flex justify-center py-20">
         <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-divine"></div>
      </div>
    );

  return (
    <section id="shloka" className="max-w-5xl mx-auto my-16 px-6 relative z-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-xl rounded-3xl border border-amber-500/30 p-10 md:p-16 text-center overflow-hidden shadow-[0_0_50px_rgba(212,175,55,0.1)] group"
      >
        {/* Glow Effects */}
        <div className="absolute -top-20 -left-20 w-60 h-60 bg-amber-500/20 blur-[80px] rounded-full pointer-events-none group-hover:bg-amber-500/30 transition-colors duration-700"></div>
        <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-saffron/20 blur-[80px] rounded-full pointer-events-none group-hover:bg-saffron/30 transition-colors duration-700"></div>

        <h2 className="text-center text-sm md:text-base font-bold text-divine mb-10 uppercase tracking-[0.3em] font-divine relative z-10">
          — Verse of the Moment —
        </h2>

        <div className="relative z-10 space-y-8">
            <h3 className="text-3xl md:text-5xl font-hindi leading-relaxed text-amber-50 drop-shadow-lg">
            {shloka?.textSanskrit}
            </h3>

            <p className="text-amber-200/80 text-lg md:text-xl italic max-w-3xl mx-auto leading-relaxed font-body">
            "{shloka?.transliteration}"
            </p>
            
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent mx-auto my-8"></div>
            
            <p className="text-amber-50 font-body text-xl md:text-2xl leading-relaxed">
                {shloka?.meaningEnglish || "Meaning not available."}
            </p>
        </div>

        <div className="mt-12 relative z-10">
          <Link 
            to={`/chapters/${shloka?.chapterNumber}`}
            className="inline-block text-saffron font-bold text-sm border border-saffron/30 px-6 py-3 rounded-full hover:bg-saffron/10 hover:border-saffron/60 transition-all font-divine uppercase tracking-widest"
          >
            Read Chapter {shloka?.chapterNumber}
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default ShlokaCard;
