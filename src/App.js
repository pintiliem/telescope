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
      url: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=1200&h=600&fit=crop',
      title: 'Centaurus A',
      description: 'A prominent galaxy with a supermassive black hole at its center'
    },
    {
      url: 'https://images.squarespace-cdn.com/content/v1/57e97e6ab8a79be1e7ae0ae6/8611229d-03cb-4276-9d26-9dabefd69cdf/FlamingStar+Final+HansonVCropLRGBHAsmall.jpg?format=2500w',
      title: 'Flaming Star Nebula',
      description: 'A bright emission nebula surrounded by dark dust clouds'
    },
    {
      url: 'https://i.redd.it/ep815u7cdsp81.png',
      title: 'Dragons of Ara',
      description: 'A stunning nebula complex in the constellation Ara'
    }
  ];
  const [currentImage, setCurrentImage] = useState(0);


  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage(prev => prev === images.length - 1 ? 0 : prev + 1);
    }, 30000);
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
          <a href="#stock-preowned">STOCK AND PRE-OWNED</a>
          <a href="#gallery">GALLERY</a>
          <div className="dropdown">
            <a href="#about">ABOUT OUR OPTICS</a>
            <div className="dropdown-content">
              <a href="#optical-design">OPTICAL DESIGN</a>
              <a href="#optical-quality">OPTICAL QUALITY - LENS</a>
            </div>
          </div>
        </nav>
      </header>
      
      <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="Logo" className="logo" />
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
        
        <div className="cards-grid">
              <div className="card" style={{backgroundImage: 'url(https://www.cfftelescopes.com/img/product-type1.jpg)'}}>
                <h3>Refractor Telescopes</h3>
                <p>High-quality refractor telescopes for crisp, clear views</p>
                <button>Discover Products</button>
              </div>
              <div className="card" style={{backgroundImage: 'url(https://www.cfftelescopes.com/img/product-type2.jpg)'}}>
                <h3>Reflector Telescopes</h3>
                <p>Powerful reflector telescopes for deep space observation</p>
                <button>Learn More</button>
              </div>
              <div className="card" style={{backgroundImage: 'url(https://www.cfftelescopes.com/img/product-type3.jpg)'}}>
                <h3>Stock and Pre-owned</h3>
                <p>Quality used telescopes and equipment at great prices</p>
                <button>Learn More</button>
              </div>
              <div className="card" style={{backgroundImage: 'url(https://www.cfftelescopes.com/img/mount2.jpg)'}}>
                <h3>Telescope Mounts</h3>
                <p>Stable and precise mounts for your telescope setup</p>
                <button>Learn More</button>
              </div>
              <div className="card" style={{backgroundImage: 'url(https://www.cfftelescopes.com/img/services1.jpg)'}}>
                <h3>Services</h3>
                <p>Professional telescope services and support</p>
                <button>Learn More</button>
              </div>
              <div className="card" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400&h=400&fit=crop)'}}>
                <h3>Accessories</h3>
                <p>Essential accessories to complete your setup</p>
                <button>Learn More</button>
              </div>
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