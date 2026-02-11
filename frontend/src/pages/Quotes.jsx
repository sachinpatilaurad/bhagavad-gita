import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Quotes = () => {
  // Mock data for quotes - in a real app this could come from an API
  const quotes = [
    {
      id: 1,
      text: "You have a right to perform your prescribed duties, but you are not entitled to the fruits of your actions.",
      chapter: "2.47",
      tag: "Karma",
    },
    {
      id: 2,
      text: "The soul can never be cut into pieces by any weapon, nor can he be burned by fire, nor moistened by water, nor withered by the wind.",
      chapter: "2.23",
      tag: "Soul",
    },
    {
      id: 3,
      text: "When meditation is mastered, the mind is unwavering like the flame of a lamp in a windless place.",
      chapter: "6.19",
      tag: "Meditation",
    },
    {
      id: 4,
      text: "There is neither this world nor the world beyond nor happiness for the one who doubts.",
      chapter: "4.40",
      tag: "Faith",
    },
    {
      id: 5,
      text: "A person can rise through the efforts of his own mind; or draw himself down, in the same manner. Because each person is his own friend or enemy.",
      chapter: "6.5",
      tag: "Self-Control",
    },
    {
      id: 6,
      text: "For one who has conquered the mind, the mind is the best of friends; but for one who has failed to do so, his very mind will be the greatest enemy.",
      chapter: "6.6",
      tag: "Mind",
    },
    {
      id: 7,
      text: "Whatever happened, happened for the good. Whatever is happening, is happening for the good. Whatever will happen, will also happen for the good.",
      chapter: "Unknown", // Popular summary, not direct verse
      tag: "Acceptance",
    },
    {
      id: 8,
      text: "Change is the law of the universe. You can be a millionaire, or a pauper in an instant.",
      chapter: "Unknown",
      tag: "Change",
    },
  ];

  const [copiedId, setCopiedId] = useState(null);

  const handleCopy = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  }

  return (
    <div className="relative min-h-screen">
      {/* Background Pattern */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_rgba(210,105,63,0.15),_transparent_55%)]" />

      <section className="mx-auto max-w-7xl px-6 pt-32 pb-16 relative z-10">
        {/* Header Section */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
        >
          <p className="font-divine text-xs tracking-[0.35em] uppercase text-amber-500 mb-3">
            Timeless Wisdom
          </p>
          <h1 className="font-divine text-4xl md:text-6xl tracking-tight text-amber-50 mb-6 drop-shadow-md">
            Quotes from the Divine
          </h1>
          <p className="font-body text-lg text-amber-200/60 max-w-2xl mx-auto">
            Reflect on the profound verses that guide us towards dharma, peace,
            and liberation.
          </p>
        </motion.div>

        {/* Featured/Daily Quote */}
        <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
        >
          <div className="bg-gradient-to-br from-temple to-black rounded-3xl p-10 md:p-14 text-white relative overflow-hidden text-center shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-amber-500/30">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
            {/* Rays */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(212,175,55,0.1),_transparent_70%)] pointer-events-none"></div>
            
            <div className="relative z-10 max-w-4xl mx-auto">
              <span className="inline-block bg-white/5 backdrop-blur-md px-4 py-1 rounded-full text-xs font-divine tracking-widest uppercase mb-6 text-amber-300 border border-amber-500/20">
                Quote of the Day
              </span>
              <h2 className="font-divine text-2xl md:text-4xl leading-relaxed mb-8 text-amber-50">
                "Set thy heart upon thy work, but never on its reward."
              </h2>
              <div className="flex justify-center items-center gap-4 text-amber-200/80 font-body text-sm">
                <span>Chapter 2, Verse 47</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Quotes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {quotes.map((quote, i) => (
            <motion.div
              key={quote.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
              className="bg-white/5 p-8 rounded-2xl border border-amber-500/10 shadow-lg hover:shadow-[0_0_30px_rgba(212,175,55,0.15)] hover:border-amber-500/30 transition-all duration-300 flex flex-col h-full group backdrop-blur-sm"
            >
              <div className="mb-6 flex justify-between items-start">
                <span className="bg-amber-900/40 border border-amber-500/20 text-amber-400 text-[10px] font-bold font-divine uppercase tracking-wider px-3 py-1 rounded-full">
                  {quote.tag}
                </span>
                <span className="text-amber-500/20 font-serif text-4xl leading-none opacity-50 font-bold group-hover:text-amber-500/40 transition-colors">
                  "
                </span>
              </div>

              <p className="font-body text-amber-100/90 text-lg leading-relaxed mb-8 flex-grow">
                {quote.text}
              </p>

              <div className="pt-6 border-t border-amber-500/10 flex justify-between items-center">
                <span className="font-divine text-sm text-amber-500/60 font-bold group-hover:text-amber-500/80 transition-colors">
                  {quote.chapter !== "Unknown"
                    ? `Chapter ${quote.chapter}`
                    : "Gita Wisdom"}
                </span>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleCopy(quote.text, quote.id)}
                    className="text-amber-500/50 hover:text-amber-400 transition-colors p-2 rounded-full hover:bg-amber-500/10 relative"
                    title="Copy to clipboard"
                  >
                    {copiedId === quote.id ? (
                      <i className="fa-solid fa-check text-green-400"></i>
                    ) : (
                      <i className="fa-regular fa-copy"></i>
                    )}
                  </button>
                  <button
                    className="text-amber-500/50 hover:text-amber-400 transition-colors p-2 rounded-full hover:bg-amber-500/10"
                    title="Share"
                  >
                    <i className="fa-solid fa-share-nodes"></i>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <p className="text-amber-200/50 font-body mb-4">
            Want to read the full context?
          </p>
          <Link
            to="/chapters"
            className="text-amber-400 font-divine font-bold text-lg hover:text-amber-300 hover:underline decoration-2 underline-offset-4 transition-colors"
          >
            Browse All Chapters →
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Quotes;
