import React from 'react';
import './Services.css';
import { FiCheck } from 'react-icons/fi';

const services = [
    {
        id: 1,
        title: "Teeth Cleaning & Polishing",
        description: "Professional removal of plaque and tartar to maintain healthy gums and prevent cavities, leaving your teeth feeling fresh and smooth.",
        icon: "🦷"
    },
    {
        id: 2,
        title: "Root Canal Treatment",
        description: "Painless advanced endodontic treatment to save severely infected or damaged teeth using modern rotary instruments.",
        icon: "⚕️"
    },
    {
        id: 3,
        title: "Dental Implants",
        description: "Permanent and natural-looking replacement for missing teeth using premium quality titanium implants to restore function and aesthetics.",
        icon: "🔩"
    },
    {
        id: 4,
        title: "Braces and Orthodontics",
        description: "Correction of misaligned teeth using traditional metal braces, ceramic braces, and clear aligners for a perfect smile.",
        icon: "😁"
    },
    {
        id: 5,
        title: "Cosmetic Dentistry",
        description: "Smile makeovers, dental veneers, and aesthetic re-contouring to give you the flawless smile you have always desired.",
        icon: "✨"
    },
    {
        id: 6,
        title: "Teeth Whitening",
        description: "Safe and effective bleaching procedures to remove stains and dramatically lighten the color of your teeth in a single visit.",
        icon: "💎"
    },
    {
        id: 7,
        title: "Pediatric Dentistry",
        description: "Specialized, gentle dental care for children in a friendly environment, focusing on preventive care and cavity treatments.",
        icon: "🧸"
    }
];

const Services = () => {
    return (
        <div className="services-page animate-fade-in">
            <div className="page-header">
                <div className="container">
                    <h1>Our Dental Services</h1>
                    <p>Comprehensive care tailored to your unique smile.</p>
                </div>
            </div>

            <section className="section container">
                <div className="services-intro">
                    <p>At Dr. Arya's Beyond Smiles Dentistry, we provide a wide range of services to meet all your oral health needs under one roof. Our experienced specialists use the latest technology to ensure comfortable and effective treatments.</p>
                </div>

                <div className="services-grid">
                    {services.map(service => (
                        <div key={service.id} className="service-card">
                            <div className="service-icon">{service.icon}</div>
                            <h3 className="service-title">{service.title}</h3>
                            <p className="service-description">{service.description}</p>
                            <ul className="service-benefits">
                                <li><FiCheck className="check-icon" /> High precision</li>
                                <li><FiCheck className="check-icon" /> Expert care</li>
                            </ul>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Services;
