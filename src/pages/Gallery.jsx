import React from 'react';
import { motion } from 'framer-motion';
import './Gallery.css';
import '../components/HeroSection.css'; // For button styles if needed
import './Shop.css'; // For .modern-page-hero styles

const Gallery = () => {
  // Placeholder images for the gallery
  const placeholderImages = [
    '/cars/land_cruiser_300.png',
    '/cars/mercedes_g_class.png',
    '/cars/mercedes_s_class.png',
    '/cars/honda_civic.png',
    '/cars/bmw_x7.png',
    '/cars/land_cruiser_300.png' 
  ];

  return (
    <div className="gallery-page">
      {/* Hero Section */}
      <div className="modern-page-hero">
        <img src="/contact-hero.png" alt="Gallery Hero" className="modern-hero-bg" />
        <div className="page-header">
          <div className="container">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              style={{ color: '#fff' }}
            >
              Gallery
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{ color: '#ddd' }}
            >
              Take a look at some of the premium imports we've delivered.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Gallery Grid Section */}
      <div className="gallery-section-wrapper">
        <div className="container">
          <div className="gallery-grid">
            {placeholderImages.map((src, index) => (
              <motion.div 
                className="gallery-item"
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <img src={src} alt={`Gallery vehicle ${index + 1}`} />
                <div className="gallery-item-overlay">
                  <span>View Image</span>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="gallery-upload-notice">
            <p>More images coming soon...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
