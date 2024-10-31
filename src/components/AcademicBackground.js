import React, { useState } from 'react';
import './AcademicBackground.css';

const AcademicBackground = () => {
  const [showUniversityDetails, setShowUniversityDetails] = useState(false);

  const toggleUniversityDetails = () => {
    setShowUniversityDetails(!showUniversityDetails);
  };

  return (
    <div className="academic-background">
      <h2 onClick={toggleUniversityDetails} className="clickable">
        Academic Background
      </h2>
      {showUniversityDetails && (
        <div className="details">
          <div className="college">
            <p className="university" onClick={toggleUniversityDetails}>
              University of Utah
            </p>
            <div className="majors">
              <p><strong>Majors:</strong> B.S. Mathematics, B.S. Quantitative Analysis of Markets and Organizations (QAMO)</p>
              <p><strong>Emphases:</strong> Statistics Emphasis, Business Economics and Analytics Emphasis</p>
              <p><strong>Relevant Coursework:</strong> Applied Statistics, Data Science, Linear Algebra, Econometrics, Business Strategy</p>
              <p><strong>Achievements:</strong> Business Scholar, Kahlert Scholar, Deans List Recognition (3.5+ GPA) All Semesters</p>
            </div>
          </div>
          
          {/* Render the Certificates component */}
 
        </div>
      )}
    </div>
  );
};

export default AcademicBackground;
