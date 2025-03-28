import React from 'react';
import './ContentPage.css';

function AboutUs() {
  return (
    <section className="content-page about-us">
      <div className="container">
        <h2 className="section-title">About <span className="accent">OnlySnails</span></h2>
        
        <div className="content-wrapper">
          <div className="intro-section">
            <p className="intro-text">
              Welcome to OnlySnails, the premier online community for gastropod enthusiasts worldwide. 
              Our mission is to provide comprehensive resources for snail keepers of all experience levels 
              while promoting responsible and ethical care practices.
            </p>
          </div>
          
          <div className="about-section">
            <h3>Our Story</h3>
            <div className="story-content">
              <div className="story-image">
                <div className="placeholder-image">Founder Image</div>
              </div>
              <div className="story-text">
                <p>
                  OnlySnails was founded in 2021 by marine biologist and lifelong gastropod enthusiast Dr. Michelle Shell. 
                  What began as a personal blog documenting her experiences with pet snails quickly grew into a vibrant 
                  community of like-minded individuals passionate about these often misunderstood creatures.
                </p>
                <p>
                  After noticing the lack of comprehensive, science-based resources for snail keepers, Dr. Shell 
                  assembled a team of veterinarians, biologists, and experienced breeders to create what would become 
                  the world's most trusted gastropod care resource.
                </p>
                <p>
                  Today, OnlySnails reaches over 500,000 snail enthusiasts monthly, providing guidance on proper care, 
                  breeding, health management, and conservation efforts for gastropods worldwide.
                </p>
              </div>
            </div>
          </div>
          
          <div className="about-section">
            <h3>Our Mission</h3>
            <div className="mission-content">
              <div className="mission-points">
                <div className="mission-point">
                  <h4>Education</h4>
                  <p>
                    Provide accurate, science-based information on gastropod care, biology, and behavior 
                    to support successful snail keeping.
                  </p>
                </div>
                
                <div className="mission-point">
                  <h4>Community</h4>
                  <p>
                    Foster a supportive, inclusive environment where enthusiasts can connect, share experiences, 
                    and learn from one another.
                  </p>
                </div>
                
                <div className="mission-point">
                  <h4>Conservation</h4>
                  <p>
                    Promote awareness of wild gastropod conservation issues and responsible keeping practices 
                    to protect native species.
                  </p>
                </div>
                
                <div className="mission-point">
                  <h4>Innovation</h4>
                  <p>
                    Continually research and develop best practices for gastropod husbandry, breeding, 
                    and healthcare.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="about-section">
            <h3>Meet Our Team</h3>
            <div className="team-grid">
              <div className="team-member">
                <div className="member-photo">
                  <div className="placeholder-image">Photo</div>
                </div>
                <h4>Dr. Michelle Shell</h4>
                <p className="member-title">Founder & Lead Biologist</p>
                <p className="member-bio">
                  Marine biologist with a PhD in Invertebrate Zoology from Stanford University. 
                  Has kept gastropods for over 20 years and published numerous papers on land snail behavior.
                </p>
              </div>
              
              <div className="team-member">
                <div className="member-photo">
                  <div className="placeholder-image">Photo</div>
                </div>
                <h4>Dr. Helix Peterson</h4>
                <p className="member-title">Veterinary Consultant</p>
                <p className="member-bio">
                  Exotic animal veterinarian specializing in invertebrate medicine. 
                  Provides expertise on gastropod health, disease prevention, and treatment protocols.
                </p>
              </div>
              
              <div className="team-member">
                <div className="member-photo">
                  <div className="placeholder-image">Photo</div>
                </div>
                <h4>Clara Gastropoda</h4>
                <p className="member-title">Community Manager</p>
                <p className="member-bio">
                  Professional breeder with 15+ years experience in rare snail species. 
                  Oversees forum discussions and member engagement across all platforms.
                </p>
              </div>
              
              <div className="team-member">
                <div className="member-photo">
                  <div className="placeholder-image">Photo</div>
                </div>
                <h4>Marcus Mollusca</h4>
                <p className="member-title">Content Director</p>
                <p className="member-bio">
                  Science writer and photographer who creates our educational materials, 
                  care guides, and visual documentation of gastropod life cycles.
                </p>
              </div>
            </div>
          </div>
          
          <div className="about-section">
            <h3>Our Values</h3>
            <ul className="values-list">
              <li>
                <strong>Scientific Accuracy:</strong> All information provided is research-based and regularly reviewed by experts
              </li>
              <li>
                <strong>Animal Welfare:</strong> We prioritize the health and wellbeing of gastropods in all our recommendations
              </li>
              <li>
                <strong>Environmental Responsibility:</strong> We advocate for responsible keeping practices that protect wild ecosystems
              </li>
              <li>
                <strong>Community Support:</strong> We believe in fostering a kind, inclusive community where all questions are welcomed
              </li>
              <li>
                <strong>Educational Excellence:</strong> We continuously update our resources to reflect the latest understanding in gastropod care
              </li>
            </ul>
          </div>
          
          <div className="testimonials-section">
            <h3>Community Testimonials</h3>
            <div className="testimonials-grid">
              <div className="testimonial">
                <p className="testimonial-text">
                  "OnlySnails completely transformed how I care for my gastropod friends. The detailed health guide helped me 
                  identify and treat shell issues before they became serious problems."
                </p>
                <p className="testimonial-author">— Jessica T., Chicago</p>
              </div>
              
              <div className="testimonial">
                <p className="testimonial-text">
                  "As a biology teacher, I've found the educational resources on OnlySnails invaluable for my classroom. 
                  My students are now fascinated by gastropods instead of squeamish!"
                </p>
                <p className="testimonial-author">— Mr. Henderson, Biology Educator</p>
              </div>
              
              <div className="testimonial">
                <p className="testimonial-text">
                  "The breeding guide helped me successfully raise my first clutch of rare Megalobulimus snails. 
                  The step-by-step instructions were clear and scientifically sound."
                </p>
                <p className="testimonial-author">— Ricardo L., Breeder</p>
              </div>
            </div>
          </div>
          
          <div className="contact-cta">
            <h3>Get In Touch</h3>
            <p>
              Have questions, suggestions, or want to join our team of contributors? 
              We'd love to hear from you!
            </p>
            <button className="btn btn-primary">Contact Us</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
