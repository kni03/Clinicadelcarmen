import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer
      className="footer"
      style={{
        backgroundImage: "url('/Images/backgroundH.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <p>&copy; 2025 Cliníca del Carmen. Reservados todos los derechos.</p>
      <p>
        Síguenos en <a href="https://facebook.com">Facebook</a> y{" "}
        <a href="https://instagram.com">Instagram</a>
      </p>
    </footer>
  );
}

export default Footer;
