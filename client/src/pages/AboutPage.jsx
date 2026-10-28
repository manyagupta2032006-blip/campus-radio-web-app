import React, { useState } from 'react';
import { FiRadio, FiMapPin, FiMail, FiPhone, FiAward, FiUsers, FiCpu, FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { stationTeam, stationFAQs } from '../data/radioData';

const AboutPage = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="flex-1 py-10 sm:py-16 bg-[#0c0c14] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-950/60 border border-purple-500/20 text-xs font-bold text-[#c4b5fd] mb-3">
            <FiRadio />
            <span>ESTABLISHED 2018 • 98.4 FM</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white font-display mb-4">
            About PCTE Campus Radio
          </h1>
          <p className="text-sm sm:text-base text-gray-400">
            The beating pulse of PCTE Group of Institutes. A premier 24/7 student-run campus broadcasting station nurturing tomorrow's audio producers, journalists, and voice artists.
          </p>
        </div>

        {/* 3 Value Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="rounded-3xl bg-[#141320] border border-white/8 p-8 space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-purple-900/40 text-[#c4b5fd] flex items-center justify-center text-2xl mb-4">
              <FiUsers />
            </div>
            <h3 className="text-xl font-bold text-white">100% Student-Driven</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              From on-air hosting and sound mixing to podcast writing and guest management, every show is produced by undergraduate and postgraduate students.
            </p>
          </div>

          <div className="rounded-3xl bg-[#141320] border border-white/8 p-8 space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-purple-900/40 text-[#c4b5fd] flex items-center justify-center text-2xl mb-4">
              <FiCpu />
            </div>
            <h3 className="text-xl font-bold text-white">Broadcast Grade Studio</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Equipped with broadcast consoles, Shure SM7B dynamic mics, acoustic isolation booths, and digital streaming automation engines.
            </p>
          </div>

          <div className="rounded-3xl bg-[#141320] border border-white/8 p-8 space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-purple-900/40 text-[#c4b5fd] flex items-center justify-center text-2xl mb-4">
              <FiAward />
            </div>
            <h3 className="text-xl font-bold text-white">Campus Community Voice</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Serving 4,000+ students, faculty, and local residents across Ludhiana with breaking campus news, cultural shows, and music festivals.
            </p>
          </div>
        </div>

        {/* Station Leadership & Team */}
        <div className="mb-16">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#c4b5fd]">
              MEDIA CELL CREW
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
              The Voices & Minds Behind the Mic
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {stationTeam.map((member, i) => (
              <div
                key={i}
                className="rounded-3xl bg-[#141320] border border-white/8 p-6 flex items-center gap-4"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-purple-900/60 to-[#c4b5fd]/30 text-white font-black text-lg flex items-center justify-center shrink-0 border border-white/10">
                  {member.imageInitials}
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">{member.name}</h4>
                  <p className="text-xs text-purple-300 font-semibold">{member.role}</p>
                  <p className="text-[11px] text-gray-500 mt-0.5">{member.dept}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Studio Location & FAQs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          
          {/* Studio Location Desk (5 Cols) */}
          <div className="lg:col-span-5 rounded-3xl bg-[#141320] border border-white/8 p-8 space-y-6">
            <h3 className="text-xl font-bold text-white">Visit Our Master Studio</h3>
            
            <div className="space-y-4 text-xs text-gray-300">
              <div className="flex items-start gap-3">
                <FiMapPin className="text-purple-400 text-base mt-0.5 shrink-0" />
                <span>Radio Studio Room 204, Media Wing, Block-B, Campus II, PCTE Group of Institutes, Baddowal, Ludhiana, Punjab - 142021</span>
              </div>

              <div className="flex items-center gap-3">
                <FiPhone className="text-purple-400 text-base shrink-0" />
                <span>+91 161 2888500 (Ext: 204)</span>
              </div>

              <div className="flex items-center gap-3">
                <FiMail className="text-purple-400 text-base shrink-0" />
                <span>radio@pcte.edu.in</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-purple-950/30 border border-purple-500/20 text-xs text-gray-300">
              Studio visiting hours for students: Monday to Friday, 03:00 PM - 06:00 PM.
            </div>
          </div>

          {/* FAQs Accordion (7 Cols) */}
          <div className="lg:col-span-7 rounded-3xl bg-[#141320] border border-white/8 p-8">
            <h3 className="text-xl font-bold text-white mb-6">Frequently Asked Questions</h3>
            
            <div className="space-y-3">
              {stationFAQs.map((faq, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl bg-[#1a1928] border border-white/5 overflow-hidden"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-4 text-left flex items-center justify-between text-xs sm:text-sm font-bold text-white hover:text-purple-200 transition cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    {openFaq === idx ? <FiChevronUp /> : <FiChevronDown />}
                  </button>

                  {openFaq === idx && (
                    <div className="px-4 pb-4 text-xs text-gray-300 leading-relaxed border-t border-white/5 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default AboutPage;
