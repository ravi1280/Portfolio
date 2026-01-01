import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import GlareCard from './GlareCard';

const Experience = () => {
  const experiences = [

    {
      role: 'B.Sc. (Hons) in Software Engineering',
      company: 'Birmingham City University',
      period: '2024 - Present',
      description: 'Developing expertise in Android and Unity game engines, supported by a strong foundation in Data Structures, Algorithms, and Design Patterns. The curriculum also integrates Business Components and Cyber Law for comprehensive industry readiness.',
      skills: ['Android', 'Unity', 'DSA', 'Design Patterns']
    },
    {
      role: 'Higher Diploma in Software Engineering',
      company: 'UK Awards',
      period: '2023-2024',
      description: 'Deepened engineering expertise through Object-Oriented Programming (OOP) and Software Quality Assurance, while mastering Project Management methodologies and Electronics for Software Engineering.',
      skills: ['OOP', 'Project Management', 'Quality Assurance', 'Electronics']
    },
    {
      role: 'Diploma in Software Engineering',
      company: 'UK Awards',
      period: '2022 - 2023',
      description: 'Built a solid technical foundation through comprehensive study of Database Management Systems, Computer Hardware & Networking, and Web Programming, complemented by Mathematics for Computer Science.',
      skills: ['DBMS', 'Networking', 'Web Programming', 'Mathematics']
    },
    {
      role: 'Secondary Education',
      company: 'Bandaranayake Central College (Veyangoda)',
      period: '2018 - 2020',
      description: 'Completed GCE Advanced Level in the Physical Science stream, building a strong analytical foundation in Combined Mathematics, Physics, and Chemistry.',
      skills: ['Combined Math', 'Physics', 'Chemistry', 'Problem Solving']
    }
  ];

  return (
    <section className="experience-section">
      <div className="experience-container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Education
        </motion.h2>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="timeline-item"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="timeline-dot"></div>
              <GlareCard className="timeline-content">
                <div className="timeline-header">
                  <h3>{exp.role}</h3>
                  <span className="company">{exp.company}</span>
                </div>
                <div className="timeline-date">
                  <Calendar size={16} />
                  <span>{exp.period}</span>
                </div>
                <p>{exp.description}</p>
                <div className="timeline-skills">
                  {exp.skills.map((skill, i) => (
                    <span key={i} className="skill-badge">{skill}</span>
                  ))}
                </div>
              </GlareCard>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .experience-section {
          padding: 8rem 2rem;
          background: var(--surface-color);
        }

        .experience-container {
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

        .timeline {
          position: relative;
          padding: 2rem 0;
        }

        .timeline::before {
          content: '';
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 2px;
          height: 100%;
          background: rgba(255, 255, 255, 0.1);
        }

        .timeline-item {
          display: flex;
          justify-content: center;
          padding-bottom: 4rem;
          position: relative;
        }

        .timeline-item:nth-child(odd) {
          padding-right: 50%;
          text-align: right;
        }

        .timeline-item:nth-child(even) {
          padding-left: 50%;
          text-align: left;
          flex-direction: row-reverse;
        }

        .timeline-dot {
          position: absolute;
          left: 50%;
          top: 0;
          transform: translateX(-50%);
          width: 20px;
          height: 20px;
          background: var(--primary-color);
          border-radius: 50%;
          border: 4px solid var(--bg-color);
          z-index: 2;
        }

        .timeline-content {
          width: 90%;
          padding: 2rem;
          background: var(--bg-color);
          border-radius: var(--radius-md);
          border: 1px solid rgba(255, 255, 255, 0.05);
          /* transition: all 0.3s ease; Removed to avoid conflict with GlareCard transform */
        }

        .timeline-content:hover {
          border-color: var(--primary-color);
          /* transform: translateY(-5px); Removed to avoid conflict with GlareCard transform */
        }

        .timeline-header h3 {
          font-size: 1.5rem;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
        }

        .company {
          color: var(--primary-color);
          font-weight: 600;
          font-size: 1.1rem;
        }

        .timeline-date {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--text-secondary);
          margin: 1rem 0;
          justify-content: inherit;
        }

        .timeline-content p {
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .timeline-skills {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          justify-content: inherit;
        }

        .skill-badge {
          font-size: 0.85rem;
          padding: 0.25rem 0.75rem;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 15px;
          color: var(--text-primary);
        }

        @media (max-width: 768px) {
          .experience-section {
            padding: 4rem 1rem;
          }

          .timeline::before {
            left: 20px;
          }

          .timeline-item {
            padding-left: 50px !important;
            padding-right: 0 !important;
            text-align: left !important;
            flex-direction: row !important;
          }

          .timeline-dot {
            left: 20px;
          }

          .timeline-content {
            width: 100%;
          }

          .timeline-date, .timeline-skills {
            justify-content: flex-start;
          }
        }
      `}</style>
    </section>
  );
};

export default Experience;
