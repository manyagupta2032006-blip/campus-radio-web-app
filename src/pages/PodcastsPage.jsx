import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaPlay, FaStar, FaPodcast } from 'react-icons/fa';
import { FiMic, FiClock, FiHeadphones, FiArrowRight, FiPlusCircle } from 'react-icons/fi';
import { podcastsData } from '../data/radioData';
import { useAudio } from '../context/AudioContext';

const categories = ["All Podcasts", "Entrepreneurship", "Career & Growth", "Culture & Philosophy", "Music Production"];

const PodcastsPage = () => {
  const [selectedCat, setSelectedCat] = useState("All Podcasts");
  const { playShowTrack } = useAudio();

  const filteredPods = selectedCat === "All Podcasts"
    ? podcastsData
    : podcastsData.filter(p => p.category === selectedCat);

  return (
    <div className="flex-1 py-10 sm:py-16 bg-[#0c0c14] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-950/60 border border-purple-500/20 text-xs font-bold text-[#c4b5fd] mb-3">
            <FiMic />
            <span>STUDENT PODCAST NETWORK</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white font-display mb-4">
            Campus Podcasts & Stories
          </h1>
          <p className="text-sm sm:text-base text-gray-400">
            Unfiltered conversations, career breakdowns, placement strategies, and student startup journeys produced in the PCTE media lab.
          </p>
        </div>

        {/* Featured Episode Banner */}
        <div className="rounded-3xl bg-gradient-to-r from-purple-950/50 via-[#181529] to-indigo-950/50 border border-purple-500/30 p-6 sm:p-10 mb-12 shadow-xl flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-bold text-[#fed7aa]">
              <span className="px-2.5 py-0.5 rounded-md bg-amber-900/30 border border-amber-500/30 uppercase">
                Featured Episode
              </span>
              <span>• 45 Mins</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              The Campus Founder Blueprint: Ep. 18
            </h2>

            <p className="text-sm text-gray-300 leading-relaxed">
              "Bootstrapping an EdTech Venture with ₹20,000" — featuring alumni founder Karan Johar sharing his 0-to-1 journey from college lab to angel investment.
            </p>

            <div className="flex items-center gap-4 pt-2">
              <button
                onClick={() => playShowTrack({ title: "The Campus Founder Blueprint Ep. 18", host: "Karan Johar", category: "Podcast" })}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#c4b5fd] text-[#18112e] text-xs font-bold hover:bg-[#b8a5fc] transition cursor-pointer shadow"
              >
                <FaPlay className="text-[10px]" />
                <span>Listen Episode</span>
              </button>

              <Link
                to="/podcasts/pod-1"
                className="text-xs font-bold text-white hover:text-purple-300 transition"
              >
                Show Notes & Transcript →
              </Link>
            </div>
          </div>

          <div className="hidden lg:flex w-36 h-36 rounded-3xl bg-purple-900/40 border border-purple-500/30 items-center justify-center text-5xl text-[#c4b5fd] shrink-0">
            <FaPodcast />
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-10 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCat(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition cursor-pointer ${
                selectedCat === cat
                  ? 'bg-[#c4b5fd] text-[#18112e]'
                  : 'bg-[#151422] text-gray-400 hover:text-white hover:bg-[#1d1b2e]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Podcasts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {filteredPods.map((pod) => (
            <div
              key={pod.id}
              className="rounded-3xl bg-[#141320] border border-white/8 hover:border-purple-500/30 p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full text-[10px] font-extrabold uppercase bg-purple-900/30 text-purple-300 border border-purple-500/20">
                    {pod.category}
                  </span>
                  <div className="flex items-center gap-1 text-xs font-bold text-amber-400 bg-black/40 px-2 py-0.5 rounded-md">
                    <FaStar className="text-[10px]" />
                    <span>{pod.rating}</span>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                  {pod.title}
                </h3>
                <p className="text-xs text-purple-300 font-semibold mb-3">
                  Hosted by {pod.host} • {pod.episodesCount} Episodes
                </p>
                <p className="text-sm text-gray-400 leading-relaxed mb-6">
                  {pod.description}
                </p>
              </div>

              {/* Latest episode snippet */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-gray-500 uppercase font-bold">Latest Episode:</span>
                  <h5 className="text-xs font-bold text-gray-200 truncate max-w-[200px] sm:max-w-xs">
                    {pod.latestEpisode}
                  </h5>
                </div>

                <Link
                  to={`/podcasts/${pod.id}`}
                  className="px-4 py-2 rounded-xl bg-white/5 hover:bg-[#c4b5fd] hover:text-[#18112e] text-xs font-bold text-white border border-white/10 transition"
                >
                  Listen All
                </Link>
              </div>

            </div>
          ))}
        </div>

        {/* Submit Podcast Pitch Card */}
        <div className="rounded-3xl bg-[#151422] border border-white/10 p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Have a Podcast Idea for PCTE Campus Radio?
            </h3>
            <p className="text-xs sm:text-sm text-gray-400">
              Get access to our professional studio microphones, acoustic isolation booth, and post-production editing team.
            </p>
          </div>

          <Link
            to="/login"
            className="px-6 py-3 rounded-xl bg-[#c4b5fd] text-[#18112e] text-xs font-bold hover:bg-[#b8a5fc] transition whitespace-nowrap shadow flex items-center gap-2"
          >
            <FiPlusCircle />
            <span>Pitch Your Podcast</span>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default PodcastsPage;
