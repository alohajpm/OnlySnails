import React, { useState } from 'react';
import './ContentPage.css';

function HealthSymptoms() {
  const [activeCategory, setActiveCategory] = useState('shell');
  
  return (
    <section className="content-page health-symptoms">
      <div className="container">
        <h2 className="section-title">Health <span className="accent">Symptoms Guide</span></h2>
        
        <div className="content-wrapper">
          <div className="intro-section">
            <p className="intro-text">
              Recognizing signs of illness in your snail is important for their wellbeing. This guide will help you identify common health issues,
              their potential causes, and appropriate actions to take. Remember that this guide is not a substitute for professional veterinary care.
            </p>
            
            <div className="warning-box">
              <h4>Important Disclaimer</h4>
              <p>
                This guide provides general information only and should not be used as a substitute for professional veterinary advice.
                If your snail exhibits serious symptoms, consult an exotic pet veterinarian with experience treating gastropods.
              </p>
            </div>
          </div>
          
          <div className="symptoms-nav">
            <button 
              className={`symptom-btn ${activeCategory === 'shell' ? 'active' : ''}`} 
              onClick={() => setActiveCategory('shell')}
            >
              Shell Issues
            </button>
            <button 
              className={`symptom-btn ${activeCategory === 'body' ? 'active' : ''}`} 
              onClick={() => setActiveCategory('body')}
            >
              Body Problems
            </button>
            <button 
              className={`symptom-btn ${activeCategory === 'behavior' ? 'active' : ''}`} 
              onClick={() => setActiveCategory('behavior')}
            >
              Behavioral Changes
            </button>
            <button 
              className={`symptom-btn ${activeCategory === 'parasites' ? 'active' : ''}`} 
              onClick={() => setActiveCategory('parasites')}
            >
              Parasites
            </button>
          </div>
          
          <div className="health-content">
            {activeCategory === 'shell' && (
              <div className="health-category">
                <h3>Shell Issues</h3>
                <p>The shell is a vital part of your snail's anatomy and reflects their overall health. Changes in shell appearance can indicate various health issues.</p>
                
                <div className="symptom-grid">
                  <div className="symptom-item">
                    <h4>Cracked or Broken Shell</h4>
                    
                    <div className="symptom-details">
                      <div className="symptom-description">
                        <h5>Appearance</h5>
                        <p>Visible cracks, chips, or holes in the shell. May range from minor damage to severe breaks.</p>
                      </div>
                      
                      <div className="symptom-causes">
                        <h5>Potential Causes</h5>
                        <ul>
                          <li>Physical trauma (drops, falls)</li>
                          <li>Pressure from handling</li>
                          <li>Attacks from other pets</li>
                          <li>Calcium deficiency (making shells brittle)</li>
                        </ul>
                      </div>
                      
                      <div className="symptom-severity">
                        <h5>Severity Level</h5>
                        <div className="severity-indicator moderate-to-severe">
                          <span>Moderate to Severe</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="treatment-options">
                      <h5>Treatment</h5>
                      <ol>
                        <li>For minor cracks: Increase calcium in diet immediately</li>
                        <li>Keep the habitat clean to prevent infection</li>
                        <li>Handle minimally to allow natural healing</li>
                        <li>For severe damage: Consult an exotic pet veterinarian</li>
                        <li>Never attempt to "glue" shells together with household adhesives</li>
                      </ol>
                      
                      <div className="prevention-tips">
                        <h5>Prevention</h5>
                        <ul>
                          <li>Provide constant access to calcium sources</li>
                          <li>Handle snails carefully and minimally</li>
                          <li>Avoid placing heavy objects in the habitat</li>
                          <li>Ensure habitat is secure from other pets</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="symptom-item">
                    <h4>Soft or Thin Shell</h4>
                    
                    <div className="symptom-details">
                      <div className="symptom-description">
                        <h5>Appearance</h5>
                        <p>Shell appears thin, flexible, or papery. May bend slightly when touched. Often translucent in severe cases.</p>
                      </div>
                      
                      <div className="symptom-causes">
                        <h5>Potential Causes</h5>
                        <ul>
                          <li>Severe calcium deficiency</li>
                          <li>Improper diet lacking nutrients</li>
                          <li>Acidic substrate or environment</li>
                          <li>Genetic factors in some cases</li>
                        </ul>
                      </div>
                      
                      <div className="symptom-severity">
                        <h5>Severity Level</h5>
                        <div className="severity-indicator severe">
                          <span>Severe</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="treatment-options">
                      <h5>Treatment</h5>
                      <ol>
                        <li>Immediately supplement diet with calcium</li>
                        <li>Place crushed cuttlebone directly in the enclosure</li>
                        <li>Check and adjust pH levels in substrate and water</li>
                        <li>Improve overall diet with calcium-rich vegetables</li>
                        <li>Create a stress-free environment for recovery</li>
                      </ol>
                      
                      <div className="prevention-tips">
                        <h5>Prevention</h5>
                        <ul>
                          <li>Provide constant calcium sources</li>
                          <li>Feed calcium-rich vegetables regularly</li>
                          <li>Maintain proper pH in habitat (neutral to slightly alkaline)</li>
                          <li>Regular health checks of shell condition</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="symptom-item">
                    <h4>Pitted or Eroded Shell</h4>
                    
                    <div className="symptom-details">
                      <div className="symptom-description">
                        <h5>Appearance</h5>
                        <p>Small pits, erosions, or rough patches on the shell surface. May appear as irregular depressions or thinning areas.</p>
                      </div>
                      
                      <div className="symptom-causes">
                        <h5>Potential Causes</h5>
                        <ul>
                          <li>Acidic environment</li>
                          <li>Bacterial or fungal infection</li>
                          <li>Parasitic organisms</li>
                          <li>Chemical exposure (from tap water or cleaning products)</li>
                        </ul>
                      </div>
                      
                      <div className="symptom-severity">
                        <h5>Severity Level</h5>
                        <div className="severity-indicator moderate">
                          <span>Moderate</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="treatment-options">
                      <h5>Treatment</h5>
                      <ol>
                        <li>Replace all substrate with fresh, pH-neutral material</li>
                        <li>Use dechlorinated water for misting and dishes</li>
                        <li>Increase calcium supplementation</li>
                        <li>For suspected infections, consult a veterinarian</li>
                        <li>Remove any potential chemical contaminants</li>
                      </ol>
                      
                      <div className="prevention-tips">
                        <h5>Prevention</h5>
                        <ul>
                          <li>Test substrate pH regularly</li>
                          <li>Use only dechlorinated water</li>
                          <li>Never use household chemicals near snail habitat</li>
                          <li>Regular cleaning of habitat with snail-safe methods</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {activeCategory === 'body' && (
              <div className="health-category">
                <h3>Body Problems</h3>
                <p>Issues affecting your snail's body can range from mild to severe and may indicate various health problems requiring attention.</p>
                
                <div className="symptom-grid">
                  <div className="symptom-item">
                    <h4>Retracted Body / Not Emerging</h4>
                    
                    <div className="symptom-details">
                      <div className="symptom-description">
                        <h5>Appearance</h5>
                        <p>Snail remains withdrawn into shell for extended periods. May not respond to gentle stimuli or food offerings.</p>
                      </div>
                      
                      <div className="symptom-causes">
                        <h5>Potential Causes</h5>
                        <ul>
                          <li>Stress or environmental changes</li>
                          <li>Improper temperature or humidity</li>
                          <li>Illness or infection</li>
                          <li>Estivation (natural dormancy)</li>
                          <li>Recent handling or disturbance</li>
                        </ul>
                      </div>
                      
                      <div className="symptom-severity">
                        <h5>Severity Level</h5>
                        <div className="severity-indicator mild-to-severe">
                          <span>Mild to Severe</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="treatment-options">
                      <h5>Assessment</h5>
                      <ol>
                        <li>Check habitat conditions (temperature, humidity)</li>
                        <li>Ensure proper moisture levels (mist the habitat)</li>
                        <li>Place in shallow lukewarm water bath for 10-15 minutes</li>
                        <li>If no response after 24-48 hours, check for signs of life</li>
                        <li>If snail smells bad or shows no movement after water bath, may be deceased</li>
                      </ol>
                      
                      <div className="prevention-tips">
                        <h5>Prevention</h5>
                        <ul>
                          <li>Maintain consistent habitat conditions</li>
                          <li>Keep humidity at appropriate levels (75-90%)</li>
                          <li>Minimize stress and handling</li>
                          <li>Provide proper diet and calcium</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="symptom-item">
                    <h4>Unusual Body Color or Texture</h4>
                    
                    <div className="symptom-details">
                      <div className="symptom-description">
                        <h5>Appearance</h5>
                        <p>Body appears discolored, pale, or has unusual spots. Texture may be abnormally dry, slimy, or have growths.</p>
                      </div>
                      
                      <div className="symptom-causes">
                        <h5>Potential Causes</h5>
                        <ul>
                          <li>Bacterial or fungal infection</li>
                          <li>Dehydration</li>
                          <li>Nutritional deficiencies</li>
                          <li>Parasites</li>
                          <li>Chemical exposure</li>
                        </ul>
                      </div>
                      
                      <div className="symptom-severity">
                        <h5>Severity Level</h5>
                        <div className="severity-indicator moderate-to-severe">
                          <span>Moderate to Severe</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="treatment-options">
                      <h5>Treatment</h5>
                      <ol>
                        <li>Isolate affected snail if you have multiple snails</li>
                        <li>For dry appearance: increase humidity, offer shallow water dish</li>
                        <li>For unusual growths or spots: consult exotic pet veterinarian</li>
                        <li>Complete habitat cleaning with snail-safe materials</li>
                        <li>Improve diet with varied nutrients</li>
                      </ol>
                      
                      <div className="prevention-tips">
                        <h5>Prevention</h5>
                        <ul>
                          <li>Regular habitat maintenance</li>
                          <li>Proper diet with varied foods</li>
                          <li>Quarantine new snails before introducing to others</li>
                          <li>Use only dechlorinated water</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="symptom-item">
                    <h4>Swollen or Bloated Body</h4>
                    
                    <div className="symptom-details">
                      <div className="symptom-description">
                        <h5>Appearance</h5>
                        <p>Body appears unusually swollen, bloated, or distended beyond normal proportions.</p>
                      </div>
                      
                      <div className="symptom-causes">
                        <h5>Potential Causes</h5>
                        <ul>
                          <li>Parasitic infection</li>
                          <li>Bacterial infection</li>
                          <li>Egg retention (in mature snails)</li>
                          <li>Digestive issues</li>
                          <li>Organ dysfunction</li>
                        </ul>
                      </div>
                      
                      <div className="symptom-severity">
                        <h5>Severity Level</h5>
                        <div className="severity-indicator severe">
                          <span>Severe</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="treatment-options">
                      <h5>Treatment</h5>
                      <ol>
                        <li>Immediate isolation if multiple snails are present</li>
                        <li>Consult with exotic pet veterinarian</li>
                        <li>Create stress-free recovery environment</li>
                        <li>Maintain optimal temperature and humidity</li>
                        <li>Follow veterinary recommendations for treatment</li>
                      </ol>
                      
                      <div className="prevention-tips">
                        <h5>Prevention</h5>
                        <ul>
                          <li>Regular health checks</li>
                          <li>Quarantine new snails</li>
                          <li>Clean habitat regularly</li>
                          <li>Provide appropriate egg-laying substrate for mature snails</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {activeCategory === 'behavior' && (
              <div className="health-category">
                <h3>Behavioral Changes</h3>
                <p>Significant changes in your snail's behavior often indicate health issues or environmental problems that need addressing.</p>
                
                <div className="symptom-grid">
                  <div className="symptom-item">
                    <h4>Reduced Activity / Lethargy</h4>
                    
                    <div className="symptom-details">
                      <div className="symptom-description">
                        <h5>Appearance</h5>
                        <p>Snail moves much less than usual, appears slow or unresponsive compared to normal activity patterns.</p>
                      </div>
                      
                      <div className="symptom-causes">
                        <h5>Potential Causes</h5>
                        <ul>
                          <li>Temperature too low or too high</li>
                          <li>Dehydration</li>
                          <li>Illness or infection</li>
                          <li>Poor nutrition</li>
                          <li>Old age</li>
                          <li>Natural seasonal changes (preparing for hibernation)</li>
                        </ul>
                      </div>
                      
                      <div className="symptom-severity">
                        <h5>Severity Level</h5>
                        <div className="severity-indicator mild-to-moderate">
                          <span>Mild to Moderate</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="treatment-options">
                      <h5>Actions to Take</h5>
                      <ol>
                        <li>Check temperature and adjust to appropriate range (65-75°F/18-24°C)</li>
                        <li>Increase habitat humidity with gentle misting</li>
                        <li>Offer fresh, appealing foods</li>
                        <li>Ensure calcium sources are available</li>
                        <li>Monitor for other symptoms</li>
                      </ol>
                      
                      <div className="prevention-tips">
                        <h5>Prevention</h5>
                        <ul>
                          <li>Maintain consistent temperature and humidity</li>
                          <li>Provide varied, nutritious diet</li>
                          <li>Regular health monitoring</li>
                          <li>Keep stress levels low</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="symptom-item">
                    <h4>Not Eating</h4>
                    
                    <div className="symptom-details">
                      <div className="symptom-description">
                        <h5>Appearance</h5>
                        <p>Food remains untouched for more than 48 hours. Snail shows no interest in previously enjoyed foods.</p>
                      </div>
                      
                      <div className="symptom-causes">
                        <h5>Potential Causes</h5>
                        <ul>
                          <li>Illness or infection</li>
                          <li>Stress</li>
                          <li>Environmental changes</li>
                          <li>Food preferences</li>
                          <li>Preparing for hibernation or estivation</li>
                          <li>Recent overfeeding</li>
                        </ul>
                      </div>
                      
                      <div className="symptom-severity">
                        <h5>Severity Level</h5>
                        <div className="severity-indicator moderate">
                          <span>Moderate</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="treatment-options">
                      <h5>Actions to Take</h5>
                      <ol>
                        <li>Try offering different foods (favorites or new options)</li>
                        <li>Check if the food is fresh and appropriate</li>
                        <li>Place food near the snail for easier access</li>
                        <li>Ensure habitat conditions are optimal</li>
                        <li>If refusing food for more than a week, consult a veterinarian</li>
                      </ol>
                      
                      <div className="prevention-tips">
                        <h5>Prevention</h5>
                        <ul>
                          <li>Maintain varied diet rotation</li>
                          <li>Observe food preferences</li>
                          <li>Keep consistent feeding schedule</li>
                          <li>Ensure food is fresh and pesticide-free</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="symptom-item">
                    <h4>Unusual Movement Patterns</h4>
                    
                    <div className="symptom-details">
                      <div className="symptom-description">
                        <h5>Appearance</h5>
                        <p>Snail moves in atypical ways: circling, falling from surfaces, inability to right itself, or unusual body twisting.</p>
                      </div>
                      
                      <div className="symptom-causes">
                        <h5>Potential Causes</h5>
                        <ul>
                          <li>Neurological issues</li>
                          <li>Parasitic infection</li>
                          <li>Chemical exposure</li>
                          <li>Physical injury</li>
                          <li>Shell problems affecting balance</li>
                        </ul>
                      </div>
                      
                      <div className="symptom-severity">
                        <h5>Severity Level</h5>
                        <div className="severity-indicator severe">
                          <span>Severe</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="treatment-options">
                      <h5>Actions to Take</h5>
                      <ol>
                        <li>Check for any possible toxin exposure in habitat</li>
                        <li>Completely replace substrate and clean habitat</li>
                        <li>Place snail on flat surface with food nearby</li>
                        <li>If behavior continues, consult exotic pet veterinarian</li>
                        <li>Document symptoms with photos or video for veterinary assessment</li>
                      </ol>
                      
                      <div className="prevention-tips">
                        <h5>Prevention</h5>
                        <ul>
                          <li>Use only snail-safe materials in habitat</li>
                          <li>Avoid chemical cleaners near enclosure</li>
                          <li>Provide safe climbing surfaces</li>
                          <li>Handle with extreme care</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {activeCategory === 'parasites' && (
              <div className="health-category">
                <h3>Parasites & Infections</h3>
                <p>Snails can suffer from various parasites and infections that require specific treatments and preventative measures.</p>
                
                <div className="symptom-grid">
                  <div className="symptom-item">
                    <h4>Visible Parasites</h4>
                    
                    <div className="symptom-details">
                      <div className="symptom-description">
                        <h5>Appearance</h5>
                        <p>Tiny organisms visible on snail's body or in habitat. May appear as small worms, dots, or insects.</p>
                      </div>
                      
                      <div className="symptom-causes">
                        <h5>Common Types</h5>
                        <ul>
                          <li>Mites (tiny red, white, or brown specks)</li>
                          <li>Nematodes (small threadlike worms)</li>
                          <li>Fly larvae (in deceased tissue)</li>
                          <li>Trematodes (flatworms)</li>
                        </ul>
                      </div>
                      
                      <div className="symptom-severity">
                        <h5>Severity Level</h5>
                        <div className="severity-indicator severe">
                          <span>Severe</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="treatment-options">
                      <h5>Actions to Take</h5>
                      <ol>
                        <li>Isolate affected snail immediately</li>
                        <li>Complete habitat cleaning and replacement of all substrate</li>
                        <li>For mites: gentle rinse with dechlorinated water</li>
                        <li>Consult exotic pet veterinarian for treatment options</li>
                        <li>Monitor other snails for signs of infestation</li>
                      </ol>
                      
                      <div className="prevention-tips">
                        <h5>Prevention</h5>
                        <ul>
                          <li>Quarantine new snails for 2-4 weeks</li>
                          <li>Regular habitat cleaning and inspection</li>
                          <li>Remove uneaten food promptly</li>
                          <li>Frozen/microwaved leaves if collecting from outdoors</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="symptom-item">
                    <h4>Fungal Growth</h4>
                    
                    <div className="symptom-details">
                      <div className="symptom-description">
                        <h5>Appearance</h5>
                        <p>Fuzzy, cottony, or powdery growth on shell or body. May be white, grey, green, or other colors.</p>
                      </div>
                      
                      <div className="symptom-causes">
                        <h5>Potential Causes</h5>
                        <ul>
                          <li>Excessive humidity without ventilation</li>
                          <li>Poor habitat hygiene</li>
                          <li>Compromised immune system</li>
                          <li>Wounds or shell damage</li>
                          <li>Contaminated substrate or food</li>
                        </ul>
                      </div>
                      
                      <div className="symptom-severity">
                        <h5>Severity Level</h5>
                        <div className="severity-indicator moderate-to-severe">
                          <span>Moderate to Severe</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="treatment-options">
                      <h5>Actions to Take</h5>
                      <ol>
                        <li>Isolate affected snail</li>
                        <li>For shell-only fungus: gently clean with damp cloth</li>
                        <li>Complete habitat cleaning and substrate replacement</li>
                        <li>Improve ventilation while maintaining humidity</li>
                        <li>For body fungus or persistent cases: consult veterinarian</li>
                      </ol>
                      
                      <div className="prevention-tips">
                        <h5>Prevention</h5>
                        <ul>
                          <li>Balance humidity with proper ventilation</li>
                          <li>Regular habitat cleaning</li>
                          <li>Remove uneaten food promptly</li>
                          <li>Inspect new items before adding to habitat</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="symptom-item">
                    <h4>Bacterial Infection</h4>
                    
                    <div className="symptom-details">
                      <div className="symptom-description">
                        <h5>Appearance</h5>
                        <p>Unusual odor, discharge, swelling, or discoloration. May show lethargy, reduced appetite, and body retraction.</p>
                      </div>
                      
                      <div className="symptom-causes">
                        <h5>Potential Causes</h5>
                        <ul>
                          <li>Injuries or wounds</li>
                          <li>Poor water quality</li>
                          <li>Contaminated food or substrate</li>
                          <li>Direct contact with infected snails</li>
                          <li>Weakened immune system</li>
                        </ul>
                      </div>
                      
                      <div className="symptom-severity">
                        <h5>Severity Level</h5>
                        <div className="severity-indicator severe">
                          <span>Severe</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="treatment-options">
                      <h5>Actions to Take</h5>
                      <ol>
                        <li>Immediate isolation and quarantine</li>
                        <li>Veterinary consultation is strongly recommended</li>
                        <li>Complete habitat disinfection</li>
                        <li>Maintain optimal recovery conditions</li>
                        <li>Follow veterinary treatment protocols exactly</li>
                      </ol>
                      
                      <div className="prevention-tips">
                        <h5>Prevention</h5>
                        <ul>
                          <li>Strict quarantine for new snails</li>
                          <li>Regular, thorough habitat cleaning</li>
                          <li>Proper hand hygiene before handling</li>
                          <li>Use only dechlorinated water</li>
                          <li>Monitor for early signs of illness</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          <div className="emergency-care">
            <h3>Emergency Care Tips</h3>
            <p>
              If your snail shows severe symptoms or rapid decline, these temporary measures may help while you seek professional care:
            </p>
            <ul className="emergency-list">
              <li><strong>Shell damage:</strong> Keep habitat extra clean, provide calcium, minimize handling</li>
              <li><strong>Severe lethargy:</strong> Lukewarm water bath (shallow) for 10-15 minutes</li>
              <li><strong>Suspected infection:</strong> Isolate immediately, clean habitat thoroughly</li>
              <li><strong>Parasites:</strong> Complete quarantine, replace all substrate</li>
              <li><strong>Not eating for days:</strong> Try favorite foods, ensure proper temperature and humidity</li>
            </ul>
            <p className="emergency-note">
              These measures are temporary and not substitutes for professional veterinary care. 
              Contact an exotic pet veterinarian as soon as possible for serious health concerns.
            </p>
          </div>
          
          <div className="find-vet">
            <h3>Finding a Snail-Savvy Veterinarian</h3>
            <p>
              Locating a veterinarian with experience treating gastropods can be challenging. 
              Consider these resources to find qualified care:
            </p>
            <ul className="vet-resources">
              <li>Association of Exotic Mammal Veterinarians (may have referrals)</li>
              <li>Local herpetological societies (specialists in reptiles often treat snails)</li>
              <li>University veterinary teaching hospitals</li>
              <li>Online gastropod keeper communities and forums</li>
            </ul>
            <div className="vet-note">
              <p>
                Call ahead to confirm the veterinarian has experience with snails or other invertebrates.
                Bring detailed information about your snail's species, habitat, diet, and symptoms to the appointment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HealthSymptoms;
