import React, { useState } from 'react';
import './ContentPage.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    reason: 'general'
  });
  
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, this would send the form data to a server
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
      reason: 'general'
    });
  };
  
  return (
    <section className="content-page contact">
      <div className="container">
        <h2 className="section-title">Contact <span className="accent">Us</span></h2>
        
        <div className="content-wrapper">
          <div className="intro-section">
            <p className="intro-text">
              Have questions, suggestions, or just want to talk about snails? We'd love to hear from you! 
              Use the form below to get in touch with our team, and we'll respond within 2 business days.
            </p>
          </div>
          
          <div className="contact-grid">
            <div className="contact-form-container">
              {formSubmitted ? (
                <div className="form-success">
                  <h3>Thank You!</h3>
                  <p>Your message has been sent successfully. We'll get back to you shortly.</p>
                  <button 
                    className="btn btn-secondary"
                    onClick={() => setFormSubmitted(false)}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="reason">Reason for Contact</label>
                    <select
                      id="reason"
                      name="reason"
                      value={formData.reason}
                      onChange={handleChange}
                    >
                      <option value="general">General Inquiry</option>
                      <option value="support">Care Support</option>
                      <option value="partnership">Partnership Opportunity</option>
                      <option value="feedback">Website Feedback</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="message">Your Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="6"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                  
                  <button type="submit" className="btn btn-primary">Send Message</button>
                </form>
              )}
            </div>
            
            <div className="contact-info">
              <div className="info-section">
                <h3>Contact Information</h3>
                <ul className="info-list">
                  <li>
                    <span className="info-icon">📧</span>
                    <span className="info-detail">
                      <strong>Email:</strong> hello@onlysnails.com
                    </span>
                  </li>
                  <li>
                    <span className="info-icon">📱</span>
                    <span className="info-detail">
                      <strong>Phone:</strong> (555) 123-4567
                    </span>
                  </li>
                  <li>
                    <span className="info-icon">📍</span>
                    <span className="info-detail">
                      <strong>Address:</strong><br />
                      OnlySnails Headquarters<br />
                      123 Gastropod Lane<br />
                      Shell City, CA 94025
                    </span>
                  </li>
                </ul>
              </div>
              
              <div className="hours-section">
                <h3>Business Hours</h3>
                <ul className="hours-list">
                  <li><strong>Monday-Friday:</strong> 9:00 AM - 6:00 PM (PST)</li>
                  <li><strong>Saturday:</strong> 10:00 AM - 4:00 PM (PST)</li>
                  <li><strong>Sunday:</strong> Closed</li>
                </ul>
                <p className="response-time">
                  <strong>Average Response Time:</strong> Within 48 hours
                </p>
              </div>
              
              <div className="social-section">
                <h3>Connect With Us</h3>
                <div className="social-buttons">
                  <a href="#" className="social-button instagram">Instagram</a>
                  <a href="#" className="social-button facebook">Facebook</a>
                  <a href="#" className="social-button youtube">YouTube</a>
                  <a href="#" className="social-button twitter">Twitter</a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="faq-section">
            <h3>Frequently Asked Questions</h3>
            
            <div className="faq-item">
              <h4>How quickly will I receive a response?</h4>
              <p>
                We aim to respond to all inquiries within 2 business days. For urgent care questions, 
                please indicate this in your subject line.
              </p>
            </div>
            
            <div className="faq-item">
              <h4>Can you help identify my snail species?</h4>
              <p>
                Yes! When submitting species identification requests, please include clear photos from multiple angles 
                (top of shell, underside, and aperture) and information about where you found or purchased the snail.
              </p>
            </div>
            
            <div className="faq-item">
              <h4>Do you offer consulting services for commercial breeding?</h4>
              <p>
                We do provide consulting services for ethical commercial breeding operations. Please select 
                "Partnership Opportunity" in the contact form and provide details about your project.
              </p>
            </div>
            
            <div className="faq-item">
              <h4>How can I join the OnlySnails team?</h4>
              <p>
                We're always looking for knowledgeable contributors and volunteers. Select "Other" in the 
                contact form and include your relevant experience and areas of interest.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
