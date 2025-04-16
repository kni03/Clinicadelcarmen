import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer
      className="footer"
      style={{
        backgroundImage: "url('/Images/footerbg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <p>&copy; 2025 Cliníca del Carmen. Reservados todos los derechos.</p>
      <p>
        Síguenos en <a 
            href="https://www.facebook.com/profile.php?id=61567468652893"
            target="_blank" 
            rel="noopener noreferrer"
            >Facebook</a>
      </p>
    </footer>
  );
}

export default Footer;
