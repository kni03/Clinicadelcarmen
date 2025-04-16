import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header
      className="header"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/Images/header.png)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="logo-container">
        <div className="logo">
          <h1>
            <a href="/">
              <img src={`${process.env.PUBLIC_URL}/Images/logo2.png`} alt="Clinic Logo" className="logo-img" />            
            </a>
          </h1>
        </div>
      </div>
      <div className="nav-container">
        <nav className="nav">
          <div className="nav-item">
            <a href="#Servicios">Servicios</a>
          </div>
          <div className="nav-item">
            <a href="#contactinfo">Contactanos</a>
          </div>
          <div className="nav-item">
            <a href="#faq">Preguntas</a>
          </div>
        </nav>
      </div>
      <div className="agenda-container">
        <div className="header-right">
          <a
            href="https://www.facebook.com/profile.php?id=61567468652893"
            target="_blank" 
            rel="noopener noreferrer"
            className="header-link">Agenda una Cita
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;