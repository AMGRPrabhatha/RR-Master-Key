import React from 'react';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import BestsellerSection from '../components/BestsellerSection';
import { FeaturedBrands, Testimonials, ArticlesGallery } from '../components/Extras';

const Home = () => {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <BestsellerSection />
      <FeaturedBrands />
      <Testimonials />
      <ArticlesGallery />
    </>
  );
};

export default Home;
