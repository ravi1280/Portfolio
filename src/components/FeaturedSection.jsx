import React from 'react';
import { Code, Palette, Zap, Shield, Users, Target, Lightbulb, TrendingUp, Award, CheckCircle, Rocket, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const FeaturedSection = () => {
  const features = [
    {
      icon: <Code size={32} />,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable code following industry best practices and design patterns.',
      details: ['SOLID principles', 'DRY methodology', 'Documentation'],
      color: '#00f0ff'
    },
    {
      icon: <Palette size={32} />,
      title: 'Modern Design',
      description: 'Creating beautiful, intuitive interfaces that provide exceptional user experiences.',
      details: ['User-centered', 'Responsive', 'Accessibility'],
      color: '#7000ff'
    },
    {
      icon: <Zap size={32} />,
      title: 'Performance',
      description: 'Optimizing applications for speed and efficiency to deliver lightning-fast experiences.',
      details: ['Code splitting', 'Lazy loading', 'Optimization'],
      color: '#fee440'
    },
    {
      icon: <Shield size={32} />,
      title: 'Security First',
      description: 'Implementing robust security measures to protect user data and ensure privacy.',
      details: ['Encryption', 'Auth & Auth', 'Security audits'],
      color: '#f15bb5'
    },
    {
      icon: <Users size={32} />,
      title: 'Collaboration',
      description: 'Working seamlessly with teams using agile methodologies and clear communication.',
      details: ['Agile/Scrum', 'Git workflows', 'Team player'],
      color: '#00f5d4'
    },
    {
      icon: <Target size={32} />,
      title: 'Goal-Oriented',
      description: 'Focused on delivering results that align with business objectives and user needs.',
      details: ['KPI tracking', 'Data-driven', 'Results focus'],
      color: '#ff006e'
    },
    {
      icon: <Lightbulb size={32} />,
      title: 'Innovation',
      description: 'Staying ahead with cutting-edge technologies and creative problem-solving approaches.',
      details: ['New tech', 'AI integration', 'Creative solving'],
      color: '#8338ec'
    },
    {
      icon: <TrendingUp size={32} />,
      title: 'Scalability',
      description: 'Building systems that grow with your business and handle increasing demands.',
      details: ['Microservices', 'Cloud native', 'Future proof'],
      color: '#06ffa5'
    }
  ];

  const coreValues = [
    { icon: <Award size={24} />, text: 'Quality over quantity' },
    { icon: <CheckCircle size={24} />, text: 'Attention to detail' },
    { icon: <Rocket size={24} />, text: 'Fast delivery' },
    { icon: <Heart size={24} />, text: 'Passion for excellence' }
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
    <section className="featured-section">
      <div className="featured-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">What I Bring to the Table</h2>

        </motion.div>

        <motion.div
          className="features-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="feature-card"
              variants={itemVariants}
              whileHover={{ y: -10, borderColor: feature.color }}
            >
              <div className="feature-icon-container">
                <div className="icon-bg" style={{ background: `${feature.color}15`, borderColor: `${feature.color}30` }}></div>
                <div className="feature-icon" style={{ color: feature.color }}>
                  {feature.icon}
                </div>
              </div>

              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>

              <div className="feature-tags">
                {feature.details.map((detail, i) => (
                  <span key={i} className="feature-tag" style={{ borderColor: `${feature.color}30`, color: feature.color }}>
                    {detail}
                  </span>
                ))}
              </div>

              <div className="card-glow" style={{ background: feature.color }}></div>
            </motion.div>
          ))}
        </motion.div>


      </div>

      <style>{`
        .featured-section {
          padding: 8rem 2rem;
          background: var(--bg-color);
          position: relative;
          overflow: hidden;
        }

        .featured-container {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .section-header {
          text-align: center;
          margin-bottom: 5rem;
          max-width: 700px;
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

        .section-subtitle {
          color: var(--text-secondary);
          font-size: 1.2rem;
          line-height: 1.6;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
          margin-bottom: 6rem;
        }

        .feature-card {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 24px;
          padding: 2.5rem 2rem;
          position: relative;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .feature-card:hover {
          background: rgba(255, 255, 255, 0.05);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
        }

        .feature-icon-container {
          position: relative;
          width: 70px;
          height: 70px;
          margin-bottom: 1.25rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .icon-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          border: 1px solid;
          transition: all 0.4s ease;
        }

        .feature-card:hover .icon-bg {
          transform: scale(1.2);
          opacity: 0.8;
        }

        .feature-icon {
          position: relative;
          z-index: 2;
          transition: transform 0.4s ease;
        }

        .feature-card:hover .feature-icon {
          transform: scale(1.1);
        }

        .feature-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 0.6rem;
        }

        .feature-description {
          color: var(--text-secondary);
          line-height: 1.6;
          font-size: 0.95rem;
          margin-bottom: 1.25rem;
          flex: 1;
        }

        .feature-tags {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 0.5rem;
          width: 100%;
        }

        .feature-tag {
          font-size: 0.75rem;
          padding: 0.25rem 0.75rem;
          border-radius: 20px;
          border: 1px solid;
          background: rgba(255, 255, 255, 0.02);
        }

        .card-glow {
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          opacity: 0;
          filter: blur(80px);
          pointer-events: none;
          transition: opacity 0.4s ease;
          z-index: 0;
          background: radial-gradient(circle, currentColor 0%, transparent 70%);
        }

        .feature-card:hover .card-glow {
          opacity: 0.05;
        }

        .core-values {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 24px;
          padding: 3rem;
          text-align: center;
        }

        .values-title {
          font-size: 2rem;
          margin-bottom: 2.5rem;
          color: var(--text-primary);
        }

        .values-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1.5rem;
        }

        .value-item {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          padding: 1.5rem;
          background: var(--bg-color);
          border-radius: 16px;
          border: 1px solid rgba(255, 255, 255, 0.05);
          font-weight: 600;
          color: var(--text-primary);
          transition: all 0.3s ease;
        }

        .value-icon {
          color: var(--primary-color);
          display: flex;
          align-items: center;
        }

        @media (max-width: 768px) {
          .featured-section {
            padding: 5rem 1.5rem;
          }
          
          .features-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          
          .core-values {
            padding: 2rem 1.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default FeaturedSection;
