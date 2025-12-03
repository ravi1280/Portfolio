import React, { useRef, useState } from 'react';

const GlareCard = ({ children, className = '' }) => {
    const cardRef = useRef(null);
    const [rotate, setRotate] = useState({ x: 0, y: 0 });
    const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });

    const handleMouseMove = (e) => {
        const card = cardRef.current;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -10; // Max rotation 10deg
        const rotateY = ((x - centerX) / centerX) * 10;

        setRotate({ x: rotateX, y: rotateY });
        setGlare({
            x: (x / rect.width) * 100,
            y: (y / rect.height) * 100,
            opacity: 1,
        });
    };

    const handleMouseLeave = () => {
        setRotate({ x: 0, y: 0 });
        setGlare({ ...glare, opacity: 0 });
    };

    return (
        <div
            ref={cardRef}
            className={`glare-card ${className}`}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale3d(1.02, 1.02, 1.02)`,
            }}
        >
            <div className="glare-content">
                {children}
            </div>
            <div
                className="glare-effect"
                style={{
                    background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 80%)`,
                    opacity: glare.opacity,
                }}
            />

            <style>{`
        .glare-card {
          position: relative;
          transition: transform 0.1s ease-out;
          transform-style: preserve-3d;
          will-change: transform;
        }

        .glare-content {
          position: relative;
          z-index: 1;
          height: 100%;
        }

        .glare-effect {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-radius: inherit;
          z-index: 2;
          pointer-events: none;
          mix-blend-mode: overlay;
          transition: opacity 0.3s ease;
        }
      `}</style>
        </div>
    );
};

export default GlareCard;
