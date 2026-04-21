import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-background">
        <img src="/hero.png" alt="Driving Experience" className="hero-img" />
        <div className="hero-overlay"></div>
      </div>
      
      <div className="container hero-content text-center">
        <motion.div 
          className="hero-text-wrapper centered"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="hero-title centered">
            Importing Excellence<br/>
            From Japan to Sri Lanka
          </h1>
          
          <p className="hero-subtitle centered">
            Experience the ultimate driving performance with top-tier vehicles.<br/>
            Jaguar Land Rover, Toyota Raize, and more.
          </p>

          <div className="hero-actions centered">
            <Link to="/shop" className="primary-btn shop-now-btn pill">
              Shop Now <ArrowUpRight size={18} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
