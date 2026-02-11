import React, { useState, useEffect, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import logo from "../assets/logo.png";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";
  const useSolidNav = isScrolled || !isHome;

  // Effect to handle scroll-based UI changes
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 px-6 py-4 flex justify-between items-center ${
        useSolidNav
          ? "bg-temple/80 backdrop-blur-md border-b border-amber-500/20 shadow-lg shadow-black/20" 
          : "bg-transparent border-b border-transparent"
      }`}
    >
      {/* 1. LOGO & BRAND */}
      <Link to="/" className="flex items-center gap-3 group">
        <div
          className={`p-1 rounded-full overflow-hidden h-10 w-10 flex items-center justify-center transition-all duration-300 ${
            useSolidNav ? "bg-amber-500/20 shadow-inner" : "bg-white/10"
          } group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(212,175,55,0.6)]`}
        >
          <img
            src={logo}
            alt="Bhagavad Gita Logo"
            className="h-full w-full object-contain drop-shadow-md"
          />
        </div>
        <h1
          className={`text-2xl font-bold font-divine tracking-wide transition-colors uppercase ${
            useSolidNav ? "text-amber-100" : "text-white"
          } group-hover:text-divine`}
        >
          Bhagavad Gita
        </h1>
      </Link>

      {/* 2. NAVIGATION LINKS */}
      <div
        className={`hidden md:flex gap-8 font-medium font-divine text-lg transition-colors ${
          useSolidNav ? "text-amber-100/80" : "text-white/80"
        }`}
      >
        {["Chapters", "Quotes", "About", "Gita AI"].map((item) => (
            <Link 
                key={item}
                to={`/${item.toLowerCase().replace(" ", "-")}`} 
                className="relative hover:text-divine transition duration-300 group"
            >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-divine transition-all duration-300 group-hover:w-full"></span>
            </Link>
        ))}
      </div>

      {/* 3. AUTHENTICATION SECTION */}
      <div className="flex items-center gap-6">
        {user ? (
          <div className="flex items-center gap-4">
            <span
              className={`font-divine tracking-wide transition-colors ${
                 "text-divine" 
              }`}
            >
              Namaste, <span className="text-white">{user.name}</span>
            </span>
            <button
              onClick={logout}
              className={`text-xs uppercase font-bold transition-all px-4 py-2 border border-amber-500/30 rounded-full hover:bg-amber-500/20 ${
                useSolidNav
                  ? "text-amber-200"
                  : "text-white"
              }`}
            >
              Logout
            </button>
          </div>
        ) : (
          <Link
            to="/login"
            className="bg-gradient-to-r from-amber-600 to-amber-700 text-white px-6 py-2 rounded-full font-divine font-bold hover:from-amber-500 hover:to-amber-600 transition-all shadow-[0_0_15px_rgba(210,105,63,0.4)] hover:shadow-[0_0_25px_rgba(210,105,63,0.6)] active:scale-95 border border-amber-400/20"
          >
            Sign In
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
