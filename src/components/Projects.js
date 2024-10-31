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
      title: 'Machine Learning [Links in Progress]',
      description: 'ML From Scratch',
    },
    {
      title: 'Deep Learning [Links in Progress]',
      description: 'D2L Implementations',
    },
    {
      title: 'Probability and Statistics [Links in Progress]',
      description: 'Simulations, Bayesian, Distributions',
    },
    {
      title: 'Linear Algebra [Links in Progress]',
      description: 'SVD, PCA, Compression',
    },
    {
      title: 'Other [Links in Progress]',
      description: 'Details about Other projects...',
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
              {activeTopic === project.title && <p>{project.description}</p>}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Projects;
