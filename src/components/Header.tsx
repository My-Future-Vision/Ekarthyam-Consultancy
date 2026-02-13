import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Header.css';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle scrolling to hash on initial load or route change result
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/', hash: '' },
    { name: 'About', path: '/', hash: '#about' },
    { name: 'Services', path: '/services', hash: '' },
    { name: 'Projects', path: '/projects', hash: '' },
    { name: 'Profile', path: '/', hash: '#profile' },
  ];

  const handleNavClick = (e: React.MouseEvent, path: string, hash?: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    if (path === '/services' || path === '/projects') {
      navigate(path);
      return;
    }

    if (location.pathname !== '/' && path === '/') {
      navigate('/' + (hash || ''));
    } else if (location.pathname === '/' && hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (location.pathname === '/' && !hash) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-content">
        <div className="logo-container">
          <img
            src="/logo.svg"
            alt="Ekarthyam Logo"
            className="logo-img"
            onClick={(e) => handleNavClick(e, '/')}
            style={{ cursor: 'pointer' }}
          />
        </div>

        <nav className="desktop-nav">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.path + link.hash}
              className={`nav-link ${location.pathname === link.path && !link.hash ? 'active' : ''}`}
              onClick={(e) => handleNavClick(e, link.path, link.hash)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="/#contact"
            className="btn btn-primary nav-cta"
            onClick={(e) => handleNavClick(e, '/', '#contact')}
          >
            Get in Touch
          </a>
        </nav>

        <button
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div className={`mobile-nav ${isMobileMenuOpen ? 'open' : ''}`}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.path + link.hash}
              className="mobile-nav-link"
              onClick={(e) => handleNavClick(e, link.path, link.hash)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="/#contact"
            className="btn btn-primary mobile-cta"
            onClick={(e) => handleNavClick(e, '/', '#contact')}
          >
            Get in Touch
          </a>
        </div>
      </div>
    </header>
  );
};
