import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-background">
        <img src="/hero-banner-new.webp" alt="Driving Experience" className="hero-img" />
        <div className="hero-overlay"></div>
      </div>
      
      <div className="container hero-content">


        <motion.div 
          className="hero-text-wrapper modern-left"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >

          <div className="hero-actions modern-left">
            <Link to="/shop" className="modern-btn-pill">
              EXPLORE NOW
              <span className="btn-circle-arrow">
                <ArrowRight size={18} />
              </span>
            </Link>
            <Link to="/about" className="modern-btn-text">
              OUR STORY
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
