import React, { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  fetchChapterByNumber,
  fetchFullVerse,
  fetchVersesByChapter,
} from "../services/api";
import { motion, AnimatePresence } from "framer-motion";

const ChapterReader = () => {
  const { chapterNumber } = useParams();
  const chapterNo = Number(chapterNumber);

  const [chapter, setChapter] = useState(null);
  const [verses, setVerses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [query, setQuery] = useState("");
  const [activeVerseKey, setActiveVerseKey] = useState(null);
  const [meaningByKey, setMeaningByKey] = useState({});
  const [meaningLoadingKey, setMeaningLoadingKey] = useState(null);
  const [meaningLang, setMeaningLang] = useState("en"); // en | hi

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        setError("");
        setLoading(true);
        const [chapterData, versesData] = await Promise.all([
          fetchChapterByNumber(chapterNo),
          fetchVersesByChapter(chapterNo),
        ]);
        if (!mounted) return;
        setChapter(chapterData || null);
        setVerses(Array.isArray(versesData) ? versesData : []);
      } catch (err) {
        if (!mounted) return;
        const message =
          err?.response?.data?.message ||
          err?.message ||
          "Failed to load chapter.";
        setError(message);
      } finally {
        if (mounted) setLoading(false);
      }
    })();
    return () => {
      mounted = false;
    };
  }, [chapterNo]);

  const filteredVerses = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return verses;
    return verses.filter((v) => {
      const hay = [
        `bg ${v.chapterNumber}.${v.verseNumber}`,
        v.textSanskrit,
        v.transliteration,
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();
      return hay.includes(q);
    });
  }, [query, verses]);

  const openVerse = async (v) => {
    const key = `${v.chapterNumber}.${v.verseNumber}`;
    setActiveVerseKey((prev) => (prev === key ? null : key));

    // If we already have meaning cached, don’t refetch.
    if (meaningByKey[key]) return;

    setMeaningLoadingKey(key);
    try {
      const full = await fetchFullVerse(v.chapterNumber, v.verseNumber);
      setMeaningByKey((prev) => ({ ...prev, [key]: full }));
    } catch (err) {
      const message =
        err?.response?.data?.message ||
        err?.message ||
        "Failed to load meaning.";
      setMeaningByKey((prev) => ({
        ...prev,
        [key]: { error: message },
      }));
    } finally {
      setMeaningLoadingKey(null);
    }
  };

  const copyText = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      // ignore
    }
  };

  return (
    <div className="relative min-h-screen">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_rgba(210,105,63,0.15),_transparent_55%)]" />

      <section className="mx-auto max-w-6xl px-6 pt-32 pb-16">
        <div className="mb-12">
          {/* Header Section */}
          <div className="flex items-center justify-between gap-6 flex-wrap mb-8">
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
            >
              <p className="font-divine text-xs tracking-[0.35em] uppercase text-amber-500">
                Reading • पाठ
              </p>
              <h1 className="mt-3 font-divine text-4xl md:text-6xl tracking-tight text-amber-50 drop-shadow-md">
                Chapter {chapterNo}
                <span className="text-amber-300 block md:inline md:ml-4">{chapter?.nameEnglish ? ` — ${chapter.nameEnglish}` : ""}</span>
              </h1>
              <div className="mt-3 flex flex-col gap-1">
                {chapter?.nameSanskrit ? (
                  <p className="font-hindi text-2xl text-amber-100/80">
                    {chapter.nameSanskrit}
                  </p>
                ) : null}
                {chapter?.nameHindi ? (
                  <p className="font-hindi text-lg text-amber-200/60">
                    {chapter.nameHindi}
                  </p>
                ) : null}
              </div>
              {chapter?.summaryEnglish ? (
                <p className="mt-6 font-body text-lg text-amber-100/70 max-w-3xl leading-relaxed border-l-2 border-amber-500/30 pl-4">
                  {chapter.summaryEnglish}
                </p>
              ) : null}
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="flex items-center gap-3"
            >
              <Link
                to="/chapters"
                className="group flex items-center gap-2 text-amber-400 font-bold hover:text-amber-300 font-divine tracking-widest text-sm uppercase border border-amber-500/20 px-4 py-3 rounded-full hover:bg-amber-500/10 transition-all"
              >
                <span>←</span> Back to Chapters
              </Link>
            </motion.div>
          </div>

          {/* Controls Section */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-12 gap-6 bg-white/5 border border-amber-500/20 backdrop-blur-md rounded-2xl p-6 shadow-lg">
            <div className="md:col-span-8">
              <label className="block text-sm font-divine tracking-[0.25em] uppercase text-amber-500/80 mb-2">
                Search within this chapter
              </label>
              <div className="relative group">
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search by verse number, Sanskrit, transliteration…"
                  className="w-full rounded-xl border border-amber-500/20 bg-black/20 px-5 py-3 pr-12 font-body text-lg text-amber-50 placeholder-amber-500/30 outline-none transition focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/30"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-amber-500/50 group-hover:text-amber-500 transition-colors">
                  <i className="fa-solid fa-magnifying-glass" />
                </span>
              </div>
            </div>

            <div className="md:col-span-4">
              <label className="block text-sm font-divine tracking-[0.25em] uppercase text-amber-500/80 mb-2">
                Meaning language
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setMeaningLang("en")}
                  className={`rounded-xl border px-4 py-3 font-divine tracking-[0.25em] uppercase text-xs transition relative overflow-hidden ${
                    meaningLang === "en"
                      ? "border-amber-500 bg-amber-500/20 text-amber-300 shadow-[0_0_15px_rgba(212,175,55,0.2)]"
                      : "border-amber-500/20 bg-transparent text-amber-500/60 hover:bg-amber-500/10 hover:text-amber-400"
                  }`}
                >
                  English
                </button>
                <button
                  type="button"
                  onClick={() => setMeaningLang("hi")}
                  className={`rounded-xl border px-4 py-3 font-divine tracking-[0.25em] uppercase text-xs transition relative overflow-hidden ${
                    meaningLang === "hi"
                      ? "border-amber-500 bg-amber-500/20 text-amber-300 shadow-[0_0_15px_rgba(212,175,55,0.2)]"
                      : "border-amber-500/20 bg-transparent text-amber-500/60 hover:bg-amber-500/10 hover:text-amber-400"
                  }`}
                >
                   हिन्दी
                </button>
              </div>
            </div>
          </div>

          <div className="mt-5 flex items-center justify-between text-sm text-amber-500/60 font-body px-2">
            <span>
              Verses:{" "}
              <strong className="text-amber-200">{filteredVerses.length}</strong>
              {verses.length !== filteredVerses.length ? (
                <>
                  {" "}
                  (filtered from{" "}
                  <strong className="text-amber-200">{verses.length}</strong>)
                </>
              ) : null}
            </span>
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
          <div className="space-y-4">
            {filteredVerses.map((v, i) => {
              const key = `${v.chapterNumber}.${v.verseNumber}`;
              const isOpen = activeVerseKey === key;
              const full = meaningByKey[key];
              const loadingMeaning = meaningLoadingKey === key;
              const meaning =
                full?.translations?.[meaningLang] ||
                (full?.error ? null : null);

              return (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i > 5 ? 0 : i * 0.05 }}
                  viewport={{ once: true, margin: "100px" }}
                  className={`bg-white/5 rounded-2xl border transition-all duration-300 overflow-hidden ${
                      isOpen 
                      ? "border-amber-500/40 bg-white/10 shadow-[0_0_30px_rgba(212,175,55,0.1)]" 
                      : "border-amber-500/10 hover:border-amber-500/30 hover:bg-white/10"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => openVerse(v)}
                    className="w-full text-left px-6 md:px-8 py-6 flex items-start justify-between gap-6"
                  >
                    <div>
                      <p className="text-amber-500 font-divine font-bold tracking-[0.25em] uppercase text-xs mb-2">
                        BG {v.chapterNumber}.{v.verseNumber}
                      </p>
                      <p className="font-hindi text-2xl md:text-3xl leading-relaxed text-amber-50 drop-shadow-sm">
                        {v.textSanskrit}
                      </p>
                      <p className="mt-3 font-body text-amber-200/60 italic text-lg leading-relaxed">
                        {v.transliteration}
                      </p>
                    </div>

                    <div className="shrink-0 flex flex-col items-end gap-3 z-10">
                      <span className={`text-amber-300 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
                        <i className="fa-solid fa-chevron-down" />
                      </span>
                      <span className="rounded-xl border border-amber-500/20 bg-amber-900/20 px-3 py-2 text-[10px] font-divine tracking-[0.35em] uppercase text-amber-500/80">
                        meaning
                      </span>
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="px-6 md:px-8 pb-8 relative">
                                <div className="h-px w-full bg-gradient-to-r from-transparent via-amber-500/30 to-transparent mb-6" />

                                {loadingMeaning ? (
                                    <div className="font-body text-amber-500/50 flex py-4 gap-2 items-center">
                                         <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-amber-500"></div>
                                        Fetching deep meaning...
                                    </div>
                                ) : full?.error ? (
                                    <div className="font-body text-red-300 bg-red-900/20 border border-red-500/30 rounded-xl px-4 py-3">
                                    {full.error}
                                    </div>
                                ) : meaning ? (
                                    <div className="animate-fadeIn">
                                        <p className="font-body text-lg md:text-xl text-amber-50 leading-relaxed border-l-2 border-amber-500/50 pl-6 py-1">
                                            {meaning}
                                        </p>
                                        <div className="mt-6 flex flex-wrap items-center gap-3">
                                            <button
                                            type="button"
                                            onClick={() =>
                                                copyText(
                                                `BG ${v.chapterNumber}.${v.verseNumber}\n\n${v.textSanskrit}\n\n${meaning}`,
                                                )
                                            }
                                            className="rounded-xl border border-amber-500/30 bg-amber-900/10 px-4 py-2 font-divine tracking-[0.25em] uppercase text-xs text-amber-400 hover:bg-amber-500/20 hover:text-amber-200 transition"
                                            >
                                            Copy Verse
                                            </button>
                                            <span className="text-amber-500/40 font-body text-sm italic">
                                            (More commentaries coming soon)
                                            </span>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="font-body text-amber-500/50">
                                    Meaning not available.
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}

            {!loading && filteredVerses.length === 0 ? (
              <div className="text-center text-amber-500/50 font-body py-10 text-xl">
                No verses match your search.
              </div>
            ) : null}
          </div>
        )}
      </section>
    </div>
  );
};

export default ChapterReader;
