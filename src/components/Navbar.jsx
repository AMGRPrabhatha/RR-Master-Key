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

  const isActive = (path) => location.pathname === path;

  return (
    <div className={`navbar-wrapper ${isScrolled ? 'scrolled' : ''}`}>
      <nav className="navbar-pill">
        {/* Logo */}
        <div className="nav-logo">
          <div className="logo-icon">RR</div>
          <Link to="/" onClick={closeMobileMenu} className="logo-text">RR MasterKey</Link>
        </div>

        {/* Divider */}
        <div className="nav-divider desktop-only" />

        {/* Center Links */}
        <ul className="nav-links desktop-only">
          <li><Link to="/" className={isActive('/') ? 'active' : ''}>Home</Link></li>
          <li><Link to="/about" className={isActive('/about') ? 'active' : ''}>About</Link></li>
          <li><Link to="/shop" className={isActive('/shop') ? 'active' : ''}>Inventory</Link></li>
          <li><Link to="/gallery" className={isActive('/gallery') ? 'active' : ''}>Gallery</Link></li>
          <li><Link to="/blog" className={isActive('/blog') ? 'active' : ''}>Blog</Link></li>
        </ul>

        {/* Divider */}
        <div className="nav-divider desktop-only" />

        {/* Right Side */}
        <div className="nav-right desktop-only">
          <a href="tel:+818093818491" className="online-status">
            <Phone size={13} />
            <span>Online</span>
          </a>
          <a href="tel:+818093818491" className="phone-number">+81 80-9381-8491</a>
          <a href="tel:+818093818491" className="contact-btn">CONTACT US</a>
        </div>

        {/* Mobile Toggle */}
        <button className="mobile-toggle" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="mobile-menu-overlay"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Header */}
            <div className="mobile-menu-header">
              <div className="mobile-menu-logo">
                <div className="logo-icon">RR</div>
                <span>RR MasterKey</span>
              </div>
              <button className="mobile-menu-close" onClick={closeMobileMenu}>
                <X size={20} />
              </button>
            </div>

            {/* Links */}
            <ul className="mobile-nav-links">
              <li><Link to="/" onClick={closeMobileMenu} className={isActive('/') ? 'active' : ''}>Home</Link></li>
              <li><Link to="/about" onClick={closeMobileMenu} className={isActive('/about') ? 'active' : ''}>About</Link></li>
              <li><Link to="/shop" onClick={closeMobileMenu} className={isActive('/shop') ? 'active' : ''}>Inventory</Link></li>
              <li><Link to="/gallery" onClick={closeMobileMenu} className={isActive('/gallery') ? 'active' : ''}>Gallery</Link></li>
              <li><Link to="/blog" onClick={closeMobileMenu} className={isActive('/blog') ? 'active' : ''}>Blog</Link></li>
            </ul>

            {/* Call Button */}
            <div className="mobile-contact-info">
              <a href="tel:+818093818491" className="mobile-call-btn">
                <Phone size={18} /> Call: +81 80-9381-8491
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
  );
};

export default Navbar;
