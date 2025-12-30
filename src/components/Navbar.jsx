import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Code2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Blogs', path: '/blogs' },
    { name: 'Contact', path: '/contact' },
  ];

  const menuVariants = {
    closed: {
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    },
    open: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    }
  };

  const isHome = location.pathname === '/';

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${!isHome ? 'always-visible' : ''}`}>
      <div className="nav-container">


        <Link to="/" className="logo">
          <img src="/logo.png" alt="Logo" style={{ height: '40px', width: 'auto' }} />
        </Link>

        <div className="desktop-links">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <button className="menu-btn" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="mobile-menu"
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
            >
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="mobile-link"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          padding: 2rem 2rem;
          transition: all 0.3s ease;
          background: transparent;
          transform: translateY(-100%);
          opacity: 0;
        }

        .navbar.always-visible {
          transform: translateY(0);
          opacity: 1;
        }

        @media (max-width: 768px) {
          .navbar {
            padding: 1rem;
          }
          .navbar.scrolled {
            padding: 1rem;
          }
        }
        
        .navbar.scrolled {
          padding: 1.5rem 2rem;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
          transform: translateY(0);
          opacity: 1;
        }
        
        .nav-container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: flex-end;
          align-items: center;
        }
        
        .logo {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--text-primary);
          letter-spacing: -0.5px;
        }
        
        .desktop-links {
          display: flex;
          gap: 2rem;
        }
        
        .nav-link {
          position: relative;
          font-weight: 500;
          color: var(--text-secondary);
          transition: color 0.3s ease;
        }
        
        .nav-link:hover, .nav-link.active {
          color: var(--primary-color);
        }
        
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--accent-gradient);
          transition: width 0.3s ease;
        }
        
        .nav-link:hover::after, .nav-link.active::after {
          width: 100%;
        }
        
        .menu-btn {
          display: none;
          color: var(--text-primary);
          z-index: 1001;
          background: none;
          border: none;
          cursor: pointer;
        }
        
        .mobile-menu {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background: var(--bg-color);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 2rem;
          z-index: 999;
        }
        
        .mobile-link {
          font-size: 2rem;
          font-weight: 700;
          color: var(--text-primary);
        }
        
        @media (max-width: 768px) {
          .desktop-links {
            display: none;
          }
          .menu-btn {
            display: block;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
