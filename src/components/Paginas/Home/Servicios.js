import React, { useState } from "react";
import './Servicios.css';
import { FaStethoscope, FaHeartbeat, FaTeeth, FaUserMd, FaAmbulance, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const services = [
  {
    id: 1,
    title: "Medicina General",
    description: "Atención primaria para todas tus necesidades de salud.",
    icon: <FaStethoscope size={50} />,
    backgroundImage: "/Images/serviceBackground.png",
    doctors: [
      {
        name: "Dr. Alonso Martinez",
        specialization: "General Medicine",
        availability: "Mon-Fri, 9 AM - 5 PM",
        briefDescription: "Experienced general practitioner providing comprehensive healthcare.",
        bulletServices: [
          "Routine check-ups",
          "Health screenings",
          "Chronic disease management",
          "Preventive care",
        ],
      },
      {
        name: "Dr. Sofia Hernandez",
        specialization: "Family Medicine",
        availability: "Tue-Thu, 10 AM - 4 PM",
        briefDescription: "Expert in family medicine, providing care for patients of all ages.",
        bulletServices: [
          "Family planning",
          "Pediatric care",
          "Geriatric care",
          "Chronic disease management",
        ],
      }
    ],
  },
  {
    id: 2,
    title: "Ultrasonido",
    description: "Servicios de ultrasonido de alta calidad.",
    icon: <FaHeartbeat size={50} />,
    backgroundImage: "/Images/serviceBackground.png",
    doctors: [
      {
        name: "Dr. Maria Gonzalez",
        specialization: "Radiology",
        availability: "Tue-Thu, 10 AM - 4 PM",
        briefDescription: "Specialized in diagnostic imaging and ultrasound services.",
        bulletServices: [
          "Abdominal ultrasound",
          "Pelvic ultrasound",
          "Obstetric ultrasound",
          "Vascular ultrasound",
        ],
      }
    ],
  },
  {
    id: 3,
    title: "Ortodontista",
    description: "Tratamientos ortodónticos para todas las edades.",
    icon: <FaTeeth size={50} />,
    backgroundImage: "/Images/serviceBackground.png",
    doctors: [
      {
        name: "Dr. Carlos Perez",
        specialization: "Orthodontics",
        availability: "Mon-Wed, 8 AM - 2 PM",
        briefDescription: "Providing orthodontic treatments for children and adults.",
        bulletServices: [
          "Braces",
          "Invisalign",
          "Retainers",
          "Corrective jaw surgery",
        ],
      }
    ],
  },
  {
    id: 4,
    title: "Consultation",
    description: "Expert medical consultations tailored to your needs.",
    icon: <FaUserMd size={50} />,
    backgroundImage: "/Images/serviceBackground.png",
    consultationInfo: {
      briefDescription: "Offering personalized medical consultations and treatment plans. To set up a consultation, please call our office or use our online booking system.",
    },
  },
  {
    id: 5,
    title: "Urgencia",
    description: "Servicios de emergencia 24/7 para atención médica urgente.",
    icon: <FaAmbulance size={50} />,
    backgroundImage: "/Images/serviceBackground.png",
    doctors: [],
  },
];

const Servicios = () => {
  const [activeService, setActiveService] = useState(null);

  const toggleDropdown = (id) => {
    setActiveService(activeService === id ? null : id);
  };

  return (
    <section className="services-container">
      <h2 className="services-title">
        <span className="services-icon"><FaUserMd size={40} /></span>
        Nuestros Servicios
      </h2>
      <div className="services-list">
        {services.map((service) => (
          <div key={service.id} className="service-card">
            <div
              className="service-content-container"
              style={{
                backgroundImage: `url(${service.backgroundImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="service-icon">{service.icon}</div>
              <div className="service-content">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </div>
              <div className="service-dropdown-toggle" onClick={() => toggleDropdown(service.id)}>
                {activeService === service.id ? <FaChevronUp size={20} color="white" /> : <FaChevronDown size={20} color="white" />}
              </div>
            </div>
            {activeService === service.id && (
              <div className="service-dropdown">
                {service.id === 5 ? (
                  <div className="emergency-info"></div>
                ) : service.id === 4 ? (
                  <div className="consultation-info">
                    <p>{service.consultationInfo.briefDescription}</p>
                  </div>
                ) : (
                  <div className="doctors-grid">
                    {service.doctors.map((doctor, index) => (
                      <div key={index} className="doctor-card">
                        <p className="doctor-name"><strong>Name:</strong> {doctor.name}</p>
                        <p className="doctor-specialization"><strong>Specialization:</strong> {doctor.specialization}</p>
                        <p className="doctor-availability"><strong>Availability:</strong> {doctor.availability}</p>
                        <p className="doctor-description"><strong>Brief Description:</strong> {doctor.briefDescription}</p>
                        {doctor.bulletServices.length > 0 && (
                          <>
                            <p className="doctor-services-title"><strong>Services:</strong></p>
                            <ul className="doctor-services-list">
                              {doctor.bulletServices.map((bullet, i) => (
                                <li key={i}>{bullet}</li>
                              ))}
                            </ul>
                          </>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Servicios;