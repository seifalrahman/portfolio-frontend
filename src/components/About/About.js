
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import './style.css';

const About = () => {
  const [skills, setSkills] = useState([]);
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/skills')
      .then(res => setSkills(res.data))
      .catch(err => console.log(err));

    axios.get('http://localhost:5000/api/experiences')
      .then(res => setExperiences(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <motion.section
      id="about"
      className="about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="container">
        <h2>About Me</h2>
        <div className="skills">
          <h3>Skills</h3>
          <ul>
            {skills.map(skill => (
              <li key={skill._id}>{skill.name} - {skill.proficiency}</li>
            ))}
          </ul>
        </div>
        <div className="experience">
          <h3>Experience</h3>
          <ul>
            {experiences.map(experience => (
              <li key={experience._id}>
                <h4>{experience.role} at {experience.company}</h4>
                <p>{experience.duration}</p>
                <p>{experience.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
