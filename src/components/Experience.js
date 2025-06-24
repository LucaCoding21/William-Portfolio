import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: 'Founder & Programming Instructor',
      company: 'CodeWithLuca',
      location: 'Vancouver, BC',
      period: 'January 2025 - April 2025',
      description: [
        'Started and grew a successful online tutoring business teaching Python and web development to kids aged 8-16, building a client base of 4 students through weekly interactive Zoom lessons',
        'Created a structured curriculum with hands-on coding projects, interactive challenges, and practical exercises covering HTML/CSS, JavaScript, and Python programming concepts',
        'Maintained 100% client satisfaction over 4 months, with students successfully building their own web pages and Python applications like web scrapers and calculators',
        'Handled all aspects of the business including lesson planning, student scheduling, progress tracking with Notion, social media marketing, and website management'
      ],
      technologies: ['Python', 'HTML', 'CSS', 'JavaScript', 'Notion', 'Wix', 'Zoom'],
      type: 'Entrepreneurship',
      website: 'https://www.codewithluca.com/'
    }
  ];

  return (
    <div id="experience" className="experience-page">
      <h2 className="experience-title">Experience</h2>
      <div className="experience-list">
        {experiences.map((experience, index) => (
          <div key={index} className="experience-card">
            <div className="experience-header">
              <div className="experience-icon">
                <i className="fas fa-rocket"></i>
              </div>
              <div className="experience-info">
                <h3 className="experience-title">{experience.title}</h3>
                <p className="experience-company">
                  {experience.website ? (
                    <a href={experience.website} target="_blank" rel="noopener noreferrer">
                      {experience.company}
                    </a>
                  ) : (
                    experience.company
                  )}
                </p>
                <p className="experience-location">{experience.location}</p>
                <p className="experience-period">{experience.period}</p>
                <p className="experience-type">{experience.type}</p>
              </div>
            </div>
            <div className="experience-content">
              <ul className="experience-description">
                {experience.description.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
              <div className="experience-technologies">
                <h4>Technologies & Tools:</h4>
                <div className="tech-tags">
                  {experience.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-tag">
                      {tech === 'Python' && <><i className="fab fa-python"></i> Python</>}
                      {tech === 'HTML' && <><i className="fab fa-html5"></i> HTML</>}
                      {tech === 'CSS' && <><i className="fab fa-css3-alt"></i> CSS</>}
                      {tech === 'JavaScript' && <><i className="fab fa-js"></i> JavaScript</>}
                      {tech === 'Notion' && <><i className="fas fa-sticky-note"></i> Notion</>}
                      {tech === 'Wix' && <><i className="fas fa-globe"></i> Wix</>}
                      {tech === 'Zoom' && <><i className="fas fa-video"></i> Zoom</>}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience; 