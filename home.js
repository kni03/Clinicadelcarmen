import React from 'react';
import Header from './Public/Header';
import HeroCarousel from './Home/Hero';
import AboutUs from './Home/AboutUs';
import Servicios from './Home/Servicios';
import Preguntas from './Home/Preguntas';
import ContactInfo from './Home/ContactInfo';
import Footer from './Public/Footer';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  const homeStyle = {
    backgroundImage: "url('/Images/backgroundH.png')",
    backgroundSize: "auto",
    backgroundPosition: "center",
    backgroundRepeat: "repeat",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
  };

  return (
    <div style={homeStyle}>
      <Header />
      <HeroCarousel />
      <div id="About">
        <AboutUs />
      </div>
      <div id="Servicios">
        <Servicios />
      </div>
      <div id="faq">
        <Preguntas />
      </div>
      <div id="Contactanos">
        <ContactInfo />
      </div>
      <Footer />
    </div>
  );
};

export default Home;