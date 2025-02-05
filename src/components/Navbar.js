import React from 'react';
import { Link, useLocation } from 'react-router-dom'; 
import './Navbar.css';

const Navbar = () => {
  const location = useLocation(); 
  
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/" className="logo">Katyayani</Link>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
        </li>
        <li>
          <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About</Link>
        </li>
        <li>
          <Link to="/skills" className={location.pathname === '/skills' ? 'active' : ''}>Skills</Link>
        </li>
        <li>
          <Link to="/projects" className={location.pathname === '/projects' ? 'active' : ''}>Projects</Link>
        </li>
        <li>
          <Link to="/certifications" className={location.pathname === '/certifications' ? 'active' : ''}>Certifications</Link>
        </li>
        <li>
          <Link to="/experience" className={location.pathname === '/experience' ? 'active' : ''}>Experience</Link>
        </li>
        <li>
          <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
