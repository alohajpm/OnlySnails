import React, { useState } from 'react';
import './FunnySnails.css';

// Individually import each image with try/catch blocks
let funnySnailImage1, funnySnailImage2, funnySnailImage3, funnySnailImage4, funnySnailImage5, funnySnailImage6;

// First image
try {
  funnySnailImage1 = require('./images/funny-snail1.svg');
} catch (e) {
  funnySnailImage1 = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='250'%3E%3Crect width='400' height='250' fill='%23FF9800' /%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='white' font-size='24px'%3ESpeed Racer%3C/text%3E%3C/svg%3E";
  console.warn("Couldn't load funny snail image 1, using placeholder");
}

// Second image
try {
  funnySnailImage2 = require('./images/funny-snail2.svg');
} catch (e) {
  funnySnailImage2 = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='250'%3E%3Crect width='400' height='250' fill='%239C27B0' /%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='white' font-size='24px'%3EHome Improvement%3C/text%3E%3C/svg%3E";
  console.warn("Couldn't load funny snail image 2, using placeholder");
}

// Third image
try {
  funnySnailImage3 = require('./images/funny-snail3.svg');
} catch (e) {
  funnySnailImage3 = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='250'%3E%3Crect width='400' height='250' fill='%233F51B5' /%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='white' font-size='24px'%3EMonday Mood%3C/text%3E%3C/svg%3E";
  console.warn("Couldn't load funny snail image 3, using placeholder");
}

// Fourth image
try {
  funnySnailImage4 = require('./images/funny-snail4.svg');
} catch (e) {
  funnySnailImage4 = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='250'%3E%3Crect width='400' height='250' fill='%23E91E63' /%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='white' font-size='24px'%3EShell Shock%3C/text%3E%3C/svg%3E";
  console.warn("Couldn't load funny snail image 4, using placeholder");
}

// Fifth image
try {
  funnySnailImage5 = require('./images/funny-snail5.svg');
} catch (e) {
  funnySnailImage5 = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='250'%3E%3Crect width='400' height='250' fill='%234CAF50' /%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='white' font-size='24px'%3EGarden Party%3C/text%3E%3C/svg%3E";
  console.warn("Couldn't load funny snail image 5, using placeholder");
}

// Sixth image
try {
  funnySnailImage6 = require('./images/funny-snail6.svg');
} catch (e) {
  funnySnailImage6 = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='250'%3E%3Crect width='400' height='250' fill='%2300BCD4' /%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='white' font-size='24px'%3ESlime Time%3C/text%3E%3C/svg%3E";
  console.warn("Couldn't load funny snail image 6, using placeholder");
}

function FunnySnails({ fullPage = false }) {
  const [selectedMeme, setSelectedMeme] = useState(null);
  
  const memes = [
    {
      id: 1,
      title: "Speed Racer",
      image: funnySnailImage1,
      caption: "When someone tells me to hurry up",
      altText: "A snail wearing tiny racing goggles and a helmet"
    },
    {
      id: 2,
      title: "Home Improvement",
      image: funnySnailImage2,
      caption: "Just renovated the house, what do you think?",
      altText: "A snail with a colorfully painted shell decorated to look like a tiny house"
    },
    {
      id: 3,
      title: "Monday Mood",
      image: funnySnailImage3,
      caption: "Me trying to get to work on Monday morning",
      altText: "A snail slowly climbing up a vertical surface looking exhausted"
    },
    {
      id: 4,
      title: "Shell Shock",
      image: funnySnailImage4,
      caption: "When someone touches your shell without permission",
      altText: "A startled looking snail quickly retreating into its shell"
    },
    {
      id: 5,
      title: "Garden Party",
      image: funnySnailImage5,
      caption: "POV: You're the last lettuce leaf in the garden",
      altText: "Multiple snails gathered on a leaf"
    },
    {
      id: 6,
      title: "Slime Time",
      image: funnySnailImage6,
      caption: "My trail after explaining my complex feelings",
      altText: "A snail leaving a complicated zigzag slime trail"
    }
  ];
  
  const openMemeModal = (meme) => {
    setSelectedMeme(meme);
    document.body.style.overflow = 'hidden';
  };
  
  const closeMemeModal = () => {
    setSelectedMeme(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section className={`funny-snails ${fullPage ? 'full-page' : ''}`}>
      <div className="container">
        <h2 className="section-title">Funny <span className="accent">Snail Memes</span></h2>
        
        {fullPage && (
          <p className="section-intro">
            Need a laugh? Check out these hilarious snail memes that perfectly capture the humor in gastropod life.
            Feel free to share them with your fellow snail enthusiasts!
          </p>
        )}
        
        <div className="memes-grid">
          {memes.map(meme => (
            <div 
              key={meme.id} 
              className="meme-card"
              onClick={() => openMemeModal(meme)}
            >
              <div className="meme-image">
                <img src={meme.image} alt={meme.altText} loading="lazy" />
              </div>
              <div className="meme-content">
                <h3>{meme.title}</h3>
                <p>{meme.caption}</p>
              </div>
            </div>
          ))}
        </div>
        
        {!fullPage && (
          <div className="memes-footer">
            <button 
              className="btn btn-secondary" 
              onClick={() => {
                const funnyButton = document.querySelector('header button[class*="funny"]');
                if (funnyButton) funnyButton.click();
              }}
            >
              View All Funny Snails
            </button>
          </div>
        )}
      </div>
      
      {selectedMeme && (
        <div className="meme-modal" onClick={closeMemeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal" onClick={closeMemeModal} aria-label="Close meme viewer">×</button>
            <div className="modal-image">
              <img src={selectedMeme.image} alt={selectedMeme.altText} />
            </div>
            <div className="modal-details">
              <h3>{selectedMeme.title}</h3>
              <p className="modal-caption">{selectedMeme.caption}</p>
              <div className="share-buttons">
                <button className="share-btn facebook">Share on Facebook</button>
                <button className="share-btn twitter">Share on Twitter</button>
                <button className="share-btn copy" onClick={() => {
                  navigator.clipboard.writeText(window.location.href);
                  alert("Link copied to clipboard!");
                }}>
                  Copy Link
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default FunnySnails;
