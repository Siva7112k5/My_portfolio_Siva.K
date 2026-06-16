import React from 'react';
import './Experience.css';

const experiences = [
  {
    year: '2023 – Present',
    title: 'BSc Computer Science',
    org: 'S.T. Hindu College, Nagercoil',
    desc: 'Pursuing a full-time Bachelor of Science in Computer Science with a focus on algorithms, databases, and software engineering principles.',
    type: 'education',
    icon: '🎓',
  },
  {
    year: '2024',
    title: 'Diploma – Full Stack Java Development',
    org: 'NIIT / Professional Institute',
    desc: 'Completed a certified diploma program covering Core Java, Spring Boot, JDBC, REST APIs, and enterprise application development.',
    type: 'certification',
    icon: '☕',
  },
  {
    year: '2024',
    title: 'Zoho Creator Specialist',
    org: 'Zoho Corporation',
    desc: 'Certified in building low-code business applications using Zoho Creator. Proficient in Deluge scripting and workflow automation.',
    type: 'certification',
    icon: '⚙️',
  },
  {
    year: '2024 – 2025',
    title: 'Project – Triowise Marketplace',
    org: 'Personal Project',
    desc: 'Built and deployed a full-stack multi-vendor e-commerce platform using Flask, SQLAlchemy, and modern web technologies. Features include auth, product management, voice search, and admin panel.',
    type: 'project',
    icon: '🛒',
  },
];

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <p className="section-eyebrow">My Journey</p>
        <h2 className="section-title">Education & <span>Experience</span></h2>
        <div className="timeline">
          {experiences.map((item, i) => (
            <div className={`timeline-item ${i % 2 === 0 ? 'left' : 'right'}`} key={i}>
              <div className="timeline-dot">{item.icon}</div>
              <div className="timeline-card">
                <span className={`timeline-badge badge-${item.type}`}>{item.type}</span>
                <p className="timeline-year">{item.year}</p>
                <h3 className="timeline-title">{item.title}</h3>
                <p className="timeline-org">{item.org}</p>
                <p className="timeline-desc">{item.desc}</p>
              </div>
            </div>
          ))}
          <div className="timeline-line"></div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
