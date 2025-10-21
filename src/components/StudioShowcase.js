import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const StudioShowcase = () => {
  const [selectedVST, setSelectedVST] = useState(null);

  const vstPlugins = [
    {
      id: 1,
      name: "Consequence EQ Pro",
      type: "EQ Plugin",
      description: "Professional 8-band parametric EQ with analog modeling",
      price: "$89",
      features: ["8-Band Parametric EQ", "Analog Modeling", "Real-time Spectrum Analyzer", "Preset Library"],
      image: "https://via.placeholder.com/400x300/333/fff?text=EQ+Pro"
    },
    {
      id: 2,
      name: "Synth Master",
      type: "Synthesizer",
      description: "Advanced synthesizer with 1000+ presets and wavetable synthesis",
      price: "$149",
      features: ["Wavetable Synthesis", "1000+ Presets", "Multi-oscillator", "Advanced Modulation"],
      image: "https://via.placeholder.com/400x300/333/fff?text=Synth+Master"
    },
    {
      id: 3,
      name: "Dynamic Compressor",
      type: "Compression",
      description: "Studio-grade compressor with vintage analog character",
      price: "$79",
      features: ["Vintage Analog Character", "Multi-band Compression", "Sidechain Support", "Real-time Analysis"],
      image: "https://via.placeholder.com/400x300/333/fff?text=Compressor"
    },
    {
      id: 4,
      name: "Reverb Pro",
      type: "Reverb",
      description: "Convolution reverb with realistic room simulations",
      price: "$99",
      features: ["Convolution Technology", "Room Simulations", "Real-time Processing", "Custom IR Support"],
      image: "https://via.placeholder.com/400x300/333/fff?text=Reverb+Pro"
    },
    {
      id: 5,
      name: "Delay Master",
      type: "Delay",
      description: "Multi-tap delay with creative modulation options",
      price: "$69",
      features: ["Multi-tap Delay", "Creative Modulation", "Tempo Sync", "High-quality Filters"],
      image: "https://via.placeholder.com/400x300/333/fff?text=Delay+Master"
    },
    {
      id: 6,
      name: "Filter Bank",
      type: "Filtering",
      description: "Multi-band filtering with creative sound design tools",
      price: "$59",
      features: ["Multi-band Filtering", "Creative Sound Design", "Real-time Envelope", "Preset Library"],
      image: "https://via.placeholder.com/400x300/333/fff?text=Filter+Bank"
    }
  ];

  return (
    <div className="studio-showcase">
      {/* Navigation */}
      <nav className="navbar">
        <div className="container">
          <div className="navbar-content">
            <Link to="/" className="navbar-brand">
              CONSEQUENCE
            </Link>
            <div>
              <Link to="/login" className="btn btn-primary btn-sm">Login</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero" style={{ padding: '6rem 0 4rem', backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            <h1 style={{ 
              fontSize: '3.5rem', 
              fontWeight: '900', 
              marginBottom: '1.5rem',
              color: '#000000'
            }}>
              Studio Showcase
            </h1>
            <p style={{ 
              fontSize: '1.25rem', 
              color: '#6c757d', 
              marginBottom: '2rem',
              lineHeight: '1.6'
            }}>
              Discover our signature collection of professional VST plugins and audio tools. 
              Built by producers, for producers.
            </p>
          </div>
        </div>
      </section>

      {/* VST Grid */}
      <section className="section">
        <div className="container">
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
            gap: '2rem'
          }}>
            {vstPlugins.map((vst) => (
              <div 
                key={vst.id}
                className="card" 
                style={{ 
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onClick={() => setSelectedVST(vst)}
              >
                <div style={{
                  height: '200px',
                  backgroundImage: `url(${vst.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  borderRadius: '12px 12px 0 0'
                }}></div>
                <div className="card-body">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                    <div>
                      <h3 style={{ marginBottom: '0.5rem', color: '#000' }}>{vst.name}</h3>
                      <p style={{ color: '#6c757d', fontSize: '0.875rem', marginBottom: '0.5rem' }}>{vst.type}</p>
                    </div>
                    <span style={{ 
                      fontSize: '1.5rem', 
                      fontWeight: 'bold', 
                      color: '#000'
                    }}>
                      {vst.price}
                    </span>
                  </div>
                  <p style={{ color: '#6c757d', marginBottom: '1.5rem', lineHeight: '1.5' }}>
                    {vst.description}
                  </p>
                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                    {vst.features.slice(0, 2).map((feature, index) => (
                      <span 
                        key={index}
                        style={{
                          backgroundColor: '#f8f9fa',
                          color: '#495057',
                          padding: '0.25rem 0.75rem',
                          borderRadius: '20px',
                          fontSize: '0.75rem',
                          fontWeight: '500'
                        }}
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  <div style={{ display: 'flex', gap: '1rem' }}>
                    <button className="btn btn-primary btn-sm" style={{ flex: 1 }}>
                      Try Demo
                    </button>
                    <button className="btn btn-secondary btn-sm" style={{ flex: 1 }}>
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VST Detail Modal */}
      {selectedVST && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 2000,
          padding: '2rem'
        }}>
          <div style={{
            backgroundColor: 'white',
            borderRadius: '16px',
            maxWidth: '800px',
            width: '100%',
            maxHeight: '90vh',
            overflow: 'auto'
          }}>
            <div style={{ padding: '2rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2rem' }}>
                <div>
                  <h2 style={{ marginBottom: '0.5rem', color: '#000' }}>{selectedVST.name}</h2>
                  <p style={{ color: '#6c757d', fontSize: '1rem', marginBottom: '0.5rem' }}>{selectedVST.type}</p>
                </div>
                <button 
                  onClick={() => setSelectedVST(null)}
                  style={{
                    background: 'none',
                    border: 'none',
                    fontSize: '1.5rem',
                    cursor: 'pointer',
                    color: '#6c757d'
                  }}
                >
                  ×
                </button>
              </div>
              
              <div style={{
                height: '300px',
                backgroundImage: `url(${selectedVST.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: '12px',
                marginBottom: '2rem'
              }}></div>
              
              <p style={{ color: '#6c757d', marginBottom: '2rem', lineHeight: '1.6', fontSize: '1.125rem' }}>
                {selectedVST.description}
              </p>
              
              <div style={{ marginBottom: '2rem' }}>
                <h4 style={{ marginBottom: '1rem', color: '#000' }}>Key Features:</h4>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.5rem' }}>
                  {selectedVST.features.map((feature, index) => (
                    <div key={index} style={{
                      backgroundColor: '#f8f9fa',
                      color: '#495057',
                      padding: '0.75rem',
                      borderRadius: '8px',
                      fontSize: '0.875rem',
                      fontWeight: '500'
                    }}>
                      ✓ {feature}
                    </div>
                  ))}
                </div>
              </div>
              
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                <button className="btn btn-secondary btn-lg" style={{ padding: '1rem 2rem' }}>
                  Try Demo
                </button>
                <button className="btn btn-primary btn-lg" style={{ padding: '1rem 2rem' }}>
                  Buy Now - {selectedVST.price}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div>
              <div className="footer-brand">CONSEQUENCE</div>
              <p className="footer-description">
                Professional music production tools and services for the modern producer.
              </p>
            </div>
            <div>
              <h4 style={{ color: 'white', marginBottom: '1rem' }}>Product</h4>
              <ul className="footer-links">
                <li><Link to="/studio-showcase">Studio Showcase</Link></li>
                <li><Link to="/producers">Producers</Link></li>
                <li><Link to="/samples">Samples</Link></li>
                <li><Link to="/login">Login</Link></li>
              </ul>
            </div>
            <div>
              <h4 style={{ color: 'white', marginBottom: '1rem' }}>Company</h4>
              <ul className="footer-links">
                <li><a href="#about">About Us</a></li>
                <li><a href="#careers">Careers</a></li>
                <li><a href="#blog">Blog</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 style={{ color: 'white', marginBottom: '1rem' }}>Support</h4>
              <ul className="footer-links">
                <li><a href="#help">Help Center</a></li>
                <li><a href="#docs">Documentation</a></li>
                <li><a href="#community">Community</a></li>
                <li><a href="#status">Status</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 Consequence. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default StudioShowcase;
