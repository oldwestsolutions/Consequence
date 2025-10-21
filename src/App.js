import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import ProducerSearch from './components/ProducerSearch';
import SampleMarketplace from './components/SampleMarketplace';
import StudioPage from './components/StudioPage';
import StudioShowcase from './components/StudioShowcase';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './contexts/AuthContext';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } />
            <Route path="/producers" element={<ProducerSearch />} />
            <Route path="/samples" element={<SampleMarketplace />} />
            <Route path="/studio" element={<StudioPage />} />
            <Route path="/studio-showcase" element={<StudioShowcase />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;