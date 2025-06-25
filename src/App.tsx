import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { motion } from 'framer-motion';

// Layout
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Solutions from './pages/Solutions';
import SolutionDetail from './pages/SolutionsDetail';
import Apps from './pages/Apps';
import Shop from './pages/Shop';
import About from './pages/About';
import Blog from './pages/Blog';
import BlogDetails from './pages/BlogDetails';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navbar />

        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Routes>
            <Route path="/" element={<Home />} />

            {/* Products */}
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetail />} />

            
            {/* Blogs */}
             <Route path="/blog" element={<Blog />} />
             <Route path="/blog/:id" element={<BlogDetails />} />


            {/* Solutions */}
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/solutions/:id" element={<SolutionDetail />} />

            {/* Other Pages */}
            <Route path="/apps" element={<Apps />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </motion.main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;