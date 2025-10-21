import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="homepage">
      {/* Navigation */}
      <nav className={`navbar ${isScrolled ? 'navbar-hidden' : ''}`}>
        <div className="container">
          <div className="navbar-content">
            <Link to="/" className="navbar-brand">
              CONSEQUENCE
            </Link>
            <div>
              <Link to="/login" className="btn btn-primary btn-sm">LOGIN</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - NYC Style */}
      <section className="hero">
        <div className="container">
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: '1fr 1fr', 
            gap: '4rem', 
            alignItems: 'center',
            minHeight: '600px'
          }}>
            <div>
              <h1 style={{ 
                fontSize: '4rem', 
                fontWeight: '900', 
                marginBottom: '2rem',
                lineHeight: '1.1',
                color: '#000000'
              }}>
                Music Production
                <br />
                <span style={{ color: '#666' }}>Made Simple</span>
              </h1>
              <p style={{ 
                fontSize: '1.5rem', 
                color: '#6c757d', 
                marginBottom: '3rem',
                lineHeight: '1.6'
              }}>
                Professional music production tools and services. Connect with producers, 
                rent premium samples, and create music with cutting-edge VST plugins.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link to="/studio-showcase" className="btn btn-primary btn-lg" style={{ fontSize: '1.25rem', padding: '1rem 2rem' }}>
                  The Studio
                </Link>
                <Link to="/producers" className="btn btn-secondary btn-lg" style={{ fontSize: '1.25rem', padding: '1rem 2rem' }}>
                  Download App
                </Link>
              </div>
            </div>
            <div>
              <img 
                src="Leonardoconsequence.jpeg" 
                alt="Consequence VST Interface" 
                style={{ 
                  width: '100%', 
                  height: 'auto',
                  borderRadius: '16px',
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)'
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sliding Features Feed */}
      <section style={{ 
        backgroundColor: '#000', 
        color: 'white', 
        padding: '2rem 0',
        overflow: 'hidden',
        position: 'relative'
      }}>
        <div style={{
          display: 'flex',
          animation: 'slide 30s linear infinite',
          gap: '4rem',
          width: 'max-content'
        }}>
          {[...Array(3)].map((_, i) => (
            <div key={i} style={{ 
              display: 'flex', 
              gap: '4rem',
              alignItems: 'center',
              flexShrink: 0
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{
                  width: '32px',
                  height: '32px',
                  backgroundColor: '#1db954',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <span style={{ color: 'white', fontSize: '12px', fontWeight: 'bold' }}>S</span>
                </div>
                <span style={{ fontSize: '1.25rem', fontWeight: '600' }}>Premium Samples</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{
                  width: '32px',
                  height: '32px',
                  backgroundColor: '#1db954',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <span style={{ color: 'white', fontSize: '12px', fontWeight: 'bold' }}>V</span>
                </div>
                <span style={{ fontSize: '1.25rem', fontWeight: '600' }}>Professional VSTs</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{
                  width: '32px',
                  height: '32px',
                  backgroundColor: '#1db954',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <span style={{ color: 'white', fontSize: '12px', fontWeight: 'bold' }}>P</span>
                </div>
                <span style={{ fontSize: '1.25rem', fontWeight: '600' }}>Expert Producers</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{
                  width: '32px',
                  height: '32px',
                  backgroundColor: '#1db954',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <span style={{ color: 'white', fontSize: '12px', fontWeight: 'bold' }}>D</span>
                </div>
                <span style={{ fontSize: '1.25rem', fontWeight: '600' }}>Instant Download</span>
              </div>
            </div>
          ))}
        </div>
        
        <style jsx>{`
          @keyframes slide {
            0% { transform: translateX(0); }
            100% { transform: translateX(-100%); }
          }
        `}</style>
      </section>

      {/* The Studio Section - Full Screen */}
      <section style={{ 
        minHeight: '100vh', 
        backgroundColor: '#000', 
        color: 'white', 
        display: 'flex',
        alignItems: 'center',
        padding: '4rem 0'
      }}>
        <div className="container">
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: '1fr 1fr', 
            gap: '4rem', 
            alignItems: 'center'
          }}>
            <div>
              <h2 style={{ 
                fontSize: '3.5rem', 
                fontWeight: '900', 
                marginBottom: '2rem',
                lineHeight: '1.1'
              }}>
                The Studio
              </h2>
              <p style={{ 
                fontSize: '1.5rem', 
                color: '#b3b3b3', 
                marginBottom: '2rem',
                lineHeight: '1.6'
              }}>
                Professional VST plugins and audio tools designed by industry veterans. 
                Our signature collection brings studio-quality sound to your productions.
              </p>
              <div style={{ marginBottom: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                  <div style={{
                    width: '24px',
                    height: '24px',
                    backgroundColor: '#1db954',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <span style={{ color: 'white', fontSize: '10px', fontWeight: 'bold' }}>EQ</span>
                  </div>
                  <span style={{ fontSize: '1.125rem' }}>Professional EQ & Compression</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                  <div style={{
                    width: '24px',
                    height: '24px',
                    backgroundColor: '#1db954',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <span style={{ color: 'white', fontSize: '10px', fontWeight: 'bold' }}>SY</span>
                  </div>
                  <span style={{ fontSize: '1.125rem' }}>Advanced Synthesizers</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                  <div style={{
                    width: '24px',
                    height: '24px',
                    backgroundColor: '#1db954',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <span style={{ color: 'white', fontSize: '10px', fontWeight: 'bold' }}>VO</span>
                  </div>
                  <span style={{ fontSize: '1.125rem' }}>Vocal Processing Suite</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{
                    width: '24px',
                    height: '24px',
                    backgroundColor: '#1db954',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <span style={{ color: 'white', fontSize: '10px', fontWeight: 'bold' }}>FX</span>
                  </div>
                  <span style={{ fontSize: '1.125rem' }}>Creative Effects & Modulation</span>
                </div>
              </div>
              <Link to="/studio-showcase" className="btn btn-primary btn-lg" style={{ 
                fontSize: '1.25rem', 
                padding: '1rem 2rem',
                backgroundColor: '#1db954',
                borderColor: '#1db954'
              }}>
                Explore The Studio
              </Link>
            </div>
            <div style={{ 
              backgroundImage: 'url(https://via.placeholder.com/600x400/333/fff?text=Studio+Interface)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '500px',
              borderRadius: '16px',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)'
            }}></div>
          </div>
        </div>
      </section>

      {/* Community Section - Full Screen */}
      <section style={{ 
        minHeight: '100vh', 
        backgroundColor: '#1a1a1a', 
        color: 'white', 
        display: 'flex',
        alignItems: 'center',
        padding: '4rem 0'
      }}>
        <div className="container">
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: '1fr 1fr', 
            gap: '4rem', 
            alignItems: 'center'
          }}>
            <div style={{ 
              backgroundImage: 'url(https://via.placeholder.com/600x400/444/fff?text=Community)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '500px',
              borderRadius: '16px',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)'
            }}></div>
            <div>
              <div style={{ 
                fontSize: '1.5rem', 
                fontWeight: 'bold', 
                color: '#1db954', 
                marginBottom: '1rem',
                letterSpacing: '1px'
              }}>
                #MADEONCONSEQUENCE
              </div>
              <h2 style={{ 
                fontSize: '3.5rem', 
                fontWeight: '900', 
                marginBottom: '2rem',
                lineHeight: '1.1'
              }}>
                Join Our Community
              </h2>
              <p style={{ 
                fontSize: '1.5rem', 
                color: '#b3b3b3', 
                marginBottom: '2rem',
                lineHeight: '1.6'
              }}>
                Connect with thousands of producers, artists, and music creators worldwide. 
                Share your work, collaborate on projects, and grow your network.
              </p>
              <div style={{ marginBottom: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                  <div style={{
                    width: '24px',
                    height: '24px',
                    backgroundColor: '#1db954',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <span style={{ color: 'white', fontSize: '10px', fontWeight: 'bold' }}>P</span>
                  </div>
                  <span style={{ fontSize: '1.125rem' }}>10,000+ Active Producers</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                  <div style={{
                    width: '24px',
                    height: '24px',
                    backgroundColor: '#1db954',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <span style={{ color: 'white', fontSize: '10px', fontWeight: 'bold' }}>B</span>
                  </div>
                  <span style={{ fontSize: '1.125rem' }}>50,000+ Beats Shared</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                  <div style={{
                    width: '24px',
                    height: '24px',
                    backgroundColor: '#1db954',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <span style={{ color: 'white', fontSize: '10px', fontWeight: 'bold' }}>C</span>
                  </div>
                  <span style={{ fontSize: '1.125rem' }}>Collaborative Projects</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{
                    width: '24px',
                    height: '24px',
                    backgroundColor: '#1db954',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <span style={{ color: 'white', fontSize: '10px', fontWeight: 'bold' }}>S</span>
                  </div>
                  <span style={{ fontSize: '1.125rem' }}>Success Stories</span>
                </div>
              </div>
              <Link to="/producers" className="btn btn-secondary btn-lg" style={{ 
                fontSize: '1.25rem', 
                padding: '1rem 2rem',
                backgroundColor: '#333',
                borderColor: '#333',
                color: 'white'
              }}>
                Join Community
              </Link>
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

export default HomePage;