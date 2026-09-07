import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';
import './Extras.css';

export const Footer = () => {
  return (
    <footer className="footer-eutours">
      <div className="container">
        <div className="footer-top-row">
          <div className="footer-col">
            <h5>RESOURCES</h5>
            <ul>
              <li><Link to="/shop">Vehicle Fleet</Link></li>
              <li><Link to="/blog">Import Guide</Link></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h5>HELP</h5>
            <ul>
              <li><Link to="/about#faq-section">FAQs</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h5>COMPANY</h5>
            <ul>
              <li><Link to="/about">About RR MasterKey</Link></li>
              <li><Link to="/blog">Our Insights</Link></li>
            </ul>
          </div>
          
          <div className="footer-col contact-col">
            <h5>CONTACT INFO</h5>
            <ul>
              <li><span>076 811 8491</span></li>
              <li><span>+81 80 9381 8491</span></li>
              <li><span>inforrmasterkey@gmail.com</span></li>
            </ul>
          </div>

          <div className="footer-social">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-icon">
              <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-icon">
              <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
          </div>
        </div>
        
        <div className="footer-bottom-row">
          <div className="footer-bottom-left">
            <div className="location-pin">
              <MapPin size={14} color="#ff3e00" fill="#ff3e00" /> <strong>Sri Lanka</strong>
            </div>
            <div className="copyright-text">
              © 2026 RR MasterKey. All rights reserved @RP
            </div>
          </div>
          <div className="footer-bottom-right">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="#">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
