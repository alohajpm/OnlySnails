import React from 'react';
import './Hero.css';

function Hero() {
  // Using inline SVG rather than trying to load an external image
  const renderHeroImage = () => {
    return (
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 300 200" 
        className="hero-svg-image"
      >
        
  <path d="M50,220 C110,210 170,210 230,210 C290,210 350,220 350,220 L350,250 C290,245 230,245 170,245 C110,245 50,250 50,250 Z" 
        fill="#8dab91" stroke="#5d8b6d" stroke-width="2"/>
  
  
  <path d="M50,220 C40,200 50,180 70,180 C90,180 100,200 90,220" 
        fill="#8dab91" stroke="#5d8b6d" stroke-width="2"/>
  
  
  <path d="M60,180 C55,170 55,160 60,150" stroke="#5d8b6d" stroke-width="3" stroke-linecap="round" fill="none"/>
  <path d="M80,180 C85,170 85,160 80,150" stroke="#5d8b6d" stroke-width="3" stroke-linecap="round" fill="none"/>
  
  
  <circle cx="60" cy="150" r="7" fill="#ffffff" stroke="#5d8b6d" stroke-width="1.5"/>
  <circle cx="80" cy="150" r="7" fill="#ffffff" stroke="#5d8b6d" stroke-width="1.5"/>
  <circle cx="60" cy="150" r="3.5" fill="#2c3e50"/>
  <circle cx="80" cy="150" r="3.5" fill="#2c3e50"/>
  
  
  <ellipse cx="230" cy="160" rx="80" ry="70" fill="#c17a44" stroke="#8b4513" stroke-width="3"/>
  
 
  <ellipse cx="230" cy="160" rx="60" ry="52" fill="none" stroke="#8b4513" stroke-width="2.5"/>
  <ellipse cx="230" cy="160" rx="40" ry="35" fill="none" stroke="#8b4513" stroke-width="2.5"/>
  <ellipse cx="230" cy="160" rx="20" ry="17" fill="none" stroke="#8b4513" stroke-width="2.5"/>
  
  
  <path d="M50,250 C40,250 30,252 20,252 C10,252 0,250 -10,250" 
        fill="none" stroke="#c5e0c9" stroke-width="4" stroke-linecap="round" stroke-opacity="0.7"/>
</svg>
    );
  };

  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-content">
          <h2>Explore the <span className="accent">Fascinating World</span> of Gastropods</h2>
          <p>Discover, share, and connect with fellow gastropod admirers. From rare species to expert care tips, dive into the captivating universe of snails and their relatives.</p>
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
            {renderHeroImage()}
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
