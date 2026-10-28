import React, { useState } from 'react';
import { FiSearch, FiX, FiRadio, FiUser, FiClock } from 'react-icons/fi';
import { featuredShows, currentBroadcast } from '../data/radioData';

const SearchModal = ({ isOpen, onClose, onTogglePlay }) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const results = query.trim() === '' ? [] : featuredShows.filter(show => 
    show.title.toLowerCase().includes(query.toLowerCase()) ||
    show.host.toLowerCase().includes(query.toLowerCase()) ||
    show.category.toLowerCase().includes(query.toLowerCase()) ||
    show.description.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-xl rounded-3xl bg-[#141320] border border-white/10 p-6 shadow-2xl">
        
        {/* Search Bar Input */}
        <div className="relative flex items-center mb-4">
          <FiSearch className="absolute left-4 text-purple-400 text-xl" />
          <input
            type="text"
            autoFocus
            placeholder="Search shows, hosts, DJs or genres..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full pl-12 pr-10 py-3.5 rounded-2xl bg-[#1d1b2b] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-purple-400 text-base"
          />
          {query ? (
            <button
              onClick={() => setQuery('')}
              className="absolute right-4 text-gray-400 hover:text-white"
            >
              <FiX className="text-lg" />
            </button>
          ) : (
            <button
              onClick={onClose}
              className="absolute right-4 text-gray-400 hover:text-white"
            >
              <FiX className="text-lg" />
            </button>
          )}
        </div>

        {/* Quick Results or Suggestions */}
        {query.trim() === '' ? (
          <div className="py-4">
            <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-3">
              Popular Searches
            </p>
            <div className="flex flex-wrap gap-2">
              {["Campus Vibes", "DJ Sarah", "Tech Talks", "Morning Express", "Hostel Diaries"].map((term) => (
                <button
                  key={term}
                  onClick={() => setQuery(term)}
                  className="px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-xs text-gray-300 transition"
                >
                  {term}
                </button>
              ))}
            </div>
          </div>
        ) : results.length > 0 ? (
          <div className="space-y-2.5 max-h-80 overflow-y-auto pr-1">
            {results.map((show) => (
              <div
                key={show.id}
                onClick={() => {
                  onTogglePlay(true);
                  onClose();
                }}
                className="p-3.5 rounded-2xl bg-[#1a1928] hover:bg-purple-950/40 border border-white/5 hover:border-purple-500/30 flex items-center justify-between cursor-pointer transition"
              >
                <div>
                  <h4 className="text-sm font-bold text-white">{show.title}</h4>
                  <p className="text-xs text-gray-400 flex items-center gap-2 mt-0.5">
                    <span>{show.host}</span>
                    <span>•</span>
                    <span className="text-purple-300">{show.category}</span>
                  </p>
                </div>
                <span className="text-xs font-bold text-purple-300 px-3 py-1 rounded-lg bg-purple-900/30">
                  Tune In
                </span>
              </div>
            ))}
          </div>
        ) : (
          <div className="py-8 text-center text-gray-400 text-sm">
            No radio shows found for "{query}". Try searching for DJ names or show titles.
          </div>
        )}

      </div>
    </div>
  );
};

export default SearchModal;
