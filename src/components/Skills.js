import React from 'react';
import './Skills.css';

function Skills() {
  const skills = [
    {
      category: 'Frontend',
      items: [
        { name: 'HTML', logo: '/assets/html.png', level: 90 },
        { name: 'CSS', logo: '/assets/css.png', level: 85 },
        { name: 'JavaScript', logo: '/assets/js.png', level: 80 },
        { name: 'React', logo: '/assets/react.png', level: 75 },
        { name: 'Tailwind CSS', logo: '/assets/tailwind.png', level: 70 },
        { name: 'Bootstrap', logo: '/assets/bootstrap.jpg', level: 70 },
      ],
    },
    {
      category: 'Backend',
      items: [
        { name: 'Node.js', logo: '/assets/node.jpeg', level: 85 },
        { name: 'Express.js', logo: '/assets/express.png', level: 80 },
        { name: 'RESTful APIs', logo: '/assets/api.jpg', level: 80 },
      ],
    },
    {
      category: 'Databases',
      items: [
        { name: 'MongoDB', logo: '/assets/mongodb.png', level: 80 },
        { name: 'MySQL', logo: '/assets/mysql.png', level: 75 },
      ],
    },
    {
      category: 'Version Control',
      items: [
        { name: 'Git', logo: '/assets/git.png', level: 90 },
        { name: 'GitHub', logo: '/assets/github.png', level: 90 },
      ],
    },
    {
      category: 'Deployment & Tools',
      items: [
        { name: 'Vercel', logo: '/assets/vercel.png', level: 85 },
      ],
    },
  ];

  // Function to generate an array of star icons based on the skill level
  const renderStars = (level) => {
    const stars = [];
    const fullStars = Math.round(level / 20); // 5 stars, each representing 20%
    for (let i = 0; i < 5; i++) {
      stars.push(i < fullStars ? '★' : '☆');
    }
    return stars.join(''); // Return the stars as a string
  };

  return (
    <section className="skills">
      <div className="skills-container">
        <h2>My Skills</h2>
        <div className="skills-grid">
          {skills.map((skillCategory, index) => (
            <div key={index} className="skills-category">
              <h3>{skillCategory.category}</h3>
              <div className="skills-list">
                {skillCategory.items.map((skill, index) => (
                  <div key={index} className="skill-card">
                    <img
                      src={skill.logo}
                      alt={skill.name}
                      className="skill-logo"
                    />
                    <h4>{skill.name}</h4>
                    <div className="stars">{renderStars(skill.level)}</div> {/* Display stars */}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
