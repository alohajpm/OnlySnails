import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Header';
import Hero from './Hero';
import SnailFacts from './SnailFacts';
import FunnySnails from './FunnySnails';
import Footer from './Footer';
import SnailRace from './SnailRace';
import Chat from './Chat';
import HealthSymptoms from './HealthSymptoms';
import FeedingChart from './FeedingChart';
import BeginnersGuide from './BeginnersGuide';
import BreedingTips from './BreedingTips';
import AboutUs from './AboutUs';
import Contact from './Contact';
import PrivacyPolicy from './PrivacyPolicy';
import TermsOfService from './TermsOfService';

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
      
      <main>
        {selectedSection === 'home' && (
          <>
            <Hero />
            <SnailRace />
            <SnailFacts fullPage={false} />
            <FunnySnails fullPage={false} />
          </>
        )}
        
        {selectedSection === 'facts' && <SnailFacts fullPage={true} />}
        {selectedSection === 'funny' && <FunnySnails fullPage={true} />}
        {selectedSection === 'chat' && <Chat />}
        {selectedSection === 'beginners-guide' && <BeginnersGuide />}
        {selectedSection === 'feeding-chart' && <FeedingChart />}
        {selectedSection === 'health-symptoms' && <HealthSymptoms />}
        {selectedSection === 'breeding-tips' && <BreedingTips />}
        {selectedSection === 'about-us' && <AboutUs />}
        {selectedSection === 'contact' && <Contact />}
        {selectedSection === 'privacy-policy' && <PrivacyPolicy />}
        {selectedSection === 'terms-of-service' && <TermsOfService />}
      </main>
      
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
