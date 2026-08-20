import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import GlobalAudioPlayer from './components/GlobalAudioPlayer';
import ScrollToTop from './components/ScrollToTop';
import SongRequestModal from './components/SongRequestModal';
import SearchModal from './components/SearchModal';

// 12 Separate Dedicated Pages
import HomePage from './pages/HomePage';
import LiveRadioPage from './pages/LiveRadioPage';
import ShowsPage from './pages/ShowsPage';
import ShowDetailsPage from './pages/ShowDetailsPage';
import SchedulePage from './pages/SchedulePage';
import PodcastsPage from './pages/PodcastsPage';
import PodcastDetailsPage from './pages/PodcastDetailsPage';
import AnnouncementsPage from './pages/AnnouncementsPage';
import StudentVoicesPage from './pages/StudentVoicesPage';
import EventsPage from './pages/EventsPage';
import AboutPage from './pages/AboutPage';
import LoginPage from './pages/LoginPage';

import { studentShoutouts as initialShoutouts } from './data/radioData';
import { useAudio } from './context/AudioContext';

function App() {
  const [shoutouts, setShoutouts] = useState(initialShoutouts);
  const [isRequestModalOpen, setIsRequestModalOpen] = useState(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const { togglePlay, playShowTrack } = useAudio();

  const handleAddShoutout = (newShoutout) => {
    setShoutouts([newShoutout, ...shoutouts]);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0c0c12] text-white selection:bg-purple-500 selection:text-white font-sans antialiased">
      <ScrollToTop />

      {/* Global Navigation Bar */}
      <Navbar
        onOpenSearch={() => setIsSearchModalOpen(true)}
        onOpenRequestModal={() => setIsRequestModalOpen(true)}
      />

      {/* 12 Independent Routes - Only ONE page is rendered at a time */}
      <div className="flex-1 flex flex-col">
        <Routes>
          <Route
            path="/"
            element={<HomePage onOpenRequestModal={() => setIsRequestModalOpen(true)} />}
          />
          <Route
            path="/live"
            element={<LiveRadioPage onOpenRequestModal={() => setIsRequestModalOpen(true)} />}
          />
          <Route path="/shows" element={<ShowsPage />} />
          <Route path="/shows/:id" element={<ShowDetailsPage />} />
          <Route path="/schedule" element={<SchedulePage />} />
          <Route path="/podcasts" element={<PodcastsPage />} />
          <Route path="/podcasts/:id" element={<PodcastDetailsPage />} />
          <Route path="/announcements" element={<AnnouncementsPage />} />
          <Route
            path="/student-voices"
            element={<StudentVoicesPage shoutouts={shoutouts} onAddShoutout={handleAddShoutout} />}
          />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/login" element={<LoginPage />} />
          {/* Catch-all fallback route */}
          <Route
            path="*"
            element={<HomePage onOpenRequestModal={() => setIsRequestModalOpen(true)} />}
          />
        </Routes>
      </div>

      {/* Global Persistent Bottom Audio Player */}
      <GlobalAudioPlayer />

      {/* Global Footer */}
      <Footer onOpenRequestModal={() => setIsRequestModalOpen(true)} />

      {/* Interactive Modals */}
      <SongRequestModal
        isOpen={isRequestModalOpen}
        onClose={() => setIsRequestModalOpen(false)}
        onAddShoutout={handleAddShoutout}
      />

      <SearchModal
        isOpen={isSearchModalOpen}
        onClose={() => setIsSearchModalOpen(false)}
        onTogglePlay={(state) => togglePlay(state)}
      />
    </div>
  );
}

export default App;