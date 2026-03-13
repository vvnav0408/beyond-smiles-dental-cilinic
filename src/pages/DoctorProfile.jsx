import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { FiClock, FiAward, FiStar, FiCalendar } from 'react-icons/fi';
import './DoctorProfile.css';
import profilePlaceholder from '../assets/profile-placeholder.svg';

const doctorsData = [
    {
        id: 1,
        name: "Dr. Arya Aravindakshan",
        specialization: "Chief Dental Surgeon",
        qualifications: "BDS",
        experience: "15+ Years Experience",
        biography: "Dr. Arya Aravindakshan is the founder and chief dentist at Beyond Smiles Dentistry. She is committed to continuing education and uses the latest technology to provide optimal care for her patients.",
        image: profilePlaceholder,
        timings: "Mon-Sat: 9:00 AM - 1:00 PM, 4:00 PM - 8:00 PM",
        expertise: ["General Dentistry", "Smile Makeovers", "Full Mouth Rehab"]
    },
    {
        id: 2,
        name: "Dr. Jithin. C.N",
        specialization: "Orthodontist",
        qualifications: "MDS",
        experience: "10+ Years Experience",
        biography: "Dr. Jithin C.N is a highly skilled orthodontist with a passion for creating perfect smiles.",
        image: profilePlaceholder,
        timings: "Call for Appointments",
        expertise: ["Orthodontics", "Clear Aligners", "Traditional Braces"]
    },
    {
        id: 3,
        name: "Dr. Riswana Nazar",
        specialization: "Orthodontist",
        qualifications: "MDS",
        experience: "Expertise in teeth alignment",
        biography: "Dr. Riswana Nazar specializes in clear aligners and modern orthodontic care.",
        image: profilePlaceholder,
        timings: "Call for Appointments",
        expertise: ["Orthodontics", "Clear Aligners", "Braces"]
    },
    {
        id: 4,
        name: "Dr. Paul Pritam. M",
        specialization: "Endodontist",
        qualifications: "MDS",
        experience: "Expert in root canal procedures",
        biography: "Dr. Paul Pritam M is a skilled Endodontist specializing in painless root canal treatments.",
        image: profilePlaceholder,
        timings: "Call for Appointments",
        expertise: ["Endodontics", "Root Canal Treatment", "Pulp Therapy"]
    },
    {
        id: 5,
        name: "Dr. Suchitra Vijay",
        specialization: "Endodontist",
        qualifications: "BDS, PG Diploma (Endo)",
        experience: "Expert in root canal procedures",
        biography: "Dr. Suchitra Vijay relies on modern endodontic techniques to save natural teeth.",
        image: profilePlaceholder,
        timings: "Call for Appointments",
        expertise: ["Endodontics", "Root Canal Treatment"]
    },
    {
        id: 6,
        name: "Dr. Prasad Menon",
        specialization: "Prosthodontist",
        qualifications: "MDS, DNB",
        experience: "Expert in missing teeth replacement",
        biography: "Dr. Prasad Menon is a highly skilled Prosthodontist for crowns, bridges, and dentures.",
        image: profilePlaceholder,
        timings: "Call for Appointments",
        expertise: ["Prosthodontics", "Crowns & Bridges", "Dentures"]
    },
    {
        id: 7,
        name: "Dr. Padmapriya. S",
        specialization: "Pedodontist",
        qualifications: "MDS",
        experience: "Expert in pediatric dentistry",
        biography: "Dr. Padmapriya S specializes in providing a comfortable dental experience for children.",
        image: profilePlaceholder,
        timings: "Call for Appointments",
        expertise: ["Pedodontics", "Preventive Dentistry for Children"]
    },
    {
        id: 8,
        name: "Dr. Ajith PS",
        specialization: "Periodontist",
        qualifications: "MDS",
        experience: "Expert in gum care and implants",
        biography: "Dr. Ajith PS focuses on periodontal health to ensure a strong foundation for your teeth.",
        image: profilePlaceholder,
        timings: "Call for Appointments",
        expertise: ["Periodontics", "Gum Surgeries", "Scaling & Root Planing"]
    },
    {
        id: 9,
        name: "Dr. Aswin Prasad S",
        specialization: "Periodontist",
        qualifications: "MDS",
        experience: "Expert in gum care and implants",
        biography: "Dr. Aswin Prasad S provides specialized periodontal treatments for complex cases.",
        image: profilePlaceholder,
        timings: "Call for Appointments",
        expertise: ["Periodontics", "Advanced Gum Care"]
    },
    {
        id: 10,
        name: "Dr. Raneesh K E",
        specialization: "Oral Maxillofacial Surgeon",
        qualifications: "MDS",
        experience: "Expert in Oral Surgery",
        biography: "Dr. Raneesh K E is a skilled surgeon dealing with complex facial and dental surgical needs.",
        image: profilePlaceholder,
        timings: "Call for Appointments",
        expertise: ["Oral Maxillofacial Surgery", "Wisdom Tooth Extraction", "Implants"]
    }
];

const DoctorProfile = () => {
    const { id } = useParams();
    const doctor = doctorsData.find(d => d.id === parseInt(id));

    if (!doctor) {
        return (
            <div className="container section text-center">
                <h2>Doctor not found.</h2>
                <Link to="/" className="btn btn-primary mt-4">Return Home</Link>
            </div>
        );
    }

    return (
        <div className="doctor-profile-page animate-fade-in">
            <div className="page-header">
                <div className="container">
                    <h1>Doctor Profile</h1>
                </div>
            </div>

            <section className="section container profile-section">
                <div className="profile-grid">
                    <div className="profile-image-section">
                        <div className="profile-image-wrapper">
                            <img src={doctor.image} alt={doctor.name} className="profile-img" />
                        </div>

                        <div className="quick-info-card">
                            <div className="info-row">
                                <FiAward className="info-icon" />
                                <div>
                                    <strong>Qualifications</strong>
                                    <p>{doctor.qualifications}</p>
                                </div>
                            </div>
                            <div className="info-row">
                                <FiStar className="info-icon" />
                                <div>
                                    <strong>Experience</strong>
                                    <p>{doctor.experience}</p>
                                </div>
                            </div>
                            <div className="info-row">
                                <FiClock className="info-icon" />
                                <div>
                                    <strong>Clinic Timings</strong>
                                    <p>{doctor.timings}</p>
                                </div>
                            </div>
                        </div>

                        <Link to={`/book?doctor=${doctor.id}`} className="btn btn-primary btn-block">
                            <FiCalendar /> Book Appointment
                        </Link>
                    </div>

                    <div className="profile-details-section">
                        <h2 className="doctor-name">{doctor.name}</h2>
                        <p className="doctor-specialization">{doctor.specialization}</p>

                        <div className="bio-content">
                            <h3>Biography</h3>
                            <p>{doctor.biography}</p>
                        </div>

                        <div className="expertise-content">
                            <h3>Areas of Expertise</h3>
                            <ul className="expertise-list">
                                {doctor.expertise.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default DoctorProfile;
