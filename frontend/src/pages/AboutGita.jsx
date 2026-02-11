import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const AboutGita = () => {
  return (
    <div className="relative min-h-screen">
      {/* Background Pattern */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_rgba(210,105,63,0.15),_transparent_55%)]" />

      <section className="mx-auto max-w-4xl px-6 pt-32 pb-16 relative z-10">
        {/* Header Section */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
        >
          <p className="font-divine text-xs tracking-[0.35em] uppercase text-amber-500 mb-3">
            About The Divine Song
          </p>
          <h1 className="font-divine text-4xl md:text-6xl tracking-tight text-amber-50 mb-6 drop-shadow-md">
            The Essence of Bhagavad Gita
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto opacity-60"></div>
        </motion.div>

        {/* Introduction */}
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 rounded-3xl border border-amber-500/20 backdrop-blur-md shadow-2xl p-8 md:p-12 mb-10 text-lg leading-relaxed text-amber-100/80 font-body"
        >
          <p className="mb-6 first-letter:text-6xl first-letter:font-divine first-letter:text-amber-400 first-letter:mr-3 first-letter:float-left">
            The Bhagavad Gita, often referred to as the Gita, is a 700-verse
            Hindu scripture that is part of the epic Mahabharata. It is a sacred
            dialogue between Prince Arjuna and Lord Krishna, who serves as his
            charioteer and spiritual guide.
          </p>
          <p>
            Set on the battlefield of Kurukshetra, the Gita addresses the moral
            and spiritual dilemmas faced by Arjuna. It is not just a religious
            text but a practical guide to life, offering profound wisdom on
            duty, righteousness, and the path to spiritual liberation.
          </p>
        </motion.div>

        {/* Significance Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-amber-900/20 to-black/40 rounded-3xl p-8 border border-amber-500/20"
          >
            <h3 className="font-divine text-2xl text-amber-100 mb-4 flex items-center gap-3">
              <span className="text-amber-500 text-xl">✦</span>
              Significance
            </h3>
            <p className="text-amber-200/60 font-body leading-relaxed">
              The Gita synthesizes various strands of Hindu philosophy,
              presenting a comprehensive view of life and spirituality. It is
              renowned for its inclusive approach, accepting different paths to
              the divine as valid and complementary.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-amber-900/20 to-black/40 rounded-3xl p-8 border border-amber-500/20"
          >
            <h3 className="font-divine text-2xl text-amber-100 mb-4 flex items-center gap-3">
              <span className="text-amber-500 text-xl">✦</span>
              Universal Appeal
            </h3>
            <p className="text-amber-200/60 font-body leading-relaxed">
              Its teachings have influenced prominent thinkers and leaders like
              Mahatma Gandhi, Henry David Thoreau, and Albert Einstein. The
              message of performing one's duty without attachment to results is
              universally empowering.
            </p>
          </motion.div>
        </div>

        {/* Key Teachings */}
        <div className="mb-16">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-divine text-3xl text-center text-amber-50 mb-10"
          >
            Core Teachings
          </motion.h2>
          <div className="space-y-6">
            {[
              {
                title: "Dharma (Duty)",
                desc: "Perform your prescribed duty, for doing so is better than not working. One who fulfills their duty without attachment attains the Supreme.",
              },
              {
                title: "Karma Yoga (Action)",
                desc: "You have a right to perform your prescribed duties, but you are not entitled to the fruits of your actions. Never consider yourself to be the cause of the results of your activities.",
              },
              {
                title: "Bhakti (Devotion)",
                desc: "Whosoever offers to Me with devotion a leaf, a flower, a fruit, or water, that I accept, offered by the pure-minded and loving devotee.",
              },
              {
                title: "Aatma (The Soul)",
                desc: "For the soul there is neither birth nor death at any time. He has not come into being, does not come into being, and will not come into being. He is unborn, eternal, ever-existing and primeval.",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row gap-6 items-start bg-white/5 p-6 rounded-2xl border border-amber-500/10 hover:border-amber-500/30 hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="bg-amber-900/30 text-amber-400 font-bold font-divine py-2 px-4 rounded-lg shrink-0 border border-amber-500/20 group-hover:border-amber-500/50 transition-colors">
                  {idx + 1}
                </div>
                <div>
                  <h4 className="font-divine text-xl text-amber-50 mb-2 group-hover:text-amber-300 transition-colors">
                    {item.title}
                  </h4>
                  <p className="font-body text-amber-200/60 leading-relaxed group-hover:text-amber-100/80 transition-colors">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center bg-gradient-to-br from-temple to-black rounded-3xl p-10 md:p-16 text-white relative overflow-hidden border border-amber-500/30 shadow-2xl"
        >
          <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
           {/* Divine Rays */}
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(212,175,55,0.15),_transparent_70%)] pointer-events-none"></div>

          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="font-divine text-3xl md:text-4xl mb-6 text-amber-50">
              Start Your Journey
            </h2>
            <p className="font-body text-amber-100/70 text-lg mb-8 leading-relaxed">
              Explore the chapters and verses to find the wisdom that speaks to
              you today.
            </p>
            <Link
              to="/chapters"
              className="inline-block bg-gradient-to-r from-amber-600 to-amber-700 text-white font-bold font-divine uppercase tracking-widest px-8 py-4 rounded-full transition-all hover:scale-105 shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:shadow-[0_0_30px_rgba(212,175,55,0.6)] border border-amber-400/30"
            >
              Read the Gita
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default AboutGita;
