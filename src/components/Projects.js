import React from 'react';
import './Projects.css';
import guitarTabs from './pictures/guitar.jpg';
import soulSearching from './pictures/SSUI.jpeg';
import healthAce from './pictures/healthace.jpg';
import matchMySpeed from './pictures/match.jpg';
const projects = [
  {
    title: 'SoulSearching',
    description: `
      Created a React-based web app that integrates with Spotify API to generate personalized playlists and enhance user experience.
    `,
    technologies: ['React', 'Node.js', 'Spotify API','HTML', 'CSS'],
    link: 'https://github.com/ICClaire/SoulSearching',
    image: soulSearching,
    type:'Personal Project',
  },
  
  {
    title: 'HealthAce',
    description: `
      Developed a full-stack hospital appointment portal using Spring Boot and PostgreSQL, featuring an AI-driven chatbot for enhanced patient engagement.
    `,
    technologies: ['Spring Boot', 'Java', 'PostgreSQL', 'OpenAI API','Git'],
    link: 'https://github.com/thanhha1210/cmpt276-group-project',
    image: healthAce,
    type: 'Group Project',
  },
  {
    title: 'Match My Speed',
    description: `
      Hackathon project that connects runners with compatible partners, blending fitness and social networking. Inspired by Tinder, it enables users to create personalized profiles, browse others, and match based on shared goals, interests, or running preferences.
    `,
    technologies: ['JavaScript', 'Firebase'],
    link: 'https://github.com/LucaCoding21/FallHacks2024',
    image: matchMySpeed,
    type: 'Hackathon Project',
  },

  {
    title: 'AutoTabs',
    description: `
      Engineered a Python tool using OpenCV to extract and consolidate guitar tabs from YouTube videos, optimizing digital tablature access.
    `,
    technologies: ['Python', 'OpenCV', 'SSIM'],
    link: 'https://github.com/LucaCoding21/AutoTabs',
    image: guitarTabs,
    type:'Personal Project',
  },
  
];

const Projects = () => {
  return (
    <div id="projects" className="projects-page">
      <h2 className="projects-title">Featured Projects</h2>
      <div className="projects-list">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-info">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-type">{project.type}</p> 
              <p className="project-description">{project.description}</p>
              <div className="project-technologies">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="tech-logo">
                    {tech === 'Java' && <><i className="fab fa-java"></i> Java</>}
                    {tech === 'Python' && <><i className="fab fa-python"></i> Python</>}
                    {tech === 'JavaScript' && <><i className="fab fa-js"></i> JavaScript</>}
                    {tech === 'React' && <><i className="fab fa-react"></i> React</>}
                    {tech === 'Node.js' && <><i className="fab fa-node"></i> Node.js</>}
                    {tech === 'Git' && <><i className="fab fa-git"></i> Git</>}
                    {tech === 'Spring Boot' && <><i className="fas fa-leaf"></i> Spring Boot</>}
                    {tech === 'C++' && <><i className="fas fa-cplusplus"></i> C++</>}
                    {tech === 'CSS' && <><i className="fab fa-css3-alt"></i> CSS</>}
                    {tech === 'HTML' && <><i className="fab fa-html5"></i> HTML</>}
                    {tech === 'PostgreSQL' && <><i className="fas fa-database"></i> PostgreSQL</>}
                    {tech === 'OpenAI API' && <><i className="fas fa-robot"></i> OpenAI API</>}
                    {tech === 'Spotify API' && <><i className="fab fa-spotify"></i> Spotify API</>}
                    {tech === 'OpenCV' && <><i className="fas fa-camera"></i> OpenCV</>}
                    {tech === 'SSIM' && <><i className="fas fa-image"></i> SSIM</>}
                    {tech === 'Firebase' && <><i className="fas fa-fire"></i> Firebase</>}
                  </span>
                ))}
              </div>
              <a href={project.link} className="project-link-bubble" target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;