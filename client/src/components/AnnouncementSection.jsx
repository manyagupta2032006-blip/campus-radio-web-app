import React from 'react';
import { FiBell, FiMessageSquare, FiMusic, FiPlus, FiSend } from 'react-icons/fi';
import { campusAnnouncements } from '../data/radioData';

const AnnouncementSection = ({ shoutouts = [], onOpenRequestModal }) => {
  return (
    <section id="announcements" className="relative py-16 sm:py-24 bg-[#0d0c15] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          
          {/* Left Column: Campus Announcements (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="flex items-center justify-between mb-8">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-[#c4b5fd] mb-1.5">
                  CAMPUS BULLETIN
                </p>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-display">
                  Announcements & News
                </h2>
              </div>

              <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-500/20 text-xs text-purple-300">
                <FiBell className="text-purple-400 animate-bounce" />
                <span>Live Feed</span>
              </div>
            </div>

            <div className="space-y-4">
              {campusAnnouncements.map((ann) => (
                <div
                  key={ann.id}
                  className="rounded-2xl bg-[#14131f] border border-white/6 p-5 sm:p-6 hover:border-purple-500/30 transition-all duration-300"
                >
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="px-2.5 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider bg-purple-900/30 text-[#c4b5fd] border border-purple-500/20">
                      {ann.category}
                    </span>
                    <span className="text-[11px] font-semibold text-gray-500">
                      {ann.date}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-white mb-2">
                    {ann.title}
                  </h3>

                  <p className="text-sm text-gray-400 leading-relaxed mb-3">
                    {ann.summary}
                  </p>

                  <div className="text-xs text-gray-500 font-medium">
                    Issued by <span className="text-gray-300">{ann.author}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Student Shoutouts & Song Request Box (5 Cols) */}
          <div id="shoutouts" className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-8">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-[#fed7aa] mb-1.5">
                    STUDENT VOICES
                  </p>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-display">
                    Recent Shoutouts
                  </h2>
                </div>

                <button
                  onClick={onOpenRequestModal}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#c4b5fd] hover:bg-[#b8a5fc] text-[#18112e] text-xs font-bold transition cursor-pointer"
                >
                  <FiPlus />
                  <span>Request</span>
                </button>
              </div>

              {/* Shoutouts Feed */}
              <div className="space-y-3.5 mb-6">
                {shoutouts.slice(0, 3).map((item) => (
                  <div
                    key={item.id}
                    className="rounded-2xl bg-[#151421] border border-white/6 p-4 sm:p-5 relative"
                  >
                    <div className="flex items-center justify-between text-xs mb-1.5">
                      <span className="font-bold text-purple-300">{item.author}</span>
                      <span className="text-gray-500 text-[11px]">{item.timeAgo}</span>
                    </div>

                    <p className="text-sm text-gray-300 leading-relaxed mb-2.5">
                      "{item.message}"
                    </p>

                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-black/40 text-xs text-[#fed7aa] border border-white/5 font-medium">
                      <FiMusic className="text-[11px]" />
                      <span>{item.songRequested}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Request Card Banner */}
            <div className="rounded-3xl bg-gradient-to-br from-purple-950/40 to-indigo-950/40 border border-purple-500/20 p-6 text-center">
              <h4 className="text-lg font-bold text-white mb-1.5">Want to hear your track next?</h4>
              <p className="text-xs text-gray-400 mb-4">
                Dedicate a song to friends or celebrate a milestone live on air with DJ Sarah.
              </p>
              <button
                onClick={onOpenRequestModal}
                className="w-full py-2.5 rounded-xl bg-[#c4b5fd] hover:bg-[#b8a5fc] text-[#18112e] text-xs font-bold shadow-md transition cursor-pointer flex items-center justify-center gap-2"
              >
                <FiSend />
                <span>Send Shoutout to RJ</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default AnnouncementSection;
