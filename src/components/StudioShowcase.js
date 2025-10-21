import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const StudioShowcase = () => {
  const [selectedPlugin, setSelectedPlugin] = useState(null);

  const plugins = [
    {
      id: 1,
      name: "Consequence EQ Pro",
      type: "Professional EQ Plugin",
      price: "$89",
      image: "https://via.placeholder.com/600x400/333/fff?text=EQ+Pro",
      description: "Professional 8-band parametric EQ with analog modeling and real-time spectrum analysis. Built for the most demanding mixing and mastering applications.",
      features: [
        "8-Band Parametric EQ with High-Q Filters",
        "Analog Modeling with Vintage Character",
        "Real-time Spectrum Analyzer",
        "Mid/Side Processing",
        "Linear Phase Mode",
        "Preset Library with 200+ Curves"
      ],
      specifications: {
        "Frequency Range": "20Hz - 20kHz",
        "Filter Types": "Butterworth, Chebyshev, Bessel",
        "Latency": "< 1ms",
        "CPU Usage": "Low",
        "Formats": "VST3, AU, AAX"
      },
      demoTrack: "https://via.placeholder.com/400x200/444/fff?text=Demo+Track"
    },
    {
      id: 2,
      name: "Synth Master",
      type: "Advanced Synthesizer",
      price: "$149",
      image: "https://via.placeholder.com/600x400/333/fff?text=Synth+Master",
      description: "Revolutionary wavetable synthesizer with 1000+ presets, multi-oscillator architecture, and advanced modulation capabilities for modern music production.",
      features: [
        "Wavetable Synthesis Engine",
        "1000+ Professional Presets",
        "Multi-oscillator Architecture",
        "Advanced Modulation Matrix",
        "Built-in Effects Suite",
        "Real-time Wavetable Morphing"
      ],
      specifications: {
        "Oscillators": "4x Wavetable Oscillators",
        "Presets": "1000+",
        "Modulation": "16x16 Matrix",
        "Effects": "8 Built-in Effects",
        "Polyphony": "32 Voices",
        "Formats": "VST3, AU, AAX"
      },
      demoTrack: "https://via.placeholder.com/400x200/444/fff?text=Demo+Track"
    },
    {
      id: 3,
      name: "Dynamic Compressor",
      type: "Studio-Grade Compression",
      price: "$79",
      image: "https://via.placeholder.com/600x400/333/fff?text=Compressor",
      description: "Professional compressor with vintage analog character, multi-band processing, and sidechain capabilities. Perfect for drums, vocals, and mastering.",
      features: [
        "Vintage Analog Character Modeling",
        "Multi-band Compression",
        "Sidechain Support",
        "Visual Gain Reduction Meter",
        "Auto-release Function",
        "Parallel Compression"
      ],
      specifications: {
        "Ratio": "1:1 to 20:1",
        "Attack": "0.1ms - 100ms",
        "Release": "1ms - 5s",
        "Threshold": "-60dB to 0dB",
        "Lookahead": "0-10ms",
        "Formats": "VST3, AU, AAX"
      },
      demoTrack: "https://via.placeholder.com/400x200/444/fff?text=Demo+Track"
    },
    {
      id: 4,
      name: "Reverb Pro",
      type: "Convolution Reverb",
      price: "$99",
      image: "https://via.placeholder.com/600x400/333/fff?text=Reverb+Pro",
      description: "High-quality convolution reverb with realistic room simulations, impulse response library, and real-time processing for professional audio production.",
      features: [
        "Convolution Technology",
        "Realistic Room Simulations",
        "500+ Impulse Responses",
        "Real-time Processing",
        "Early Reflections Control",
        "Tail Length Adjustment"
      ],
      specifications: {
        "IR Length": "Up to 30 seconds",
        "Sample Rate": "44.1kHz - 192kHz",
        "Latency": "< 5ms",
        "Memory": "2GB IR Library",
        "Quality": "32-bit Float",
        "Formats": "VST3, AU, AAX"
      },
      demoTrack: "https://via.placeholder.com/400x200/444/fff?text=Demo+Track"
    },
    {
      id: 5,
      name: "Delay Master",
      type: "Multi-Tap Delay",
      price: "$69",
      image: "https://via.placeholder.com/600x400/333/fff?text=Delay+Master",
      description: "Advanced multi-tap delay with tempo sync, modulation, and creative effects. Perfect for creating space, movement, and unique sound design.",
      features: [
        "Multi-tap Delay Engine",
        "Tempo Sync & MIDI Clock",
        "Modulation & LFO",
        "Filter & EQ per Tap",
        "Feedback Control",
        "Creative Effects"
      ],
      specifications: {
        "Taps": "Up to 8 Taps",
        "Delay Time": "0-10 seconds",
        "Sync": "1/4 to 1/32 notes",
        "Modulation": "LFO & Envelope",
        "Filters": "High/Low Pass",
        "Formats": "VST3, AU, AAX"
      },
      demoTrack: "https://via.placeholder.com/400x200/444/fff?text=Demo+Track"
    },
    {
      id: 6,
      name: "Filter Bank",
      type: "Multi-Band Filtering",
      price: "$59",
      image: "https://via.placeholder.com/600x400/333/fff?text=Filter+Bank",
      description: "Professional multi-band filter with creative modulation, automation, and real-time control. Essential for sound design and creative filtering.",
      features: [
        "Multi-band Filtering",
        "Creative Modulation",
        "Real-time Automation",
        "Filter Types: LP, HP, BP, Notch",
        "Resonance Control",
        "Envelope Following"
      ],
      specifications: {
        "Bands": "Up to 4 Bands",
        "Filter Types": "LP, HP, BP, Notch",
        "Resonance": "0-100%",
        "Modulation": "LFO & Envelope",
        "Automation": "Full DAW Support",
        "Formats": "VST3, AU, AAX"
      },
      demoTrack: "https://via.placeholder.com/400x200/444/fff?text=Demo+Track"
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
            <Link to="/" style={{ 
              fontSize: '1.5rem', 
              fontWeight: '900', 
              color: '#6B46C1',
              textDecoration: 'none'
            }}>
              CONSEQUENCE
            </Link>
            
            <Link to="/" style={{
              color: 'white',
              textDecoration: 'none',
              fontSize: '1rem',
              fontWeight: '500',
              padding: '0.5rem 1rem',
              borderRadius: '20px',
              backgroundColor: '#333',
              transition: 'all 0.3s ease'
            }}>
              Back to Home
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section - Full Page */}
      <section style={{ 
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #2a1a3a 100%)',
        padding: '6rem 0 4rem'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem', width: '100%' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h1 style={{ 
              fontSize: '4.5rem', 
              fontWeight: '900', 
              marginBottom: '2rem',
              background: 'linear-gradient(135deg, #6B46C1 0%, #fff 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              lineHeight: '1.1'
            }}>
              Studio Showcase
            </h1>
            <p style={{ 
              fontSize: '1.5rem', 
              color: '#b3b3b3', 
              maxWidth: '800px', 
              margin: '0 auto 3rem',
              lineHeight: '1.6'
            }}>
              Discover our signature collection of professional VST plugins and audio tools. 
              Built by producers, for producers.
            </p>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              gap: '2rem',
              flexWrap: 'wrap'
            }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#6B46C1', marginBottom: '0.5rem' }}>6</div>
                <div style={{ color: '#b3b3b3' }}>Signature Plugins</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#6B46C1', marginBottom: '0.5rem' }}>1000+</div>
                <div style={{ color: '#b3b3b3' }}>Professional Presets</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#6B46C1', marginBottom: '0.5rem' }}>50k+</div>
                <div style={{ color: '#b3b3b3' }}>Downloads</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Plugins Grid Section - Full Page */}
      <section style={{ 
        minHeight: '100vh',
        padding: '4rem 0',
        backgroundColor: '#1a1a1a'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ 
              fontSize: '3rem', 
              fontWeight: '900', 
              marginBottom: '1rem',
              color: 'white'
            }}>
              Professional VST Collection
            </h2>
            <p style={{ 
              fontSize: '1.25rem', 
              color: '#b3b3b3',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Industry-standard plugins used by top producers worldwide
            </p>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
            gap: '2rem'
          }}>
            {plugins.map((plugin) => (
              <div key={plugin.id} style={{
                backgroundColor: '#2a2a2a',
                borderRadius: '20px',
                overflow: 'hidden',
                border: '1px solid #333',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onClick={() => setSelectedPlugin(plugin)}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.borderColor = '#6B46C1';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = '#333';
              }}>
                <div style={{
                  height: '250px',
                  backgroundImage: `url(${plugin.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  position: 'relative'
                }}>
                  <div style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    backgroundColor: '#6B46C1',
                    color: 'white',
                    padding: '0.5rem 1rem',
                    borderRadius: '20px',
                    fontSize: '0.875rem',
                    fontWeight: 'bold'
                  }}>
                    {plugin.price}
                  </div>
                </div>
                <div style={{ padding: '2rem' }}>
                  <div style={{ marginBottom: '1rem' }}>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                      {plugin.name}
                    </h3>
                    <p style={{ color: '#6B46C1', fontSize: '1rem', marginBottom: '1rem' }}>
                      {plugin.type}
                    </p>
                    <p style={{ color: '#b3b3b3', lineHeight: '1.5', marginBottom: '1.5rem' }}>
                      {plugin.description}
                    </p>
                  </div>
                  
                  <div style={{ marginBottom: '1.5rem' }}>
                    <h4 style={{ fontSize: '1rem', fontWeight: 'bold', marginBottom: '0.75rem', color: '#fff' }}>
                      Key Features:
                    </h4>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                      {plugin.features.slice(0, 3).map((feature, index) => (
                        <li key={index} style={{ 
                          color: '#b3b3b3', 
                          fontSize: '0.875rem', 
                          marginBottom: '0.5rem',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem'
                        }}>
                          <span style={{ color: '#6B46C1' }}>✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div style={{ display: 'flex', gap: '0.75rem' }}>
                    <button style={{
                      flex: 1,
                      padding: '0.875rem',
                      backgroundColor: '#333',
                      color: 'white',
                      border: '1px solid #666',
                      borderRadius: '12px',
                      cursor: 'pointer',
                      fontSize: '0.875rem',
                      fontWeight: '500',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#444';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#333';
                    }}>
                      Try Demo
                    </button>
                    <button style={{
                      flex: 1,
                      padding: '0.875rem',
                      backgroundColor: '#6B46C1',
                      color: 'white',
                      border: 'none',
                      borderRadius: '12px',
                      cursor: 'pointer',
                      fontSize: '0.875rem',
                      fontWeight: 'bold',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#5B21B6';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#6B46C1';
                    }}>
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal for Plugin Details */}
      {selectedPlugin && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.9)',
          zIndex: 2000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem'
        }}>
          <div style={{
            backgroundColor: '#2a2a2a',
            borderRadius: '20px',
            maxWidth: '800px',
            width: '100%',
            maxHeight: '90vh',
            overflow: 'auto',
            border: '1px solid #333'
          }}>
            <div style={{
              height: '300px',
              backgroundImage: `url(${selectedPlugin.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              position: 'relative'
            }}>
              <button
                onClick={() => setSelectedPlugin(null)}
                style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  backgroundColor: 'rgba(0, 0, 0, 0.7)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '50%',
                  width: '40px',
                  height: '40px',
                  cursor: 'pointer',
                  fontSize: '1.25rem'
                }}
              >
                ×
              </button>
            </div>
            
            <div style={{ padding: '2rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                <div>
                  <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                    {selectedPlugin.name}
                  </h2>
                  <p style={{ color: '#6B46C1', fontSize: '1.25rem', marginBottom: '1rem' }}>
                    {selectedPlugin.type}
                  </p>
                </div>
                <span style={{ fontSize: '2rem', fontWeight: 'bold', color: '#6B46C1' }}>
                  {selectedPlugin.price}
                </span>
              </div>
              
              <p style={{ color: '#b3b3b3', fontSize: '1.125rem', lineHeight: '1.6', marginBottom: '2rem' }}>
                {selectedPlugin.description}
              </p>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '2rem' }}>
                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem', color: '#fff' }}>
                    Features
                  </h3>
                  <ul style={{ listStyle: 'none', padding: 0 }}>
                    {selectedPlugin.features.map((feature, index) => (
                      <li key={index} style={{ 
                        color: '#b3b3b3', 
                        fontSize: '0.875rem', 
                        marginBottom: '0.5rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                      }}>
                        <span style={{ color: '#6B46C1' }}>✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem', color: '#fff' }}>
                    Specifications
                  </h3>
                  <div style={{ fontSize: '0.875rem' }}>
                    {Object.entries(selectedPlugin.specifications).map(([key, value]) => (
                      <div key={key} style={{ 
                        display: 'flex', 
                        justifyContent: 'space-between', 
                        marginBottom: '0.5rem',
                        borderBottom: '1px solid #333',
                        paddingBottom: '0.25rem'
                      }}>
                        <span style={{ color: '#b3b3b3' }}>{key}:</span>
                        <span style={{ color: '#6B46C1', fontWeight: '500' }}>{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem', color: '#fff' }}>
                  Demo Track
                </h3>
                <div style={{
                  height: '100px',
                  backgroundImage: `url(${selectedPlugin.demoTrack})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#333'
                }}>
                  <div style={{
                    backgroundColor: 'rgba(107, 70, 193, 0.8)',
                    color: 'white',
                    padding: '0.75rem 1.5rem',
                    borderRadius: '25px',
                    cursor: 'pointer',
                    fontSize: '1rem',
                    fontWeight: 'bold'
                  }}>
                    ▶ Play Demo
                  </div>
                </div>
              </div>
              
              <div style={{ display: 'flex', gap: '1rem' }}>
                <button style={{
                  flex: 1,
                  padding: '1rem',
                  backgroundColor: '#333',
                  color: 'white',
                  border: '1px solid #666',
                  borderRadius: '12px',
                  cursor: 'pointer',
                  fontSize: '1rem',
                  fontWeight: '500'
                }}>
                  Try Demo
                </button>
                <button style={{
                  flex: 1,
                  padding: '1rem',
                  backgroundColor: '#6B46C1',
                  color: 'white',
                  border: 'none',
                  borderRadius: '12px',
                  cursor: 'pointer',
                  fontSize: '1rem',
                  fontWeight: 'bold'
                }}>
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudioShowcase;