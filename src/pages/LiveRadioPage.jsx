import React, { useState } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';
import { FiRadio, FiVolume2, FiVolumeX, FiUsers, FiClock, FiShare2, FiHeart, FiSliders, FiSend, FiMessageSquare } from 'react-icons/fi';
import AudioVisualizer from '../components/AudioVisualizer';
import { currentBroadcast, studentShoutouts } from '../data/radioData';
import { useAudio } from '../context/AudioContext';

const LiveRadioPage = ({ onOpenRequestModal }) => {
  const {
    isPlaying,
    togglePlay,
    volume,
    handleVolumeChange,
    isMuted,
    toggleMute,
    currentTimeSec,
    bitrate,
    setBitrate
  } = useAudio();

  const [likes, setLikes] = useState(384);
  const [hasLiked, setHasLiked] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    { id: 1, user: "Rohan_CSE", text: "Loving this playlist DJ Sarah!! 🔥", time: "4:42 PM" },
    { id: 2, user: "Ananya_BBA", text: "Can we play until I found you next please? 🎶", time: "4:44 PM" },
    { id: 3, user: "Hostel_C_Boys", text: "Loud in the common room! 📻", time: "4:45 PM" },
  ]);
  const [newChat, setNewChat] = useState("");

  const handleLike = () => {
    if (!hasLiked) {
      setLikes(likes + 1);
      setHasLiked(true);
    } else {
      setLikes(likes - 1);
      setHasLiked(false);
    }
  };

  const handleSendChat = (e) => {
    e.preventDefault();
    if (!newChat.trim()) return;
    setChatMessages([
      ...chatMessages,
      {
        id: Date.now(),
        user: "You (Student)",
        text: newChat.trim(),
        time: "Just now"
      }
    ]);
    setNewChat("");
  };

  const formatSecs = (sec) => {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  return (
    <div className="flex-1 py-10 sm:py-16 bg-[#0c0b14] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2.5 mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping" />
              <span className="text-xs font-bold uppercase tracking-widest text-red-400">
                LIVE ON AIR • 98.4 FM PCTE VOICE
              </span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-white font-display">
              Live Broadcast Studio
            </h1>
          </div>

          {/* Studio Meta Badges */}
          <div className="flex items-center gap-3">
            <span className="px-3.5 py-1.5 rounded-xl bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs font-semibold flex items-center gap-2">
              <FiRadio className="text-purple-400" />
              <span>Studio 2 (Master Wing)</span>
            </span>

            <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-black/40 border border-white/10 text-xs font-bold text-gray-300">
              <FiUsers className="text-amber-400" />
              <span>{currentBroadcast.listenerCount} Active Listeners</span>
            </div>
          </div>
        </div>

        {/* Studio Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Big Master Player & Audio Visualizer (8 Cols) */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Master Glass Studio Console */}
            <div className="relative rounded-3xl bg-[#151422]/90 border border-white/10 p-6 sm:p-10 shadow-2xl backdrop-blur-xl overflow-hidden">
              
              {/* Studio Backdrop Glow */}
              <div className="absolute -top-24 -right-24 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />

              {/* Show & Host Info */}
              <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/5">
                <div className="flex items-center gap-4">
                  <img
                    src={currentBroadcast.hostAvatar}
                    alt={currentBroadcast.host}
                    className="w-16 h-16 rounded-2xl border border-purple-500/30 object-cover shadow-lg shrink-0"
                  />
                  <div>
                    <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#f87171]">
                      CURRENTLY BROADCASTING
                    </span>
                    <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mt-0.5">
                      {currentBroadcast.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-gray-400 mt-1">
                      Hosted by <span className="text-purple-300 font-semibold">{currentBroadcast.host}</span> • {currentBroadcast.category}
                    </p>
                  </div>
                </div>

                {/* Like & Share Action Buttons */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleLike}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold border transition cursor-pointer ${
                      hasLiked
                        ? 'bg-rose-500/20 text-rose-300 border-rose-500/40'
                        : 'bg-white/5 text-gray-300 border-white/10 hover:bg-white/10'
                    }`}
                  >
                    <FiHeart className={hasLiked ? "fill-rose-400 text-rose-400" : ""} />
                    <span>{likes}</span>
                  </button>

                  <button
                    onClick={() => {
                      navigator.clipboard?.writeText(window.location.href);
                      alert("Station link copied to clipboard!");
                    }}
                    className="p-2.5 rounded-xl bg-white/5 text-gray-300 border border-white/10 hover:bg-white/10 transition cursor-pointer"
                    title="Share Live Stream"
                  >
                    <FiShare2 className="text-base" />
                  </button>
                </div>
              </div>

              {/* Central Big Waveform Visualizer */}
              <div className="relative z-10 my-8 py-4 flex flex-col items-center justify-center">
                <AudioVisualizer isPlaying={isPlaying} barCount={24} />
                
                <p className="text-xs text-gray-500 font-mono mt-3">
                  {isPlaying ? '••• STREAMING LIVE AUDIO SIGNAL •••' : 'STREAM PAUSED • CLICK PLAY TO LISTEN'}
                </p>
              </div>

              {/* Master Play Controls & Progress */}
              <div className="relative z-10 space-y-6">
                
                {/* Center Circular Master Button */}
                <div className="flex items-center justify-center">
                  <button
                    onClick={() => togglePlay()}
                    className="w-20 h-20 rounded-full bg-gradient-to-tr from-[#9333ea] via-[#a855f7] to-[#c4b5fd] text-white flex items-center justify-center text-3xl shadow-2xl hover:scale-105 active:scale-95 transition cursor-pointer"
                    style={{
                      boxShadow: isPlaying ? '0 0 45px 10px rgba(168, 85, 247, 0.5)' : 'none'
                    }}
                    aria-label={isPlaying ? "Pause Stream" : "Play Stream"}
                  >
                    {isPlaying ? <FaPause className="text-2xl" /> : <FaPlay className="text-2xl ml-1" />}
                  </button>
                </div>

                {/* Progress bar */}
                <div>
                  <div className="flex items-center justify-between text-xs font-semibold text-gray-400 mb-2">
                    <span>{formatSecs(currentTimeSec)}</span>
                    <span className="text-purple-300">LIVE FEED</span>
                    <span>-14:48</span>
                  </div>
                  <div className="w-full h-2 bg-[#252336] rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-purple-500 to-[#c4b5fd] rounded-full transition-all duration-300"
                      style={{ width: `${currentBroadcast.progressPercentage}%` }}
                    />
                  </div>
                </div>

                {/* Bottom Stream Settings */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/5 text-xs text-gray-400">
                  {/* Bitrate Selector */}
                  <div className="flex items-center gap-2">
                    <FiSliders className="text-purple-400" />
                    <span>Audio Quality:</span>
                    <div className="flex gap-1">
                      {currentBroadcast.bitrates.map((br) => (
                        <button
                          key={br}
                          onClick={() => setBitrate(br)}
                          className={`px-2.5 py-1 rounded-lg text-[11px] font-bold transition cursor-pointer ${
                            bitrate === br
                              ? 'bg-[#c4b5fd] text-[#18112e]'
                              : 'bg-white/5 text-gray-400 hover:text-white'
                          }`}
                        >
                          {br}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Volume Slider */}
                  <div className="flex items-center gap-2.5">
                    <button onClick={toggleMute} className="text-gray-400 hover:text-white transition">
                      {isMuted ? <FiVolumeX className="text-base" /> : <FiVolume2 className="text-base" />}
                    </button>
                    <input
                      type="range"
                      min="0"
                      max="1"
                      step="0.05"
                      value={isMuted ? 0 : volume}
                      onChange={(e) => handleVolumeChange(parseFloat(e.target.value))}
                      className="w-24 h-1.5 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-400"
                    />
                  </div>
                </div>

              </div>

            </div>

            {/* Up Next in Broadcast Queue */}
            <div className="rounded-3xl bg-[#141320] border border-white/8 p-6">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <FiClock className="text-purple-400" />
                <span>Today's Broadcast Queue</span>
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {currentBroadcast.upNext.map((item, i) => (
                  <div key={i} className="p-4 rounded-2xl bg-[#1a1928] border border-white/5">
                    <span className="text-[11px] font-bold text-purple-300">{item.time}</span>
                    <h4 className="text-sm font-bold text-white mt-1 truncate">{item.title}</h4>
                    <p className="text-xs text-gray-400 mt-0.5">{item.host}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Live Chat & Shoutout Stream (4 Cols) */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            
            {/* Live Chat Box */}
            <div className="rounded-3xl bg-[#141320] border border-white/8 p-5 sm:p-6 flex flex-col h-[520px]">
              <div className="flex items-center justify-between pb-3 border-b border-white/5 mb-4">
                <div className="flex items-center gap-2">
                  <FiMessageSquare className="text-purple-400" />
                  <h3 className="text-base font-bold text-white">Live Student Chat</h3>
                </div>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              </div>

              {/* Chat Feed */}
              <div className="flex-1 overflow-y-auto space-y-3 pr-1 scrollbar-thin">
                {chatMessages.map((msg) => (
                  <div key={msg.id} className="p-3 rounded-2xl bg-[#1b1a2a] border border-white/5">
                    <div className="flex items-center justify-between text-[11px] mb-1">
                      <span className="font-bold text-[#c4b5fd]">{msg.user}</span>
                      <span className="text-gray-500">{msg.time}</span>
                    </div>
                    <p className="text-xs text-gray-300">{msg.text}</p>
                  </div>
                ))}
              </div>

              {/* Chat Input Form */}
              <form onSubmit={handleSendChat} className="mt-4 pt-3 border-t border-white/5 flex gap-2">
                <input
                  type="text"
                  placeholder="Drop a comment for RJ..."
                  value={newChat}
                  onChange={(e) => setNewChat(e.target.value)}
                  className="flex-1 px-3.5 py-2 rounded-xl bg-[#1c1b2c] border border-white/10 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-purple-400"
                />
                <button
                  type="submit"
                  className="p-2.5 rounded-xl bg-[#c4b5fd] hover:bg-[#b8a5fc] text-[#18112e] text-xs font-bold transition cursor-pointer"
                  aria-label="Send message"
                >
                  <FiSend />
                </button>
              </form>
            </div>

            {/* Quick Song Request Trigger Card */}
            <div className="rounded-3xl bg-gradient-to-br from-purple-950/50 to-indigo-950/50 border border-purple-500/30 p-6 text-center">
              <h4 className="text-base font-bold text-white mb-1.5">Request a Track on 98.4 FM</h4>
              <p className="text-xs text-gray-400 mb-4">
                Hear your favourite song played live by DJ Sarah in the next 15 minutes!
              </p>
              <button
                onClick={onOpenRequestModal}
                className="w-full py-2.5 rounded-xl bg-[#c4b5fd] text-[#18112e] text-xs font-bold shadow-md hover:bg-[#b8a5fc] transition cursor-pointer"
              >
                Open Song Request Modal
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default LiveRadioPage;
