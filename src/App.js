import React from 'react';
import Header from './components/Header';
import AcademicBackground from './components/AcademicBackground';
import WorkExperience from './components/WorkExperience';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Skills from './components/Skills';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="left-panel">
        <Header />
      </div>
      <div className="right-panel">
        <AcademicBackground />
        <WorkExperience />
        <Projects />
        <Skills />
        <Blog />
      </div>
    </div>
  );
}

export default App;
