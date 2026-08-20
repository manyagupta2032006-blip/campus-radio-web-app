import React, { useState } from 'react';
import { FiCalendar, FiMapPin, FiClock, FiCheckCircle, FiShare2, FiTag } from 'react-icons/fi';
import { campusEvents } from '../data/radioData';

const categories = ["All Events", "Mega Cultural Fest", "Auditions", "Live Music", "Band Contest"];

const EventsPage = () => {
  const [selectedCat, setSelectedCat] = useState("All Events");
  const [registeredEvents, setRegisteredEvents] = useState({});

  const handleRegister = (id) => {
    setRegisteredEvents(prev => ({
      ...prev,
      [id]: true
    }));
  };

  const filteredEvents = selectedCat === "All Events"
    ? campusEvents
    : campusEvents.filter(e => e.category === selectedCat);

  return (
    <div className="flex-1 py-10 sm:py-16 bg-[#0c0c14] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-950/60 border border-purple-500/20 text-xs font-bold text-[#c4b5fd] mb-3">
            <FiCalendar />
            <span>CAMPUS EVENT RADAR</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white font-display mb-4">
            Radio Events & College Fests
          </h1>
          <p className="text-sm sm:text-base text-gray-400">
            Live broadcasts, RJ auditions, battle of bands, and outdoor acoustic jams hosted and covered by PCTE Campus Radio 98.4 FM.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-3 mb-12 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCat(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition cursor-pointer ${
                selectedCat === cat
                  ? 'bg-[#c4b5fd] text-[#18112e] shadow'
                  : 'bg-[#151422] text-gray-400 hover:text-white hover:bg-[#1c1b2c]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {filteredEvents.map((evt) => {
            const isReg = registeredEvents[evt.id];

            return (
              <div
                key={evt.id}
                className="rounded-3xl bg-[#141320] border border-white/8 hover:border-purple-500/30 p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="px-3 py-1 rounded-full text-[10px] font-extrabold uppercase bg-purple-900/30 text-purple-300 border border-purple-500/20">
                      {evt.category}
                    </span>
                    <span className="text-[11px] font-bold text-amber-400 bg-amber-950/40 px-2.5 py-0.5 rounded-md border border-amber-500/20">
                      {evt.tag}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                    {evt.title}
                  </h3>

                  <p className="text-sm text-gray-400 leading-relaxed mb-6">
                    {evt.description}
                  </p>

                  <div className="space-y-2 text-xs text-gray-300 pb-4">
                    <div className="flex items-center gap-2">
                      <FiCalendar className="text-purple-400" />
                      <span className="font-semibold text-white">{evt.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FiMapPin className="text-purple-400" />
                      <span>{evt.venue}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="text-xs text-emerald-400 font-semibold">
                    {evt.badge}
                  </span>

                  <button
                    onClick={() => handleRegister(evt.id)}
                    className={`px-5 py-2.5 rounded-xl text-xs font-bold transition cursor-pointer flex items-center gap-2 ${
                      isReg
                        ? 'bg-emerald-950/60 text-emerald-300 border border-emerald-500/40'
                        : 'bg-[#c4b5fd] text-[#18112e] hover:bg-[#b8a5fc] shadow'
                    }`}
                  >
                    {isReg ? <FiCheckCircle /> : <FiTag />}
                    <span>{isReg ? 'Pass Confirmed' : 'Get Event Pass'}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};

export default EventsPage;
