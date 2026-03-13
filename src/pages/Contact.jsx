import React from 'react';
import { FiMapPin, FiPhone, FiMail, FiClock } from 'react-icons/fi';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact-page animate-fade-in">
            <div className="page-header">
                <div className="container">
                    <h1>Contact Us</h1>
                    <p>We'd love to hear from you. Get in touch with our clinic.</p>
                </div>
            </div>

            <section className="section container contact-section">
                <div className="contact-grid">
                    {/* Contact Details */}
                    <div className="contact-info-cards">
                        <h2>Get In Touch</h2>
                        <p className="contact-description">Reach out to us for appointments, inquiries, or emergencies. Our team is always ready to assist you.</p>

                        <div className="info-card">
                            <div className="icon-wrapper">
                                <FiMapPin className="info-icon" />
                            </div>
                            <div>
                                <h3>Clinic Address</h3>
                                <p>Dr.Arya’s Beyond Smiles Dentistry,<br />Yakkara junction, post, West Yakkara,<br />Palakkad, Kannadi-II, Kerala 678701</p>
                            </div>
                        </div>

                        <div className="info-card">
                            <div className="icon-wrapper">
                                <FiPhone className="info-icon" />
                            </div>
                            <div>
                                <h3>Phone Number</h3>
                                <p>+917736180080</p>
                            </div>
                        </div>

                        <div className="info-card">
                            <div className="icon-wrapper">
                                <FiMail className="info-icon" />
                            </div>
                            <div>
                                <h3>Email Address</h3>
                                <p>info@beyondsmiles.com<br />appointments@beyondsmiles.com</p>
                            </div>
                        </div>

                        <div className="info-card">
                            <div className="icon-wrapper">
                                <FiClock className="info-icon" />
                            </div>
                            <div>
                                <h3>Working Hours</h3>
                                <p>Monday - Saturday: 9:00 AM - 8:00 PM<br />Sunday: Emergency Only</p>
                            </div>
                        </div>
                    </div>

                    {/* Google Maps Embed */}
                    <div className="map-container">
                        <h2>Find Us Here</h2>
                        <div className="map-wrapper">
                            <iframe
                                title="Dr. Arya's Beyond Smiles Dentistry Location"
                                src="https://www.google.com/maps?q=Dr.Arya%E2%80%99s+Beyond+Smiles+Dentistry,+Yakkara+junction,+post,+West+Yakkara,+Palakkad,+Kannadi-II,+Kerala+678701&output=embed"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
