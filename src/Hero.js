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
        {/* Background gradient */}
        <defs>
          <linearGradient id="shellGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8D6E63" />
            <stop offset="100%" stopColor="#5D4037" />
          </linearGradient>
          <linearGradient id="bodyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFD54F" />
            <stop offset="100%" stopColor="#FFA000" />
          </linearGradient>
        </defs>
        
        {/* Grass */}
        <path d="M0,150 C50,130 100,160 150,140 C200,120 250,150 300,130 L300,200 L0,200 Z" fill="#81C784" />
        
        {/* Snail body */}
        <path d="M120,150 Q90,150 80,130 Q70,110 90,100 L150,100 Q170,100 170,120 L170,135 Q150,150 120,150" fill="url(#bodyGradient)" />
        
        {/* Snail shell */}
        <path d="M150,100 Q190,80 170,50 Q150,20 120,30 Q90,40 100,70 Q110,100 130,110 Q140,115 150,100" fill="url(#shellGradient)" />
        <path d="M145,95 Q175,80 160,60 Q145,40 125,45 Q105,50 110,70 Q115,90 130,100 Q137,105 145,95" fill="#D7CCC8" opacity="0.7" />
        
        {/* Snail eyes */}
        <line x1="80" y1="100" x2="70" y2="80" stroke="#5D4037" strokeWidth="2" />
        <circle cx="70" cy="75" r="5" fill="#FFD54F" />
        <circle cx="70" cy="75" r="2" fill="#5D4037" />
        
        <line x1="90" y1="100" x2="85" y2="75" stroke="#5D4037" strokeWidth="2" />
        <circle cx="85" cy="70" r="5" fill="#FFD54F" />
        <circle cx="85" cy="70" r="2" fill="#5D4037" />
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
