import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Plus } from 'lucide-react';
import './BestsellerSection.css';

const BestsellerSection = () => {
  const cars = [
    { name: 'Mercedes-Benz G-Class', model: '2026 Luxury Off-roader', img: '/cars/mercedes_g_class.png' },
    { name: 'Range Rover Sport', model: '2026 Luxury SUV', img: '/cars/range_rover_sport.png' },
    { name: 'Jaguar F-PACE', model: '2026 Performance SUV', img: '/cars/jaguar_f_pace.png' },
    { name: 'Toyota Land Cruiser 300', model: '2026 Full-size SUV', img: '/cars/land_cruiser_300.png' },
    { name: 'Land Rover Defender 110', model: '2026 Off-road SUV', img: '/cars/defender_110.png' },
    { name: 'BMW X7', model: '2026 Luxury SUV', img: '/cars/bmw_x7.png' },
  ];

  return (
    <section className="bestseller-section section-padding">
      <div className="container">
        <motion.div 
          className="bestseller-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="top-speed-stat">
            <span className="stat-number">250<span className="plus">+</span></span>
            <span className="stat-label">Top speed (km/h)</span>
          </div>
          
          <h2 className="section-title text-center">Our Bestseller Product</h2>
        </motion.div>

        <div className="car-grid">
          {cars.map((car, index) => (
            <motion.div 
              className="car-card" 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <button className="favorite-btn"><Heart size={16} /></button>
              
              <div className="car-image-container">
                <img src={car.img} alt={car.name} className="car-img" />
              </div>
              
              <div className="car-details">
                <div className="car-title-row">
                  <div>
                    <h3 className="car-name">{car.name}</h3>
                    <p className="car-model">{car.model}</p>
                  </div>
                </div>
                
                <div className="car-price-row" style={{ justifyContent: 'flex-start', marginTop: '0.5rem' }}>
                  <button className="add-to-cart-btn">
                    INQUIRE <Plus size={14} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestsellerSection;
