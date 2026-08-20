import React, { useState } from 'react';
import { FiUser, FiLock, FiMic, FiCheckCircle, FiSend, FiFileText } from 'react-icons/fi';

const LoginPage = () => {
  const [tab, setTab] = useState('login'); // 'login' | 'apply'
  const [loginForm, setLoginForm] = useState({ email: '', password: '' });
  const [applyForm, setApplyForm] = useState({ name: '', rollNo: '', dept: '', genre: 'Music & Hits', experience: '', pitch: '' });
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [applySuccess, setApplySuccess] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    if (!loginForm.email || !loginForm.password) return;
    setLoginSuccess(true);
    setTimeout(() => {
      setLoginSuccess(false);
      setLoginForm({ email: '', password: '' });
    }, 2500);
  };

  const handleApply = (e) => {
    e.preventDefault();
    if (!applyForm.name || !applyForm.rollNo) return;
    setApplySuccess(true);
    setTimeout(() => {
      setApplySuccess(false);
      setApplyForm({ name: '', rollNo: '', dept: '', genre: 'Music & Hits', experience: '', pitch: '' });
    }, 2500);
  };

  return (
    <div className="flex-1 py-12 sm:py-20 bg-[#0c0c14] text-white flex items-center justify-center">
      <div className="w-full max-w-xl mx-auto px-4 sm:px-6">
        
        {/* Card Container */}
        <div className="rounded-3xl bg-[#141320] border border-white/10 p-6 sm:p-10 shadow-2xl shadow-purple-950/40 backdrop-blur-xl">
          
          {/* Tab Switcher */}
          <div className="flex items-center bg-[#1c1b2c] p-1.5 rounded-2xl mb-8 border border-white/5">
            <button
              onClick={() => setTab('login')}
              className={`flex-1 py-2.5 rounded-xl text-xs font-bold transition cursor-pointer flex items-center justify-center gap-2 ${
                tab === 'login'
                  ? 'bg-[#c4b5fd] text-[#18112e] shadow'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <FiUser />
              <span>Student & RJ Login</span>
            </button>

            <button
              onClick={() => setTab('apply')}
              className={`flex-1 py-2.5 rounded-xl text-xs font-bold transition cursor-pointer flex items-center justify-center gap-2 ${
                tab === 'apply'
                  ? 'bg-[#c4b5fd] text-[#18112e] shadow'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <FiMic />
              <span>Apply for RJ Audition</span>
            </button>
          </div>

          {/* TAB 1: Student Login */}
          {tab === 'login' ? (
            loginSuccess ? (
              <div className="py-12 text-center flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-3xl mb-4 animate-bounce">
                  <FiCheckCircle />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Welcome Back!</h3>
                <p className="text-sm text-gray-300">
                  Successfully logged into PCTE Campus Radio listener portal.
                </p>
              </div>
            ) : (
              <div>
                <div className="text-center mb-6">
                  <h2 className="text-2xl sm:text-3xl font-bold text-white">Sign In to Your Account</h2>
                  <p className="text-xs text-gray-400 mt-1">Access saved podcasts, request queue tracking, and voting</p>
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
                        value={loginForm.email}
                        onChange={(e) => setLoginForm({ ...loginForm, email: e.target.value })}
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#1b1a2b] border border-white/10 text-white text-xs focus:outline-none focus:border-purple-400"
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
                        value={loginForm.password}
                        onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#1b1a2b] border border-white/10 text-white text-xs focus:outline-none focus:border-purple-400"
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
                    className="w-full py-3.5 rounded-xl bg-[#c4b5fd] hover:bg-[#b8a5fc] text-[#18112e] text-sm font-bold shadow-lg shadow-purple-950/50 transition cursor-pointer"
                  >
                    Sign In to Portal
                  </button>
                </form>
              </div>
            )
          ) : (
            /* TAB 2: Apply for RJ Audition */
            applySuccess ? (
              <div className="py-12 text-center flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-3xl mb-4 animate-bounce">
                  <FiCheckCircle />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Application Submitted! 🎙️</h3>
                <p className="text-sm text-gray-300 max-w-sm">
                  Our Media Cell coordinators will review your pitch and contact you for the Studio 2 audition round.
                </p>
              </div>
            ) : (
              <div>
                <div className="text-center mb-6">
                  <h2 className="text-2xl sm:text-3xl font-bold text-white">Join the On-Air Crew</h2>
                  <p className="text-xs text-gray-400 mt-1">Host your own weekly radio show or podcast series on 98.4 FM</p>
                </div>

                <form onSubmit={handleApply} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Aryan Sharma"
                        value={applyForm.name}
                        onChange={(e) => setApplyForm({ ...applyForm, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#1b1a2b] border border-white/10 text-white text-xs focus:outline-none focus:border-purple-400"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                        Roll No *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. 2204128"
                        value={applyForm.rollNo}
                        onChange={(e) => setApplyForm({ ...applyForm, rollNo: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#1b1a2b] border border-white/10 text-white text-xs focus:outline-none focus:border-purple-400"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                        Department & Year
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. B.Tech CSE, 3rd Year"
                        value={applyForm.dept}
                        onChange={(e) => setApplyForm({ ...applyForm, dept: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#1b1a2b] border border-white/10 text-white text-xs focus:outline-none focus:border-purple-400"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                        Genre of Show
                      </label>
                      <select
                        value={applyForm.genre}
                        onChange={(e) => setApplyForm({ ...applyForm, genre: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#1b1a2b] border border-white/10 text-white text-xs focus:outline-none focus:border-purple-400"
                      >
                        <option value="Music & Hits">Music & Top Charts</option>
                        <option value="Campus Buzz & Talk">Campus Buzz & Talk Shows</option>
                        <option value="Tech & Startups">Tech & Startups Podcast</option>
                        <option value="Late Night & Stories">Late Night Confessions</option>
                        <option value="Sports & Fitness">Sports & Varsity News</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                      Show Concept & Pitch Summary
                    </label>
                    <textarea
                      rows="3"
                      placeholder="Briefly describe your show idea, target listeners, and what makes your voice unique..."
                      value={applyForm.pitch}
                      onChange={(e) => setApplyForm({ ...applyForm, pitch: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#1b1a2b] border border-white/10 text-white text-xs focus:outline-none focus:border-purple-400 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-[#c4b5fd] hover:bg-[#b8a5fc] text-[#18112e] text-sm font-bold shadow-lg shadow-purple-950/50 flex items-center justify-center gap-2 cursor-pointer transition"
                  >
                    <FiSend />
                    <span>Submit RJ Audition Form</span>
                  </button>
                </form>
              </div>
            )
          )}

        </div>

      </div>
    </div>
  );
};

export default LoginPage;
