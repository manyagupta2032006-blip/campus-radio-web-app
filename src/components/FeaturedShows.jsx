import React, { useState } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';
import { FiClock, FiUser, FiHeadphones, FiRadio } from 'react-icons/fi';
import { featuredShows } from '../data/radioData';

const categories = ["All Shows", "Music & Hits", "Morning Buzz", "Tech & Career", "Late Night Special"];

const FeaturedShows = ({ isPlaying, onTogglePlay }) => {
  const [selectedCategory, setSelectedCategory] = useState("All Shows");

  const filteredShows = selectedCategory === "All Shows"
    ? featuredShows
    : featuredShows.filter(show => show.category.toLowerCase().includes(selectedCategory.toLowerCase()) || selectedCategory.toLowerCase().includes(show.category.toLowerCase()));

  return (
    <section id="shows" className="relative py-16 sm:py-24 bg-[#0e0d14]">
      {/* Subtle Glow */}
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-purple-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading & Category Filter Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#c4b5fd]" />
              <p className="text-xs font-bold uppercase tracking-widest text-[#c4b5fd]">
                ON THE AIRWAVES
              </p>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
              Featured Shows & Podcasts
            </h2>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 bg-[#161522] p-1.5 rounded-2xl border border-white/5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#c4b5fd] text-[#18112e] shadow-sm'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Shows Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredShows.map((show) => {
            return (
              <div
                key={show.id}
                className="group relative rounded-3xl bg-[#15141f] border border-white/8 hover:border-purple-500/30 overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-purple-950/30 flex flex-col justify-between"
              >
                {/* Top Card Banner / Media Header */}
                <div className={`relative h-44 w-full bg-gradient-to-br ${show.imageBg} p-5 flex flex-col justify-between overflow-hidden`}>
                  {/* Subtle Grid Pattern Overlay */}
                  <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] opacity-10 pointer-events-none" />

                  {/* Top Badges */}
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full text-[11px] font-extrabold tracking-wider uppercase bg-black/50 backdrop-blur-md text-white border border-white/10">
                      {show.category}
                    </span>

                    {show.isLive ? (
                      <span className="flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase bg-red-500/20 text-red-400 border border-red-500/30 animate-pulse">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                        LIVE NOW
                      </span>
                    ) : (
                      <span className="px-2.5 py-0.5 rounded-md text-[10px] font-bold tracking-wider text-gray-300 bg-white/10 backdrop-blur-sm">
                        {show.badge}
                      </span>
                    )}
                  </div>

                  {/* Show Title in Banner */}
                  <div className="relative z-10">
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-purple-200 transition-colors">
                      {show.title}
                    </h3>
                    <p className="text-xs text-gray-300 font-medium flex items-center gap-1.5 mt-1">
                      <FiUser className="text-purple-300" />
                      {show.host}
                    </p>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Time Slot */}
                    <div className="flex items-center gap-2 text-xs font-semibold text-purple-300 mb-3">
                      <FiClock className="text-sm" />
                      <span>{show.time}</span>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-gray-400 leading-relaxed line-clamp-3 mb-6">
                      {show.description}
                    </p>
                  </div>

                  {/* Bottom Action Footer */}
                  <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-xs text-gray-400">
                      <FiHeadphones className="text-sm text-purple-400" />
                      <span>{show.listeners}</span>
                    </div>

                    <button
                      onClick={() => onTogglePlay(show.isLive ? !isPlaying : true)}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-[#c4b5fd] hover:text-[#18112e] text-xs font-bold text-white border border-white/10 transition-all duration-200 cursor-pointer"
                    >
                      <FaPlay className="text-[10px]" />
                      <span>{show.isLive && isPlaying ? 'Pause Live' : 'Tune In'}</span>
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FeaturedShows;
