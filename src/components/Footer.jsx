import React from 'react';
import { Link } from 'react-router-dom';
import { FiMapPin, FiPhone, FiMail, FiClock } from 'react-icons/fi';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-section">
                    <div className="logo logo-footer">
                        <span className="logo-icon">▲</span>
                        <div className="logo-text">
                            <h2>Dr. Arya's</h2>
                            <p>Beyond Smiles Dentistry</p>
                        </div>
                    </div>
                    <p className="footer-desc">
                        Providing high-quality dental care using modern technology and experienced professionals in a comfortable environment.
                    </p>
                </div>

                <div className="footer-section">
                    <h3>Quick Links</h3>
                    <ul className="footer-links">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/services">Services</Link></li>
                        <li><Link to="/gallery">Gallery</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/book">Book Appointment</Link></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3>Contact Info</h3>
                    <ul className="contact-info">
                        <li>
                            <FiMapPin className="contact-icon" />
                            <span>Palakkad, Kerala, India</span>
                        </li>
                        <li>
                            <FiPhone className="contact-icon" />
                            <span>+91 98765 43210</span>
                        </li>
                        <li>
                            <FiMail className="contact-icon" />
                            <span>info@beyondsmiles.com</span>
                        </li>
                        <li>
                            <FiClock className="contact-icon" />
                            <span>Mon - Sat: 9:00 AM - 8:00 PM</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Dr. Arya's Beyond Smiles Dentistry. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
