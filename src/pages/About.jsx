import React from 'react';
import { Code, Database, Globe, Layout, Server, Terminal } from 'lucide-react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const About = () => {
  return (
    <section className="about-section">
      <SEO
        title="About Me"
        description="Learn more about Ravishka Indraji, a Software Engineer with 3+ years of experience in Frontend and Backend development."
      />
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
              <span className="years">3+</span>
              <span className="label">Years of<br />Experience</span>
            </div>
          </motion.div>

          <motion.div
            className="about-image-container"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="image-wrapper">
              <img src="/Avatar.png" alt="Ravishka Indraji" className="profile-image" />
              <div className="image-border"></div>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        .about-section {
          padding: 8rem 2rem;
          background: var(--bg-color);
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
        }

        .about-container {
          max-width: 1200px;
          margin: 0 auto;
          width: 100%;
        }

        .about-content {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 6rem;
          align-items: center;
        }

        .section-title {
          font-size: clamp(2.5rem, 5vw, 3.5rem);
          margin-bottom: 2rem;
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
          margin-top: 2rem;
        }

        .years {
          font-size: 3rem;
          font-weight: 700;
          color: var(--primary-color);
          line-height: 1;
        }

        .label {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.2;
          text-align: left;
        }

        .about-image-container {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .image-wrapper {
          position: relative;
          width: 100%;
          max-width: 400px;
          aspect-ratio: 1;
        }

        .profile-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 20px;
          position: relative;
          z-index: 2;
          filter: grayscale(20%);
          transition: all 0.5s ease;
        }

        .image-wrapper:hover .profile-image {
          filter: grayscale(0%);
          transform: translateY(-10px);
        }

        .image-border {
          position: absolute;
          top: 20px;
          right: -20px;
          bottom: -20px;
          left: 20px;
          border: 2px solid var(--primary-color);
          border-radius: 20px;
          z-index: 1;
          transition: all 0.5s ease;
        }

        .image-wrapper:hover .image-border {
          top: 10px;
          right: -10px;
          bottom: -10px;
          left: 10px;
        }

        @media (max-width: 968px) {
          .about-content {
            grid-template-columns: 1fr;
            gap: 4rem;
            text-align: center;
          }

          .about-text {
            order: 2;
          }

          .about-image-container {
            order: 1;
            margin-bottom: 2rem;
          }

          .experience-badge {
            margin: 2rem auto 0;
          }
          
          .label {
            text-align: left;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
