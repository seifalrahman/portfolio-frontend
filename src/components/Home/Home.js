
import React from 'react';
import { motion } from 'framer-motion';
import './style.css';

const Home = () => {
  return (
    <section className="home">
      <motion.div
        className="hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1>Welcome to My Portfolio</h1>
        <p>I am a software solutions company that specializes in creating beautiful and functional websites.</p>
      </motion.div>
    </section>
  );
};

export default Home;
