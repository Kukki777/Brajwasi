import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Phone className="h-5 w-5" />,
      title: "Phone",
      details: ["+91 98765 43210", "+91 87654 32109"],
      color: "blue"
    },
    {
      icon: <Mail className="h-5 w-5" />,
      title: "Email",
      details: ["info@brajvasibrothers.com", "orders@brajvasibrothers.com"],
      color: "green"
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      title: "Address",
      details: ["123 Food Street, Spice Garden", "Delhi, India - 110001"],
      color: "purple"
    },
    {
      icon: <Clock className="h-5 w-5" />,
      title: "Hours",
      details: ["Mon-Sun: 11:00 AM - 11:00 PM", "No holidays, always serving!"],
      color: "orange"
    }
  ];

  const handleWhatsAppClick = () => {
    const phoneNumber = "919876543210";
    const message = "Hello! I'd like to know more about Brajvasi Brothers menu.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-8">
            Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">Us</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We'd love to hear from you. Get in touch for reservations, catering, or just to say hello!
          </p>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-20"
        >
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-orange-100 text-center hover:shadow-xl transition-all duration-300 group"
              >
                <motion.div 
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className={`${
                    info.color === 'blue' ? 'bg-blue-500' :
                    info.color === 'green' ? 'bg-green-500' :
                    info.color === 'purple' ? 'bg-purple-500' :
                    'bg-orange-500'
                  } text-white p-3 rounded-full w-fit mx-auto mb-4 group-hover:shadow-lg`}
                >
                  {info.icon}
                </motion.div>
                <h3 className="text-lg font-bold text-gray-800 mb-3">{info.title}</h3>
                {info.details.map((detail, i) => (
                  <p key={i} className="text-gray-600 text-sm mb-1">{detail}</p>
                ))}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Quick Message */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl p-12 text-white mb-20 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 text-9xl opacity-10">🍽️</div>
          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-6">Ready to Experience Amazing Food?</h3>
            <p className="text-xl mb-8 leading-relaxed max-w-3xl">
              For immediate assistance or to place an order, use our WhatsApp chat feature. 
              We're always ready to serve you with a smile and help you discover your new favorite dish!
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full text-lg border border-white/30">📱 Instant Response</span>
              <span className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full text-lg border border-white/30">🍽️ Order Online</span>
              <span className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full text-lg border border-white/30">🚚 Home Delivery</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;