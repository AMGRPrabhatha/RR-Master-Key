import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Globe, Award, ChevronDown, ChevronLeft, ChevronRight, Headphones } from 'lucide-react';
import FAQSection from '../components/FAQSection';
import './About.css'; 

const About = () => {
  return (
    <div className="about-page">
      <div className="about-hero-modern">
        <img src="/about-image.jpg" alt="Modern Luxury Car Showroom" className="modern-hero-bg" />
        <div className="page-header">
          <div className="container">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              style={{ color: '#fff' }}
            >
              ABOUT RR MASTERKEY
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{ color: '#ddd', maxWidth: '800px', margin: '0 auto', fontSize: 'clamp(0.95rem, 3vw, 1.2rem)', lineHeight: '1.6' }}
            >
              Discover the pinnacle of automotive engineering seamlessly imported to Sri Lanka.
            </motion.p>
          </div>
        </div>
      </div>

      <div className="about-content-wrapper">
        {/* New About Intro Section matching Screenshot 1 */}
        <div className="about-intro-section">
          <div className="about-intro-header">
            <span className="established-label">ESTABLISHED 2010</span>
            <h2 className="about-intro-title">About <span>RR MasterKey</span></h2>
          </div>
          <div className="about-intro-content">
            <p className="intro-lead">
              RR MasterKey is an innovative vehicle import company, led by dynamic and diverse professionals with decades of cumulative global experience in the automotive industry.
            </p>
            <p>
              Founded in March 2010 in Sri Lanka, we specialize in delivering customized, turnkey luxury vehicle import solutions to enthusiasts, high-growth startups, and large-scale corporate partners.
            </p>
            <p>
              Sourcing the finest JDM and European vehicles represents the pinnacle of our technical evolution, abandoning traditional dealership constraints. Over the past decade, global demand has shifted toward premium imports, smooth logistics, and precise, structural transparency. RR MasterKey continues to invest heavily in our supply chain to stand as a premier turnkey import solution provider.
            </p>
          </div>
          
          <div className="about-intro-cards">
            <div className="intro-card">
              <img src="/cars/land_cruiser_300.png" alt="Process 01" />
              <div className="intro-card-badge">01</div>
            </div>
            <div className="intro-card">
              <img src="/cars/mercedes_s_class.png" alt="Process 02" />
              <div className="intro-card-badge">02</div>
            </div>
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
            <img src="/cars/land_cruiser_300.png" alt="Luxury SUV" />
            <img src="/cars/mercedes_g_class.png" alt="Premium Offroader" />
            <img src="/cars/honda_civic.png" alt="JDM Sports" />
          </div>
        </div>

        {/* New Achievements Section matching Screenshot 2 */}
        <div className="achievements-section">
          <div className="achievements-divider">
            <div className="divider-line"></div>
            <span className="divider-badge">Our Achievements</span>
            <div className="divider-line"></div>
          </div>

          <div className="achievements-grid">
            <div className="achievement-card">
              <h3>100%</h3>
              <p>client satisfaction rate</p>
            </div>
            <div className="achievement-card">
              <h3>500+</h3>
              <p>vehicles imported</p>
            </div>
            <div className="achievement-card">
              <h3>120+</h3>
              <p>expert japanese partners</p>
            </div>
            <div className="achievement-card">
              <h3>10+</h3>
              <p>years of experience</p>
            </div>
          </div>
        </div>

        <FAQSection />

      </div>
    </div>
  );
};

export default About;
