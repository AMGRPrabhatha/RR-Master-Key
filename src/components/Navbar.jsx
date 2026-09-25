import React, { useState } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const location = useLocation();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        
        {/* Left: Logo Pill */}
        <div className="nav-pill logo-pill">
          <div className="logo-icon">RR</div>
          <Link to="/" onClick={closeMobileMenu} className="logo-text">RR MasterKey</Link>
        </div>

        {/* Center: Links Pill (Desktop) */}
        <div className="nav-pill center-pill desktop-only">
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/shop">Inventory</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/blog">Blog</Link></li>
          </ul>
        </div>

        {/* Right: Contact Pill (Desktop) */}
        <div className="nav-pill contact-pill desktop-only">
          <a href="tel:+818093818491" className="online-status">
            <Phone size={14} />
            <span>Online</span>
          </a>
          <a href="tel:+818093818491" className="phone-number">+81 80-9381-8491</a>
          <a href="tel:+818093818491" className="contact-btn">CONTACT US</a>
        </div>

        {/* Mobile Toggle */}
        <button className="mobile-toggle" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              className="mobile-menu-overlay"
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <ul className="mobile-nav-links">
                <li><Link to="/" onClick={closeMobileMenu}>Home</Link></li>
                <li><Link to="/about" onClick={closeMobileMenu}>About</Link></li>
                <li><Link to="/shop" onClick={closeMobileMenu}>Inventory</Link></li>
                <li><Link to="/gallery" onClick={closeMobileMenu}>Gallery</Link></li>
                <li><Link to="/blog" onClick={closeMobileMenu}>Blog</Link></li>
              </ul>
              
              <div className="mobile-contact-info">
                <a href="tel:+818093818491" className="mobile-call-btn">
                  <Phone size={20} /> Call Now: +81 80-9381-8491
                </a>
              </div>

              <div className="mobile-menu-footer">
                <p>RR MasterKey Motors</p>
                <span>Importing Excellence</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
