import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaPlay, FaStar, FaHeart } from 'react-icons/fa';
import { FiArrowLeft, FiClock, FiUser, FiHeadphones, FiRadio, FiShare2, FiMessageCircle, FiSend } from 'react-icons/fi';
import { featuredShows } from '../data/radioData';
import { useAudio } from '../context/AudioContext';

const ShowDetailsPage = () => {
  const { id } = useParams();
  const { isPlaying, playShowTrack } = useAudio();
  const [activeTab, setActiveTab] = useState('episodes');
  const [reviews, setReviews] = useState([
    { id: 1, name: "Harman Singh (CSE)", rating: 5, comment: "Best show to listen to while working in the coding lab! Great playlist!", date: "2 days ago" },
    { id: 2, name: "Tanvi Sharma (BBA)", rating: 5, comment: "DJ Sarah's energy is unmatched! Always waiting for the 4 PM slot.", date: "1 week ago" }
  ]);
  const [newComment, setNewComment] = useState("");
  const [newRating, setNewRating] = useState(5);

  const show = featuredShows.find(s => s.id === id) || featuredShows[0];

  const handleAddReview = (e) => {
    e.preventDefault();
    if (!newComment.trim()) return;
    setReviews([
      ...reviews,
      {
        id: Date.now(),
        name: "You (Verified Student)",
        rating: newRating,
        comment: newComment.trim(),
        date: "Just now"
      }
    ]);
    setNewComment("");
  };

  return (
    <div className="flex-1 py-10 sm:py-16 bg-[#0c0c14] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back link */}
        <Link
          to="/shows"
          className="inline-flex items-center gap-2 text-xs font-bold text-gray-400 hover:text-white mb-8 transition"
        >
          <FiArrowLeft />
          <span>Back to All Shows</span>
        </Link>

        {/* Hero Show Header */}
        <div className={`relative rounded-3xl bg-gradient-to-br ${show.imageBg} border border-white/10 p-6 sm:p-10 shadow-2xl mb-12 overflow-hidden`}>
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Show Info */}
            <div className="lg:col-span-8 space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3 py-1 rounded-full text-xs font-extrabold uppercase bg-black/40 text-white border border-white/10">
                  {show.category}
                </span>
                <span className="flex items-center gap-1 text-xs font-bold text-amber-400 bg-black/40 px-2.5 py-1 rounded-full border border-white/10">
                  <FaStar className="text-[11px]" />
                  <span>{show.rating} / 5.0</span>
                </span>
                <span className="text-xs text-gray-300 font-semibold">
                  {show.episodesCount} Episodes Aired
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-black text-white font-display">
                {show.title}
              </h1>

              <p className="text-base text-gray-300 max-w-2xl leading-relaxed">
                {show.description}
              </p>

              <div className="flex items-center gap-4 text-xs font-semibold text-purple-200 pt-2">
                <span className="flex items-center gap-1.5">
                  <FiUser />
                  <span>Hosted by {show.host}</span>
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <FiClock />
                  <span>{show.time}</span>
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <button
                  onClick={() => playShowTrack({ id: show.id, title: show.title, host: show.host, category: show.category })}
                  className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-[#c4b5fd] text-[#18112e] text-sm font-bold hover:bg-[#b8a5fc] transition cursor-pointer shadow-lg"
                >
                  <FaPlay className="text-xs" />
                  <span>Play Latest Episode</span>
                </button>

                <button
                  onClick={() => alert("Show bookmarked to your listener library!")}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 text-white text-sm font-semibold hover:bg-white/20 transition border border-white/10 cursor-pointer"
                >
                  <FaHeart className="text-xs text-rose-400" />
                  <span>Follow Show</span>
                </button>
              </div>
            </div>

            {/* Host Profile Box */}
            <div className="lg:col-span-4 rounded-2xl bg-black/40 border border-white/10 p-6 backdrop-blur-md">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#c4b5fd]">
                HOST PROFILE
              </span>
              <h3 className="text-lg font-bold text-white mt-1 mb-2">{show.host}</h3>
              <p className="text-xs text-gray-300 leading-relaxed mb-4">
                {show.hostBio}
              </p>
              <div className="text-[11px] text-gray-400 flex items-center justify-between pt-3 border-t border-white/10">
                <span>PCTE Media Cell</span>
                <span className="text-purple-300 font-bold">98.4 FM Studio 2</span>
              </div>
            </div>

          </div>
        </div>

        {/* Tab Selector (Episodes vs Student Reviews) */}
        <div className="flex items-center gap-4 border-b border-white/10 pb-4 mb-8">
          <button
            onClick={() => setActiveTab('episodes')}
            className={`text-sm font-bold transition cursor-pointer pb-1 ${
              activeTab === 'episodes'
                ? 'text-[#c4b5fd] border-b-2 border-[#c4b5fd]'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            Recent Episodes ({show.episodes?.length || 0})
          </button>

          <button
            onClick={() => setActiveTab('reviews')}
            className={`text-sm font-bold transition cursor-pointer pb-1 ${
              activeTab === 'reviews'
                ? 'text-[#c4b5fd] border-b-2 border-[#c4b5fd]'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            Listener Reviews ({reviews.length})
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === 'episodes' ? (
          <div className="space-y-4">
            {show.episodes?.map((ep) => (
              <div
                key={ep.id}
                className="rounded-2xl bg-[#141320] border border-white/8 p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-purple-500/30 transition"
              >
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => playShowTrack({ id: show.id, title: ep.title, host: show.host, category: show.category })}
                    className="w-11 h-11 rounded-full bg-purple-900/40 text-[#c4b5fd] flex items-center justify-center text-sm shrink-0 hover:bg-[#c4b5fd] hover:text-[#18112e] transition cursor-pointer"
                  >
                    <FaPlay className="ml-0.5" />
                  </button>

                  <div>
                    <h4 className="text-base font-bold text-white">{ep.title}</h4>
                    <p className="text-xs text-gray-400 mt-0.5">
                      Duration: {ep.duration} • Released: {ep.date}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-xs text-gray-400 self-end sm:self-center">
                  <span>{ep.plays} plays</span>
                  <button
                    onClick={() => playShowTrack({ id: show.id, title: ep.title, host: show.host, category: show.category })}
                    className="px-3.5 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-white text-xs font-bold transition cursor-pointer"
                  >
                    Listen Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {reviews.map((rev) => (
                <div key={rev.id} className="rounded-2xl bg-[#141320] border border-white/8 p-5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-bold text-white">{rev.name}</span>
                    <div className="flex text-amber-400 text-xs">
                      {Array.from({ length: rev.rating }).map((_, i) => (
                        <FaStar key={i} />
                      ))}
                    </div>
                  </div>
                  <p className="text-xs text-gray-300 leading-relaxed mb-2">"{rev.comment}"</p>
                  <span className="text-[10px] text-gray-500">{rev.date}</span>
                </div>
              ))}
            </div>

            {/* Leave Review Form */}
            <form onSubmit={handleAddReview} className="rounded-2xl bg-[#151422] border border-white/10 p-6">
              <h4 className="text-base font-bold text-white mb-3">Leave a Show Review</h4>
              <textarea
                rows="3"
                placeholder="Share your thoughts about this radio show with the RJ..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                className="w-full p-3.5 rounded-xl bg-[#1c1b2c] border border-white/10 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-purple-400 mb-3"
              />
              <button
                type="submit"
                className="px-5 py-2.5 rounded-xl bg-[#c4b5fd] text-[#18112e] text-xs font-bold hover:bg-[#b8a5fc] transition cursor-pointer flex items-center gap-2"
              >
                <FiSend />
                <span>Submit Review</span>
              </button>
            </form>
          </div>
        )}

      </div>
    </div>
  );
};

export default ShowDetailsPage;
