import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import ProducerSearch from './components/ProducerSearch';
import SampleMarketplace from './components/SampleMarketplace';
import Studio from './components/Studio';
import StudioShowcase from './components/StudioShowcase';
import Login from './components/Login';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/producers" element={<ProducerSearch />} />
          <Route path="/samples" element={<SampleMarketplace />} />
          <Route path="/studio" element={<Studio />} />
          <Route path="/studio-showcase" element={<StudioShowcase />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;