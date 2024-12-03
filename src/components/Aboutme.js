import React from 'react';
import './Aboutme.css';
import profilePicture from './pictures/profile.jpg';

const AboutMe = () => {
  return (
    <div id="about" className="about-me">
      <div className="about-content">
        <div className="text-section">
          <h2 className="about-title">About Me</h2>
          <p>
            Hi, I’m William, a computer science student passionate about building innovative and functional projects. I specialize in full-stack development and creating user-friendly apps that solve real-world problems.
          </p>
          <p>
            I’m always eager to learn and explore new technologies. Whether working on a team or independently, I bring a creative and results-driven approach to every project.
          </p>
          <div className="social-links-container">
            <a href="https://www.linkedin.com/in/william-luca/" target="_blank" rel="noopener noreferrer">
              <i class="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/LucaCoding21" target="_blank" rel="noopener noreferrer">
              <i class="fab fa-github"></i>
            </a>
          </div>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none' }}>
            <button className="cta-button">
              View My Resume
            </button></a>
        </div>
        <div className="image-section">
          <img src={profilePicture} alt="Your Name" className="profile-picture" />
        </div>
      </div>
      <div className="skills-section">
        <h3>Technical Skills</h3>
        <ul className="skills-list">
          <li><i className="fab fa-java"></i> Java</li>
          <li><i className="fab fa-python"></i> Python</li>
          <li><i className="fab fa-js"></i> JavaScript</li>
          <li><i className="fab fa-react"></i> React</li>
          <li><i className="fab fa-node"></i> Node.js</li>
          <li><i className="fab fa-git"></i> Git</li>
          <li><i className="fas fa-leaf"></i> Spring Boot</li>
          <li><i className="fas fa-cplusplus"></i> C++</li>
          <li><i className="fab fa-css3-alt"></i> CSS</li>
          <li><i className="fab fa-html5"></i> HTML</li>
          <li><i className="fas fa-fire"></i> Firebase</li>
          <li><i className="fas fa-database"></i> PostgreSQL</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutMe;