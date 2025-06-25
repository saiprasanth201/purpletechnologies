import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Smartphone, Building, Home, Code, Zap } from 'lucide-react';

const solutionData = {
  'mobile-web-development': {
    title: 'Mobile and Web Development',
    description: 'Our mobile and web development services focus on creating user-friendly applications that leverage IoT capabilities. We build custom solutions that cater to your business needs.',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
    icon: Smartphone,
    color: 'from-blue-400 to-cyan-500',
    features: [
      'Cross-platform development for iOS and Android',
      'Responsive web design for optimal user experience',
      'Integration with IoT devices and cloud services',
      'Real-time data visualization dashboards',
      'Progressive Web App (PWA) development',
      'API development and integration'
    ],
    benefits: [
      'Enhanced user engagement',
      'Real-time data access and analytics',
      'Scalable architecture to support future growth',
      'Reduced development costs',
      'Faster time to market',
      'Cross-platform compatibility'
    ],
    technologies: [
      'React Native & Flutter',
      'React.js & Vue.js',
      'Node.js & Express',
      'MongoDB & PostgreSQL',
      'AWS & Azure Cloud',
      'Docker & Kubernetes'
    ],
    process: [
      'Requirements Analysis & Planning',
      'UI/UX Design & Prototyping',
      'Development & Testing',
      'Deployment & Launch',
      'Maintenance & Support'
    ]
  },
  'smart-cities': {
    title: 'Smart Cities',
    description: 'We are committed to making cities smarter through IoT technology. Our Smart Cities solutions integrate various IoT applications to enhance urban living.',
    image: 'https://imgcdn.stablediffusionweb.com/2024/5/10/61001075-b30b-49ae-9d3a-d3015165c1ae.jpg',
    icon: Building,
    color: 'from-green-400 to-emerald-500',
    features: [
      'Smart lighting and energy management systems',
      'Waste management solutions with real-time monitoring',
      'Traffic management and public transport optimization',
      'Environmental monitoring and air quality sensors',
      'Smart parking solutions',
      'Public safety and surveillance systems'
    ],
    benefits: [
      'Improved quality of life for residents',
      'Efficient resource utilization',
      'Enhanced safety and security measures',
      'Reduced environmental impact',
      'Cost savings for city administration',
      'Data-driven decision making'
    ],
    technologies: [
      'LoRaWAN & NB-IoT',
      'Edge Computing',
      'AI & Machine Learning',
      'Big Data Analytics',
      'Cloud Infrastructure',
      'Sensor Networks'
    ],
    process: [
      'City Assessment & Planning',
      'Infrastructure Design',
      'Pilot Project Implementation',
      'Full-scale Deployment',
      'Monitoring & Optimization'
    ]
  },
  'smart-home': {
    title: 'Smart Home',
    description: 'Transform your living space into a smart home with our innovative solutions. We provide smart home automation systems that allow you to control and monitor your home environment.',
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
    icon: Home,
    color: 'from-purple-400 to-pink-500',
    features: [
      'Smart lighting and HVAC control',
      'Security systems with real-time alerts',
      'Integration with voice assistants for seamless operation',
      'Energy monitoring and optimization',
      'Smart appliance control',
      'Home entertainment system integration'
    ],
    benefits: [
      'Increased comfort and convenience',
      'Energy savings through optimized usage',
      'Enhanced security and peace of mind',
      'Remote monitoring and control',
      'Increased property value',
      'Customizable automation scenarios'
    ],
    technologies: [
      'Zigbee & Z-Wave',
      'Wi-Fi & Bluetooth',
      'Voice Assistants (Alexa, Google)',
      'Mobile Applications',
      'Cloud Platforms',
      'AI-powered Automation'
    ],
    process: [
      'Home Assessment & Consultation',
      'System Design & Planning',
      'Installation & Configuration',
      'Testing & Optimization',
      'Training & Support'
    ]
  }
};

const SolutionDetail = () => {
  const { id } = useParams();
  const solution = solutionData[id as keyof typeof solutionData];

  if (!solution) {
    return (
      <div className="pt-20 min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Solution Not Found</h1>
          <p className="text-gray-300 mb-8">The solution you're looking for doesn't exist.</p>
          <Link to="/solutions">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-cyan-400 to-purple-500 text-white px-6 py-3 rounded-xl font-semibold"
            >
              Back to Solutions
            </motion.button>
          </Link>
        </div>
      </div>
    );
  }

  const IconComponent = solution.icon;

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link to="/solutions">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 bg-gradient-to-r from-white/20 to-white/10 text-white px-4 py-2 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 border border-white/30"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>Back to Solutions</span>
            </motion.button>
          </Link>
        </motion.div>

        {/* Solution Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className={`w-20 h-20 bg-gradient-to-r ${solution.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
            <IconComponent className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">{solution.title}</h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">{solution.description}</p>
        </motion.div>

        {/* Solution Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          {/* Solution Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.02 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden group">
              <img
                src={solution.image}
                alt={solution.title}
                className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className={`absolute inset-0 bg-gradient-to-r ${solution.color} opacity-20 group-hover:opacity-10 transition-opacity duration-300`}></div>
            </div>
          </motion.div>

          {/* Solution Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Features */}
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">Key Features</h3>
              <ul className="space-y-3">
                {solution.features.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="text-gray-300 flex items-start"
                  >
                    <span className={`w-3 h-3 bg-gradient-to-r ${solution.color} rounded-full mt-2 mr-3 flex-shrink-0`}></span>
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Benefits */}
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <h3 className="text-2xl font-bold text-purple-400 mb-4">Benefits</h3>
              <ul className="space-y-3">
                {solution.benefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                    className="text-gray-300 flex items-start"
                  >
                    <span className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    {benefit}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Technologies & Process */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Technologies */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/20"
          >
            <div className="flex items-center mb-6">
              <Code className="h-8 w-8 text-cyan-400 mr-3" />
              <h3 className="text-3xl font-bold text-white">Technologies Used</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {solution.technologies.map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-xl p-3 border border-cyan-400/30"
                >
                  <span className="text-gray-300 text-sm">{tech}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Process */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/20"
          >
            <div className="flex items-center mb-6">
              <Zap className="h-8 w-8 text-purple-400 mr-3" />
              <h3 className="text-3xl font-bold text-white">Our Process</h3>
            </div>
            <div className="space-y-4">
              {solution.process.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center space-x-4"
                >
                  <div className={`w-8 h-8 bg-gradient-to-r ${solution.color} rounded-full flex items-center justify-center text-white font-bold text-sm`}>
                    {index + 1}
                  </div>
                  <span className="text-gray-300">{step}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center bg-gradient-to-r from-cyan-400/20 to-purple-500/20 backdrop-blur-lg rounded-3xl p-12 border border-cyan-400/30"
        >
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how our {solution.title.toLowerCase()} solutions can transform your business and help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`bg-gradient-to-r ${solution.color} text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition-all duration-300`}
              >
                Schedule Consultation
              </motion.button>
            </Link>
            <Link to="/solutions">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-white/20 to-white/10 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg transition-all duration-300 border border-white/30"
              >
                View All Solutions
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SolutionDetail;