import React from 'react';
import { FiRadio, FiMic, FiBell, FiMusic } from 'react-icons/fi';
import { featuresList } from '../data/radioData';

const iconMap = {
  FiRadio: FiRadio,
  FiMic: FiMic,
  FiBell: FiBell,
  FiMusic: FiMusic
};

const FeaturesSection = () => {
  return (
    <section className="relative py-12 sm:py-16 border-t border-white/5 bg-[#0b0a10]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <p className="text-xs font-bold uppercase tracking-widest text-[#c4b5fd] mb-2">
            STATION HIGHLIGHTS
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Broadcasting the College Experience
          </h2>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuresList.map((feat) => {
            const Icon = iconMap[feat.icon] || FiRadio;
            return (
              <div
                key={feat.id}
                className="group relative rounded-2xl bg-[#14131e]/80 border border-white/8 p-6 hover:border-purple-500/30 hover:bg-[#181624] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-950/20"
              >
                {/* Icon Box */}
                <div className="w-12 h-12 rounded-xl bg-purple-900/30 border border-purple-500/20 text-[#c4b5fd] flex items-center justify-center text-2xl mb-4 group-hover:scale-110 group-hover:bg-purple-600/30 transition-all duration-300">
                  <Icon />
                </div>

                {/* Tag */}
                <span className="inline-block px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-md bg-white/5 text-purple-300 mb-2 border border-white/5">
                  {feat.tag}
                </span>

                {/* Title */}
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-200 transition-colors">
                  {feat.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-400 leading-relaxed">
                  {feat.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FeaturesSection;
