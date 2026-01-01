import React, { useEffect, useRef, useState } from 'react';

const CustomCursor = () => {
  const cursorDotRef = useRef(null);
  const cursorOutlineRef = useRef(null);
  const cursorFlareRef = useRef(null);
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const cursorDot = cursorDotRef.current;
    const cursorOutline = cursorOutlineRef.current;
    const cursorFlare = cursorFlareRef.current;

    let mouseX = 0;
    let mouseY = 0;
    let outlineX = 0;
    let outlineY = 0;
    let flareX = 0;
    let flareY = 0;

    // Mouse move handler
    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (cursorDot) {
        cursorDot.style.left = `${mouseX}px`;
        cursorDot.style.top = `${mouseY}px`;
      }
    };

    // Smooth follow animation for outline and flare
    const animateOutline = () => {
      outlineX += (mouseX - outlineX) * 0.15;
      outlineY += (mouseY - outlineY) * 0.15;
      flareX += (mouseX - flareX) * 0.08;
      flareY += (mouseY - flareY) * 0.08;

      if (cursorOutline) {
        cursorOutline.style.left = `${outlineX}px`;
        cursorOutline.style.top = `${outlineY}px`;
      }

      if (cursorFlare) {
        cursorFlare.style.left = `${flareX}px`;
        cursorFlare.style.top = `${flareY}px`;
      }

      requestAnimationFrame(animateOutline);
    };

    // Check if hovering over clickable elements
    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.onclick ||
        target.classList.contains('clickable') ||
        window.getComputedStyle(target).cursor === 'pointer'
      ) {
        setIsPointer(true);
      } else {
        setIsPointer(false);
      }
    };

    // Add event listeners
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    animateOutline();

    // Cleanup
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorFlareRef}
        className="cursor-flare"
      />
      <div
        ref={cursorDotRef}
        className={`cursor-dot ${isPointer ? 'cursor-pointer' : ''}`}
      />
      <div
        ref={cursorOutlineRef}
        className={`cursor-outline ${isPointer ? 'cursor-pointer' : ''}`}
      />

      <style>{`
        /* Hide default cursor */
        * {
          cursor: none !important;
        }

        /* Cursor flare - glowing effect */
        .cursor-flare {
          width: 400px;
          height: 400px;
          position: fixed;
          pointer-events: none;
          z-index: 9998;
          transform: translate(-50%, -50%);
          background: radial-gradient(
            circle at center,
            rgba(var(--primary-rgb), 0.15) 0%,
            rgba(var(--primary-rgb), 0.08) 25%,
            rgba(var(--primary-rgb), 0.04) 50%,
            transparent 70%
          );
          opacity: 0.8;
          mix-blend-mode: screen;
          animation: flare-pulse 3s ease-in-out infinite;
        }

        @keyframes flare-pulse {
          0%, 100% {
            opacity: 0.6;
            transform: translate(-50%, -50%) scale(1);
          }
          50% {
            opacity: 0.9;
            transform: translate(-50%, -50%) scale(1.1);
          }
        }

        /* Cursor dot */
        .cursor-dot {
          width: 10px;
          height: 10px;
          background: var(--primary-color);
          border-radius: 50%;
          position: fixed;
          pointer-events: none;
          z-index: 10000;
          transform: translate(-50%, -50%);
          transition: width 0.3s ease, height 0.3s ease, background 0.3s ease;
          mix-blend-mode: difference;
        }

        .cursor-dot.cursor-pointer {
          width: 5px;
          height: 5px;
        }

        /* Cursor outline */
        .cursor-outline {
          width: 60px;
          height: 60px;
          border: 2px solid var(--primary-color);
          opacity: 0.5;
          border-radius: 50%;
          position: fixed;
          pointer-events: none;
          z-index: 10000;
          transform: translate(-50%, -50%);
          transition: width 0.2s ease, height 0.2s ease, border-color 0.2s ease, opacity 0.2s ease;
        }

        .cursor-outline.cursor-pointer {
          width: 20px;
          height: 20px;
          opacity: 0.8;
          border-color: var(--primary-color);
        }

        /* Hide custom cursor on touch devices */
        @media (hover: none) and (pointer: coarse) {
          .cursor-dot,
          .cursor-outline,
          .cursor-flare {
            display: none;
          }
          
          * {
            cursor: auto !important;
          }
        }
      `}</style>
    </>
  );
};

export default CustomCursor;
