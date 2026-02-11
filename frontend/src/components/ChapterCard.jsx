import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ChapterCard = ({ chapter, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
    >
      <Link to={`/chapters/${chapter.chapterNumber}`} className="block h-full">
        <div className="group relative h-full overflow-hidden rounded-2xl border border-amber-500/20 bg-gradient-to-br from-white/10 to-white/5 p-8 backdrop-blur-md transition-all duration-500 hover:border-amber-500/40 hover:shadow-[0_0_30px_rgba(212,175,55,0.15)]">
            {/* Hover Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
            
            <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-4">
                    <span className="font-divine text-amber-500 text-sm tracking-widest uppercase border border-amber-500/30 px-3 py-1 rounded-full bg-amber-900/20">
                    Chapter {chapter.chapterNumber}
                    </span>
                    <span className="font-hindi text-xl text-amber-200/80">{chapter.nameSanskrit}</span>
                </div>

                <h3 className="text-2xl font-divine font-bold text-amber-50 mb-3 group-hover:text-amber-400 transition-colors">
                    {chapter.nameEnglish}
                </h3>

                <p className="text-amber-100/70 font-body text-lg leading-relaxed mb-6 line-clamp-3 flex-grow">
                    {chapter.summaryEnglish}
                </p>

                <div className="flex items-center justify-between text-amber-500/80 text-sm font-medium border-t border-amber-500/10 pt-4 mt-auto">
                    <span className="flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
                        {chapter.versesCount} Verses
                    </span>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                        Read Chapter →
                    </span>
                </div>
            </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ChapterCard;
