import React, { useState } from 'react';
import './WorkExperience.css'; // Ensure you have the styles

const WorkExperience = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [activeJob, setActiveJob] = useState(null);

  const handleClick = () => {
    setShowDetails(prevShowDetails => !prevShowDetails); // Toggle job details
  };

  const handleJobClick = (job) => {
    setActiveJob(activeJob === job ? null : job); // Toggle specific job details
  };

  const jobs = [
    {
      title: 'Analytics Intern at Domo',
      description: (
        <>
          Drove internal analytics across sales, marketing, CS, and HR by building and maintaining data pipelines, automating workflows, designing dashboards, and delivering critical metrics
          <br /><br />
          Converted 300+ Redshift dataflows into Domo’s ETL tool, improving modularity for easier debugging and cutting run times by 80-90%, enabling real-time data across the organization
          <br /><br />
          Spearheaded Python-based AI initiatives utilizing parallel processing to automate insights from massive data volumes, unlocking previously unattainable large-scale analytics across the business
        </>
      ),
    },
    {
      title: 'Math Teaching Assistant at University of Utah',
      description: (
        <>
          Conducted weekly labs and study sessions for over 50 students studying Mathematics at the University of Utah
          <br /><br />
          Immensely improved my technical and non-technical communication skills by presenting complex concepts through a first principles lens, ensuring students, regardless of level, gained a proper understanding of the material.
        </>
      ),
    },
    {
      title: 'Operations Intern at Marriott',
      description: (
        <>
          Revamped the Lost Prevention System by implementing a cloud-based software in conjunction with a transactional email API for guest inquiries. 
          <br /><br />
          The implementation resulted in a 100% retrieval rate or an immediate automated response per inquiry for thousands of guests (possibly 10,000+ by now).
        </>
      ),
    },
    {
      title: 'Assistant Founder at Kahlert Initiative on Technology',
      description: (
        <>
          Successfully aided the launch of a pioneering program at the University of Utah consisting of cutting-edge course offerings such as AI, Fintech, Digital Marketing, and UI/UX Design. 
          <br /><br />
          Increased student participation from a modest cohort of 15 individuals to a community of over 350 members by growing 4 social media platforms, organizing guest speaker events, and facilitating hack-a-thon competitions. 
          <br /><br />
          Led implementation and management of a student study abroad experience to research Predictive Analytics, Blockchains, Digital Assets, and Cybersecurity in Rome, Italy, and Barcelona, Spain.
        </>
      ),
    },
  ];

  return (
    <div className="work-experience">
      <h2 onClick={handleClick} className="clickable">
        Work Experience
      </h2>
      {showDetails && (
        <div className="details">
          {jobs.map((job, index) => (
            <div key={index} className="job">
              <h3 onClick={() => handleJobClick(job.title)} className="clickable">
                {job.title}
              </h3>
              {activeJob === job.title && (
                <div className="job-description">
                  <p>{job.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WorkExperience;
