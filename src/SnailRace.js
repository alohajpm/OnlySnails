import React, { useState, useRef } from 'react';
import './SnailRace.css';
// Note: For this component, we're using CSS background images for the snails
// rather than direct image imports, so we don't need to import those files here

function SnailRace() {
  const [selectedSnail, setSelectedSnail] = useState(null);
  const [raceInProgress, setRaceInProgress] = useState(false);
  const [raceFinished, setRaceFinished] = useState(false);
  const [winner, setWinner] = useState(null);
  const snailRefs = useRef({
    speedy: { progress: 0, id: 'speedy', name: 'Speedy', ref: null },
    shelly: { progress: 0, id: 'shelly', name: 'Shelly', ref: null },
    slugger: { progress: 0, id: 'slugger', name: 'Slugger', ref: null },
    turbo: { progress: 0, id: 'turbo', name: 'Turbo', ref: null },
  });
  const animationFrameRef = useRef(null);
  
  const selectSnail = (snailId) => {
    setSelectedSnail(snailId);
  };
  
  const startRace = () => {
    if (!selectedSnail || raceInProgress) return;
    
    // Reset race state
    setRaceInProgress(true);
    setRaceFinished(false);
    setWinner(null);
    
    // Generate random base speeds for each snail at the start of each race
    // This ensures no snail has a consistent advantage
    const baseSpeeds = {};
    Object.keys(snailRefs.current).forEach(id => {
      // Give each snail a random base speed between 0.010 and 0.013
      baseSpeeds[id] = 0.010 + (Math.random() * 0.003);
      
      // Reset progress
      snailRefs.current[id].progress = 0;
      if (snailRefs.current[id].ref) {
        snailRefs.current[id].ref.style.setProperty('--progress', '0%');
      }
    });
    
    // Start animation
    let lastTimestamp = 0;
    const animate = (timestamp) => {
      if (!lastTimestamp) lastTimestamp = timestamp;
      const deltaTime = timestamp - lastTimestamp;
      lastTimestamp = timestamp;
      
      let someoneWon = false;
      
      // Update snail positions
      Object.keys(snailRefs.current).forEach(id => {
        const snail = snailRefs.current[id];
        
        // Get the randomly generated base speed for this snail
        const baseSpeed = baseSpeeds[id];
        
        // Add variation to the speed each frame for more unpredictable racing
        const speedVariation = 0.7 + (Math.random() * 0.6); // Between 0.7 and 1.3 multiplier
        const speed = baseSpeed * speedVariation;
        
        // Update progress
        snail.progress += speed * deltaTime;
        
        // Cap at 100%
        if (snail.progress >= 100) {
          snail.progress = 100;
          
          // If this is the first snail to reach 100%, declare winner
          if (!someoneWon) {
            someoneWon = true;
            setWinner(snail);
            setRaceFinished(true);
            setRaceInProgress(false);
          }
        }
        
        // Update DOM
        if (snail.ref) {
          snail.ref.style.setProperty('--progress', `${snail.progress}%`);
        }
      });
      
      // Continue animation if race still in progress
      if (!someoneWon) {
        animationFrameRef.current = requestAnimationFrame(animate);
      }
    };
    
    animationFrameRef.current = requestAnimationFrame(animate);
  };
  
  // Clean up animation frame on unmount
  React.useEffect(() => {
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);
  
  return (
    <section className="snail-race">
      <div className="container">
        <h2 className="section-title">The Great <span className="accent">Snail Race</span></h2>
        <p className="race-intro">Test your luck in our virtual snail race! Pick your favorite competitor and cheer them on.</p>
        
        <div className="race-container">
          <div className="race-controls">
            <div className="snail-selection">
              <h3>Choose Your Snail:</h3>
              <div className="snail-options">
                <button 
                  className={`snail-option ${selectedSnail === 'speedy' ? 'selected' : ''}`}
                  onClick={() => selectSnail('speedy')}
                  disabled={raceInProgress}
                  aria-pressed={selectedSnail === 'speedy'}
                >
                  <span className="snail-preview speedy"></span>
                  <span className="snail-name">Speedy</span>
                </button>
                <button 
                  className={`snail-option ${selectedSnail === 'shelly' ? 'selected' : ''}`}
                  onClick={() => selectSnail('shelly')}
                  disabled={raceInProgress}
                  aria-pressed={selectedSnail === 'shelly'}
                >
                  <span className="snail-preview shelly"></span>
                  <span className="snail-name">Shelly</span>
                </button>
                <button 
                  className={`snail-option ${selectedSnail === 'slugger' ? 'selected' : ''}`}
                  onClick={() => selectSnail('slugger')}
                  disabled={raceInProgress}
                  aria-pressed={selectedSnail === 'slugger'}
                >
                  <span className="snail-preview slugger"></span>
                  <span className="snail-name">Slugger</span>
                </button>
                <button 
                  className={`snail-option ${selectedSnail === 'turbo' ? 'selected' : ''}`}
                  onClick={() => selectSnail('turbo')}
                  disabled={raceInProgress}
                  aria-pressed={selectedSnail === 'turbo'}
                >
                  <span className="snail-preview turbo"></span>
                  <span className="snail-name">Turbo</span>
                </button>
              </div>
            </div>
            <button 
              id="start-race" 
              className="btn btn-primary" 
              onClick={startRace}
              disabled={!selectedSnail || raceInProgress}
            >
              {raceInProgress ? 'Race in Progress...' : 'Start Race'}
            </button>
          </div>
          
          <div className="race-track">
            <div className="lane">
              <div className="lane-label">Speedy</div>
              <div 
                className="snail speedy" 
                style={{ '--progress': '0%' }}
                ref={(el) => { snailRefs.current.speedy.ref = el; }}
              ></div>
              <div className="finish-line"></div>
            </div>
            <div className="lane">
              <div className="lane-label">Shelly</div>
              <div 
                className="snail shelly" 
                style={{ '--progress': '0%' }}
                ref={(el) => { snailRefs.current.shelly.ref = el; }}
              ></div>
              <div className="finish-line"></div>
            </div>
            <div className="lane">
              <div className="lane-label">Slugger</div>
              <div 
                className="snail slugger" 
                style={{ '--progress': '0%' }}
                ref={(el) => { snailRefs.current.slugger.ref = el; }}
              ></div>
              <div className="finish-line"></div>
            </div>
            <div className="lane">
              <div className="lane-label">Turbo</div>
              <div 
                className="snail turbo" 
                style={{ '--progress': '0%' }}
                ref={(el) => { snailRefs.current.turbo.ref = el; }}
              ></div>
              <div className="finish-line"></div>
            </div>
          </div>
          
          <div className="race-results" aria-live="polite">
            <h3>Race Results</h3>
            <p id="race-status">
              {!selectedSnail && 'Select your snail to begin!'}
              {selectedSnail && !raceInProgress && !raceFinished && `${snailRefs.current[selectedSnail].name} is ready to race!`}
              {raceInProgress && 'The race is on! Cheer for your snail!'}
              {raceFinished && `Race finished! ${winner?.name || 'A snail'} is the winner!`}
            </p>
            {raceFinished && winner && (
              <div id="winner-display" className={winner.id === selectedSnail ? 'your-snail-won' : ''}>
                <p>
                  {winner.id === selectedSnail 
                    ? `Congratulations! Your snail ${winner.name} won the race!` 
                    : `${winner.name} won the race.`
                  }
                </p>
                <div className="winner-animation">
                  <div className={`snail ${winner.id}`}></div>
                  {winner.id === selectedSnail && <div className="celebration"></div>}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SnailRace;
