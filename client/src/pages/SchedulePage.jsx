import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiClock, FiCalendar, FiBell, FiCheck, FiDownload, FiRadio, FiFilter } from 'react-icons/fi';
import { weeklySchedule } from '../data/radioData';
import { useAudio } from '../context/AudioContext';

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const categories = ["All", "Music", "Talk", "News", "Hits", "Late Night"];

const SchedulePage = () => {
  const [selectedDay, setSelectedDay] = useState("Monday");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [reminders, setReminders] = useState({});
  const { isPlaying, togglePlay } = useAudio();

  const toggleReminder = (key) => {
    setReminders(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const scheduleForDay = (weeklySchedule[selectedDay] || []).filter(item => {
    if (selectedCategory === "All") return true;
    return item.category === selectedCategory || item.tag.toLowerCase().includes(selectedCategory.toLowerCase());
  });

  return (
    <div className="flex-1 py-10 sm:py-16 bg-[#0c0c14] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-950/60 border border-purple-500/20 text-xs font-bold text-[#c4b5fd] mb-3">
              <FiCalendar />
              <span>PROGRAM GUIDE • 98.4 FM</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-white font-display">
              Weekly Broadcast Schedule
            </h1>
            <p className="text-sm text-gray-400 mt-2 max-w-xl">
              Plan your campus listening routine. Browse through daily lineups, set show alerts, and tune in live on air.
            </p>
          </div>

          <button
            onClick={() => alert("Schedule downloaded as PDF!")}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white text-xs font-bold border border-white/10 transition cursor-pointer w-fit"
          >
            <FiDownload />
            <span>Download Timetable PDF</span>
          </button>
        </div>

        {/* Day Switcher Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 scrollbar-none">
          {days.map((day) => (
            <button
              key={day}
              onClick={() => setSelectedDay(day)}
              className={`px-5 py-2.5 rounded-2xl text-xs font-bold whitespace-nowrap transition cursor-pointer ${
                selectedDay === day
                  ? 'bg-[#c4b5fd] text-[#18112e] shadow-md shadow-purple-950/50 scale-[1.02]'
                  : 'bg-[#151422] text-gray-400 hover:text-white hover:bg-[#1c1b2c]'
              }`}
            >
              {day}
            </button>
          ))}
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-2 scrollbar-none">
          <span className="text-xs font-bold text-gray-500 flex items-center gap-1 mr-2">
            <FiFilter /> Filter:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-xl text-[11px] font-semibold transition cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-purple-900/50 text-[#c4b5fd] border border-purple-500/30'
                  : 'bg-white/5 text-gray-400 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Schedule Timeline List */}
        <div className="space-y-4 mb-16">
          {scheduleForDay.map((item, idx) => {
            const reminderKey = `${selectedDay}-${idx}`;
            const hasReminder = reminders[reminderKey];

            return (
              <div
                key={idx}
                className={`rounded-3xl p-6 sm:p-7 flex flex-col sm:flex-row sm:items-center justify-between gap-6 transition-all duration-300 ${
                  item.isLive
                    ? 'bg-gradient-to-r from-purple-950/60 via-[#181528] to-[#141320] border border-purple-500/40 shadow-xl'
                    : 'bg-[#141320] border border-white/6 hover:border-white/12 hover:bg-[#181626]'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
                  {/* Time Badge */}
                  <div className="min-w-[170px] flex items-center gap-2.5 text-sm font-bold text-gray-300">
                    <FiClock className={item.isLive ? "text-purple-400 text-base" : "text-gray-500"} />
                    <span>{item.time}</span>
                  </div>

                  {/* Show Information */}
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-lg sm:text-xl font-bold text-white">
                        {item.title}
                      </h3>

                      {item.isLive ? (
                        <span className="flex items-center gap-1.5 px-3 py-0.5 rounded-full text-[10px] font-extrabold uppercase bg-red-500/20 text-red-400 border border-red-500/30 animate-pulse">
                          <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                          LIVE ON AIR NOW
                        </span>
                      ) : (
                        <span className="px-2.5 py-0.5 rounded-md text-[10px] font-semibold bg-white/5 text-gray-400 border border-white/5">
                          {item.tag}
                        </span>
                      )}
                    </div>

                    <p className="text-xs text-gray-400 mt-1">
                      Hosted by <span className="text-purple-300 font-semibold">{item.host}</span> • Transmission: 98.4 FM & Online
                    </p>
                  </div>
                </div>

                {/* Right Action */}
                <div className="flex items-center gap-3 self-end sm:self-center">
                  {item.isLive ? (
                    <Link
                      to="/live"
                      className="px-5 py-2.5 rounded-xl bg-[#c4b5fd] text-[#18112e] text-xs font-bold hover:bg-[#b8a5fc] transition shadow flex items-center gap-2"
                    >
                      <FiRadio />
                      <span>{isPlaying ? 'Listening Live' : 'Tune In Studio'}</span>
                    </Link>
                  ) : (
                    <button
                      onClick={() => toggleReminder(reminderKey)}
                      className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold border transition cursor-pointer ${
                        hasReminder
                          ? 'bg-emerald-950/40 text-emerald-300 border-emerald-500/30'
                          : 'bg-white/5 text-gray-300 border-white/10 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      {hasReminder ? <FiCheck className="text-emerald-400" /> : <FiBell />}
                      <span>{hasReminder ? 'Reminder Scheduled' : 'Set Show Alert'}</span>
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};

export default SchedulePage;
