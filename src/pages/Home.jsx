import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import { FiArrowRight, FiCheckCircle } from 'react-icons/fi';

const doctors = [
    {
        id: 1,
        name: "Dr. Arya Aravindakshan",
        specialization: "BDS, Chief Dental Surgeon",
        description: "Chief Dental Surgeon.",
        image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=400&h=400"
    },
    {
        id: 2,
        name: "Dr. Jithin. C.N",
        specialization: "MDS, Orthodontist",
        description: "Specializing in Orthodontics.",
        image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=400&h=400"
    },
    {
        id: 3,
        name: "Dr. Riswana Nazar",
        specialization: "MDS, Orthodontist",
        description: "Specializing in Orthodontics.",
        image: "https://images.unsplash.com/photo-1594824432135-e10db8d69781?auto=format&fit=crop&q=80&w=400&h=400"
    },
    {
        id: 4,
        name: "Dr. Paul Pritam. M",
        specialization: "MDS, Endodontist",
        description: "Specializing in Endodontics.",
        image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=400&h=400"
    },
    {
        id: 5,
        name: "Dr. Suchitra Vijay",
        specialization: "BDS, PG Diploma (Endo)",
        description: "Specializing in Endodontics.",
        image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=400&h=400"
    },
    {
        id: 6,
        name: "Dr. Prasad Menon",
        specialization: "MDS, DNB Prosthodontist",
        description: "Specializing in Prosthodontics.",
        image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=400&h=400"
    },
    {
        id: 7,
        name: "Dr. Padmapriya. S",
        specialization: "MDS, Pedodontist",
        description: "Specializing in pediatric dentistry.",
        image: "https://images.unsplash.com/photo-1594824432135-e10db8d69781?auto=format&fit=crop&q=80&w=400&h=400"
    },
    {
        id: 8,
        name: "Dr. Ajith PS",
        specialization: "MDS, Periodontist",
        description: "Specializing in Periodontics.",
        image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=400&h=400"
    },
    {
        id: 9,
        name: "Dr. Aswin Prasad S",
        specialization: "MDS, Periodontist",
        description: "Specializing in Periodontics.",
        image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=400&h=400"
    },
    {
        id: 10,
        name: "Dr. Raneesh K E",
        specialization: "MDS, Oral Maxillofacial Surgeon",
        description: "Specializing in Oral Maxillofacial Surgery.",
        image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=400&h=400"
    }
];

const Home = () => {
    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-overlay"></div>
                <div className="container hero-content animate-fade-in">
                    <h1>Dr. Arya's Beyond Smiles Dentistry</h1>
                    <p className="tagline">Creating Healthy and Confident Smiles in Palakkad</p>
                    <div className="hero-cta">
                        <Link to="/book" className="btn btn-primary size-lg">
                            Book Appointment
                        </Link>
                        <Link to="/services" className="btn btn-outline size-lg hero-outline">
                            Our Services
                        </Link>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="about-section section container">
                <div className="about-grid">
                    <div className="about-image-wrapper">
                        <img
                            src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=600&h=700"
                            alt="Modern Dental Clinic"
                            className="about-img"
                        />
                    </div>
                    <div className="about-text">
                        <h2 className="section-title text-left">Welcome to Beyond Smiles Dentistry</h2>
                        <p className="lead-text">
                            Providing high-quality dental care using modern technology, experienced dentists, and a patient-friendly environment.
                        </p>
                        <p>
                            Located in the heart of Palakkad, Kerala, Dr. Arya's Beyond Smiles Dentistry is your premier destination for complete oral healthcare. We believe that every smile tells a story, and we are dedicated to making yours bright, healthy, and confident.
                        </p>
                        <ul className="about-features">
                            <li><FiCheckCircle className="feature-icon" /> State-of-the-art dental equipment</li>
                            <li><FiCheckCircle className="feature-icon" /> Highly experienced team of specialists</li>
                            <li><FiCheckCircle className="feature-icon" /> Strict sterilization protocols</li>
                            <li><FiCheckCircle className="feature-icon" /> Painless & comfortable treatments</li>
                        </ul>
                        <Link to="/contact" className="btn btn-primary mt-4">Visit Our Clinic</Link>
                    </div>
                </div>
            </section>

            {/* Meet Our Doctors Preview Section */}
            <section className="doctors-section section bg-accent">
                <div className="container">
                    <h2 className="section-title">Meet Our Experts</h2>
                    <p className="section-subtitle">A team of dedicated professionals committed to your oral health.</p>

                    <div className="doctors-grid">
                        {doctors.map(doctor => (
                            <Link to={`/doctor/${doctor.id}`} key={doctor.id} className="doctor-card">
                                <div className="doctor-img-wrapper">
                                    <img src={doctor.image} alt={doctor.name} className="doctor-img" />
                                </div>
                                <div className="doctor-info">
                                    <h3>{doctor.name}</h3>
                                    <span className="specialization">{doctor.specialization}</span>
                                    <p>{doctor.description}</p>
                                    <span className="view-profile-btn">
                                        View Profile <FiArrowRight />
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Google Reviews Section */}
            <section className="reviews-section section">
                <div className="container">
                    <h2 className="section-title">What Our Patients Say</h2>
                    <p className="section-subtitle">Read real stories from our satisfied patients.</p>

                    <div className="reviews-grid">
                        <div className="review-card">
                            <div className="review-header">
                                <div className="reviewer-avatar">S</div>
                                <div>
                                    <h4>Sanya Menon</h4>
                                    <div className="stars">★★★★★</div>
                                </div>
                            </div>
                            <p>"Absolutely wonderful experience. Dr. Arya is incredibly patient and the clinic is spotless. The root canal was completely painless!"</p>
                            <div className="google-source">Posted on Google</div>
                        </div>

                        <div className="review-card">
                            <div className="review-header">
                                <div className="reviewer-avatar">A</div>
                                <div>
                                    <h4>Arjun Nair</h4>
                                    <div className="stars">★★★★★</div>
                                </div>
                            </div>
                            <p>"The best pediatric dentist in Palakkad! Dr. Sneha made my daughter feel so comfortable. We finally found a dentist my child isn't afraid of."</p>
                            <div className="google-source">Posted on Google</div>
                        </div>

                        <div className="review-card">
                            <div className="review-header">
                                <div className="reviewer-avatar">M</div>
                                <div>
                                    <h4>Meena Kumar</h4>
                                    <div className="stars">★★★★★</div>
                                </div>
                            </div>
                            <p>"Got my aligners from Dr. Rohan. The whole process is seamless and the staff is very professional. Highly recommend this place."</p>
                            <div className="google-source">Posted on Google</div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
