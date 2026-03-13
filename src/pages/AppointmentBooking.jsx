import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';
import './AppointmentBooking.css';

const doctorsList = [
    { id: 1, name: "Dr. Arya Aravindakshan" },
    { id: 2, name: "Dr. Jithin. C.N" },
    { id: 3, name: "Dr. Riswana Nazar" },
    { id: 4, name: "Dr. Paul Pritam. M" },
    { id: 5, name: "Dr. Suchitra Vijay" },
    { id: 6, name: "Dr. Prasad Menon" },
    { id: 7, name: "Dr. Padmapriya. S" },
    { id: 8, name: "Dr. Ajith PS" },
    { id: 9, name: "Dr. Aswin Prasad S" },
    { id: 10, name: "Dr. Raneesh K E" }
];

const AppointmentBooking = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const preSelectedDoctor = queryParams.get('doctor');

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        doctor: preSelectedDoctor || '',
        date: '',
        time: '',
        message: ''
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    useEffect(() => {
        // Scroll to top when loaded
        window.scrollTo(0, 0);
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate API call
        setTimeout(() => {
            setIsSubmitted(true);
            setFormData({ name: '', phone: '', email: '', doctor: '', date: '', time: '', message: '' });
        }, 1500);
    };

    const handleWhatsAppBooking = () => {
        const text = `Hello Beyond Smiles Dentistry,\nI would like to book an appointment.\nName: ${formData.name}\nPhone: ${formData.phone}\nDoctor: ${doctorsList.find(d => d.id == formData.doctor)?.name || 'Any'}\nDate: ${formData.date}\nTime: ${formData.time}\nMessage: ${formData.message}`;
        const encodedText = encodeURIComponent(text);
        window.open(`https://wa.me/+919876543210?text=${encodedText}`, '_blank');
    };

    return (
        <div className="booking-page animate-fade-in">
            <div className="page-header">
                <div className="container">
                    <h1>Book an Appointment</h1>
                    <p>Schedule your visit with our specialists easily.</p>
                </div>
            </div>

            <section className="section container">
                <div className="booking-form-wrapper">
                    {isSubmitted ? (
                        <div className="success-message">
                            <div className="success-icon">✓</div>
                            <h2>Booking Confirmed!</h2>
                            <p>Thank you for choosing Beyond Smiles Dentistry. Our team will contact you shortly to confirm your slot.</p>
                            <button className="btn btn-outline" onClick={() => setIsSubmitted(false)}>Book Another</button>
                        </div>
                    ) : (
                        <form className="booking-form" onSubmit={handleSubmit}>
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="name">Full Name *</label>
                                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required placeholder="John Doe" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="phone">Phone Number *</label>
                                    <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required placeholder="+91 9876543210" />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="email">Email Address</label>
                                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="john@example.com" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="doctor">Preferred Doctor</label>
                                    <select id="doctor" name="doctor" value={formData.doctor} onChange={handleChange}>
                                        <option value="">Any Available Doctor</option>
                                        {doctorsList.map(doc => (
                                            <option key={doc.id} value={doc.id}>{doc.name}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="date">Appointment Date *</label>
                                    <input type="date" id="date" name="date" value={formData.date} onChange={handleChange} required min={new Date().toISOString().split('T')[0]} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="time">Preferred Time</label>
                                    <select id="time" name="time" value={formData.time} onChange={handleChange}>
                                        <option value="">Select Time Slot</option>
                                        <option value="Morning">Morning (9:00 AM - 1:00 PM)</option>
                                        <option value="Evening">Evening (4:00 PM - 8:00 PM)</option>
                                    </select>
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Message / Symptoms</label>
                                <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows="4" placeholder="Briefly describe your symptoms or reason for visit..."></textarea>
                            </div>

                            <div className="form-actions">
                                <button type="submit" className="btn btn-primary submit-btn">Confirm Booking</button>
                                <span className="or-divider">OR</span>
                                <button type="button" className="btn btn-whatsapp" onClick={handleWhatsAppBooking}>
                                    <FaWhatsapp /> Book via WhatsApp
                                </button>
                            </div>
                        </form>
                    )}
                </div>
            </section>
        </div>
    );
};

export default AppointmentBooking;
