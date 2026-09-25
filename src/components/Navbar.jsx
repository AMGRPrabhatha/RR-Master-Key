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
      <div className="navbar-container">
        {/* Main Pill (on desktop contains all, on mobile contains only logo) */}
        <nav className="navbar-pill">
          {/* Logo */}
          <Link to="/" onClick={closeMobileMenu} className="nav-logo">
            <div className="logo-icon">
              <img src="/logo.webp" alt="RR MasterKey Logo" className="logo-img" />
            </div>
            <span className="logo-text">RR MasterKey</span>
          </Link>

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
            <a href="https://wa.me/818093818491" target="_blank" rel="noreferrer" className="contact-btn whatsapp-btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.132.558 4.13 1.535 5.864L.057 23.857a.5.5 0 0 0 .609.61l6.089-1.462A11.935 11.935 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.791 9.791 0 0 1-5.031-1.388l-.36-.214-3.733.897.939-3.634-.235-.374A9.818 9.818 0 1 1 12 21.818z"/>
              </svg>
              WhatsApp
            </a>
          </div>
        </nav>

        {/* Mobile Menu Toggle Button (Separate floating round button on right side) */}
        <button className="mobile-toggle" onClick={toggleMobileMenu} aria-label="Open menu">
          {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="mobile-menu-overlay"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Header */}
            <div className="mobile-menu-header">
              <div className="mobile-menu-logo">
                <div className="logo-icon">
                  <img src="/logo.webp" alt="Logo" className="logo-img" />
                </div>
                <span>RR MasterKey</span>
              </div>
              <button className="mobile-menu-close" onClick={closeMobileMenu} aria-label="Close menu">
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

            {/* WhatsApp CTA Button */}
            <div className="mobile-contact-info">
              <a href="https://wa.me/818093818491" target="_blank" rel="noreferrer" className="mobile-call-btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.132.558 4.13 1.535 5.864L.057 23.857a.5.5 0 0 0 .609.61l6.089-1.462A11.935 11.935 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.791 9.791 0 0 1-5.031-1.388l-.36-.214-3.733.897.939-3.634-.235-.374A9.818 9.818 0 1 1 12 21.818z"/>
                </svg>
                WhatsApp Us
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
