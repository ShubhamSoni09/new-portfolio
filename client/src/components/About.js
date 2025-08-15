import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaCode, FaLightbulb, FaUsers } from 'react-icons/fa';
import './About.css';

const About = () => {
  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Shubham_Soni_Resume.pdf';
    link.download = 'Shubham_Soni_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const features = [
    {
      icon: FaCode,
      title: 'Clean Code',
      description: 'Writing maintainable and scalable code with best practices'
    },
    {
      icon: FaLightbulb,
      title: 'Problem Solving',
      description: 'Creative solutions to complex technical challenges'
    },
    {
      icon: FaUsers,
      title: 'Team Collaboration',
      description: 'Effective communication and teamwork in agile environments'
    }
  ];

  return (
    <section id="about" className="about">
      <div className="about-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">Get to know me better</p>
        </motion.div>

        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
                         <h3>Software Engineer & Full Stack Developer</h3>
             <p>
               I am a Software Engineer and Master's student in Computer Science and Engineering at the University at Buffalo, graduating in December 2025. My professional journey includes modernizing enterprise-scale financial applications at Zensar Technologies for FIS Global, delivering scalable, high-performance solutions at o2h Technology for global pharmaceutical companies, and developing analytical tools and data solutions during my time at Accenture.
             </p>
             <p>
               I have contributed to end-to-end development in fintech, life sciences, and AI domains, consistently achieving outcomes that enhance performance, streamline workflows, and improve maintainability. With extensive experience in React, Node.js, Java, Spring Boot, and AWS, I specialize in building scalable, enterprise-grade applications.
             </p>
             <p>
               Beyond industry roles, I have built innovative projects spanning intelligent document retrieval systems, machine learning models for cancer mutation classification, and interactive web platforms. I'm passionate about machine learning, deep learning, and creating innovative solutions that solve real-world problems.
             </p>
            
            <motion.button
              className="btn btn-primary"
              onClick={downloadResume}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaDownload />
              Download Resume
            </motion.button>
          </motion.div>

        </div>

        <motion.div
          className="features-grid"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="feature-card"
              whileHover={{ y: -10, scale: 1.02 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="feature-icon">
                <feature.icon />
              </div>
              <h4>{feature.title}</h4>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
