import React, { useState } from 'react';
import './Projects.css'; // Ensure you have the styles

const Projects = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [activeTopic, setActiveTopic] = useState(null);

  const handleToggleDetails = () => {
    setShowDetails((prev) => !prev); // Toggle the visibility of project details
  };

  const handleTopicToggle = (topic) => {
    setActiveTopic((prev) => (prev === topic ? null : topic)); // Toggle specific topic details
  };

  const projectData = [
    {
      title: 'Machine Learning and Deep Learning',
      links: []
    },
    
    {
      title: 'Probability, Statistics, and Combinatorics',
      links: [
        {
          href: 'https://nbviewer.org/github/JakeLee13/Monty-Hall-Problem-Simulation/blob/main/Monty%20Hall%20Project%20%282%29.ipynb',
          label: 'Monty Hall Problem: Bayesian Updating and Analytical Thinking'
        },
        {
          href: 'https://nbviewer.org/github/JakeLee13/Birthday-Problem/blob/main/Birthday%20Paradox.ipynb',
          label: 'Birthday Paradox: Combinatorial Probability and Simulations'
        }
      ]
    },
    {
      title: 'Linear Algebra [Links in Progress]',
      links: []
    },
    {
      title: 'Other [Links in Progress]',
      links: []
    },
  ];

  return (
    <div className="projects">
      <h2 onClick={handleToggleDetails} className="clickable">
        Projects
      </h2>
      {showDetails && (
        <div className="details">
          {projectData.map((project, index) => (
            <div key={index}>
              <h3 onClick={() => handleTopicToggle(project.title)} className="clickable">
                {project.title}
              </h3>
              {activeTopic === project.title && project.links.length > 0 && (
                <ul>
                  {project.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Projects;
