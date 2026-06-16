import React from 'react';
import { ArrowRight, Mail } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from './BrandIcons';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        
        {/* Left Column - Content */}
        <div className="hero-content">
          <div className="hero-badge">
            <span className="pulse-dot"></span>
            Full Stack Developer
          </div>
          
          <h1 className="hero-title">
            Building Modern Software Solutions With <span>Clean Code</span>
          </h1>
          
          <p className="hero-description">
            Software developer passionate about building full-stack applications, 
            solving real-world problems, and exploring AI-powered technologies.
          </p>
          
          <div className="hero-buttons">
            <a href="#projects" className="btn-primary">
              View My Projects <ArrowRight size={18} />
            </a>
            <a href="#contact" className="btn-secondary">
              Contact Me
            </a>
          </div>
          
          <div className="hero-socials">
            <a href="https://github.com/Siva7112k5" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <GitHubIcon size={22} />
            </a>
            <a href="https://www.linkedin.com/in/siva-k-071107112k5" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <LinkedInIcon size={22} />
            </a>
            <a href="mailto:ksivakannan2005@gmail.com" aria-label="Email">
              <Mail size={22} />
            </a>
          </div>
        </div>

        {/* Right Column - Visual Element */}
        <div className="hero-visual">
          <div className="tech-stack-circle">
            <div className="circle-inner">
              <div className="code-snippet">
                <pre>
                  <code>
<span className="syntax-keyword">const</span> <span className="syntax-def">developer</span> = {'{'}
<br/>
&nbsp;&nbsp;name: <span className="syntax-string">'Siva K'</span>,
<br/>
&nbsp;&nbsp;role: <span className="syntax-string">'Full Stack'</span>,
<br/>
&nbsp;&nbsp;focus: <span className="syntax-string">'Problem Solving'</span>,
<br/>
&nbsp;&nbsp;coffee: <span className="syntax-keyword">true</span>
<br/>
{'}'};
<br/>
<br/>
<span className="syntax-func">buildGreatSoftware</span>(developer);
                  </code>
                </pre>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="floating-element react-icon">⚛</div>
            <div className="floating-element python-icon">🐍</div>
            <div className="floating-element db-icon">🗄️</div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
