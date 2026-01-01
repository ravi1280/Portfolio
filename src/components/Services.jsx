import React, { useState } from 'react';
import { Monitor, Smartphone, Cloud, Layers, Zap, Lock, Globe, Database, Palette, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

const Services = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredCard, setHoveredCard] = useState(null);

  const services = [
    {
      icon: <Monitor size={48} />,
      title: 'Web Application Development',
      description: 'Modern, responsive web applications built with clean UI, optimized performance, and scalable architecture.',
      size: 'large'
    },
    {
      icon: <Database size={40} />,
      title: 'Mobile App Development (Android)',
      description: 'Building robust, scalable mobile applications for Android using Kotlin and Java.',
      size: 'medium'
    },
    {
      icon: <Cloud size={48} />,
      title: 'Backend & API Development',
      description: 'Secure and scalable backend systems with REST APIs that power web and mobile applications.',
      size: 'medium'
    },

    {
      icon: <Palette size={40} />,
      title: 'Database Design & System Architecture',
      description: 'Efficient database schemas and system designs that support scalability, performance, and long-term maintainability.',
      size: 'medium'
    },
    {
      icon: <Smartphone size={40} />,
      title: 'Authentication & Security Implementation',
      description: 'Secure login systems using JWT, role-based access control, and best security practices.',
      size: 'large'
    },
    {
      icon: <Rocket size={40} />,
      title: 'Desktop POS System Development',
      description: 'Building desktop applications for point-of-sale systems with a focus on usability and performance.',
      size: 'medium'
    }
  ];

  const handleMouseMove = (e, index) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
    setHoveredCard(index);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="services-section">
      <div className="services-container">
        <motion.div
          className="services-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Services I Offer</h2>
        </motion.div>

        <motion.div
          className="bento-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={`bento-card bento-${service.size}`}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              onMouseMove={(e) => handleMouseMove(e, index)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="bento-card-content">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </div>

              {hoveredCard === index && (
                <div
                  className="card-flare"
                  style={{
                    left: `${mousePosition.x}px`,
                    top: `${mousePosition.y}px`
                  }}
                />
              )}
              <div className="card-border"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style>{`
        .services-section {
          padding: 8rem 2.5rem;
          background: var(--bg-color);
          position: relative;
          overflow: hidden;
        }

        .services-container {
          max-width: 1300px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .services-header {
          text-align: center;
          margin-bottom: 5rem;
          max-width: 750px;
          margin-left: auto;
          margin-right: auto;
        }

        .section-title {
          font-size: clamp(2.5rem, 5vw, 3.5rem);
          margin-bottom: 1.5rem;
          background: var(--accent-gradient);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-weight: 800;
        }

        /* Bento Grid Layout */
        .bento-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
          grid-auto-rows: minmax(300px, auto);
        }

        /* Card Size Variants */
        .bento-large {
          grid-column: span 2;
          grid-row: span 1;
          min-height: 300px;
        }

        .bento-medium {
          grid-column: span 1;
          grid-row: span 1;
          min-height: 320px;
        }

        .bento-tall {
          grid-column: span 1;
          grid-row: span 2;
        }

        /* Bento Card Styles */
        .bento-card {
          background: rgba(255, 255, 255, 0.02);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 24px;
          padding: 2.5rem;
          position: relative;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .bento-card::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 24px;
          background: rgba(255, 255, 255, 0.02);
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .bento-card:hover::before {
          opacity: 1;
        }

        .bento-card:hover {
          background: rgba(255, 255, 255, 0.04);
          border-color: rgba(var(--primary-rgb), 0.3);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
        }

        .bento-card-content {
          position: relative;
          z-index: 3;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          height: 100%;
          gap: 1rem;
        }

        /* Large cards have different layout */
        .bento-large .bento-card-content {
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 1rem;
        }

        .service-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--text-primary);
          margin: 0;
          transition: color 0.3s ease;
          line-height: 1.3;
          position: relative;
          z-index: 3;
        }

        .bento-large .service-title {
          font-size: 1.8rem;
        }

        .service-description {
          color: var(--text-secondary);
          line-height: 1.6;
          font-size: 0.95rem;
          margin: 0;
          overflow-wrap: break-word;
          word-wrap: break-word;
          max-width: 100%;
          position: relative;
          z-index: 3;
        }

        /* Flare Effect - Cursor Following Spotlight */
        .card-flare {
          position: absolute;
          width: 500px;
          height: 500px;
          pointer-events: none;
          transform: translate(-50%, -50%);
          background: radial-gradient(
            circle at center,
            rgba(255, 255, 255, 0.12) 0%,
            rgba(0, 255, 136, 0.2) 10%,
            rgba(0, 255, 136, 0.12) 25%,
            rgba(0, 255, 136, 0.06) 45%,
            transparent 70%
          );
          z-index: 2;
          opacity: 0.8;
          mix-blend-mode: screen;
        }

        /* Card Border Effect */
        .card-border {
          position: absolute;
          inset: 0;
          border-radius: 24px;
          padding: 1px;
          background: linear-gradient(
            135deg,
            rgba(var(--primary-rgb), 0.3),
            transparent 50%,
            rgba(var(--primary-rgb), 0.1)
          );
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0;
          transition: opacity 0.4s ease;
          pointer-events: none;
        }

        .bento-card:hover .card-border {
          opacity: 1;
        }

        /* Tablet Layout */
        @media (max-width: 1024px) {
          .bento-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.25rem;
            grid-auto-rows: minmax(280px, auto);
          }

          .bento-large {
            grid-column: span 2;
            min-height: 280px;
          }

          .bento-medium {
            grid-column: span 1;
            min-height: 300px;
          }

          .card-flare {
            width: 400px;
            height: 400px;
          }
        }

        /* Mobile Layout */
        @media (max-width: 768px) {
          .services-section {
            padding: 5rem 1.5rem;
          }

          .bento-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
            grid-auto-rows: auto;
          }

          .bento-large,
          .bento-medium,
          .bento-tall {
            grid-column: span 1;
            grid-row: span 1;
            min-height: 220px;
          }

          .bento-card {
            padding: 2rem 1.5rem;
          }

          .service-title {
            font-size: 1.3rem;
          }

          .bento-large .service-title {
            font-size: 1.5rem;
          }

          .service-description {
            font-size: 0.9rem;
            line-height: 1.5;
          }

          .card-flare {
            width: 300px;
            height: 300px;
          }
        }
      `}</style>
    </section>
  );
};

export default Services;
