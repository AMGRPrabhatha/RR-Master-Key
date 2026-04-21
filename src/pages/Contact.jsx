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

      <div className="container section-padding">
        <div className="contact-grid">
          
          <motion.div 
            className="contact-info-column"
            initial={{ opacity: 0, x: -30 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.6 }}
          >
            <h2 className="contact-info-title">Get In Touch</h2>
            <p className="contact-info-desc">
              Whether you're looking for a specific model from Japan or need assistance with customs and registration in Sri Lanka, RR MasterKey Motors is here to help.
            </p>
            
            <div className="contact-methods">
              <div className="contact-method-item">
                <div className="icon-circle">
                  <MapPin size={22} color="#1a1a1a" />
                </div>
                <div>
                  <h4 className="method-label">Showroom</h4>
                  <p className="method-value">123 Colombo Road, Colombo 10, Sri Lanka</p>
                </div>
              </div>
              
              <div className="contact-method-item">
                <div className="icon-circle">
                  <Phone size={22} color="#1a1a1a" />
                </div>
                <div>
                  <h4 className="method-label">Phone</h4>
                  <p className="method-value">+94 77 123 4567</p>
                </div>
              </div>
              
              <div className="contact-method-item">
                <div className="icon-circle">
                  <Mail size={22} color="#1a1a1a" />
                </div>
                <div>
                  <h4 className="method-label">Email</h4>
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
              <div className="form-group">
                <label>Full Name</label>
                <input type="text" placeholder="John Doe" />
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input type="email" placeholder="john@example.com" />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea rows="5" placeholder="I am interested in importing a Toyota Raize..."></textarea>
              </div>
              <button type="button" className="primary-btn shop-now-btn pill" style={{ width: '100%', justifyContent: 'center' }}>
                Send Message <Send size={18} />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
