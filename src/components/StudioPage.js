import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const StudioPage = () => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('plugins');

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error('Failed to log out');
    }
  };

  const plugins = [
    {
      id: 1,
      name: "Consequence EQ Pro",
      type: "EQ Plugin",
      price: "$89",
      image: "https://via.placeholder.com/300x200/333/fff?text=EQ+Pro",
      description: "Professional 8-band parametric EQ with analog modeling",
      features: ["8-Band Parametric EQ", "Analog Modeling", "Real-time Spectrum Analyzer"]
    },
    {
      id: 2,
      name: "Synth Master",
      type: "Synthesizer",
      price: "$149",
      image: "https://via.placeholder.com/300x200/333/fff?text=Synth+Master",
      description: "Advanced synthesizer with 1000+ presets and wavetable synthesis",
      features: ["Wavetable Synthesis", "1000+ Presets", "Multi-oscillator"]
    },
    {
      id: 3,
      name: "Dynamic Compressor",
      type: "Compression",
      price: "$79",
      image: "https://via.placeholder.com/300x200/333/fff?text=Compressor",
      description: "Studio-grade compressor with vintage analog character",
      features: ["Vintage Analog Character", "Multi-band Compression", "Sidechain Support"]
    },
    {
      id: 4,
      name: "Reverb Pro",
      type: "Reverb",
      price: "$99",
      image: "https://via.placeholder.com/300x200/333/fff?text=Reverb+Pro",
      description: "Convolution reverb with realistic room simulations",
      features: ["Convolution Technology", "Room Simulations", "Real-time Processing"]
    }
  ];

  const samples = [
    {
      id: 1,
      name: "Trap Essentials Pack",
      price: "$45",
      image: "https://via.placeholder.com/300x200/333/fff?text=Trap+Pack",
      description: "200+ trap samples and loops",
      count: "200+ Samples"
    },
    {
      id: 2,
      name: "Hip Hop Drum Kit",
      price: "$29",
      image: "https://via.placeholder.com/300x200/333/fff?text=Hip+Hop+Kit",
      description: "Professional hip hop drum samples",
      count: "150+ Samples"
    },
    {
      id: 3,
      name: "R&B Vocals Pack",
      price: "$59",
      image: "https://via.placeholder.com/300x200/333/fff?text=R%26B+Vocals",
      description: "Smooth R&B vocal samples and harmonies",
      count: "100+ Samples"
    }
  ];

  return (
    <div style={{ backgroundColor: '#0a0a0a', color: 'white', minHeight: '100vh' }}>
      {/* Navigation */}
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(10, 10, 10, 0.95)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid #333',
        zIndex: 1000,
        padding: '1rem 0'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Link to="/dashboard" style={{ 
              fontSize: '1.5rem', 
              fontWeight: '900', 
              color: '#1db954',
              textDecoration: 'none'
            }}>
              CONSEQUENCE
            </Link>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
              <Link to="/dashboard" style={{
                color: 'white',
                textDecoration: 'none',
                fontSize: '1rem',
                fontWeight: '500'
              }}>
                Dashboard
              </Link>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{
                  width: '32px',
                  height: '32px',
                  backgroundColor: '#1db954',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: '0.875rem'
                }}>
                  {currentUser?.email?.charAt(0).toUpperCase()}
                </div>
                <button
                  onClick={handleLogout}
                  style={{
                    background: 'none',
                    border: '1px solid #666',
                    color: 'white',
                    padding: '0.5rem 1rem',
                    borderRadius: '20px',
                    cursor: 'pointer',
                    fontSize: '0.875rem'
                  }}
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={{ 
        paddingTop: '6rem', 
        paddingBottom: '4rem',
        background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h1 style={{ 
              fontSize: '3.5rem', 
              fontWeight: '900', 
              marginBottom: '1rem',
              background: 'linear-gradient(135deg, #1db954 0%, #fff 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              The Studio
            </h1>
            <p style={{ fontSize: '1.25rem', color: '#b3b3b3', maxWidth: '600px', margin: '0 auto' }}>
              Professional VST plugins and audio tools designed by industry veterans
            </p>
          </div>

          {/* Tabs */}
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            gap: '1rem',
            marginBottom: '3rem'
          }}>
            <button
              onClick={() => setActiveTab('plugins')}
              style={{
                padding: '1rem 2rem',
                backgroundColor: activeTab === 'plugins' ? '#1db954' : 'transparent',
                color: 'white',
                border: '1px solid #1db954',
                borderRadius: '50px',
                cursor: 'pointer',
                fontSize: '1rem',
                fontWeight: '500'
              }}
            >
              VST Plugins
            </button>
            <button
              onClick={() => setActiveTab('samples')}
              style={{
                padding: '1rem 2rem',
                backgroundColor: activeTab === 'samples' ? '#1db954' : 'transparent',
                color: 'white',
                border: '1px solid #1db954',
                borderRadius: '50px',
                cursor: 'pointer',
                fontSize: '1rem',
                fontWeight: '500'
              }}
            >
              Sample Packs
            </button>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section style={{ padding: '2rem 0 4rem', backgroundColor: '#1a1a1a' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          {activeTab === 'plugins' && (
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
              gap: '2rem'
            }}>
              {plugins.map((plugin) => (
                <div key={plugin.id} style={{
                  backgroundColor: '#2a2a2a',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  border: '1px solid #333',
                  transition: 'all 0.3s ease'
                }}>
                  <div style={{
                    height: '200px',
                    backgroundImage: `url(${plugin.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}></div>
                  <div style={{ padding: '1.5rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                      <div>
                        <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                          {plugin.name}
                        </h3>
                        <p style={{ color: '#1db954', fontSize: '0.875rem', marginBottom: '0.5rem' }}>
                          {plugin.type}
                        </p>
                      </div>
                      <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1db954' }}>
                        {plugin.price}
                      </span>
                    </div>
                    <p style={{ color: '#b3b3b3', marginBottom: '1rem', lineHeight: '1.5' }}>
                      {plugin.description}
                    </p>
                    <div style={{ marginBottom: '1.5rem' }}>
                      <h4 style={{ fontSize: '0.875rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#fff' }}>
                        Key Features:
                      </h4>
                      <ul style={{ listStyle: 'none', padding: 0 }}>
                        {plugin.features.map((feature, index) => (
                          <li key={index} style={{ 
                            color: '#b3b3b3', 
                            fontSize: '0.875rem', 
                            marginBottom: '0.25rem',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem'
                          }}>
                            <span style={{ color: '#1db954' }}>✓</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                      <button style={{
                        flex: 1,
                        padding: '0.75rem',
                        backgroundColor: '#333',
                        color: 'white',
                        border: '1px solid #666',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        fontSize: '0.875rem'
                      }}>
                        Try Demo
                      </button>
                      <button style={{
                        flex: 1,
                        padding: '0.75rem',
                        backgroundColor: '#1db954',
                        color: 'white',
                        border: 'none',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        fontSize: '0.875rem',
                        fontWeight: 'bold'
                      }}>
                        Buy Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'samples' && (
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
              gap: '2rem'
            }}>
              {samples.map((sample) => (
                <div key={sample.id} style={{
                  backgroundColor: '#2a2a2a',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  border: '1px solid #333',
                  transition: 'all 0.3s ease'
                }}>
                  <div style={{
                    height: '200px',
                    backgroundImage: `url(${sample.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}></div>
                  <div style={{ padding: '1.5rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                      <div>
                        <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                          {sample.name}
                        </h3>
                        <p style={{ color: '#1db954', fontSize: '0.875rem', marginBottom: '0.5rem' }}>
                          {sample.count}
                        </p>
                      </div>
                      <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1db954' }}>
                        {sample.price}
                      </span>
                    </div>
                    <p style={{ color: '#b3b3b3', marginBottom: '1.5rem', lineHeight: '1.5' }}>
                      {sample.description}
                    </p>
                    <button style={{
                      width: '100%',
                      padding: '0.75rem',
                      backgroundColor: '#1db954',
                      color: 'white',
                      border: 'none',
                      borderRadius: '8px',
                      cursor: 'pointer',
                      fontSize: '1rem',
                      fontWeight: 'bold'
                    }}>
                      Download Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default StudioPage;
