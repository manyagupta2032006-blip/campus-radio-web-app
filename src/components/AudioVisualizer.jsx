import React from 'react';

const AudioVisualizer = ({ isPlaying = false, barCount = 14 }) => {
  // Height profiles to create an aesthetic waveform shape similar to the reference design
  const heights = [
    'h-4', 'h-7', 'h-11', 'h-9', 'h-14', 'h-16', 'h-10', 
    'h-16', 'h-12', 'h-14', 'h-8', 'h-12', 'h-6', 'h-4'
  ];

  return (
    <div className="flex items-center justify-center gap-[4px] sm:gap-[5px] h-20 my-2 select-none">
      {Array.from({ length: barCount }).map((_, index) => {
        const heightClass = heights[index % heights.length];
        const animationDelay = `${(index * 0.08) % 0.6}s`;
        const animationDuration = `${0.7 + ((index % 5) * 0.15)}s`;

        return (
          <div
            key={index}
            style={{
              animationDelay: isPlaying ? animationDelay : '0s',
              animationDuration: isPlaying ? animationDuration : '0s',
              transition: 'all 0.3s ease'
            }}
            className={`w-[4px] sm:w-[5px] rounded-full bg-gradient-to-t from-[#8b5cf6] via-[#a78bfa] to-[#e0e7ff] transition-all ${
              isPlaying
                ? `${heightClass} animate-pulse`
                : `${heightClass} opacity-60`
            }`}
          />
        );
      })}
    </div>
  );
};

export default AudioVisualizer;
