import React from 'react'
import my_image from "../../assets/my_image.jpg"
import "./AboutMe.css"

function AboutMe() {
  return (
    <div className='about-me-container'>

      <div className="about-me">
        <img src={my_image} alt="profile pic" />
      <h2>Hey, I'm Harshit Chauhan! 👋</h2>
      <p>
        I am a passionate software developer from Roorkee, India. I'm
        deeply interested in all tech things, especially web development. 
      </p>
      <p>
      <strong>Tech stack:</strong>  JavaScript, HTML, CSS, MongoDB, ExpressJS, ReactJS, NodeJS, Redux, Typescript.
      </p>
      <p>
        Feel free to explore my projects and follow me on social media by
        opening the Links folder! 🤠
      </p>
      <p>
        Fun fact: This website is built with React, and it's a
        recreation of my Windows desktop. Because who needs a real desktop when
        you can just code one? 😄
      </p>
      <p>
        For those brave enough to dive into the chaos, you can find the source
        code on <strong>GitHub:</strong> <a href="https://github.com/harshitChauhan001/Portfolio">Peek into the madness</a>.
      </p>
    </div>
    </div>
  );
}

export default AboutMe
