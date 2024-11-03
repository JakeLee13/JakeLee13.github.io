import React, { useState } from 'react';
import './Skills.css'; // Ensure you have the styles

const Skills = () => {
  const [showSkills, setShowSkills] = useState(false);

  const toggleSkills = () => {
    setShowSkills(!showSkills);
  };

  return (
    <div className="skills">
      <h2 onClick={toggleSkills} className="clickable">
        Skills
      </h2>
      {showSkills && (
        <div className="skills-details">
          <ul>
            <li><strong>Programming Languages:</strong> <li>Python, MySQL, R, JavaScript, HTML, CSS, LaTeX</li></li>
            <li><strong>Libraries/Frameworks:</strong> <li>Pandas, NumPy, Statsmodels, Scikit-Learn, PyTorch, Seaborn, Plotly, Matplotlib, React</li></li>
            <li><strong>Technologies:</strong> <li>Domo, Excel, Tableau, Power BI, Jupyter</li></li>
          </ul>

          <div className="certificates">
            <p className="certificate-header">Certificates:</p>
            <div className="certificate-details">
              <p><a href="https://app.dataquest.io/verify_cert/TAGLBR8JOU7YI3566PX5/" target="_blank" rel="noopener noreferrer">Gradient Descent Modeling in Python</a></p>
              <p><a href="https://app.dataquest.io/verify_cert/XO1T12RLFF351UAKS93V/" target="_blank" rel="noopener noreferrer">Linear Regression Modeling in Python</a></p>
              <p><a href="https://app.dataquest.io/verify_cert/7HFDUDEB4XQ4ONIA4F8M/" target="_blank" rel="noopener noreferrer">Linear Algebra For Machine Learning</a></p>
              <p><a href="https://app.dataquest.io/verify_cert/BSRC326MROXR8Y8FHWCU/" target="_blank" rel="noopener noreferrer">Calculus For Machine Learning</a></p>
              <p><a href="https://app.dataquest.io/verify_cert/240WC3J4SNGGHG3IR2DM/" target="_blank" rel="noopener noreferrer">Introduction to Unsupervised Machine Learning in Python</a></p>
              <p><a href="https://app.dataquest.io/verify_cert/7JA0Q4FIRQLB3IVUPURL/" target="_blank" rel="noopener noreferrer">Introduction to Supervised Machine Learning in Python</a></p>
              <p><a href="https://app.dataquest.io/verify_cert/GXDMJQ7SS08NV09V5SAK/" target="_blank" rel="noopener noreferrer">Introduction to Statistics in Python</a></p>
              <p><a href="https://app.dataquest.io/verify_cert/U52OLUM4AZSHJ9OW4I2I/" target="_blank" rel="noopener noreferrer">Data Analysis for Business in Python</a></p>
              <p><a href="https://app.dataquest.io/verify_cert/459XHDYTYEDUZFOP8NOY/" target="_blank" rel="noopener noreferrer">SQL Fundamentals</a></p>
              <p><a href="https://app.dataquest.io/verify_cert/GPASVU0ZOWRV520DD8W0/" target="_blank" rel="noopener noreferrer">Command Line for Data Science</a></p>
              <p><a href="https://app.dataquest.io/verify_cert/L9PADWYBCVYAREL5CNOS/" target="_blank" rel="noopener noreferrer">Advanced Data Cleaning in Python</a></p>
              <p><a href="https://app.dataquest.io/verify_cert/5CRBUIKX0S2V1OI344U5/" target="_blank" rel="noopener noreferrer">Data Cleaning and Analysis in Python</a></p>
              <p><a href="https://app.dataquest.io/verify_cert/P39QJ8LT5BWUBU1AP6IS/" target="_blank" rel="noopener noreferrer">Telling Stories Using Data Visualization and Information Design</a></p>
              <p><a href="https://app.dataquest.io/verify_cert/1PHAY921NDY1CSDFIG2M/" target="_blank" rel="noopener noreferrer">Introduction to Data Visualization in Python</a></p>
              <p><a href="https://app.dataquest.io/verify_cert/WZCY4NPUK42O7H2UB4N7/" target="_blank" rel="noopener noreferrer">Intermediate Python for Data Science</a></p>
              <p><a href="https://app.dataquest.io/verify_cert/0YXOLG9TKYB84V8ROF30/" target="_blank" rel="noopener noreferrer">Introduction to Pandas and NumPy for Data Analysis</a></p>
              <p><a href="https://app.dataquest.io/verify_cert/8MW03YLPZZ60HEI68TQT/" target="_blank" rel="noopener noreferrer">Python Functions and Jupyter Notebook</a></p>
              <p><a href="https://app.dataquest.io/verify_cert/IHR5O86VAEV7UOAM0PZO/" target="_blank" rel="noopener noreferrer">For Loops and Conditional Statements in Python</a></p>
              <p><a href="https://app.dataquest.io/verify_cert/4WHXVJFZTGRKC6L4KGDE/" target="_blank" rel="noopener noreferrer">Dictionaries, Frequency Tables, and Functions in Python</a></p>
              <p><a href="https://app.dataquest.io/verify_cert/F4LFRSY46JP9W6W35FH6/" target="_blank" rel="noopener noreferrer">Introduction to Python Programming for Data Science</a></p>
              <p>Digital Literacy Certificate</p>
              <p>Business Scholars Certificate</p>
              <p>Business Economics and Analysis Certificate</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Skills;
