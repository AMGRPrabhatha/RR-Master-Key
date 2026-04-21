import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="footer-cta">
      <div className="container">
        
        <motion.div 
          className="massive-text"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          MasterKey
        </motion.div>
        
        <div className="footer-content">
          <div className="footer-col">
            <h5>Company</h5>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="#">Careers</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h5>Customer Services</h5>
            <ul>
              <li><Link to="#">FAQs</Link></li>
              <li><Link to="#">User Account</Link></li>
              <li><Link to="#">Privacy Policy / TOS</Link></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h5>Support</h5>
            <ul>
              <li><Link to="/blog">Articles</Link></li>
              <li><Link to="#">Style Guide</Link></li>
              <li><Link to="#">Licenses</Link></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h5>Subscribe our newsletter</h5>
            <div className="newsletter-input">
              <input type="email" placeholder="Enter your email..." />
              <button>→</button>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="copyright">
            Copyright © 2026 RR MasterKey Motors. All rights reserved.
          </div>
          <div className="social-links">
            <a href="https://www.instagram.com/rrmasterkey?igsh=MTJ4NGh5eWcyOGw4Ng==" target="_blank" rel="noopener noreferrer">
              <ExternalLink size={20} /> Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
