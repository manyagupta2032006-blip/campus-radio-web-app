import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaPlay, FaPause, FaStar, FaShareAlt, FaBookmark } from 'react-icons/fa';
import { FiArrowLeft, FiClock, FiUser, FiMic, FiDownload, FiRotateCcw, FiRotateCw } from 'react-icons/fi';
import { podcastsData } from '../data/radioData';
import { useAudio } from '../context/AudioContext';

const PodcastDetailsPage = () => {
  const { id } = useParams();
  const { isPlaying, togglePlay, playShowTrack } = useAudio();
  const [speed, setSpeed] = useState('1x');
  const [isSaved, setIsSaved] = useState(false);

  const podcast = podcastsData.find(p => p.id === id) || podcastsData[0];

  const episodeTimeline = [
    { time: "00:00", title: "Introduction & College Days Recap" },
    { time: "08:15", title: "The First Idea: Building in the PCTE Computer Lab" },
    { time: "19:40", title: "Overcoming Product Failures & Pivot" },
    { time: "32:10", title: "Securing Seed Funding & Scaling" },
    { time: "41:30", title: "Advice for Current PCTE Students" }
  ];

  return (
    <div className="flex-1 py-10 sm:py-16 bg-[#0c0c14] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link */}
        <Link
          to="/podcasts"
          className="inline-flex items-center gap-2 text-xs font-bold text-gray-400 hover:text-white mb-8 transition"
        >
          <FiArrowLeft />
          <span>Back to All Podcasts</span>
        </Link>

        {/* Podcast Hero Banner */}
        <div className="rounded-3xl bg-gradient-to-br from-purple-950/60 via-[#18152a] to-[#12111f] border border-white/10 p-6 sm:p-10 shadow-2xl mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Podcast Meta & Master Player */}
            <div className="lg:col-span-8 space-y-4">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="px-3 py-1 rounded-full text-xs font-extrabold uppercase bg-purple-900/40 text-[#c4b5fd] border border-purple-500/30">
                  {podcast.category}
                </span>
                <span className="text-xs text-gray-400 font-semibold">
                  Episode 18 • {podcast.duration}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-display">
                {podcast.title}
              </h1>

              <p className="text-base text-gray-300 leading-relaxed max-w-2xl">
                Featured Episode: <span className="text-white font-bold">"{podcast.latestEpisode}"</span>
              </p>

              <div className="flex items-center gap-4 text-xs text-gray-400 pt-1">
                <span>Hosted by <strong className="text-purple-300">{podcast.host}</strong></span>
                <span>•</span>
                <span>Guest: <strong className="text-white">{podcast.author}</strong></span>
              </div>

              {/* Audio Player Controls Bar */}
              <div className="pt-6 border-t border-white/10 space-y-4">
                <div className="flex flex-wrap items-center gap-4">
                  <button
                    onClick={() => playShowTrack({ title: podcast.title, host: podcast.host, category: "Podcast" })}
                    className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-[#c4b5fd] text-[#18112e] text-sm font-bold hover:bg-[#b8a5fc] transition cursor-pointer shadow-lg"
                  >
                    <FaPlay className="text-xs" />
                    <span>Play Episode</span>
                  </button>

                  <div className="flex items-center gap-1 bg-white/5 border border-white/10 p-1 rounded-xl text-xs">
                    {['1x', '1.25x', '1.5x', '2x'].map((s) => (
                      <button
                        key={s}
                        onClick={() => setSpeed(s)}
                        className={`px-2.5 py-1 rounded-lg font-bold transition cursor-pointer ${
                          speed === s ? 'bg-purple-900/50 text-[#c4b5fd]' : 'text-gray-400 hover:text-white'
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={() => setIsSaved(!isSaved)}
                    className={`p-3 rounded-xl border transition cursor-pointer ${
                      isSaved ? 'bg-purple-900/40 text-purple-300 border-purple-500/40' : 'bg-white/5 text-gray-300 border-white/10 hover:bg-white/10'
                    }`}
                    title="Bookmark episode"
                  >
                    <FaBookmark className="text-xs" />
                  </button>
                </div>
              </div>

            </div>

            {/* Right: Guest Info Card */}
            <div className="lg:col-span-4 rounded-2xl bg-black/40 border border-white/10 p-6 backdrop-blur-md">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#fed7aa]">
                EPISODE GUEST
              </span>
              <h3 className="text-lg font-bold text-white mt-1">{podcast.author}</h3>
              <p className="text-xs text-purple-300 font-semibold mb-3">Founder, EdTech Labs • PCTE Batch of '21</p>
              <p className="text-xs text-gray-300 leading-relaxed mb-4">
                Karan started his venture during his 3rd year at PCTE. Today, his platform serves over 250,000 active students across North India.
              </p>
              <div className="text-[11px] text-gray-400 pt-3 border-t border-white/10 flex justify-between">
                <span>PCTE Media Cell</span>
                <span className="text-purple-300 font-bold">Studio 2</span>
              </div>
            </div>

          </div>
        </div>

        {/* Timestamps & Key Takeaways Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          
          {/* Timeline (6 Cols) */}
          <div className="lg:col-span-6 rounded-3xl bg-[#141320] border border-white/8 p-6 sm:p-8">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <FiClock className="text-purple-400" />
              <span>Episode Chapters & Timestamps</span>
            </h3>

            <div className="space-y-3">
              {episodeTimeline.map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => playShowTrack({ title: `${podcast.title} - ${item.title}`, host: podcast.host, category: "Podcast" })}
                  className="p-3 rounded-2xl bg-[#1a1928] hover:bg-purple-950/40 border border-white/5 hover:border-purple-500/30 flex items-center justify-between transition cursor-pointer group"
                >
                  <span className="text-xs font-bold text-gray-300 group-hover:text-white">
                    {item.title}
                  </span>
                  <span className="text-xs font-mono font-bold text-purple-300 bg-purple-900/30 px-2.5 py-1 rounded-lg">
                    {item.time}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Show Notes (6 Cols) */}
          <div className="lg:col-span-6 rounded-3xl bg-[#141320] border border-white/8 p-6 sm:p-8 space-y-4">
            <h3 className="text-lg font-bold text-white">Show Notes & Resources</h3>
            <p className="text-xs text-gray-300 leading-relaxed">
              In this episode, we explore how early stage student startups can validate customer demand without burning money on paid ads.
            </p>

            <div className="space-y-2 pt-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-purple-300">Key Takeaways:</h4>
              <ul className="text-xs text-gray-400 space-y-1.5 list-disc pl-4">
                <li>How to leverage college hackathons to build initial MVPs.</li>
                <li>Getting your first 100 organic campus users.</li>
                <li>Pitching to angel investors as an undergraduate student.</li>
                <li>Balancing academic attendance with product sprints.</li>
              </ul>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default PodcastDetailsPage;
