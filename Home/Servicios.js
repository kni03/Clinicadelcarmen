import React, { useState } from "react";
import './Servicios.css';
import { FaStethoscope, FaHeartbeat, FaTeeth, FaUserMd, FaTint, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const services = [
  {
    id: 1,
    title: "Medicina General",
    description: "Atención primaria para todas tus necesidades de salud.",
    icon: <FaStethoscope size={50} />,
    backgroundImage: "/Images/serviceBackground.png",
    doctors: [
      {
        name: "Dr. Victor Manuel Salazar Mendoza",
        specialization: "Medicina General",
        availability: "Lun-Vie: 9 AM - 4 PM, Sab-Dom: 10pm-4pm",
        briefDescription: "Médico general experimentado que brinda atención integral.",
        bulletServices: [
          "Control diabetes",
          "Control hipertensión",
          "Certificados de salud",
          "Consulta médica general",
          "y Más",
        ],
      },
      {
        name: "Dra. Militza Salazar Cavazos",
        specialization: "Medicina General",
        availability: "Lun-Vie: 10 AM - 8 PM, Sab-Dom: Con cita",
        briefDescription: "Experta en medicina familiar, proporcionando atención a pacientes de todas las edades.",
        bulletServices: [
          "Curación de heridas",
          "Exámenes de salud",
          "Consulta médica general",
          "Control de signos vitales",
          "y Más",
        ],
      }
    ],
  },
  {
    id: 2,
    title: "Ultrasonido",
    description: "Servicios de ultrasonido de alta calidad.",
    icon: <FaHeartbeat size={50} />,
    backgroundImage: "/Images/serviceBackground2.png",
    doctors: [
      {
        name: "Dr. Luis Estrada Espinosa",
        specialization: "Radiología",
        availability: "Lun: Despues de las 3 PM, Mar y Vie: Despues de las 7:30PM",
        briefDescription: "Ultrasonido con Equipo de Alta Definición Acudimos el mismo día.",
        bulletServices: [
          "Ultrasonido Obstetrico",
          "Ultrasonido Abdominales",
          "Ultrasonido Ginecologico",
          "Ultrasonido Tiroides",
          "y Más",
        ],
      }
    ],
  },
  {
    id: 3,
    title: "Medico Estomatólogo",
    description: "Tratamientos dental para todas las edades.",
    icon: <FaTeeth size={50} />,
    backgroundImage: "/Images/serviceBackground.png",
    doctors: [
      {
        name: "Dr. Ricardo J. Pérez Gonzalez",
        specialization: "Médico Estomatólogo",
        availability: "Lun-Sab, 10 AM - 5 PM",
        briefDescription: "Proporciona tratamientos deentales para niños y adultos.",
        bulletServices: [
          "Empastes",
          "Limpieza Dental",
          "Periodoncia",
          "Prótesis Total y Parcial",
          "y más",
        ],
      }
    ],
  },
  {
    id: 4,
    title: "Hemodiálisis",
    description: "Tratamientos de hemodiálisis para pacientes con insuficiencia renal.",
    icon: <FaTint size={50} />,
    backgroundImage: "/Images/serviceBackground2.png",
    doctors: [
      {
        name: "Dr. Keisuke Enrique Miyahara",
        specialization: "Nefrología",
        availability: "Lun-Vie, 5 AM - 9 PM",
        briefDescription: "Especialista en tratamientos de hemodiálisis y cuidado renal.",
        bulletServices: [
          "Hemodiálisis",
          "Manejo de insuficiencia renal",
          "Cuidados preventivos",
          "y Más"
        ],
      }
    ],
  },
  {
    id: 5,
    title: "Consulta",
    description: "Consultas médicas expertas adaptadas a tus necesidades.",
    icon: <FaUserMd size={50} />,
    backgroundImage: "/Images/serviceBackground.png",
    consultationInfo: {
      briefDescription: "Por favor, haga clic en el botón 'Agenda una cita' en nuestro sitio web. Será redirigido a nuestra página de Facebook, donde deberá hacer clic en 'Reservar' para continuar con la programación de su consulta. Indique el nombre del profesional con quien desea agendar la cita y especifique el horario de su preferencia. Nuestro equipo confirmará su solicitud a la brevedad.",
      link: "https://www.facebook.com/profile.php?id=61567468652893"
    },
  }
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
                  <div className="consultation-info">
                    <p>{service.consultationInfo.briefDescription}</p>
                    <a href={service.consultationInfo.link} target="_blank" rel="noopener noreferrer" className="appointment-button">
                      Agenda una cita
                    </a>
                  </div>
                ) : (
                  <div className="doctors-grid">
                    {service.doctors.map((doctor, index) => (
                      <div key={index} className="doctor-card">
                        <p className="doctor-name"><strong>Nombre:</strong> {doctor.name}</p>
                        <p className="doctor-specialization"><strong>Especialización:</strong> {doctor.specialization}</p>
                        <p className="doctor-availability"><strong>Disponibilidad:</strong> {doctor.availability}</p>
                        <p className="doctor-description"><strong>Breve Descripción:</strong> {doctor.briefDescription}</p>
                        {doctor.bulletServices.length > 0 && (
                          <>
                            <p className="doctor-services-title"><strong>Servicios:</strong></p>
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