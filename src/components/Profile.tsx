import React from 'react';
import { Target, Eye, Activity } from 'lucide-react';
import './Profile.css';

export const Profile: React.FC = () => {
    return (
        <section id="profile" className="profile-section">
            <div className="container">
                <div className="section-header text-center">
                    <h2 className="section-title">Our Profile</h2>
                    <p className="section-desc">Guided by a clear vision and unwavering values.</p>
                </div>

                <div className="profile-grid">
                    <div className="profile-card mission">
                        <div className="profile-icon">
                            <Target size={32} />
                        </div>
                        <h3>Mission</h3>
                        <p>To deliver high-impact, innovative software solutions that empower enterprises to achieve operational excellence and digital leadership.</p>
                    </div>

                    <div className="profile-card vision">
                        <div className="profile-icon">
                            <Eye size={32} />
                        </div>
                        <h3>Vision</h3>
                        <p>To be the global partner of choice for next-generation technology consulting, setting new standards in AI and software engineering.</p>
                    </div>

                    <div className="profile-card values">
                        <div className="profile-icon">
                            <Activity size={32} />
                        </div>
                        <h3>Core Values</h3>
                        <ul className="values-list">
                            <li><strong>Innovation:</strong> Constantly pushing boundaries.</li>
                            <li><strong>Reliability:</strong> Trusted delivery, every time.</li>
                            <li><strong>Performance:</strong> Optimized for speed and scale.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};
