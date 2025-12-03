import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Code, Palette, Zap, Users, Target, Lightbulb, Shield } from 'lucide-react';

const WhatIBring = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const offerings = [
    {
      icon: <Code size={40} />,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable code following industry best practices and design patterns. Ensuring readability, testability, and future‑proof architecture for long‑term project health.',
      highlights: ['SOLID principles', 'DRY methodology', 'Documentation']
    },
    {
      icon: <Palette size={40} />,
      title: 'Modern Design',
      description: 'Creating beautiful, intuitive interfaces that provide exceptional user experiences. Emphasizing accessibility, responsive layouts, and visual harmony across devices.',
      highlights: ['User‑centered', 'Responsive', 'Accessibility']
    },
    {
      icon: <Zap size={40} />,
      title: 'Performance',
      description: 'Optimizing applications for speed and efficiency to deliver lightning‑fast experiences. Implementing code‑splitting, lazy loading, and performance monitoring to keep bundles lean.',
      highlights: ['Code splitting', 'Lazy loading', 'Optimization']
    },
    {
      icon: <Shield size={40} />,
      title: 'Security First',
      description: 'Implementing robust security measures to protect user data and ensure privacy. Includes encryption, strong authentication, and regular security audits.',
      highlights: ['Encryption', 'Auth & Auth', 'Security audits']
    },
    {
      icon: <Users size={40} />,
      title: 'Collaboration',
      description: 'Working seamlessly with teams using agile methodologies and clear communication. Facilitating Git workflows, code reviews, and collaborative problem solving.',
      highlights: ['Agile/Scrum', 'Git workflows', 'Team player']
    },
    {
      icon: <Target size={40} />,
      title: 'Goal‑Oriented',
      description: 'Focused on delivering results that align with business objectives and user needs. Tracking KPIs, making data‑driven decisions, and maintaining outcome focus.',
      highlights: ['KPI tracking', 'Data‑driven', 'Results focus']
    },
    {
      icon: <Lightbulb size={40} />,
      title: 'Innovation',
      description: 'Staying ahead with cutting‑edge technologies and creative problem‑solving approaches. Exploring AI integration, new tech stacks, and innovative features.',
      highlights: ['New tech', 'AI integration', 'Creative solving']
    },
    {
      icon: <Code size={40} />,
      title: 'Scalability',
      description: 'Building systems that grow with your business and handle increasing demands. Designing microservices, cloud‑native architectures, and future‑proof solutions.',
      highlights: ['Microservices', 'Cloud native', 'Future proof']
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % offerings.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + offerings.length) % offerings.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="what-i-bring-section">
      <div className="what-i-bring-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">What I Bring to the Table</h2>

        </motion.div>

        <div className="carousel-wrapper">
          <button className="carousel-btn prev-btn" onClick={prevSlide} aria-label="Previous">
            <ChevronLeft size={28} />
          </button>

          <div className="carousel-container">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                className="carousel-card"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                <div className="card-icon">
                  {offerings[currentIndex].icon}
                </div>
                <h3 className="card-title">{offerings[currentIndex].title}</h3>
                <p className="card-description">{offerings[currentIndex].description}</p>
                <div className="card-highlights">
                  {offerings[currentIndex].highlights.map((highlight, idx) => (
                    <span key={idx} className="highlight-tag">
                      {highlight}
                    </span>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <button className="carousel-btn next-btn" onClick={nextSlide} aria-label="Next">
            <ChevronRight size={28} />
          </button>
        </div>

        <div className="carousel-dots">
          {offerings.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <style>{`
        .what-i-bring-section {
          padding: 8rem 2rem;
          background: var(--bg-color);
          position: relative;
          overflow: hidden;
        }
        .what-i-bring-container {
          max-width: 1200px;
          margin: 0 auto;
        }
        .section-header {
          text-align: center;
          margin-bottom: 4rem;
        }
        .section-title {
          font-size: clamp(2.5rem, 5vw, 3.5rem);
          margin-bottom: 1rem;
          background: var(--accent-gradient);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-weight: 800;
        }
        .section-subtitle {
          font-size: 1.2rem;
          color: var(--text-secondary);
          max-width: 600px;
          margin: 0 auto;
        }
        .carousel-wrapper {
          display: flex;
          align-items: center;
          gap: 2rem;
          position: relative;
        }
        .carousel-container {
          flex: 1;
          min-height: 450px;
          display: flex;
          align-items: center;
          justify-content: center;
          perspective: 1000px;
        }
        .carousel-card {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 60px 20px 60px 20px;
          padding: 3.5rem 3rem;
          text-align: center;
          max-width: 700px;
          width: 100%;
          position: relative;
          overflow: hidden;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        .carousel-card:hover {
          transform: translateY(-5px) scale(1.02);
          background: rgba(255, 255, 255, 0.05);
          border-color: rgba(var(--primary-rgb), 0.3);
          box-shadow: 0 30px 60px -12px rgba(var(--primary-rgb), 0.15);
        }
        .carousel-card::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 60px 20px 60px 20px;
          padding: 1px;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(var(--primary-rgb), 0.4), transparent);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
        }
        .carousel-card::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 100%;
          background: radial-gradient(circle at top right, rgba(var(--primary-rgb), 0.1), transparent 60%);
          pointer-events: none;
          z-index: -1;
        }
        .card-icon {
          width: 90px;
          height: 90px;
          margin: 0 auto 2rem;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, rgba(var(--primary-rgb), 0.1), rgba(255, 255, 255, 0.05));
          border: 1px solid rgba(var(--primary-rgb), 0.2);
          border-radius: 24px 8px 24px 8px;
          color: var(--primary-color);
          box-shadow: 0 10px 30px -10px rgba(var(--primary-rgb), 0.3);
          transition: all 0.3s ease;
        }
        .carousel-card:hover .card-icon {
          transform: rotate(5deg) scale(1.1);
          background: linear-gradient(135deg, rgba(var(--primary-rgb), 0.2), rgba(255, 255, 255, 0.1));
          border-color: var(--primary-color);
          box-shadow: 0 0 20px rgba(var(--primary-rgb), 0.4);
        }
        .card-title {
          font-size: 2.2rem;
          font-weight: 800;
          color: var(--text-primary);
          margin-bottom: 1rem;
          letter-spacing: -0.5px;
        }
        .card-description {
          font-size: 1.15rem;
          color: var(--text-secondary);
          line-height: 1.7;
          margin-bottom: 2.5rem;
          font-weight: 300;
        }
        .card-highlights {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          justify-content: center;
        }
        .highlight-tag {
          padding: 0.6rem 1.2rem;
          background: rgba(var(--primary-rgb), 0.08);
          border: 1px solid rgba(var(--primary-rgb), 0.15);
          border-radius: 12px 4px 12px 4px;
          color: var(--primary-color);
          font-size: 0.95rem;
          font-weight: 600;
          transition: all 0.3s ease;
        }
        .highlight-tag:hover {
          background: rgba(var(--primary-rgb), 0.2);
          border-color: var(--primary-color);
          transform: translateY(-3px);
          box-shadow: 0 5px 15px -5px rgba(var(--primary-rgb), 0.3);
        }
        .carousel-btn {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: var(--text-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          flex-shrink: 0;
        }
        .carousel-btn:hover {
          background: rgba(var(--primary-rgb), 0.2);
          border-color: var(--primary-color);
          transform: scale(1.1);
        }
        .carousel-dots {
          display: flex;
          justify-content: center;
          gap: 0.75rem;
          margin-top: 3rem;
        }
        .dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.2);
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .dot.active {
          background: var(--primary-color);
          width: 32px;
          border-radius: 6px;
        }
        .dot:hover:not(.active) {
          background: rgba(255, 255, 255, 0.4);
          transform: scale(1.2);
        }
        @media (max-width: 768px) {
          .what-i-bring-section { padding: 5rem 1.5rem; }
          .carousel-wrapper { gap: 1rem; }
          .carousel-btn { width: 40px; height: 40px; }
          .carousel-container { min-height: 500px; }
          .carousel-card { 
            padding: 2.5rem 1.5rem; 
            border-radius: 40px 16px 40px 16px;
          }
          .carousel-card::before {
             border-radius: 40px 16px 40px 16px;
          }
          .card-title { font-size: 1.75rem; }
          .card-description { font-size: 1rem; }
          .prev-btn { position: absolute; left: 0; top: 50%; transform: translateY(-50%); z-index: 10; }
          .next-btn { position: absolute; right: 0; top: 50%; transform: translateY(-50%); z-index: 10; }
        }
      `}</style>
    </section>
  );
};

export default WhatIBring;
