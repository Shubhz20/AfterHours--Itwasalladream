import React from 'react';
import { Instagram, Mail, Phone, MapPin } from 'lucide-react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Contact Us</h3>
          <div className="contact-info">
            <a href="mailto:harshitagra2012@gmail.com" className="contact-item">
              <Mail size={20} />
              <span>harshitagra2012@gmail.com</span>
            </a>
            <a href="tel:+916377303438" className="contact-item">
              <Phone size={20} />
              <span>+91 6377303438</span>
            </a>
            <div className="contact-item">
              <MapPin size={20} />
              <span>Pune, Maharashtra</span>
            </div>
          </div>
        </div>

        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-links">
            <a 
              href="https://www.instagram.com/afterhours_pune?igsh=YW1uaWlnN203OWRk&utm_source=qr" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
            >
              <Instagram size={24} />
              <span>@afterhours_pune</span>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 AfterHours. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;