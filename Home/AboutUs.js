import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <section className="about-us-container">
      <div className="about-us-wrapper">
        <div className="about-us-content">
          <div className="about-us-text">
            <h1>La Sanación Comienza Aquí</h1>
            <h2>Bienvenidos a Cliníca del Carmen</h2>
            <p>
              En Cliníca del Carmen, nuestra misión es brindar servicios de salud de alta calidad a todos nuestros pacientes. Estamos dedicados a ofrecer una gama completa de servicios médicos para satisfacer sus necesidades de salud.
            </p>
            <p>
              Nuestro equipo de profesionales experimentados está aquí para asegurarse de que reciba la mejor atención posible en un ambiente amigable y compasivo. Su viaje hacia una mejor salud comienza con nosotros.
            </p>
            <a href="#services" className="about-us-button">Conoce Más</a>
          </div>
          <div className="about-us-image">
            <img src="/Images/clinica.jpg" alt="Clínica" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;