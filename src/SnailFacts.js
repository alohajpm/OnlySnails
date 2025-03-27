import React, { useState } from 'react';
import './SnailFacts.css';
import snailFact1 from './images/snail-fact1.jpg';
import snailFact2 from './images/snail-fact2.jpg';
import snailFact3 from './images/snail-fact3.jpg';
import snailFact4 from './images/snail-fact4.jpg';
import snailFact5 from './images/snail-fact5.jpg';
import snailFact6 from './images/snail-fact6.jpg';

function SnailFacts({ fullPage = false }) {
  const [expandedFact, setExpandedFact] = useState(null);
  
  const facts = [
    {
      id: 1,
      title: "Snails are Gastropods",
      short: "Snails belong to the Gastropoda class, one of the most diverse animal groups on the planet.",
      full: "Snails are members of the class Gastropoda, which includes over 60,000 species of land, freshwater, and marine snails and slugs. The name 'gastropod' comes from the Greek words 'gastér' (stomach) and 'poús' (foot), referring to the way their body and foot are located beneath their belly.",
      image: snailFact1
    },
    {
      id: 2,
      title: "Slow but Steady",
      short: "Garden snails move at a speed of about 0.03 mph (50 meters per hour).",
      full: "While they're famously slow, snail speed varies greatly by species. Garden snails move at approximately 0.03 mph (50 meters per hour). This slow pace is due to their unique form of locomotion, which involves muscle contractions that pass in waves from the snail's tail to its head along a layer of mucus. Their slime trail reduces friction and protects them from sharp objects.",
      image: snailFact2
    },
    {
      id: 3,
      title: "Shell Apartments",
      short: "A snail's shell grows with them and provides protection throughout their life.",
      full: "A snail's shell is a vital part of its anatomy, growing continuously throughout its life. The shell consists primarily of calcium carbonate and grows larger at the opening as the snail matures. Most snails can fully retract into their shells when threatened, and they can seal the entrance with a layer of dried mucus called an epiphragm during harsh conditions like drought.",
      image: snailFact3
    },
    {
      id: 4,
      title: "Dental Records",
      short: "Snails can have over 14,000 teeth arranged on their radula.",
      full: "Snails possess a ribbon-like tongue called a radula that's covered with thousands of microscopic teeth. Depending on the species, a snail can have anywhere from 1,000 to 14,000 teeth arranged in rows on its radula. The radula works like a conveyor belt or file, scraping up food particles as it moves back and forth. These teeth are not like human teeth but rather chitinous projections that constantly grow and replace themselves.",
      image: snailFact4
    },
    {
      id: 5,
      title: "Sleep Cycles",
      short: "Some snails can sleep for up to three years during extreme weather.",
      full: "During unfavorable conditions like extreme heat, cold, or drought, snails can enter a state of dormancy called estivation (during summer) or hibernation (during winter). In this state, they retract into their shells and seal the opening with a layer of mucus that hardens to form a protective cover. Some desert snail species have been documented to survive in this dormant state for up to three years, though most garden snails typically hibernate for a few months.",
      image: snailFact5
    },
    {
      id: 6,
      title: "Hermaphrodites",
      short: "Most land snails are hermaphrodites, having both male and female reproductive organs.",
      full: "Most terrestrial snail species are hermaphrodites, possessing both male and female reproductive organs. Despite this, they typically mate with another individual rather than self-fertilize. Snail mating can be a lengthy process, sometimes lasting several hours, and often involves elaborate courtship behaviors. After mating, both snails can lay eggs, making their reproductive strategy quite efficient in terms of population growth.",
      image: snailFact6
    }
  ];

  const toggleFact = (id) => {
    setExpandedFact(expandedFact === id ? null : id);
  };

  return (
    <section className={`snail-facts ${fullPage ? 'full-page' : ''}`}>
      <div className="container">
        <h2 className="section-title">Amazing <span className="accent">Snail Facts</span></h2>
        
        {fullPage && (
          <p className="section-intro">
            Discover the fascinating world of snails with these incredible facts about these remarkable gastropods.
            From their surprising abilities to their unique biology, snails are truly extraordinary creatures.
          </p>
        )}
        
        <div className="facts-grid">
          {facts.map(fact => (
            <div 
              key={fact.id} 
              className={`fact-card ${expandedFact === fact.id ? 'expanded' : ''}`}
              onClick={() => toggleFact(fact.id)}
            >
              <div className="fact-image">
                <img src={fact.image} alt={fact.title} loading="lazy" />
              </div>
              <div className="fact-content">
                <h3>{fact.title}</h3>
                <p className="fact-short">{fact.short}</p>
                <p className="fact-full">{fact.full}</p>
                <button 
                  className="fact-toggle" 
                  aria-expanded={expandedFact === fact.id}
                  aria-label={expandedFact === fact.id ? "Show less" : "Show more"}
                >
                  {expandedFact === fact.id ? "Show Less" : "Show More"}
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {!fullPage && (
          <div className="facts-footer">
            <button 
              className="btn btn-secondary" 
              onClick={() => document.querySelector('header button[class*="facts"]').click()}
            >
              View All Snail Facts
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default SnailFacts;
