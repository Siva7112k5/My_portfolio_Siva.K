import React from 'react';
import { MapPin, Briefcase, FolderGit2, Code2 } from 'lucide-react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">About <span>Me</span></h2>
        
        <div className="about-container">
          
          {/* Profile Image Column */}
          <div className="about-image-col">
            <div className="profile-image-wrapper">
              <div className="image-border-spin"></div>
              <img 
                src="https://ui-avatars.com/api/?name=Siva+K&size=400&background=2563eb&color=fff&font-size=0.33" 
                alt="Siva K Profile" 
                className="profile-img"
              />
            </div>
          </div>

          {/* Content Column */}
          <div className="about-content-col">
            <h3 className="about-subtitle">Full Stack Developer & Computer Science Student</h3>
            
            <div className="about-text">
              <p>
                I am Siva, a passionate software developer focused on creating scalable web applications 
                and solving real-world problems through technology. I enjoy building products, 
                exploring backend systems, and learning emerging technologies.
              </p>
              <p>
                Currently pursuing my BSc in Computer Science at S.T. Hindu College, Nagercoil. 
                I have a Diploma in Full Stack Java Development and specialize in modern web stacks 
                including React, Node.js, Python, and low-code platforms like Zoho Creator.
              </p>
            </div>

            {/* Info Cards */}
            <div className="info-cards">
              <div className="info-card">
                <Briefcase className="info-icon" />
                <span className="info-value">3+</span>
                <span className="info-label">Projects Built</span>
              </div>
              <div className="info-card">
                <Code2 className="info-icon" />
                <span className="info-value">10+</span>
                <span className="info-label">Technologies</span>
              </div>
              <div className="info-card">
                <FolderGit2 className="info-icon" />
                <span className="info-value">100%</span>
                <span className="info-label">Passion to Learn</span>
              </div>
              <div className="info-card">
                <MapPin className="info-icon" />
                <span className="info-value">India</span>
                <span className="info-label">Nagercoil</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
