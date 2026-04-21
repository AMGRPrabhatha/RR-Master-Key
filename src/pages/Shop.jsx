import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Plus, Filter, X } from 'lucide-react';
import '../components/BestsellerSection.css'; // Reusing bestseller grid CSS
import './Shop.css';

const Shop = () => {
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedBodyStyles, setSelectedBodyStyles] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const cars = [
    { name: 'Range Rover Sport', model: '2026 Luxury SUV', img: '/cars/range_rover_sport.png', brand: 'Land Rover', bodyStyle: 'SUV' },
    { name: 'Jaguar F-PACE', model: '2026 Performance SUV', img: '/cars/jaguar_f_pace.png', brand: 'Jaguar', bodyStyle: 'SUV' },
    { name: 'Toyota Land Cruiser 300', model: '2026 Full-size SUV', img: '/cars/land_cruiser_300.png', brand: 'Toyota', bodyStyle: 'SUV' },
    { name: 'Nissan Patrol', model: '2026 Flagship SUV', img: '/cars/nissan_patrol.png', brand: 'Nissan', bodyStyle: 'SUV' },
    { name: 'Land Rover Defender 110', model: '2026 Off-road SUV', img: '/cars/defender_110.png', brand: 'Land Rover', bodyStyle: 'SUV' },
    { name: 'Jaguar I-PACE', model: '2026 Electric SUV', img: '/cars/jaguar_i_pace.png', brand: 'Jaguar', bodyStyle: 'SUV' },
    { name: 'Toyota Century', model: '2026 Ultra-Luxury Sedan', img: '/cars/toyota_century.png', brand: 'Toyota', bodyStyle: 'Sedan' },
    { name: 'Nissan Ariya', model: '2026 Electric Crossover', img: '/cars/nissan_ariya.png', brand: 'Nissan', bodyStyle: 'SUV' },
    { name: 'Mercedes-Benz G-Class', model: '2026 Luxury Off-roader', img: '/cars/mercedes_g_class.png', brand: 'Mercedes-Benz', bodyStyle: 'SUV' },
    { name: 'BMW X7', model: '2026 Luxury SUV', img: '/cars/bmw_x7.png', brand: 'BMW', bodyStyle: 'SUV' },
    { name: 'Lexus LX 600', model: '2026 Flagship SUV', img: '/cars/lexus_lx600.png', brand: 'Lexus', bodyStyle: 'SUV' },
    { name: 'Honda Civic Type R', model: '2026 Sport Hatchback', img: '/cars/honda_civic.png', brand: 'Honda', bodyStyle: 'Coupe' },
    { name: 'Mitsubishi Montero Sport', model: '2026 Adventure SUV', img: '/cars/mitsubishi_montero.png', brand: 'Mitsubishi', bodyStyle: 'SUV' },
    { name: 'Audi Q8', model: '2026 Luxury Coupe SUV', img: '/cars/audi_q8.png', brand: 'Audi', bodyStyle: 'SUV' },
  ];

  const handleBrandChange = (brand) => {
    setSelectedBrands(prev => 
      prev.includes(brand) ? prev.filter(b => b !== brand) : [...prev, brand]
    );
  };

  const handleStyleChange = (style) => {
    setSelectedBodyStyles(prev => 
      prev.includes(style) ? prev.filter(s => s !== style) : [...prev, style]
    );
  };

  const clearFilters = () => {
    setSelectedBrands([]);
    setSelectedBodyStyles([]);
  };

  const filteredCars = useMemo(() => {
    return cars.filter(car => {
      const brandMatch = selectedBrands.length === 0 || selectedBrands.includes(car.brand);
      const styleMatch = selectedBodyStyles.length === 0 || selectedBodyStyles.includes(car.bodyStyle);
      return brandMatch && styleMatch;
    });
  }, [selectedBrands, selectedBodyStyles]);

  const brands = ['Toyota', 'Land Rover', 'Jaguar', 'Nissan', 'Mercedes-Benz', 'BMW', 'Lexus', 'Audi', 'Honda', 'Mitsubishi'];
  const bodyStyles = ['SUV', 'Sedan', 'Coupe'];

  return (
    <div className="page-wrapper shop-page">
      <div className="modern-page-hero">
        <img src="/shop-hero.png" alt="Showroom" className="modern-hero-bg" />
        <div className="page-header">
          <div className="container">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Premium Inventory
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Directly imported excellence from Japan to Sri Lanka.
            </motion.p>
          </div>
        </div>
      </div>

      <div className="container shop-layout">
        <aside className={`shop-sidebar ${isSidebarOpen ? 'active' : ''}`}>
          <div className="filter-block">
            <div className="filter-header-row">
              <h3><Filter size={18} /> Filters</h3>
              <button className="mobile-close-filters" onClick={() => setIsSidebarOpen(false)}>
                <X size={20} />
              </button>
            </div>
            
            <div className="filter-group">
              <h4>Brands</h4>
              {brands.map(brand => (
                <label key={brand}>
                  <input 
                    type="checkbox" 
                    checked={selectedBrands.includes(brand)}
                    onChange={() => handleBrandChange(brand)}
                  /> {brand}
                </label>
              ))}
            </div>

            <div className="filter-group">
              <h4>Body Style</h4>
              {bodyStyles.map(style => (
                <label key={style}>
                  <input 
                    type="checkbox" 
                    checked={selectedBodyStyles.includes(style)}
                    onChange={() => handleStyleChange(style)}
                  /> {style}
                </label>
              ))}
            </div>

            {(selectedBrands.length > 0 || selectedBodyStyles.length > 0) && (
              <button className="clear-filters-btn" onClick={clearFilters}>
                Clear All Filters
              </button>
            )}
          </div>
        </aside>

        {isSidebarOpen && <div className="sidebar-overlay" onClick={() => setIsSidebarOpen(false)} />}

        <main className="shop-grid-container">
          <div className="shop-controls">
            <div className="results-info">
              <span>Showing {filteredCars.length} Vehicles</span>
              <button className="mobile-filter-trigger" onClick={() => setIsSidebarOpen(true)}>
                <Filter size={16} /> Filters
              </button>
            </div>
            <select className="sort-select">
              <option>Sort by: Newest Arrivals</option>
              <option>Sort by: Price (Low to High)</option>
              <option>Sort by: Price (High to Low)</option>
            </select>
          </div>

          <div className="car-grid">
            <AnimatePresence mode="popLayout">
              {filteredCars.map((car, index) => (
                <motion.div 
                  className="car-card" 
                  key={car.name}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
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
            </AnimatePresence>
          </div>
          
          {filteredCars.length === 0 && (
            <div className="no-results">
              <h3>No vehicles match your filters</h3>
              <p>Try selecting different options or clear all filters.</p>
              <button className="clear-filters-btn" onClick={clearFilters}>Clear All Filters</button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Shop;
