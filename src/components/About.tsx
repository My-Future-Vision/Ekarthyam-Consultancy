import React from 'react';
import './About.css';
import { Zap } from 'lucide-react';


export const About: React.FC = () => {
    return (
        <section id="about" className="about-section">
            <div className="container about-container">
                <div className="about-image-wrapper">
                    {/* Conceptual Image Placeholder */}
                    <div className="about-image-placeholder">
                        <div className="tech-badge">
                            <span className="badge-icon"><Zap size={20} /></span>
                            <span>Future Ready</span>
                        </div>
                    </div>
                </div>
                <div className="about-content">
                    <h4 className="section-subtitle">Who We Are</h4>
                    <h2 className="section-title">Driving Digital Transformation</h2>
                    <p className="about-text">
                        Ekarthyam Consultancy Services Pvt. Ltd. is a premier technology partner for enterprises looking to leverage the power of modern software and Generative AI.
                        We specialize in building scalable, high-performance solutions that solve complex business challenges.
                    </p>
                    <div className="about-stats">
                        <div className="stat-item">
                            <span className="stat-number">Innovation</span>
                            <span className="stat-label">at Core</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">Scalable</span>
                            <span className="stat-label">Architecture</span>
                        </div>
                    </div>
                    <a href="#contact" className="btn btn-outline small-btn">Learn More</a>
                </div>
            </div>
        </section>
    );
};
