import React, { useState } from 'react';
import { FiBell, FiSearch, FiCalendar, FiClock, FiUser, FiShare2, FiAlertCircle } from 'react-icons/fi';
import { campusAnnouncements } from '../data/radioData';

const categories = ["All Notices", "Fest Alert", "Radio Update", "Tech Event", "Sports"];

const AnnouncementsPage = () => {
  const [selectedCat, setSelectedCat] = useState("All Notices");
  const [search, setSearch] = useState("");

  const filteredAnnouncements = campusAnnouncements.filter(item => {
    const matchesCategory = selectedCat === "All Notices" || item.category === selectedCat;
    const matchesSearch = item.title.toLowerCase().includes(search.toLowerCase()) || item.summary.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="flex-1 py-10 sm:py-16 bg-[#0c0c14] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-950/60 border border-purple-500/20 text-xs font-bold text-[#c4b5fd] mb-3">
            <FiBell className="animate-bounce" />
            <span>CAMPUS NEWS DESK</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white font-display mb-4">
            Announcements & Bulletins
          </h1>
          <p className="text-sm sm:text-base text-gray-400">
            Real-time updates, official notices, fest audition schedules, and placement notifications broadcast live on PCTE Campus Radio 98.4 FM.
          </p>
        </div>

        {/* Search & Category Filter */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          <div className="relative w-full md:w-80">
            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search announcements..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-11 pr-4 py-2.5 rounded-2xl bg-[#161524] border border-white/10 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-purple-400"
            />
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCat(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition cursor-pointer ${
                  selectedCat === cat
                    ? 'bg-[#c4b5fd] text-[#18112e] shadow'
                    : 'bg-[#161522] text-gray-400 hover:text-white hover:bg-[#1d1c2e]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Announcements List */}
        <div className="space-y-6 mb-16">
          {filteredAnnouncements.map((ann) => (
            <div
              key={ann.id}
              className="rounded-3xl bg-[#141320] border border-white/8 p-6 sm:p-8 hover:border-purple-500/30 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-[10px] font-extrabold uppercase bg-purple-900/30 text-[#c4b5fd] border border-purple-500/20">
                      {ann.category}
                    </span>
                    {ann.priority === "Urgent" && (
                      <span className="px-2.5 py-0.5 rounded-md text-[10px] font-bold bg-rose-500/20 text-rose-300 border border-rose-500/30 flex items-center gap-1">
                        <FiAlertCircle />
                        <span>URGENT</span>
                      </span>
                    )}
                  </div>
                  <span className="text-xs font-semibold text-gray-400">{ann.date}</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                  {ann.title}
                </h3>

                <p className="text-sm text-gray-300 leading-relaxed max-w-4xl mb-4">
                  {ann.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-gray-400">
                <div className="flex items-center gap-4">
                  <span>Issued by: <strong className="text-gray-300">{ann.author}</strong></span>
                  <span>•</span>
                  <span>Deadline: <strong className="text-purple-300">{ann.deadline}</strong></span>
                </div>

                <button
                  onClick={() => {
                    navigator.clipboard?.writeText(window.location.href);
                    alert("Notice link copied!");
                  }}
                  className="inline-flex items-center gap-1.5 text-xs text-gray-400 hover:text-white transition w-fit cursor-pointer"
                >
                  <FiShare2 />
                  <span>Share Notice</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default AnnouncementsPage;
