import React, { useEffect, useState } from "react";
import axios from "axios";
import ChapterCard from "./ChapterCard";
import { motion } from "framer-motion";

const ChaptersGrid = () => {
  const [chapters, setChapters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getChapters = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/chapters");
        setChapters(res.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching chapters", err);
        setLoading(false);
      }
    };
    getChapters();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center py-20">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-500"></div>
      </div>
    );
  }

  return (
    <section
      id="chapters"
      className="max-w-7xl mx-auto py-24 px-6 scroll-mt-24 relative z-10"
    >
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
        >
            <span className="text-amber-500 font-divine tracking-[0.2em] uppercase text-sm mb-2 block">Sacred Texts</span>
            <h2 className="text-4xl md:text-5xl font-divine font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-100 to-amber-200 mb-6 drop-shadow-md">
                Divine Chapters
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto"></div>
        </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {chapters.map((chapter, index) => (
          <ChapterCard key={chapter.chapterNumber} chapter={chapter} index={index} />
        ))}
      </div>
    </section>
  );
};

export default ChaptersGrid;

