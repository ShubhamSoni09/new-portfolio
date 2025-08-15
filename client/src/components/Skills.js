import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase,
  FaGitAlt, FaDocker, FaAws, FaPython, FaJava, FaPhp
} from 'react-icons/fa';
import { SiMongodb, SiExpress, SiRedux, SiTypescript, SiTailwindcss, SiFirebase } from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', icon: FaReact, color: '#61dafb' },
        { name: 'Next.js', icon: SiTypescript, color: '#000000' },
        { name: 'TypeScript', icon: SiTypescript, color: '#3178c6' },
        { name: 'Redux', icon: SiRedux, color: '#764abc' },
        { name: 'Material UI', icon: FaCss3Alt, color: '#0081cb' },
        { name: 'Vue.js', icon: FaJs, color: '#4fc08d' }
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', icon: FaNodeJs, color: '#339933' },
        { name: 'Java', icon: FaJava, color: '#ed8b00' },
        { name: 'Spring Boot', icon: FaJava, color: '#6db33f' },
        { name: 'Python', icon: FaPython, color: '#3776ab' },
        { name: 'Express', icon: SiExpress, color: '#000000' }
      ]
    },
    {
      title: 'AI & ML',
      skills: [
        { name: 'Machine Learning', icon: FaPython, color: '#ff6b6b' },
        { name: 'Deep Learning', icon: FaPython, color: '#4ecdc4' },
        { name: 'TensorFlow', icon: FaPython, color: '#ff8a65' },
        { name: 'Scikit-learn', icon: FaPython, color: '#f9ca24' }
      ]
    },
    {
      title: 'Tools & DB',
      skills: [
        { name: 'MongoDB', icon: SiMongodb, color: '#47a248' },
        { name: 'MySQL', icon: FaDatabase, color: '#4479a1' },
        { name: 'AWS', icon: FaAws, color: '#ff9900' },
        { name: 'Docker', icon: FaDocker, color: '#2496ed' },
        { name: 'Git', icon: FaGitAlt, color: '#f05032' }
      ]
    }
  ];



  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">My technical expertise and tools I work with</p>
        </motion.div>

        <div className="skills-content">
          <motion.div
            className="skills-categories"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {skillCategories.map((category, categoryIndex) => (
              <div key={category.title} className="skill-category">
                <h3 className="category-title">{category.title}</h3>
                <div className="skills-list">
                  {category.skills.map((skill, skillIndex) => (
                                         <motion.div
                       key={skill.name}
                       className="skill-item"
                       initial={{ opacity: 0, y: 20 }}
                       whileInView={{ opacity: 1, y: 0 }}
                       transition={{ duration: 0.5, delay: 0.4 + (categoryIndex * 0.2) + (skillIndex * 0.1) }}
                       viewport={{ once: true }}
                       whileHover={{ scale: 1.02, y: -2 }}
                     >
                       <div className="skill-header">
                         <div className="skill-icon" style={{ color: skill.color }}>
                           <skill.icon />
                         </div>
                         <span className="skill-name">{skill.name}</span>
                       </div>
                     </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>

          
        </div>
      </div>
    </section>
  );
};

export default Skills;
