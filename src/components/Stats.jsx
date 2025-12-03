import React, { useRef } from 'react';
import { Award, Users, Coffee, Rocket } from 'lucide-react';
import { motion, useInView, useSpring, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';

const Counter = ({ value, suffix = '' }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const spring = useSpring(0, { duration: 2000 });
  const displayValue = useTransform(spring, (current) => Math.round(current));
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (inView) {
      spring.set(value);
    }
  }, [inView, value, spring]);

  useEffect(() => {
    return displayValue.on("change", (latest) => {
      setCount(latest);
    });
  }, [displayValue]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const Stats = () => {
  const stats = [
    { icon: <Rocket size={40} />, value: 50, label: 'Projects Completed', suffix: '+' },
    { icon: <Users size={40} />, value: 30, label: 'Happy Clients', suffix: '+' },
    { icon: <Coffee size={40} />, value: 1000, label: 'Cups of Coffee', suffix: '+' },
    { icon: <Award size={40} />, value: 12, label: 'Awards Won', suffix: '' }
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
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="stats-section">
      <div className="stats-container">
        <motion.div
          className="stats-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="stat-box"
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02, borderColor: 'var(--primary-color)', boxShadow: '0 20px 60px rgba(0, 240, 255, 0.2)' }}
            >
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-number">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="stat-label">{stat.label}</div>
              <div className="stat-glow"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style>{`
        .stats-section {
          padding: 6rem 2rem;
          background: var(--bg-color);
          position: relative;
        }

        .stats-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }

        .stat-box {
          position: relative;
          background: var(--surface-color);
          padding: 3rem 2rem;
          border-radius: var(--radius-lg);
          text-align: center;
          border: 1px solid rgba(255, 255, 255, 0.05);
          overflow: hidden;
        }

        .stat-glow {
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(0, 240, 255, 0.1) 0%, transparent 70%);
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .stat-box:hover .stat-glow {
          opacity: 1;
        }

        .stat-icon {
          color: var(--primary-color);
          margin-bottom: 1.5rem;
          display: inline-block;
          animation: float 3s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        .stat-number {
          font-size: 3rem;
          font-weight: 700;
          background: var(--accent-gradient);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 0.5rem;
          line-height: 1;
        }

        .stat-label {
          color: var(--text-secondary);
          font-size: 1rem;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        @media (max-width: 768px) {
          .stats-section {
            padding: 4rem 1.5rem;
          }

          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
          }

          .stat-box {
            padding: 2rem 1rem;
          }

          .stat-number {
            font-size: 2.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Stats;
