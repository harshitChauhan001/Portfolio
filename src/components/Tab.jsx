import React from 'react';
import "./Tab.css";
import Skills from './Skills/Skills';
import Projects from './Projects/Projects';
import Resume from './Resume/Resume';
import AboutMe from './AboutMe/AboutMe';
import Connect from './Connect/Connect';
import Links from './Links/Links';
// Import other components similarly

function Tab({ name }) {
  const Lists = ["Skills", "Projects", "Resume", "Links", "About Me", "Connect"]

  const renderComponent=()=>{
    
    switch (name) {
      case "Resume":
        return <Resume />;
      case "Skills":
        return <Skills />;
      case "Projects":
        return <Projects />;
      case "Links":
        return <Links />;
      case "About Me":
        return <AboutMe />;
      case "Connect":
        return <Connect />;
      default:
        return null; 
    }
  };

  return (
    <div className='tab-detail-container'>
      {renderComponent()}
    </div>
  );
}

export default Tab;
