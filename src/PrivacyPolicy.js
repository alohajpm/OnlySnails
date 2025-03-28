import React from 'react';
import './ContentPage.css';

function PrivacyPolicy() {
  return (
    <section className="content-page privacy-policy">
      <div className="container">
        <h2 className="section-title">Privacy <span className="accent">Policy</span></h2>
        
        <div className="content-wrapper">
          <div className="intro-section">
            <p className="intro-text">
              At OnlySnails, we take your privacy seriously. This Privacy Policy outlines how we collect, use, disclose, 
              and safeguard your information when you visit our website or use our services. Please read this policy 
              carefully to understand our practices regarding your personal data.
            </p>
            <p className="last-updated">
              <strong>Last Updated:</strong> March 15, 2024
            </p>
          </div>
          
          <div className="policy-section">
            <h3>Information We Collect</h3>
            <p>
              We may collect personal information that you voluntarily provide when interacting with our website, 
              including but not limited to:
            </p>
            <ul>
              <li>Contact information (name, email address, phone number)</li>
              <li>Account credentials if you create an OnlySnails account</li>
              <li>Billing and payment information for purchases</li>
              <li>Forum posts, comments, and other content you contribute</li>
              <li>Survey responses and feedback</li>
              <li>Information shared when participating in community events</li>
            </ul>
            
            <h4>Automatically Collected Information</h4>
            <p>
              When you visit our website, we may automatically collect certain information about your device and usage, including:
            </p>
            <ul>
              <li>IP address and browser type</li>
              <li>Operating system</li>
              <li>Pages visited and time spent on pages</li>
              <li>Referring website addresses</li>
              <li>General geographic location (country or city)</li>
            </ul>
          </div>
          
          <div className="policy-section">
            <h3>How We Use Your Information</h3>
            <p>
              We may use the information we collect for various purposes, including:
            </p>
            <ul>
              <li>Providing and maintaining our website and services</li>
              <li>Personalizing your experience on our site</li>
              <li>Processing transactions and fulfilling orders</li>
              <li>Responding to your inquiries and support requests</li>
              <li>Sending administrative emails and updates</li>
              <li>Sending marketing communications (only with your consent)</li>
              <li>Improving our website, products, and services</li>
              <li>Monitoring site usage and analyzing traffic patterns</li>
              <li>Preventing fraudulent transactions and monitoring for unauthorized activities</li>
              <li>Complying with legal obligations</li>
            </ul>
          </div>
          
          <div className="policy-section">
            <h3>Cookies and Tracking Technologies</h3>
            <p>
              We use cookies and similar tracking technologies to track activity on our website and store certain information. 
              Cookies are files with small amounts of data that may include an anonymous unique identifier.
            </p>
            <p>
              Types of cookies we use:
            </p>
            <ul>
              <li><strong>Essential cookies:</strong> Required for basic website functionality</li>
              <li><strong>Functionality cookies:</strong> Remember your preferences and settings</li>
<li><strong>Analytics cookies:</strong> Help us understand how visitors interact with our website</li>
              <li><strong>Marketing cookies:</strong> Track your browsing habits to deliver targeted advertising</li>
            </ul>
            <p>
              You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. 
              However, if you do not accept cookies, you may not be able to use some portions of our website.
            </p>
          </div>
          
          <div className="policy-section">
            <h3>Disclosure of Your Information</h3>
            <p>
              We may share your personal information in the following situations:
            </p>
            <ul>
              <li><strong>With Service Providers:</strong> We may share your information with third-party vendors, service providers, and contractors who perform services for us or on our behalf.</li>
              <li><strong>Business Transfers:</strong> If we are involved in a merger, acquisition, or sale of all or a portion of our assets, your information may be transferred as part of that transaction.</li>
              <li><strong>With Affiliates:</strong> We may share your information with our affiliates, in which case we will require those affiliates to honor this Privacy Policy.</li>
              <li><strong>With Business Partners:</strong> We may share your information with our business partners to offer you certain products, services, or promotions.</li>
              <li><strong>With Your Consent:</strong> We may disclose your information for any other purpose with your consent.</li>
              <li><strong>Legal Requirements:</strong> We may disclose your information where required to do so by law or in response to valid requests by public authorities.</li>
            </ul>
          </div>
          
          <div className="policy-section">
            <h3>Data Security</h3>
            <p>
              We implement appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards, no security system is impenetrable. We cannot guarantee the security of our databases, nor can we guarantee that information you supply will not be intercepted while being transmitted to us over the Internet.
            </p>
          </div>
          
          <div className="policy-section">
            <h3>Your Data Protection Rights</h3>
            <p>
              Depending on your location and applicable laws, you may have the following rights regarding your personal data:
            </p>
            <ul>
              <li><strong>Access:</strong> The right to request copies of your personal data</li>
              <li><strong>Rectification:</strong> The right to request that we correct inaccurate information</li>
              <li><strong>Erasure:</strong> The right to request that we delete your data under certain conditions</li>
              <li><strong>Restriction:</strong> The right to request that we restrict the processing of your data</li>
              <li><strong>Data Portability:</strong> The right to request that we transfer your data to another organization</li>
              <li><strong>Objection:</strong> The right to object to our processing of your data</li>
            </ul>
            <p>
              To exercise any of these rights, please contact us using the information provided at the end of this policy.
            </p>
          </div>
          
          <div className="policy-section">
            <h3>Children's Privacy</h3>
            <p>
              Our website is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us so that we can delete the information.
            </p>
          </div>
          
          <div className="policy-section">
            <h3>Changes to this Privacy Policy</h3>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date at the top of this policy. You are advised to review this Privacy Policy periodically for any changes.
            </p>
          </div>
          
          <div className="policy-section">
            <h3>Contact Us</h3>
            <p>
              If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:
            </p>
            <div className="contact-info">
              <p><strong>Email:</strong> privacy@onlysnails.com</p>
              <p><strong>Postal Address:</strong> OnlySnails Headquarters, 123 Gastropod Lane, Shell City, CA 94025</p>
              <p><strong>Phone:</strong> (555) 123-4567</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PrivacyPolicy;
