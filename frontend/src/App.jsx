import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Lenis from "lenis";

// Components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ShlokaCard from "./components/ShlokaCard";
import ChaptersGrid from "./components/ChaptersGrid";
import PopularVerses from "./components/PopularVerses";
import Newsletter from "./components/Newsletter";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import ParticlesBackground from "./components/ParticlesBackground";

// Pages
import Login from "./pages/Login";
import Register from "./pages/Register";
import Chapters from "./pages/Chapters";
import ChapterReader from "./pages/ChapterReader";
import AboutGita from "./pages/AboutGita";
import Quotes from "./pages/Quotes";
import GitaAI from "./pages/GitaAI";

// We create a "Home" component to group all your landing page sections
const Home = () => {
  return (
    <>
      <Hero />
      <div className="space-y-0 relative z-10">
        {" "}
        {/* Controls spacing between sections */}
        <PopularVerses />
        <ShlokaCard />
        <ChaptersGrid />
        <Newsletter />
        <FAQ />
      </div>
    </>
  );
};

function App() {
  useEffect(() => {
      const lenis = new Lenis();

      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);
      
      return () => {
          lenis.destroy();
      }
  }, []);

  const location = useLocation();
  const isGitaAI = location.pathname === "/gita-ai";

  return (
    <div className="min-h-screen bg-deep-bg text-amber-50 selection:bg-saffron selection:text-white flex flex-col relative">
      <ParticlesBackground />
      {/* 1. Header - Always visible on every page */}
      <Navbar />

      {/* 2. Main Content Area */}
      <main className="flex-grow">
        <Routes>
          {/* Landing Page Route */}
          <Route path="/" element={<Home />} />

          {/* Login Page Route */}
          <Route path="/login" element={<Login />} />

          {/* Register Page Route */}
          <Route path="/register" element={<Register />} />

          {/* Chapters Page Route */}
          <Route path="/chapters" element={<Chapters />} />

          {/* Chapter Reader */}
          <Route path="/chapters/:chapterNumber" element={<ChapterReader />} />

          {/* About Gita Page */}
          <Route path="/about" element={<AboutGita />} />

          {/* Quotes Page */}
          <Route path="/quotes" element={<Quotes />} />

          {/* Gita AI Page */}
          <Route path="/gita-ai" element={<GitaAI />} />

          {/* You can add more routes here later (e.g. /chapter/:id) */}
        </Routes>
      </main>

      {/* 3. Footer - Hidden on GitaAI page */}
      {!isGitaAI && <Footer />}
    </div>
  );
}

export default App;
