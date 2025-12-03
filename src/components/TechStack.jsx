import React from 'react';
import { motion } from 'framer-motion';

const TechStack = () => {
  const technologies = [
    { name: 'JavaScript', category: 'Language', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'TypeScript', category: 'Language', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    { name: 'React', category: 'Frontend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Next.js', category: 'Frontend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', invert: true },
    { name: 'Vue.js', category: 'Frontend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
    { name: 'Node.js', category: 'Backend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'Express', category: 'Backend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', invert: true },
    { name: 'Python', category: 'Language', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'Django', category: 'Backend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg' },
    { name: 'PostgreSQL', category: 'Database', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
    { name: 'MongoDB', category: 'Database', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    { name: 'Redis', category: 'Database', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg' },
    { name: 'Docker', category: 'DevOps', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
    { name: 'AWS', category: 'DevOps', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
    { name: 'Git', category: 'Tool', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'Figma', category: 'Tool', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.4
      }
    }
  };

  return (
    <section className="tech-stack-section">
      <div className="tech-container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Technologies I Work With
        </motion.h2>

        <motion.div
          className="tech-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              className="tech-item"
              variants={itemVariants}
              whileHover={{ scale: 1.1, borderColor: 'var(--primary-color)', boxShadow: '0 10px 20px rgba(0, 240, 255, 0.15)' }}
            >
              <div className="tech-icon-wrapper">
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className={`tech-icon ${tech.invert ? 'invert-icon' : ''}`}
                />
              </div>
              <span className="tech-name">{tech.name}</span>
              <span className="tech-category">{tech.category}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style>{`
        .tech-stack-section {
          padding: 8rem 2rem;
          background: var(--bg-color);
        }

        .tech-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .section-title {
          font-size: clamp(2rem, 4vw, 3rem);
          text-align: center;
          margin-bottom: 4rem;
          background: var(--accent-gradient);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .tech-grid {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 2rem;
        }

        .tech-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 160px;
          height: 160px;
          background: var(--surface-color);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: var(--radius-md);
          transition: all 0.3s ease;
          cursor: default;
          padding: 1.5rem;
        }

        .tech-icon-wrapper {
          width: 50px;
          height: 50px;
          margin-bottom: 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .tech-icon {
          width: 100%;
          height: 100%;
          object-fit: contain;
          transition: transform 0.3s ease;
        }
        
        .invert-icon {
          filter: invert(1);
        }

        .tech-item:hover .tech-icon {
          transform: scale(1.1);
        }

        .tech-name {
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 0.25rem;
          font-size: 1rem;
        }

        .tech-category {
          font-size: 0.8rem;
          color: var(--text-secondary);
        }

        @media (max-width: 768px) {
          .tech-stack-section {
            padding: 4rem 1rem;
          }

          .tech-grid {
            gap: 1rem;
          }

          .tech-item {
            width: 130px;
            height: 130px;
            padding: 1rem;
          }

          .tech-icon-wrapper {
            width: 40px;
            height: 40px;
          }

          .tech-name {
            font-size: 0.9rem;
          }
        }
      `}</style>
    </section>
  );
};

export default TechStack;
