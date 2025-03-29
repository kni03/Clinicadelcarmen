// DoctorCarousel.js
import React, { useState, useEffect } from 'react';
import './Consultas.css';

// Doctor Data
const doctores = [
  {
    name: "Dr. Victor Manuel M. Salazar ",
    specialty: "Medicína General",
    photo: "/Images/DoctorA.png", // Replace with actual doctor images
    services: [
      "✅ Exámenes médicos de rutina y chequeos generales",
      "✅ Prescripción de medicamentos y recomendaciones de tratamiento",
      "✅ Diagnóstico y tratamiento de enfermedades comunes",
      "✅ Atención de urgencias menores y primeros auxilios",
      "✅ Referencia a especialistas cuando es necesario"
    ],
    experience: "37 años",
    available: "L - B, 9 AM - 5 PM"
  },
  {
    name: "Dra. Militza Salazar Cavazos",
    specialty: "Medicína General",
    photo: "/Images/DoctorB.png",
    services: [
      "✅ Exámenes médicos de rutina y chequeos generales",
      "✅ Prescripción de medicamentos y recomendaciones de tratamiento",
      "✅ Diagnóstico y tratamiento de enfermedades comunes",
      "✅ Atención de urgencias menores y primeros auxilios",
      "✅ Referencia a especialistas cuando es necesario"
    ],
    experience: "10 años",
    available: "L, B, 10 AM - 3 PM"
  },
  {
    name: "Dr. Ricardo Giovanni Perez Gonzalez",
    specialty: "Orthodentista",
    photo: "/Images/DoctorA.png",
    services: [
      "✅ ",
      "✅ ",
      "✅ ",
      "✅ ",
      "✅ "
    ],
    experience: "2 años",
    available: "L, B, 9 AM - 4 PM"
  }
];

const DoctorCarousel = () => {
  const [currentDoctorIndex, setCurrentDoctorIndex] = useState(0);
  const [backgroundIndex, setBackgroundIndex] = useState(0);

  const backgroundImages = [
    "/Images/heroA.png",
    "/Images/heroB.png",
    "/Images/heroC.png",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setBackgroundIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 5000); // Change background every 5 seconds

    return () => clearInterval(interval); // Clean up the interval on unmount
  }, []);

  const nextDoctor = () => {
    setCurrentDoctorIndex((prevIndex) => (prevIndex + 1) % doctores.length);
  };

  const prevDoctor = () => {
    setCurrentDoctorIndex((prevIndex) => (prevIndex - 1 + doctores.length) % doctores.length);
  };

  const doctor = doctores[currentDoctorIndex];

  return (
    <div className="doctor-carousel" style={{ backgroundImage: `url(${backgroundImages[backgroundIndex]})` }}>
      <div className="carousel">
        <button onClick={prevDoctor} className="carousel-btn prev-btn">{"<"}</button>
        <div className="doctor-info">
          <div className="doctor-photo-box">
            <img src={doctor.photo} alt={doctor.name} className="doctor-photo" />
          </div>
          <div className="doctor-details">
            <h3>{doctor.name}</h3>
            <p><strong>Especialidad:</strong> {doctor.specialty}</p>
            <p><strong>Experiencia:</strong> {doctor.experience}</p>
            <p><strong>Disponible:</strong> {doctor.available}</p>
            <p>{doctor.description}</p>
            
            <h4>Servicios:</h4>
            <ul>
              {doctor.services.map((service, index) => (
                <li key={index}>{service}</li>
              ))}
            </ul>           
            <a
              href="https://www.facebook.com/profile.php?id=61567468652893" 
              target="_blank" 
              rel="noopener noreferrer"
              className="appointment-btn"
            >
              Agenda una cita
            </a>
          </div>
        </div>
        <button onClick={nextDoctor} className="carousel-btn next-btn">{">"}</button>
      </div>
    </div>
  );
};

export default DoctorCarousel;
