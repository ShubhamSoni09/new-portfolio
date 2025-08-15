import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt, FaUniversity } from 'react-icons/fa';
import './Education.css';

const Education = () => {
  const educationData = [
    {
      degree: 'Master of Science: Computer Science and Engineering',
      institution: 'University at Buffalo, The State University of New York',
      location: 'San Francisco, CA',
      duration: 'Aug 2024 - Dec 2025',
      description: 'Relevant Coursework: Analysis of Algorithms, Data Models and Query Languages, Operating Systems, Deep Learning'
    },
    {
      degree: 'Bachelor of Technology: Electronics and Communication Engineering with Minor in Computer Engineering',
      institution: 'Institute of Technology, Nirma University',
      location: 'Ahmedabad, India',
      duration: 'July 2018 - May 2022',
      description: 'Relevant Coursework: Data Structures, Machine Learning, Communication Networks, Database Management Systems'
    }
  ];

  return (
    <section id="education" className="education">
      <div className="education-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">My academic journey and qualifications</p>
        </motion.div>

        <div className="education-content">
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.degree}
              className="education-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="education-icon">
                {edu.institution.includes('Buffalo') ? (
                  <img 
                    src={process.env.PUBLIC_URL + '/buffalo-logo.png'} 
                    alt="University at Buffalo Logo" 
                    className="ub-logo"
                  />
                ) : edu.institution.includes('Nirma') ? (
                  <img 
                    src={process.env.PUBLIC_URL + '/nirma-logo.png'} 
                    alt="Nirma University Logo" 
                    className="nirma-logo"
                  />
                ) : (
                  <FaUniversity />
                )}
              </div>
              
              <div className="education-details">
                <h3 className="degree">{edu.degree}</h3>
                <h4 className="institution">{edu.institution}</h4>
                
                <div className="education-meta">
                  <div className="meta-item">
                    <FaCalendarAlt />
                    <span>{edu.duration}</span>
                  </div>
                  <div className="meta-item">
                    <FaMapMarkerAlt />
                    <span>{edu.location}</span>
                  </div>

                </div>
                
                <p className="description">{edu.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
