import React from 'react';
import './Footer.css';

// Try to import logo, but have a fallback
let logoSvg;
try {
  logoSvg = require('./images/logo.svg').default;
} catch (e) {
  // Simple SVG data URL as fallback
  logoSvg = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='40' fill='%2300796B' /%3E%3C/svg%3E";
  console.warn("Couldn't load logo image, using placeholder");
}

function Footer({ onNavigate }) {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <img src={logoSvg} alt="OnlySnails Logo" className="logo-img" />
            <h2>OnlySnails</h2>
            <p>The premier community for snail enthusiasts worldwide.</p>
          </div>
          
          <div className="footer-links">
            <div className="link-group">
              <h3>Site Map</h3>
              <ul>
                <li><button onClick={() => onNavigate('home')}>Home</button></li>
                <li><button onClick={() => onNavigate('facts')}>Snail Facts</button></li>
                <li><button onClick={() => onNavigate('funny')}>Funny Snails</button></li>
                <li><button onClick={() => onNavigate('chat')}>Live Chat</button></li>
              </ul>
            </div>
            
            <div className="link-group">
              <h3>Resources</h3>
              <ul>
                <li><a href="#">Beginner's Guide</a></li>
                <li><a href="#">Feeding Chart</a></li>
                <li><a href="#">Health Symptoms</a></li>
                <li><a href="#">Breeding Tips</a></li>
              </ul>
            </div>
            
            <div className="link-group">
              <h3>Connect</h3>
              <ul>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Service</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} OnlySnails. All rights reserved.</p>
          <div className="social-links">
            <a href="#" aria-label="Follow us on Instagram" className="social-link instagram"></a>
            <a href="#" aria-label="Join our Facebook group" className="social-link facebook"></a>
            <a href="#" aria-label="Subscribe to our YouTube channel" className="social-link youtube"></a>
            <a href="#" aria-label="Follow us on Twitter" className="social-link twitter"></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
