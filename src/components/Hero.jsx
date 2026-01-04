import React, { useEffect, useState, useRef } from 'react';
import { ArrowRight, Github, Linkedin, ChevronDown, Mail, Download } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import RobotModel from './RobotModel';
import cvFile from '../assets/Ravishka_Indraji_Ranaweera.pdf';

const Hero = () => {
  const heroRef = useRef(null);
  const [typedText, setTypedText] = useState('');
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    const roles = ['Software Engineer', 'Full Stack Developer', 'Creative Coder'];
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeTimeout;

    const type = () => {
      const currentRole = roles[roleIndex];

      if (isDeleting) {
        setTypedText(currentRole.substring(0, charIndex - 1));
        charIndex--;
      } else {
        setTypedText(currentRole.substring(0, charIndex + 1));
        charIndex++;
      }

      let typeSpeed = isDeleting ? 50 : 100;

      if (!isDeleting && charIndex === currentRole.length) {
        typeSpeed = 2000; // Pause at end of word
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        typeSpeed = 500; // Pause before typing next word
      }

      typeTimeout = setTimeout(type, typeSpeed);
    };

    // Start typing after initial delay
    const startTimeout = setTimeout(() => {
      type();
    }, 600);

    return () => {
      clearTimeout(startTimeout);
      clearTimeout(typeTimeout);
    };
  }, []);

  return (
    <section ref={heroRef} className="hero-section">
      <motion.div
        className="hero-content"
        style={{ y, opacity }}
      >
        <motion.p
          className="hero-greeting"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >

        </motion.p>
        <h1 className="hero-title">
          <motion.span
            className="block"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          >
            Ravishka Indraji
          </motion.span>
          <motion.span
            className="block gradient-text typed-text-wrapper"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          >
            {typedText}<span className="cursor">|</span>
          </motion.span>
        </h1>
        <motion.p
          className="hero-subtitle"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
        >
          I craft exceptional digital experiences with clean code and creative design.
          Specializing in full-stack development, I transform ideas into scalable,
          user-centric applications that make a difference.
        </motion.p>

        <motion.div
          className="hero-cta"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 1.2 }}
        >
          <a href="/projects" className="primary-btn">
            View My Work <ArrowRight size={20} />
          </a>

          <a href={cvFile} download="RavishkaIndraji_CV.pdf" className="secondary-btn">
            Download CV <Download size={20} />
          </a>
        </motion.div>

        <motion.div
          className="social-links"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 1.4 }}
        >
          <a href="https://github.com/ravi1280" target="_blank" rel="noopener noreferrer" className="social-icon">
            <Github size={24} />
          </a>
          <a href="https://www.linkedin.com/in/ravishka-ranaweera-b56810321/" target="_blank" rel="noopener noreferrer" className="social-icon">
            <Linkedin size={24} />
          </a>
          <a href="mailto:ravishkaindrajith9.9@gmail.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <Mail size={24} />
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        className="hero-image-container"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
      >
        {/* <div className="spotlight"></div>  */}
        <div className="hero-canvas-wrapper">
          <Canvas camera={{ position: [2.5, 2, 3.5], fov: 40 }}>
            <ambientLight intensity={0.6} />
            <directionalLight position={[10, 10, 10]} intensity={2} />
            <RobotModel scale={[-1, 1, 1]} position={[0, -0.8, 0]} rotation={[0, 1.8, 0]} />
            <OrbitControls enablePan={false} enableZoom={false} autoRotate={false} />
          </Canvas>
        </div>
      </motion.div>

      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 1.6, duration: 1 },
          y: { repeat: Infinity, duration: 1.5, ease: "easeInOut" }
        }}
      >
        <ChevronDown size={32} />
        <span>Scroll to explore</span>
      </motion.div>

      <div className="hero-background">
        {/* <Scene3D /> */}
        <div className="grid-overlay"></div>
      </div>

      <style>{`
        .hero-section {
          min-height: 100vh;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          position: relative;
          overflow: hidden;
          padding: 0 5%;
          gap: 2rem;
        }

        .hero-content {
          position: relative;
          z-index: 10;
          max-width: 750px;
          text-align: left;
          flex: 1.2;
        }

        .hero-greeting {
          font-size: 1.25rem;
          color: var(--primary-color);
          margin-bottom: 1rem;
          font-weight: 500;
        }

        .hero-title {
          font-size: clamp(2rem, 6vw, 4rem);
          line-height: 1.1;
          margin-bottom: 1.5rem;
          font-weight: 700;
        }

        .block {
          display: block;
        }

        .gradient-text {
          background: var(--accent-gradient);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          display: inline-block;
        }

        .cursor {
          animation: blink 1s infinite;
          color: var(--primary-color);
          -webkit-text-fill-color: var(--primary-color);
        }

        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }

        .hero-subtitle {
          font-size: clamp(1rem, 2vw, 1.125rem);
          color: var(--text-secondary);
          max-width: 700px;
          margin: 0 0 2rem 0;
          line-height: 1.8;
        }

        .hero-stats {
          display: flex;
          justify-content: flex-start;
          gap: 3rem;
          margin: 2.5rem 0;
          flex-wrap: wrap;
        }

        .stat-item {
          text-align: center;
        }

        .stat-item h3 {
          font-size: 2.5rem;
          background: var(--accent-gradient);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 0.25rem;
        }

        .stat-item p {
          color: var(--text-secondary);
          font-size: 0.9rem;
        }

        .hero-cta {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          gap: 1rem;
          margin-bottom: 2rem;
          flex-wrap: wrap;
        }

        .primary-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 1rem 2rem;
          background: var(--text-primary);
          color: var(--bg-color);
          border-radius: 30px;
          font-weight: 600;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .primary-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(255, 255, 255, 0.2);
        }

        .secondary-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 1rem 2rem;
          background: transparent;
          color: var(--text-primary);
          border: 2px solid var(--text-primary);
          border-radius: 30px;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .secondary-btn:hover {
          background: var(--text-primary);
          color: var(--bg-color);
          transform: translateY(-2px);
        }

        .social-links {
          display: flex;
          gap: 1.5rem;
          justify-content: flex-start;
        }

        .social-icon {
          color: var(--text-secondary);
          transition: all 0.3s ease;
          padding: 0.75rem;
          border-radius: 12px;
          border: 1px solid transparent;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 50px;
          height: 50px;
          background: rgba(255, 255, 255, 0.03);
        }

        .social-icon:hover {
          color: var(--primary-color);
          transform: translateY(-2px);
          border-color: var(--primary-color);
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.05);
        }

        .scroll-indicator {
          position: absolute;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          color: var(--text-secondary);
          z-index: 10;
          cursor: pointer;
        }

        .scroll-indicator span {
          font-size: 0.85rem;
        }

        .hero-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
        }

        .grid-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
          background-size: 50px 50px;
          mask-image: radial-gradient(circle at center, black 40%, transparent 100%);
        }

        .hero-image-container {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          z-index: 5;
          height: 100%;
          max-width: 500px;
        }

        .hero-canvas-wrapper {
          width: 100%;
          max-width: 500px;
          height: 500px;
          position: relative;
          z-index: 2;
          filter: drop-shadow(0 0 20px rgba(0,0,0,0.5));
          border-radius: 20px;
          overflow: hidden;
        }

        .spotlight {
          position: absolute;
          bottom: 15%;
          left: 50%;
          transform: translateX(-50%);
          width: 150%;
          height: 100%;
          background: radial-gradient(
            ellipse at bottom,
            color-mix(in srgb, var(--primary-color) 20%, transparent) 0%,
            color-mix(in srgb, var(--primary-color) 8%, transparent) 40%,
            transparent 70%
          );
          z-index: 1;
          filter: blur(40px);
          pointer-events: none;
          animation: spotlight-pulse 4s ease-in-out infinite alternate;
        }

        @keyframes spotlight-pulse {
          0% { opacity: 0.8; transform: translateX(-50%) scale(1); }
          100% { opacity: 1; transform: translateX(-50%) scale(1.1); }
        }

        @media (max-width: 968px) {
          .hero-section {
            flex-direction: column;
            justify-content: center;
            padding-top: 6rem;
            text-align: center;
          }

          .hero-content {
            padding-left: 0;
            align-items: center;
            text-align: center;
            margin-bottom: 2rem;
          }

          .hero-title {
             font-size: 3rem;
          }

          .typed-text-wrapper {
            min-height: 2.5em;
            display: inline-block;
          }

          .hero-image-container {
            width: 100%;
            max-width: 400px;
          }
          .hero-canvas-wrapper {
            max-width: 400px;
            height: 400px;
          }
          
          .hero-cta, .social-links {
            justify-content: center;
          }
        }

        @media (max-width: 768px) {
          .hero-content {
            padding-left: 0;
          }

          .hero-stats {
            gap: 2rem;
          }

          .stat-item h3 {
            font-size: 2rem;
          }

          .hero-cta {
            flex-direction: column;
            width: 100%;
          }

          .primary-btn, .secondary-btn {
            width: 100%;
            justify-content: center;
          }

          .scroll-indicator {
            display: none;
          }

          .hero-image-container {
            display: none;
          }
        }
      `}</style>
    </section >
  );
};

export default Hero;
