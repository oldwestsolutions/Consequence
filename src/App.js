import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Studio from './components/Studio';
import Login from './components/Login';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/studio" element={<Studio />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App; 