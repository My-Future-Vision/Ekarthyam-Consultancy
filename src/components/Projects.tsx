import React from 'react';
import './Projects.css';
import { ExternalLink } from 'lucide-react';

export const Projects: React.FC = () => {
    const projects = [
        {
            title: "Enterprise LMS Platform",
            category: "Web Application",
            tech: ["React", "Node.js", "PostgreSQL"],
            description: "A comprehensive learning management system serving 10k+ employees with real-time analytics.",
            image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "AI Customer Support Bot",
            category: "Gen AI Integration",
            tech: ["Python", "OpenAI API", "Vector DB"],
            description: "Intelligent chatbot reducing support ticket volume by 40% through automated query resolution.",
            image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "Performance Analytics Dashboard",
            category: "Data Visualization",
            tech: ["TypeScript", "D3.js", "AWS"],
            description: "Interactive dashboard for HR teams to monitor and evaluate corporate performance metrics.",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        }
    ];

    return (
        <section id="projects" className="projects-section">
            <div className="container">
                <div className="section-header text-center">
                    <h4 className="section-subtitle">Our Work</h4>
                    <h2 className="section-title">Featured Projects</h2>
                </div>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div key={index} className="project-card">
                            <div className="project-image">
                                <img src={project.image} alt={project.title} />
                                <div className="project-overlay">
                                    <button className="project-btn" aria-label="View Project"><ExternalLink size={20} /></button>
                                </div>
                            </div>
                            <div className="project-content">
                                <span className="project-category">{project.category}</span>
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-desc">{project.description}</p>
                                <div className="project-tech">
                                    {project.tech.map(t => <span key={t} className="tech-tag">{t}</span>)}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
