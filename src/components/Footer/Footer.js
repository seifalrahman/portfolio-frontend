
import React from 'react';
import { motion } from 'framer-motion';
import './style.css';

const Footer = () => {
  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="container">
        <p>&copy; 2025 My Portfolio</p>
      </div>
    </motion.footer>
  );
};

export default Footer;
