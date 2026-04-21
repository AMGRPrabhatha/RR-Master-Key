import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Wind, Shield, ArrowUpRight, Plus, Clock, Headphones, ChevronLeft, ChevronRight } from 'lucide-react';
import './FeaturesSection.css';

const FeaturesSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [featureIndex, setFeatureIndex] = useState(0);

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

  const nextFeature = () => setFeatureIndex((prev) => (prev + 1) % features.length);
  const prevFeature = () => setFeatureIndex((prev) => (prev - 1 + features.length) % features.length);

  const processSteps = [
    { step: "01", title: "Auction Selection", desc: "We browse over 50,000+ vehicles weekly in Japan's premier auctions to find cars that meet your specific requirements." },
    { step: "02", title: "Physical Inspection", desc: "Our on-ground Japanese team performs a detailed 150-point physical inspection, checking everything from engine health to paint depth." },
    { step: "03", title: "Customs & Shipping", desc: "We handle the entire paperwork, tax, and duty process. Your vehicle is shipped in secure, insured car carriers." },
    { step: "04", title: "Final Delivery", desc: "After a final local detailing, we deliver the car directly to your doorstep in Sri Lanka, ready for the road." }
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

        {/* Mobile Slider View */}
        <div className="features-slider-mobile">
          <div className="slider-content">
            <AnimatePresence mode="wait">
              <motion.div 
                className="modern-feature-card"
                key={featureIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
              >
                <div className="card-icon-wrapper">
                  {features[featureIndex].icon}
                </div>
                <h3>{features[featureIndex].title}</h3>
                <p>{features[featureIndex].desc}</p>
                <div className="card-hover-line" style={{ width: '100%' }}></div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          <div className="slider-controls">
            <button className="slider-btn" onClick={prevFeature} aria-label="Previous feature">
              <ChevronLeft size={24} />
            </button>
            <div className="slider-dots">
              {features.map((_, i) => (
                <div 
                  key={i} 
                  className={`dot ${i === featureIndex ? 'active' : ''}`}
                  onClick={() => setFeatureIndex(i)}
                />
              ))}
            </div>
            <button className="slider-btn" onClick={nextFeature} aria-label="Next feature">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Desktop Grid View */}
        <div className="modern-features-grid desktop-only">
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

            <button className="modern-action-btn" onClick={() => setIsModalOpen(true)}>
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

      {/* Process Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="process-modal-overlay">
            <motion.div 
              className="process-modal"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
            >
              <button className="modal-close-btn" onClick={() => setIsModalOpen(false)} aria-label="Close modal">
                <Plus style={{ transform: 'rotate(45deg)' }} size={24} />
              </button>
              
              <div className="modal-header">
                <span className="modern-badge">How It Works</span>
                <h2>Our Importation Process</h2>
                <p>Transparent, professional, and reliable from Japan to Sri Lanka.</p>
              </div>

              <div className="process-steps-grid">
                {processSteps.map((s, i) => (
                  <div className="process-step-item" key={i}>
                    <div className="step-number">{s.step}</div>
                    <div className="step-content">
                      <h3>{s.title}</h3>
                      <p>{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <button className="modal-cta-btn" onClick={() => setIsModalOpen(false)}>
                Got It, Thanks!
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default FeaturesSection;
