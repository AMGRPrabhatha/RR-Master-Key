import React from 'react';
import { motion } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import './Extras.css';

export const FeaturedBrands = () => {
  const brands = [
    { name: 'Jaguar', logo: 'JAGUAR' },
    { name: 'Land Rover', logo: 'LAND ROVER' },
    { name: 'Toyota', logo: 'TOYOTA' },
    { name: 'Nissan', logo: 'NISSAN' },
    { name: 'Honda', logo: 'HONDA' },
    { name: 'Mercedes', logo: 'MERCEDES-BENZ' },
    { name: 'BMW', logo: 'BMW' },
    { name: 'Audi', logo: 'AUDI' },
    { name: 'Lexus', logo: 'LEXUS' },
    { name: 'Mitsubishi', logo: 'MITSUBISHI' },
  ];

  const marqueeItems = [...brands, ...brands];

  return (
    <section className="featured-brands section-padding">
      <div className="brand-marquee-container">
        <div className="brand-ticker">
          {marqueeItems.map((brand, index) => (
            <div className="brand-item" key={index}>
              {brand.logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  
  const testimonials = [
    {
      name: "Saman Perera",
      role: "Business Owner",
      text: "The import process was surprisingly smooth. RR MasterKey handled everything from the auction in Japan to the delivery in Colombo. My Land Cruiser arrived in pristine condition.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100"
    },
    {
      name: "Anjali de Silva",
      role: "Luxury Car Enthusiast",
      text: "I was looking for a specific Jaguar F-PACE configuration. The team at MasterKey found the exact model and handled the inspection with extreme detail. Highly recommended!",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100"
    },
    {
      name: "Nuwan Gunawardena",
      role: "Verified Buyer",
      text: "Professionalism at its best. Transparency throughout the auction process was what impressed me most. I knew exactly what I was paying for every step of the way.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="testimonials section-padding">
      <div className="container">
        <div className="section-intro">
          <span className="section-badge">Testimonials</span>
          <h2 className="section-title">What Our Clients Say</h2>
        </div>
        
        {/* Mobile Slider View */}
        <div className="testimonial-slider-mobile">
          <div className="slider-content">
            <motion.div 
              className="testimonial-card"
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
            >
              <div className="stars">★★★★★</div>
              <p className="testimonial-text">"{testimonials[currentIndex].text}"</p>
              <div className="customer-info">
                <img src={testimonials[currentIndex].avatar} alt={testimonials[currentIndex].name} className="customer-avatar" />
                <div>
                  <h4>{testimonials[currentIndex].name}</h4>
                  <p>{testimonials[currentIndex].role}</p>
                </div>
              </div>
            </motion.div>
          </div>
          
          <div className="slider-controls">
            <button className="slider-btn" onClick={prevTestimonial} aria-label="Previous testimonial">
              <ChevronLeft size={24} />
            </button>
            <div className="slider-dots">
              {testimonials.map((_, i) => (
                <div 
                  key={i} 
                  className={`dot ${i === currentIndex ? 'active' : ''}`}
                  onClick={() => setCurrentIndex(i)}
                />
              ))}
            </div>
            <button className="slider-btn" onClick={nextTestimonial} aria-label="Next testimonial">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Desktop Grid View */}
        <div className="testimonial-grid-desktop">
          {testimonials.map((t, index) => (
            <motion.div 
              className="testimonial-card" 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="stars">★★★★★</div>
              <p className="testimonial-text">"{t.text}"</p>
              <div className="customer-info">
                <img src={t.avatar} alt={t.name} className="customer-avatar" />
                <div>
                  <h4>{t.name}</h4>
                  <p>{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const ArticlesGallery = () => {
  return (
    <section className="articles-gallery section-padding">
      <div className="container">
        <div className="gallery-header">
          <span className="section-badge" style={{ color: 'rgba(255,255,255,0.6)' }}>Visual Excellence</span>
          <h2 className="section-title">Captured Elegance</h2>
        </div>
        
        <div className="gallery-grid">
          <div className="gallery-item large">
            <img src="/hero-new.png" alt="Gallery Large" />
          </div>
          <div className="gallery-item">
            <img src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800" alt="Gallery Small 1" />
          </div>
          <div className="gallery-item">
            <img src="https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&q=80&w=800" alt="Gallery Small 2" />
          </div>
        </div>
      </div>
    </section>
  );
};
