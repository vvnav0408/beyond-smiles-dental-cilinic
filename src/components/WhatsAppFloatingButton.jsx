import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import './WhatsAppFloatingButton.css';

const WhatsAppFloatingButton = () => {
    const phoneNumber = '07736180080';
    const defaultMessage = encodeURIComponent('Hello Dr. Arya, I would like to book an appointment.');

    return (
        <a
            href={`https://wa.me/${phoneNumber}?text=${defaultMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-float animate-pulse"
            aria-label="Contact us on WhatsApp"
        >
            <FaWhatsapp className="whatsapp-icon" />
        </a>
    );
};

export default WhatsAppFloatingButton;
