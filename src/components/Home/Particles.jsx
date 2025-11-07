// ParticleBackground.jsx
import React from 'react';
import { motion } from 'framer-motion';

const ParticleBackground = () => {
  const particles = Array.from({ length: 20 }, (_, i) => i);

  return (
    <div className="particles">
                {[...Array(20)].map((_, i) => (
                  <div 
                    key={i} 
                    className="particle" 
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,          // 👈 add this line
                      animationDelay: `${Math.random() * 5}s`,
                      animationDuration: `${5 + Math.random() * 10}s`
                    }}
                  />
                ))}
              </div>
  );
};

export default ParticleBackground;