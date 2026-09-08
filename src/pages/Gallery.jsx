import React from 'react';
import { motion } from 'framer-motion';
import './Gallery.css';
import '../components/HeroSection.css'; // For button styles if needed
import './Shop.css'; // For .modern-page-hero styles

const Gallery = () => {
  // Placeholder images for the gallery
  const placeholderImages = [
    '/gallery/1.jpg',
    '/gallery/2.jpg',
    '/gallery/3.jpg',
    '/gallery/4.jpg',
    '/gallery/5.jpg',
    '/gallery/6.jpg',
    '/gallery/7.jpg',
    '/gallery/8.jpg'
  ];

  return (
    <div className="gallery-page">
      {/* Hero Section */}
      <div className="modern-page-hero">
        <img src="/gallery-image.jpg" alt="Gallery Hero" className="modern-hero-bg" />
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
