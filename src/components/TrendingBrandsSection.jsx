import React from 'react';
import './TrendingBrandsSection.css';

const TrendingBrandsSection = () => {
  return (
    <section className="trending-brands-section">
      <div className="container">
        <h2 className="tb-title">Trending Brands</h2>
        
        <div className="tb-grid">
          {/* Top Row: 2 items */}
          <div className="tb-item tb-large">
            <img src="/cars/land_cruiser_300.png" alt="Toyota" />
            <div className="tb-overlay"></div>
            <div className="tb-label">
              <span>Toyota</span> <span className="tb-flag">🇯🇵</span>
            </div>
          </div>
          
          <div className="tb-item tb-large">
            <img src="/cars/mercedes_g_class.png" alt="Mercedes-Benz" />
            <div className="tb-overlay"></div>
            <div className="tb-label">
              <span>Mercedes-Benz</span> <span className="tb-flag">🇩🇪</span>
            </div>
          </div>

          {/* Bottom Row: 3 items */}
          <div className="tb-item tb-small">
            <img src="/cars/honda_civic.png" alt="Honda" />
            <div className="tb-overlay"></div>
            <div className="tb-label">
              <span>Honda</span> <span className="tb-flag">🇯🇵</span>
            </div>
          </div>
          
          <div className="tb-item tb-small">
            <img src="https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=800" alt="BMW" />
            <div className="tb-overlay"></div>
            <div className="tb-label">
              <span>BMW</span> <span className="tb-flag">🇩🇪</span>
            </div>
          </div>
          
          <div className="tb-item tb-small">
            <img src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800" alt="Porsche" />
            <div className="tb-overlay"></div>
            <div className="tb-label">
              <span>Porsche</span> <span className="tb-flag">🇩🇪</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrendingBrandsSection;
