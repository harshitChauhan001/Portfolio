import React from 'react'
import about from "../../assets/about_image.png"
import phone from "../../assets/phone_image.png"
import linkedin from "../../assets/linkedin_image.png"
import github from "../../assets/github_image.png"
import skill from "../../assets/skills_image.png"
import stackoverflow from "../../assets/stack_overflow_image.png"
import tickettango from "../../assets/ticket_tango_image.png"
import education from "../../assets/education.png"
import aboutLeft from "../../assets/about_left.png"
import leetcode from "../../assets/leetcode_image.png"
import "./Resume.css"


function Resume() {
  const handleLeetcodeClick = () => {
    window.location.href = "https://leetcode.com/u/h_rajput/";
  };
  
  const handleGithubClick = () => {
    window.location.href = "https://github.com/harshitChauhan001";
  };
  
  const handleLinkedinClick = () => {
    window.location.href = "https://www.linkedin.com/in/harshitchauhan05/";
  };
  return (
    <div className='resume-container'>
      <div className='resume'>

        <div className='about-container'>
          <img src={aboutLeft} alt="aboutPart" />
          <div className='about-right'>
            <img src={phone} alt="phone" />
            <img onClick={handleGithubClick} src={github} alt="github" />
            <img onClick={handleLinkedinClick} src={linkedin} alt="linked" />
            <img onClick={handleLeetcodeClick}  src={leetcode} alt="leetcode" />
          </div>
        </div>
        <img src={skill} alt="skillset" />
        <img src={tickettango} alt="skillset" />
        <img src={stackoverflow} alt="skillset" />
        <img src={education} alt="skillset" />
      </div>
    </div>
  )
}

export default Resume