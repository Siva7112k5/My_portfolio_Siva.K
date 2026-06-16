import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { GitHubIcon } from './BrandIcons';
import './Projects.css';

const projects = [
  {
    id: 1,
    title: 'Triowise Marketplace',
    description: 'A fully functional multi-vendor e-commerce platform with user authentication, product management, shopping cart, wishlist, order processing, and admin dashboard. Features voice search and dark mode.',
    tech: ['Flask', 'Python', 'SQLAlchemy', 'HTML/CSS', 'JavaScript'],
    live: 'https://projecttriowise.vercel.app/',
    github: 'https://github.com/Siva7112k5',
    featured: true,
    emoji: '🛒',
    color: '#2563eb',
  },
  {
    id: 2,
    title: 'College Complaint System',
    description: 'An intelligent complaint management system for colleges. Students can raise, track, and resolve complaints digitally with an admin panel for management.',
    tech: ['React', 'Node.js', 'MongoDB'],
    live: 'https://college-complaint.vercel.app/',
    github: 'https://github.com/Siva7112k5',
    featured: false,
    emoji: '🎓',
    color: '#7c3aed',
  },
  {
    id: 3,
    title: 'Grocery Management System',
    description: 'A low-code business application built on Zoho Creator for managing grocery inventory, orders, and vendors. Includes automated workflows and a customer portal.',
    tech: ['Zoho Creator', 'Deluge Script', 'Low-Code'],
    live: 'https://sivakgorcery.zohocreatorportal.in',
    github: 'https://github.com/Siva7112k5',
    featured: false,
    emoji: '🏪',
    color: '#059669',
  },
  {
    id: 4,
    title: 'Banking Application',
    description: 'A full-stack Java banking system with account management, transaction history, fund transfers, and a secure login system using Spring Boot and PostgreSQL.',
    tech: ['Java', 'Spring Boot', 'PostgreSQL', 'HTML/CSS'],
    live: '#',
    github: 'https://github.com/Siva7112k5',
    featured: false,
    emoji: '🏦',
    color: '#d97706',
  },
  {
    id: 5,
    title: 'Personal Portfolio v1',
    description: 'A responsive developer portfolio featuring dark/light mode, smooth scroll animations, and a clean showcase of projects and skills.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    live: 'https://siva7112k5.github.io/my_potfolio',
    github: 'https://github.com/Siva7112k5',
    featured: false,
    emoji: '💼',
    color: '#db2777',
  },
  {
    id: 6,
    title: 'Task Manager App',
    description: 'A full-stack productivity application to create, manage, and track tasks with priority levels, due dates, and category filters.',
    tech: ['React', 'Node.js', 'MongoDB'],
    live: '#',
    github: 'https://github.com/Siva7112k5',
    featured: false,
    emoji: '✅',
    color: '#0891b2',
  },
];

const Projects = () => {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <p className="section-eyebrow">What I've Built</p>
        <h2 className="section-title">Featured <span>Projects</span></h2>

        {/* Featured Project */}
        {projects.filter(p => p.featured).map(project => (
          <div className="featured-project" key={project.id} style={{'--project-color': project.color}}>
            <div className="featured-project-badge">⭐ Featured Project</div>
            <div className="featured-project-content">
              <div className="featured-left">
                <div className="featured-emoji">{project.emoji}</div>
                <h3 className="featured-title">{project.title}</h3>
                <p className="featured-desc">{project.description}</p>
                <div className="tech-tags">
                  {project.tech.map(t => <span key={t} className="tech-tag">{t}</span>)}
                </div>
                <div className="project-links">
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn-primary">
                    <ExternalLink size={16} /> Live Demo
                  </a>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                    <GitHubIcon size={16} /> GitHub
                  </a>
                </div>
              </div>
              <div className="featured-right">
                <div className="featured-mockup">
                  <div className="browser-chrome">
                    <span></span><span></span><span></span>
                    <div className="browser-url">projecttriowise.vercel.app</div>
                  </div>
                  <div className="browser-body browser-body-img">
                    <img src="/triowise.png" alt="Triowise Marketplace Screenshot" className="mockup-screenshot" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Other Projects Grid */}
        <h3 className="other-projects-title">Other Projects</h3>
        <div className="projects-grid">
          {projects.filter(p => !p.featured).map(project => (
            <div
              className="project-card"
              key={project.id}
              style={{'--project-color': project.color}}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="project-card-top">
                <span className="project-emoji">{project.emoji}</span>
                <div className="project-card-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><GitHubIcon size={20} /></a>
                  {project.live !== '#' && <a href={project.live} target="_blank" rel="noopener noreferrer" aria-label="Live"><ExternalLink size={20} /></a>}
                </div>
              </div>
              <h3 className="project-card-title">{project.title}</h3>
              <p className="project-card-desc">{project.description}</p>
              <div className="tech-tags">
                {project.tech.map(t => <span key={t} className="tech-tag">{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
