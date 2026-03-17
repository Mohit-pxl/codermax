import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { StarField } from './components/StarField';
import { SmoothScroll } from './components/SmoothScroll';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { MarqueeBanner } from './components/MarqueeBanner';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import IndustriesPage from './pages/IndustriesPage';
import CaseStudiesPage from './pages/CaseStudiesPage';
import CareersPage from './pages/CareersPage';

function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function AppContent() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <SmoothScroll>
      <div className="bg-[#020617] min-h-screen font-sans selection:bg-accent selection:text-white overflow-hidden selection:text-white">
        <ScrollToTop />
        
        {/* Scroll Progress Bar */}
        <motion.div className="fixed top-0 left-0 right-0 h-1 bg-accent z-[200] origin-left" style={{ scaleX }} />

        <Navbar />

        {/* Atmosphere Background */}
        <div className="fixed top-0 left-0 w-full h-screen z-0 opacity-50">
          <Canvas camera={{ position: [0, 0, 1] }}>
            <StarField count={2000} />
          </Canvas>
        </div>

        <div className="relative z-10">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/industries" element={<IndustriesPage />} />
            <Route path="/case-studies" element={<CaseStudiesPage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>

          {isHomePage && <MarqueeBanner />}
          <Footer />
        </div>
      </div>
    </SmoothScroll>
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
