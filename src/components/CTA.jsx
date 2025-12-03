import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Mail } from 'lucide-react';

const CTA = () => {
    return (
        <section className="cta-section">
            <div className="cta-container">
                <div className="cta-content">
                    <h2 className="cta-title">Ready to start your next project?</h2>
                    <p className="cta-description">
                        Let's collaborate to build something amazing. Whether you have a specific idea or just want to discuss possibilities, I'm here to help.
                    </p>
                    <div className="cta-buttons">
                        <Link to="/contact" className="btn btn-primary">
                            <span>Get in Touch</span>
                            <Mail size={20} />
                        </Link>
                        <Link to="/projects" className="btn btn-secondary">
                            <span>View Work</span>
                            <ArrowRight size={20} />
                        </Link>
                    </div>
                </div>
            </div>

            <style>{`
                .cta-section {
                    padding: 8rem 2rem;
                    background: var(--bg-color);
                    position: relative;
                    overflow: hidden;
                }

                .cta-section::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: radial-gradient(circle at 50% 50%, rgba(0, 240, 255, 0.05) 0%, transparent 50%);
                    pointer-events: none;
                }

                .cta-container {
                    max-width: 1200px;
                    margin: 0 auto;
                    text-align: center;
                    position: relative;
                    z-index: 1;
                }

                .cta-title {
                    font-size: 3.5rem;
                    font-weight: 800;
                    margin-bottom: 1.5rem;
                    background: var(--accent-gradient);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    letter-spacing: -1px;
                }

                .cta-description {
                    font-size: 1.25rem;
                    color: var(--text-secondary);
                    margin-bottom: 3rem;
                    max-width: 600px;
                    margin-left: auto;
                    margin-right: auto;
                    line-height: 1.6;
                }

                .cta-buttons {
                    display: flex;
                    justify-content: center;
                    gap: 1.5rem;
                    flex-wrap: wrap;
                }

                .btn {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.75rem;
                    padding: 1rem 2rem;
                    border-radius: 50px;
                    font-weight: 600;
                    font-size: 1.1rem;
                    transition: all 0.3s ease;
                    text-decoration: none;
                }

                .btn-primary {
                    background: var(--text-primary);
                    color: var(--bg-color);
                    box-shadow: 0 10px 20px rgba(255, 255, 255, 0.1);
                }

                .btn-primary:hover {
                    background: var(--primary-color);
                    color: white;
                    transform: translateY(-3px);
                }

                .btn-secondary {
                    background: rgba(255, 255, 255, 0.05);
                    color: var(--text-primary);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                }

                .btn-secondary:hover {
                    background: rgba(255, 255, 255, 0.1);
                    transform: translateY(-3px);
                    border-color: var(--primary-color);
                }

                @media (max-width: 768px) {
                    .cta-section {
                        padding: 4rem 1rem;
                    }

                    .cta-title {
                        font-size: 2.5rem;
                    }

                    .cta-buttons {
                        flex-direction: column;
                        gap: 1rem;
                    }

                    .btn {
                        width: 100%;
                        justify-content: center;
                    }
                }
            `}</style>
        </section>
    );
};

export default CTA;
