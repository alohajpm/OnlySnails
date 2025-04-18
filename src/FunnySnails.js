import React, { useState } from 'react';
import './FunnySnails.css';

// Import SVG files directly - this is the recommended approach in modern React
import funnySnailImage1 from './images/funny-snail1.svg';
import funnySnailImage2 from './images/funny-snail2.svg';
import funnySnailImage3 from './images/funny-snail3.svg';
import funnySnailImage4 from './images/funny-snail4.svg';
import funnySnailImage5 from './images/funny-snail5.svg';
import funnySnailImage6 from './images/funny-snail6.svg';

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
