import React, { useState } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
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

  const isDarkThemeRoute = location.pathname === '/about';

  return (
    <motion.nav 
      className={`navbar ${isScrolled ? 'scrolled' : ''} ${isDarkThemeRoute ? 'dark-theme' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="navbar-container">
        {/* Desktop Links - Left */}
        <ul className="nav-links left-links desktop-only">
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/shop">SHOP</Link></li>
          <li><Link to="/about">ABOUT US</Link></li>
        </ul>

        {/* Logo */}
        <div className="logo">
          <Link to="/" onClick={closeMobileMenu}>RR MasterKey</Link>
        </div>

        {/* Desktop Links - Right */}
        <div className="right-section desktop-only">
          <ul className="nav-links right-links">
            <li><Link to="/blog">BLOG</Link></li>
            <li><Link to="/contact">CONTACT</Link></li>
          </ul>
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
                <li><Link to="/" onClick={closeMobileMenu}>HOME</Link></li>
                <li><Link to="/shop" onClick={closeMobileMenu}>SHOP</Link></li>
                <li><Link to="/about" onClick={closeMobileMenu}>ABOUT US</Link></li>
                <li><Link to="/blog" onClick={closeMobileMenu}>BLOG</Link></li>
                <li><Link to="/contact" onClick={closeMobileMenu}>CONTACT</Link></li>
              </ul>
              <div className="mobile-menu-footer">
                <p>RR MasterKey Motors</p>
                <span>Importing Excellence</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
