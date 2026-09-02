import React, { useState } from 'react';
import { Heart, MapPin, Calendar, Star } from 'lucide-react';
import './PopularVehiclesSection.css';

const PopularVehiclesSection = () => {
  const [activeTab, setActiveTab] = useState('SUVs');
  
  const tabs = ['SUVs', 'Sedans', 'Hatchbacks', 'Luxury', 'Sports', 'JDM Exclusives'];

  const vehicles = [
    {
      id: 1,
      image: '/cars/land_cruiser_300.png',
      title: 'Toyota Land Cruiser 300',
      location: 'Japan',
      year: '2026 Model',
      rating: '5.0 Rating',
      price: '¥ 12,500,000',
      subPrice: 'Including taxes and freight'
    },
    {
      id: 2,
      image: '/cars/mercedes_g_class.png',
      title: 'Mercedes-Benz G-Class AMG',
      location: 'Japan',
      year: '2026 Model',
      rating: '4.8 Rating',
      price: '¥ 25,000,000',
      subPrice: 'Including taxes and freight'
    },
    {
      id: 3,
      image: '/cars/bmw_x7.png',
      title: 'BMW X7 Luxury Edition',
      location: 'Japan',
      year: '2026 Model',
      rating: '4.9 Rating',
      price: '¥ 18,200,000',
      subPrice: 'Including taxes and freight'
    }
  ];

  return (
    <section className="popular-vehicles-section">
      <div className="container">
        
        <div className="pv-header-container">
          <div className="pv-header-left">
            <span className="pv-badge">• Featured Vehicles</span>
            <h2 className="pv-title">Most selling vehicles</h2>
          </div>
          <div className="pv-header-right">
            <p className="pv-subtitle">
              Explore our most sought-after Japanese imports and take the next step towards your dream vehicle today.
            </p>
          </div>
        </div>

        <div className="pv-tabs">
          {tabs.map(tab => (
            <button 
              key={tab} 
              className={`pv-tab ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="pv-grid">
          {vehicles.map(vehicle => (
            <div key={vehicle.id} className="pv-card">
              <div className="pv-image-container">
                <img src={vehicle.image} alt={vehicle.title} />
                <button className="pv-heart-btn">
                  <Heart size={24} color="white" strokeWidth={1.5} />
                </button>
                <div className="pv-slider-dots">
                  <div className="pv-dot active"></div>
                  <div className="pv-dot"></div>
                  <div className="pv-dot"></div>
                  <div className="pv-dot"></div>
                </div>
              </div>
              
              <div className="pv-card-content">
                <h3 className="pv-card-title">{vehicle.title}</h3>
                
                <div className="pv-meta-row">
                  <div className="pv-meta-item">
                    <MapPin size={16} />
                    <span>{vehicle.location}</span>
                  </div>
                  <div className="pv-meta-item">
                    <Calendar size={16} />
                    <span>{vehicle.year}</span>
                  </div>
                  <div className="pv-meta-item">
                    <Star size={16} />
                    <span>{vehicle.rating}</span>
                  </div>
                </div>
                
                <div className="pv-footer-row" style={{ justifyContent: 'flex-start' }}>
                  <button className="pv-view-btn" style={{ width: '100%', marginTop: '10px' }}>View Details</button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PopularVehiclesSection;
