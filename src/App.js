import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Header';
import Hero from './Hero';
import SnailFacts from './SnailFacts';
import FunnySnails from './FunnySnails';
import Footer from './Footer';
import SnailRace from './SnailRace';
import Chat from './Chat';

function App() {
  const [highContrast, setHighContrast] = useState(false);
  const [largerText, setLargerText] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [selectedSection, setSelectedSection] = useState('home');

  useEffect(() => {
    // Apply accessibility classes to body
    if (highContrast) {
      document.body.classList.add('high-contrast');
    } else {
      document.body.classList.remove('high-contrast');
    }

    if (largerText) {
      document.body.classList.add('larger-text');
    } else {
      document.body.classList.remove('larger-text');
    }

    if (reducedMotion) {
      document.body.classList.add('reduced-motion');
    } else {
      document.body.classList.remove('reduced-motion');
    }
  }, [highContrast, largerText, reducedMotion]);

  // Handle navigation
  const handleNavigation = (section) => {
    setSelectedSection(section);
    // Scroll to top when changing section
    window.scrollTo(0, 0);
  };

  return (
    <div className="App">
      <Header onNavigate={handleNavigation} currentSection={selectedSection} />
      
      {selectedSection === 'home' && (
        <>
          <Hero />
          <SnailRace />
          <SnailFacts />
          <FunnySnails />
        </>
      )}
      
      {selectedSection === 'facts' && <SnailFacts fullPage={true} />}
      {selectedSection === 'funny' && <FunnySnails fullPage={true} />}
      {selectedSection === 'chat' && <Chat />}
      
      <Footer onNavigate={handleNavigation} />
      
      <div className="accessibility-controls">
        <button 
          id="toggle-high-contrast" 
          aria-pressed={highContrast}
          onClick={() => setHighContrast(!highContrast)}
        >
          High Contrast
        </button>
        <button 
          id="toggle-font-size" 
          aria-pressed={largerText}
          onClick={() => setLargerText(!largerText)}
        >
          Larger Text
        </button>
        <button 
          id="toggle-animations" 
          aria-pressed={reducedMotion}
          onClick={() => setReducedMotion(!reducedMotion)}
        >
          Reduce Motion
        </button>
      </div>
    </div>
  );
}

export default App;
