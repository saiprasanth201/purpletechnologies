import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Smartphone, Building, Home } from 'lucide-react';


const Solutions = () => {
  const solutions = [
    {
      id: 'mobile-web-development',
      icon: Smartphone,
      title: 'Mobile and Web Development',
      description: 'Our mobile and web development services focus on creating user-friendly applications that leverage IoT capabilities.',
      features: [
        'Cross-platform development for iOS and Android',
        'Responsive web design for optimal user experience',
        'Integration with IoT devices and cloud services'
      ],
      benefits: [
        'Enhanced user engagement',
        'Real-time data access and analytics',
        'Scalable architecture to support future growth'
      ],
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-blue-400 to-cyan-500'
    },
    {
      id: 'smart-cities',
      icon: Building,
      title: 'Smart Cities',
      description: 'We are committed to making cities smarter through IoT technology, integrating various applications to enhance urban living.',
      features: [
        'Smart lighting and energy management systems',
        'Waste management solutions with real-time monitoring',
        'Traffic management and public transport optimization'
      ],
      benefits: [
        'Improved quality of life for residents',
        'Efficient resource utilization',
        'Enhanced safety and security measures'
      ],
      image: 'https://imgcdn.stablediffusionweb.com/2024/5/10/61001075-b30b-49ae-9d3a-d3015165c1ae.jpg',
      color: 'from-green-400 to-emerald-500'
    },
    {
      id: 'smart-home',
      icon: Home,
      title: 'Smart Home',
      description: 'Transform your living space into a smart home with our innovative solutions that allow you to control and monitor your home environment.',
      features: [
        'Smart lighting and HVAC control',
        'Security systems with real-time alerts',
        'Integration with voice assistants for seamless operation'
      ],
      benefits: [
        'Increased comfort and convenience',
        'Energy savings through optimized usage',
        'Enhanced security and peace of mind'
      ],
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-purple-400 to-pink-500'
    }
  ];

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Our <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Solutions</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            At Purple Techno Solutions, we offer a range of innovative solutions designed to address the unique challenges of modern industries. Our expertise in IoT technology allows us to deliver tailored solutions that enhance efficiency, connectivity, and intelligence across various sectors.
          </p>
        </motion.div>

        <div className="space-y-16">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}
              >
                <div className="relative rounded-2xl overflow-hidden group">
                  <img
                    src={solution.image}
                    alt={solution.title}
                    className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-r ${solution.color} opacity-30 group-hover:opacity-20 transition-opacity duration-300`}></div>
                  <div className={`absolute top-6 left-6 w-16 h-16 bg-gradient-to-r ${solution.color} rounded-2xl flex items-center justify-center backdrop-blur-sm`}>
                    <solution.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}
              >
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    {solution.title}
                  </h2>
                  <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                    {solution.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-semibold text-cyan-400 mb-4">Key Features:</h3>
                      <ul className="space-y-3">
                        {solution.features.map((feature, idx) => (
                          <motion.li
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="text-gray-300 flex items-start"
                          >
                            <span className={`w-3 h-3 bg-gradient-to-r ${solution.color} rounded-full mt-2 mr-3 flex-shrink-0`}></span>
                            {feature}
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-purple-400 mb-4">Benefits:</h3>
                      <ul className="space-y-3">
                        {solution.benefits.map((benefit, idx) => (
                          <motion.li
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 + 0.3 }}
                            className="text-gray-300 flex items-start"
                          >
                            <span className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            {benefit}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <Link to={`/solutions/${solution.id}`}>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`mt-8 bg-gradient-to-r ${solution.color} text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300`}
                    >
                      Learn More
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mt-20"
        >
          <h2 className="text-4xl font-bold text-white mb-6">
            Discover Our Solutions Today!
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            If you're interested in learning more about how our solutions can benefit your organization or home, please contact us for a consultation. Our team is ready to help you harness the power of IoT technology.
          </p>
          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-cyan-400 to-purple-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition-all duration-300"
            >
              Schedule Consultation
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Solutions;