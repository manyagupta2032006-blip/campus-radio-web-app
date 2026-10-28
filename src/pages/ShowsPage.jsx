
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaPlay, FaStar } from 'react-icons/fa';
import {
  FiSearch,
  FiClock,
  FiUser,
  FiRadio,
} from 'react-icons/fi';
import { useAudio } from '../context/AudioContext';

const categories = [
  'All Shows',
  'Music & Hits',
  'Morning Buzz',
  'Tech & Career',
  'Unplugged Sessions',
  'Late Night Special',
  'Sports & Fitness',
];

const ShowsPage = () => {
  const [shows, setShows] = useState([]);
  const [selectedCat, setSelectedCat] = useState('All Shows');
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const { playShowTrack } = useAudio();

  useEffect(() => {
    const fetchShows = async () => {
      try {
        const response = await fetch(
          'http://localhost:5000/api/shows'
        );

        if (!response.ok) {
          throw new Error('Failed to fetch shows');
        }

        const data = await response.json();
        setShows(data);
      } catch (err) {
        console.error('Error fetching shows:', err);
        setError(
          'Unable to load shows. Please check that the backend is running.'
        );
      } finally {
        setLoading(false);
      }
    };

    fetchShows();
  }, []);

  const filteredShows = shows.filter((show) => {
    const category = (show.category || '').toLowerCase();
    const title = (show.title || '').toLowerCase();
    const host = (show.host || '').toLowerCase();
    const description = (show.description || '').toLowerCase();

    const selectedCategory = selectedCat.toLowerCase();
    const query = searchQuery.toLowerCase();

    const matchesCategory =
      selectedCat === 'All Shows' ||
      category.includes(selectedCategory) ||
      selectedCategory.includes(category);

    const matchesSearch =
      title.includes(query) ||
      host.includes(query) ||
      description.includes(query);

    return matchesCategory && matchesSearch;
  });

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white">
        Loading radio shows...
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white">
        {error}
      </div>
    );
  }

  return (
    <div className="flex-1 py-10 sm:py-16 bg-[#0c0c14] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-950/60 border border-purple-500/20 text-xs font-bold text-[#c4b5fd] mb-3">
            <FiRadio />
            <span>ORIGINAL CAMPUS PROGRAMMING</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-display mb-4">
            Shows & Radio Series
          </h1>

          <p className="text-sm sm:text-base text-gray-400">
            Tune into student-hosted broadcasts, lively debates,
            late-night confessions, and morning news shows airing
            daily across PCTE campus.
          </p>
        </div>

        {/* Search & Category Filter Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">

          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

            <input
              type="text"
              placeholder="Search show or host..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-2.5 rounded-2xl bg-[#161524] border border-white/10 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-purple-400"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none w-full md:w-auto">
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

        {/* Shows Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredShows.map((show) => (
            <div
              key={show.id}
              className="group rounded-3xl bg-[#141320] border border-white/8 hover:border-purple-500/40 overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl flex flex-col justify-between"
            >
              {/* Card Banner */}
              <div
                className={`relative h-48 bg-gradient-to-br ${show.imageBg || 'from-purple-900 to-indigo-950'} p-6 flex flex-col justify-between`}
              >
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full text-[10px] font-extrabold uppercase bg-black/40 text-white border border-white/10">
                    {show.category}
                  </span>

                  <div className="flex items-center gap-1 text-xs font-bold text-amber-400 bg-black/40 px-2 py-0.5 rounded-md">
                    <FaStar className="text-[10px]" />
                    <span>{show.rating ?? '0.0'}</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-purple-200 transition">
                    {show.title}
                  </h3>

                  <p className="text-xs text-gray-300 flex items-center gap-1.5 mt-1">
                    <FiUser className="text-purple-300" />
                    <span>{show.host}</span>
                  </p>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-purple-300 mb-3">
                    <FiClock />
                    <span>{show.time || 'Schedule to be announced'}</span>
                  </div>

                  <p className="text-sm text-gray-400 leading-relaxed line-clamp-3 mb-6">
                    {show.description || 'More details coming soon.'}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="text-xs text-gray-400">
                    {show.episodesCount ?? 0} Episodes
                  </span>

                  <div className="flex items-center gap-2">
                    {/* Play Show Playlist */}
                    <button
                      type="button"
                      onClick={() =>
                        playShowTrack({
                          id: show.id,
                          title: show.title,
                          host: show.host,
                          category: show.category,
                        })
                      }
                      className="p-2 rounded-xl bg-purple-900/30 text-purple-300 hover:bg-[#c4b5fd] hover:text-[#18112e] transition cursor-pointer"
                      title="Play Show Playlist"
                      aria-label={`Play ${show.title}`}
                    >
                      <FaPlay className="text-xs" />
                    </button>

                    {/* Show Details */}
                    <Link
                      to={`/shows/${show.id}`}
                      className="px-3.5 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-bold text-white border border-white/10 transition"
                    >
                      Details & Episodes
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Search Results */}
        {filteredShows.length === 0 && (
          <div className="text-center py-12 text-gray-400">
            No shows found. Try another search or category.
          </div>
        )}

        {/* RJ Spotlight Card */}
        <div className="rounded-3xl bg-gradient-to-r from-purple-950/40 via-[#181628] to-indigo-950/40 border border-purple-500/20 p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#fed7aa]">
              HOST SPOTLIGHT OF THE MONTH
            </span>

            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              DJ Sarah & The Campus Vibes Crew
            </h3>

            <p className="text-sm text-gray-400 max-w-xl">
              Tune in every weekday from 4 PM to 6 PM for
              high-energy student debates, requested indie tracks,
              and live hostel shoutouts.
            </p>
          </div>

          <Link
            to="/shows/campus-vibes"
            className="px-6 py-3 rounded-xl bg-[#c4b5fd] text-[#18112e] text-sm font-bold hover:bg-[#b8a5fc] transition whitespace-nowrap shadow"
          >
            Explore Campus Vibes
          </Link>
        </div>

      </div>
    </div>
  );
};

export default ShowsPage;
