import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Globe, Award, ChevronDown, ChevronLeft, ChevronRight, Headphones } from 'lucide-react';
import FAQSection from '../components/FAQSection';
import './About.css'; 

const About = () => {
  return (
    <div className="about-page">
      <div className="about-hero-modern">
        <img src="/about-image.webp" alt="Modern Luxury Car Showroom" className="modern-hero-bg" />
        <div className="page-header">
          <div className="container">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Our Story
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Passionate about sourcing and delivering the pinnacle of Japanese automotive engineering to the world.
            </motion.p>
          </div>
        </div>
      </div>

      <div className="about-content-wrapper">
        <div className="story-section-v2">
          <div className="story-left-col">
            <span className="story-label">Experience Imports, Reimagined</span>
          </div>
          <div className="story-mid-col">
            <h2 className="story-main-text">
              <span className="text-dark">Tired of standard dealerships? At RR MasterKey Motors, we specialize in sourcing unique, premium Japanese imports that go beyond the ordinary.</span>
              <span className="text-light"> We handle the logistics so you can immerse yourself in the driving experience, the luxury, and the moment.</span>
            </h2>
            <a href="/shop" className="story-btn">More About Us</a>
          </div>
          <div className="story-right-col">
            <img src="/feature-car.webp" alt="RR MasterKey Story" />
          </div>
        </div>

        <div className="stats-pill-v2">
          <div className="stat-item-v2">
            <h3>100%</h3>
            <p>Client Satisfaction Rate</p>
          </div>
          <div className="stat-item-v2">
            <h3>500+</h3>
            <p>Vehicles Imported</p>
          </div>
          <div className="stat-item-v2">
            <h3>120+</h3>
            <p>Expert Japanese Partners</p>
          </div>
          <div className="stat-item-v2">
            <h3>10+</h3>
            <p>Years of Experience</p>
          </div>
        </div>

        <div className="who-we-are-section">
          <div className="wwa-badge-container">
            <span className="wwa-badge">• Who we are?</span>
          </div>
          
          <h2 className="wwa-main-text">
            <span className="text-gray">We're a group of automotive professionals, direct importers, </span>
            <span className="text-black">and luxury vehicle specialists working </span>
            <span className="text-gray">together to deliver vehicles that matter. </span>
            <span className="text-black">From the first inquiry to the final handover, we take care of the details </span>
            <span className="text-gray">so your import process feels effortless and personal.</span>
          </h2>

          <div className="wwa-images">
            <img src="/cars/land_cruiser_300.webp" alt="Luxury SUV" />
            <img src="/cars/mercedes_g_class.webp" alt="Premium Offroader" />
            <img src="/cars/honda_civic.webp" alt="JDM Sports" />
          </div>
        </div>

        <FAQSection />

      </div>
    </div>
  );
};

export default About;
