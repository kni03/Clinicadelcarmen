import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <section className="about-us-container">
      <div className="about-us-wrapper">
        <div className="about-us-content">
          <div className="about-us-text">
            <h1>Healing Starts Here</h1>
            <h2>Welcome to Cliníca del Carmen</h2>
            <p>
              At Cliníca del Carmen, our mission is to provide high-quality healthcare services to all our patients. We are dedicated to offering a comprehensive range of medical services to meet your health needs.
            </p>
            <p>
              Our team of experienced professionals is here to ensure you receive the best possible care in a friendly and compassionate environment. Your journey to better health begins with us.
            </p>
            <a href="#services" className="about-us-button">Learn More</a>
          </div>
          <div className="about-us-image">
            <img src="/Images/clinica.jpg" alt="Clinic" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;