import React, { useState } from 'react';
import './Header.css';
import { FiChevronDown} from 'react-icons/fi'; // Icon library

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(null);

  const toggleDropdown = (menu) => {
    setIsDropdownOpen(isDropdownOpen === menu ? null : menu);
  };

  return (
    <header
      className="header"
      style={{
        backgroundImage: "url('/images/backgroundH.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="logo-container">
        <div className="logo">
          <h1>
            <a href="/">
              <img src="/images/logo2.png" alt="Clinic Logo" className="logo-img" />
            </a>
          </h1>
        </div>
      </div>
      <div className="nav-container">
        <nav className="nav">
          <div className="nav-item" onClick={() => toggleDropdown('servicios')}>
            Servicios <FiChevronDown />
            {isDropdownOpen === 'servicios' && (
              <ul className="dropdown">
                <li><a href="/consultas">Consultas</a></li>
                <li><a href="/urgencia">Urgencia</a></li>
              </ul>
            )}
          </div>
          <div className="nav-item" onClick={() => toggleDropdown('contactanos')}>
            Contactanos <FiChevronDown />
            {isDropdownOpen === 'contactanos' && (
              <ul className="dropdown">
                <li>
                  <a 
                    href="https://www.facebook.com/profile.php?id=61567468652893" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="#whatsapp" target="_blank" rel="noopener noreferrer">
                    Whatsapp
                  </a>
                </li>
              </ul>
            )}
          </div>
          <div className="nav-item" onClick={() => toggleDropdown('otros')}>
            Otros <FiChevronDown />
            {isDropdownOpen === 'otros' && (
              <ul className="dropdown">
                <li><a href="/faq">Preguntas</a></li>
              </ul>
            )}
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