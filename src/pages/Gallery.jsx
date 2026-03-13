import React, { useState } from 'react';
import './Gallery.css';

const galleryItems = [
    { id: 1, src: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800&h=600", category: "clinic", alt: "Clinic Reception" },
    { id: 2, src: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800&h=600", category: "equipment", alt: "Modern Dental Chair" },
    { id: 3, src: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800&h=900", category: "treatment", alt: "Treatment Room" },
    { id: 4, src: "https://images.unsplash.com/photo-1609840114035-3c981b7d0efa?auto=format&fit=crop&q=80&w=800&h=600", category: "patients", alt: "Happy Patient Smile" },
    { id: 5, src: "https://images.unsplash.com/photo-1590623190820-2c7000d07e60?auto=format&fit=crop&q=80&w=800&h=1000", category: "clinic", alt: "Waiting Lounge" },
    { id: 6, src: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800&h=600", category: "equipment", alt: "Sterilization Equipment" },
    { id: 7, src: "https://images.unsplash.com/photo-1533227265828-49f87c805eb3?auto=format&fit=crop&q=80&w=800&h=800", category: "patients", alt: "Child Patient Smiling" },
    { id: 8, src: "https://images.unsplash.com/photo-1588776813677-77fdbcefc6ae?auto=format&fit=crop&q=80&w=800&h=600", category: "treatment", alt: "Advanced X-Ray" },
];

const Gallery = () => {
    const [filter, setFilter] = useState('all');

    const filteredItems = filter === 'all'
        ? galleryItems
        : galleryItems.filter(item => item.category === filter);

    return (
        <div className="gallery-page animate-fade-in">
            <div className="page-header">
                <div className="container">
                    <h1>Clinic Gallery</h1>
                    <p>Take a tour of our state-of-the-art facilities.</p>
                </div>
            </div>

            <section className="section container">
                {/* Filter Controls */}
                <div className="gallery-filters">
                    <button className={`filter-btn ${filter === 'all' ? 'active' : ''}`} onClick={() => setFilter('all')}>All</button>
                    <button className={`filter-btn ${filter === 'clinic' ? 'active' : ''}`} onClick={() => setFilter('clinic')}>Clinic Interior</button>
                    <button className={`filter-btn ${filter === 'equipment' ? 'active' : ''}`} onClick={() => setFilter('equipment')}>Equipment</button>
                    <button className={`filter-btn ${filter === 'treatment' ? 'active' : ''}`} onClick={() => setFilter('treatment')}>Treatment Rooms</button>
                    <button className={`filter-btn ${filter === 'patients' ? 'active' : ''}`} onClick={() => setFilter('patients')}>Happy Patients</button>
                </div>

                {/* Gallery Grid */}
                <div className="gallery-grid">
                    {filteredItems.map(item => (
                        <div key={item.id} className="gallery-item animate-fade-in">
                            <img src={item.src} alt={item.alt} loading="lazy" />
                            <div className="gallery-overlay">
                                <span>{item.alt}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Gallery;
