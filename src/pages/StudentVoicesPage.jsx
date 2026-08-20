import React, { useState } from 'react';
import { FiMusic, FiSend, FiCheckCircle, FiHeart, FiRadio, FiClock, FiUser } from 'react-icons/fi';
import { studentShoutouts as initialShoutouts } from '../data/radioData';

const topRequestedSongs = [
  { rank: 1, title: "Starboy", artist: "The Weeknd", requestsCount: 84 },
  { rank: 2, title: "Until I Found You", artist: "Stephen Sanchez", requestsCount: 72 },
  { rank: 3, title: "Amplifier", artist: "Imran Khan (Remix)", requestsCount: 68 },
  { rank: 4, title: "Viva La Vida", artist: "Coldplay", requestsCount: 59 },
  { rank: 5, title: "Softly", artist: "Karan Aujla", requestsCount: 54 },
];

const StudentVoicesPage = ({ shoutouts = initialShoutouts, onAddShoutout }) => {
  const [localShoutouts, setLocalShoutouts] = useState(shoutouts);
  const [formData, setFormData] = useState({
    name: '',
    department: '',
    songTitle: '',
    artist: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.songTitle) return;

    const newShout = {
      id: `shout-${Date.now()}`,
      author: `${formData.name} (${formData.department || 'PCTE Student'})`,
      message: formData.message || 'Shoutout to the entire PCTE campus!',
      songRequested: `${formData.songTitle} - ${formData.artist || 'Requested Track'}`,
      timeAgo: 'Just now',
      status: 'Up Next in Queue'
    };

    setLocalShoutouts([newShout, ...localShoutouts]);
    if (onAddShoutout) onAddShoutout(newShout);

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', department: '', songTitle: '', artist: '', message: '' });
    }, 2500);
  };

  return (
    <div className="flex-1 py-10 sm:py-16 bg-[#0c0c14] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-950/60 border border-purple-500/20 text-xs font-bold text-[#c4b5fd] mb-3">
            <FiMusic />
            <span>STUDENT BROADCAST PORTAL</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white font-display mb-4">
            Song Requests & Shoutouts
          </h1>
          <p className="text-sm sm:text-base text-gray-400">
            Send live shoutouts to your campus buddies, dedicate birthday anthems, and vote on trending student playlists airing on 98.4 FM.
          </p>
        </div>

        {/* Main 2-Column Grid: Submission Form (7 Cols) + Top Charts (5 Cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          
          {/* Left Column: Direct Song Request Form */}
          <div className="lg:col-span-7 rounded-3xl bg-[#141320] border border-white/8 p-6 sm:p-10">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/5">
              <div className="w-12 h-12 rounded-2xl bg-purple-900/40 text-[#c4b5fd] flex items-center justify-center text-2xl">
                <FiRadio />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-white">Submit a Request to RJ Booth</h2>
                <p className="text-xs text-gray-400">Played live by DJ Sarah during Campus Vibes (4 PM - 6 PM)</p>
              </div>
            </div>

            {submitted ? (
              <div className="py-12 text-center flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-3xl mb-4 animate-bounce">
                  <FiCheckCircle />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Request Received! 🎙️</h3>
                <p className="text-sm text-gray-300 max-w-md">
                  Your song and shoutout are now queued in the studio console. Listen live on 98.4 FM to hear your track played!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Gurpreet Singh"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#1b1a2a] border border-white/10 text-white text-xs focus:outline-none focus:border-purple-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                      Department / Roll No
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. BBA 2nd Year"
                      value={formData.department}
                      onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#1b1a2a] border border-white/10 text-white text-xs focus:outline-none focus:border-purple-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                      Song Title *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Starboy"
                      value={formData.songTitle}
                      onChange={(e) => setFormData({ ...formData, songTitle: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#1b1a2a] border border-white/10 text-white text-xs focus:outline-none focus:border-purple-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                      Artist / Singer
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. The Weeknd"
                      value={formData.artist}
                      onChange={(e) => setFormData({ ...formData, artist: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#1b1a2a] border border-white/10 text-white text-xs focus:outline-none focus:border-purple-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                    Shoutout Dedication Message
                  </label>
                  <textarea
                    rows="3"
                    placeholder="Write a message to dedicate to your friends, batchmates, or hostel crew..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#1b1a2a] border border-white/10 text-white text-xs focus:outline-none focus:border-purple-400 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-[#c4b5fd] hover:bg-[#b8a5fc] text-[#18112e] text-sm font-bold shadow-lg shadow-purple-950/50 flex items-center justify-center gap-2 cursor-pointer transition"
                >
                  <FiSend />
                  <span>Send Request to On-Air DJ</span>
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Top Requested Songs Chart */}
          <div className="lg:col-span-5 rounded-3xl bg-[#141320] border border-white/8 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-white/5 mb-4">
                <h3 className="text-lg font-bold text-white">🔥 Campus Top 5 Requested</h3>
                <span className="text-[11px] text-purple-300 font-bold">This Week</span>
              </div>

              <div className="space-y-3">
                {topRequestedSongs.map((song) => (
                  <div
                    key={song.rank}
                    className="p-3.5 rounded-2xl bg-[#1a1928] border border-white/5 flex items-center justify-between gap-3"
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-lg bg-purple-950/60 text-[#c4b5fd] font-black text-xs flex items-center justify-center">
                        #{song.rank}
                      </span>
                      <div>
                        <h4 className="text-sm font-bold text-white">{song.title}</h4>
                        <p className="text-[11px] text-gray-400">{song.artist}</p>
                      </div>
                    </div>

                    <span className="text-[11px] font-bold text-gray-400 bg-white/5 px-2 py-1 rounded-lg">
                      {song.requestsCount} requests
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 p-4 rounded-2xl bg-purple-950/30 border border-purple-500/20 text-center">
              <p className="text-xs text-gray-300">
                Want to see your favorite song at #1? Submit requests above to climb the leaderboard!
              </p>
            </div>
          </div>

        </div>

        {/* Live Shoutout Ticker Feed */}
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">
            Recent Shoutouts & On-Air Requests
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {localShoutouts.map((shout) => (
              <div
                key={shout.id}
                className="rounded-3xl bg-[#141320] border border-white/8 p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="font-bold text-[#c4b5fd]">{shout.author}</span>
                    <span className="text-gray-500 text-[11px]">{shout.timeAgo}</span>
                  </div>

                  <p className="text-sm text-gray-300 italic mb-4">
                    "{shout.message}"
                  </p>
                </div>

                <div className="pt-3 border-t border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs text-[#fed7aa] font-semibold">
                    <FiMusic className="text-xs" />
                    <span className="truncate max-w-[170px]">{shout.songRequested}</span>
                  </div>

                  <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase ${
                    shout.status === 'Played On Air'
                      ? 'bg-emerald-950/50 text-emerald-300 border border-emerald-500/30'
                      : 'bg-purple-950/50 text-purple-300 border border-purple-500/30'
                  }`}>
                    {shout.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default StudentVoicesPage;
