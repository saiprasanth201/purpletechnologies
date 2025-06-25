/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';
import { Target, Eye, Users, Award, Lightbulb, Heart, Phone, Mail } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'End-to-End Solutions',
      description: 'We offer comprehensive IoT solutions, from concept development to deployment and support.',
      color: 'from-blue-400 to-cyan-500'
    },
    {
      icon: Users,
      title: 'Customized Approach',
      description: 'We understand that every project is unique. Our team collaborates closely with clients to develop tailored solutions.',
      color: 'from-green-400 to-emerald-500'
    },
    {
      icon: Award,
      title: 'Commitment to Quality',
      description: 'We prioritize quality in every aspect of our work, ensuring that our products and services exceed client expectations.',
      color: 'from-purple-400 to-pink-500'
    }
  ];

  const teamMembers = [
  {
    name: 'KHADAR BABA SHAIK',
    role: 'CEO & Founder',
    description: 'Cloud Developer,Visionary leader driving innovation in IoT and embedded systems',
    image: '',
    expertise: 'Leadership & Embedded Systems'
  },
  {
    name: 'MOBINA MD',
    role: 'Managing Director',
    description: 'Strategic operations and business development expert',
    image: '',
    expertise: 'Operations & Business Strategy'
  },
  {
    name: 'ABDUL SHAIK',
    role: 'Full Stack Developer',
    description: 'Expert in modern web technologies and system architecture',
    image: '',
    expertise: 'Web Development & System Design'
  },
  {
     name: 'BAVIRISETTI RESHAMA',
      role: 'PCB Design',
      description: 'Specialized in circuit design and hardware optimization',
      gradient: 'from-orange-400 to-pink-500'

  },
  {
    name: 'S RAMAKRISHNA',
      role: 'Backend Developer',
      description: 'Backend systems and database architecture specialist',
      gradient: 'from-indigo-400 to-purple-500'

  },
  {
    name: 'N MANIKANTA',
      role: 'Full Stack Developer Python Developer',
      description: 'Python development and machine learning integration',
      gradient: 'from-teal-400 to-blue-500'
  },
  {
   name: 'MUNNA',
      role: 'IOT Developer',
      description: 'Internet of Things solutions and device connectivity',
      gradient: 'from-purple-400 to-pink-500'

  },
  {
     name: 'A REVANTH',
      role: 'AWS Developer & Manager',
      description: 'Cloud infrastructure and DevOps automation expert',
      gradient: 'from-yellow-400 to-orange-500'

  },
   {
     name: 'SK FAZUL REHMAN',
      role: 'Embedded & IOT Developer',
      description: 'Cloud infrastructure and DevOps automation expert',
      gradient: 'from-yellow-400 to-orange-500'

  },
   {
     name: 'SOWJANYA',
      role: 'IOT Developer',
      description: 'Cloud infrastructure and DevOps automation expert',
      gradient: 'from-yellow-400 to-orange-500'

  },
   {
     name: 'P SUDHKAR',
      role: 'Business Development Manager',
      description: 'Cloud infrastructure and DevOps automation expert',
      gradient: 'from-yellow-400 to-orange-500'

  },
   {
     name: 'BHAVANA',
      role: 'IOT Developer',
      description: 'Cloud infrastructure and DevOps automation expert',
      gradient: 'from-yellow-400 to-orange-500'

  },

];
const publiclogos = [

  "public/srmap.png",
  "public/Ramachandra.png",
  "public/VignansLara.png",
  "public/srivasavi.png",
  "public/vignans.png",
   "public/vitap-removebg-preview.png",
  "public/vignansNirula.png",
  "public/vishnu.png",
  "public/prodigy.png",
  "public/eswar.png",
  "public/Gomathi.png",
  "public/IMAGE SIMS.png"
];

const publiclogos1 = [

  "public/pictor.png",
  "public/minemagma.png",
  "public/sarman.png",
  "public/infotech.png",
  
   
];

const publiclogos2 = [

  "public/MICROSOFT.png",
  "public/ACEBOT.png",
  "public/WEMAKE.png",
  "public/image-removebg-preview (6).png",
  "public/aws2.png",
   
  
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
            About <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Us</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Welcome to Purple Techno Solutions, your one-stop solution for end-to-end IoT product development.
          </p>
        </motion.div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center mb-6">
              <Target className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Our Mission</h2>
            <p className="text-gray-300 leading-relaxed">
              To simplify the process of developing and implementing IoT technologies, making them accessible to everyone.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center mb-6">
              <Eye className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Our Vision</h2>
            <p className="text-gray-300 leading-relaxed">
              To enhance everyday life and business operations through IoT innovations across sectors.
            </p>
          </motion.div>
        </div>

        {/* Parent Company */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-3xl p-8 border border-purple-400/30 mb-20 text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Our Parent Company: <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Purple Technologies</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            We are a proud subsidiary of Purple Technologies, enabling innovation and solutions in the IoT space.
          </p>
        </motion.div>

        {/* Why Choose Us */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Why <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Choose Us?</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-cyan-400/50 text-center"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-white text-center mb-6">
            Our <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Team</span>
          </h2>
          <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            Meet our passionate professionals with expertise across IoT, software, hardware, and product innovation.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="bg-white/10 p-6 rounded-xl text-white text-center border border-white/20 backdrop-blur"
                whileHover={{ scale: 1.05 }}
              >
                <img src={member.image} alt={member.name} className="w-24 h-24 rounded-full object-cover mx-auto mb-4 border-4 border-purple-500" />
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-sm text-gray-300">{member.role}</p>
                <p className="mt-2 text-sm text-gray-400">{member.expertise}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Us */}

        {/* Contact Info */}
         <h2 className="text-4xl font-bold text-white text-center mb-6">
            Esteemed <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Clients</span>
          </h2>

          <Marquee speed={60} gradient={false} className="py-6 bg-white/10 rounded-xl my-8">
{publiclogos1.map((url, i) => (
  <img key={i} src={url} className="h-20 mx-20" />
))}
</Marquee>

         <h2 className="text-4xl font-bold text-white text-center mb-6">
           Global <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Partners</span>
          </h2>

          <Marquee speed={60} gradient={false} className="py-6 bg-white/10 rounded-xl my-8">
{publiclogos2.map((url, i) => (
  <img key={i} src={url} className="h-20 mx-10" />
))}
</Marquee>

 <h2 className="text-4xl font-bold text-white text-center mb-6">
            Educational <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Clients</span>
          </h2>

<Marquee speed={60} gradient={false} className="py-6 bg-white/10 rounded-xl my-8">
{publiclogos.map((url, i) => (
  <img key={i} src={url} className="h-20 mx-10" />
))}
</Marquee>

  <motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  className="text-center bg-gradient-to-r from-cyan-400/20 to-purple-500/20 backdrop-blur-lg rounded-3xl p-12 border border-cyan-400/30 mt-16"
>

          <h2 className="text-4xl font-bold text-white mb-6">Get in Touch</h2>
          <p className="text-gray-300 mb-4 flex items-center justify-center gap-2">
            <Phone className="w-5 h-5" /> 9346934699, 9618743699
          </p>
          <p className="text-gray-300 mb-4 flex items-center justify-center gap-2">
            <Mail className="w-5 h-5" /> purpletechnosolutions@gmail.com, support@purpletechnologies.in
          </p>
          <a
            href="/public/Copy of Company Profile Presentation.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-8 bg-gradient-to-r from-cyan-400 to-purple-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition-all duration-300"
          >
            View Company Profile (PDF)
          </a>
        </motion.div>

      </div>
    </div>
  );
};

export default About;