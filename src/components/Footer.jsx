import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, Twitter, Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-logo">Ravishka.</h3>
            <p className="footer-tagline">
              Crafting digital experiences with passion and precision.
            </p>
            <div className="social-links">
              <a href="https://github.com/ravi1280" target="_blank" rel="noopener noreferrer" className="social-link">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/ravishka-ranaweera-b56810321/" target="_blank" rel="noopener noreferrer" className="social-link">
                <Linkedin size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <Twitter size={20} />
              </a>
              <a href="mailto:ravishkaindrajith9.9@gmail.com" className="social-link">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Services</h4>
            <ul className="footer-links">
              <li><a href="#web">Web Development</a></li>
              <li><a href="#mobile">Mobile Apps</a></li>
              <li><a href="#cloud">Cloud Solutions</a></li>
              <li><a href="#consulting">Consulting</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Get In Touch</h4>
            <ul className="footer-contact">
              <li>Ravishkaindrajith9.9@gmail.com</li>
              <li>+94719681816</li>
              <li>Gampaha, Sri Lanka</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            © {new Date().getFullYear()}  Ravishka indraji. All rights reserved.
          </p>
          <button onClick={scrollToTop} className="scroll-top" aria-label="Scroll to top">
            <ArrowUp size={20} />
          </button>
        </div>
      </div>

      <style>{`
        .footer {
          background: var(--surface-color);
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          padding: 4rem 2rem 2rem;
          position: relative;
        }

        .footer::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: var(--accent-gradient);
        }

        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .footer-content {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 3rem;
          margin-bottom: 3rem;
        }

        .footer-section h3,
        .footer-section h4 {
          color: var(--text-primary);
          margin-bottom: 1.5rem;
        }

        .footer-logo {
          font-size: 1.5rem;
          background: var(--accent-gradient);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .footer-tagline {
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
          line-height: 1.6;
        }

        .social-links {
          display: flex;
          gap: 1rem;
        }

        .social-link {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.05);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-secondary);
          transition: all 0.3s ease;
          border: 1px solid transparent;
        }

        .social-link:hover {
          background: rgba(0, 240, 255, 0.1);
          color: var(--primary-color);
          border-color: var(--primary-color);
          transform: translateY(-3px);
        }

        .footer-links {
          list-style: none;
          padding: 0;
        }

        .footer-links li {
          margin-bottom: 0.75rem;
        }

        .footer-links a {
          color: var(--text-secondary);
          transition: color 0.3s ease;
        }

        .footer-links a:hover {
          color: var(--primary-color);
        }

        .footer-contact {
          list-style: none;
          padding: 0;
          color: var(--text-secondary);
        }

        .footer-contact li {
          margin-bottom: 0.75rem;
        }

        .footer-bottom {
          display: flex;
          justify-content: center;
          align-items: center;
          padding-top: 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          position: relative;
        }

        .copyright {
          color: var(--text-secondary);
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .scroll-top {
          position: fixed;
          bottom: 40px;
          right: 40px;
          z-index: 50;
          width: 45px;
          height: 45px;
          border-radius: 50%;
          background: var(--text-primary);
          color: var(--bg-color);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          border: none;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
        }

        .scroll-top:hover {
          background: var(--primary-color);
          color: white;
          transform: translateY(-3px);
          box-shadow: 0 10px 20px rgba(0, 240, 255, 0.5);
        }

        @media (max-width: 768px) {
          .footer {
            padding: 3rem 1.5rem 2rem;
          }

          .footer-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .footer-bottom {
            flex-direction: column;
            gap: 1.5rem;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
