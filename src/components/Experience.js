import React from 'react';
import { Link } from 'react-router-dom'; 
import './Experience.css';

function Experience() {
  return (
    <section className="experience">
      <div className="experience-container">
        <h2><span className='gradient-text'>Experience</span></h2>

        <div className="experience-item">
          <h3>Tata Cybersecurity Analyst Job Simulation</h3>
          <p className="role">Cybersecurity Analyst Intern (IAM) | Forage | February 2025</p>
          <p>
            Completed a job simulation with Tata Consultancy Services, focusing on Identity and Access 
             Management (IAM). Collaborated with a Cybersecurity Consulting team to evaluate security 
              strategies, align them with business objectives, and enhance cybersecurity practices.
          </p>
          <div className="exp-skills">
            <p><strong>Key Skills Gained:</strong></p>
            <ul>
              <li>Business Process Alignment</li>
              <li>Business Process Analysis</li>
              <li>Critical Thinking</li>
              <li>IAM Design & Evaluation</li>
              <li>Solution Design & Strategy Assessment</li>
              <li>Project Planning & Problem Solving</li>
            </ul>
          </div>

          {/* Add a button or link to showcase the certificate */}
          <div className="certificate">
            <h4>Certificate of Completion</h4>
            <p>Click below to view the certificate:</p>
            <a 
              href="/assets/Cyber Security Analyst.pdf"  
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn certificate-btn"
            >
              View Certificate
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
