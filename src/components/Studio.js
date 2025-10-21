import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Studio = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState('0:00');
  const [bpm, setBpm] = useState(120);
  const [tracks, setTracks] = useState([]);
  const [selectedTrack, setSelectedTrack] = useState(null);

  // Mock tracks data
  useEffect(() => {
    const mockTracks = [
      { id: 1, name: 'Kick', type: 'drum', volume: 0.8, muted: false, solo: false },
      { id: 2, name: 'Snare', type: 'drum', volume: 0.7, muted: false, solo: false },
      { id: 3, name: 'Hi-Hat', type: 'drum', volume: 0.6, muted: false, solo: false },
      { id: 4, name: 'Bass', type: 'synth', volume: 0.8, muted: false, solo: false },
      { id: 5, name: 'Lead', type: 'synth', volume: 0.7, muted: false, solo: false }
    ];
    setTracks(mockTracks);
    setSelectedTrack(mockTracks[0]);
  }, []);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleStop = () => {
    setIsPlaying(false);
    setCurrentTime('0:00');
  };

  const handleBPMChange = (newBpm) => {
    setBpm(newBpm);
  };

  const addTrack = (type) => {
    const newTrack = {
      id: tracks.length + 1,
      name: `${type} ${tracks.length + 1}`,
      type: type,
      volume: 0.8,
      muted: false,
      solo: false
    };
    setTracks([...tracks, newTrack]);
  };

  const updateTrackVolume = (trackId, volume) => {
    setTracks(tracks.map(track => 
      track.id === trackId ? { ...track, volume } : track
    ));
  };

  const toggleMute = (trackId) => {
    setTracks(tracks.map(track => 
      track.id === trackId ? { ...track, muted: !track.muted } : track
    ));
  };

  const toggleSolo = (trackId) => {
    setTracks(tracks.map(track => 
      track.id === trackId ? { ...track, solo: !track.solo } : track
    ));
  };

  return (
    <div className="studio">
      {/* Navigation */}
      <nav className="navbar">
        <div className="container">
          <div className="navbar-content">
            <Link to="/" className="navbar-brand">
              CONSEQUENCE
            </Link>
            <ul className="navbar-nav">
              <li><Link to="/" className="nav-link">Home</Link></li>
              <li><Link to="/producers" className="nav-link">Producers</Link></li>
              <li><Link to="/samples" className="nav-link">Samples</Link></li>
              <li><Link to="/studio" className="nav-link">Studio</Link></li>
              <li><Link to="/login" className="btn btn-primary btn-sm">Login</Link></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Studio Interface */}
      <div className="studio-container">
        {/* Transport Controls */}
        <div className="transport-section">
          <div className="container">
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '2rem',
              padding: '1rem 0',
              borderBottom: '1px solid #e9ecef'
            }}>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <button 
                  className="btn btn-primary"
                  onClick={handlePlayPause}
                  style={{ 
                    width: '60px', 
                    height: '60px', 
                    borderRadius: '50%',
                    fontSize: '1.5rem'
                  }}
                >
                  {isPlaying ? '⏸️' : '▶️'}
                </button>
                <button 
                  className="btn btn-secondary"
                  onClick={handleStop}
                  style={{ 
                    width: '50px', 
                    height: '50px', 
                    borderRadius: '50%'
                  }}
                >
                  ⏹️
                </button>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <span style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>
                  {currentTime}
                </span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <label style={{ fontSize: '0.875rem', color: '#6c757d' }}>BPM:</label>
                  <input
                    type="number"
                    value={bpm}
                    onChange={(e) => handleBPMChange(parseInt(e.target.value))}
                    style={{
                      width: '80px',
                      padding: '0.5rem',
                      border: '1px solid #dee2e6',
                      borderRadius: '4px',
                      textAlign: 'center'
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Studio Layout */}
        <div className="studio-main">
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr 1fr', gap: '2rem', height: 'calc(100vh - 200px)' }}>
              
              {/* Left Panel - Track Controls */}
              <div className="track-controls-panel">
                <div className="card">
                  <div className="card-header">
                    <h3 style={{ margin: 0 }}>Track Controls</h3>
                  </div>
                  <div className="card-body" style={{ padding: '1rem' }}>
                    <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
                      <button 
                        className="btn btn-primary btn-sm"
                        onClick={() => addTrack('drum')}
                      >
                        + Drum
                      </button>
                      <button 
                        className="btn btn-primary btn-sm"
                        onClick={() => addTrack('synth')}
                      >
                        + Synth
                      </button>
                      <button 
                        className="btn btn-primary btn-sm"
                        onClick={() => addTrack('audio')}
                      >
                        + Audio
                      </button>
                    </div>
                    
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                      {tracks.map(track => (
                        <div 
                          key={track.id}
                          className={`track-control ${selectedTrack?.id === track.id ? 'active' : ''}`}
                          style={{
                            padding: '1rem',
                            border: selectedTrack?.id === track.id ? '2px solid #000' : '1px solid #dee2e6',
                            borderRadius: '8px',
                            cursor: 'pointer',
                            transition: 'all 0.2s'
                          }}
                          onClick={() => setSelectedTrack(track)}
                        >
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                            <span style={{ fontWeight: 'bold' }}>{track.name}</span>
                            <span style={{ 
                              fontSize: '0.75rem', 
                              color: '#6c757d',
                              textTransform: 'uppercase'
                            }}>
                              {track.type}
                            </span>
                          </div>
                          
                          <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem' }}>
                            <button 
                              className={`btn ${track.muted ? 'btn-primary' : 'btn-secondary'} btn-sm`}
                              onClick={(e) => {
                                e.stopPropagation();
                                toggleMute(track.id);
                              }}
                              style={{ padding: '0.25rem 0.5rem', fontSize: '0.75rem' }}
                            >
                              M
                            </button>
                            <button 
                              className={`btn ${track.solo ? 'btn-primary' : 'btn-secondary'} btn-sm`}
                              onClick={(e) => {
                                e.stopPropagation();
                                toggleSolo(track.id);
                              }}
                              style={{ padding: '0.25rem 0.5rem', fontSize: '0.75rem' }}
                            >
                              S
                            </button>
                          </div>
                          
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <label style={{ fontSize: '0.75rem', minWidth: '30px' }}>Vol:</label>
                            <input
                              type="range"
                              min="0"
                              max="1"
                              step="0.1"
                              value={track.volume}
                              onChange={(e) => updateTrackVolume(track.id, parseFloat(e.target.value))}
                              style={{ flex: 1 }}
                              onClick={(e) => e.stopPropagation()}
                            />
                            <span style={{ fontSize: '0.75rem', minWidth: '30px' }}>
                              {Math.round(track.volume * 100)}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Center Panel - Sequencer */}
              <div className="sequencer-panel">
                <div className="card" style={{ height: '100%' }}>
                  <div className="card-header">
                    <h3 style={{ margin: 0 }}>Sequencer</h3>
                  </div>
                  <div className="card-body" style={{ padding: '1rem', height: 'calc(100% - 80px)', overflow: 'auto' }}>
                    {/* Piano Roll / Step Sequencer */}
                    <div style={{ 
                      display: 'grid', 
                      gridTemplateColumns: '100px 1fr',
                      gap: '1rem',
                      height: '100%'
                    }}>
                      {/* Piano Keys */}
                      <div style={{ 
                        display: 'flex', 
                        flexDirection: 'column',
                        borderRight: '1px solid #dee2e6'
                      }}>
                        {['C5', 'B4', 'A4', 'G4', 'F4', 'E4', 'D4', 'C4'].map(note => (
                          <div 
                            key={note}
                            style={{
                              height: '40px',
                              border: '1px solid #dee2e6',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              fontSize: '0.75rem',
                              backgroundColor: note.includes('#') ? '#000' : '#fff',
                              color: note.includes('#') ? '#fff' : '#000'
                            }}
                          >
                            {note}
                          </div>
                        ))}
                      </div>
                      
                      {/* Grid */}
                      <div style={{ 
                        display: 'grid', 
                        gridTemplateColumns: 'repeat(16, 1fr)',
                        gridTemplateRows: 'repeat(8, 40px)',
                        gap: '1px',
                        backgroundColor: '#dee2e6'
                      }}>
                        {Array.from({ length: 128 }).map((_, index) => (
                          <div
                            key={index}
                            className="grid-cell"
                            style={{
                              backgroundColor: Math.random() > 0.8 ? '#000' : '#fff',
                              cursor: 'pointer',
                              transition: 'background-color 0.1s'
                            }}
                            onClick={() => {
                              // Toggle grid cell
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Panel - Effects & Mixer */}
              <div className="effects-panel">
                <div className="card" style={{ height: '100%' }}>
                  <div className="card-header">
                    <h3 style={{ margin: 0 }}>Effects & Mixer</h3>
                  </div>
                  <div className="card-body" style={{ padding: '1rem', height: 'calc(100% - 80px)', overflow: 'auto' }}>
                    {/* Master Volume */}
                    <div style={{ marginBottom: '2rem' }}>
                      <h4 style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>Master Volume</h4>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <input
                          type="range"
                          min="0"
                          max="1"
                          step="0.1"
                          defaultValue="0.8"
                          style={{ flex: 1 }}
                        />
                        <span style={{ fontSize: '0.875rem', minWidth: '30px' }}>80</span>
                      </div>
                    </div>

                    {/* Effects */}
                    <div style={{ marginBottom: '2rem' }}>
                      <h4 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Effects</h4>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <div>
                          <label style={{ fontSize: '0.875rem', display: 'block', marginBottom: '0.25rem' }}>
                            Reverb
                          </label>
                          <input type="range" min="0" max="100" defaultValue="20" style={{ width: '100%' }} />
                        </div>
                        <div>
                          <label style={{ fontSize: '0.875rem', display: 'block', marginBottom: '0.25rem' }}>
                            Delay
                          </label>
                          <input type="range" min="0" max="100" defaultValue="10" style={{ width: '100%' }} />
                        </div>
                        <div>
                          <label style={{ fontSize: '0.875rem', display: 'block', marginBottom: '0.25rem' }}>
                            Filter
                          </label>
                          <input type="range" min="0" max="100" defaultValue="50" style={{ width: '100%' }} />
                        </div>
                      </div>
                    </div>

                    {/* VST Plugins */}
                    <div>
                      <h4 style={{ fontSize: '1rem', marginBottom: '1rem' }}>VST Plugins</h4>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <button className="btn btn-secondary btn-sm">+ Add Plugin</button>
                        <button className="btn btn-secondary btn-sm">EQ</button>
                        <button className="btn btn-secondary btn-sm">Compressor</button>
                        <button className="btn btn-secondary btn-sm">Distortion</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div>
              <div className="footer-brand">CONSEQUENCE</div>
              <p className="footer-description">
                The future of music production. Connect, create, and collaborate 
                with the world's best producers and musicians.
              </p>
            </div>
            <div>
              <h4 style={{ color: 'white', marginBottom: '1rem' }}>Product</h4>
              <ul className="footer-links">
                <li><Link to="/studio">Studio</Link></li>
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

export default Studio;
