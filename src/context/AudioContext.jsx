import React, { createContext, useContext, useState, useRef, useEffect } from 'react';
import { currentBroadcast } from '../data/radioData';

const AudioContext = createContext();

export const AudioProvider = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState({
    title: currentBroadcast.title,
    host: currentBroadcast.host,
    category: currentBroadcast.category,
    frequency: currentBroadcast.frequency,
    isLive: true,
    audioUrl: currentBroadcast.audioStreamUrl,
    listenerCount: currentBroadcast.listenerCount,
  });
  const [volume, setVolume] = useState(0.85);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTimeSec, setCurrentTimeSec] = useState(2712); // 45:12
  const [bitrate, setBitrate] = useState('320kbps HD');
  const audioRef = useRef(null);

  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio(currentTrack.audioUrl);
      audioRef.current.volume = volume;
    }
  }, []);

  const togglePlay = (explicitState) => {
    const nextState = explicitState !== undefined ? explicitState : !isPlaying;
    setIsPlaying(nextState);

    if (audioRef.current) {
      if (nextState) {
        audioRef.current.play().catch((err) => {
          console.warn('Audio play restricted or stream error:', err);
        });
      } else {
        audioRef.current.pause();
      }
    }
  };

  const playShowTrack = (trackInfo) => {
    setCurrentTrack({
      title: trackInfo.title,
      host: trackInfo.host || 'PCTE Host',
      category: trackInfo.category || 'Radio Show',
      frequency: '98.4 FM PCTE Voice',
      isLive: trackInfo.isLive || false,
      audioUrl: trackInfo.audioUrl || currentBroadcast.audioStreamUrl,
      listenerCount: trackInfo.listenerCount || 248
    });

    if (audioRef.current) {
      audioRef.current.src = trackInfo.audioUrl || currentBroadcast.audioStreamUrl;
      audioRef.current.play().catch(console.warn);
    }
    setIsPlaying(true);
  };

  const handleVolumeChange = (newVol) => {
    setVolume(newVol);
    if (audioRef.current) {
      audioRef.current.volume = newVol;
      audioRef.current.muted = newVol === 0;
    }
    setIsMuted(newVol === 0);
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
    }
    setIsMuted(!isMuted);
  };

  // Timer simulation for active playback
  useEffect(() => {
    let interval = null;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentTimeSec((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <AudioContext.Provider
      value={{
        isPlaying,
        currentTrack,
        volume,
        isMuted,
        currentTimeSec,
        bitrate,
        setBitrate,
        togglePlay,
        playShowTrack,
        handleVolumeChange,
        toggleMute,
      }}
    >
      {children}
    </AudioContext.Provider>
  );
};

export const useAudio = () => useContext(AudioContext);
