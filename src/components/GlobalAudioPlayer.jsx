import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaPlay, FaPause } from 'react-icons/fa';
import { FiVolume2, FiVolumeX, FiRadio, FiMaximize2 } from 'react-icons/fi';
import { useAudio } from '../context/AudioContext';

const GlobalAudioPlayer = () => {
  const {
    isPlaying,
    currentTrack,
    togglePlay,
    volume,
    handleVolumeChange,
    isMuted,
    toggleMute,
    currentTimeSec
  } = useAudio();

  const location = useLocation();

  // If on the /live studio page or home page hero, keep it subtle or show if user wants
  if (!isPlaying && location.pathname === '/live') return null;

  const formatSecs = (sec) => {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#12111d]/95 backdrop-blur-xl border-t border-purple-500/20 px-4 py-3 shadow-[0_-10px_30px_rgba(0,0,0,0.6)]">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        
        {/* Left: Track Details */}
        <div className="flex items-center gap-3.5 min-w-0 max-w-[280px] sm:max-w-xs">
          <div className="relative w-10 h-10 rounded-xl bg-purple-900/40 border border-purple-500/30 flex items-center justify-center text-[#c4b5fd] text-lg shrink-0 overflow-hidden">
            <FiRadio className={isPlaying ? "animate-pulse" : ""} />
            {isPlaying && (
              <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-red-500 animate-ping" />
            )}
          </div>

          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <h4 className="text-sm font-bold text-white truncate leading-tight">
                {currentTrack.title}
              </h4>
              {currentTrack.isLive && (
                <span className="px-1.5 py-0.2 rounded text-[9px] font-extrabold bg-red-500/20 text-red-400 uppercase">
                  LIVE
                </span>
              )}
            </div>
            <p className="text-xs text-gray-400 truncate">
              {currentTrack.host} • 98.4 FM
            </p>
          </div>
        </div>

        {/* Center: Play Controls & Mini Wave */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => togglePlay()}
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gradient-to-tr from-[#9333ea] to-[#c4b5fd] text-white flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition cursor-pointer"
            aria-label={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? <FaPause className="text-sm" /> : <FaPlay className="text-sm ml-0.5" />}
          </button>

          <div className="hidden md:flex items-center gap-1.5 h-6">
            {[6, 12, 18, 14, 8, 16, 22, 10, 14, 6].map((h, i) => (
              <div
                key={i}
                style={{ height: `${h}px` }}
                className={`w-[3px] rounded-full bg-purple-400 transition-all ${
                  isPlaying ? 'animate-pulse' : 'opacity-40'
                }`}
              />
            ))}
          </div>

          <span className="hidden sm:inline-block text-xs font-mono text-gray-400">
            {formatSecs(currentTimeSec)}
          </span>
        </div>

        {/* Right: Volume & Expand to /live */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-2">
            <button
              onClick={toggleMute}
              className="text-gray-400 hover:text-white transition"
              aria-label="Toggle mute"
            >
              {isMuted ? <FiVolumeX className="text-sm" /> : <FiVolume2 className="text-sm" />}
            </button>
            <input
              type="range"
              min="0"
              max="1"
              step="0.05"
              value={isMuted ? 0 : volume}
              onChange={(e) => handleVolumeChange(parseFloat(e.target.value))}
              className="w-16 sm:w-20 h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-400"
              aria-label="Volume slider"
            />
          </div>

          <Link
            to="/live"
            className="p-2 text-gray-400 hover:text-[#c4b5fd] rounded-lg hover:bg-white/5 transition flex items-center gap-1.5 text-xs font-semibold"
            title="Open Live Broadcast Studio"
          >
            <FiMaximize2 className="text-sm" />
            <span className="hidden lg:inline">Studio</span>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default GlobalAudioPlayer;
