import React from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-temple border-t border-amber-900/30 pt-20 pb-10 mt-auto relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            {/* Brand */}
            <div className="md:col-span-1">
                <div className="flex items-center gap-3 mb-6">
                    <img src={logo} alt="Bgagavad Gita" className="h-12 w-12 object-contain brightness-0 invert opacity-80" />
                    <h3 className="text-2xl font-divine font-bold text-amber-100">Bhagavad Gita</h3>
                </div>
                <p className="text-amber-200/50 font-body mb-6 leading-relaxed">
                    A digital sanctuary to explore the eternal wisdom of Lord Krishna.
                </p>
                <div className="flex gap-4">
                    {['twitter', 'github', 'instagram'].map((social) => (
                        <a key={social} href="#" className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center text-amber-200/60 hover:bg-amber-500 hover:text-white transition-all">
                            <i className={`fa-brands fa-${social}`}></i>
                        </a>
                    ))}
                </div>
            </div>

            {/* Quick Links */}
            <div>
                <h4 className="text-amber-500 font-divine font-bold uppercase tracking-widest mb-6 text-sm">Explore</h4>
                <ul className="space-y-4 font-body text-amber-100/70">
                    <li><Link to="/chapters" className="hover:text-amber-300 transition-colors">Chapters</Link></li>
                    <li><Link to="/quotes" className="hover:text-amber-300 transition-colors">Quotes</Link></li>
                    <li><Link to="/gita-ai" className="hover:text-amber-300 transition-colors">Gita AI</Link></li>
                    <li><Link to="/about" className="hover:text-amber-300 transition-colors">About Project</Link></li>
                </ul>
            </div>

            {/* Legal */}
            <div>
                <h4 className="text-amber-500 font-divine font-bold uppercase tracking-widest mb-6 text-sm">Legal</h4>
                <ul className="space-y-4 font-body text-amber-100/70">
                    <li><a href="#" className="hover:text-amber-300 transition-colors">Privacy Policy</a></li>
                    <li><a href="#" className="hover:text-amber-300 transition-colors">Terms of Service</a></li>
                    <li><a href="#" className="hover:text-amber-300 transition-colors">Cookie Policy</a></li>
                </ul>
            </div>

             {/* Newsletter Mini */}
             <div>
                <h4 className="text-amber-500 font-divine font-bold uppercase tracking-widest mb-6 text-sm">Stay Connected</h4>
                 <p className="text-amber-200/50 font-body mb-4 text-sm">Join our newsletter for daily inspiration.</p>
                 <div className="flex gap-2">
                     <input type="email" placeholder="Email" className="bg-white/5 border border-amber-500/20 text-white px-4 py-2 rounded-lg w-full focus:outline-none focus:border-amber-500/50" />
                     <button className="bg-amber-600 hover:bg-amber-500 text-white px-4 rounded-lg transition-colors">
                         <i className="fa-solid fa-arrow-right"></i>
                     </button>
                 </div>
            </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-amber-200/30 text-sm font-body">
            <p>© 2024 Eternal Wisdom Project. All rights reserved.</p>
            <p>Made with devotion 🙏</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
