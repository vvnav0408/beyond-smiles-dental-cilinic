import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import './Header.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    const isActive = (path) => {
        return location.pathname === path ? 'active' : '';
    };

    return (
        <header className="header">
            <div className="container header-container">
                <Link to="/" className="logo" onClick={closeMenu}>
                    {/* We use a text logo or an icon if we had an image */}
                    <span className="logo-icon">▲</span>
                    <div className="logo-text">
                        <h2>Dr. Arya's</h2>
                        <p>Beyond Smiles Dentistry</p>
                    </div>
                </Link>

                <div className="mobile-toggle" onClick={toggleMenu}>
                    {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                </div>

                <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
                    <ul className="nav-list">
                        <li><Link to="/" className={`nav-link ${isActive('/')}`} onClick={closeMenu}>Home</Link></li>
                        <li><Link to="/services" className={`nav-link ${isActive('/services')}`} onClick={closeMenu}>Services</Link></li>
                        <li><Link to="/gallery" className={`nav-link ${isActive('/gallery')}`} onClick={closeMenu}>Gallery</Link></li>
                        <li><Link to="/contact" className={`nav-link ${isActive('/contact')}`} onClick={closeMenu}>Contact</Link></li>
                        <li>
                            <Link to="/book" className="btn btn-primary book-btn" onClick={closeMenu}>
                                Book Appointment
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
