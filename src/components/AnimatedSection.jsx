import React from 'react';
import { motion } from 'framer-motion';

const AnimatedSection = ({ children, id, className }) => {
  return (
    <motion.section 
      id={id}
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.section>
  );
}

export default AnimatedSection;
