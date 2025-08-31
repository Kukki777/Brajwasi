import React from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Heart,
  Star,
  Utensils,
  ChefHat,
  ArrowRight
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    'Quick Links': [
      { name: 'About Us', href: '/about' },
      { name: 'Menu', href: '#menu' },
      { name: 'Special Offers', href: '#offers' },
      { name: 'Contact', href: '/contact' },
      { name: 'Reservations', href: '#booking' }
    ],
    'Customer Service': [
      { name: 'Order Online', href: '#order' },
      { name: 'Delivery Info', href: '#delivery' },
      { name: 'FAQ', href: '#faq' },
      { name: 'Support', href: '#support' },
      { name: 'Terms & Conditions', href: '#terms' }
    ],
    'Food Categories': [
      { name: 'North Indian', href: '#north-indian' },
      { name: 'South Indian', href: '#south-indian' },
      { name: 'Chinese', href: '#chinese' },
      { name: 'Desserts', href: '#desserts' },
      { name: 'Beverages', href: '#beverages' }
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: '#', color: 'hover:text-blue-600', bgColor: 'hover:bg-blue-50' },
    { icon: Instagram, href: '#', color: 'hover:text-pink-600', bgColor: 'hover:bg-pink-50' },
    { icon: Twitter, href: '#', color: 'hover:text-blue-400', bgColor: 'hover:bg-blue-50' },
    { icon: Youtube, href: '#', color: 'hover:text-red-600', bgColor: 'hover:bg-red-50' }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 text-6xl">🍽️</div>
        <div className="absolute top-32 right-20 text-4xl">🍛</div>
        <div className="absolute bottom-20 left-20 text-5xl">🥘</div>
        <div className="absolute bottom-10 right-10 text-4xl">🍚</div>
      </div>

      <div className="relative">
      

        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            
            {/* Brand Section */}
            <div className="lg:col-span-1 space-y-6">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-gradient-to-r from-orange-500 to-red-500 p-2 rounded-xl">
                    <ChefHat className="h-8 w-8 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                    Brajwasi Brothers
                  </h2>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Bringing authentic Indian flavors to your doorstep. Experience the taste of tradition with every bite.
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-300 hover:text-orange-400 transition-colors duration-300">
                  <MapPin className="h-5 w-5 text-orange-400" />
                  <span>Gurugram Haryana</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300 hover:text-orange-400 transition-colors duration-300">
                  <Phone className="h-5 w-5 text-orange-400" />
                  <span>+91 89299 56789</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300 hover:text-orange-400 transition-colors duration-300">
                  <Mail className="h-5 w-5 text-orange-400" />
                  <span>brajwasibrothers777@gmail.com</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Clock className="h-5 w-5 text-orange-400" />
                  <span>Open 24/7</span>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className={`p-3 bg-gray-800 rounded-full transition-all duration-300 ${social.color} ${social.bgColor} hover:scale-110 hover:shadow-lg`}
                    >
                      <social.icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Links Sections */}
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title} className="space-y-4">
                <h3 className="text-xl font-semibold text-orange-400 mb-6">{title}</h3>
                <ul className="space-y-3">
                  {links.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="text-gray-300 hover:text-orange-400 transition-all duration-300 flex items-center group"
                      >
                        <span className="group-hover:translate-x-2 transition-transform duration-300">
                          {link.name}
                        </span>
                        <ArrowRight className="h-4 w-4 ml-2 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="mt-16 pt-8 border-t border-gray-700">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="group">
                <div className="text-3xl font-bold text-orange-400 group-hover:scale-110 transition-transform duration-300">10K+</div>
                <div className="text-gray-300 text-sm mt-1">Happy Customers</div>
              </div>
              <div className="group">
                <div className="text-3xl font-bold text-orange-400 group-hover:scale-110 transition-transform duration-300">50+</div>
                <div className="text-gray-300 text-sm mt-1">Menu Items</div>
              </div>
              <div className="group">
                <div className="text-3xl font-bold text-orange-400 group-hover:scale-110 transition-transform duration-300">24/7</div>
                <div className="text-gray-300 text-sm mt-1">Service</div>
              </div>
              <div className="group">
                <div className="flex justify-center items-center gap-1 text-3xl font-bold text-orange-400 group-hover:scale-110 transition-transform duration-300">
                  4.9 <Star className="h-6 w-6 fill-current" />
                </div>
                <div className="text-gray-300 text-sm mt-1">Rating</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 bg-gray-900/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-2 text-gray-300">
                <span>© {currentYear} Brajwasi Brothers. Made with</span>
                <Heart className="h-4 w-4 text-red-500 fill-current animate-pulse" />
                <span>in India</span>
              </div>
              <div className="flex gap-6 text-sm">
                <a href="#privacy" className="text-gray-300 hover:text-orange-400 transition-colors duration-300">
                  Privacy Policy
                </a>
                <a href="#terms" className="text-gray-300 hover:text-orange-400 transition-colors duration-300">
                  Terms of Service
                </a>
                <a href="#cookies" className="text-gray-300 hover:text-orange-400 transition-colors duration-300">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;