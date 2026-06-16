import React from 'react';
import './Skills.css';

const skills = [
  { category: 'Frontend', icon: '⚛️', items: [
    { name: 'React.js', desc: 'Component-based UI development' },
    { name: 'JavaScript', desc: 'ES6+ modern scripting' },
    { name: 'HTML & CSS', desc: 'Semantic, responsive markup' },
    { name: 'TypeScript', desc: 'Type-safe JS development' },
  ]},
  { category: 'Backend', icon: '🖥️', items: [
    { name: 'Python / Flask', desc: 'Web apps & REST APIs' },
    { name: 'Java', desc: 'Enterprise-grade backend' },
    { name: 'Spring Boot', desc: 'Microservices architecture' },
    { name: 'Node.js', desc: 'Scalable server-side apps' },
  ]},
  { category: 'Database', icon: '🗄️', items: [
    { name: 'PostgreSQL', desc: 'Relational database design' },
    { name: 'MongoDB', desc: 'NoSQL data management' },
    { name: 'SQLAlchemy', desc: 'Python ORM for databases' },
    { name: 'MySQL', desc: 'Structured query language' },
  ]},
  { category: 'Tools & Platforms', icon: '🛠️', items: [
    { name: 'Git & GitHub', desc: 'Version control & collaboration' },
    { name: 'Zoho Creator', desc: 'Low-code business apps' },
    { name: 'Docker', desc: 'Containerization basics' },
    { name: 'AWS', desc: 'Cloud deployment basics' },
  ]},
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <p className="section-eyebrow">What I Work With</p>
        <h2 className="section-title">Technical <span>Skills</span></h2>
        <div className="skills-grid">
          {skills.map((group) => (
            <div className="skill-category" key={group.category}>
              <div className="category-header">
                <span className="category-icon">{group.icon}</span>
                <h3>{group.category}</h3>
              </div>
              <div className="skill-items">
                {group.items.map((skill) => (
                  <div className="skill-card" key={skill.name}>
                    <div className="skill-card-dot"></div>
                    <div>
                      <p className="skill-name">{skill.name}</p>
                      <p className="skill-desc">{skill.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
