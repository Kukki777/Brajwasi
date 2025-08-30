import React from 'react';
import { motion } from 'framer-motion';
import { Award, Heart, Utensils, Shield } from 'lucide-react';

const About = () => {
  const owners = [
    {
      name: "Raj Brajvasi",
      role: "Founder & Head Chef",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
      experience: "25 years",
      specialty: "Traditional North Indian Cuisine"
    },
    {
      name: "Mohan Brajvasi",
      role: "Co-Founder & Operations Head",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400",
      experience: "20 years",
      specialty: "Business Operations & Quality Control"
    }
  ];

  const values = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Made with Love",
      description: "Every dish is prepared with passion, care, and the warmth of family traditions"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Hygiene First",
      description: "Strict cleanliness and safety standards maintained throughout our kitchen"
    },
    {
      icon: <Utensils className="h-8 w-8" />,
      title: "Fresh Ingredients",
      description: "Only the finest and freshest ingredients sourced daily from trusted suppliers"
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Traditional Recipes",
      description: "Authentic flavors and time-honored cooking methods preserved for generations"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-8">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">Us</span>
          </h1>
        </motion.div>

        {/* Main Story */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="bg-white rounded-3xl p-10 md:p-16 shadow-2xl border-2 border-orange-100 mb-20 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-500 to-red-500"></div>
          
          <div className="prose prose-xl max-w-none">
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-2xl leading-relaxed text-gray-700 mb-8 font-light"
            >
              Welcome to <strong className="text-orange-600 font-bold">Brajvasi Brothers</strong>, where exquisite taste is crafted with utmost care.
              Every dish is prepared using the finest fresh ingredients under strict hygiene standards, ensuring both flavor and safety.
            </motion.p>
            
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl leading-relaxed text-gray-600 mb-8"
            >
              In our kitchen, the highest level of cleanliness is maintained so that you can enjoy your meal with complete peace of mind. 
              From traditional recipes to modern favorites, every dish is made with love, purity, and perfection.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-gradient-to-r from-orange-100 to-red-100 p-8 rounded-2xl border-l-8 border-orange-500 mb-10 relative"
            >
              <div className="absolute top-4 right-4 text-4xl opacity-20">🍽️</div>
              <p className="text-xl text-gray-700 font-medium leading-relaxed">
                👉 Experience delicious food, hygienic preparation, and warm hospitality – all in one place.
              </p>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-xl leading-relaxed text-gray-600 mb-8"
            >
              Our journey began decades ago with a simple dream: to bring authentic, homestyle flavors to every table. 
              What started as a small family kitchen has now grown into a beloved destination for food enthusiasts who appreciate 
              quality, tradition, and innovation in equal measure.
            </motion.p>

            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="text-xl leading-relaxed text-gray-600"
            >
              At Brajvasi Brothers, we believe that food is not just nourishment – it's an expression of culture, love, and 
              community. Every recipe tells a story, every ingredient is carefully selected, and every meal is prepared as if 
              we're cooking for our own family.
            </motion.p>
          </div>
        </motion.div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-16">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">Values</span>
          </h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                whileHover={{ y: -15, scale: 1.05 }}
                className="bg-white rounded-3xl p-8 shadow-xl border-2 border-orange-100 text-center hover:shadow-2xl transition-all duration-500 group"
              >
                <motion.div 
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                  className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-4 rounded-2xl w-fit mx-auto mb-6 group-hover:shadow-lg"
                >
                  {value.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-gray-800 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Owners Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-16">
            Meet the <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">Brothers</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto">
            {owners.map((owner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.3 }}
                whileHover={{ y: -15, scale: 1.02 }}
                className="bg-white rounded-3xl p-10 shadow-2xl border-2 border-orange-100 text-center hover:shadow-3xl transition-all duration-500 relative overflow-hidden group"
              >
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-500 to-red-500"></div>
                
                <div className="relative mb-8">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.4 }}
                    className="relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-400 rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                    <img
                      src={owner.image}
                      alt={owner.name}
                      className="relative w-40 h-40 rounded-full mx-auto object-cover shadow-xl border-4 border-white"
                    />
                  </motion.div>
                </div>
                
                <h3 className="text-3xl font-bold text-gray-800 mb-3">{owner.name}</h3>
                <p className="text-orange-600 font-semibold text-lg mb-4">{owner.role}</p>
                
                <div className="space-y-3">
                  <div className="bg-orange-50 rounded-full px-6 py-3 inline-block border border-orange-200">
                    <span className="text-orange-700 font-semibold">{owner.experience} Experience</span>
                  </div>
                  <p className="text-gray-600 text-lg">{owner.specialty}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;