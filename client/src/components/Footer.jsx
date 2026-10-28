import React from 'react';
import { Link } from 'react-router-dom';
import { FiRadio, FiMail, FiMapPin, FiPhone } from 'react-icons/fi';
import { FaInstagram, FaYoutube, FaTwitter, FaDiscord } from 'react-icons/fa';

const Footer = ({ onOpenRequestModal }) => {
  return (
    <footer className="relative bg-[#09080e] border-t border-white/8 pt-16 pb-24 sm:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/5">
          
          {/* Col 1: Brand Info (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <Link to="/" className="flex items-center gap-3.5 group">
              <div className="w-10 h-10 rounded-lg bg-[#1e1d2c] border border-purple-500/30 flex items-center justify-center shadow-md p-1.5">
                <img 
                  src="/favicon.svg" 
                  alt="PCTE Campus Radio Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-lg font-bold text-white">PCTE Campus</span>
                <span className="text-lg font-bold text-[#c4b5fd]">Radio</span>
              </div>
            </Link>

            <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
              The official 24/7 college campus broadcast of PCTE Group of Institutes. Giving a platform to student creators, musicians, debaters, and daily campus voices.
            </p>

            <div className="flex items-center gap-3 text-xs text-purple-300 font-semibold pt-1">
              <span className="px-2.5 py-1 rounded-md bg-purple-950/60 border border-purple-500/30">
                Frequency: 98.4 FM
              </span>
              <span className="px-2.5 py-1 rounded-md bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                Live Broadcast
              </span>
            </div>
          </div>

          {/* Col 2: Navigation Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Station</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/live" className="hover:text-purple-300 transition">Live Player</Link></li>
              <li><Link to="/shows" className="hover:text-purple-300 transition">Featured Shows</Link></li>
              <li><Link to="/schedule" className="hover:text-purple-300 transition">Weekly Schedule</Link></li>
              <li><Link to="/podcasts" className="hover:text-purple-300 transition">Student Podcasts</Link></li>
              <li><Link to="/announcements" className="hover:text-purple-300 transition">Campus News</Link></li>
              <li>
                <button 
                  onClick={onOpenRequestModal}
                  className="hover:text-purple-300 transition text-left cursor-pointer"
                >
                  Request a Song
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Student Community (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Community</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/student-voices" className="hover:text-purple-300 transition">Student Voices</Link></li>
              <li><Link to="/events" className="hover:text-purple-300 transition">Events & Fests</Link></li>
              <li><Link to="/login" className="hover:text-purple-300 transition">RJ Auditions</Link></li>
              <li><Link to="/about" className="hover:text-purple-300 transition">About Station</Link></li>
              <li><Link to="/login" className="hover:text-purple-300 transition">Student Login</Link></li>
            </ul>
          </div>

          {/* Col 4: Studio Location & Contact (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Studio Desk</h4>
            <ul className="space-y-2.5 text-xs text-gray-400">
              <li className="flex items-start gap-2">
                <FiMapPin className="text-purple-400 mt-0.5 shrink-0" />
                <span>Media & Radio Studio, Block-B, Campus II, PCTE Institutes, Ludhiana, Punjab</span>
              </li>
              <li className="flex items-center gap-2">
                <FiPhone className="text-purple-400 shrink-0" />
                <span>+91 161 2888500 / Ext: 204</span>
              </li>
              <li className="flex items-center gap-2">
                <FiMail className="text-purple-400 shrink-0" />
                <span>radio@pcte.edu.in</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} PCTE Campus Radio. All rights reserved. Managed by Student Media Cell.</p>
          
          <div className="flex items-center gap-4 text-base text-gray-400">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-purple-300 transition" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="hover:text-purple-300 transition" aria-label="YouTube">
              <FaYoutube />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-purple-300 transition" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="https://discord.com" target="_blank" rel="noreferrer" className="hover:text-purple-300 transition" aria-label="Discord">
              <FaDiscord />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
