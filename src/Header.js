import React from 'react';
import './Hero.css';

// Try to import hero image with fallback
let heroSnailImg;
try {
  heroSnailImg = require('./images/hero-snail.png').default;
} catch (e) {
  // Placeholder colored rectangle as fallback
  heroSnailImg = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400'%3E%3Crect width='600' height='400' fill='%2348A999' /%3E%3C/svg%3E";
  console.warn("Couldn't load hero image, using placeholder");
}

function Hero() {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-content">
          <h2>Welcome to the Premier <span className="accent">Snail Enthusiast</span> Community</h2>
          <p>Discover, share, and connect with fellow gastropod admirers. From rare species to expert care tips, dive into the fascinating world of snails.</p>
          <div className="cta-buttons">
            <button className="btn btn-primary" onClick={() => window.scrollTo({ top: document.querySelector('.snail-facts')?.offsetTop || 0, behavior: 'smooth' })}>
              Explore Snail Facts
            </button>
            <button className="btn btn-secondary" onClick={() => window.scrollTo({ top: document.querySelector('.funny-snails')?.offsetTop || 0, behavior: 'smooth' })}>
              See Funny Snails
            </button>
          </div>
        </div>
        <div className="hero-image">
          <div className="image-container">
            <img src={heroSnailImg} alt="A beautiful garden snail" className="main-image" />
            <div className="floating-elements">
              <span className="floating-element leaf-1"></span>
              <span className="floating-element leaf-2"></span>
              <span className="floating-element bubble-1"></span>
              <span className="floating-element bubble-2"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
