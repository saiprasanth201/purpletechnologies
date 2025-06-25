import React from 'react';
import Hero from '../components/Hero';
import AnimatedSection from '../components/AnimatedSection';
import {
  Lightbulb,
  DollarSign,
  Users,
  Cpu,
  Smartphone,
  Home as HomeIcon,
  Building2,
} from 'lucide-react';

const Home = () => {
  const highlights = [
    {
      icon: Lightbulb,
      title: 'White Label Solutions',
      description: 'Complete IoT solutions ready for your brand',
    },
    {
      icon: DollarSign,
      title: 'Low-Cost Prototype Development',
      description: 'Affordable prototyping to validate your ideas',
    },
    {
      icon: Users,
      title: 'Your Idea, Our Expertise',
      description: 'Collaborative approach to bring innovations to life',
    },
  ];

  const features = [
    {
      icon: Cpu,
      title: 'Expertise',
      description: 'Deep technical knowledge in IoT ecosystem',
    },
    {
      icon: Smartphone,
      title: 'Flexibility',
      description: 'Adaptable solutions for diverse requirements',
    },
    {
      icon: DollarSign,
      title: 'Affordability',
      description: 'Cost-effective development without compromising quality',
    },
  ];

  const solutions = [
    {
      icon: Smartphone,
      title: 'Mobile & Web Development',
      description: 'Custom applications for seamless IoT device management',
    },
    {
      icon: Building2,
      title: 'Smart Cities',
      description: 'Connected infrastructure for modern urban living',
    },
    {
      icon: HomeIcon,
      title: 'Smart Home',
      description: 'Intelligent automation for residential spaces',
    },
  ];

  return (
    <div className="pt-16">
      <Hero />

      {/* Highlights */}
      <AnimatedSection className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Why Choose Purple Techno?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We're your trusted partner in IoT innovation, offering end-to-end solutions that transform ideas into reality.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <AnimatedSection key={index} className="group">
                  <div className="relative p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-purple-500/20 hover:border-purple-400/40 transition-all duration-500 hover:scale-105">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-cyan-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative z-10">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <Icon size={32} className="text-white" />
                      </div>
                      <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-purple-300 transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </AnimatedSection>

      {/* Why Choose Us */}
      <AnimatedSection className="py-20 bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Excellence in Every Project
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Our commitment to quality, innovation, and customer satisfaction sets us apart in the IoT development landscape.
              </p>

              <div className="space-y-6">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div key={index} className="flex items-start space-x-4 group">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center border border-purple-400/30 group-hover:border-purple-400/60 transition-colors duration-300">
                        <Icon size={24} className="text-purple-400" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                        <p className="text-gray-300">{feature.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-3xl blur-3xl"></div>
              <img
                src="https://i.pinimg.com/736x/cd/b2/2f/cdb22f16d269a818adca408511adc0f1.jpg"
                alt="IoT Development"
                className="relative rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Solutions */}
      <AnimatedSection className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Our Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive IoT solutions tailored for diverse industries and applications.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => {
              const Icon = solution.icon;
              return (
                <AnimatedSection key={index} className="group cursor-pointer">
                  <div className="relative p-8 bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl border border-gray-700 hover:border-purple-400/50 transition-all duration-500 hover:scale-105 min-h-[340px] flex flex-col justify-center text-center">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-cyan-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative z-10 flex flex-col items-center">
                      <div className="w-20 h-20 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-3xl flex items-center justify-center mb-6 border border-purple-400/30 group-hover:border-purple-400/60 transition-colors duration-300">
                        <Icon size={40} className="text-purple-400" />
                      </div>
                      <h3 className="text-2xl font-bold mb-4 text-white">{solution.title}</h3>
                      <p className="text-gray-300 leading-relaxed">{solution.description}</p>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </AnimatedSection>

      {/* CTA */}
      <AnimatedSection className="py-20 bg-gradient-to-r from-purple-900/20 via-gray-900 to-cyan-900/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Want to learn more?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Explore our full range of services and discover how we can help bring your IoT vision to life.
          </p>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default Home;
