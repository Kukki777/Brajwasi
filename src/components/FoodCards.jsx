import React from 'react';
import { motion } from 'framer-motion';
import { Star, Clock, Users } from 'lucide-react';

const FoodCards = () => {
  const foodItems = [
    {
  id: 1,
  name: "Khadi Chawal",
  description: "A grand feast with authentic flavors, featuring Khadi, rice. Our signature food brings together the best of traditional Indian cuisine in one complete meal.",
  image: "/assets/images/food1.jpeg",
  price: "₹149",
  time: "25 mins",
  serves: "1 person",
  rating: 4.8,
  side: "left"
},

    {
      id: 2,
      name: "Rajma Chawal",
      description: "Creamy, rich curry with tender Paneer pieces in our signature tomato-based sauce. Slow-cooked to perfection with aromatic spices and finished with fresh cream.",
      image: "/assets/images/Food2.jpeg",
      price: "₹149",
      time: "20 mins",
      serves: "1 people",
      rating: 4.9,
      side: "right"
    },
    {
      id: 3,
      name: "Combo",
      description: "Fresh cottage cheese cubes in velvety makhani gravy with aromatic spices. A vegetarian delight that melts in your mouth with every bite.",
      image: "/assets/images/food3.jpeg",
      price: "₹299",
      time: "18 mins",
      serves: "3 people",
      rating: 4.7,
      side: "left"
    },
    {
      id: 4,
      name: "Chole chawal",
      description: "Fragrant basmati rice layered with spiced meat and vegetables, slow-cooked to perfection. Each grain tells a story of tradition and flavor.",
      image: "/assets/images/food5.jpeg",
      price: "₹149",
      time: "35 mins",
      serves: "2 people",
      rating: 4.9,
      side: "right"
    }
  ];

  return (
    <div className="py-24 bg-gradient-to-b from-orange-50 via-white to-orange-50 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">Signature</span> Dishes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Each dish is a masterpiece, crafted with the finest ingredients and traditional techniques passed down through generations
          </p>
        </motion.div>

        <div className="space-y-32">
          {foodItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: item.side === 'left' ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: index * 0.2 }}
              className={`flex flex-col ${item.side === 'right' ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-16`}
            >
              {/* Image Section */}
              <div className="lg:w-1/2">
                <motion.div
                  whileHover={{ 
                    scale: 1.05,
                    rotateY: item.side === 'left' ? 8 : -8,
                    rotateX: 5
                  }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="relative group perspective-1000"
                >
                  <div className="absolute -inset-4 bg-gradient-to-r from-orange-400 via-red-400 to-yellow-400 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                  <div className="relative overflow-hidden rounded-3xl shadow-2xl group-hover:shadow-3xl transition-all duration-500">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-96 object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="flex items-center justify-between text-white">
                        <div className="flex items-center gap-2">
                          <Star className="h-5 w-5 text-yellow-400 fill-current" />
                          <span className="font-bold text-lg">{item.rating}</span>
                        </div>
                        <div className="text-3xl font-bold">{item.price}</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Content Section */}
              <div className="lg:w-1/2 text-center lg:text-left">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="space-y-6"
                >
                  <h3 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
                    {item.name}
                  </h3>
                  
                  <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                    {item.description}
                  </p>
                  
                  <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                    <motion.div 
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center bg-gradient-to-r from-orange-100 to-red-100 px-4 py-3 rounded-full border border-orange-200"
                    >
                      <Clock className="h-5 w-5 text-orange-600 mr-2" />
                      <span className="font-semibold text-orange-800">{item.time}</span>
                    </motion.div>
                    <motion.div 
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center bg-gradient-to-r from-blue-100 to-indigo-100 px-4 py-3 rounded-full border border-blue-200"
                    >
                      <Users className="h-5 w-5 text-blue-600 mr-2" />
                      <span className="font-semibold text-blue-800">{item.serves}</span>
                    </motion.div>
                  </div>

                  <motion.div
                    whileHover={{ y: -2 }}
                    className="pt-4"
                  >
                    <div className="inline-block bg-gradient-to-r from-orange-500 to-red-500 p-1 rounded-2xl">
                      <div className="bg-white px-8 py-4 rounded-xl">
                        <span className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                          Starting at {item.price}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FoodCards;