import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaHeart } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: FaGithub,
      url: 'https://github.com/ShubhamSoni09',
      label: 'GitHub'
    },
    {
      icon: FaLinkedin,
      url: 'https://www.linkedin.com/in/shubhamsoni1/',
      label: 'LinkedIn'
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <motion.div
            className="footer-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3>Shubham Soni</h3>
            <p>Full Stack Developer passionate about creating innovative digital solutions.</p>
          </motion.div>

          <motion.div
            className="footer-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li>
                <button onClick={() => {
                  const element = document.getElementById('home');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}>
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => {
                  const element = document.getElementById('about');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}>
                  About
                </button>
              </li>
              <li>
                <button onClick={() => {
                  const element = document.getElementById('skills');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}>
                  Skills
                </button>
              </li>
              <li>
                <button onClick={() => {
                  const element = document.getElementById('education');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}>
                  Education
                </button>
              </li>
              <li>
                <button onClick={() => {
                  const element = document.getElementById('experience');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}>
                  Experience
                </button>
              </li>
              <li>
                <button onClick={() => {
                  const element = document.getElementById('projects');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}>
                  Projects
                </button>
              </li>
              <li>
                <button onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}>
                  Contact
                </button>
              </li>
            </ul>
          </motion.div>

          <motion.div
            className="footer-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4>Connect</h4>
            <div className="social-links">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <social.icon />
                  <span className="sr-only">{social.label}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="footer-divider"></div>
          <div className="footer-bottom-content">
            <p className="copyright">
              © {currentYear} Shubham Soni. All rights reserved.
            </p>
            <p className="made-with">
              Made with <FaHeart className="heart-icon" /> using React
            </p>
          </div>
        </motion.div>

        <motion.button
          className="scroll-to-top"
          onClick={scrollToTop}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
        >
          ↑
        </motion.button>
      </div>
    </footer>
  );
};

export default Footer;
