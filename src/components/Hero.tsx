import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [currentVideo, setCurrentVideo] = useState(0);

  const heroVideos = [
    // 'v1.mp4',
    // 'v2.mp4',
    'v8.mp4',
    'v11.mp4',
    'v5.mp4',
  ];

  const heroText = [
    {
      title1: 'One-Stop End-to-End IoT ',
      title2: 'Product Development',
      subtitle: 'Bringing intelligence to every corner of your home.'
    },
    // {
    //   title1: 'Industrial Automation',
    //   title2: 'IoT for Manufacturing',
    //   subtitle: 'Revolutionizing factories with real-time data.'
    // },
    {
      title1: 'AI ML Powered IoT',
      title2: 'Connected Automated Devices',
      subtitle: 'Improving lives with remote monitoring.'
    },
    // {
    //   title1: 'Embedded Systems Innovation',
    //   title2: '',
    //   subtitle: 'Maximizing  yield with smart sensors.'
    // },
    {
      title1: 'Robotics Management',
      title2: 'Track and Optimize',
      subtitle: 'Real-time vehicle tracking with IoT.'
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentVideo((prev) => (prev + 1) % heroVideos.length);
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background Videos */}
      <div className="absolute inset-0">
        {heroVideos.map((video, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentVideo ? 'opacity-100 z-0' : 'opacity-0 z-0'
            }`}
          >
            <video
              src={video}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-purple-900/60 to-cyan-900/60"></div>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center px-4 max-w-5xl mx-auto">
          <div className="mb-8 animate-pulse">
            <span className="inline-block px-4 py-2 bg-purple-500/20 border border-purple-400/30 rounded-full text-purple-300 text-sm font-medium backdrop-blur-sm">
              IoT Innovation Leaders
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="block bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent animate-pulse">
              {heroText[currentVideo].title1}
            </span>
            <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent mt-2">
              {heroText[currentVideo].title2}
            </span>
            <span className="block text-white mt-2">Company</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            {heroText[currentVideo].subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/products">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25">
                <span className="relative z-10">GET STARTED</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-8 w-8 text-purple-400" />
      </div>

      {/* Video Indicators */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {heroVideos.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentVideo(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentVideo
                ? 'bg-purple-400 scale-125'
                : 'bg-white/30 hover:bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
