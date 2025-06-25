import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'Apps', path: '/apps' },
    { name: 'Shop', path: '/shop' },
    { name: 'About Us', path: '/about' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact Us', path: '/contact' }
  ];

  const productLinks = [
    { name: 'Car GPS Tracker', category: 'car-gps' },
    { name: 'Bike GPS Tracker', category: 'bike-gps' },
    { name: 'Bus Tracking System', category: 'bus-tracking' },
    { name: 'Truck Tracking System', category: 'truck-tracking' },
    { name: 'Video Telematics', category: 'video-telematics' },
    { name: 'Asset Tracking', category: 'asset-tracking' },
    { name: 'Fuel Monitoring', category: 'fuel-monitoring' },
    { name: 'E-Lock with GPS Tracker', category: 'e-lock' },
    { name: 'Accessories', category: 'accessories' },
    { name: 'Wifi Based Tracking', category: 'wifi-tracking' },
    { name: 'Electric Vehicle', category: 'ev-tracking' }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-gray-900/95 backdrop-blur-lg border-b border-purple-500/20' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 lg:py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-4 group">
            <div className="relative w-14 h-14">
              <img
                src="https://purpletechnosolutions.com/content/raw/img/logo.png"
                alt="Logo"
                className="w-full h-full object-contain rounded-lg shadow-md"
              />
              <div className="absolute inset-0 bg-purple-400 blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-300 rounded-lg" />
            </div>
            <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent whitespace-nowrap">
              Purple Techno Solutions
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex space-x-6 text-base">
            {navItems.map((item) =>
              item.name === 'Products' ? (
                <div key={item.name} className="relative group">
                  {/* Parent link */}
                  <Link
                    to={item.path}
                    className={`relative py-2 px-3 transition-all duration-300 flex items-center ${
                      location.pathname === item.path ? 'text-purple-400' : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    {item.name}
                    <span
                      className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 transform transition-transform duration-300 ${
                        location.pathname === item.path ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                      }`}
                    />
                  </Link>

                  {/* Dropdown - only shown on hover of parent */}
                  <div className="absolute top-full left-0 mt-2 w-64 bg-slate-800 border border-white/10 rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                    {productLinks.map((product) => (
                      <button
                        key={product.category}
                        onClick={() => navigate('/products?category=${product.category}')}
                        className="w-full text-left block px-4 py-2 text-sm text-gray-300 hover:bg-purple-500/20 hover:text-white rounded-md"
                      >
                        {product.name}
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`relative py-2 px-3 transition-all duration-300 group ${
                    location.pathname === item.path ? 'text-purple-400' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {item.name}
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 transform transition-transform duration-300 ${
                    location.pathname === item.path ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`} />
                </Link>
              )
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-gray-800 transition-colors duration-300"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-3 space-y-2 border-t border-gray-800">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block py-2.5 px-4 rounded-lg transition-all duration-300 ${
                  location.pathname === item.path
                    ? 'text-purple-400 bg-purple-400/10'
                    : 'text-gray-300 hover:text-white hover:bg-gray-800'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;