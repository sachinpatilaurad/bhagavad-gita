import React, { useState, useRef, useEffect } from "react";
import ReactMarkdown from 'react-markdown';
import { motion } from "framer-motion";

const GitaAI = () => {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Namaste! I am an AI guided by the wisdom of the Bhagavad Gita. Ask me anything about life, duty, or spirituality.",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/api/ai/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage.content }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: data.reply },
        ]);
      } else {
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content:
              "I apologize, but I am unable to connect to the divine source at this moment. (" +
              (data.message || "Unknown error") +
              ")",
            error: true,
          },
        ]);
      }
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Something went wrong. Please try again later.",
          error: true,
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Background Pattern */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_rgba(210,105,63,0.15),_transparent_55%)]" />

      {/* Header */}
      <motion.section 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="pt-32 pb-6 px-6 text-center z-10"
      >
        <h1 className="font-divine text-4xl md:text-5xl text-amber-50 mb-2 drop-shadow-md">
          Gita <span className="text-amber-500">AI</span>
        </h1>
        <p className="font-body text-amber-200/60">
          Seek guidance from the eternal wisdom
        </p>
      </motion.section>

      {/* Chat Container */}
      <div className="flex-1 max-w-4xl mx-auto w-full px-4 pb-28 flex flex-col relative z-10">
        <div className="flex-1 overflow-y-auto space-y-6 pb-4">
          {messages.map((msg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex ${
                msg.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[85%] md:max-w-[75%] rounded-2xl px-6 py-4 shadow-lg backdrop-blur-sm border ${
                  msg.role === "user"
                    ? "bg-gradient-to-r from-amber-600 to-amber-700 text-white rounded-br-none border-amber-500/30"
                    : "bg-white/10 text-amber-50 rounded-bl-none border-amber-500/20"
                } ${msg.error ? "border-red-500/30 bg-red-900/20 text-red-100" : ""}`}
              >
                {msg.role === "assistant" && !msg.error ? (
                    <div className="font-body leading-relaxed prose prose-invert prose-amber max-w-none prose-p:my-2 prose-p:text-amber-50/90 prose-strong:text-amber-400">
                        <ReactMarkdown>{msg.content}</ReactMarkdown>
                    </div>
                ) : (
                    <p className="font-body leading-relaxed whitespace-pre-wrap">{msg.content}</p>
                )}
              </div>
            </motion.div>
          ))}

          {loading && (
            <div className="flex justify-start">
              <div className="bg-white/10 border border-amber-500/20 rounded-2xl rounded-bl-none px-6 py-4 shadow-lg flex items-center gap-2 backdrop-blur-sm">
                <div className="w-2 h-2 bg-amber-500 rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></div>
                <div className="w-2 h-2 bg-amber-500 rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></div>
                <div className="w-2 h-2 bg-amber-500 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input Area */}
      <div className="fixed bottom-0 left-0 w-full bg-deep-bg/80 backdrop-blur-md border-t border-amber-500/20 py-6 px-4 z-40">
        <div className="max-w-4xl mx-auto">
          <form onSubmit={handleSend} className="relative flex items-center gap-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask Krishna: What is my duty? How to find peace?"
              className="w-full bg-white/5 border border-amber-500/30 rounded-full pl-6 pr-14 py-4 focus:outline-none focus:border-amber-500/60 focus:ring-2 focus:ring-amber-500/20 font-body text-lg shadow-lg text-amber-50 placeholder-amber-500/30 transition-all"
              disabled={loading}
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="absolute right-2 bg-amber-600 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-amber-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all hover:scale-105 active:scale-95 shadow-[0_0_15px_rgba(212,175,55,0.4)]"
            >
              <i className="fa-solid fa-paper-plane text-sm"></i>
            </button>
          </form>
          <p className="text-center text-xs text-amber-500/40 mt-3 font-body">
            AI can make mistakes. Verify important information from the texts.
          </p>
        </div>
      </div>
    </div>
  );
};
export default GitaAI;
