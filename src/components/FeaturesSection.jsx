import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Wind, Shield, ArrowUpRight, Plus, Clock, Headphones } from 'lucide-react';
import './FeaturesSection.css';

const FeaturesSection = () => {
  const features = [
    {
      icon: <Shield size={28} />,
      title: "Certified Quality",
      desc: "Every vehicle undergoes a rigorous 150-point inspection and independent Japanese certification (JEVIC/QISJ)."
    },
    {
      icon: <Wind size={28} />,
      title: "Fast Importation",
      desc: "Our streamlined logistics network ensures your vehicle reaches Colombo from Tokyo in record time."
    },
    {
      icon: <ArrowUpRight size={28} />,
      title: "Auction Access",
      desc: "Get exclusive access to top-tier Japanese car auctions and save significantly on middleman costs."
    },
    {
      icon: <Clock size={28} />,
      title: "24/7 Tracking",
      desc: "Stay updated with real-time tracking of your vehicle's journey from the auction house to your doorstep."
    }
  ];

  return (
    <section className="features-section-modern section-padding">
      <div className="container">
        <div className="features-header">
          <motion.span 
            className="modern-badge"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            Our Expertise
          </motion.span>
          <h2 className="modern-section-title">The MasterKey Difference</h2>
          <p className="modern-section-subtitle">We don't just import cars; we deliver dreams with uncompromising standards.</p>
        </div>

        <div className="modern-features-grid">
          {features.map((f, i) => (
            <motion.div 
              className="modern-feature-card"
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="card-icon-wrapper">
                {f.icon}
              </div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
              <div className="card-hover-line"></div>
            </motion.div>
          ))}
        </div>

        <div className="excellence-showcase">
          <div className="excellence-content">
            <span className="accent-text">Unmatched Standards</span>
            <h2>Excellence in Every Detail</h2>
            <p>Our team in Japan handpicks each vehicle, ensuring that only the finest examples of Japanese craftsmanship make it to our showroom.</p>
            
            <div className="excellence-check-grid">
              <div className="check-item">
                <div className="check-circle"><Plus size={14} /></div>
                <span>Genuine Mileage</span>
              </div>
              <div className="check-item">
                <div className="check-circle"><Plus size={14} /></div>
                <span>Original Auction Sheets</span>
              </div>
              <div className="check-item">
                <div className="check-circle"><Plus size={14} /></div>
                <span>Door-to-Door Service</span>
              </div>
              <div className="check-item">
                <div className="check-circle"><Plus size={14} /></div>
                <span>Tax & Duty Handling</span>
              </div>
            </div>

            <button className="modern-action-btn">
              Explore Our Process <ArrowUpRight size={18} />
            </button>
          </div>
          
          <div className="excellence-visual">
            <div className="visual-image-wrapper">
              <img src="/cars/land_cruiser_300.png" alt="Land Cruiser 300" />
              <div className="visual-blob"></div>
            </div>
            <div className="visual-stats-card">
              <div className="visual-stat">
                <h4>150+</h4>
                <p>Inspection Points</p>
              </div>
              <div className="visual-divider"></div>
              <div className="visual-stat">
                <h4>100%</h4>
                <p>Genuine Docs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
