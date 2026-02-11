import React, { useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { fetchChapters } from "../services/api";
import { motion } from "framer-motion";

const Chapters = () => {
  const navigate = useNavigate();
  const [chapters, setChapters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        setError("");
        setLoading(true);
        const data = await fetchChapters();
        if (!mounted) return;
        setChapters(Array.isArray(data) ? data : []);
      } catch (err) {
        if (!mounted) return;
        const message =
          err?.response?.data?.message ||
          err?.message ||
          "Failed to load chapters.";
        setError(message);
      } finally {
        if (mounted) setLoading(false);
      }
    })();
    return () => {
      mounted = false;
    };
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return chapters;
    return chapters.filter((c) => {
      const hay = [
        `chapter ${c.chapterNumber}`,
        c.nameEnglish,
        c.nameHindi,
        c.nameSanskrit,
        c.summaryEnglish,
        c.summaryHindi,
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();
      return hay.includes(q);
    });
  }, [chapters, query]);

  return (
    <div className="relative min-h-screen">
      {/* soft background */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_rgba(210,105,63,0.15),_transparent_55%)]" />

      <section className="mx-auto max-w-7xl px-6 pt-32 pb-16 relative z-10">
        <div className="mb-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
            >
              <p className="font-divine text-xs tracking-[0.35em] uppercase text-amber-500">
                Chapters • अध्याय
              </p>
              <h1 className="mt-3 font-divine text-4xl md:text-6xl tracking-tight text-amber-50 drop-shadow-md">
                Explore the Bhagavad Gita
              </h1>
              <p className="mt-3 font-body text-lg md:text-xl text-amber-200/70 max-w-2xl">
                Each chapter is a step on the inner path — karma, bhakti, jñāna,
                and liberation.
              </p>
            </motion.div>

            <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="w-full md:w-[28rem]"
            >
              <label className="block text-sm font-divine tracking-[0.25em] uppercase text-amber-500/80 mb-2">
                Search
              </label>
              <div className="relative group">
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search by name, number, Sanskrit, summary…"
                  className="w-full rounded-2xl border border-amber-500/30 bg-white/5 px-5 py-4 pr-12 font-body text-lg text-amber-50 placeholder-amber-500/30 outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 backdrop-blur-sm"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-amber-500/50 group-hover:text-amber-500 transition-colors">
                  <i className="fa-solid fa-magnifying-glass" />
                </span>
              </div>
            </motion.div>
          </div>

          <div className="mt-8 flex items-center justify-between text-sm text-amber-500/60 font-body border-b border-amber-500/10 pb-4">
            <span>
              Showing{" "}
              <strong className="text-amber-200">{filtered.length}</strong> of{" "}
              <strong className="text-amber-200">{chapters.length}</strong>
            </span>
            <Link to="/" className="text-amber-400 font-bold hover:text-amber-300 transition-colors uppercase tracking-widest text-xs font-divine">
              ← Back to Home
            </Link>
          </div>
        </div>

        {error ? (
          <div className="rounded-2xl border border-red-500/30 bg-red-900/20 px-5 py-4 text-red-200 font-body backdrop-blur-sm">
            {error}
          </div>
        ) : null}

        {loading ? (
          <div className="flex justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-500"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filtered.map((chapter, i) => (
              <motion.div
                key={chapter.chapterNumber}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                viewport={{ once: true }}
                className="group relative bg-gradient-to-br from-white/10 to-white/5 rounded-2xl border border-amber-500/20 shadow-lg overflow-hidden cursor-pointer backdrop-blur-md hover:border-amber-500/50 transition-all duration-300"
                onClick={() => navigate(`/chapters/${chapter.chapterNumber}`)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    navigate(`/chapters/${chapter.chapterNumber}`);
                  }
                }}
              >
                 {/* Hover Glow */}
                <div className="absolute inset-0 bg-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                
                <div className="p-8 relative z-10">
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <span className="inline-block py-1 px-3 rounded-full bg-amber-900/40 border border-amber-500/30 text-amber-500 font-bold font-divine mb-3 tracking-widest uppercase text-[10px]">
                        Chapter {chapter.chapterNumber}
                      </span>
                      <h3 className="text-2xl md:text-3xl font-bold font-divine text-amber-50 group-hover:text-amber-300 transition-colors">
                        {chapter.nameEnglish}
                      </h3>
                      <p className="mt-2 font-hindi text-lg text-amber-200/60">
                        {chapter.nameHindi}
                      </p>
                      <p className="mt-1 font-hindi text-xl text-amber-100/80">
                        {chapter.nameSanskrit}
                      </p>
                    </div>
                    <div className="shrink-0 rounded-2xl border border-amber-500/20 bg-amber-900/20 px-4 py-3 text-center group-hover:bg-amber-900/40 transition-colors">
                      <div className="text-2xl font-divine font-bold text-amber-400">
                        {chapter.versesCount}
                      </div>
                      <div className="text-[10px] font-divine tracking-[0.35em] uppercase text-amber-500/80">
                        Verses
                      </div>
                    </div>
                  </div>

                  {chapter.summaryEnglish ? (
                    <p className="mt-5 text-amber-100/70 font-body text-lg leading-relaxed line-clamp-3 group-hover:text-amber-50/90 transition-colors">
                      {chapter.summaryEnglish}
                    </p>
                  ) : (
                    <p className="mt-5 text-amber-500/40 font-body italic">
                      Summary coming soon.
                    </p>
                  )}

                  <div className="mt-7 flex items-center justify-between border-t border-amber-500/10 pt-4">
                    <span className="text-amber-500/60 font-body text-sm italic">
                      Tap to read verses
                    </span>
                    <span className="text-amber-400 font-divine font-bold tracking-[0.2em] uppercase text-xs group-hover:translate-x-1 transition-transform duration-300">
                      Open →
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {!loading && !error && filtered.length === 0 ? (
          <div className="mt-12 text-center text-amber-500/50 font-body text-xl">
            No chapters match your search.
          </div>
        ) : null}
      </section>
    </div>
  );
};

export default Chapters;
