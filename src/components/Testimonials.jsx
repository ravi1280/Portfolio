import React, { useState } from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(1); // Start at 1 to show middle card

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart',
      text: 'Working with John was an absolute pleasure. He delivered our project on time and exceeded our expectations with his attention to detail.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    },
    {
      name: 'Michael Chen',
      role: 'Product Manager, InnovateCorp',
      text: 'The web application John built for us has significantly improved our user engagement. His technical expertise is top-notch.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    },
    {
      name: 'Emily Davis',
      role: 'Founder, DesignStudio',
      text: 'John has a unique ability to translate complex design concepts into smooth, responsive code. Highly recommended!',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleDragEnd = (event, info) => {
    const threshold = 50;
    if (info.offset.x > threshold) {
      prevSlide();
    } else if (info.offset.x < -threshold) {
      nextSlide();
    }
  };

  const getCardStyle = (index) => {
    const diff = index - currentIndex;
    const isCenter = diff === 0;
    const isVisible = Math.abs(diff) <= 1;

    return {
      scale: isCenter ? 1 : 0.85,
      opacity: isCenter ? 1 : 0.5,
      zIndex: isCenter ? 10 : 1,
      x: `${diff * 35}%`,
      display: isVisible ? 'block' : 'none'
    };
  };

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Client Testimonials
        </motion.h2>

        <div className="carousel-wrapper">
          <button className="nav-button prev" onClick={prevSlide} aria-label="Previous testimonial">
            <ChevronLeft size={24} />
          </button>

          <div className="carousel-container">
            <div className="carousel-track">
              {testimonials.map((testimonial, index) => {
                const style = getCardStyle(index);
                return (
                  <motion.div
                    key={index}
                    className={`testimonial-card ${index === currentIndex ? 'active' : ''}`}
                    animate={{
                      scale: style.scale,
                      opacity: style.opacity,
                      zIndex: style.zIndex,
                      x: style.x
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.2}
                    onDragEnd={handleDragEnd}
                    style={{
                      visibility: style.display === 'none' ? 'hidden' : 'visible',
                      pointerEvents: style.display === 'none' ? 'none' : 'auto'
                    }}
                  >
                    <Quote className="quote-icon" size={40} />
                    <p className="testimonial-text">{testimonial.text}</p>
                    <div className="testimonial-author">
                      <img src={testimonial.image} alt={testimonial.name} className="author-image" />
                      <div className="author-info">
                        <h4>{testimonial.name}</h4>
                        <span>{testimonial.role}</span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <button className="nav-button next" onClick={nextSlide} aria-label="Next testimonial">
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="carousel-dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <style>{`
        .testimonials-section {
          padding: 8rem 2rem;
          background: linear-gradient(180deg, var(--bg-color) 0%, var(--surface-color) 100%);
        }

        .testimonials-container {
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

        .carousel-wrapper {
          position: relative;
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 2rem;
          max-width: 900px;
          margin-left: auto;
          margin-right: auto;
        }

        .carousel-container {
          flex: 1;
          overflow: visible;
          position: relative;
          height: 400px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .carousel-track {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .testimonial-card {
          position: absolute;
          width: 450px;
          max-width: 90%;
          background: var(--bg-color);
          padding: 2.5rem;
          border-radius: var(--radius-lg);
          border: 1px solid rgba(255, 255, 255, 0.05);
          transition: border-color 0.3s ease;
          cursor: grab;
          user-select: none;
        }

        .testimonial-card:active {
          cursor: grabbing;
        }

        .testimonial-card.active {
          border-color: var(--primary-color);
          box-shadow: 0 10px 40px rgba(0, 240, 255, 0.2);
        }

        .quote-icon {
          color: var(--primary-color);
          opacity: 0.5;
          margin-bottom: 1.5rem;
        }

        .testimonial-text {
          color: var(--text-secondary);
          line-height: 1.7;
          margin-bottom: 2rem;
          font-style: italic;
          font-size: 1.05rem;
        }

        .testimonial-author {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .author-image {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid var(--primary-color);
        }

        .author-info h4 {
          color: var(--text-primary);
          font-size: 1.1rem;
          margin-bottom: 0.25rem;
        }

        .author-info span {
          color: var(--text-secondary);
          font-size: 0.9rem;
        }

        .nav-button {
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
          z-index: 20;
        }

        .nav-button:hover {
          background: var(--primary-color);
          border-color: var(--primary-color);
          transform: scale(1.1);
        }

        .carousel-dots {
          display: flex;
          justify-content: center;
          gap: 0.75rem;
          margin-top: 2rem;
        }

        .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.2);
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          padding: 0;
        }

        .dot.active {
          background: var(--primary-color);
          width: 30px;
          border-radius: 5px;
        }

        .dot:hover {
          background: rgba(255, 255, 255, 0.4);
        }

        @media (max-width: 1024px) {
          .carousel-container {
            height: 450px;
          }

          .testimonial-card {
            width: 400px;
          }
        }

        @media (max-width: 768px) {
          .testimonials-section {
            padding: 4rem 1rem;
          }

          .carousel-wrapper {
            gap: 1rem;
          }

          .carousel-container {
            height: 400px;
          }

          .testimonial-card {
            width: 350px;
            padding: 2rem;
          }

          .nav-button {
            width: 40px;
            height: 40px;
          }

          .nav-button svg {
            width: 20px;
            height: 20px;
          }
        }

        @media (max-width: 480px) {
          .carousel-container {
            height: 450px;
          }

          .testimonial-card {
            width: 300px;
            padding: 1.5rem;
          }

          .nav-button {
            display: none;
          }

          .carousel-wrapper {
            gap: 0;
          }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
