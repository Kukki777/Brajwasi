import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle, 
  Send, 
  User, 
  Sparkles, 
  Crown,
  Star,
  Heart,
  Instagram,
  Facebook,
  Twitter,
  Youtube
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://formspree.io/f/xjkggyql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    }
    
    setIsSubmitting(false);
    setTimeout(() => setSubmitStatus(''), 5000);
  };

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Call Us",
      details: "+91 89299 56789",
      subtitle: "24/7 Available",
      gradient: "from-blue-400 to-cyan-500"
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Us",
      details: "brajwasibrothers777@gmail.com",
      subtitle: "Quick Response",
      gradient: "from-green-400 to-emerald-500"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Visit Us",
      details: "123 Food Street, Delhi",
      subtitle: "India - 110001",
      gradient: "from-purple-400 to-pink-500"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Open Hours",
      details: "11:00 AM - 11:00 PM",
      subtitle: "All Days",
      gradient: "from-orange-400 to-red-500"
    }
  ];

  const socialLinks = [
    {
      name: 'Instagram',
      icon: <Instagram className="h-8 w-8" />,
      url: '',
      color: 'from-pink-500 via-purple-500 to-indigo-500',
      hoverColor: 'hover:shadow-pink-500/50',
    },
    {
      name: 'Facebook',
      icon: <Facebook className="h-8 w-8" />,
      url: '',
      color: 'from-blue-600 to-blue-400',
      hoverColor: 'hover:shadow-blue-500/50',
    },
    {
      name: 'WhatsApp',
      icon: <MessageCircle className="h-8 w-8" />,
      url: 'https://wa.me/+918929956789?text=Hello! I did like to order some food, can u pls give your full menu.',
      color: 'from-green-500 to-emerald-400',
      hoverColor: 'hover:shadow-green-500/50',
      followers: 'Chat Now'
    },
    {
      name: 'YouTube',
      icon: <Youtube className="h-8 w-8" />,
      url: '/',
      color: 'from-red-500 to-red-400',
      hoverColor: 'hover:shadow-red-500/50',
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black pt-20 relative overflow-hidden">
      {/* Static Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/2 w-72 h-72 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="relative inline-block">
            <h1 className="text-7xl md:text-9xl font-black mb-8 relative">
              <span className="absolute inset-0 bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 bg-clip-text text-transparent blur-sm">
                Get In Touch
              </span>
              <span className="relative bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 bg-clip-text text-transparent">
                Get In Touch
              </span>
            </h1>
            <div className="absolute -bottom-4 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent" />
          </div>

          <div className="flex justify-center items-center space-x-4 mt-8">
            <Sparkles className="h-6 w-6 text-orange-400" />
            <p className="text-xl text-gray-300 font-light tracking-wide">Let's Create Something Delicious Together</p>
            <Sparkles className="h-6 w-6 text-pink-400" />
          </div>
        </div>

        {/* Quick Contact Info */}
        <div className="mb-20">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="group hover:-translate-y-2 hover:scale-105 transition-all duration-300"
              >
                <div className="bg-gradient-to-br from-slate-800/60 via-gray-800/60 to-slate-900/60 backdrop-blur-xl rounded-2xl p-6 border border-gray-600/30 hover:border-orange-500/50 transition-all duration-300 relative overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-r ${info.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl`}></div>
                  
                  <div className="relative z-10 text-center">
                    <div className={`bg-gradient-to-r ${info.gradient} text-white p-3 rounded-xl w-fit mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      {info.icon}
                    </div>
                    
                    <h3 className="text-lg font-bold text-white mb-2">{info.title}</h3>
                    <p className="text-gray-300 font-medium">{info.details}</p>
                    <p className="text-gray-400 text-sm mt-1">{info.subtitle}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 mb-24">
          {/* Social Media Section */}
          <div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-slate-800/50 to-gray-800/50 rounded-[3rem] blur-3xl"></div>
              
              <div className="relative bg-gradient-to-br from-slate-800/90 via-gray-800/90 to-slate-900/90 backdrop-blur-2xl rounded-[3rem] p-12 border border-gray-600/50 shadow-2xl overflow-hidden">
                <div className="absolute top-6 right-6 text-yellow-400 opacity-20">
                  <Crown className="h-12 w-12" />
                </div>

                <div className="relative z-10">
                  <div className="flex justify-center mb-8">
                    <div className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 p-1 rounded-full shadow-2xl">
                      <div className="bg-slate-800 px-6 py-3 rounded-full">
                        <div className="flex items-center space-x-2">
                          <Heart className="h-6 w-6 text-orange-400" />
                          <span className="text-xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                            FOLLOW US
                          </span>
                          <Heart className="h-6 w-6 text-orange-400" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <h2 className="text-4xl font-black text-center mb-12">
                    <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                      Connect With Us
                    </span>
                  </h2>

                  <div className="grid grid-cols-2 gap-6">
                    {socialLinks.map((social, index) => (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block hover:-translate-y-2 hover:scale-105 transition-all duration-300"
                      >
                        <div className={`relative bg-gradient-to-br from-slate-800/80 to-gray-900/80 backdrop-blur-xl rounded-2xl p-8 border border-gray-600/50 shadow-xl ${social.hoverColor} hover:shadow-2xl transition-all duration-500 overflow-hidden`}>
                          <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${social.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl`}></div>

                          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-orange-400 rounded-tl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-pink-400 rounded-br-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                          <div className="relative z-10 text-center">
                            <div className={`bg-gradient-to-r ${social.color} text-white p-4 rounded-xl mx-auto w-fit mb-4 shadow-2xl group-hover:scale-110 transition-transform duration-300`}>
                              {social.icon}
                            </div>
                            
                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
                              {social.name}
                            </h3>
                            <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                              {social.followers}
                            </p>
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-slate-800/50 to-gray-800/50 rounded-[3rem] blur-3xl"></div>
              
              <div className="relative bg-gradient-to-br from-slate-800/90 via-gray-800/90 to-slate-900/90 backdrop-blur-2xl rounded-[3rem] p-12 border border-gray-600/50 shadow-2xl overflow-hidden">
                <div className="relative z-10">
                  <div className="flex justify-center mb-8">
                    <div className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 p-1 rounded-full shadow-2xl">
                      <div className="bg-slate-800 px-6 py-3 rounded-full">
                        <div className="flex items-center space-x-2">
                          <Send className="h-6 w-6 text-blue-400" />
                          <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                            MESSAGE US
                          </span>
                          <Send className="h-6 w-6 text-purple-400" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <h2 className="text-4xl font-black text-center mb-12">
                    <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                      Send Message
                    </span>
                  </h2>

                  <div className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your Name"
                          required
                          className="w-full bg-slate-800/50 border border-gray-600 rounded-xl px-6 py-4 text-white placeholder-gray-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all duration-300 backdrop-blur-sm"
                        />
                      </div>
                      
                      <div>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Your Email"
                          required
                          className="w-full bg-slate-800/50 border border-gray-600 rounded-xl px-6 py-4 text-white placeholder-gray-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all duration-300 backdrop-blur-sm"
                        />
                      </div>
                    </div>

                    <div>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Phone Number"
                        className="w-full bg-slate-800/50 border border-gray-600 rounded-xl px-6 py-4 text-white placeholder-gray-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all duration-300 backdrop-blur-sm"
                      />
                    </div>

                    <div>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="Subject"
                        required
                        className="w-full bg-slate-800/50 border border-gray-600 rounded-xl px-6 py-4 text-white placeholder-gray-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all duration-300 backdrop-blur-sm"
                      />
                    </div>

                    <div>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Your Message"
                        rows="5"
                        required
                        className="w-full bg-slate-800/50 border border-gray-600 rounded-xl px-6 py-4 text-white placeholder-gray-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all duration-300 backdrop-blur-sm resize-none"
                      ></textarea>
                    </div>

                    <div className="text-center">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        onClick={handleSubmit}
                        className="relative bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white px-12 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-orange-500/50 hover:scale-105 hover:-translate-y-1 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden group"
                      >
                        <span className="absolute inset-0 bg-gradient-to-r from-pink-500 via-red-500 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                        <span className="relative flex items-center justify-center space-x-2">
                          {isSubmitting ? (
                            <>
                              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                              <span>Sending...</span>
                            </>
                          ) : (
                            <>
                              <Send className="h-5 w-5" />
                              <span>Send Message</span>
                            </>
                          )}
                        </span>
                      </button>
                    </div>

                    {submitStatus === 'success' && (
                      <div className="text-center p-4 bg-green-500/20 border border-green-500/50 rounded-xl">
                        <p className="text-green-400 font-medium">Message sent successfully! We'll get back to you soon.</p>
                      </div>
                    )}

                    {submitStatus === 'error' && (
                      <div className="text-center p-4 bg-red-500/20 border border-red-500/50 rounded-xl">
                        <p className="text-red-400 font-medium">Something went wrong. Please try again or contact us directly.</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;