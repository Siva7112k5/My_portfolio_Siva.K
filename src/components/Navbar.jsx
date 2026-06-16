import React, { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`navbar-container ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-content container">
        <a href="#home" className="navbar-logo">
          Siva<span> K</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href}>{link.name}</a>
              </li>
            ))}
          </ul>
          <a href="/Siva_K_Resume.pdf" download="Siva_K_Resume.pdf" className="btn-primary">
            <Download size={18} /> Resume
          </a>
        </nav>

        {/* Mobile Navigation Toggle */}
        <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle menu">
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Backdrop overlay */}
      {mobileMenuOpen && <div className="mobile-overlay" onClick={toggleMenu}></div>}

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        {/* Close button inside the panel */}
        <button className="mobile-close-btn" onClick={toggleMenu} aria-label="Close menu">
          <X size={26} />
        </button>

        <ul className="mobile-nav-links">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href} onClick={toggleMenu}>
                {link.name}
              </a>
            </li>
          ))}
          <li>
            <a href="/Siva_K_Resume.pdf" download="Siva_K_Resume.pdf" className="btn-primary mobile-resume-btn" onClick={toggleMenu}>
              <Download size={18} /> Download Resume
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
