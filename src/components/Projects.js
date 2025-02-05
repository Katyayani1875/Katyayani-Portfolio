import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';

function Projects() {
  const [filter, setFilter] = useState('All');

  const projects = [
    {
      id: 1,
      title: 'Birthday Website',
      description: 'A React-based birthday website with interactive features, deployed on Vercel.',
      techStack: ['React', 'CSS', 'JavaScript'],
      image: '/assets/birthday.png',
      url: 'https://sumkan-didi-ka-birthday.vercel.app/',
      github: 'https://github.com/username/birthday-website',
      type: 'Frontend',
    },
    {
      id: 2,
      title: 'Portfolio',
      description: 'A responsive portfolio website and deployed the portfolio on Vercel for easy access and viewing',
      techStack: ['React', 'CSS', 'JavaScript'],
      image: '/assets/portfolio.png',
      url: 'https://ecommerce-website.vercel.app/',
      github: 'https://github.com/username/ecommerce-website',
      type: 'Frontend',
    },
    // {
    //   id: 3,
    //   title: 'E-Commerce Website',
    //   description: 'A full-stack e-commerce website with user authentication and product management.',
    //   techStack: ['React', 'Node.js', 'MongoDB'],
    //   image: 'ecommerce.png',
    //   url: 'https://ecommerce-website.vercel.app/',
    //   github: 'https://github.com/username/ecommerce-website',
    //   type: 'Full Stack',
    // },
    // Add more projects here
  ];

  const filteredProjects = filter === 'All' ? projects : projects.filter(project => project.type === filter);

  return (
    <section className="projects">
      <div className="projects-container">
        <h2>My Projects</h2>

        <div className="filter-buttons">
          <button onClick={() => setFilter('All')} className={filter === 'All' ? 'active' : ''}>All</button>
          <button onClick={() => setFilter('Frontend')} className={filter === 'Frontend' ? 'active' : ''}>Frontend</button>
          <button onClick={() => setFilter('Backend')} className={filter === 'Backend' ? 'active' : ''}>Backend</button>
          <button onClick={() => setFilter('Full Stack')} className={filter === 'Full Stack' ? 'active' : ''}>Full Stack</button>
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card">
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="project-details">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <p><strong>Tech Stack:</strong> {project.techStack.join(', ')}</p>
                <div className="project-links">
                  <a href={project.url} target="_blank" rel="noopener noreferrer" className="btn project-btn">
                    View Project
                  </a>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn github-btn">
                    View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
