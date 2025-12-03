import React from 'react';
import { Code, Database, Globe, Layout, Server, Terminal } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  const skills = [
    { name: 'Frontend', icon: <Layout size={20} />, items: ['React', 'Vue', 'Next.js', 'Tailwind CSS'] },
    { name: 'Backend', icon: <Server size={20} />, items: ['Node.js', 'Python', 'Go', 'PostgreSQL'] },
    { name: 'DevOps', icon: <Terminal size={20} />, items: ['Docker', 'AWS', 'CI/CD', 'Linux'] },
    { name: 'Tools', icon: <Database size={20} />, items: ['Git', 'Figma', 'VS Code', 'Postman'] }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">About Me</h2>
            <p className="bio-text">
              I'm a passionate Software Engineer with a strong foundation in computer science and a love for building things that live on the internet. My journey started with a curiosity about how websites work, which led me down the rabbit hole of coding and design.
            </p>
            <p className="bio-text">
              Today, I focus on building accessible, inclusive products and digital experiences for a variety of clients. I enjoy bridging the gap between engineering and design — combining my technical knowledge with my keen eye for design to create a beautiful product.
            </p>
            <div className="experience-badge">
              <span className="years">5+</span>
              <span className="label">Years of<br />Experience</span>
            </div>
          </motion.div>

          <motion.div
            className="skills-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {skills.map((category, index) => (
              <motion.div
                key={index}
                className="skill-card"
                variants={itemVariants}
                whileHover={{ y: -5, borderColor: 'var(--primary-color)' }}
              >
                <div className="skill-header">
                  <span className="skill-icon">{category.icon}</span>
                  <h3>{category.name}</h3>
                </div>
                <div className="skill-tags">
                  {category.items.map((item, i) => (
                    <span key={i} className="skill-tag">{item}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <style>{`
        .about-section {
          padding: 6rem 2rem;
          background: var(--bg-color);
          position: relative;
        }

        .about-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .about-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        .section-title {
          font-size: clamp(2rem, 4vw, 3rem);
          margin-bottom: 1.5rem;
          background: var(--accent-gradient);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .bio-text {
          color: var(--text-secondary);
          line-height: 1.8;
          margin-bottom: 1.5rem;
          font-size: 1.1rem;
        }

        .experience-badge {
          display: inline-flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem 2rem;
          background: var(--surface-color);
          border-radius: var(--radius-md);
          border: 1px solid rgba(255, 255, 255, 0.05);
          margin-top: 1rem;
        }

        .years {
          font-size: 2.5rem;
          font-weight: 700;
          color: var(--primary-color);
          line-height: 1;
        }

        .label {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.2;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
        }

        .skill-card {
          background: var(--surface-color);
          padding: 1.5rem;
          border-radius: var(--radius-md);
          border: 1px solid rgba(255, 255, 255, 0.05);
          transition: all 0.3s ease;
        }

        .skill-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1rem;
        }

        .skill-icon {
          color: var(--primary-color);
        }

        .skill-card h3 {
          font-size: 1.1rem;
          color: var(--text-primary);
        }

        .skill-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .skill-tag {
          font-size: 0.85rem;
          color: var(--text-secondary);
          background: rgba(255, 255, 255, 0.05);
          padding: 0.25rem 0.75rem;
          border-radius: 20px;
        }

        @media (max-width: 968px) {
          .about-content {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
        }

        @media (max-width: 480px) {
          .skills-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
