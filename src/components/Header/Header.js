import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './style.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation items
  const navItems = [
    { name: 'Home', href: '#home', icon: '🏠' },
    { name: 'About', href: '#about', icon: '👨‍💻' },
    { name: 'Services', href: '#services', icon: '⚡' },
    { name: 'Projects', href: '#projects', icon: '🚀' },
    { name: 'Contact', href: '#contact', icon: '📧' }
  ];

  // Animation variants
  const headerVariants = {
    initial: { 
      y: -100,
      opacity: 0 
    },
    animate: { 
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const logoVariants = {
    initial: { 
      x: -50, 
      opacity: 0,
      rotate: -180 
    },
    animate: { 
      x: 0, 
      opacity: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        type: "spring",
        stiffness: 100
      }
    },
    hover: {
      scale: 1.05,
      rotate: [0, -5, 5, 0],
      transition: {
        duration: 0.4
      }
    }
  };

  const navItemVariants = {
    initial: { 
      y: -20, 
      opacity: 0 
    },
    animate: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.1 * i,
        duration: 0.5,
        ease: "easeOut"
      }
    }),
    hover: {
      y: -3,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    }
  };

  const mobileMenuVariants = {
    closed: {
      x: "100%",
      opacity: 0
    },
    open: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    },
    exit: {
      x: "100%",
      opacity: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  const menuButtonVariants = {
    closed: { rotate: 0 },
    open: { rotate: 180 }
  };

  return (
    <>
      <motion.header
        className={`header ${isScrolled ? 'scrolled' : ''}`}
        variants={headerVariants}
        initial="initial"
        animate="animate"
      >
        <div className="header-container">
          {/* Animated Logo */}
          <motion.div 
            className="logo-wrapper"
            variants={logoVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
          >
            <div className="logo">
              <motion.span 
                className="logo-icon"
                animate={{ 
                  rotate: [0, 360],
                }}
                transition={{ 
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                ⚡
              </motion.span>
              <span className="logo-text">
                <span className="logo-main">DevCraft</span>
                <motion.span 
                  className="logo-sub"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  Solutions
                </motion.span>
              </span>
            </div>
            {/* Animated typing effect */}
            <motion.div 
              className="logo-tagline"
              initial={{ width: 0 }}
              animate={{ width: "auto" }}
              transition={{ delay: 1, duration: 1 }}
            >
              <span className="typing-text">Building Excellence</span>
            </motion.div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="nav-desktop">
            <ul className="nav-list">
              {navItems.map((item, index) => (
                <motion.li
                  key={item.name}
                  custom={index}
                  variants={navItemVariants}
                  initial="initial"
                  animate="animate"
                  whileHover="hover"
                >
                  <motion.a 
                    href={item.href}
                    className={`nav-link ${activeLink === item.name ? 'active' : ''}`}
                    onClick={() => setActiveLink(item.name)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.span 
                      className="nav-icon"
                      initial={{ rotate: 0 }}
                      whileHover={{ 
                        rotate: [0, -10, 10, 0],
                        transition: { duration: 0.4 }
                      }}
                    >
                      {item.icon}
                    </motion.span>
                    <span className="nav-text">{item.name}</span>
                    <motion.span 
                      className="nav-underline"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </nav>

          {/* CTA Button */}
          <motion.div 
            className="header-cta"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, type: "spring" }}
          >
            <motion.button 
              className="hire-btn"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(102, 126, 234, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="btn-text">Start Project</span>
              <motion.span 
                className="btn-arrow"
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
              >
                →
              </motion.span>
            </motion.button>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button 
            className="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            variants={menuButtonVariants}
            animate={isMobileMenuOpen ? "open" : "closed"}
            whileTap={{ scale: 0.9 }}
          >
            <motion.div className="hamburger">
              <motion.span 
                className="line"
                animate={isMobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              />
              <motion.span 
                className="line"
                animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              />
              <motion.span 
                className="line"
                animate={isMobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              />
            </motion.div>
          </motion.button>
        </div>

        {/* Progress Bar */}
        <motion.div 
          className="header-progress"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav 
            className="nav-mobile"
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="exit"
          >
            <ul className="mobile-nav-list">
              {navItems.map((item, index) => (
                <motion.li
                  key={item.name}
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 50, opacity: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <a 
                    href={item.href}
                    onClick={() => {
                      setActiveLink(item.name);
                      setIsMobileMenuOpen(false);
                    }}
                    className="mobile-nav-link"
                  >
                    <span className="nav-icon">{item.icon}</span>
                    <span>{item.name}</span>
                  </a>
                </motion.li>
              ))}
              <motion.li
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mobile-cta"
              >
                <button className="mobile-hire-btn">Start Project</button>
              </motion.li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;