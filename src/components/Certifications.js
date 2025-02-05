import React from 'react';
import './Certifications.css';

function Certifications() {
  return (
    <section className="certifications">
      <div className="certifications-container">
        <h2><span className="gradient-text">Certifications & Achievements</span></h2>

        <div className="certification-card">
          <h3>TCS Cybersecurity Analyst (IAM)</h3>
          <p>
            Completed the Cybersecurity Analyst role focusing on Identity and Access Management (IAM) with Tata Consultancy Services. Gained expertise in IAM principles, cybersecurity best practices, and aligning strategies with business objectives.
          </p>
          <a href="/assets/Cyber Security Analyst.pdf" target="_blank" rel="noopener noreferrer" className="btn certification-btn">
            Viiew Certificate
          </a>
        </div>

        <div className="certification-card">
          <h3>Coding Ninjas 21 Days Challenge - Level 3</h3>
          <p>
            Successfully completed Level 3 of the 21 Days Coding Challenge by Coding Ninjas, enhancing problem-solving and coding skills.
          </p>
          <a href="/assets/Level 3 Certificate.pdf" target="_blank" rel="noopener noreferrer" className="btn certification-btn">
            View Certificate
          </a>
        </div>
      </div>
    </section>
  );
}

export default Certifications;
