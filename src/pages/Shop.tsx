import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShoppingCart, ExternalLink, Star, Shield, Truck, HeadphonesIcon } from 'lucide-react';

const Shop = () => {
  const navigate = useNavigate(); // for navigation
  const handleShopRedirect = () => {
    window.open('https://diykit.in', '_blank');
  };
  const handleContactRedirect = () => {
    navigate('/contact');
  };

  const categories = [
    { name: 'IoT Development Boards', icon: '🔧', color: 'from-blue-400 to-cyan-500' },
    { name: 'Sensors and Modules', icon: '📡', color: 'from-green-400 to-emerald-500' },
    { name: 'GPS Tracking Devices', icon: '🗺️', color: 'from-purple-400 to-pink-500' },
    { name: 'Smart Home Solutions', icon: '🏠', color: 'from-orange-400 to-red-500' },
    { name: 'Wearable Technology', icon: '⌚', color: 'from-indigo-400 to-purple-500' },
    { name: 'DIY Kits and Accessories', icon: '🛠️', color: 'from-cyan-400 to-teal-500' }
  ];

  const features = [
    {
      icon: Shield,
      title: 'Quality Products',
      description: 'We provide reliable and high-quality products to ensure your projects succeed.',
      color: 'from-blue-400 to-cyan-500'
    },
    {
      icon: Star,
      title: 'Competitive Pricing',
      description: 'Enjoy affordable prices without compromising on quality.',
      color: 'from-green-400 to-emerald-500'
    },
    {
      icon: HeadphonesIcon,
      title: 'Expert Support',
      description: 'Our team is here to assist you with any queries or guidance you need.',
      color: 'from-purple-400 to-pink-500'
    },
    {
      icon: Truck,
      title: 'Fast Delivery',
      description: 'Quick and reliable shipping to get your products when you need them.',
      color: 'from-orange-400 to-red-500'
    }
  ];

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Our <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Shop</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Welcome to the Purple Techno Solutions Shop! We offer a wide range of electronic products and IoT solutions designed for developers, hobbyists, and businesses.
          </p>
        </motion.div>

        {/* E-commerce CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gradient-to-r from-cyan-400/20 to-purple-500/20 backdrop-blur-lg rounded-3xl p-8 border border-cyan-400/30 mb-16 text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Explore Our E-Commerce Platform</h2>
          <p className="text-lg text-gray-300 mb-6">To browse and purchase our products, please visit our dedicated e-commerce platform:</p>
          <motion.button
            onClick={handleShopRedirect}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-3 bg-gradient-to-r from-cyan-400 to-purple-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition-all duration-300"
          >
            <ShoppingCart className="h-6 w-6" />
            <span>Visit DIYKit.in</span>
            <ExternalLink className="h-5 w-5" />
          </motion.button>
        </motion.div>

        {/* Categories */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Product <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Categories</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 text-center"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{category.name}</h3>
                <p className="text-gray-300 text-sm">Explore our range of {category.name.toLowerCase()}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Why Shop <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">With Us?</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-purple-400/50 transition-all duration-300 text-center"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-3xl p-8 border border-purple-400/30 text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Stay Updated!</h2>
          <p className="text-lg text-gray-300 mb-6">Sign up for our newsletter to receive updates on new arrivals, exclusive discounts, and special offers directly to your inbox.</p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400/50 transition-all duration-300"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
            >
              Subscribe
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Final CTA with contact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Happy Shopping!</h2>
          <p className="text-lg text-gray-300 mb-8">For any inquiries or assistance, please feel free to contact us.</p>
          <motion.button
            onClick={handleContactRedirect}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-cyan-400 to-purple-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition-all duration-300"
          >
            Contact Support
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Shop;
