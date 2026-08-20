import React from 'react';
import { Link } from 'react-router-dom';
import { FaPlay } from 'react-icons/fa';
import { FiArrowRight, FiRadio, FiMic, FiMusic, FiCalendar, FiUsers } from 'react-icons/fi';
import LivePlayerCard from '../components/LivePlayerCard';
import FeaturesSection from '../components/FeaturesSection';
import { featuredShows, weeklySchedule, campusAnnouncements, studentShoutouts } from '../data/radioData';
import { useAudio } from '../context/AudioContext';

const HomePage = ({ onOpenRequestModal }) => {
  const { isPlaying, togglePlay, playShowTrack } = useAudio();

  return (
    <div className="flex-1">
      {/* 1. Hero Section matching primary reference */}
      <section className="relative pt-8 pb-16 sm:pt-14 sm:pb-24 lg:pt-20 lg:pb-28 overflow-hidden">
        {/* Ambient Glows */}
        <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-purple-900/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/3 right-1/10 w-96 h-96 bg-indigo-900/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Headline & CTAs */}
            <div className="lg:col-span-7 flex flex-col items-start z-10">
              
              {/* Live Pill Badge */}
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#1e1d28]/90 border border-white/10 text-xs font-semibold tracking-wider text-gray-300 mb-6 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#f87171] animate-pulse" />
                <span className="uppercase text-[11px] font-bold tracking-widest text-gray-300">
                  BROADCASTING LIVE FROM CAMPUS
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-6xl lg:text-[68px] font-black tracking-tight text-white leading-[1.08] mb-6 font-display">
                <span className="block text-white">Your Campus.</span>
                <span className="block">
                  <span className="text-[#c4b5fd]">Your </span>
                  <span className="bg-gradient-to-r from-[#fed7aa] via-[#fba888] to-[#f97316] bg-clip-text text-transparent">
                    Voice.
                  </span>
                </span>
              </h1>

              {/* Subtext */}
              <p className="text-base sm:text-lg text-gray-400 font-normal leading-relaxed max-w-xl mb-8">
                Tune in to the heartbeat of PCTE. Discover fresh student perspectives, killer playlists, and breaking campus news—all streaming live, 24/7.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-4 sm:gap-5 w-full sm:w-auto">
                <button
                  onClick={() => togglePlay()}
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#c4b5fd] hover:bg-[#b8a5fc] text-[#18112e] text-base font-bold shadow-lg shadow-purple-950/40 hover:shadow-purple-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer"
                >
                  <div className="w-5 h-5 rounded-full bg-[#18112e] text-[#c4b5fd] flex items-center justify-center text-[10px] pl-0.5">
                    <FaPlay />
                  </div>
                  <span>{isPlaying ? 'Pause Stream' : 'Listen Live'}</span>
                </button>

                <Link
                  to="/shows"
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl bg-[#23222e] hover:bg-[#2c2a3b] border border-white/10 hover:border-white/20 text-white text-base font-semibold transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                >
                  Explore Shows
                </Link>
              </div>

              {/* Stats Ribbon */}
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
              <LivePlayerCard />
            </div>

          </div>
        </div>
      </section>

      {/* 2. Station Highlights */}
      <FeaturesSection />

      {/* 3. Shows Spotlight Preview */}
      <section className="py-16 sm:py-24 bg-[#0e0d14]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-[#c4b5fd] mb-2">
                FEATURED PROGRAMMING
              </p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
                Top Shows on Air
              </h2>
            </div>
            <Link
              to="/shows"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#c4b5fd] hover:text-white transition"
            >
              <span>View All Shows</span>
              <FiArrowRight />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredShows.slice(0, 3).map((show) => (
              <div
                key={show.id}
                className="group rounded-3xl bg-[#15141f] border border-white/8 hover:border-purple-500/30 overflow-hidden transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
              >
                <div className="relative h-44 w-full overflow-hidden">
                  <img 
                    src={show.image} 
                    alt={show.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#15141f] via-black/20 to-black/50 p-4 flex flex-col justify-between">
                    <span className="px-3 py-1 rounded-full text-[10px] font-extrabold uppercase bg-black/60 backdrop-blur-md text-white w-fit border border-white/10">
                      {show.category}
                    </span>
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-purple-200 transition">
                        {show.title}
                      </h3>
                      <p className="text-xs text-gray-300 mt-0.5">{show.host}</p>
                    </div>
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <p className="text-xs text-gray-400 line-clamp-2 mb-4">
                    {show.description}
                  </p>
                  <div className="flex items-center justify-between pt-3 border-t border-white/5">
                    <span className="text-xs font-semibold text-purple-300">{show.time}</span>
                    <Link
                      to={`/shows/${show.id}`}
                      className="text-xs font-bold text-white hover:text-purple-300 transition"
                    >
                      Episodes →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Schedule & Announcements Ribbon */}
      <section className="py-16 bg-[#0a0910] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left box: Schedule CTA */}
            <div className="lg:col-span-6 rounded-3xl bg-gradient-to-br from-[#161426] to-[#12111c] border border-white/8 p-8 flex flex-col justify-between">
              <div>
                <span className="px-3 py-1 rounded-full text-[10px] font-extrabold uppercase bg-purple-900/30 text-purple-300 border border-purple-500/20">
                  TIMETABLE
                </span>
                <h3 className="text-2xl font-bold text-white mt-4 mb-2">
                  Never Miss Your Favorite Radio Show
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed mb-6">
                  Check out the full Monday to Sunday weekly broadcast schedule and set real-time notifications for live DJ sets and guest talks.
                </p>
              </div>

              <Link
                to="/schedule"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#c4b5fd] text-[#18112e] text-sm font-bold hover:bg-[#b8a5fc] transition w-fit"
              >
                <FiCalendar />
                <span>View Full Schedule</span>
              </Link>
            </div>

            {/* Right box: Student Voices CTA */}
            <div className="lg:col-span-6 rounded-3xl bg-gradient-to-br from-[#181424] to-[#12111c] border border-white/8 p-8 flex flex-col justify-between">
              <div>
                <span className="px-3 py-1 rounded-full text-[10px] font-extrabold uppercase bg-amber-900/30 text-[#fed7aa] border border-amber-500/20">
                  STUDENT PORTAL
                </span>
                <h3 className="text-2xl font-bold text-white mt-4 mb-2">
                  Have a Song Request or Campus Shoutout?
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed mb-6">
                  Dedicate your favorite tracks, celebrate hostel birthdays, and share announcements live on 98.4 FM during on-air student hours.
                </p>
              </div>

              <Link
                to="/student-voices"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white text-sm font-bold border border-white/10 transition w-fit"
              >
                <FiMic />
                <span>Request Songs & Shoutouts</span>
              </Link>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default HomePage;
