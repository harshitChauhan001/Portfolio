import React, { useState } from 'react'
import LeftSideBar from '../LeftSidebar/LeftSideBar'
import "./Skills.css"

function Skills() {
  return (
    <div className='tab-inside'>
      <LeftSideBar/>
      <div className='main-content'>
        <div >
          <h2>Tools or Frameworks:</h2>
          <div className='tech-stack-list'>

            <div>HTML</div>
            <div>CSS</div>
            <div>ReactJs</div>
            <div>ExpressJs</div>
            <div>REST APIs</div>
            <div>MongoDB</div>
            <div>NodeJs</div>
            <div>Bootstrap</div>
          </div>
        </div>

        <div>
          <h2>Programming Languages:</h2>
          <div className='tech-stack-list'>

            <div>Javascript</div>
            <div>CPP</div>
            <div>Java</div>
            <div>SQL</div>
          </div>
        </div>
        <div>
          <h2>Strengths:</h2>
          <div className='tech-stack-list'>

            <div>Data Structures and Algorithm</div>
            <div> Problem Solving</div>
            <div>OOPS</div>
            <div> Operating System</div>
            <div>DBMS</div>
          </div>
        </div>
      </div>
   </div>
  )
}

export default Skills