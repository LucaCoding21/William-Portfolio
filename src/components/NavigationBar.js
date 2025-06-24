import React from 'react';
import './NavigationBar.css';

const NavigationBar = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="navigation-bar">
      <ul>
        <li><button onClick={scrollToTop} className="link-button">Home</button></li>
        <li><a href="#about">About Me</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#experience">Experience</a></li>
   
        <li><a href="/resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a></li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
