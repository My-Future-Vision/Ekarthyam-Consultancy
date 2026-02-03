import React from 'react';
import { Code, Brain, BookOpen, BarChart3, ChevronRight } from 'lucide-react';
import './Services.css';

export const Services: React.FC = () => {
    const services = [
        {
            icon: <Code size={40} />,
            title: "Software Consultancy",
            description: "Expert guidance on enterprise architecture, tech stack selection, and digital roadmap planning.",
            highlight: "Strategic"
        },
        {
            icon: <Brain size={40} />,
            title: "Gen AI Implementation",
            description: "End-to-end integration of Large Language Models and intelligent automation workflows.",
            highlight: "Trending"
        },
        {
            icon: <BookOpen size={40} />,
            title: "LMS Solutions",
            description: "Custom Learning Management Systems for corporate training and educational institutions.",
            highlight: "Education"
        },
        {
            icon: <BarChart3 size={40} />,
            title: "PMS Systems",
            description: "Performance Management Systems to track, analyze, and optimize employee productivity.",
            highlight: "Analytics"
        }
    ];

    return (
        <section id="services" className="services-section">
            <div className="container">
                <div className="section-header text-center">
                    <h4 className="section-subtitle">Our Expertise</h4>
                    <h2 className="section-title">Comprehensive Tech Solutions</h2>
                </div>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <div key={index} className="service-card">
                            <div className="service-icon">
                                {service.icon}
                            </div>
                            <div className="service-content">
                                <h3>{service.title}</h3>
                                <p>{service.description}</p>
                                <a href="#contact" className="service-link">
                                    Learn More <ChevronRight size={16} />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
