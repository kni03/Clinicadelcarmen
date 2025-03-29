import React from 'react';
import Header from './Public/Header';
import HeroCarousel from './Home/Hero';
import AboutUs from './Home/AboutUs';
import Servicios from './Home/Servicios';
import Testimonials from './Home/Testimonials';
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
    minHeight: "100vh", // Ensure the background covers the entire viewport height
    display: "flex",
    flexDirection: "column",
  };

  return (
    <div style={homeStyle}>
      <Header />
      <HeroCarousel />
      <AboutUs />
      <div id="services">
        <Servicios />
      </div>
      <Testimonials />
      <ContactInfo />
      <Footer />
    </div>
  );
};

export default Home;