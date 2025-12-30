import React, { useState } from 'react';
import { ExternalLink, Github, Folder, Tag } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import SEO from '../components/SEO';

const Projects = () => {
  const [filter, setFilter] = useState('All');

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured online store with cart functionality, payment processing, and user authentication.',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      links: { demo: '#', github: '#' },
      category: 'Full Stack',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    {
      title: 'Task Management App',
      description: 'A productivity tool for teams to organize tasks, track progress, and collaborate in real-time.',
      tags: ['Vue.js', 'Firebase', 'Tailwind CSS'],
      links: { demo: '#', github: '#' },
      category: 'Frontend',
      image: 'https://images.unsplash.com/photo-1540350394557-8d14678e7f91?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    {
      title: 'Weather Dashboard',
      description: 'Real-time weather application providing detailed forecasts and interactive maps using external APIs.',
      tags: ['React', 'OpenWeatherMap API', 'Chart.js'],
      links: { demo: '#', github: '#' },
      category: 'Frontend',
      image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    {
      title: 'Finance Tracker',
      description: 'Personal finance application for tracking income, expenses, and visualizing spending habits.',
      tags: ['Next.js', 'PostgreSQL', 'Prisma'],
      links: { demo: '#', github: '#' },
      category: 'Full Stack',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    {
      title: 'Portfolio Website',
      description: 'Modern, responsive portfolio website showcasing projects and skills with smooth animations.',
      tags: ['React', 'GSAP', 'Vite'],
      links: { demo: '#', github: '#' },
      category: 'Frontend',
      image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    {
      title: 'Chat Application',
      description: 'Real-time messaging app with features like group chats, file sharing, and online status indicators.',
      tags: ['Socket.io', 'Express', 'React'],
      links: { demo: '#', github: '#' },
      category: 'Backend',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    }
  ];

  const categories = ['All', 'Frontend', 'Backend', 'Full Stack'];

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(project => project.category === filter);

  return (
    <section className="projects-section">
      <SEO
        title="Projects"
        description="Explore my latest projects, including full-stack applications, frontend demos, and more."
      />
      <div className="projects-container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Featured Projects
        </motion.h2>

        <motion.div
          className="filter-buttons"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${filter === cat ? 'active' : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        <motion.div
          className="projects-grid"
          layout
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                className="project-card"
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -10 }}
              >
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <div className="project-links">
                      <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                        <Github size={24} />
                      </a>
                      <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={24} />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="project-content">
                  <div className="project-header">
                    <div className="project-links-mobile">
                      <a href={project.links.github}><Github size={20} /></a>
                      <a href={project.links.demo}><ExternalLink size={20} /></a>
                    </div>
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tags">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="project-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <style>{`
        .projects-section {
          padding: 6rem 2rem;
          background: var(--bg-color);
        }

        .projects-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .section-title {
          font-size: clamp(2rem, 4vw, 3rem);
          text-align: center;
          margin-bottom: 3rem;
          background: var(--accent-gradient);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .filter-buttons {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 4rem;
          flex-wrap: wrap;
        }

        .filter-btn {
          padding: 0.5rem 1.5rem;
          background: transparent;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          color: var(--text-secondary);
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .filter-btn:hover, .filter-btn.active {
          background: var(--primary-color);
          color: var(--bg-color);
          border-color: var(--primary-color);
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2.5rem;
        }

        .project-card {
          background: var(--surface-color);
          border-radius: var(--radius-lg);
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.05);
          transition: border-color 0.3s ease;
        }

        .project-card:hover {
          border-color: var(--primary-color);
        }

        .project-image {
          position: relative;
          height: 200px;
          overflow: hidden;
        }

        .project-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .project-card:hover .project-image img {
          transform: scale(1.1);
        }

        .project-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(10, 10, 10, 0.8);
          display: flex;
          justify-content: center;
          align-items: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .project-card:hover .project-overlay {
          opacity: 1;
        }

        .project-links {
          display: flex;
          gap: 1.5rem;
        }

        .project-links a {
          color: var(--text-primary);
          transition: color 0.3s ease;
        }

        .project-links a:hover {
          color: var(--primary-color);
        }

        .project-content {
          padding: 2rem;
        }

        .project-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }

        .folder-icon {
          color: var(--primary-color);
        }

        .project-links-mobile {
          display: none;
          gap: 1rem;
        }

        .project-links-mobile a {
          color: var(--text-secondary);
        }

        .project-card h3 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
          color: var(--text-primary);
          font-family: var(--font-main);
        }

        .project-card p {
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
          line-height: 1.6;
        }

        .project-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .project-tag {
          font-size: 0.75rem;
          padding: 0.25rem 0.75rem;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 15px;
          color: var(--text-secondary);
          display: flex;
          align-items: center;
          gap: 0.3rem;
        }

        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }

          .project-overlay {
            display: none;
          }

          .project-links-mobile {
            display: flex;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;
