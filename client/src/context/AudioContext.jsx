
import React, {
  createContext,
  useContext,
  useState,
  useRef,
  useEffect,
} from 'react';

import { currentBroadcast } from '../data/radioData';

const AudioContext = createContext();

export const AudioProvider = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [playlist, setPlaylist] = useState([]);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);

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
  const [currentTimeSec, setCurrentTimeSec] = useState(2712);
  const [bitrate, setBitrate] = useState('320kbps HD');

  const audioRef = useRef(null);
  const playlistRef = useRef([]);
  const currentTrackIndexRef = useRef(0);

  const trackInfoRef = useRef({
    host: 'PCTE Host',
    category: 'Radio Show',
  });

  // Initialize the audio player.
  useEffect(() => {
    const audio = new Audio(currentBroadcast.audioStreamUrl);

    audio.volume = volume;
    audio.muted = false;
    audioRef.current = audio;

    return () => {
      audio.pause();
      audio.removeAttribute('src');
      audio.load();
      audioRef.current = null;
    };
    // Audio player is initialized once.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Play a selected track from the playlist.
  const playTrackAtIndex = async (index) => {
    const tracks = playlistRef.current;

    if (index < 0 || index >= tracks.length) {
      setIsPlaying(false);
      return;
    }

    const track = tracks[index];
    const audio = audioRef.current;

    if (!audio) {
      setIsPlaying(false);
      return;
    }

    currentTrackIndexRef.current = index;
    setCurrentTrackIndex(index);

    setCurrentTrack({
      title: track.title,
      host: trackInfoRef.current.host,
      category: trackInfoRef.current.category,
      frequency: '98.4 FM PCTE Voice',
      isLive: false,
      audioUrl: track.audioUrl,
      listenerCount: 248,
    });

    audio.src = track.audioUrl;
    audio.load();

    try {
      await audio.play();
      setIsPlaying(true);
    } catch (error) {
      setIsPlaying(false);
      console.error('Track playback error:', error);
    }
  };

  // Automatically play the next track when the current one ends.
  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    const handleTrackEnded = () => {
      const nextIndex = currentTrackIndexRef.current + 1;

      if (nextIndex < playlistRef.current.length) {
        playTrackAtIndex(nextIndex);
      } else {
        setIsPlaying(false);
      }
    };

    audio.addEventListener('ended', handleTrackEnded);

    return () => {
      audio.removeEventListener('ended', handleTrackEnded);
    };
  }, []);

  // Load a show's tracks from the backend.
  const playShowTrack = async (trackInfo) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/shows/${encodeURIComponent(
          trackInfo.id
        )}/tracks`
      );

      if (!response.ok) {
        throw new Error("Could not load this show's playlist.");
      }

      const tracks = await response.json();

      if (!Array.isArray(tracks) || tracks.length === 0) {
        if (audioRef.current) {
          audioRef.current.pause();
        }

        playlistRef.current = [];
        currentTrackIndexRef.current = 0;

        setPlaylist([]);
        setCurrentTrackIndex(0);
        setIsPlaying(false);

        alert('No songs have been added to this show yet.');
        return;
      }

      playlistRef.current = tracks;
      currentTrackIndexRef.current = 0;

      trackInfoRef.current = {
        host: trackInfo.host || 'PCTE Host',
        category: trackInfo.category || 'Radio Show',
      };

      setPlaylist(tracks);

      await playTrackAtIndex(0);
    } catch (error) {
      setIsPlaying(false);
      console.error('Playlist playback error:', error);

      alert(
        'Could not load the playlist. Please check the backend and audio URL.'
      );
    }
  };

  // Play or pause the current audio.
  const togglePlay = async (explicitState) => {
    const audio = audioRef.current;

    if (!audio) return;

    const nextState =
      explicitState !== undefined ? explicitState : !isPlaying;

    if (nextState) {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch (error) {
        setIsPlaying(false);
        console.error('Audio playback error:', error);
      }
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  // Change volume.
  const handleVolumeChange = (newVol) => {
    const safeVolume = Math.max(0, Math.min(1, Number(newVol)));
    setVolume(safeVolume);

    if (audioRef.current) {
      audioRef.current.volume = safeVolume;
      audioRef.current.muted = safeVolume === 0;
    }

    setIsMuted(safeVolume === 0);
  };

  // Mute or unmute audio.
  const toggleMute = () => {
    const nextMuted = !isMuted;

    if (audioRef.current) {
      audioRef.current.muted = nextMuted;
    }

    setIsMuted(nextMuted);
  };

  // Update the displayed playback time while audio is playing.
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentTimeSec((prev) => prev + 1);
    }, 1000);

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
        playlist,
        currentTrackIndex,
      }}
    >
      {children}
    </AudioContext.Provider>
  );
};

export const useAudio = () => useContext(AudioContext);
