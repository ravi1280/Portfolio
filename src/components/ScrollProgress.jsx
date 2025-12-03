import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="scroll-progress-container">
      <motion.div
        className="scroll-progress-bar"
        style={{ scaleY }}
      />

      <style>{`
        .scroll-progress-container {
          position: fixed;
          right: 20px;
          top: 50%;
          transform: translateY(-50%);
          width: 6px;
          height: 200px;
          background: rgba(255, 255, 255, 0.1);
          z-index: 1000;
          border-radius: 10px;
        }

        .scroll-progress-bar {
          width: 100%;
          height: 100%;
          background: var(--primary-color);
          transform-origin: top;
          border-radius: 10px;
        }

        @media (max-width: 768px) {
          .scroll-progress-container {
            right: 10px;
            height: 150px;
          }
        }
      `}</style>
    </div>
  );
};

export default ScrollProgress;
