import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaExternalLinkAlt } from 'react-icons/fa';
import './Experience.css';

const Experience = () => {
  const experienceData = [
    {
      position: 'Software Engineering Intern',
      company: 'Zensar Technologies, Inc.',
      location: 'Chicago, IL',
      duration: 'June 2025 - August 2025',
      description: 'Modernizing financial applications for FIS Global using Java, Spring Boot, JWE, and Hibernate. Contributing to secure API development, microservices migration, and enterprise-grade backend architecture in a fintech environment.',
      technologies: ['Java', 'Spring Boot', 'JWE', 'Hibernate', 'Microservices', 'RESTful APIs'],
      achievements: [
        'Working on enterprise-grade backend architecture for financial applications',
        'Contributing to secure API development and microservices migration',
        'Collaborating in a fintech environment with FIS Global'
      ]
    },
    {
      position: 'Software Engineer (Research Assistant)',
      company: 'The Research Foundation for SUNY',
      location: 'Buffalo, NY',
      duration: 'Feb 2025 - May 2025',
      description: 'Engineered the DART Academy web app by optimizing frontend performance, developing interactive learning modules, and enhancing backend efficiency using React, TypeScript, Node.js, and AWS.',
      technologies: ['React', 'TypeScript', 'Node.js', 'AWS', 'Frontend Optimization'],
      achievements: [
        'Optimized frontend performance for DART Academy web app',
        'Developed interactive learning modules',
        'Enhanced backend efficiency using modern technologies'
      ]
    },
    {
      position: 'Senior Software Development Engineer',
      company: 'o2h Technology (o2h Discovery)',
      location: 'Ahmedabad, India',
      duration: 'Sept 2022 - July 2024',
      description: 'Created intuitive and high-performance UIs for Chemistry in the Cloud platform serving 40+ global pharmaceutical companies. Developed RESTful APIs using Node.js and Adonis.js, reducing latency by 35%.',
      technologies: ['React', 'Node.js', 'Adonis.js', 'MySQL', 'AWS EC2', 'S3', 'TypeScript', 'Redux'],
      achievements: [
        'Built Chemistry in the Cloud platform serving 40+ global pharmaceutical companies',
        'Reduced API latency time by 35% through optimization',
        'Engineered custom higher order components reducing 50% code redundancy',
        'Led backend API development with 27% reduction in production bugs'
      ]
    },
    {
      position: 'Software Engineering Intern',
      company: 'Accenture - Strategy and Consulting',
      location: 'Ahmedabad, India',
      duration: 'Jan 2022 - May 2022',
      description: 'Accelerated dashboard creation by developing 4 rapidly mutable analytical widgets for an Indian Multinational Telecommunications Company. Designed and implemented ETL tools within OLAP domain.',
      technologies: ['React.js', 'Node.js', 'MySQL', 'D3.js', 'ETL', 'OLAP'],
      achievements: [
        'Developed 4 rapidly mutable analytical widgets for telecommunications company',
        'Designed and implemented ETL tool within OLAP domain',
        'Automated data warehousing processes'
      ]
    },
    {
      position: 'Web Development Intern',
      company: 'RedWall Technologies',
      location: 'Remote',
      duration: 'June 2021 - Aug 2021',
      description: 'Developed a full-stack e-commerce platform, optimizing user experience and driving a 22% increase in client sales. Engineered scalable, modular architecture reducing response time by 45%.',
      technologies: ['React.js', 'Material UI', 'Node.js', 'MongoDB', 'RESTful APIs'],
      achievements: [
        'Built full-stack e-commerce platform driving 22% increase in client sales',
        'Engineered scalable, modular architecture',
        'Reduced API response time by 45% through optimization'
      ]
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="experience-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle">My professional journey and work experience</p>
        </motion.div>

        <div className="experience-content">
          {experienceData.map((exp, index) => (
            <motion.div
              key={`${exp.position}-${exp.company}`}
              className="experience-card"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="experience-header">
                <div className="experience-icon">
                  <FaBriefcase />
                </div>
                <div className="experience-title">
                  <h3 className="position">{exp.position}</h3>
                  <h4 className="company">{exp.company}</h4>
                </div>
              </div>

              <div className="experience-meta">
                <div className="meta-item">
                  <FaCalendarAlt />
                  <span>{exp.duration}</span>
                </div>
                <div className="meta-item">
                  <FaMapMarkerAlt />
                  <span>{exp.location}</span>
                </div>
              </div>

              <p className="description">{exp.description}</p>

              <div className="technologies">
                <h5>Technologies Used:</h5>
                <div className="tech-tags">
                  {exp.technologies.map((tech) => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>

              <div className="achievements">
                <h5>Key Achievements:</h5>
                <ul>
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
