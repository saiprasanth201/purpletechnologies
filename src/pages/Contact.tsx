import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, Facebook, Linkedin, Instagram } from 'lucide-react';
import { SiYoutube } from 'react-icons/si';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: { target: { name: unknown; value: unknown; }; }) => {
    setFormData({
      ...formData,
      [e.target.name as string]: e.target.value
    });
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 93469 34969',
      link: 'tel:+919346934969',
      color: 'from-green-400 to-emerald-500'
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'info@purpletechnosolutions.in',
      link: 'mailto:info@purpletechnosolutions.in',
      color: 'from-blue-400 to-cyan-500'
    },
    {
      icon: MapPin,
      title: 'Address',
      value: 'Mullapudi Venkateswara Rao St, Labbipet, Vijayawada, AP 520010',
      link: 'https://www.google.com/maps/place/Purple+Technologies/@16.5012862,80.6387101,19.26z/data=!4m15!1m8!3m7!1s0x3a35eff9482d944b:0x939b7e84ab4a0265!2sVijayawada,+Andhra+Pradesh!3b1!8m2!3d16.5061743!4d80.6480153!16zL20vMDM4NWs3!3m5!1s0x3a35faaf6003112d:0xb876e5b253c85713!8m2!3d16.5014281!4d80.6395267!16s%2Fg%2F11b7y76rvv?entry=ttu&g_ep=EgoyMDI1MDYxMS4wIKXMDSoASAFQAw%3D%3D',
      color: 'from-purple-400 to-pink-500'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      value: 'Mon-Fri: 9AM-6PM, Sat: 10AM-4PM, Sun: Closed',
      link: undefined,
      color: 'from-orange-400 to-red-500'
    }
  ];

  const socialLinks = [
    { icon: Facebook, link: 'https://www.facebook.com/ptsvij', color: 'from-blue-600 to-blue-500' },
    { icon: Linkedin, link: 'https://linkedin.com/company/purpletechnosolutions', color: 'from-blue-700 to-blue-600' },
    { icon: Instagram, link: 'https://instagram.com/purpletechnosolutions', color: 'from-pink-500 to-purple-500' },
    { icon: SiYoutube, link: 'https://www.youtube.com/@PurpleAILabs', color: 'from-red-600 to-pink-500' }
  ];

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Contact <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Us</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We'd love to hear from you! Whether you have questions about our products, services, or partnership opportunities, our team is here to assist you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <h2 className="text-3xl font-bold text-white mb-8">Get in Touch</h2>
            <div className="space-y-6 mb-12">
              {contactInfo.map((info, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }} whileHover={{ scale: 1.02 }} className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${info.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <info.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white mb-2">{info.title}</h3>
                      {info.link ? (
                        <a href={info.link} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-gray-300">{info.value}</p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}>
              <h3 className="text-2xl font-bold text-white mb-6">Follow Us</h3>
              <p className="text-gray-300 mb-6">Stay connected with us on social media for the latest updates.</p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a key={index} href={social.link} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.2, rotate: 10 }} whileTap={{ scale: 0.9 }} className={`w-12 h-12 bg-gradient-to-r ${social.color} rounded-xl flex items-center justify-center hover:shadow-lg transition-all duration-300`}>
                    <social.icon className="h-6 w-6 text-white" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
            <h2 className="text-3xl font-bold text-white mb-8">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <input type="text" name="name" value={formData.name} onChange={handleInputChange} required placeholder="Your full name" className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none" />
              <input type="email" name="email" value={formData.email} onChange={handleInputChange} required placeholder="your.email@example.com" className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none" />
              <textarea name="message" value={formData.message} onChange={handleInputChange} required rows={6} placeholder="Tell us about your project or inquiry..." className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none resize-none" />
              <button type="submit" className="w-full bg-gradient-to-r from-cyan-400 to-purple-500 text-white py-4 px-6 rounded-xl font-semibold flex items-center justify-center space-x-2 hover:shadow-2xl transition-all duration-300">
                <Send className="h-5 w-5" />
                <span>Send Message</span>
              </button>
            </form>
            <p className="text-gray-400 text-sm text-center mt-6">We'll get back to you within 24 hours!</p>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mt-20 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-3xl p-8 border border-purple-400/30 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Visit Our Office</h2>
          <p className="text-lg text-gray-300 mb-6">Feel free to drop by our office during business hours. We look forward to meeting you!</p>
          <button onClick={() => window.open(contactInfo[2].link, '_blank')} className="bg-gradient-to-r from-cyan-400 to-purple-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition-all duration-300 inline-flex items-center space-x-2">
            <MapPin className="h-5 w-5" />
            <span>Get Directions</span>
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
