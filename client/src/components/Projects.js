import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaReact, FaNodeJs, FaDatabase, FaCode } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiRedux, SiTypescript, SiTailwindcss } from 'react-icons/si';
import './Projects.css';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'backend', label: 'AI & ML' }
  ];

  const projects = [
    {
      id: 1,
      title: 'Ask Nirmaites',
      description: 'Developed a full-stack Q&A platform with secure email authentication, allowing students to post, edit, and delete questions easily. Designed scalable backend APIs using Node.js and Express.js and built dynamic React.js frontend components with Material UI, leveraging Redux for efficient state management and performance.',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop',
      technologies: ['React.js', 'Node.js', 'Express.js', 'Redux', 'Firebase'],
      category: 'fullstack',
      github: 'https://github.com/ShubhamSoni09',
      live: 'https://ask-nirmaites.netlify.app/',
      featured: true
    },
    {
      id: 2,
      title: 'IntelliQuery: AI-Powered Document Chatbot',
      description: 'Built an AI-driven RAG chatbot that extracts answers from PDFs and web URLs using LangChain for document parsing and FAISS for vector-based retrieval. Integrated Hugging Face embeddings and a fine-tuned transformer model to generate context-aware responses. Deployed via Streamlit, enabling real-time document querying, chatbot interactions, and chat history summarization for seamless knowledge access.',
      image: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400&h=300&fit=crop',
      technologies: ['Python', 'Streamlit', 'FAISS', 'LangChain', 'HuggingFace', 'Transformers'],
      category: 'backend',
      github: 'https://github.com/ShubhamSoni09',
      live: 'https://intelliquery-ai-powered-document-chatbot.streamlit.app/',
      featured: true
    },
    {
      id: 3,
      title: 'GeneScope: AI-Powered Cancer Mutation Classification',
      description: 'Developed a machine learning model to classify genetic mutations in cancer patients using gene, variation, and clinical text data from a Singapore-based hospital. Applied response encoding and mapped data with medical literature to aid personalized cancer treatment, achieving 92% accuracy with Logistic Regression, kNN, and SVM.',
      image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?w=400&h=300&fit=crop',
      technologies: ['Python', 'pandas', 'numpy', 'matplotlib', 'sklearn'],
      category: 'backend',
      github: 'https://github.com/ShubhamSoni09',
      live: null,
      featured: true
    }
  ];

  const getTechnologyIcon = (tech) => {
    const iconMap = {
      'React': FaReact,
      'Node.js': FaNodeJs,
      'MongoDB': SiMongodb,
      'Express': SiExpress,
      'Redux': SiRedux,
      'TypeScript': SiTypescript,
      'Tailwind CSS': SiTailwindcss,
      'Database': FaDatabase
    };
    return iconMap[tech] || FaCode;
  };

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">My Projects</h2>
          <p className="section-subtitle">Some of my recent work and personal projects</p>
        </motion.div>

        <motion.div
          className="filter-buttons"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {filters.map((filter) => (
            <motion.button
              key={filter.id}
              className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {filter.label}
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          className="projects-grid"
          layout
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className={`project-card ${project.featured ? 'featured' : ''}`}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <div className="project-links">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <FaGithub />
                      </motion.a>
                      {project.live && (
                        <motion.a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <FaExternalLinkAlt />
                        </motion.a>
                      )}
                    </div>
                  </div>
                  {project.featured && (
                    <div className="featured-badge">Featured</div>
                  )}
                </div>
                
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  
                  <div className="project-technologies">
                    {project.technologies.map((tech) => {
                      const IconComponent = getTechnologyIcon(tech);
                      return (
                        <span key={tech} className="tech-tag">
                          <IconComponent />
                          {tech}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
