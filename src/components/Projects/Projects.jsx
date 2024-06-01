import React from 'react';
import './Projects.css';

function Projects() {
  const handleLinkClick = (num, name) => {
    if (num === 1) {
      (name==="git")? window.location.href="https://github.com/harshitChauhan001/Chess":window.location.href="https://chess-blue-seven.vercel.app/"
    }
    else if (num === 2) {
      (name==="git")? window.location.href="https://github.com/harshitChauhan001/TicketTango-client":window.location.href="https://ticket-tango-client.vercel.app/"
    }
    else if (num === 3) {
      (name==="git")? window.location.href="":window.location.href=""
    }
    else {
      (name==="git")? window.location.href="https://github.com/harshitChauhan001/stackoverflow-client":window.location.href="https://stackoverflow-client-bay.vercel.app/"
    }
  }

  return (
    <div className='main-project-container'>
      <div className='list-container'>

        <div className='project-item'>
          <div className='project-head'>
            <div className='project-title'>Chess with Friends</div>
            <div className='project-links'><div onClick={()=>handleLinkClick(1,"git")}>Github</div><div onClick={()=>handleLinkClick(1,"live")}>Live</div></div>
          </div>
          
          <div>An online chess game to play with friends. Create and join games using unique codes. Enjoy real-time gameplay and easy game management.</div>
          <div>
            <strong>Features:</strong>
            <ul className='feature-list'>
              <li><strong>Create and Join Games:</strong> Generate a unique code to create a game, which your friend can use to join.</li>
              <li><strong>Real-time Interaction:</strong> Utilizes Socket.io for real-time communication between players.</li>
              <li><strong>Code Management:</strong> Implements Redis to store and manage game codes efficiently.</li>
            </ul>
            <strong>Tools and Technology Used:</strong>
            <div className='tech-stack-list'>
              <div>ReactJS</div>
              <div>Socket.io</div>
              <div>Redis</div>
              <div>CSS</div>
            </div>
          </div>
        </div>

        <div className='project-item'>
        <div className='project-head'>
            <div className='project-title'>Ticket Tango</div>
            <div className='project-links'><div onClick={()=>handleLinkClick(2,"git")}>Github</div><div onClick={()=>handleLinkClick(2,"live")}>Live</div></div>
          </div>
          <div>A platform to effortlessly book movie tickets, streamlining your planning process. Secure and efficient with features like OTP verification.</div>
          <div>
            <strong>Features:</strong>
            <ul className='feature-list'>
              <li><strong>Secure Authentication:</strong> Implemented JWT-based authentication utilizing RESTful APIs for secure user access.</li>
              <li><strong>OTP Verification:</strong> Integrated Nodemailer and Speakeasy for OTP verification during signup.</li>
              <li><strong>Efficient Booking Process:</strong> Users can select shows, seats, and view booking history; search movies/theaters by name, city, and filter genres for convenience.</li>
            </ul>
            <strong>Tools and Technology Used:</strong>
            <div className='tech-stack-list'>
              <div>NodeJS</div>
              <div>ExpressJS</div>
              <div>MongoDB</div>
              <div>ReactJS</div>
              <div>CSS</div>
              <div>Nodemailer</div>
              <div>Speakeasy</div>
              <div>JWT</div>
            </div>
          </div>
        </div>

        <div className='project-item'>
        <div className='project-head'>
            <div className='project-title'>Portfolio</div>
            <div className='project-links'><div onClick={()=>handleLinkClick(3,"git")}>Github</div><div onClick={()=>handleLinkClick(3,"live")}>Live</div></div>
          </div>
          <div>A desktop-based site mimicking a Windows interface, featuring icons for skills, projects, experience, and more. Intuitive navigation for an enhanced user experience.</div>
          <div>
            <strong>Features:</strong>
            <ul className='feature-list'>
              <li><strong>Intuitive Navigation:</strong> Icons represent different sections, providing an easy-to-navigate user experience.</li>
              <li><strong>Detailed Projects Section:</strong> Clicking on the Projects icon opens a tab with detailed descriptions of various projects.</li>
            </ul>
            <strong>Tools and Technology Used:</strong>
            <div className='tech-stack-list'>
              <div>CSS</div>
              <div>ReactJS</div>
            </div>
          </div>
        </div>

        <div className='project-item'>
        <div className='project-head'>
            <div className='project-title'>Stack Overflow</div>
            <div className='project-links'><div onClick={()=>handleLinkClick(4,"git")}>Github</div><div onClick={()=>handleLinkClick(4,"live")}>Live</div></div>
          </div>
          <div>A developer-centric platform for sharing knowledge and finding community-driven solutions for programming queries. User-friendly with secure access control.</div>
          <div>
            <strong>Features:</strong>
            <ul className='feature-list'>
              <li><strong>User Engagement:</strong> Provides a user-friendly interface for posting questions and answering queries.</li>
              <li><strong>Secure and Controlled Access:</strong> Leverages RESTful APIs with JWT-based authentication and authorization for controlled user permissions.</li>
              <li><strong>State Management:</strong> Utilizes Redux for efficient state management.</li>
            </ul>
            <strong>Tools and Technology Used:</strong>
            <div className='tech-stack-list'>
              <div>NodeJS</div>
              <div>ExpressJS</div>
              <div>MongoDB</div>
              <div>ReactJS</div>
              <div>CSS</div>
              <div>Redux</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Projects;
