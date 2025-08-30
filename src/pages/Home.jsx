import React from 'react';
import Hero from '../components/Hero';
import FoodCards from '../components/FoodCards';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <FoodCards />
    </div>
  );
};

export default Home;