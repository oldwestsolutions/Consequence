import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ProducerSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('');
  const [selectedPriceRange, setSelectedPriceRange] = useState('');
  const [producers, setProducers] = useState([]);
  const [filteredProducers, setFilteredProducers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Mock data for producers
  useEffect(() => {
    const mockProducers = [
      {
        id: 1,
        name: "Alex Martinez",
        genre: "Hip Hop",
        location: "Los Angeles, CA",
        rating: 4.9,
        price: "$150/hour",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
        specialties: ["Beat Making", "Mixing", "Mastering"],
        experience: "5+ years"
      },
      {
        id: 2,
        name: "Sarah Chen",
        genre: "Electronic",
        location: "New York, NY",
        rating: 4.8,
        price: "$200/hour",
        image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
        specialties: ["EDM Production", "Sound Design", "Live Performance"],
        experience: "7+ years"
      },
      {
        id: 3,
        name: "Marcus Johnson",
        genre: "R&B",
        location: "Atlanta, GA",
        rating: 4.9,
        price: "$175/hour",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
        specialties: ["Vocals", "Arrangement", "Production"],
        experience: "8+ years"
      },
      {
        id: 4,
        name: "Elena Rodriguez",
        genre: "Pop",
        location: "Miami, FL",
        rating: 4.7,
        price: "$120/hour",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
        specialties: ["Songwriting", "Vocal Production", "Mixing"],
        experience: "4+ years"
      },
      {
        id: 5,
        name: "David Kim",
        genre: "Rock",
        location: "Seattle, WA",
        rating: 4.8,
        price: "$160/hour",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face",
        specialties: ["Guitar Production", "Band Recording", "Mastering"],
        experience: "6+ years"
      },
      {
        id: 6,
        name: "Isabella Thompson",
        genre: "Jazz",
        location: "Chicago, IL",
        rating: 4.9,
        price: "$180/hour",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop&crop=face",
        specialties: ["Jazz Arrangement", "Piano Production", "Live Recording"],
        experience: "10+ years"
      }
    ];

    setProducers(mockProducers);
    setFilteredProducers(mockProducers);
    setIsLoading(false);
  }, []);

  // Filter producers based on search term and filters
  useEffect(() => {
    let filtered = producers;

    if (searchTerm) {
      filtered = filtered.filter(producer =>
        producer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        producer.genre.toLowerCase().includes(searchTerm.toLowerCase()) ||
        producer.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        producer.specialties.some(specialty =>
          specialty.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }

    if (selectedGenre) {
      filtered = filtered.filter(producer => producer.genre === selectedGenre);
    }

    if (selectedPriceRange) {
      filtered = filtered.filter(producer => {
        const price = parseInt(producer.price.replace(/[^0-9]/g, ''));
        switch (selectedPriceRange) {
          case 'under-100':
            return price < 100;
          case '100-150':
            return price >= 100 && price <= 150;
          case '150-200':
            return price >= 150 && price <= 200;
          case 'over-200':
            return price > 200;
          default:
            return true;
        }
      });
    }

    setFilteredProducers(filtered);
  }, [searchTerm, selectedGenre, selectedPriceRange, producers]);

  const genres = [...new Set(producers.map(p => p.genre))];

  return (
    <div className="producer-search">
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
            <h1 className="hero-title">Find Your Perfect Producer</h1>
            <p className="section-subtitle">
              Connect with talented music producers from around the world
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
              placeholder="Search producers, genres, locations..."
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
              value={selectedPriceRange}
              onChange={(e) => setSelectedPriceRange(e.target.value)}
            >
              <option value="">All Price Ranges</option>
              <option value="under-100">Under $100/hour</option>
              <option value="100-150">$100 - $150/hour</option>
              <option value="150-200">$150 - $200/hour</option>
              <option value="over-200">Over $200/hour</option>
            </select>

            <select className="filter-select">
              <option value="">All Locations</option>
              <option value="nyc">New York</option>
              <option value="la">Los Angeles</option>
              <option value="atlanta">Atlanta</option>
              <option value="miami">Miami</option>
              <option value="seattle">Seattle</option>
              <option value="chicago">Chicago</option>
            </select>
          </div>
        </div>
      </section>

      {/* Producers Grid */}
      <section className="section">
        <div className="container">
          {isLoading ? (
            <div className="text-center">
              <div className="loading"></div>
              <p>Loading producers...</p>
            </div>
          ) : (
            <>
              <div className="text-center mb-4">
                <h3>Found {filteredProducers.length} producers</h3>
              </div>
              
              <div className="producer-grid">
                {filteredProducers.map(producer => (
                  <div key={producer.id} className="producer-card">
                    <div className="producer-image">
                      <img
                        src={producer.image}
                        alt={producer.name}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover'
                        }}
                      />
                      <div style={{
                        position: 'absolute',
                        top: '1rem',
                        right: '1rem',
                        backgroundColor: 'rgba(0,0,0,0.7)',
                        color: 'white',
                        padding: '0.25rem 0.5rem',
                        borderRadius: '4px',
                        fontSize: '0.875rem'
                      }}>
                        {producer.price}
                      </div>
                    </div>
                    <div className="producer-info">
                      <h3 className="producer-name">{producer.name}</h3>
                      <p className="producer-genre">{producer.genre} • {producer.location}</p>
                      
                      <div className="producer-rating">
                        <div className="stars">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              className={`star ${i < Math.floor(producer.rating) ? 'filled' : ''}`}
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                            </svg>
                          ))}
                        </div>
                        <span style={{ color: '#6c757d', fontSize: '0.875rem' }}>
                          {producer.rating} ({producer.experience})
                        </span>
                      </div>

                      <div style={{ marginBottom: '1rem' }}>
                        <h4 style={{ fontSize: '0.875rem', marginBottom: '0.5rem', color: '#6c757d' }}>
                          Specialties:
                        </h4>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.25rem' }}>
                          {producer.specialties.map((specialty, index) => (
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
                              {specialty}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div style={{ display: 'flex', gap: '0.5rem' }}>
                        <button className="btn btn-primary" style={{ flex: 1 }}>
                          Hire Now
                        </button>
                        <button className="btn btn-secondary" style={{ flex: 1 }}>
                          View Profile
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {filteredProducers.length === 0 && (
                <div className="text-center" style={{ padding: '4rem 0' }}>
                  <h3 style={{ color: '#6c757d', marginBottom: '1rem' }}>
                    No producers found
                  </h3>
                  <p style={{ color: '#6c757d' }}>
                    Try adjusting your search criteria or browse all producers.
                  </p>
                  <button
                    className="btn btn-primary"
                    onClick={() => {
                      setSearchTerm('');
                      setSelectedGenre('');
                      setSelectedPriceRange('');
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

export default ProducerSearch;
