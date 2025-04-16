import React from 'react';
import './ContactInfo.css';

const ContactInfo = () => {
  return (
    <section id="contactinfo" className="contact-info">
      <div className="contact-container">
        <div className="contact-text">
          <h2>Contactanos</h2>
          <p>Address: Av Juliàn de los Reyes 42, México, 79500 Villa de Reyes, S.L.P.</p>
          <p>Phone: 444 339 0573</p>
          <p>Email: info@clinicadelcarmen.com</p>
        </div>
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7408.499384645329!2d-100.94096487507983!3d21.80928143408163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842ac10036c0ef7d%3A0x1bc721e1ef5e2d1b!2sClinica%20Del%20Carmen!5e0!3m2!1sen!2smx!4v1743268844119!5m2!1sen!2smx"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;