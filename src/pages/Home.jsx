import React from 'react';
import HeroSection from '../components/HeroSection';
import IntroductionSection from '../components/IntroductionSection';
import PopularVehiclesSection from '../components/PopularVehiclesSection';
import TrendingBrandsSection from '../components/TrendingBrandsSection';

const Home = () => {
  return (
    <>
      <HeroSection />
      <IntroductionSection />
      <PopularVehiclesSection />
      <TrendingBrandsSection />
    </>
  );
};

export default Home;
