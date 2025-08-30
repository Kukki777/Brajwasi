import React from 'react';
import { motion } from 'framer-motion';
import { Award, Heart, Utensils, Shield, Star, ChefHat, Sparkles, Crown } from 'lucide-react';

const About = () => {
  const owners = [
    {
      name: "xyz Agrawal",
      role: "Founder & Head Chef",
      image: "/assets/images/owner1.jpeg",
      experience: "25 years",
      specialty: "Traditional North Indian Cuisine"
    },
    {
      name: "xrz Agrawal",
      role: "Founder & Operations Head",
      image: "",
      experience: "20 years",
      specialty: "Business Operations & Quality Control"
    }
  ];

  const values = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Made with Love",
      description: "Every dish is prepared with passion, care, and the warmth of family traditions",
      gradient: "from-rose-400 via-pink-500 to-red-500",
      shadow: "shadow-rose-500/25",
      glow: "group-hover:shadow-rose-500/40"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Hygiene First",
      description: "Strict cleanliness and safety standards maintained throughout our kitchen",
      gradient: "from-cyan-400 via-blue-500 to-indigo-600",
      shadow: "shadow-blue-500/25",
      glow: "group-hover:shadow-blue-500/40"
    },
    {
      icon: <Utensils className="h-8 w-8" />,
      title: "Fresh Ingredients",
      description: "Only the finest and freshest ingredients sourced daily from trusted suppliers",
      gradient: "from-emerald-400 via-green-500 to-teal-600",
      shadow: "shadow-green-500/25",
      glow: "group-hover:shadow-green-500/40"
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Traditional Recipes",
      description: "Authentic flavors and time-honored cooking methods preserved for generations",
      gradient: "from-amber-400 via-orange-500 to-red-500",
      shadow: "shadow-orange-500/25",
      glow: "group-hover:shadow-orange-500/40"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black pt-20 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-72 h-72 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full opacity-20"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              scale: [1, 1.5, 1],
              opacity: [0.2, 0.8, 0.2]
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 5
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0.5, rotateY: -180 }}
            animate={{ scale: 1, rotateY: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative inline-block"
          >
            <h1 className="text-7xl md:text-9xl font-black mb-8 relative">
              <span className="absolute inset-0 bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 bg-clip-text text-transparent blur-sm">
                About Us
              </span>
              <span className="relative bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 bg-clip-text text-transparent">
                About Us
              </span>
            </h1>
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.5 }}
              className="absolute -bottom-4 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex justify-center items-center space-x-4 mt-8"
          >
            <Sparkles className="h-6 w-6 text-orange-400 animate-spin" />
            <p className="text-xl text-gray-300 font-light tracking-wide">Crafting Culinary Excellence Since Decades</p>
            <Sparkles className="h-6 w-6 text-pink-400 animate-spin" style={{ animationDirection: 'reverse' }} />
          </motion.div>
        </motion.div>

        {/* Story Section - Neo Morphism Design */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-slate-800/50 to-gray-800/50 rounded-[4rem] blur-3xl"></div>
            
            <div className="relative bg-gradient-to-br from-slate-800/90 via-gray-800/90 to-slate-900/90 backdrop-blur-2xl rounded-[4rem] p-12 md:p-20 border border-gray-700/50 shadow-2xl overflow-hidden">
              {/* Animated Border Lines */}
              <div className="absolute inset-0 rounded-[4rem] border-2 border-transparent bg-gradient-to-r from-orange-500/50 via-transparent to-pink-500/50 opacity-0 hover:opacity-100 transition-opacity duration-1000"></div>
              
              {/* Floating Crown */}
              <motion.div
                animate={{ 
                  y: [-10, 10, -10],
                  rotate: [-2, 2, -2]
                }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute top-8 right-8 text-yellow-400 opacity-20"
              >
                <Crown className="h-16 w-16" />
              </motion.div>

              <div className="relative z-10">
                {/* Premium Badge */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.8 }}
                  className="flex justify-center mb-12"
                >
                  <div className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 p-1 rounded-full shadow-2xl">
                    <div className="bg-slate-800 px-8 py-4 rounded-full">
                      <div className="flex items-center space-x-3">
                        <ChefHat className="h-8 w-8 text-orange-400" />
                        <span className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                          BRAJVASI BROTHERS
                        </span>
                        <ChefHat className="h-8 w-8 text-orange-400" />
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Main Content Cards */}
                <div className="grid lg:grid-cols-2 gap-8 mb-12">
                  <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    whileHover={{ scale: 1.02, rotateY: 5 }}
                    className="bg-gradient-to-br from-orange-900/30 to-red-900/30 rounded-3xl p-8 border border-orange-500/30 backdrop-blur-sm"
                  >
                    <div className="flex items-center mb-6">
                      <div className="bg-gradient-to-r from-orange-500 to-red-500 p-3 rounded-xl mr-4">
                        <Heart className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white">Our Passion</h3>
                    </div>
                    <p className="text-gray-300 leading-relaxed text-lg">
                      Welcome to <span className="text-orange-400 font-bold">Brajvasi Brothers</span>, where exquisite taste is crafted with utmost care. 
                      Every dish is prepared using the finest fresh ingredients under strict hygiene standards, ensuring both flavor and safety.
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    whileHover={{ scale: 1.02, rotateY: -5 }}
                    className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 rounded-3xl p-8 border border-blue-500/30 backdrop-blur-sm"
                  >
                    <div className="flex items-center mb-6">
                      <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-3 rounded-xl mr-4">
                        <Shield className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white">Our Promise</h3>
                    </div>
                    <p className="text-gray-300 leading-relaxed text-lg">
                      In our kitchen, the highest level of cleanliness is maintained so that you can enjoy your meal with complete peace of mind. 
                      From traditional recipes to modern favorites, every dish is made with love, purity, and perfection.
                    </p>
                  </motion.div>
                </div>

                {/* Feature Highlight */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-center bg-gradient-to-r from-yellow-900/40 via-orange-900/40 to-red-900/40 rounded-3xl p-10 border border-yellow-500/30 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/5 to-red-500/5 animate-pulse"></div>
                  <div className="relative z-10">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="inline-block mb-6"
                    >
                      <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-4 rounded-full">
                        <Star className="h-8 w-8 text-white fill-white" />
                      </div>
                    </motion.div>
                    <h3 className="text-3xl font-bold text-white mb-4">Experience the Difference</h3>
                    <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
                      Delicious food, hygienic preparation, and warm hospitality – all crafted with decades of culinary expertise 
                      and an unwavering commitment to quality that sets us apart.
                    </p>
                  </div>
                </motion.div>

                {/* Story Cards */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="grid md:grid-cols-2 gap-6 mt-12"
                >
                  <div className="bg-gradient-to-br from-emerald-900/30 to-teal-900/30 rounded-2xl p-6 border border-emerald-500/30">
                    <h4 className="text-xl font-bold text-emerald-400 mb-3">Our Journey</h4>
                    <p className="text-gray-300 leading-relaxed">
                      What started as a small family kitchen has now grown into a beloved destination for food enthusiasts who appreciate 
                      quality, tradition, and innovation in equal measure.
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-2xl p-6 border border-purple-500/30">
                    <h4 className="text-xl font-bold text-purple-400 mb-3">Our Philosophy</h4>
                    <p className="text-gray-300 leading-relaxed">
                      Food is not just nourishment – it's an expression of culture, love, and community. Every recipe tells a story, 
                      every ingredient is carefully selected, and every meal is prepared as if we're cooking for our own family.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Values Section - Cyberpunk Cards */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-6xl md:text-7xl font-black mb-8">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Core Values
              </span>
            </h2>
            <div className="flex justify-center">
              <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-pink-500 rounded-full"></div>
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 100, rotateX: -45 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ 
                  y: -20, 
                  scale: 1.05,
                  rotateY: 10,
                  transition: { duration: 0.3 }
                }}
                className="group"
              >
                <div className={`relative bg-gradient-to-br from-slate-800/90 to-gray-900/90 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50 shadow-2xl ${value.shadow} hover:shadow-3xl ${value.glow} transition-all duration-500 overflow-hidden`}>
                  {/* Cyberpunk Grid Background */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                      backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                      backgroundSize: '20px 20px'
                    }}></div>
                  </div>

                  {/* Glowing Border Effect */}
                  <motion.div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${value.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl`}
                  ></motion.div>

                  {/* Animated Corner Accents */}
                  <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-orange-500 rounded-tl-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-pink-500 rounded-br-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <div className="relative z-10">
                    {/* Floating Icon */}
                    <motion.div
                      whileHover={{ 
                        scale: 1.2, 
                        rotate: [0, -10, 10, 0],
                        transition: { duration: 0.6 }
                      }}
                      className="relative mb-8"
                    >
                      <div className={`bg-gradient-to-r ${value.gradient} p-4 rounded-xl shadow-2xl ${value.shadow} relative overflow-hidden`}>
                        <div className="absolute inset-0 bg-white/10 animate-pulse"></div>
                        <div className="relative text-white">
                          {value.icon}
                        </div>
                      </div>
                      
                      {/* Floating Particles */}
                      <div className="absolute -top-2 -right-2 w-3 h-3 bg-orange-400 rounded-full animate-ping opacity-75"></div>
                      <div className="absolute -bottom-2 -left-2 w-2 h-2 bg-pink-400 rounded-full animate-ping delay-1000 opacity-75"></div>
                    </motion.div>

                    <motion.h3
                      className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300"
                    >
                      {value.title}
                    </motion.h3>

                    <p className="text-gray-400 leading-relaxed mb-6 group-hover:text-gray-300 transition-colors duration-300">
                      {value.description}
                    </p>

                    {/* Progress Bar Effect */}
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                      className={`h-1 bg-gradient-to-r ${value.gradient} rounded-full transform origin-left`}
                    ></motion.div>
                  </div>

                  {/* Holographic Effect */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl bg-gradient-to-br from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    animate={{
                      background: [
                        'linear-gradient(45deg, transparent, rgba(255,255,255,0.1), transparent)',
                        'linear-gradient(45deg, transparent, rgba(255,255,255,0.1), transparent)'
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  ></motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Owners Section - Luxury Cards */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-6xl md:text-7xl font-black mb-8">
              <span className="bg-gradient-to-r from-gold-400 via-yellow-500 to-orange-500 bg-clip-text text-transparent">
                The Brothers
              </span>
            </h2>
            <div className="flex justify-center">
              <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"></div>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {owners.map((owner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.7, rotateY: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ duration: 1, delay: index * 0.3 }}
                whileHover={{ 
                  y: -20, 
                  scale: 1.03,
                  rotateY: index % 2 === 0 ? 5 : -5,
                  transition: { duration: 0.4 }
                }}
                className="group"
              >
                <div className="relative bg-gradient-to-br from-slate-800/95 via-gray-800/95 to-slate-900/95 backdrop-blur-2xl rounded-[3rem] p-12 border border-gray-600/50 shadow-2xl hover:shadow-yellow-500/20 transition-all duration-500 overflow-hidden">
                  {/* Luxury Background Pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0" style={{
                      backgroundImage: 'radial-gradient(circle at 25% 25%, gold 2px, transparent 2px), radial-gradient(circle at 75% 75%, gold 2px, transparent 2px)',
                      backgroundSize: '50px 50px'
                    }}></div>
                  </div>

                  {/* Golden Border Animation */}
                  <motion.div
                    className="absolute inset-0 rounded-[3rem] border-2 border-transparent bg-gradient-to-r from-yellow-500/50 via-orange-500/50 to-red-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"
                    style={{ padding: '2px' }}
                  >
                    <div className="w-full h-full bg-slate-800 rounded-[3rem]"></div>
                  </motion.div>

                  {/* Floating Elements */}
                  <motion.div
                    animate={{ 
                      y: [-5, 5, -5],
                      rotate: [0, 180, 360]
                    }}
                    transition={{ duration: 8, repeat: Infinity }}
                    className="absolute top-6 right-6 text-yellow-400/20"
                  >
                    <Crown className="h-12 w-12" />
                  </motion.div>

                  <div className="relative z-10">
                    {/* Enhanced Image */}
                    <div className="relative mb-10">
                      <motion.div
                        whileHover={{ 
                          scale: 1.1,
                          rotate: [0, -3, 3, 0],
                          transition: { duration: 0.8 }
                        }}
                        className="relative"
                      >
                        {/* Multiple Glow Layers */}
                        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/40 via-orange-500/40 to-red-500/40 rounded-full blur-3xl scale-110 group-hover:scale-125 transition-transform duration-500"></div>
                        <div className="absolute inset-0 bg-gradient-to-r from-gold-400/30 to-orange-500/30 rounded-full blur-2xl scale-105 group-hover:scale-120 transition-transform duration-500"></div>
                        
                        {/* Image Container */}
                        <div className="relative">
                          <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 p-1.5 shadow-2xl">
                            <div className="w-full h-full rounded-full bg-gradient-to-r from-gray-700 to-gray-800 p-1">
                              <img
                                src={owner.image || "/api/placeholder/200/200"}
                                alt={owner.name}
                                className="w-full h-full rounded-full object-cover shadow-inner"
                              />
                            </div>
                          </div>

                          {/* Premium Badge */}
                          <motion.div
                            initial={{ scale: 0, rotate: -180 }}
                            whileInView={{ scale: 1, rotate: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.5 + 0.5 }}
                            className="absolute -top-4 -right-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full p-4 shadow-2xl border-4 border-white"
                          >
                            <Star className="h-6 w-6 text-white fill-white" />
                          </motion.div>
                        </div>
                      </motion.div>
                    </div>

                    {/* Owner Information */}
                    <div className="text-center space-y-6">
                      <motion.h3
                        className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500"
                        whileHover={{ scale: 1.05 }}
                      >
                        {owner.name}
                      </motion.h3>

                      <motion.div
                        whileHover={{ scale: 1.05, y: -2 }}
                        className="bg-gradient-to-r from-yellow-500 to-orange-600 text-white px-8 py-4 rounded-full inline-block font-bold text-xl shadow-2xl border-2 border-yellow-400/50"
                      >
                        {owner.role}
                      </motion.div>

                      

                        <motion.div
                          whileHover={{ scale: 1.02, y: -2 }}
                          className="bg-gradient-to-r from-purple-600/80 to-pink-600/80 backdrop-blur-sm rounded-2xl p-6 border border-purple-400/30 shadow-xl"
                        >
                          <p className="text-purple-100 font-medium text-lg leading-relaxed">{owner.specialty}</p>
                        </motion.div>
                      </div>
                    </div>
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