import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    { q: "How many chapters are in the Bhagavad Gita?", a: "There are 18 chapters and 700 verses, each addressing different aspects of life, duty, and spirituality." },
    { q: "Who wrote the Bhagavad Gita?", a: "It was written by the sage Vyasa as part of the epic Mahabharata. It is a dialogue between Prince Arjuna and Lord Krishna." },
    { q: "What is the main message?", a: "The central message is to perform one's duty (Dharma) selflessly, without attachment to the results, and to surrender to the Divine." },
    { q: "Is the Gita only for Hindus?", a: "No, the wisdom of the Gita is universal. It speaks to the human condition, offering guidance on controlling the mind, finding peace, and acting righteously." },
  ];

  return (
    <section className="max-w-4xl mx-auto py-24 px-6 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-amber-500 font-divine tracking-[0.2em] uppercase text-sm mb-2 block">Common Questions</span>
        <h2 className="text-4xl md:text-5xl font-divine font-bold text-amber-50 mb-4">Seek Clarity</h2>
        <div className="h-1 w-24 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto"></div>
      </motion.div>
      
      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className="border border-amber-500/20 rounded-xl overflow-hidden bg-white/5 backdrop-blur-sm"
          >
            <button 
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full flex justify-between items-center p-6 hover:bg-white/5 transition-colors text-left"
            >
              <span className={`text-xl font-bold font-divine transition-colors ${openIndex === i ? 'text-amber-400' : 'text-amber-100'}`}>
                {faq.q}
              </span>
              <span className={`text-2xl transition-transform duration-300 ${openIndex === i ? 'text-amber-400 rotate-45' : 'text-amber-500/50'}`}>
                +
              </span>
            </button>
            <AnimatePresence>
                {openIndex === i && (
                <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                >
                    <div className="p-6 pt-0 text-amber-100/70 font-body text-lg leading-relaxed border-t border-amber-500/10">
                    {faq.a}
                    </div>
                </motion.div>
                )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;