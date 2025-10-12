import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const images = [
    {
      url: 'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=1200&h=600&fit=crop',
      title: 'Spiral Galaxy',
      description: 'A magnificent spiral galaxy with billions of stars'
    },
    {
      url: 'https://images.unsplash.com/photo-1502134249126-9f3755a50d78?w=1200&h=600&fit=crop',
      title: 'Nebula',
      description: 'Colorful cosmic clouds where new stars are born'
    },
    {
      url: 'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=1200&h=600&fit=crop',
      title: 'Deep Space',
      description: 'The vast expanse of the universe beyond our solar system'
    },
    {
      url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=600&fit=crop',
      title: 'Cosmic Wonder',
      description: 'Beautiful celestial formations in the night sky'
    },
    {
      url: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=1200&h=600&fit=crop',
      title: 'Centaurus A',
      description: 'A prominent galaxy with a supermassive black hole at its center'
    },
    {
      url: 'https://images.unsplash.com/photo-1543722530-d2c3201371e7?w=1200&h=600&fit=crop',
      title: 'Flaming Star Nebula',
      description: 'A bright emission nebula surrounded by dark dust clouds'
    },
    {
      url: 'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=1200&h=600&fit=crop',
      title: 'Crab Nebula',
      description: 'A supernova remnant and pulsar wind nebula in the constellation Taurus'
    }
  ];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage(prev => prev === images.length - 1 ? 0 : prev + 1);
    }, 10000);
    return () => clearInterval(timer);
  }, [images.length]);
  return (
    <div className="app">
      <header className="header">
        <nav className="nav">
          <a href="#home">HOME</a>
          <div className="dropdown">
            <a href="#products">PRODUCTS</a>
            <div className="dropdown-content">
              <a href="#refractors">REFRACTORS</a>
              <a href="#mounts">MOUNTS</a>
            </div>
          </div>
          <a href="#gallery">GALLERY</a>
          <a href="#about">ABOUT OUR OPTICS</a>
        </nav>
      </header>
      
      <img src="/logo.png" alt="Logo" className="logo" />
      <main className="main">
        <div className="carousel">
          <button className="nav-btn left" onClick={() => setCurrentImage(currentImage === 0 ? images.length - 1 : currentImage - 1)}>‹</button>
          <img src={images[currentImage].url} alt={images[currentImage].title} className="carousel-image" />
          <div className="image-info">
            <h3>{images[currentImage].title}</h3>
            <p>{images[currentImage].description}</p>
          </div>
          <button className="nav-btn right" onClick={() => setCurrentImage(currentImage === images.length - 1 ? 0 : currentImage + 1)}>›</button>
        </div>
        <div className="sections">
          <section className="updates">
            <h2>Latest Updates</h2>
            <p>Stay tuned for our newest telescope releases and astronomical discoveries.</p>
          </section>
          <section className="coming-soon">
            <h2>Coming Soon</h2>
            <p>Exciting new products and features are on the horizon.</p>
          </section>
        </div>
      </main>
      
      <footer className="footer">
        <nav className="footer-nav">
          <a href="#home">Home</a>
          <a href="#about">About Us</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#services">Services</a>
          <a href="#terms">Term of Sale</a>
          <a href="#dealers">Dealers</a>
          <a href="#contact">Contact</a>
        </nav>
        <p>Copyright All Rights Reserved © 2025   CFF Telescopes</p>
      </footer>
    </div>
  );
}

export default App;