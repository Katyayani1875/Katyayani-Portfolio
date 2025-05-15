import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay"></div> {/* Gradient Overlay */}
      <div className="hero-container">
        <div className="hero-text">
          <h1 className="hero-headline">Katyayani Mishra</h1>
          <h2 className="hero-subheadline">MERN Stack | Web Enthusiast</h2>
          <p className="hero-tagline">
            Welcome! I'm Katyayani Mishra, a dedicated MERN Stack Web Developer. Crafting seamless web 
            experiences with precision and creativity.
            Let's collaborate and bring your vision to life!
          </p>
          <div className="hero-buttons">
            <a href="/assets/Katyayani_Mishra_Resume.pdf" 
               className="hero-btn resume-btn" 
               target="_blank" 
               rel="noopener noreferrer">
              View Resume
            </a>

            <Link to="/contact" className="hero-btn contact-btn">
              Contact Me
            </Link>
          </div>
        </div>

        <div className="hero-profile-pic-container">
          <img
            src="/assets/k.jpg" 
            alt="Katyayani Mishra"
            className="hero-profile-pic"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
