import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen = ({ showLoading, onComplete }) => {
  useEffect(() => {
    if (showLoading) {
      const timer = setTimeout(() => {
        if (onComplete) {
          onComplete();
        }
      }, 3500);

      return () => clearTimeout(timer);
    }
  }, [showLoading, onComplete]);

  return (
    <AnimatePresence>
      {showLoading && (
        <motion.div
          className="loading-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          {/* Floating particles */}
          <div className="particles">
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                className="particle"
                initial={{
                  x: Math.random() * window.innerWidth,
                  y: Math.random() * window.innerHeight,
                  opacity: 0
                }}
                animate={{
                  y: [null, Math.random() * window.innerHeight],
                  opacity: [0, 0.4, 0],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>

          {/* Main content */}
          <motion.div
            className="loading-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Name with letter-by-letter animation */}
            <motion.h1
              className="loading-name"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {'Ravishka Indraji'.split('').map((char, index) => (
                <motion.span
                  key={index}
                  className="letter"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.6 + index * 0.05,
                    ease: "easeOut"
                  }}
                  style={{ display: 'inline-block', whiteSpace: 'pre' }}
                >
                  {char}
                </motion.span>
              ))}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="loading-subtitle"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.8 }}
            >
              SOFTWARE ENGINEER
            </motion.p>

            {/* Loading bar */}
            <motion.div
              className="loading-bar-wrapper"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 2.2 }}
            >
              <div className="loading-bar-container">
                <motion.div
                  className="loading-bar"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1.2, delay: 2.3, ease: "easeInOut" }}
                />
              </div>
            </motion.div>
          </motion.div>

          <style>{`
            .loading-screen {
              position: fixed;
              top: 0;
              left: 0;
              width: 100vw;
              height: 100vh;
              background: var(--bg-color);
              display: flex;
              align-items: center;
              justify-content: center;
              z-index: 9999;
              overflow: hidden;
            }

            /* Floating particles */
            .particles {
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              pointer-events: none;
            }

            .particle {
              position: absolute;
              width: 6px;
              height: 6px;
              background: var(--primary-color);
              border-radius: 50%;
              opacity: 0.3;
            }

            .loading-content {
              position: relative;
              z-index: 10;
              text-align: center;
            }

            .loading-name {
              font-family: var(--font-display);
              font-size: clamp(2.5rem, 8vw, 5rem);
              font-weight: 400;
              margin: 0 0 1.5rem 0;
              color: var(--text-primary);
              letter-spacing: 0.02em;
              text-transform: uppercase;
            }

            .letter {
              display: inline-block;
            }

            .loading-subtitle {
              font-size: clamp(0.75rem, 2vw, 1rem);
              color: var(--text-secondary);
              font-weight: 300;
              letter-spacing: 0.3em;
              margin: 0 0 2.5rem 0;
            }

            .loading-bar-wrapper {
              margin-top: 2rem;
            }

            .loading-bar-container {
              position: relative;
              width: 200px;
              height: 1px;
              background: rgba(255, 255, 255, 0.1);
              overflow: hidden;
              margin: 0 auto;
            }

            .loading-bar {
              position: absolute;
              height: 100%;
              background: var(--primary-color);
            }

            @media (max-width: 768px) {
              .loading-name {
                font-size: 2rem;
              }

              .loading-subtitle {
                font-size: 0.7rem;
                letter-spacing: 0.2em;
              }

              .loading-bar-container {
                width: 150px;
              }

              .particle {
                width: 4px;
                height: 4px;
              }
            }
          `}</style>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
