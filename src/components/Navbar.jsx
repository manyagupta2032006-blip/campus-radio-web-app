import React, { useState } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { FiSearch, FiMenu, FiX, FiRadio, FiUser, FiBell } from 'react-icons/fi';
import { navLinks } from '../data/radioData';

const Navbar = ({ onOpenSearch, onOpenRequestModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 w-full bg-[#0e0d14]/90 backdrop-blur-md border-b border-white/5 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Left: Brand Logo */}
        <Link 
          to="/" 
          className="flex items-center gap-3.5 group focus:outline-none"
          aria-label="PCTE Campus Radio Home"
        >
          {/* Logo Badge Icon */}
          <div className="w-11 h-11 rounded-lg bg-[#1e1d2c] border border-purple-500/30 flex items-center justify-center shadow-md group-hover:border-purple-400/50 transition-colors duration-200 overflow-hidden p-1.5">
            <img 
              src="/favicon.svg" 
              alt="PCTE Campus Radio Logo" 
              className="w-full h-full object-contain"
            />
          </div>

          {/* Text Title */}
          <div className="flex flex-col leading-tight">
            <span className="text-lg sm:text-[19px] font-bold text-white tracking-tight group-hover:text-purple-100 transition-colors">
              PCTE Campus
            </span>
            <span className="text-lg sm:text-[19px] font-bold text-[#c4b5fd] tracking-tight">
              Radio
            </span>
          </div>
        </Link>

        {/* Center: Desktop Navigation Links using React Router NavLink */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
          {navLinks.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `relative px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  isActive
                    ? 'text-white font-semibold'
                    : 'text-gray-300 hover:text-white'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-[#c4b5fd] rounded-full shadow-[0_0_8px_#c4b5fd]" />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Right: Actions (Search + Login + Mobile Toggle) */}
        <div className="flex items-center gap-3">
          {/* Search Icon Button */}
          <button
            onClick={onOpenSearch}
            aria-label="Search shows, songs and podcasts"
            className="p-2 text-gray-300 hover:text-white hover:bg-white/5 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-purple-400 cursor-pointer"
          >
            <FiSearch className="text-xl" />
          </button>

          {/* Login Button matching reference design */}
          <Link
            to="/login"
            className="hidden sm:inline-flex items-center justify-center px-5 py-2 rounded-xl bg-[#c4b5fd] hover:bg-[#b8a5fc] text-[#18112e] text-sm font-bold shadow-sm transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
          >
            Login
          </Link>

          {/* Mobile Menu Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="md:hidden p-2 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors focus:outline-none"
          >
            {mobileMenuOpen ? <FiX className="text-2xl" /> : <FiMenu className="text-2xl" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#12111b] border-b border-white/10 px-4 pt-3 pb-6 space-y-1.5 animate-fadeIn">
          {navLinks.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                `block px-4 py-2.5 rounded-lg text-base font-medium transition ${
                  isActive
                    ? 'bg-purple-900/40 text-[#c4b5fd] font-semibold border-l-4 border-[#c4b5fd]'
                    : 'text-gray-300 hover:bg-white/5 hover:text-white'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}

          <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
            <Link
              to="/login"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-2.5 rounded-xl bg-[#c4b5fd] text-[#18112e] text-sm font-bold text-center shadow transition"
            >
              Login to Radio Account
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
