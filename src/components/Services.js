//Services.js
import React from 'react';

function Services() {
  return (
    <section className="services" id="services">
      <h2>Our Services</h2>
      <div className="service-list">
        <div className="service-item">
          <h3>General Checkups</h3>
          <p>Routine checkups to ensure your health is in top condition.</p>
        </div>
        <div className="service-item">
          <h3>Pediatrics</h3>
          <p>Expert care for your children's health needs.</p>
        </div>
        <div className="service-item">
          <h3>Dental Care</h3>
          <p>Comprehensive dental services for all ages.</p>
        </div>
      </div>
    </section>
  );
}

export default Services;
