import React from 'react';
import Hero from '../components/Hero';
import FoodCards from '../components/FoodCards';
import About from './About';
import Contact from './Contact';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <FoodCards />
      <About />
      <Contact />
    </div>
  );
};

export default Home;