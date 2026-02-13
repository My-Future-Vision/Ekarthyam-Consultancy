
import React from 'react';
import './Industries.css';
import { GraduationCap, Wallet, Activity, Briefcase, Building2, Landmark } from 'lucide-react';

const industries = [
    { name: "EdTech", icon: GraduationCap },
    { name: "FinTech", icon: Wallet },
    { name: "Healthcare", icon: Activity },
    { name: "SaaS Startups", icon: Briefcase },
    { name: "Enterprise IT", icon: Building2 },
    { name: "Public Sector", icon: Landmark }
];

export const Industries: React.FC = () => {
    return (
        <section className="industries-section">
            <div className="container">
                <div className="section-header text-center">
                    <h4 className="section-subtitle">Who We Serve</h4>
                    <h2 className="section-title">Industries Transforming with Us</h2>
                </div>
                <div className="industries-grid">
                    {industries.map((ind, index) => (
                        <div key={index} className="industry-card">
                            <div className="industry-icon">
                                <ind.icon size={32} />
                            </div>
                            <h3 className="industry-name">{ind.name}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
