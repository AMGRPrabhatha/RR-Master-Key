import React from 'react';
import './IntroductionSection.css';

const IntroductionSection = () => {
  return (
    <section className="intro-section-v2">
      <div className="container">
        
        {/* Header Section */}
        <div className="intro-header-v2">
          <h2 className="intro-title-v2">
            WHAT YOU CAN'T FIND AT YOUR<br/>
            LOCAL DEALER, CAN BE FOUND HERE ☻
          </h2>
          <div className="intro-subtitle-v2">
            Premium Imports In The <span className="black-badge">World</span> ↴
          </div>
        </div>

        {/* Cards Section */}
        <div className="intro-cards-grid">
          <div className="intro-card grayscale-card">
            <img src="/cars/honda_civic.png" alt="JDM Sports" />
            <div className="card-badge">TOKYO, JAPAN</div>
            <h3 className="card-title">JDM SPORTS<br/>CLASSICS</h3>
            <div className="card-overlay"></div>
          </div>
          
          <div className="intro-card color-card">
            <img src="/cars/land_cruiser_300.png" alt="Luxury SUVs" />
            <div className="card-badge">NAGOYA, JAPAN</div>
            <h3 className="card-title">LUXURY<br/>SUVs</h3>
            <div className="card-overlay"></div>
          </div>

          <div className="intro-card grayscale-card">
            <img src="/cars/mercedes_s_class.png" alt="Premium Sedans" />
            <div className="card-badge">YOKOHAMA, JAPAN</div>
            <h3 className="card-title">PREMIUM<br/>SEDANS</h3>
            <div className="card-overlay"></div>
          </div>
        </div>

        {/* Footer Section */}
        <div className="intro-footer-v2">
          <div className="intro-footer-left">
            <p>
              Dive Into Exciting Journeys As RR MasterKey Opens Doors To Premium Vehicles, Whether It's High-Performance JDM Legends Or Exploring Luxury SUVs.
            </p>
            <a href="/shop" className="btn-black-pill">
              SEE ALL VEHICLES <span className="arrow-circle">↗</span>
            </a>
          </div>
          
          <div className="intro-footer-right">
            <div className="stat-block-v2">
              <span className="stat-label">Vehicles Imported</span>
              <span className="stat-value">3022+</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-block-v2">
              <span className="stat-label">Happy Clients</span>
              <span className="stat-value">1226+</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default IntroductionSection;
