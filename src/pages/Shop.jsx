import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Plus, Filter, X, Search } from 'lucide-react';
import '../components/BestsellerSection.css'; // Reusing bestseller grid CSS
import './Shop.css';

const Shop = () => {
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedBodyStyles, setSelectedBodyStyles] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

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
    
    // Honda Updates
    { name: 'Honda Vezel Z Premium', model: '2026 e:HEV Premium', img: '/cars/Honda Vezel Z.jpg', brand: 'Honda', bodyStyle: 'SUV' },
    { name: 'Honda Vezel X', model: '2026 e:HEV X Package', img: '/cars/Honda Vezel X.jpg', brand: 'Honda', bodyStyle: 'SUV' },
    { name: 'Honda Vezel RS', model: '2026 e:HEV RS Sport', img: '/cars/Honda Vezel RS.jpg', brand: 'Honda', bodyStyle: 'SUV' },
    { name: 'Honda Vezel Z Play', model: '2026 Active Package', img: '', brand: 'Honda', bodyStyle: 'SUV' },
    { name: 'Honda Vezel RX Premium', model: '2026 Luxury Sport', img: '/cars/Honda Vezel RX Premium.jpg', brand: 'Honda', bodyStyle: 'SUV' },
    { name: 'Honda Fit RS', model: '2026 Sport Package', img: '/cars/Honda Fit RS.jpg', brand: 'Honda', bodyStyle: 'Hatchback' },
    { name: 'Honda ZRV', model: '2026 Compact SUV', img: '/cars/Honda ZRV.jpg', brand: 'Honda', bodyStyle: 'SUV' },
    { name: 'Honda CRV', model: '2026 Hybrid SUV', img: '/cars/Honda CRV.jpg', brand: 'Honda', bodyStyle: 'SUV' },
    
    // Suzuki Updates
    { name: 'Wagon R FX 2025', model: '2025 Hybrid White', img: '/cars/Suzuki Wagon R FX.jpg', brand: 'Suzuki', bodyStyle: 'Hatchback' },
    { name: 'Wagon R Custom R', model: '2026 Premium Grade', img: '/cars/Wagon R Custom R.jpeg', brand: 'Suzuki', bodyStyle: 'Hatchback' },
    { name: 'Suzuki Swift R', model: '2026 Sport Hatch', img: '/cars/Suzuki Swift R.jpg', brand: 'Suzuki', bodyStyle: 'Hatchback' },
    { name: 'Suzuki Spacia Custom Z', model: '2026 Micro-Van', img: '/cars/Suzuki Spacia custom z.jpg', brand: 'Suzuki', bodyStyle: 'Hatchback' },
    
    // Toyota Updates
    { name: 'Toyota Raize Hybrid', model: '2026 Eco Package', img: '/cars/TOYOTA-RAIZE-Z-GRADE-20207.jpg', brand: 'Toyota', bodyStyle: 'SUV' },
    { name: 'Toyota Yaris Cross X', model: '2026 Hybrid X SUV', img: '/cars/Toyota Yaris Cross x.jpg', brand: 'Toyota', bodyStyle: 'SUV' },
    { name: 'Toyota Yaris Z Advanced', model: '2026 Premium Grade', img: '/cars/Toyota Yaris X .jpg', brand: 'Toyota', bodyStyle: 'Hatchback' },
    { name: 'Toyota Harrier', model: '2026 Luxury SUV', img: '/cars/Toyota Harrier.jpg', brand: 'Toyota', bodyStyle: 'SUV' },
    { name: 'Toyota Corolla', model: '2026 Modern Sedan', img: '/cars/Toyota Corolla.jpg', brand: 'Toyota', bodyStyle: 'Sedan' },
    { name: 'Toyota Corolla Sport', model: '2026 Hot Hatch', img: '/cars/Toyota Corolla Sport.jpg', brand: 'Toyota', bodyStyle: 'Hatchback' },
    { name: 'Toyota Roomy', model: '2026 Compact MPV', img: '/cars/Toyota Roomy.jpeg', brand: 'Toyota', bodyStyle: 'Hatchback' },
    { name: 'Toyota Hilux Cab', model: '2026 Double Cab Pick-up', img: '/cars/Toyota Hilux Cab.jpg', brand: 'Toyota', bodyStyle: 'SUV' },
    { name: 'Toyota Alphard Executive Lounge', model: '2026 Flagship MPV', img: '/cars/Toyota Alphard Executive Lounge.jpg', brand: 'Toyota', bodyStyle: 'SUV' },
    { name: 'Toyota 150 Prado 2023', model: '2023 Classic Edition', img: '/cars/Toyota 150 Prado 2023.jpg', brand: 'Toyota', bodyStyle: 'SUV' },
    { name: 'Toyota Prius 2026', model: '2026 Hybrid Sedan', img: '/cars/Toyota Prius 2026.jpg', brand: 'Toyota', bodyStyle: 'Sedan' },
    { name: 'Toyota Crown', model: '2026 Luxury Crossover', img: '/cars/Toyota Crown.jpg', brand: 'Toyota', bodyStyle: 'Sedan' },
    { name: 'Toyota RAV4 Jeep', model: '2026 All-wheel Drive', img: '/cars/Toyota RAV4 Jeep.jpg', brand: 'Toyota', bodyStyle: 'SUV' },
    { name: 'Toyota Aqua', model: '2026 Hybrid Compact', img: '/cars/Toyota Aqua.jpg', brand: 'Toyota', bodyStyle: 'Hatchback' },
    { name: 'Toyota Voxy', model: '2026 Luxury MPV', img: '/cars/Toyota Voxy.jpeg', brand: 'Toyota', bodyStyle: 'SUV' },
    { name: 'Toyota Noah', model: '2026 Family MPV', img: '/cars/Toyota Noah.jpg', brand: 'Toyota', bodyStyle: 'SUV' },
    { name: 'Toyota Vellfire Executive Lounge', model: '2026 Luxury Flagship', img: '/cars/Toyota Vellfire Executive Lounge.jpg', brand: 'Toyota', bodyStyle: 'SUV' },
    
    // BMW Updates
    { name: 'BMW X1', model: '2026 Compact SUV', img: '/cars/BMW X1.png', brand: 'BMW', bodyStyle: 'SUV' },
    { name: 'BMW X3', model: '2026 Luxury SUV', img: '/cars/BMW X3.jpg', brand: 'BMW', bodyStyle: 'SUV' },
    { name: 'BMW X5', model: '2026 Flagship SUV', img: '/cars/BMW X5 Jeep.jpg', brand: 'BMW', bodyStyle: 'SUV' },
    { name: 'BMW 2 Series', model: '2026 Sport Sedan', img: '/cars/BMW 2 Series.jpg', brand: 'BMW', bodyStyle: 'Sedan' },
    { name: 'BMW 220', model: '2026 Compact Sedan', img: '/cars/BMW 220.jpg', brand: 'BMW', bodyStyle: 'Sedan' },
    { name: 'BMW 3 Series', model: '2026 Executive Sedan', img: '/cars/BMW 3 Series.jpg', brand: 'BMW', bodyStyle: 'Sedan' },
    { name: 'BMW 5 Series', model: '2026 Luxury Sedan', img: '/cars/BMW 5 Series.jpg', brand: 'BMW', bodyStyle: 'Sedan' },
    { name: 'BMW 740i', model: '2026 Flagship Sedan', img: '/cars/BMW 740i.jpg', brand: 'BMW', bodyStyle: 'Sedan' },
    
    // Audi Updates
    { name: 'Audi Q3', model: '2026 Compact SUV', img: '/cars/Audi Q3.jpg', brand: 'Audi', bodyStyle: 'SUV' },
    { name: 'Audi Q7', model: '2026 Full-size SUV', img: '/cars/Audi Q7.jpg', brand: 'Audi', bodyStyle: 'SUV' },
    { name: 'Audi A5', model: '2026 Sportback', img: '/cars/Audi A5.jpg', brand: 'Audi', bodyStyle: 'Sedan' },
    { name: 'Audi A6', model: '2026 Executive Sedan', img: '/cars/Audi A6.jpg', brand: 'Audi', bodyStyle: 'Sedan' },
    { name: 'Audi A7', model: '2026 Luxury Sportback', img: '/cars/Audi A7.jpg', brand: 'Audi', bodyStyle: 'Sedan' },
    { name: 'Audi A8', model: '2026 Flagship Sedan', img: '/cars/Audi A8.jpg', brand: 'Audi', bodyStyle: 'Sedan' },
    
    // Mercedes Updates
    { name: 'Mercedes 350Geep', model: '2026 Luxury SUV', img: '/cars/Mercedes 350Geep.jpg', brand: 'Mercedes-Benz', bodyStyle: 'SUV' },
    { name: 'Mercedes GLS 450', model: '2026 Flagship SUV', img: '/cars/Mercedes GLS 450 Geep.jpg', brand: 'Mercedes-Benz', bodyStyle: 'SUV' },
    { name: 'Mercedes C200', model: '2026 Sport Sedan', img: '/cars/Mercedes C200.jpg', brand: 'Mercedes-Benz', bodyStyle: 'Sedan' },
    { name: 'Mercedes E350', model: '2026 Executive Sedan', img: '/cars/Mercedes E350.jpg', brand: 'Mercedes-Benz', bodyStyle: 'Sedan' },
    { name: 'Mercedes E 200', model: '2026 Luxury Sedan', img: '', brand: 'Mercedes-Benz', bodyStyle: 'Sedan' },
    { name: 'Mercedes S Class All New', model: '2026 Flagship Luxury', img: '', brand: 'Mercedes-Benz', bodyStyle: 'Sedan' },
    { name: 'Mercedes AMG G600', model: '2026 Performance Off-roader', img: '', brand: 'Mercedes-Benz', bodyStyle: 'SUV' },
    
    // Others
    { name: 'Nissan GTR', model: '2026 Supercar', img: '', brand: 'Nissan', bodyStyle: 'Coupe' },
    { name: 'Range Rover LWB Auto', model: '2026 Long Wheelbase', img: '', brand: 'Land Rover', bodyStyle: 'SUV' },
    { name: 'Ford Cab', model: '2026 Double Cab Pick-up', img: '', brand: 'Ford', bodyStyle: 'SUV' },
    { name: 'Lexus ES', model: '2026 Luxury Sedan', img: '', brand: 'Lexus', bodyStyle: 'Sedan' },
    { name: 'Lexus LS', model: '2026 Flagship Sedan', img: '', brand: 'Lexus', bodyStyle: 'Sedan' },
    { name: 'Italian Luxury Sport', model: '2026 Performance Exotic', img: '', brand: 'Other', bodyStyle: 'Coupe' },
    { name: 'Mitsubishi Outlander', model: '2026 Hybrid SUV', img: '', brand: 'Mitsubishi', bodyStyle: 'SUV' },
    { name: 'Volkswagen Polo', model: '2026 Compact Hatch', img: '', brand: 'Volkswagen', bodyStyle: 'Hatchback' },
    { name: 'Volkswagen Golf', model: '2026 Performance Hatch', img: '', brand: 'Volkswagen', bodyStyle: 'Hatchback' },
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
      const searchMatch = car.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                        car.model.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        car.brand.toLowerCase().includes(searchQuery.toLowerCase());
      return brandMatch && styleMatch && searchMatch;
    });
  }, [selectedBrands, selectedBodyStyles, searchQuery]);

  const brands = ['Toyota', 'Land Rover', 'Jaguar', 'Nissan', 'Mercedes-Benz', 'BMW', 'Lexus', 'Audi', 'Honda', 'Mitsubishi', 'Suzuki', 'Ford', 'Volkswagen', 'Other'];
  const bodyStyles = ['SUV', 'Sedan', 'Coupe', 'Hatchback'];

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
            <div className="search-bar-container">
              <Search size={18} className="search-icon" />
              <input 
                type="text" 
                placeholder="Search by model, brand or name..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="shop-search-input"
              />
            </div>
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
