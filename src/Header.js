import React, { useState } from 'react';
import './Header.css';
import logoSvg from './images/logo.svg';

function Header({ onNavigate, currentSection }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleNavClick = (section) => {
    onNavigate(section);
    setMenuOpen(false);
  };

  return (
    <header className="site-header">
      <div className="container header-container">
        <div className="logo" onClick={() => handleNavClick('home')}>
          <img src={logoSvg} alt="OnlySnails Logo" className="logo-img" />
          <h1>OnlySnails</h1>
        </div>
        
        <nav>
          <button 
            className="mobile-menu-toggle" 
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={toggleMenu}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
          
          <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
            <li>
              <button 
                className={currentSection === 'home' ? 'active' : ''} 
                onClick={() => handleNavClick('home')}
              >
                Home
              </button>
            </li>
            <li>
              <button 
                className={currentSection === 'facts' ? 'active' : ''} 
                onClick={() => handleNavClick('facts')}
              >
                Snail Facts
              </button>
            </li>
            <li>
              <button 
                className={currentSection === 'funny' ? 'active' : ''} 
                onClick={() => handleNavClick('funny')}
              >
                Funny Snails
              </button>
            </li>
            <li>
              <button 
                className={`${currentSection === 'chat' ? 'active' : ''} highlight`} 
                onClick={() => handleNavClick('chat')}
              >
                Chat
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
