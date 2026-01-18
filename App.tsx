
import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Campaign } from './pages/Campaign';

const PlaceholderPage: React.FC<{ title: string }> = ({ title }) => (
  <div className="min-h-[60vh] flex flex-col items-center justify-center bg-white pt-32 px-6 text-center">
    <h1 className="text-4xl md:text-6xl font-serif mb-4 italic font-bold tracking-tighter">{title}</h1>
    <p className="text-gray-500 max-w-md font-light">The Alta Humanitarian Group is currently finalizing this resource. Please explore our active campaigns for immediate ways to get involved.</p>
  </div>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white text-gray-900 selection:bg-black selection:text-white flex flex-col">
        <Navigation />
        
        <main className="flex-grow">
          <Routes>
            {/* AHG Home Page is now the main entry point */}
            <Route path="/" element={<Home />} />
            
            {/* The "Join The Circle" campaign is a dedicated initiative page */}
            <Route path="/campaign" element={<Campaign />} />
            
            <Route path="/about" element={<PlaceholderPage title="Our Charter" />} />
            <Route path="/news" element={<PlaceholderPage title="Newsroom" />} />
            <Route path="/get-involved" element={<PlaceholderPage title="Contact AHG" />} />
            
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
