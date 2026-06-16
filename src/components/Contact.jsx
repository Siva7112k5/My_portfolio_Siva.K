import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from './BrandIcons';
import './Contact.css';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailto = `mailto:ksivakannan2005@gmail.com?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`;
    window.location.href = mailto;
    setStatus('Opening your email client...');
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <p className="section-eyebrow">Get In Touch</p>
        <h2 className="section-title">Let's Build Something <span>Great Together</span></h2>

        <div className="contact-grid">
          {/* Left - Info */}
          <div className="contact-info">
            <p className="contact-intro">
              I'm currently open to new opportunities, freelance projects, and collaborations. 
              Whether you have a question, a project idea, or just want to say hi — my inbox is always open!
            </p>

            <div className="contact-links">
              <a href="mailto:ksivakannan2005@gmail.com" className="contact-link">
                <div className="contact-link-icon"><Mail size={22} /></div>
                <div>
                  <p className="contact-link-label">Email</p>
                  <p className="contact-link-value">ksivakannan2005@gmail.com</p>
                </div>
              </a>
              <a href="tel:+919043345140" className="contact-link">
                <div className="contact-link-icon"><Phone size={22} /></div>
                <div>
                  <p className="contact-link-label">Phone</p>
                  <p className="contact-link-value">+91 90433 45140</p>
                </div>
              </a>
              <div className="contact-link">
                <div className="contact-link-icon"><MapPin size={22} /></div>
                <div>
                  <p className="contact-link-label">Location</p>
                  <p className="contact-link-value">Thovalai, Kanyakumari, TN – 629302</p>
                </div>
              </div>
            </div>

            <div className="contact-socials">
              <a href="https://github.com/Siva7112k5" target="_blank" rel="noopener noreferrer" className="social-btn">
                <GitHubIcon size={20} /> GitHub
              </a>
              <a href="https://www.linkedin.com/in/siva-k-071107112k5" target="_blank" rel="noopener noreferrer" className="social-btn">
                <LinkedInIcon size={20} /> LinkedIn
              </a>
            </div>
          </div>

          {/* Right - Form */}
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input id="name" name="name" type="text" placeholder="John Doe" required value={form.name} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input id="email" name="email" type="email" placeholder="john@example.com" required value={form.email} onChange={handleChange} />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input id="subject" name="subject" type="text" placeholder="Project Collaboration" required value={form.subject} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows={6} placeholder="Tell me about your project..." required value={form.message} onChange={handleChange}></textarea>
            </div>
            {status && <p className="form-status">{status}</p>}
            <button type="submit" className="btn-primary submit-btn">
              <Send size={18} /> Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
