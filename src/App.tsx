import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ParticleBackground from './components/ParticleBackground';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import History from './pages/History';
import Leaders from './pages/Leaders';
import Sports from './pages/Sports';
import Gallery from './pages/Gallery';
import PuneInfo from './pages/PuneInfo';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen selection:bg-emerald-500 selection:text-white overflow-x-hidden bg-transparent cultural-pattern">
        <ParticleBackground />
        <Navbar />
        
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/history" element={<History />} />
            <Route path="/leaders" element={<Leaders />} />
            <Route path="/sports" element={<Sports />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/pune-info" element={<PuneInfo />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}
