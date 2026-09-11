import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import './TrendingBrandsSection.css';

const TrendingBrandsSection = () => {
  return (
    <section className="trending-brands-section">
      <div className="container">
        
        <div className="tb-header-container">
          <h2 className="tb-title">Exploring best selling<br/>cars makes</h2>
          <p className="tb-desc">
            Corporate entities should engage in strategic initiatives to boost brand 
            visibility and connect with their audiences. This includes digital marketing, 
            community outreach, and innovative partnerships that reflect their values.
          </p>
        </div>
      </div>
        
      <div className="tb-grid">
          {/* Top Row: 2 items */}
          <div className="tb-item tb-large">
            <img src="https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=1200" alt="BMW" />
            <div className="tb-overlay"></div>
            <div className="tb-content">
              <div className="tb-content-left">
                <div className="tb-logo-mock">B</div>
                <div className="tb-text-group">
                  <h3>BMW</h3>
                  <span>from $50K</span>
                </div>
              </div>
              <ArrowUpRight className="tb-arrow" size={20} />
            </div>
          </div>
          
          <div className="tb-item tb-large">
            <img src="/cars/land_cruiser_300.png" alt="Toyota" />
            <div className="tb-overlay"></div>
            <div className="tb-content">
              <div className="tb-content-left">
                <div className="tb-logo-mock" style={{backgroundColor: '#e32b2b'}}>T</div>
                <div className="tb-text-group">
                  <h3>Toyota</h3>
                  <span>from $50K</span>
                </div>
              </div>
              <ArrowUpRight className="tb-arrow" size={20} />
            </div>
          </div>

          {/* Bottom Row: 3 items */}
          <div className="tb-item tb-small">
            <img src="/cars/mercedes_s_class.png" alt="Mercedes-Benz" />
            <div className="tb-overlay"></div>
            <div className="tb-content">
              <div className="tb-content-left">
                <div className="tb-logo-mock" style={{backgroundColor: '#333'}}>M</div>
                <div className="tb-text-group">
                  <h3>Mercedes - Benz</h3>
                  <span>from $40K</span>
                </div>
              </div>
              <ArrowUpRight className="tb-arrow" size={20} />
            </div>
          </div>
          
          <div className="tb-item tb-small">
            <img src="/cars/mercedes_g_class.png" alt="Lexus" />
            <div className="tb-overlay"></div>
            <div className="tb-content">
              <div className="tb-content-left">
                <div className="tb-logo-mock" style={{backgroundColor: '#111'}}>L</div>
                <div className="tb-text-group">
                  <h3>Lexus</h3>
                  <span>from $50K</span>
                </div>
              </div>
              <ArrowUpRight className="tb-arrow" size={20} />
            </div>
          </div>
          
          <div className="tb-item tb-small">
            <img src="/cars/ford_f150.png" alt="Ford" />
            <div className="tb-overlay"></div>
            <div className="tb-content">
              <div className="tb-content-left">
                <div className="tb-logo-mock" style={{backgroundColor: '#003399'}}>F</div>
                <div className="tb-text-group">
                  <h3>Ford</h3>
                  <span>from $60K</span>
                </div>
              </div>
              <ArrowUpRight className="tb-arrow" size={20} />
            </div>
          </div>
        </div>
    </section>
  );
};

export default TrendingBrandsSection;
