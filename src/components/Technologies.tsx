
import React from 'react';
import './Technologies.css';

const technologies = [
    "Python", "Java", "Spring Boot", "FastAPI", "Node.js", "Kubernetes", "Docker",
    "Camunda", "Zeebe", "Vector Databases", "OpenAI", "LLM Integrations", "AWS",
    "Azure", "GCP", "Elasticsearch", "Observability Stack"
];

export const Technologies: React.FC = () => {
    return (
        <section className="technologies-section">
            <div className="container">
                <div className="section-header text-center">
                    <h4 className="section-subtitle">Our Tech Stack</h4>
                    <h2 className="section-title">Technologies We Work With</h2>
                </div>
                <div className="tech-grid">
                    {technologies.map((tech, index) => (
                        <div key={index} className="tech-item">
                            {tech}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
