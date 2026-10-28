import React, { useState } from 'react';
import { FiX, FiMusic, FiSend, FiCheckCircle } from 'react-icons/fi';

const SongRequestModal = ({ isOpen, onClose, onAddShoutout }) => {
  const [formData, setFormData] = useState({
    name: '',
    department: '',
    songTitle: '',
    artist: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.songTitle) return;

    if (onAddShoutout) {
      onAddShoutout({
        id: `shout-${Date.now()}`,
        author: `${formData.name} (${formData.department || 'PCTE Student'})`,
        message: formData.message || 'Shoutout to the entire PCTE campus!',
        songRequested: `${formData.songTitle} - ${formData.artist || 'Requested Track'}`,
        timeAgo: 'Just now'
      });
    }

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', department: '', songTitle: '', artist: '', message: '' });
      onClose();
    }, 1800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-lg rounded-3xl bg-[#151420] border border-white/10 p-6 sm:p-8 shadow-2xl shadow-purple-950/50">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-gray-400 hover:text-white rounded-full bg-white/5 hover:bg-white/10 transition"
          aria-label="Close modal"
        >
          <FiX className="text-xl" />
        </button>

        {submitted ? (
          <div className="py-10 text-center flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-3xl mb-4 animate-bounce">
              <FiCheckCircle />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Request Sent to DJ Booth! 🎙️</h3>
            <p className="text-sm text-gray-300 max-w-sm">
              Your song and shoutout have been queued for the on-air host. Tune in to hear it live!
            </p>
          </div>
        ) : (
          <>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-purple-900/30 text-[#c4b5fd] flex items-center justify-center text-xl">
                <FiMusic />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Request a Song & Shoutout</h3>
                <p className="text-xs text-gray-400">Broadcast your favorite track live on 98.4 FM</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Aryan Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#1b1a29] border border-white/10 text-white text-sm focus:outline-none focus:border-purple-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                    Dept / Batch
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. B.Tech CSE '26"
                    value={formData.department}
                    onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#1b1a29] border border-white/10 text-white text-sm focus:outline-none focus:border-purple-400"
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
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#1b1a29] border border-white/10 text-white text-sm focus:outline-none focus:border-purple-400"
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
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#1b1a29] border border-white/10 text-white text-sm focus:outline-none focus:border-purple-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                  Shoutout Message / Dedication
                </label>
                <textarea
                  rows="3"
                  placeholder="Dedicate this song to your friends, hostel mates or batch..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#1b1a29] border border-white/10 text-white text-sm focus:outline-none focus:border-purple-400 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-[#c4b5fd] hover:bg-[#b8a5fc] text-[#18112e] text-sm font-bold shadow-lg shadow-purple-950/50 flex items-center justify-center gap-2 cursor-pointer transition"
              >
                <FiSend />
                <span>Submit Song Request</span>
              </button>
            </form>
          </>
        )}

      </div>
    </div>
  );
};

export default SongRequestModal;
