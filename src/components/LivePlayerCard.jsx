import React, { useState, useRef, useEffect } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';
import { HiUsers } from 'react-icons/hi';
import { FiVolume2, FiVolumeX, FiRadio } from 'react-icons/fi';
import AudioVisualizer from './AudioVisualizer';
import { currentBroadcast } from '../data/radioData';

const LivePlayerCard = ({ isGlobalPlaying, onTogglePlay }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.85);
  const [currentSeconds, setCurrentSeconds] = useState(2712); // 45:12 in seconds
  const audioRef = useRef(null);

  // Sync with global play state if provided
  useEffect(() => {
    if (isGlobalPlaying !== undefined && isGlobalPlaying !== isPlaying) {
      handlePlayPause(isGlobalPlaying);
    }
  }, [isGlobalPlaying]);

  const handlePlayPause = (targetState) => {
    const nextState = targetState !== undefined ? targetState : !isPlaying;
    setIsPlaying(nextState);
    if (onTogglePlay) onTogglePlay(nextState);

    if (audioRef.current) {
      if (nextState) {
        audioRef.current.play().catch((err) => {
          console.warn('Autoplay restriction or audio stream unavailable:', err);
        });
      } else {
        audioRef.current.pause();
      }
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
    }
    setIsMuted(!isMuted);
  };

  const handleVolumeChange = (e) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    if (audioRef.current) {
      audioRef.current.volume = val;
      audioRef.current.muted = val === 0;
    }
    setIsMuted(val === 0);
  };

  // Timer simulation for live stream duration
  useEffect(() => {
    let interval = null;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentSeconds((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const formatTime = (secs) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  return (
    <div className="relative w-full max-w-[480px] group select-none">
      {/* Deep purple ambient glow behind card */}
      <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/30 to-indigo-600/30 rounded-3xl blur-2xl opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>

      {/* Main Glass Card */}
      <div className="relative rounded-3xl border border-white/10 bg-[#15141e]/90 backdrop-blur-xl p-6 sm:p-7 shadow-2xl overflow-hidden">
        {/* Subtle background studio overlay texture */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-15 pointer-events-none mix-blend-luminosity"
          style={{
            backgroundImage: `radial-gradient(circle at 75% 25%, rgba(168, 85, 247, 0.25) 0%, transparent 60%), radial-gradient(circle at 25% 75%, rgba(99, 102, 241, 0.2) 0%, transparent 50%)`
          }}
        />

        {/* Audio Element for Real Radio Stream */}
        <audio
          ref={audioRef}
          src={currentBroadcast.audioStreamUrl}
          preload="none"
        />

        {/* Top Header Row */}
        <div className="relative z-10 flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-[11px] font-bold tracking-widest text-[#f87171] uppercase">
                LIVE NOW
              </span>
            </div>
            <h2 className="text-2xl sm:text-[28px] font-bold text-white tracking-tight leading-none mb-1">
              {currentBroadcast.title}
            </h2>
            <p className="text-sm text-gray-400 font-medium">
              with {currentBroadcast.host}
            </p>
          </div>

          {/* Right listener count pill */}
          <div className="flex items-center gap-1.5 bg-black/40 border border-white/10 px-3 py-1.5 rounded-full text-xs font-semibold text-gray-300 backdrop-blur-md">
            <HiUsers className="text-amber-400 text-sm" />
            <span className="text-white font-bold">{currentBroadcast.listenerCount}</span>
          </div>
        </div>

        {/* Middle Visualizer */}
        <div className="relative z-10 my-4 py-2">
          <AudioVisualizer isPlaying={isPlaying} barCount={16} />
        </div>

        {/* Center Circular Glowing Play/Pause Button */}
        <div className="relative z-10 flex flex-col items-center justify-center my-3">
          <button
            onClick={() => handlePlayPause()}
            aria-label={isPlaying ? "Pause Broadcast" : "Play Broadcast"}
            className="relative flex items-center justify-center w-16 h-16 sm:w-[68px] sm:h-[68px] rounded-full bg-gradient-to-tr from-[#9333ea] via-[#a855f7] to-[#c4b5fd] text-white shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer focus:outline-none focus:ring-4 focus:ring-purple-500/40"
            style={{
              boxShadow: isPlaying 
                ? '0 0 35px 8px rgba(168, 85, 247, 0.5), 0 0 15px 2px rgba(196, 181, 253, 0.6)' 
                : '0 0 25px 3px rgba(168, 85, 247, 0.3)'
            }}
          >
            {isPlaying ? (
              <FaPause className="text-xl sm:text-2xl text-white ml-0" />
            ) : (
              <FaPlay className="text-xl sm:text-2xl text-white ml-1" />
            )}
          </button>
        </div>

        {/* Timestamps Row */}
        <div className="relative z-10 flex items-center justify-between text-xs font-medium text-gray-400 mt-4 mb-2 px-0.5">
          <span>{isPlaying ? formatTime(currentSeconds) : currentBroadcast.currentTime}</span>
          <span>{currentBroadcast.remainingTime}</span>
        </div>

        {/* Bottom Progress Bar matching reference design */}
        <div className="relative z-10 w-full h-[6px] bg-[#272635] rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-[#a78bfa] to-[#c4b5fd] rounded-full transition-all duration-500"
            style={{ width: `${currentBroadcast.progressPercentage}%` }}
          />
        </div>

        {/* Micro Controls Bar (Volume & Stream info) */}
        <div className="relative z-10 flex items-center justify-between mt-4 pt-3 border-t border-white/5 text-[11px] text-gray-400">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-gray-300 font-medium">98.4 FM PCTE Voice</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleMute}
              className="text-gray-400 hover:text-white transition p-1"
              title={isMuted ? "Unmute" : "Mute"}
            >
              {isMuted ? <FiVolumeX className="text-sm" /> : <FiVolume2 className="text-sm" />}
            </button>
            <input
              type="range"
              min="0"
              max="1"
              step="0.05"
              value={isMuted ? 0 : volume}
              onChange={handleVolumeChange}
              className="w-16 h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-400"
              aria-label="Volume slider"
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default LivePlayerCard;
