import React from 'react';
import { Mail, ArrowUp } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from './BrandIcons';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-left">
          <a href="#home" className="footer-logo">Siva<span>.dev</span></a>
          <p className="footer-tagline">Building modern software solutions with clean code.</p>
          <div className="footer-socials">
            <a href="https://github.com/Siva7112k5" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><GitHubIcon size={20} /></a>
            <a href="https://www.linkedin.com/in/siva-k-071107112k5" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><LinkedInIcon size={20} /></a>
            <a href="mailto:ksivakannan2005@gmail.com" aria-label="Email"><Mail size={20} /></a>
          </div>
        </div>
        <div className="footer-right">
          <p className="footer-copy">© 2025 Siva K. All rights reserved.</p>
          <p className="footer-sub">Designed & Developed by Siva K</p>
        </div>
        <a href="#home" className="back-to-top" aria-label="Back to top">
          <ArrowUp size={20} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
