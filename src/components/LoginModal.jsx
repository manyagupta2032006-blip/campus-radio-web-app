import React, { useState } from 'react';
import { FiX, FiUser, FiLock, FiCheckCircle } from 'react-icons/fi';

const LoginModal = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) return;
    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      onClose();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-md rounded-3xl bg-[#141320] border border-white/10 p-6 sm:p-8 shadow-2xl">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-gray-400 hover:text-white rounded-full bg-white/5 hover:bg-white/10 transition"
          aria-label="Close login modal"
        >
          <FiX className="text-xl" />
        </button>

        {isSuccess ? (
          <div className="py-8 text-center flex flex-col items-center">
            <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-3xl mb-3 animate-bounce">
              <FiCheckCircle />
            </div>
            <h3 className="text-xl font-bold text-white mb-1">Welcome back, Student!</h3>
            <p className="text-xs text-gray-400">Authenticated with PCTE Student Portal.</p>
          </div>
        ) : (
          <>
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-purple-900/30 text-[#c4b5fd] text-2xl mb-3">
                <FiUser />
              </div>
              <h3 className="text-2xl font-bold text-white">Student & RJ Login</h3>
              <p className="text-xs text-gray-400 mt-1">Access playlist bookmarking and studio controls</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                  Roll No / Student Email
                </label>
                <div className="relative flex items-center">
                  <FiUser className="absolute left-3.5 text-gray-500 text-sm" />
                  <input
                    type="text"
                    required
                    placeholder="student@pcte.edu.in"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#1d1b2b] border border-white/10 text-white text-sm focus:outline-none focus:border-purple-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                  Password
                </label>
                <div className="relative flex items-center">
                  <FiLock className="absolute left-3.5 text-gray-500 text-sm" />
                  <input
                    type="password"
                    required
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#1d1b2b] border border-white/10 text-white text-sm focus:outline-none focus:border-purple-400"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between text-xs text-gray-400 pt-1">
                <label className="flex items-center gap-1.5 cursor-pointer">
                  <input type="checkbox" className="rounded accent-purple-500" defaultChecked />
                  <span>Remember me</span>
                </label>
                <a href="#" className="text-purple-300 hover:underline">Forgot password?</a>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-[#c4b5fd] hover:bg-[#b8a5fc] text-[#18112e] text-sm font-bold shadow-lg shadow-purple-950/50 transition cursor-pointer"
              >
                Sign In
              </button>
            </form>
          </>
        )}

      </div>
    </div>
  );
};

export default LoginModal;
