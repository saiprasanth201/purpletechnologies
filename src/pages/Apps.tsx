import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Download, Star, Users, Award } from 'lucide-react';

const Apps = () => {
  const apps = [
    {
      icon: GraduationCap,
      title: 'TechHub',
      description: 'TechHub is an online education platform designed to equip students with practical skills in trending technologies.',
      image: 'https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-blue-400 to-cyan-500',
      downloadLink: 'https://play.google.com/store/apps/details?id=co.lenord.fqicu',
      courses: [
        'Artificial Intelligence (AI) & Machine Learning (ML)',
        'Internet of Things (IoT)',
        'Embedded Systems & VLSI',
        'Cybersecurity',
        'Full Stack Development',
        'Python, DevOps, AR/VR, and more'
      ],
      features: [
        'Interactive Learning: Engage in hands-on projects, live sessions, and collaborative learning experiences',
        'Expert Instructors: Learn from industry professionals with extensive experience',
        'Flexible Scheduling: Learn at your own pace with on-demand content'
      ],
      benefits: [
        'Acquire in-demand skills that enhance employability',
        'Flexible learning options to fit your schedule',
        'Access to a community of learners and professionals for networking opportunities'
      ]
    },
    {
      icon: MapPin,
      title: 'Locate360',
      description: 'Locate360 is our comprehensive tracking solution designed to provide real-time tracking for various applications.',
      image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-green-400 to-emerald-500',
      downloadLink: 'https://play.google.com/store/apps/details?id=com.tracking.locatets',
      trackingTypes: [
        'Asset Tracking: Monitor the location and status of valuable assets in real-time',
        'Vehicle Tracking: Keep tabs on your fleet or personal vehicles for enhanced security',
        'Pet Tracking: Ensure the safety of your pets with GPS-enabled tracking devices',
        'Human Tracking: Monitor individuals, especially in situations requiring safety and security',
        'Animal Tracking: Manage wildlife or livestock with specialized tracking solutions'
      ],
      features: [
        'Real-time GPS tracking with high accuracy',
        'Geo-fencing alerts for unauthorized movement',
        'Historical data analysis and reporting',
        'Multi-platform support (iOS, Android, Web)'
      ],
      benefits: [
        'Real-time location updates for peace of mind',
        'Geo-fencing alerts for unauthorized movement',
        'Historical data analysis for better resource management'
      ]
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
            Our <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Apps</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            At Purple Techno Solutions, we are proud to offer innovative applications that empower users with cutting-edge technology solutions.
          </p>
        </motion.div>

        <div className="space-y-20">
          {apps.map((app, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl overflow-hidden border border-white/20"
            >
              <div className={`grid grid-cols-1 lg:grid-cols-2 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className={`relative h-96 lg:h-auto ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}
                >
                  <img
                    src={app.image}
                    alt={app.title}
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-r ${app.color} opacity-30`}></div>
                  <div className={`absolute top-6 left-6 w-16 h-16 bg-gradient-to-r ${app.color} rounded-2xl flex items-center justify-center backdrop-blur-sm`}>
                    <app.icon className="h-8 w-8 text-white" />
                  </div>
                </motion.div>

                <div className={`p-8 lg:p-12 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    <h2 className="text-4xl font-bold text-white mb-4">{app.title}</h2>
                    <p className="text-lg text-gray-300 mb-8 leading-relaxed">{app.description}</p>

                    {app.courses && (
                      <div className="mb-8">
                        <h3 className="text-2xl font-semibold text-cyan-400 mb-4">Diverse Course Offerings:</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {app.courses.map((course, idx) => (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, scale: 0.9 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.5, delay: idx * 0.1 }}
                              className="bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-lg p-3 border border-cyan-400/30"
                            >
                              <span className="text-gray-300 text-sm">{course}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    )}

                    {app.trackingTypes && (
                      <div className="mb-8">
                        <h3 className="text-2xl font-semibold text-green-400 mb-4">Tracking Solutions:</h3>
                        <div className="space-y-3">
                          {app.trackingTypes.map((type, idx) => (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.5, delay: idx * 0.1 }}
                              className="flex items-start space-x-3"
                            >
                              <span className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></span>
                              <span className="text-gray-300">{type}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <div>
                        <h4 className="text-lg font-semibold text-purple-400 mb-3">Key Features:</h4>
                        <ul className="space-y-2">
                          {app.features.map((feature, idx) => (
                            <li key={idx} className="text-gray-300 text-sm flex items-start">
                              <Star className="h-4 w-4 text-purple-400 mt-0.5 mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-pink-400 mb-3">Benefits:</h4>
                        <ul className="space-y-2">
                          {app.benefits.map((benefit, idx) => (
                            <li key={idx} className="text-gray-300 text-sm flex items-start">
                              <Award className="h-4 w-4 text-pink-400 mt-0.5 mr-2 flex-shrink-0" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <motion.a
                        href={app.downloadLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`bg-gradient-to-r ${app.color} text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2`}
                      >
                        <Download className="h-5 w-5" />
                        <span>Download App</span>
                      </motion.a>
                    </div>
                  </motion.div>
                </div>
              </div>
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
            Download Our Apps Today!
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            For more information or to download our applications, please visit the respective app stores or contact us for assistance. Harness the power of technology with TechHub and Locate360!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <motion.a
              href="https://play.google.com/store/apps/details?id=co.lenord.fqicu"
              target="_blank"
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/20 text-center"
            >
              <Users className="h-12 w-12 text-cyan-400 mx-auto mb-3" />
              <h3 className="text-xl font-bold text-white mb-2">TechHub</h3>
              <p className="text-gray-300 text-sm mb-4">Start your tech learning journey</p>
              <span className="bg-gradient-to-r from-blue-400 to-cyan-500 text-white px-4 py-2 rounded-lg text-sm font-semibold inline-block">
                Join Now
              </span>
            </motion.a>

            <motion.a
              href="https://play.google.com/store/apps/details?id=com.tracking.locatets"
              target="_blank"
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/20 text-center"
            >
              <MapPin className="h-12 w-12 text-green-400 mx-auto mb-3" />
              <h3 className="text-xl font-bold text-white mb-2">Locate360</h3>
              <p className="text-gray-300 text-sm mb-4">Track everything in real-time</p>
              <span className="bg-gradient-to-r from-green-400 to-emerald-500 text-white px-4 py-2 rounded-lg text-sm font-semibold inline-block">
                Get Started
              </span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Apps;
