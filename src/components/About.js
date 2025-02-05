import React from 'react';
import { Link } from 'react-router-dom'; 
import { FaLinkedin } from 'react-icons/fa'; 
import './About.css';

function About() {
  return (
    <section className="about">
      <div className="about-container">
        <div className="about-content">
          <div className="about-text">
            <h2>About Me</h2>
            <p>
              Hello! I'm Katyayani Mishra, a passionate Web Developer specializing in the MERN stack. I create seamless, user-friendly 
               applications that are both functional and visually stunning. My expertise in MongoDB, Express.js, React, and Node.js 
                empowers me to build robust full-stack solutions. I continually refine my skills and stay up-to-date with emerging 
                technologies.
              <br /><br />
              .My expertise in MongoDB, Express.js, React, and Node.js allows me to build full-stack 
             applications. I’m committed to staying current with emerging technologies and continually 
              refining my skills. Additionally, my strong foundation in Data Structures and Algorithms 
               (DSA) through Java enhances my problem-solving abilities and the efficiency of my 
                solutions.
                <br /><br />
              Currently pursuing a degree in Computer Science from Dr. A.P.J. Abdul Kalam Technical University, Lucknow and also I have 
               done my schooling from Rani Laxmi Bai Memroial School.
              <br /><br />
              Outside of coding, I'm deeply interested in spirituality, find joy in playing musical instruments, and enjoy playing 
               badminton to channel my competitive energy. I like editing videos and also enthusiastic about designing intuitive and 
                seamless user interfaces and experiences. I’m constantly exploring new technologies and learning from the world around 
                me.
              <br /><br />
              Let’s connect! I’m excited to collaborate and explore new opportunities.
            </p>
            <div className="about-buttons">
              <Link to="/skills" className="bt about-skills-btn">View My Skills</Link>
              <a href="https://www.linkedin.com/in/katyayanim12" target="_blank" rel="noopener noreferrer" className="bt about-linkedin-btn">
                <FaLinkedin className="linkedin-icon" /> Connect on LinkedIn
              </a>
            </div>
          </div>
          <div className="about-image">
            <img src="/assets/aboutk.jpg" alt="Katyayani Mishra" className="profile-img" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
