import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './style.css';

const Footer = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [showEasterEgg, setShowEasterEgg] = useState(false);
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  // Track mouse for interactive effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    };

    const footer = document.querySelector('.footer');
    if (footer) {
      footer.addEventListener('mousemove', handleMouseMove);
      return () => footer.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  // Easter egg trigger
  useEffect(() => {
    if (clickCount >= 5) {
      setShowEasterEgg(true);
      setTimeout(() => {
        setShowEasterEgg(false);
        setClickCount(0);
      }, 3000);
    }
  }, [clickCount]);

  // Social links data
  const socialLinks = [
    { name: 'GitHub', icon: '🔗', url: '#', color: '#333' },
    { name: 'LinkedIn', icon: '💼', url: '#', color: '#0077b5' },
    { name: 'Twitter', icon: '🐦', url: '#', color: '#1da1f2' },
    { name: 'Discord', icon: '🎮', url: '#', color: '#7289da' },
    { name: 'YouTube', icon: '📺', url: '#', color: '#ff0000' }
  ];

  // Quick links data
  const quickLinks = [
    { title: 'Services', items: ['Web Development', 'App Development', 'UI/UX Design', 'Consulting'] },
    { title: 'Company', items: ['About Us', 'Portfolio', 'Team', 'Careers'] },
    { title: 'Resources', items: ['Blog', 'Documentation', 'Support', 'FAQ'] }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  const floatAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail('');
        setSubscribed(false);
      }, 3000);
    }
  };

  return (
    <>
      {/* Easter Egg Popup */}
      <AnimatePresence>
        {showEasterEgg && (
          <motion.div
            className="easter-egg"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, rotate: 180 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            🎮 Achievement Unlocked: Secret Finder! 🏆
          </motion.div>
        )}
      </AnimatePresence>

      <motion.footer
        className="footer"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {/* Animated Wave Top */}
        

        <div className="footer-container">
          {/* Main Footer Content */}
          <div className="footer-main">
            {/* Company Info Section */}
            <motion.div 
              className="footer-brand"
              variants={itemVariants}
            >
              <motion.div 
                className="footer-logo"
                animate={floatAnimation}
                onClick={() => setClickCount(prev => prev + 1)}
                whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                whileTap={{ scale: 0.9 }}
              >
                <span className="logo-icon-footer">🚀</span>
                <div className="logo-text-footer">
                  <span className="logo-main-footer">DevCraft</span>
                  <span className="logo-sub-footer">Solutions</span>
                </div>
              </motion.div>
              
              <motion.p 
                className="footer-description"
                variants={itemVariants}
              >
                Crafting digital experiences that push boundaries and exceed expectations. 
                Your vision, our code, endless possibilities.
              </motion.p>

              {/* Animated Stats */}
              <motion.div 
                className="footer-stats"
                variants={itemVariants}
              >
                <div className="stat-card">
                  <motion.span 
                    className="stat-number"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    100%
                  </motion.span>
                  <span className="stat-label">Satisfaction</span>
                </div>
                <div className="stat-card">
                  <motion.span 
                    className="stat-number"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  >
                    24/7
                  </motion.span>
                  <span className="stat-label">Support</span>
                </div>
              </motion.div>

              {/* Social Links with Gaming Effects */}
              <motion.div 
                className="social-links"
                variants={itemVariants}
              >
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    className="social-link"
                    style={{ '--hover-color': social.color }}
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: index * 0.1, type: "spring" }}
                    whileHover={{ 
                      scale: 1.2,
                      rotate: 360,
                      boxShadow: `0 0 20px ${social.color}`
                    }}
                    whileTap={{ scale: 0.8 }}
                  >
                    <span className="social-icon">{social.icon}</span>
                    <span className="social-tooltip">{social.name}</span>
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>

            {/* Quick Links Sections */}
            {quickLinks.map((section, sectionIndex) => (
              <motion.div 
                key={section.title}
                className="footer-section"
                variants={itemVariants}
              >
                <motion.h3 
                  className="footer-title"
                  animate={{ 
                    color: isHovering ? '#667eea' : '#fff',
                  }}
                >
                  {section.title}
                </motion.h3>
                <ul className="footer-links">
                  {section.items.map((item, index) => (
                    <motion.li 
                      key={item}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: (sectionIndex * 0.1) + (index * 0.05) }}
                    >
                      <motion.a 
                        href="#"
                        className="footer-link"
                        whileHover={{ 
                          x: 10,
                          color: '#667eea',
                          textShadow: '0 0 10px rgba(102, 126, 234, 0.5)'
                        }}
                      >
                        <motion.span 
                          className="link-arrow"
                          initial={{ opacity: 0, x: -5 }}
                          whileHover={{ opacity: 1, x: 0 }}
                        >
                          →
                        </motion.span>
                        {item}
                      </motion.a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}

            {/* Newsletter Section */}
            <motion.div 
              className="newsletter-section"
              variants={itemVariants}
            >
              <motion.h3 
                className="footer-title"
                animate={{ 
                  textShadow: isHovering ? '0 0 20px rgba(102, 126, 234, 0.5)' : 'none'
                }}
              >
                Level Up Your Inbox
              </motion.h3>
              <p className="newsletter-text">Get the latest updates and exclusive content!</p>
              
              <form onSubmit={handleSubscribe} className="newsletter-form">
                <motion.div 
                  className="input-wrapper"
                  whileHover={{ scale: 1.02 }}
                >
                  <input
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="newsletter-input"
                  />
                  <motion.button
                    type="submit"
                    className="newsletter-btn"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    animate={subscribed ? {
                      backgroundColor: '#27c93f',
                      scale: [1, 1.2, 1]
                    } : {}}
                  >
                    {subscribed ? '✓' : '🚀'}
                  </motion.button>
                </motion.div>
                {subscribed && (
                  <motion.p 
                    className="success-message"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    🎉 Welcome to the crew!
                  </motion.p>
                )}
              </form>

              {/* Fun Gaming Elements */}
              <motion.div 
                className="power-ups"
                variants={itemVariants}
              >
                <span className="power-up">⚡ Fast Delivery</span>
                <span className="power-up">🛡️ Secure Code</span>
                <span className="power-up">🎯 Pixel Perfect</span>
              </motion.div>
            </motion.div>
          </div>

          {/* Bottom Bar */}
          <motion.div 
            className="footer-bottom"
            variants={itemVariants}
          >
            <div className="footer-bottom-content">
              <motion.p 
                className="copyright"
                animate={{ 
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                }}
                transition={{ duration: 5, repeat: Infinity }}
              >
                © 2025 DevCraft Solutions | Powered by 
                <span className="heart">❤️</span> and 
                <span className="coffee">☕</span>
              </motion.p>
              
              <div className="footer-badges">
                <motion.span 
                  className="badge"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                                    🏆 Award Winner
                </motion.span>
                <motion.span 
                  className="badge"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                >
                  ⭐ 5.0 Rating
                </motion.span>
                <motion.span 
                  className="badge"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  🚀 Fast & Reliable
                </motion.span>
              </div>

              <div className="legal-links">
                <a href="#">Privacy Policy</a>
                <span className="separator">|</span>
                <a href="#">Terms of Service</a>
                <span className="separator">|</span>
                <a href="#">Cookie Policy</a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Gaming-style Background Effects */}
        <div className="footer-bg-effects">
          {/* Floating Particles */}
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="particle"
              initial={{ 
                x: Math.random() * 100 + '%',
                y: '100%',
                scale: Math.random() * 0.5 + 0.5
              }}
              animate={{ 
                y: '-10%',
                x: [
                  Math.random() * 100 + '%',
                  Math.random() * 100 + '%',
                  Math.random() * 100 + '%'
                ]
              }}
              transition={{ 
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                delay: Math.random() * 5
              }}
            />
          ))}

          {/* Grid Pattern */}
          <div className="grid-pattern" />

          {/* Glow Effect Following Mouse */}
          {isHovering && (
            <motion.div 
              className="glow-effect"
              animate={{
                x: mousePosition.x - 100,
                y: mousePosition.y - 100
              }}
              transition={{ type: "spring", damping: 30 }}
            />
          )}
        </div>

        {/* Console-style Status Bar */}
        <motion.div 
          className="status-bar"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <span className="status-item">
            <span className="status-dot online"></span> Systems Online
          </span>
          <span className="status-item">FPS: 60</span>
          <span className="status-item">Ping: 12ms</span>
          <span className="status-item">Build: v2.0.25</span>
        </motion.div>
      </motion.footer>
    </>
  );
};

export default Footer;