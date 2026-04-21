import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Globe, Award, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import './About.css'; 

const About = () => {
  return (
    <div className="about-page">
      <div className="about-hero-modern section-padding">
        <div className="container">
          <div className="modern-hero-grid">
            <div className="hero-text-content">
              <motion.h1 
                className="solid-title"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                ELEVATING YOUR<br /><span className="outline-title">DRIVING EXPERIENCE</span>
              </motion.h1>
              <motion.p 
                className="hero-desc-text"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Discover the pinnacle of automotive engineering seamlessly imported to Sri Lanka. From luxury sedans to powerful SUVs, our curated selection redefines what you expect from a premium vehicle dealership. We bring you the very best of Japanese automotives, carefully selected for style, performance, and unmatched quality.
              </motion.p>
            </div>
            
            <motion.div 
              className="modern-hero-image-wrapper"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <img src="/about-hero-modern.png" alt="Modern Luxury Car Showroom" className="modern-hero-img" />
              <div className="image-accent-glow"></div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="about-content-wrapper">
        <div className="about-grid">
          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2>Our Story</h2>
            <p>
              At <strong>RR MasterKey Motors</strong>, we pride ourselves on being the premier gateway for importing the finest vehicles directly from Japan to Sri Lanka. We understand that a vehicle is more than just transportation; it's a statement of style, engineering, and reliability.
            </p>
            <p>
              With over a decade of experience, we specialize in ensuring seamless importation of top-tier models, ranging from the rugged Toyota Land Cruiser to luxury Range Rovers and Jaguars. Our unwavering commitment to transparency, quality, and complete customer satisfaction makes us an unbeatable choice in the imported vehicle market.
            </p>
          </motion.div>
          <motion.div 
            className="about-image"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <img src="/feature-car.png" alt="Premium Japanese imported car" />
          </motion.div>
        </div>

        <motion.div 
          className="stats-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="stat-item">
            <div className="stat-num">10+</div>
            <div className="stat-label">Years Experience</div>
          </div>
          <div className="stat-item">
            <div className="stat-num">500+</div>
            <div className="stat-label">Vehicles Imported</div>
          </div>
          <div className="stat-item">
            <div className="stat-num">100%</div>
            <div className="stat-label">Client Satisfaction</div>
          </div>
          <div className="stat-item">
            <div className="stat-num">24/7</div>
            <div className="stat-label">Support</div>
          </div>
        </motion.div>

        <div className="values-section">
          <h2>Why Choose Us</h2>
          <div className="values-grid">
            <motion.div 
              className="value-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="value-icon"><ShieldCheck size={32} /></div>
              <h3>Guaranteed Quality</h3>
              <p>Every vehicle undergoes strict multi-point inspections before export and upon arrival.</p>
            </motion.div>
            
            <motion.div 
              className="value-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="value-icon"><Globe size={32} /></div>
              <h3>Direct from Japan</h3>
              <p>We secure the best-grade vehicles straight from Japanese actions without middlemen.</p>
            </motion.div>

            <motion.div 
              className="value-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="value-icon"><Award size={32} /></div>
              <h3>Premium Execution</h3>
              <p>We specialize in bringing you the pinnacle of luxury, handling end-to-end logistics flawlessly.</p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
