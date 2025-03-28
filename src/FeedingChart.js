import React, { useState } from 'react';
import './ContentPage.css';

function FeedingChart() {
  const [activeCategory, setActiveCategory] = useState('vegetables');
  
  return (
    <section className="content-page feeding-chart">
      <div className="container">
        <h2 className="section-title">Snail <span className="accent">Feeding Chart</span></h2>
        
        <div className="content-wrapper">
          <div className="intro-section">
            <p className="intro-text">
              Proper nutrition is vital for snail health. This comprehensive feeding chart will help you provide 
              a balanced and varied diet for your gastropod friends. Remember to thoroughly wash all foods to 
              remove pesticides, and always remove uneaten food after 24 hours to prevent mold.
            </p>
          </div>
          
          <div className="category-nav">
            <button 
              className={`category-btn ${activeCategory === 'vegetables' ? 'active' : ''}`} 
              onClick={() => setActiveCategory('vegetables')}
            >
              Vegetables
            </button>
            <button 
              className={`category-btn ${activeCategory === 'fruits' ? 'active' : ''}`} 
              onClick={() => setActiveCategory('fruits')}
            >
              Fruits
            </button>
            <button 
              className={`category-btn ${activeCategory === 'proteins' ? 'active' : ''}`} 
              onClick={() => setActiveCategory('proteins')}
            >
              Proteins
            </button>
            <button 
              className={`category-btn ${activeCategory === 'calcium' ? 'active' : ''}`} 
              onClick={() => setActiveCategory('calcium')}
            >
              Calcium Sources
            </button>
            <button 
              className={`category-btn ${activeCategory === 'avoid' ? 'active' : ''}`} 
              onClick={() => setActiveCategory('avoid')}
            >
              Foods to Avoid
            </button>
          </div>
          
          <div className="feeding-content">
            {activeCategory === 'vegetables' && (
              <div className="food-category">
                <h3>Vegetables <span className="recommendation">Offer 2-3 times per week</span></h3>
                <p>Vegetables form the staple diet for most pet snails and can be offered regularly.</p>
                
                <div className="food-grid">
                  <div className="food-item safe">
                    <h4>Lettuce</h4>
                    <p className="food-rating">★★★★★</p>
                    <p>Romaine and green leaf varieties are excellent staples. Avoid iceberg lettuce as it lacks nutritional value.</p>
                    <p className="serving-suggestion">Serving: Small pieces, raw</p>
                  </div>
                  
                  <div className="food-item safe">
                    <h4>Cucumber</h4>
                    <p className="food-rating">★★★★☆</p>
                    <p>High water content makes this an excellent choice, especially for hydration.</p>
                    <p className="serving-suggestion">Serving: Thin slices with skin</p>
                  </div>
                  
                  <div className="food-item safe">
                    <h4>Carrots</h4>
                    <p className="food-rating">★★★★☆</p>
                    <p>Nutrient-rich and enjoyed by most species. Can be grated for easier consumption.</p>
                    <p className="serving-suggestion">Serving: Grated or thin slices</p>
                  </div>
                  
                  <div className="food-item safe">
                    <h4>Zucchini</h4>
                    <p className="food-rating">★★★★★</p>
                    <p>Excellent staple food that's soft and easy for snails to eat.</p>
                    <p className="serving-suggestion">Serving: Thin slices with skin</p>
                  </div>
                  
                  <div className="food-item safe">
                    <h4>Sweet Potato</h4>
                    <p className="food-rating">★★★★☆</p>
                    <p>Nutritious and enjoyed by many species. Best served cooked and cooled.</p>
                    <p className="serving-suggestion">Serving: Small, cooked pieces</p>
                  </div>
                  
                  <div className="food-item safe">
                    <h4>Kale</h4>
                    <p className="food-rating">★★★★☆</p>
                    <p>Rich in calcium and other nutrients. Offer less frequently than other greens.</p>
                    <p className="serving-suggestion">Serving: Small torn pieces</p>
                  </div>
                  
                  <div className="food-item moderate">
                    <h4>Spinach</h4>
                    <p className="food-rating">★★★☆☆</p>
                    <p>Contains oxalic acid which can bind calcium. Feed in moderation.</p>
                    <p className="serving-suggestion">Serving: Small pieces, occasionally</p>
                  </div>
                  
                  <div className="food-item safe">
                    <h4>Broccoli</h4>
                    <p className="food-rating">★★★★☆</p>
                    <p>Nutrient-dense and good for variety. Some snails may prefer the florets.</p>
                    <p className="serving-suggestion">Serving: Small pieces, raw or blanched</p>
                  </div>
                </div>
              </div>
            )}
            
            {activeCategory === 'fruits' && (
              <div className="food-category">
                <h3>Fruits <span className="recommendation">Offer 1-2 times per week</span></h3>
                <p>Fruits make excellent treats but should be offered less frequently than vegetables due to their sugar content.</p>
                
                <div className="food-grid">
                  <div className="food-item safe">
                    <h4>Apple</h4>
                    <p className="food-rating">★★★★☆</p>
                    <p>Popular with most snail species. Remove seeds as they contain trace amounts of cyanide.</p>
                    <p className="serving-suggestion">Serving: Small pieces without seeds</p>
                  </div>
                  
                  <div className="food-item safe">
                    <h4>Banana</h4>
                    <p className="food-rating">★★★★★</p>
                    <p>Highly appealing to most snails. Rich in potassium and other nutrients.</p>
                    <p className="serving-suggestion">Serving: Thin slices</p>
                  </div>
                  
                  <div className="food-item safe">
                    <h4>Strawberry</h4>
                    <p className="food-rating">★★★★☆</p>
                    <p>Sweet and juicy, often a snail favorite. High in natural sugars.</p>
                    <p className="serving-suggestion">Serving: Small pieces, tops removed</p>
                  </div>
                  
                  <div className="food-item safe">
                    <h4>Mango</h4>
                    <p className="food-rating">★★★★☆</p>
                    <p>Sweet tropical fruit that many snails enjoy. Remove skin before serving.</p>
                    <p className="serving-suggestion">Serving: Small cubes, no skin</p>
                  </div>
                  
                  <div className="food-item moderate">
                    <h4>Citrus Fruits</h4>
                    <p className="food-rating">★★☆☆☆</p>
                    <p>The acidity can be harmful in large quantities. Offer rarely and in small amounts.</p>
                    <p className="serving-suggestion">Serving: Tiny pieces, occasionally</p>
                  </div>
                  
                  <div className="food-item safe">
                    <h4>Watermelon</h4>
                    <p className="food-rating">★★★★☆</p>
                    <p>Excellent for hydration. Remove seeds before serving.</p>
                    <p className="serving-suggestion">Serving: Small cubes without seeds</p>
                  </div>
                  
                  <div className="food-item safe">
                    <h4>Pear</h4>
                    <p className="food-rating">★★★★☆</p>
                    <p>Soft texture makes it easy for snails to consume. Well-liked by most species.</p>
                    <p className="serving-suggestion">Serving: Small pieces without seeds</p>
                  </div>
                  
                  <div className="food-item moderate">
                    <h4>Grapes</h4>
                    <p className="food-rating">★★★☆☆</p>
                    <p>High sugar content means they should be offered sparingly.</p>
                    <p className="serving-suggestion">Serving: Halved or quartered, occasionally</p>
                  </div>
                </div>
              </div>
            )}
            
            {activeCategory === 'proteins' && (
              <div className="food-category">
                <h3>Protein Sources <span className="recommendation">Offer 1-2 times per month</span></h3>
                <p>While primarily herbivorous, many snail species benefit from occasional protein. Offer sparingly to avoid health issues.</p>
                
                <div className="food-grid">
                  <div className="food-item safe">
                    <h4>Raw Mushrooms</h4>
                    <p className="food-rating">★★★★☆</p>
                    <p>Store-bought mushrooms provide protein and are enjoyed by many species.</p>
                    <p className="serving-suggestion">Serving: Small pieces, commercially grown only</p>
                  </div>
                  
                  <div className="food-item safe">
                    <h4>Fish Food Flakes</h4>
                    <p className="food-rating">★★★★☆</p>
                    <p>Convenient source of protein. Look for brands without added copper.</p>
                    <p className="serving-suggestion">Serving: Small pinch, moistened</p>
                  </div>
                  
                  <div className="food-item moderate">
                    <h4>Hard-boiled Egg</h4>
                    <p className="food-rating">★★★☆☆</p>
                    <p>Rich in protein but can spoil quickly. Remove promptly after feeding.</p>
                    <p className="serving-suggestion">Serving: Tiny pieces, rarely</p>
                  </div>
                  
                  <div className="food-item moderate">
                    <h4>Bloodworms</h4>
                    <p className="food-rating">★★★☆☆</p>
                    <p>Freeze-dried varieties can be offered occasionally to some species.</p>
                    <p className="serving-suggestion">Serving: Small amount, rehydrated</p>
                  </div>
                </div>
              </div>
            )}
            
            {activeCategory === 'calcium' && (
              <div className="food-category">
                <h3>Calcium Sources <span className="recommendation">Always available</span></h3>
                <p>Calcium is essential for shell development and health. A source should always be available in the habitat.</p>
                
                <div className="food-grid">
                  <div className="food-item safe">
                    <h4>Cuttlebone</h4>
                    <p className="food-rating">★★★★★</p>
                    <p>Excellent calcium source commonly used for bird cages. Break into manageable pieces.</p>
                    <p className="serving-suggestion">Serving: Continuous access</p>
                  </div>
                  
                  <div className="food-item safe">
                    <h4>Egg Shells</h4>
                    <p className="food-rating">★★★★☆</p>
                    <p>Clean, bake at 200°F (93°C) for 10 minutes, then crush into powder.</p>
                    <p className="serving-suggestion">Serving: Sprinkle small amount weekly</p>
                  </div>
                  
                  <div className="food-item safe">
                    <h4>Limestone Flour</h4>
                    <p className="food-rating">★★★★☆</p>
                    <p>Fine powder that can be sprinkled on food or in the habitat.</p>
                    <p className="serving-suggestion">Serving: Light dusting on food</p>
                  </div>
                  
                  <div className="food-item safe">
                    <h4>Calcium Powder</h4>
                    <p className="food-rating">★★★★★</p>
                    <p>Reptile or bird calcium supplements (without phosphorus or vitamin D3).</p>
                    <p className="serving-suggestion">Serving: Light dusting 1-2 times weekly</p>
                  </div>
                </div>
              </div>
            )}
            
            {activeCategory === 'avoid' && (
              <div className="food-category">
                <h3>Foods to Avoid <span className="recommendation">Never feed</span></h3>
                <p>These foods can be harmful or toxic to snails and should never be offered.</p>
                
                <div className="food-grid">
                  <div className="food-item avoid">
                    <h4>Salt & Salty Foods</h4>
                    <p className="warning">HIGHLY TOXIC</p>
                    <p>Salt causes dehydration in snails and can be fatal even in small amounts.</p>
                  </div>
                  
                  <div className="food-item avoid">
                    <h4>Citrus</h4>
                    <p className="warning">POTENTIALLY HARMFUL</p>
                    <p>The high acidity can damage snail skin and internal organs.</p>
                  </div>
                  
                  <div className="food-item avoid">
                    <h4>Onions & Garlic</h4>
                    <p className="warning">TOXIC</p>
                    <p>Contains compounds that are harmful to most gastropods.</p>
                  </div>
                  
                  <div className="food-item avoid">
                    <h4>Processed Foods</h4>
                    <p className="warning">UNHEALTHY</p>
                    <p>Foods with preservatives, salt, sugar, and artificial ingredients should be avoided.</p>
                  </div>
                  
                  <div className="food-item avoid">
                    <h4>Coffee Grounds</h4>
                    <p className="warning">TOXIC</p>
                    <p>Caffeine is toxic to snails and should never be offered.</p>
                  </div>
                  
                  <div className="food-item avoid">
                    <h4>Wild-collected Mushrooms</h4>
                    <p className="warning">POTENTIALLY TOXIC</p>
                    <p>May contain toxins. Only offer store-bought mushrooms.</p>
                  </div>
                  
                  <div className="food-item avoid">
                    <h4>Bread & Pasta</h4>
                    <p className="warning">UNHEALTHY</p>
                    <p>Low nutritional value and can expand in their digestive system.</p>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          <div className="feeding-tips">
            <h3>Feeding Best Practices</h3>
            <ul className="tips-list">
              <li>
                <strong>Variety is key:</strong> Rotate through different foods to ensure a balanced diet
              </li>
              <li>
                <strong>Proper serving size:</strong> For small snails, a piece about the size of their shell is sufficient
              </li>
              <li>
                <strong>Feeding schedule:</strong> Most snails do well with fresh food every 1-2 days
              </li>
              <li>
                <strong>Food removal:</strong> Always remove uneaten food after 24 hours to prevent mold and bacteria growth
              </li>
              <li>
                <strong>Wash thoroughly:</strong> Clean all produce well to remove pesticides and contaminants
              </li>
              <li>
                <strong>Separate dish:</strong> Place food on a shallow dish for easier cleaning and monitoring
              </li>
              <li>
                <strong>Calcium access:</strong> Ensure calcium sources are always available in the habitat
              </li>
            </ul>
          </div>
          
          <div className="downloadable-resources">
            <h3>Downloadable Resources</h3>
            <p>Want to keep this information handy? Download our printable feeding guides:</p>
            <div className="download-buttons">
              <button className="btn btn-secondary">Printable Feeding Chart (PDF)</button>
              <button className="btn btn-secondary">Weekly Feeding Schedule Template</button>
              <button className="btn btn-secondary">Food Safety Guide</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeedingChart;
