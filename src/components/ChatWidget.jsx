import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleWhatsAppClick = () => {
    const phoneNumber = "+918929956789";
    const message = "Hello! I'd like to know more about Brajvasi Brothers menu.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      {/* Chat Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 2 }}
      >
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-gradient-to-r from-green-500 to-green-600 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 relative"
        >
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 bg-green-400 rounded-full opacity-30"
          ></motion.div>
          <MessageCircle className="h-7 w-7 relative z-10" />
          
          {/* Notification Badge */}
          <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold">
            1
          </div>
        </motion.button>
      </motion.div>

      {/* Chat Popup */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-24 right-6 z-50 w-80 bg-white rounded-2xl shadow-2xl border-2 border-green-200 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-green-500 to-green-600 p-4 text-white relative">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <MessageCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Chat with Us!</h3>
                    <p className="text-green-100 text-sm">Usually responds instantly</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:bg-white/20 p-1 rounded-full transition-colors duration-200"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="mb-4">
                <div className="bg-gray-100 rounded-2xl p-4 mb-3">
                  <p className="text-gray-700 text-sm">
                    👋 Hello! Welcome to Brajvasi Brothers. How can we help you today?
                  </p>
                </div>
                <div className="text-xs text-gray-500 text-center">Just now</div>
              </div>

              <motion.button
                onClick={handleWhatsAppClick}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
              >
                <MessageCircle className="h-5 w-5" />
                Continue on WhatsApp
              </motion.button>

              <p className="text-xs text-gray-500 text-center mt-3">
                Click to start chatting on WhatsApp
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatWidget;