import React from 'react';
import './Hero.css';
import heroSnailImg from './images/hero-snail.png';

function Hero() {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-content">
          <h2>Welcome to the Premier <span className="accent">Snail Enthusiast</span> Community</h2>
          <p>Discover, share, and connect with fellow gastropod admirers. From rare species to expert care tips, dive into the fascinating world of snails.</p>
          <div className="cta-buttons">
            <button className="btn btn-primary" onClick={() => window.scrollTo({ top: document.querySelector('.snail-facts').offsetTop, behavior: 'smooth' })}>
              Explore Snail Facts
            </button>
            <button className="btn btn-secondary" onClick={() => window.scrollTo({ top: document.querySelector('.funny-snails').offsetTop, behavior: 'smooth' })}>
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
