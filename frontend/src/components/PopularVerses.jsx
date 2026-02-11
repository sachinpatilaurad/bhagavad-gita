import React from 'react';
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const PopularVerses = () => {
  // Mock data for UI - replace with API call to Verse controller later
  const popular = [
    { id: "2.47", tag: "Karma Yog", text: "You have a right to perform your prescribed duties, but you are not entitled to the fruits of your actions." },
    { id: "4.7", tag: "Avatar Vani", text: "Whenever there is a decline in righteousness and an increase in unrighteousness, O Arjun, at that time I manifest Myself." },
    { id: "18.66", tag: "Moksha Yog", text: "Abandon all varieties of dharmas and simply surrender unto Me alone. I shall liberate you from all sinful reactions; do not fear." },
    { id: "2.20", tag: "Sankhya Yog", text: "The soul is neither born, nor does it ever die; nor having once existed, does it ever cease to be." },
  ];

  return (
    <section className="relative py-24 overflow-hidden">
       {/* Background Element */}
       <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
        >
             <h2 className="text-4xl md:text-5xl font-divine font-bold text-amber-100 mb-4 drop-shadow-md">
                Timeless Wisdom
             </h2>
             <p className="text-amber-200/60 font-body text-xl max-w-2xl mx-auto">
                Explore the essence of the Gita through its most powerful verses.
             </p>
        </motion.div>
        
        <div className="flex gap-6 overflow-x-auto pb-10 scrollbar-hide snap-x snap-mandatory">
          {popular.map((v, i) => (
            <motion.div 
                key={i}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="min-w-[350px] md:min-w-[400px] bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-amber-500/20 text-left snap-center hover:border-amber-500/40 transition-all duration-300 group"
            >
              <div className="flex justify-between items-center mb-6">
                <span className="text-divine font-bold font-divine text-xl">Verse {v.id}</span>
                <span className="bg-amber-900/40 border border-amber-500/20 text-amber-200 text-xs px-3 py-1 rounded-full font-bold uppercase tracking-wider">{v.tag}</span>
              </div>
              <p className="text-amber-50/90 font-body text-lg mb-8 leading-relaxed italic">
                "{v.text}"
              </p>
              <Link to={`/chapters/${v.id.split('.')[0]}`} className="text-amber-400 font-bold flex items-center gap-2 group-hover:gap-3 transition-all text-sm uppercase tracking-widest">
                Read Context <span className="text-lg">→</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularVerses;