import React from 'react';
import './Projects.css';
// import { ExternalLink } from 'lucide-react'; // ExternalLink used in loop
import { ExternalLink } from 'lucide-react';
import data from '../assets/data.json';
import { Link } from 'react-router-dom';

interface ProjectsProps {
    limit?: number;
}

export const Projects: React.FC<ProjectsProps> = ({ limit }) => {
    const projects = data.projects;
    const displayedProjects = limit ? projects.slice(0, limit) : projects;

    return (
        <section id="projects" className="projects-section">
            <div className="container">
                <div className="section-header text-center">
                    <h4 className="section-subtitle">Our Work</h4>
                    <h2 className="section-title">Featured Projects</h2>
                </div>

                <div className="projects-grid">
                    {displayedProjects.map((project, index) => (
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

                {limit && (
                    <div className="view-more-container" style={{ textAlign: 'center', marginTop: '3rem' }}>
                        <Link to="/projects" className="btn btn-primary">
                            View More Projects
                        </Link>
                    </div>
                )}
            </div>
        </section>
    );
};
