import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const SampleMarketplace = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [selectedBPM, setSelectedBPM] = useState('');
  const [samples, setSamples] = useState([]);
  const [filteredSamples, setFilteredSamples] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Mock data for samples
  useEffect(() => {
    const mockSamples = [
      {
        id: 1,
        name: "Dark Trap Beat",
        genre: "Hip Hop",
        type: "Beat",
        bpm: 140,
        key: "C Minor",
        price: "$25",
        duration: "3:24",
        waveform: "trap-waveform",
        tags: ["Dark", "Aggressive", "808", "Trap"],
        producer: "Alex Martinez"
      },
      {
        id: 2,
        name: "Future Bass Drop",
        genre: "Electronic",
        type: "Loop",
        bpm: 128,
        key: "F Major",
        price: "$18",
        duration: "2:15",
        waveform: "future-bass-waveform",
        tags: ["Future Bass", "Drop", "Synthesizer", "Electronic"],
        producer: "Sarah Chen"
      },
      {
        id: 3,
        name: "Smooth R&B Guitar",
        genre: "R&B",
        type: "Instrumental",
        bpm: 85,
        key: "G Minor",
        price: "$32",
        duration: "4:12",
        waveform: "rnb-guitar-waveform",
        tags: ["Smooth", "Guitar", "Chill", "R&B"],
        producer: "Marcus Johnson"
      },
      {
        id: 4,
        name: "Pop Chorus Hook",
        genre: "Pop",
        type: "Vocal",
        bpm: 120,
        key: "D Major",
        price: "$40",
        duration: "1:45",
        waveform: "pop-vocal-waveform",
        tags: ["Pop", "Vocal", "Hook", "Chorus"],
        producer: "Elena Rodriguez"
      },
      {
        id: 5,
        name: "Rock Drum Loop",
        genre: "Rock",
        type: "Drum Loop",
        bpm: 110,
        key: "A Minor",
        price: "$22",
        duration: "2:30",
        waveform: "rock-drum-waveform",
        tags: ["Rock", "Drums", "Heavy", "Guitar"],
        producer: "David Kim"
      },
      {
        id: 6,
        name: "Jazz Piano Solo",
        genre: "Jazz",
        type: "Instrumental",
        bpm: 92,
        key: "Bb Major",
        price: "$35",
        duration: "3:18",
        waveform: "jazz-piano-waveform",
        tags: ["Jazz", "Piano", "Solo", "Improvisation"],
        producer: "Isabella Thompson"
      },
      {
        id: 7,
        name: "House Bassline",
        genre: "House melody",
        type: "Bass Loop",
        bpm: 124,
        key: "E Minor",
        price: "$20",
        duration: "2:00",
        waveform: "house-bass-waveform",
        tags: ["House", "Bass", "Electronic", "Dance"],
        producer: "Alex Martinez"
      },
      {
        id: 8,
        name: "Ambient Pad",
        genre: "Ambient",
        type: "Atmosphere",
        bpm: 60,
        key: "C Major",
        price: "$28",
        duration: "5:00",
        waveform: "ambient-pad-waveform",
        tags: ["Ambient", "Pad", "Atmosphere", "Chill"],
        producer: "Sarah Chen"
      }
    ];

    setSamples(mockSamples);
    setFilteredSamples(mockSamples);
    setIsLoading(false);
  }, []);

  // Filter samples based on search term and filters
  useEffect(() => {
    let filtered = samples;

    if (searchTerm) {
      filtered = filtered.filter(sample =>
        sample.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        sample.genre.toLowerCase().includes(searchTerm.toLowerCase()) ||
        sample.tags.some(tag =>
          tag.toLowerCase().includes(searchTerm.toLowerCase())
        ) ||
        sample.producer.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedGenre) {
      filtered = filtered.filter(sample => sample.genre === selectedGenre);
    }

    if (selectedType) {
      filtered = filtered.filter(sample => sample.type === selectedType);
    }

    if (selectedBPM) {
      filtered = filtered.filter(sample => {
        const bpm = sample.bpm;
        switch (selectedBPM) {
          case '60-80':
            return bpm >= 60 && bpm <= 80;
          case '80-100':
            return bpm >= 80 && bpm <= 100;
          case '100-120':
            return bpm >= 100 && bpm <= 120;
          case '120-140':
            return bpm >= 120 && bpm <= 140;
          case '140+':
            return bpm >= 140;
          default:
            return true;
        }
      });
    }

    setFilteredSamples(filtered);
  }, [searchTerm, selectedGenre, selectedType, selectedBPM, samples]);

  const genres = [...new Set(samples.map(s => s.genre))];
  const types = [...new Set(samples.map(s => s.type))];

  const generateWaveform = (type) => {
    // Simple waveform visualization based on type
    const waveforms = {
      'trap-waveform': [0.2, 0.8, 0.3, 0.9, 0.1, 0.7, 0.4, 0.6, 0.2, 0.8, 0.5, 0.3, 0.7, 0.9, 0.1, 0.6],
      'future-bass-waveform': [0.1, 0.3, 0.6, 0.8, 0.4, 0.7, 0.2, 0.9, 0.5, 0.3, 0.8, 0.1, 0.6, 0.4, 0.7, 0.2],
      'rnb-guitar-waveform': [0.3, 0.5, 0.4, 0.6, 0.3, 0.7, 0.4, 0.5, 0.3, 0.6, 0.4, 0.5, 0.3, 0.7, 0.4, 0.6],
      'pop-vocal-waveform': [0.4, 0.7, 0.3, 0.8, 0.5, 0.6, 0.4, 0.9, 0.3, 0.7, 0.5, 0.4, 0.6, 0.8, 0.3, 0.7],
      'rock-drum-waveform': [0.8, 0.2, 0.9, 0.1, 0.7, 0.3, 0.8, 0.2, 0.9, 0.1, 0.7, 0.3, 0.8, 0.2, 0.9, 0.1],
      'jazz-piano-waveform': [0.2, 0.4, 0.3, 0.6, 0.4, 0.5, 0.3, 0.7, 0.2, 0.5, 0.4, 0.3, 0.6, 0.4, 0.5, 0.3],
      'house-bass-waveform': [0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6],
      'ambient-pad-waveform': [0.1, 0.2, 0.1, 0.3, 0.1, 0.2, 0.1, 0.3, 0.1, 0.2, 0.1, 0.3, 0.1, 0.2, 0.1, 0.3]
    };
    return waveforms[type] || [0.3, 0.5, 0.4, 0.6, 0.3, 0.7, 0.4, 0.5, 0.3, 0.6, 0.4, 0.5, 0.3, 0.7, 0.4, 0.6];
  };

  return (
    <div className="sample-marketplace">
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

      {/* Hero Section */}
      <section className="section" style={{ paddingTop: '8rem', backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <div className="text-center mb-5">
            <h1 className="hero-title">Premium Sample Library</h1>
            <p className="section-subtitle">
              Rent or lease high-quality samples from our extensive collection
            </p>
          </div>

          {/* Search and Filters */}
          <div className="search-bar">
            <svg className="search-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              className="search-input"
              placeholder="Search samples, genres, tags..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="filter-bar">
            <select
              className="filter-select"
              value={selectedGenre}
              onChange={(e) => setSelectedGenre(e.target.value)}
            >
              <option value="">All Genres</option>
              {genres.map(genre => (
                <option key={genre} value={genre}>{genre}</option>
              ))}
            </select>

            <select
              className="filter-select"
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
            >
              <option value="">All Types</option>
              {types.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>

            <select
              className="filter-select"
              value={selectedBPM}
              onChange={(e) => setSelectedBPM(e.target.value)}
            >
              <option value="">All BPM</option>
              <option value="60-80">60-80 BPM</option>
              <option value="80-100">80-100 BPM</option>
              <option value="100-120">100-120 BPM</option>
              <option value="120-140">120-140 BPM</option>
              <option value="140+">140+ BPM</option>
            </select>
          </div>
        </div>
      </section>

      {/* Samples Grid */}
      <section className="section">
        <div className="container">
          {isLoading ? (
            <div className="text-center">
              <div className="loading"></div>
              <p>Loading samples...</p>
            </div>
          ) : (
            <>
              <div className="text-center mb-4">
                <h3>Found {filteredSamples.length} samples</h3>
              </div>
              
              <div className="sample-grid">
                {filteredSamples.map(sample => (
                  <div key={sample.id} className="sample-card">
                    <div className="sample-waveform">
                      <svg width="100%" height="100%" viewBox="0 0 100 20" style={{ overflow: 'visible' }}>
                        {generateWaveform(sample.waveform).map((height, index) => (
                          <rect
                            key={index}
                            x={index * 6}
                            y={10 - height * 8}
                            width="4"
                            height={height * 16}
                            fill="#000"
                            opacity="0.8"
                          />
                        ))}
                      </svg>
                      <div style={{
                        position: 'absolute',
                        top: '0.5rem',
                        right: '0.5rem',
                        backgroundColor: 'rgba(0,0,0,0.7)',
                        color: 'white',
                        padding: '0.25rem 0.5rem',
                        borderRadius: '4px',
                        fontSize: '0.75rem'
                      }}>
                        {sample.duration}
                      </div>
                    </div>
                    <div className="sample-info">
                      <h3 className="sample-name">{sample.name}</h3>
                      <p className="sample-bpm">
                        {sample.genre} • {sample.type} • {sample.bpm} BPM • {sample.key}
                      </p>
                      
                      <div style={{ marginBottom: '1rem' }}>
                        <h4 style={{ fontSize: '0.875rem', marginBottom: '0.5rem', color: '#6c757d' }}>
                          Tags:
                        </h4>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.25rem' }}>
                          {sample.tags.map((tag, index) => (
                            <span
                              key={index}
                              style={{
                                backgroundColor: '#f8f9fa',
                                color: '#495057',
                                padding: '0.25rem 0.5rem',
                                borderRadius: '12px',
                                fontSize: '0.75rem',
                                border: '1px solid #dee2e6'
                              }}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div style={{ 
                        display: 'flex', 
                        justifyContent: 'space-between', 
                        alignItems: 'center',
                        marginBottom: '1rem'
                      }}>
                        <div>
                          <p style={{ fontSize: '0.875rem', color: '#6c757d', margin: 0 }}>
                            by {sample.producer}
                          </p>
                        </div>
                        <div className="sample-price">
                          <span className="price">{sample.price}</span>
                        </div>
                      </div>

                      <div style={{ display: 'flex', gap: '0.5rem' }}>
                        <button className="btn btn-primary" style={{ flex: 1 }}>
                          Rent Sample
                        </button>
                        <button className="btn btn-secondary" style={{ flex: 1 }}>
                          Preview
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {filteredSamples.length === 0 && (
                <div className="text-center" style={{ padding: '4rem 0' }}>
                  <h3 style={{ color: '#6c757d', marginBottom: '1rem' }}>
                    No samples found
                  </h3>
                  <p style={{ color: '#6c757d' }}>
                    Try adjusting your search criteria or browse all samples.
                  </p>
                  <button
                    className="btn btn-primary"
                    onClick={() => {
                      setSearchTerm('');
                      setSelectedGenre('');
                      setSelectedType('');
                      setSelectedBPM('');
                    }}
                    style={{ marginTop: '1rem' }}
                  >
                    Clear Filters
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* Pricing Info Section */}
      <section className="section" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Flexible Pricing Options</h2>
            <p className="section-subtitle">
              Choose the licensing option that fits your needs
            </p>
          </div>
          <div className="grid grid-cols-3">
            <div className="card text-center">
              <div className="card-body">
                <h3 style={{ marginBottom: '1rem' }}>Basic License</h3>
                <div style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>
                  $10-30
                </div>
                <ul style={{ textAlign: 'left', marginBottom: '2rem' }}>
                  <li>Personal use only</li>
                  <li>Up to 1,000 copies</li>
                  <li>Non-commercial projects</li>
                  <li>6 months validity</li>
                </ul>
                <button className="btn btn-secondary">Learn More</button>
              </div>
            </div>
            <div className="card text-center">
              <div className="card-body">
                <h3 style={{ marginBottom: '1rem' }}>Commercial License</h3>
                <div style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>
                  $50-150
                </div>
                <ul style={{ textAlign: 'left', marginBottom: '2rem' }}>
                  <li>Commercial use allowed</li>
                  <li>Up to 10,000 copies</li>
                  <li>Streaming platforms</li>
                  <li>1 year validity</li>
                </ul>
                <button className="btn btn-primary">Most Popular</button>
              </div>
            </div>
            <div className="card text-center">
              <div className="card-body">
                <h3 style={{ marginBottom: '1rem' }}>Exclusive License</h3>
                <div style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>
                  $500+
                </div>
                <ul style={{ textAlign: 'left', marginBottom: '2rem' }}>
                  <li>Exclusive ownership</li>
                  <li>Unlimited copies</li>
                  <li>All platforms</li>
                  <li>Lifetime validity</li>
                </ul>
                <button className="btn btn-secondary">Contact Us</button>
              </div>
            </div>
          </div>
        </div>
      </section>

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

export default SampleMarketplace;
