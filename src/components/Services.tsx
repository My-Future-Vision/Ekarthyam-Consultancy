import React, { useState } from 'react';
import { ChevronRight, Code, Brain, BookOpen, BarChart3, Bot, CheckCircle2 } from 'lucide-react';
import data from '../assets/data.json';
import { Link } from 'react-router-dom';
import './Services.css';

interface ServiceDetail {
    whatWeOffer?: string[];
    idealFor?: string[];
    capabilities?: string[];
    businessUseCases?: string[];
    specialization?: string[];
    exampleApplications?: string[];
    servicesInclude?: string[];
}

interface Service {
    id: string;
    title: string;
    description: string;
    highlight: string;
    icon: string;
    image: string;
    details: ServiceDetail;
}

interface ServicesProps {
    limit?: number;
}

const ICON_MAP: Record<string, React.ElementType> = {
    Code,
    Brain,
    BookOpen,
    BarChart3,
    Bot
};

export const Services: React.FC<ServicesProps> = ({ limit }) => {
    const services = data.services as Service[];
    const displayedServices = limit ? services.slice(0, limit) : services;
    const [expandedService, setExpandedService] = useState<string | null>(null);

    const toggleService = (id: string) => {
        setExpandedService(expandedService === id ? null : id);
    };

    const renderDetails = (details: ServiceDetail) => {
        const sections = [];
        if (details.whatWeOffer) sections.push({ title: "What We Offer", items: details.whatWeOffer });
        if (details.idealFor) sections.push({ title: "Ideal For", items: details.idealFor });
        if (details.capabilities) sections.push({ title: "Our Capabilities", items: details.capabilities });
        if (details.businessUseCases) sections.push({ title: "Business Use Cases", items: details.businessUseCases });
        if (details.specialization) sections.push({ title: "We Specialize In", items: details.specialization });
        if (details.exampleApplications) sections.push({ title: "Example Applications", items: details.exampleApplications });
        if (details.servicesInclude) sections.push({ title: "Services Include", items: details.servicesInclude });

        return (
            <div className="service-details-container">
                {sections.map((section, idx) => (
                    <div key={idx} className="service-detail-group">
                        <h4 className="detail-title">{section.title}</h4>
                        <ul className="detail-list">
                            {section.items.map((item, i) => (
                                <li key={i}><CheckCircle2 size={16} className="detail-icon" /> {item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        );
    };

    return (
        <section id="services" className="services-section">
            <div className="container">
                <div className="section-header text-center">
                    <h4 className="section-subtitle">Our Expertise</h4>
                    <h2 className="section-title">Comprehensive Tech Solutions</h2>
                    <p className="section-desc">Delivering scalable, intelligent, and future-ready systems.</p>
                </div>

                <div className="services-grid-modern">
                    {displayedServices.map((service, index) => {
                        const Icon = ICON_MAP[service.icon] || Code;
                        const isExpanded = expandedService === service.id;

                        return (
                            <div key={index} className={`service-card-modern ${isExpanded ? 'expanded' : ''}`}>
                                <div className="service-image-header">
                                    <img src={service.image} alt={service.title} />
                                    <div className="service-overlay"></div>
                                    <div className="service-icon-floating">
                                        <Icon size={32} />
                                    </div>
                                    <div className="service-highlight-badge">{service.highlight}</div>
                                </div>

                                <div className="service-content-body">
                                    <h3>{service.title}</h3>
                                    <p className="service-description">{service.description}</p>

                                    {isExpanded && (
                                        <div className="service-expanded-content">
                                            {renderDetails(service.details)}
                                        </div>
                                    )}

                                    <button
                                        className="service-expand-btn"
                                        onClick={() => toggleService(service.id)}
                                    >
                                        {isExpanded ? 'Show Less' : 'View More'}
                                        <ChevronRight size={16} className={`chevron ${isExpanded ? 'rotated' : ''}`} />
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {limit && (
                    <div className="view-more-container" style={{ textAlign: 'center', marginTop: '4rem' }}>
                        <Link to="/services" className="btn btn-primary">
                            View All Services
                        </Link>
                    </div>
                )}
            </div>
        </section>
    );
};
