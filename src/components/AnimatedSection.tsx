import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedSectionProps {
  className?: string;
  children: React.ReactNode;
  animation?: string; 
  delay?: number;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ className, children }) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};


export default AnimatedSection;

