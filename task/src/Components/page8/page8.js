import React from 'react';
import './page8.css';

function Page8() {
  return (
    <div className="page8">
      {/* Still Have Questions Section */}
      <div className="questions-section">
        <h2 className="questions-title">Still Have Questions?</h2>
        <p className="questions-subtitle">
          If you cannot find an answer to your question in our FAQ, you can always  <br /> contact us.
          We will respond to you shortly.
        </p>
      </div>

      {/* Call to Action Banner */}
      <div className="cta-banner">
        
        <h3 className="cta-text">Empower Your Community, Elevate Your Experience</h3>
        <div className="ctads-buttons">
          <button className="cta-button get-started">Get Started</button>
          <button className="cta-button contact-us">Contact Us</button>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="footer-section">
        <div className="footer-container">
          <div className="footer-column">
            <h4>Features</h4>
            <ul>
              <li>Member Management</li>
              <li>Post Management</li>
              <li>Payment Management</li>
              <li>Dashboard</li>
              <li>Communities List</li>
              <li>Subscription Management</li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Use Cases</h4>
            <ul>
              <li>Content Creator</li>
              <li>Entrepreneur</li>
              <li>Business</li>
              <li>Healthcare</li>
              <li>Lifestyle</li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Company</h4>
            <ul>
              <li>About Us</li>
              <li>Careers</li>
              <li>FAQs</li>
              <li>Teams</li>
              <li>Contact Us</li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Follow Us</h4>
            <div className="social-icons">
              <span>FB Icon</span>
              <span>IG Icon</span>
              <span>TW Icon</span>
            </div>

            <h4>Subscribe</h4>
            <div className="subscribe-box">
              <input type="email" placeholder="Enter your email address" />
              <button className="subscribe-btn">Subscribe</button>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2024 All Rights Reserved</p>
          <ul className="footer-links">
            <li>Privacy Policy</li>
            <li>Terms of Use</li>
            <li>Sales and Refunds</li>
            <li>Legal</li>
            <li>Site Map</li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default Page8;
