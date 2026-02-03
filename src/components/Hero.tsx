import React from 'react';
import './Hero.css';

export const Hero: React.FC = () => {
    return (
        <section id="home" className="hero">
            <div className="container hero-container">
                <div className="hero-content">
                    <h1 className="hero-title">
                        Innovative Software & <span className="text-gradient">Gen AI Solutions</span> <br />
                        for Modern Enterprises
                    </h1>
                    <p className="hero-subtitle">
                        Empowering businesses with scalable technology, intelligent automation, and customized software consultancy.
                    </p>
                    <div className="hero-actions">
                        <a href="#services" className="btn btn-primary">Explore Services</a>
                        <a href="#projects" className="btn btn-outline">View Projects</a>
                    </div>
                </div>
                <div className="hero-visual">
                    {/* Logo in Circle */}
                    <div className="hero-logo-container">
                        <img src="/hero-logo.png" alt="Ekarthyam Logo" className="hero-logo" />
                    </div>
                </div>
            </div>
        </section>
    );
};
