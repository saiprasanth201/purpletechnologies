import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="col-span-1 md:col-span-2"
          >
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/image.png" 
                alt="Purple Techno Solutions Logo" 
                className="h-8 w-8 rounded-full object-cover"
              />
              <span className="text-xl font-bold text-white">
                Purple Techno Solutions
              </span>
            </div>
            <p className="text-gray-300 mb-4">
              Your one-stop end-to-end IoT product development company. We bring your IoT ideas to life, from concept to final product.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: Facebook, link: 'https://www.facebook.com/ptsvij' },
                { icon: Linkedin, link: 'https://linkedin.com/company/purpletechnosolutions' },
                { icon: Instagram, link: 'https://instagram.com/purpletechnosolutions' },
                {
                  icon: MapPin,
                  link: 'https://www.google.com/maps/place/Purple+Technologies/@16.5012862,80.6387101,19.26z/data=!4m15!1m8!3m7!1s0x3a35eff9482d944b:0x939b7e84ab4a0265!2sVijayawada,+Andhra+Pradesh!3b1!8m2!3d16.5061743!4d80.6480153!16zL20vMDM4NWs3!3m5!1s0x3a35faaf6003112d:0xb876e5b253c85713!8m2!3d16.5014281!4d80.6395267!16s%2Fg%2F11b7y76rvv?entry=ttu&g_ep=EgoyMDI1MDYxMS4wIKXMDSoASAFQAw%3D%3D'
                }
              ].map(({ icon: Icon, link }, index) => (
                <motion.a
                  key={index}
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full flex items-center justify-center hover:shadow-lg transition-all duration-300"
                >
                  <Icon className="h-5 w-5 text-white" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-4 text-cyan-400">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: 'Home', path: '/' },
                { name: 'Products', path: '/products' },
                { name: 'Solutions', path: '/solutions' },
                { name: 'Apps', path: '/apps' }
              ].map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.path} 
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-lg font-semibold mb-4 text-cyan-400">Contact Info</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-purple-400" />
                <span className="text-gray-300">+91 93469 34969</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-purple-400" />
                <span className="text-gray-300">info@purpletechnosolutions.in</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-purple-400" />
                <span className="text-gray-300">Vijayawada, Andhra Pradesh</span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="border-t border-gray-700 mt-8 pt-8 text-center"
        >
          <p className="text-gray-400">
            © 2025 Purple Techno Solutions. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
