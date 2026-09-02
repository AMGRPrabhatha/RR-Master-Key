import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import './Shop.css'; // Reusing page header styles
import './Contact.css';

const Contact = () => {
  return (
    <div className="page-wrapper">
      <div className="modern-page-hero">
        <img src="/hero.png" alt="Dealership exterior" className="modern-hero-bg" />
        <div className="page-header">
          <div className="container">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6 }}
            >
              Contact Us
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Get in touch with our import specialists today.
            </motion.p>
          </div>
        </div>
      </div>

      <div className="contact-section-wrapper">
        <div className="container section-padding">
          <div className="contact-grid">
            
            <motion.div 
              className="contact-info-column"
              initial={{ opacity: 0, x: -30 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.6 }}
            >
              <span className="contact-subtitle">REACH OUT TO US</span>
              <h2 className="contact-info-title">
                Let's Start Planning<br />Your <span className="text-accent">Dream Vehicle</span>
              </h2>
              <p className="contact-info-desc">
                Whether you have a question about our importing process, need help finding a specific luxury vehicle, or want a completely customized sourcing experience, our expert team is ready to assist you.
              </p>
              
              <div className="contact-methods">
                <div className="contact-method-item">
                  <div className="icon-circle">
                    <MapPin size={20} color="#ff5a36" />
                  </div>
                  <div className="method-text-wrapper">
                    <h4 className="method-label">Office Address</h4>
                    <p className="method-value">123 Colombo Road,<br/>Colombo 10, Sri Lanka</p>
                  </div>
                </div>
                
                <div className="contact-method-item">
                  <div className="icon-circle">
                    <Phone size={20} color="#ff5a36" />
                  </div>
                  <div className="method-text-wrapper">
                    <h4 className="method-label">Phone Number</h4>
                    <p className="method-value">+94 77 123 4567</p>
                  </div>
                </div>
                
                <div className="contact-method-item">
                  <div className="icon-circle">
                    <Mail size={20} color="#ff5a36" />
                  </div>
                  <div className="method-text-wrapper">
                    <h4 className="method-label">Email Address</h4>
                    <p className="method-value">info@rrmasterkeymotors.lk</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="contact-form-card"
              initial={{ opacity: 0, x: 30 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.6 }}
            >
              <form className="modern-form">
                <div className="form-row">
                  <div className="form-group">
                    <label>FULL NAME *</label>
                    <input type="text" placeholder="e.g. John Doe" />
                  </div>
                  <div className="form-group">
                    <label>EMAIL ADDRESS *</label>
                    <input type="email" placeholder="your@email.com" />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>PHONE NUMBER</label>
                    <input type="tel" placeholder="+94 77 123 4567" />
                  </div>
                  <div className="form-group">
                    <label>VEHICLE INQUIRY *</label>
                    <input type="text" placeholder="e.g. Toyota Land Cruiser" />
                  </div>
                </div>
                <div className="form-group">
                  <label>YOUR MESSAGE *</label>
                  <textarea rows="5" placeholder="Tell us about your ideal vehicle, special requirements, or any questions you have..."></textarea>
                </div>
                <button type="button" className="accent-btn">
                  SEND MESSAGE
                </button>
              </form>
            </motion.div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
