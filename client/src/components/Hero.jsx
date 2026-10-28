import React from 'react';
import { FaPlay } from 'react-icons/fa';
import { FiRadio, FiCalendar, FiArrowRight } from 'react-icons/fi';
import LivePlayerCard from './LivePlayerCard';

const Hero = ({ isPlaying, onTogglePlay }) => {
  const handleScrollToShows = () => {
    const el = document.getElementById('shows');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="live-player" className="relative pt-10 pb-16 sm:pt-16 sm:pb-24 lg:pt-20 lg:pb-28 overflow-hidden">
      {/* Background Ambient Radial Glows */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-purple-900/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-1/10 w-96 h-96 bg-indigo-900/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Content & Typography */}
          <div className="lg:col-span-7 flex flex-col items-start z-10">
            
            {/* Live Pill Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#1e1d28]/90 border border-white/10 text-xs font-semibold tracking-wider text-gray-300 mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#f87171] animate-pulse" />
              <span className="uppercase text-[11px] font-bold tracking-widest text-gray-300">
                BROADCASTING LIVE FROM CAMPUS
              </span>
            </div>

            {/* Main Headline matching reference */}
            <h1 className="text-4xl sm:text-6xl lg:text-[68px] font-black tracking-tight text-white leading-[1.08] mb-6 font-display">
              <span className="block text-white">Your Campus.</span>
              <span className="block">
                <span className="text-[#c4b5fd]">Your </span>
                <span className="bg-gradient-to-r from-[#fed7aa] via-[#fba888] to-[#f97316] bg-clip-text text-transparent">
                  Voice.
                </span>
              </span>
            </h1>

            {/* Description Subtext matching reference */}
            <p className="text-base sm:text-lg text-gray-400 font-normal leading-relaxed max-w-xl mb-8">
              Tune in to the heartbeat of PCTE. Discover fresh student perspectives, killer playlists, and breaking campus news—all streaming live, 24/7.
            </p>

            {/* CTA Buttons matching reference design */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-5 w-full sm:w-auto">
              
              {/* Primary: Listen Live Button */}
              <button
                onClick={() => onTogglePlay(!isPlaying)}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#c4b5fd] hover:bg-[#b8a5fc] text-[#18112e] text-base font-bold shadow-lg shadow-purple-950/40 hover:shadow-purple-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer"
              >
                <div className="w-5 h-5 rounded-full bg-[#18112e] text-[#c4b5fd] flex items-center justify-center text-[10px] pl-0.5">
                  <FaPlay />
                </div>
                <span>{isPlaying ? 'Pause Stream' : 'Listen Live'}</span>
              </button>

              {/* Secondary: Explore Shows Button */}
              <button
                onClick={handleScrollToShows}
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl bg-[#23222e] hover:bg-[#2c2a3b] border border-white/10 hover:border-white/20 text-white text-base font-semibold transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                Explore Shows
              </button>

            </div>

            {/* Quick Station Stats Ribbon */}
            <div className="mt-10 pt-6 border-t border-white/5 flex items-center gap-6 sm:gap-10 text-xs text-gray-400">
              <div className="flex items-center gap-2">
                <span className="text-white font-bold text-sm">98.4 FM</span>
                <span className="text-gray-500">|</span>
                <span>Campus Airwaves</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-purple-300 font-bold text-sm">24/7</span>
                <span className="text-gray-500">|</span>
                <span>Non-Stop Live</span>
              </div>
              <div className="hidden sm:flex items-center gap-2">
                <span className="text-emerald-400 font-bold text-sm">HD 320k</span>
                <span className="text-gray-500">|</span>
                <span>Crystal Stream</span>
              </div>
            </div>

          </div>

          {/* Right Column: Live Player Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end z-10">
            <LivePlayerCard isGlobalPlaying={isPlaying} onTogglePlay={onTogglePlay} />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
