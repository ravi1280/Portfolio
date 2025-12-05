import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { motion } from 'framer-motion';


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  const contactInfo = [
    { icon: <Mail size={24} />, label: 'Email', value: 'Ravishkaindrajith9.9@gmail.com' },
    { icon: <Phone size={24} />, label: 'Phone', value: '+947196818164545454' },
    { icon: <MapPin size={24} />, label: 'Location', value: 'No: 6/1 , Ginidammana,Banduragoda' },
  ];

  return (
    <section className="contact-section">
      <div className="contact-container">
        <motion.h1
          className="contact-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Get In Touch
        </motion.h1>

        <div className="contact-content">
          <div className="contact-info">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                className="contact-info-card"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ x: 10, borderColor: 'var(--primary-color)' }}
              >
                <div className="info-icon">{info.icon}</div>
                <div className="info-text">
                  <h3>{info.label}</h3>
                  <p>{info.value}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <motion.button
              type="submit"
              className="submit-btn"
              whileHover={{ scale: 1.02, boxShadow: '0 10px 20px rgba(255, 255, 255, 0.1)' }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Send Message</span>
              <Send size={20} />
            </motion.button>
          </motion.form>
        </div>
      </div>



      <style>{`
        .contact-section {
          min-height: 100vh;
          padding: 120px 2rem 4rem;
          background: var(--bg-color);
        }

        .contact-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .contact-title {
          font-size: clamp(2.5rem, 5vw, 4rem);
          margin-bottom: 3rem;
          background: var(--accent-gradient);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .contact-content {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 3rem;
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .contact-info-card {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1.5rem;
          background: var(--surface-color);
          border-radius: var(--radius-md);
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .info-icon {
          color: var(--primary-color);
        }

        .info-text h3 {
          font-size: 0.9rem;
          color: var(--text-secondary);
          margin-bottom: 0.25rem;
        }

        .info-text p {
          color: var(--text-primary);
          font-size: 1rem;
        }

        .contact-form {
          background: var(--surface-color);
          padding: 2rem;
          border-radius: var(--radius-md);
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        .form-group label {
          display: block;
          margin-bottom: 0.5rem;
          color: var(--text-primary);
          font-weight: 500;
        }

        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 0.75rem 1rem;
          background: var(--bg-color);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: var(--radius-sm);
          color: var(--text-primary);
          font-family: var(--font-body);
          transition: border-color 0.3s ease;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: var(--primary-color);
        }

        .submit-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 1rem 2rem;
          background: var(--text-primary);
          color: var(--bg-color);
          border-radius: 30px;
          font-weight: 600;
          width: 100%;
          justify-content: center;
          border: none;
          cursor: pointer;
        }

        @media (max-width: 768px) {
          .contact-section {
            padding: 100px 1.5rem 3rem;
          }

          .contact-content {
            grid-template-columns: 1fr;
          }

          .contact-form {
            padding: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;
