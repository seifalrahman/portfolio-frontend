import React from 'react';
import { motion } from 'framer-motion';
import './style.css';
// Add to imports
import ParticleBackground from './Particles';


const Home = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const floatingAnimation = {
    y: [0, -20, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <section className="home">
      {/* Hero Section */}
      <motion.div
        className="hero"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="hero-content">
          <motion.div 
            className="badge"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
          >
            <span>✨ Innovating Digital Solutions</span>
          </motion.div>

          <motion.h1 
            className="hero-title"
            variants={itemVariants}
          >
            We Build <span className="gradient-text">Digital Excellence</span>
          </motion.h1>

          <motion.p 
            className="hero-subtitle"
            variants={itemVariants}
          >
            Transforming ideas into powerful websites and desktop applications
            that drive your business forward
          </motion.p>

          <motion.div 
            className="cta-buttons"
            variants={itemVariants}
          >
            <motion.button
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Our Work
            </motion.button>
            <motion.button
              className="btn btn-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Animated Graphic */}
        <motion.div 
          className="hero-graphic"
          animate={floatingAnimation}
        >
          <motion.div 
            className="floating-card"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <div className="code-window">
              <div className="window-header">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <div className="code-content">
                <span className="code-line">{'<'}Building/{'>'}</span>
                <span className="code-line">Your Vision</span>
                <span className="code-line">{'<'}/Building{'>'}</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Services Section */}
      <motion.div 
        className="services-preview"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="section-title">What We Create</h2>
        <div className="services-grid">
          <motion.div 
            className="service-card"
            whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <motion.div 
              className="service-icon"
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              🌐
            </motion.div>
            <h3>Web Applications</h3>
            <p>Responsive, modern websites built with cutting-edge technologies</p>
            <motion.div 
              className="tech-stack"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <span className="tech-tag">React</span>
              <span className="tech-tag">Node.js</span>
              <span className="tech-tag">Next.js</span>
            </motion.div>
          </motion.div>

          <motion.div 
            className="service-card"
            whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <motion.div 
              className="service-icon"
              animate={{ rotate: [0, -5, 5, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: 1 }}
            >
              💻
            </motion.div>
            <h3>Desktop Applications</h3>
            <p>Powerful native applications for Windows, Mac, and Linux</p>
            <motion.div 
              className="tech-stack"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <span className="tech-tag">Electron</span>
              <span className="tech-tag">Python</span>
              <span className="tech-tag">C++</span>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Stats Section */}
      <motion.div 
        className="stats-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="stats-grid">
          <motion.div 
            className="stat-item"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", delay: 0.1 }}
          >
            <motion.h3
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              50+
            </motion.h3>
            <p>Projects Delivered</p>
          </motion.div>
          <motion.div 
            className="stat-item"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", delay: 0.2 }}
          >
            <motion.h3
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            >
              30+
            </motion.h3>
            <p>Happy Clients</p>
          </motion.div>
          <motion.div 
            className="stat-item"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", delay: 0.3 }}
          >
            <motion.h3
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            >
              5★
            </motion.h3>
            <p>Client Rating</p>
          </motion.div>
        </div>
      </motion.div>

      {/* Background Animation */}
      <div className="bg-animation">
        <motion.div 
          className="gradient-orb gradient-1"
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div 
          className="gradient-orb gradient-2"
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>
      <ParticleBackground />
    </section>
  );
};

export default Home;
