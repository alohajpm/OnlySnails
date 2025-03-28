import React from 'react';
import './ContentPage.css';

function BreedingTips() {
  return (
    <section className="content-page breeding-tips">
      <div className="container">
        <h2 className="section-title">Snail <span className="accent">Breeding Tips</span></h2>
        
        <div className="content-wrapper">
          <div className="intro-section">
            <p className="intro-text">
              Breeding snails can be a rewarding experience that allows you to witness the complete life cycle of these fascinating creatures. 
              This guide covers the essentials of responsible snail breeding, from setting up optimal conditions to caring for baby snails.
            </p>
            
            <div className="warning-box">
              <h4>Important Note</h4>
              <p>
                Before breeding any snail species, research local regulations regarding breeding and possession of snails. 
                Never release captive-bred snails into the wild as they can become invasive species and harm local ecosystems.
              </p>
            </div>
          </div>
          
          <div className="guide-section">
            <h3>Understanding Snail Reproduction</h3>
            <p>
              Most land snails are hermaphrodites, meaning each snail possesses both male and female reproductive organs. 
              However, they typically require a mate to reproduce. Here are some key facts about snail reproduction:
            </p>
            <ul className="guide-list">
              <li>Most species mate by aligning their bodies and exchanging sperm</li>
              <li>Mating can last from several minutes to hours, depending on the species</li>
              <li>After mating, both snails can lay eggs if conditions are suitable</li>
              <li>The interval between mating and egg-laying varies by species (typically 2-4 weeks)</li>
              <li>Some species can store sperm and lay multiple clutches from a single mating</li>
            </ul>
          </div>
          
          <div className="guide-section">
            <h3>Creating Optimal Breeding Conditions</h3>
            <p>
              Snails require specific environmental conditions to trigger breeding behavior:
            </p>
            
            <div className="conditions-grid">
              <div className="condition-item">
                <h4>Temperature</h4>
                <p>
                  Maintain temperatures between 68-77°F (20-25°C) for most common pet species. 
                  Some species may require a specific temperature range to trigger breeding.
                </p>
              </div>
              
              <div className="condition-item">
                <h4>Humidity</h4>
                <p>
                  Keep humidity levels between 80-90%. Higher humidity often stimulates breeding behavior.
                  Regular misting helps maintain these levels.
                </p>
              </div>
              
              <div className="condition-item">
                <h4>Light Cycle</h4>
                <p>
                  Provide a consistent day/night cycle with 12-14 hours of indirect light daily.
                  Many species breed most actively during nighttime hours.
                </p>
              </div>
              
              <div className="condition-item">
                <h4>Nutrition</h4>
                <p>
                  Offer high-calcium, protein-rich foods before and during breeding.
                  Foods like spinach, kale, zucchini, and occasional protein sources support reproduction.
                </p>
              </div>
              
              <div className="condition-item">
                <h4>Space</h4>
                <p>
                  Provide at least 1-2 gallons of enclosure space per adult breeding snail.
                  Overcrowding can inhibit breeding behavior and egg production.
                </p>
              </div>
              
              <div className="condition-item">
                <h4>Substrate</h4>
                <p>
                  Use a substrate depth of at least 3-4 inches of moisture-retaining soil mix.
                  This provides suitable egg-laying conditions.
                </p>
              </div>
            </div>
          </div>
          
          <div className="guide-section">
            <h3>The Egg-Laying Process</h3>
            <p>
              When a snail is ready to lay eggs, you may notice these behaviors:
            </p>
            <ul className="guide-list">
              <li>Increased digging activity in the substrate</li>
              <li>Reduced feeding for 1-2 days before laying</li>
              <li>Staying in one position for extended periods</li>
              <li>Creating a small burrow or depression in the substrate</li>
            </ul>
            
            <p>
              Egg-laying can take several hours, during which the snail should not be disturbed. 
              The number of eggs per clutch varies significantly between species, ranging from as few as 20 
              to over 100 eggs.
            </p>
          </div>
          
          <div className="guide-section">
            <h3>Caring for Eggs</h3>
            <p>
              Once eggs are laid, you have two options:
            </p>
            
            <div className="option-container">
              <div className="option-item">
                <h4>Option 1: Leave Eggs in Place</h4>
                <p>
                  This is the simplest approach and works well if you have sufficient space:
                </p>
                <ul>
                  <li>Ensure substrate remains consistently moist but not waterlogged</li>
                  <li>Avoid disturbing the area around the eggs</li>
                  <li>Monitor temperature and humidity carefully</li>
                  <li>Remove adult snails if there's any risk of them disturbing or consuming eggs</li>
                </ul>
              </div>
              
              <div className="option-item">
                <h4>Option 2: Separate Eggs into a Hatchery</h4>
                <p>
                  This gives you more control over hatching conditions:
                </p>
                <ul>
                  <li>Gently remove egg clutches with a small amount of surrounding substrate</li>
                  <li>Place in a separate container with ventilation and similar substrate</li>
                  <li>Maintain temperature and humidity levels similar to the main enclosure</li>
                  <li>Mist lightly to maintain moisture without soaking eggs</li>
                  <li>Avoid direct sunlight and temperature fluctuations</li>
                </ul>
              </div>
            </div>
            
            <div className="note-box">
              <h4>Incubation Periods</h4>
              <p>
                Incubation times vary widely between species, typically ranging from 2-5 weeks.
                Factors like temperature, humidity, and species type all influence hatching time.
                Keep detailed records of when eggs were laid to anticipate hatching.
              </p>
            </div>
          </div>
          
          <div className="guide-section">
            <h3>Caring for Baby Snails</h3>
            <p>
              Baby snails (often called hatchlings) require special care:
            </p>
            
            <div className="steps-container">
              <div className="step-item">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h4>Initial Housing</h4>
                  <p>
                    Keep hatchlings in a smaller, controlled environment for the first few weeks.
                    A container with air holes, moist substrate, and tiny hiding places works well.
                  </p>
                </div>
              </div>
              
              <div className="step-item">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h4>Nutrition</h4>
                  <p>
                    Offer soft, calcium-rich foods cut into tiny pieces or slightly mushed.
                    Cucumber, zucchini, and leafy greens work well. Always provide a calcium source.
                  </p>
                </div>
              </div>
              
              <div className="step-item">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h4>Humidity</h4>
                  <p>
                    Baby snails are more susceptible to dehydration. Maintain slightly higher humidity (85-95%)
                    and mist more frequently than for adults.
                  </p>
                </div>
              </div>
              
              <div className="step-item">
                <div className="step-number">4</div>
                <div className="step-content">
                  <h4>Cleaning</h4>
                  <p>
                    Clean the enclosure more frequently, but be extremely gentle.
                    Use tweezers to remove waste and uneaten food to avoid disturbing tiny snails.
                  </p>
                </div>
              </div>
              
              <div className="step-item">
                <div className="step-number">5</div>
                <div className="step-content">
                  <h4>Growth Monitoring</h4>
                  <p>
                    Monitor shell development closely. Provide extra calcium if shells appear thin or transparent.
                    Growth rates vary by species but should be relatively consistent within a clutch.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="guide-section">
            <h3>Ethical Considerations</h3>
            <p>
              Responsible breeding includes planning for offspring care:
            </p>
            <ul className="ethics-list">
              <li>Have a plan for the potentially large number of offspring</li>
              <li>Research local regulations about selling or gifting pet snails</li>
              <li>Never release captive-bred snails into the wild</li>
              <li>Be prepared to house multiple generations if necessary</li>
              <li>Consider the genetic health of breeding stock (avoid close-relation breeding when possible)</li>
            </ul>
          </div>
          
          <div className="faq-section">
            <h3>Frequently Asked Questions</h3>
            
            <div className="faq-item">
              <h4>How can I tell if my snails are mating?</h4>
              <p>
                Mating snails typically align their bodies side-by-side, often in a partially elevated position.
                You may observe the exchange of reproductive organs (which looks like a small white or translucent structure between them).
                Mating can last from 15 minutes to several hours.
              </p>
            </div>
            
            <div className="faq-item">
              <h4>How many babies will hatch from a clutch of eggs?</h4>
              <p>
                This varies dramatically by species. Smaller garden snails might lay 20-50 eggs per clutch,
                while larger species like Giant African Land Snails can lay 100-400 eggs at once. Not all eggs will
                necessarily be fertile or hatch successfully.
              </p>
            </div>
            
            <div className="faq-item">
              <h4>When should I separate baby snails from adults?</h4>
              <p>
                It's generally best to separate hatchlings from adults right away to prevent accidental crushing.
                If space limitations prevent this, ensure the enclosure has plenty of safe areas where tiny snails 
                can hide and avoid being stepped on by adults.
              </p>
            </div>
            
            <div className="faq-item">
              <h4>How can I prevent unwanted breeding?</h4>
              <p>
                The most reliable method is to keep snails individually housed. If housing multiple snails together,
                regularly check the substrate for egg clutches and remove them before they hatch if you don't want offspring.
                Some species require specific conditions to trigger egg-laying, so researching your particular species can help.
              </p>
            </div>
          </div>
          
          <div className="resources-section">
            <h3>Additional Resources</h3>
            <div className="resource-buttons">
              <button className="btn btn-secondary">Species-Specific Breeding Guide</button>
              <button className="btn btn-secondary">Hatchling Care Checklist</button>
              <button className="btn btn-secondary">Genetic Diversity in Captive Breeding</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BreedingTips;
