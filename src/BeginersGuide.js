import React from 'react';
import './ContentPage.css';

function BeginnersGuide() {
  return (
    <section className="content-page beginners-guide">
      <div className="container">
        <h2 className="section-title">Beginner's <span className="accent">Guide</span></h2>
        
        <div className="content-wrapper">
          <div className="intro-section">
            <p className="intro-text">
              Welcome to the world of snail keeping! This guide will help you get started with your new gastropod companions.
              Whether you're a complete novice or have some experience with pets, snails offer a unique and rewarding experience.
            </p>
          </div>
          
          <div className="guide-section">
            <h3>Choosing Your First Snail</h3>
            <p>
              For beginners, we recommend starting with hardy species that are easier to care for:
            </p>
            <ul className="guide-list">
              <li>
                <strong>Garden Snails (Helix aspersa)</strong> - Common, adaptable, and legal everywhere
              </li>
              <li>
                <strong>Grove Snails (Cepaea nemoralis)</strong> - Colorful shells and simple care requirements
              </li>
              <li>
                <strong>Milk Snails (Otala lactea)</strong> - Beautiful white shells and moderate size
              </li>
            </ul>
            <div className="note-box">
              <h4>Important Note</h4>
              <p>
                Always check local regulations before acquiring snails. Some species, particularly Giant African Land Snails,
                are illegal to own in many countries and regions due to being invasive species.
              </p>
            </div>
          </div>
          
          <div className="guide-section">
            <h3>Setting Up Your Snail Habitat</h3>
            <p>
              A proper habitat is essential for your snail's health and happiness:
            </p>
            
            <div className="steps-container">
              <div className="step-item">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h4>Choose a Container</h4>
                  <p>
                    Use a glass or plastic terrarium with a secure, ventilated lid. For 1-3 small snails, 
                    a container of at least 1 gallon (about 5-6 liters) is sufficient.
                  </p>
                </div>
              </div>
              
              <div className="step-item">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h4>Prepare Substrate</h4>
                  <p>
                    Add 2-3 inches of substrate - coconut coir, chemical-free potting soil, or a mixture of both.
                    Avoid fertilizers or pesticides which can harm your snails.
                  </p>
                </div>
              </div>
              
              <div className="step-item">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h4>Add Hiding Spots</h4>
                  <p>
                    Provide hiding places using half-buried flower pots, cork bark, or natural wood.
                    Snails appreciate having secure places to rest.
                  </p>
                </div>
              </div>
              
              <div className="step-item">
                <div className="step-number">4</div>
                <div className="step-content">
                  <h4>Create Humidity</h4>
                  <p>
                    Maintain humidity levels of 75-90% by misting the habitat daily.
                    A small hygrometer can help monitor humidity levels.
                  </p>
                </div>
              </div>
              
              <div className="step-item">
                <div className="step-number">5</div>
                <div className="step-content">
                  <h4>Add Food and Water</h4>
                  <p>
                    Include a shallow dish for fresh water and a separate area for food.
                    Feed vegetables, fruits, and calcium supplements (like cuttlebone).
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="guide-section">
            <h3>Daily Care Routine</h3>
            <p>
              Snails are relatively low-maintenance pets, but they do require consistent care:
            </p>
            <ul className="care-list">
              <li>Mist the enclosure daily to maintain humidity</li>
              <li>Provide fresh food every 1-2 days</li>
              <li>Clean food dishes daily to prevent mold</li>
              <li>Remove any uneaten food after 24 hours</li>
              <li>Change water in the dish every other day</li>
              <li>Spot clean waste and debris as needed</li>
              <li>Do a full substrate change every 1-2 months</li>
            </ul>
          </div>
          
          <div className="guide-section">
            <h3>Handling Your Snail</h3>
            <p>
              Proper handling techniques ensure both you and your snail stay safe:
            </p>
            <ol className="handling-list">
              <li>Always wash your hands thoroughly before handling</li>
              <li>Gently approach from behind and below the snail</li>
              <li>Allow the snail to crawl onto your hand rather than picking it up</li>
              <li>Keep hands slightly moist but not wet</li>
              <li>Never pull a snail from a surface it's attached to</li>
              <li>Limit handling sessions to 5-10 minutes</li>
              <li>Always wash hands after handling</li>
            </ol>
          </div>
          
          <div className="faq-section">
            <h3>Frequently Asked Questions</h3>
            
            <div className="faq-item">
              <h4>How long do pet snails live?</h4>
              <p>
                Lifespans vary by species, but most common pet snails live 2-5 years with proper care.
                Some larger species can live up to 10 years.
              </p>
            </div>
            
            <div className="faq-item">
              <h4>Do snails need companionship?</h4>
              <p>
                Snails aren't social animals in the traditional sense and can be kept alone,
                but they often show more activity and natural behaviors in small groups.
              </p>
            </div>
            
            <div className="faq-item">
              <h4>How often should I clean the entire habitat?</h4>
              <p>
                Complete habitat cleaning should be done every 1-2 months, depending on 
                the number of snails and the size of the enclosure.
              </p>
            </div>
            
            <div className="faq-item">
              <h4>What temperature do snails need?</h4>
              <p>
                Most pet snail species thrive at room temperature, between 65-75°F (18-24°C).
                Avoid placing the habitat in direct sunlight or near heat sources.
              </p>
            </div>
          </div>
          
          <div className="next-steps">
            <h3>Next Steps</h3>
            <p>
              Now that you understand the basics of snail care, check out our
              other resources to deepen your gastropod knowledge:
            </p>
            <div className="next-steps-buttons">
              <button className="btn btn-secondary">Feeding Chart</button>
              <button className="btn btn-secondary">Health Symptoms Guide</button>
              <button className="btn btn-secondary">Breeding Tips</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BeginnersGuide;
