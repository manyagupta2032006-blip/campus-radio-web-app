import React, { useState } from 'react';
import { FiClock, FiCalendar, FiBell, FiCheck, FiRadio } from 'react-icons/fi';
import { weeklySchedule } from '../data/radioData';

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

const SchedulePreview = ({ onTogglePlay, isPlaying }) => {
  const [selectedDay, setSelectedDay] = useState("Monday");
  const [reminders, setReminders] = useState({});

  const toggleReminder = (showKey) => {
    setReminders(prev => ({
      ...prev,
      [showKey]: !prev[showKey]
    }));
  };

  const scheduleForDay = weeklySchedule[selectedDay] || [];

  return (
    <section id="schedule" className="relative py-16 sm:py-24 bg-[#0a0910] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#c4b5fd] mb-2">
              TIMETABLE & LINEUP
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
              Broadcast Schedule
            </h2>
          </div>

          {/* Day Selector Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 sm:pb-0 scrollbar-none max-w-full">
            {days.map((day) => (
              <button
                key={day}
                onClick={() => setSelectedDay(day)}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  selectedDay === day
                    ? 'bg-[#c4b5fd] text-[#18112e] shadow-md'
                    : 'bg-[#151420] text-gray-400 hover:text-white hover:bg-[#1f1d2f]'
                }`}
              >
                {day}
              </button>
            ))}
          </div>
        </div>

        {/* Schedule List */}
        <div className="space-y-3.5">
          {scheduleForDay.map((item, idx) => {
            const reminderKey = `${selectedDay}-${idx}`;
            const hasReminder = reminders[reminderKey];

            return (
              <div
                key={idx}
                className={`group relative rounded-2xl p-5 sm:p-6 transition-all duration-300 flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
                  item.isLive
                    ? 'bg-gradient-to-r from-purple-950/50 via-[#191629] to-[#151420] border border-purple-500/40 shadow-xl shadow-purple-950/20'
                    : 'bg-[#13121c] border border-white/5 hover:border-white/10 hover:bg-[#171624]'
                }`}
              >
                {/* Left: Time & Host Info */}
                <div className="flex items-start sm:items-center gap-4 sm:gap-6">
                  {/* Time Badge */}
                  <div className="min-w-[150px] flex items-center gap-2 text-xs font-bold text-gray-300">
                    <FiClock className={item.isLive ? "text-purple-400" : "text-gray-500"} />
                    <span>{item.time}</span>
                  </div>

                  {/* Show Details */}
                  <div>
                    <div className="flex items-center gap-2.5">
                      <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-purple-200 transition-colors">
                        {item.title}
                      </h4>

                      {item.isLive ? (
                        <span className="flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-red-500/20 text-red-400 border border-red-500/30 uppercase animate-pulse">
                          <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                          ON AIR
                        </span>
                      ) : (
                        <span className="px-2.5 py-0.5 rounded-md text-[10px] font-semibold bg-white/5 text-gray-400 border border-white/5">
                          {item.tag}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-gray-400 mt-1">
                      Hosted by <span className="text-gray-300 font-medium">{item.host}</span>
                    </p>
                  </div>
                </div>

                {/* Right Action Button */}
                <div className="flex items-center gap-3 self-end sm:self-center">
                  {item.isLive ? (
                    <button
                      onClick={() => onTogglePlay(!isPlaying)}
                      className="px-4 py-2 rounded-xl bg-[#c4b5fd] text-[#18112e] text-xs font-bold hover:bg-[#b8a5fc] shadow transition cursor-pointer"
                    >
                      {isPlaying ? 'Pause Live' : 'Listen Now'}
                    </button>
                  ) : (
                    <button
                      onClick={() => toggleReminder(reminderKey)}
                      className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold border transition cursor-pointer ${
                        hasReminder
                          ? 'bg-emerald-950/40 text-emerald-300 border-emerald-500/30'
                          : 'bg-white/5 text-gray-300 border-white/10 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      {hasReminder ? <FiCheck className="text-emerald-400" /> : <FiBell />}
                      <span>{hasReminder ? 'Reminder Set' : 'Set Alert'}</span>
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default SchedulePreview;
