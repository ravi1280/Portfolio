import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import LoadingScreen from './components/LoadingScreen';
import SmoothScroll from './components/SmoothScroll';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';

import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Blogs from './pages/Blogs';

import ScrollToTop from './components/ScrollToTop';

function AppContent() {
  const [showLoading, setShowLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // Show loading screen on route change
    setShowLoading(true);
  }, [location.pathname]);

  const handleLoadingComplete = () => {
    setShowLoading(false);
  };

  return (
    <>
      <ScrollToTop />
      <CustomCursor />
      <SmoothScroll />
      <ScrollProgress />

      <LoadingScreen showLoading={showLoading} onComplete={handleLoadingComplete} />
      <div className="app-container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blogs" element={<Blogs />} />
        </Routes>
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
