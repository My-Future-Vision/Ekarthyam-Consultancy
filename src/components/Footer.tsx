import React from 'react';
import './Footer.css';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

export const Footer: React.FC = () => {
    return (
        <footer id="contact" className="footer">
            <div className="container footer-container">
                <div className="footer-brand">
                    <h2 className="footer-logo">EKARTHYAM</h2>
                    <p>Empowering enterprises with next-gen software and AI solutions.</p>
                </div>

                <div className="footer-links">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#projects">Projects</a></li>
                    </ul>
                </div>

                <div className="footer-contact">
                    <h4>Contact Us</h4>
                    <ul>
                        <li><Mail size={16} /> admin@ekarthyamconsultancy.co.in</li>
                        <li><Mail size={16} /> info@ekarthyamconsultancy.co.in</li>
                        <li><Phone size={16} /> +91 97779 67942</li>
                        <li><MapPin size={16} /> Bhubaneswar, Odisha</li>
                    </ul>
                </div>

                <div className="footer-social">
                    <h4>Follow Us</h4>
                    <div className="social-icons">
                        <a href="#" aria-label="LinkedIn"><Linkedin size={20} /></a>
                        <a href="#" aria-label="Twitter"><Twitter size={20} /></a>
                        <a href="#" aria-label="Facebook"><Facebook size={20} /></a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom text-center">
                <p>&copy; {new Date().getFullYear()} Ekarthyam Consultancy Services Pvt. Ltd. All rights reserved.</p>
            </div>
        </footer>
    );
};
