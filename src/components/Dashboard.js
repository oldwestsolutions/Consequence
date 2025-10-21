import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Dashboard = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error('Failed to log out');
    }
  };

  const featuredProducts = [
    {
      id: 1,
      name: "Consequence EQ Pro",
      price: "$89",
      originalPrice: "$149",
      category: "VST Plugin",
      image: "https://via.placeholder.com/300x200/333/fff?text=EQ+Pro",
      rating: 4.9,
      reviews: 127
    },
    {
      id: 2,
      name: "Trap Essentials Pack",
      price: "$45",
      originalPrice: "$79",
      category: "Sample Pack",
      image: "https://via.placeholder.com/300x200/333/fff?text=Trap+Pack",
      rating: 4.8,
      reviews: 89
    },
    {
      id: 3,
      name: "Synth Master VST",
      price: "$149",
      originalPrice: "$199",
      category: "VST Plugin",
      image: "https://via.placeholder.com/300x200/333/fff?text=Synth+Master",
      rating: 4.9,
      reviews: 156
    },
    {
      id: 4,
      name: "Hip Hop Drum Kit",
      price: "$29",
      originalPrice: "$49",
      category: "Sample Pack",
      image: "https://via.placeholder.com/300x200/333/fff?text=Hip+Hop+Kit",
      rating: 4.7,
      reviews: 203
    }
  ];

  const categories = [
    { name: "VST Plugins", count: "150+", icon: "🎛️" },
    { name: "Sample Packs", count: "500+", icon: "🎵" },
    { name: "Drum Kits", count: "200+", icon: "🥁" },
    { name: "MIDI Files", count: "300+", icon: "🎹" }
  ];

  return (
    <div style={{ backgroundColor: '#0a0a0a', color: 'white', minHeight: '100vh' }}>
      {/* Navigation */}
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: isScrolled ? 'rgba(10, 10, 10, 0.95)' : 'rgba(10, 10, 10, 0.9)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid #333',
        zIndex: 1000,
        padding: '1rem 0',
        transition: 'all 0.3s ease'
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
              <Link to="/studio" style={{
                color: 'white',
                textDecoration: 'none',
                fontSize: '1rem',
                fontWeight: '500',
                padding: '0.5rem 1rem',
                borderRadius: '20px',
                backgroundColor: '#1db954',
                transition: 'all 0.3s ease'
              }}>
                Studio
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
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h1 style={{ 
              fontSize: '3.5rem', 
              fontWeight: '900', 
              marginBottom: '1rem',
              background: 'linear-gradient(135deg, #1db954 0%, #fff 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              Welcome back, {currentUser?.email?.split('@')[0]}!
            </h1>
            <p style={{ fontSize: '1.25rem', color: '#b3b3b3', maxWidth: '600px', margin: '0 auto' }}>
              Discover the latest music production tools and elevate your sound
            </p>
          </div>

          {/* Search Bar */}
          <div style={{ 
            maxWidth: '600px', 
            margin: '0 auto 4rem',
            position: 'relative'
          }}>
            <input
              type="text"
              placeholder="Search for plugins, samples, or producers..."
              style={{
                width: '100%',
                padding: '1.25rem 1.25rem 1.25rem 3rem',
                backgroundColor: '#1a1a1a',
                border: '2px solid #333',
                borderRadius: '50px',
                color: 'white',
                fontSize: '1rem'
              }}
            />
            <div style={{
              position: 'absolute',
              left: '1rem',
              top: '50%',
              transform: 'translateY(-50%)',
              color: '#666'
            }}>
              🔍
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section style={{ padding: '4rem 0', backgroundColor: '#0a0a0a' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '3rem', textAlign: 'center' }}>
            Shop by Category
          </h2>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: '2rem'
          }}>
            {categories.map((category, index) => (
              <div key={index} style={{
                backgroundColor: '#1a1a1a',
                borderRadius: '16px',
                padding: '2rem',
                textAlign: 'center',
                border: '1px solid #333',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{category.icon}</div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                  {category.name}
                </h3>
                <p style={{ color: '#666', fontSize: '0.875rem' }}>{category.count} products</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section style={{ padding: '4rem 0', backgroundColor: '#1a1a1a' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '3rem', textAlign: 'center' }}>
            Featured Products
          </h2>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
            gap: '2rem'
          }}>
            {featuredProducts.map((product) => (
              <div key={product.id} style={{
                backgroundColor: '#2a2a2a',
                borderRadius: '16px',
                overflow: 'hidden',
                border: '1px solid #333',
                transition: 'all 0.3s ease'
              }}>
                <div style={{
                  height: '200px',
                  backgroundImage: `url(${product.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  position: 'relative'
                }}>
                  <div style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    backgroundColor: '#1db954',
                    color: 'white',
                    padding: '0.5rem 1rem',
                    borderRadius: '20px',
                    fontSize: '0.875rem',
                    fontWeight: 'bold'
                  }}>
                    {product.category}
                  </div>
                </div>
                <div style={{ padding: '1.5rem' }}>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                    {product.name}
                  </h3>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      {[...Array(5)].map((_, i) => (
                        <span key={i} style={{ color: i < Math.floor(product.rating) ? '#ffd700' : '#666' }}>
                          ★
                        </span>
                      ))}
                    </div>
                    <span style={{ color: '#666', fontSize: '0.875rem' }}>
                      {product.rating} ({product.reviews} reviews)
                    </span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                    <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1db954' }}>
                      {product.price}
                    </span>
                    <span style={{ 
                      fontSize: '1rem', 
                      color: '#666', 
                      textDecoration: 'line-through' 
                    }}>
                      {product.originalPrice}
                    </span>
                  </div>
                  <button style={{
                    width: '100%',
                    padding: '0.75rem',
                    backgroundColor: '#1db954',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    fontWeight: 'bold',
                    cursor: 'pointer'
                  }}>
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section style={{ padding: '4rem 0', backgroundColor: '#0a0a0a' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
            gap: '2rem',
            textAlign: 'center'
          }}>
            <div>
              <h3 style={{ fontSize: '3rem', fontWeight: 'bold', color: '#1db954', marginBottom: '0.5rem' }}>
                10K+
              </h3>
              <p style={{ color: '#666' }}>Products</p>
            </div>
            <div>
              <h3 style={{ fontSize: '3rem', fontWeight: 'bold', color: '#1db954', marginBottom: '0.5rem' }}>
                50K+
              </h3>
              <p style={{ color: '#666' }}>Downloads</p>
            </div>
            <div>
              <h3 style={{ fontSize: '3rem', fontWeight: 'bold', color: '#1db954', marginBottom: '0.5rem' }}>
                5K+
              </h3>
              <p style={{ color: '#666' }}>Producers</p>
            </div>
            <div>
              <h3 style={{ fontSize: '3rem', fontWeight: 'bold', color: '#1db954', marginBottom: '0.5rem' }}>
                99%
              </h3>
              <p style={{ color: '#666' }}>Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ 
        backgroundColor: '#000', 
        padding: '3rem 0 2rem',
        borderTop: '1px solid #333'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ textAlign: 'center' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem', color: '#1db954' }}>
              CONSEQUENCE
            </h3>
            <p style={{ color: '#666', marginBottom: '2rem' }}>
              The ultimate music production marketplace
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '2rem' }}>
              <Link to="/studio-showcase" style={{ color: '#666', textDecoration: 'none' }}>Studio</Link>
              <a href="#" style={{ color: '#666', textDecoration: 'none' }}>About</a>
              <a href="#" style={{ color: '#666', textDecoration: 'none' }}>Support</a>
              <a href="#" style={{ color: '#666', textDecoration: 'none' }}>Contact</a>
            </div>
            <p style={{ color: '#666', fontSize: '0.875rem' }}>
              © 2024 Consequence. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;
