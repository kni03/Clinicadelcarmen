import React, { useRef } from "react";
import Slider from "react-slick";
import './Horario.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const slides = [
  {
    id: 1,
    image: "/Images/heroA.png", // Use string path
    title: "Cuidado compasivo",
    description: "Poniendo a las pacientes primero todos los días.",
    link: "/farmacia",
  },
  {
    id: 2,
    image: "/Images/heroB.png",
    title: "Servicios de alta calidad",
    description: "Ofreciéndote los mejores servicios de salud.",
    link: "/consultas",
  },
  {
    id: 3,
    image: "/Images/heroC.png",
    title: "Expertos de confianza",
    description: "Profesionales con experiencia dedicados a su salud.",
    link: "/",
  },
];

const HeroCarousel = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
  };

  return (
    <section
      className="carousel-container"
      style={{
        backgroundImage: "url('/Images/backgroundH.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Slider ref={sliderRef} {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className="carousel-slide">
          <a href={slide.link}>
            <img src={slide.image} alt={slide.title} className="carousel-image" />
            <div className="overlay">
              <h1 className="hero-title">{slide.title}</h1>
              <p className="hero-description">{slide.description}</p>
              <a href="#ver-mas" className="hero-button">
                Ver más
              </a>
            </div>
            </a>
          </div>
        ))}
      </Slider>

      {/* Custom Navigation Buttons */}
      <button className="prev-button" onClick={() => sliderRef.current.slickPrev()}>
        <FaChevronLeft />
      </button>
      <button className="next-button" onClick={() => sliderRef.current.slickNext()}>
        <FaChevronRight />
      </button>
    </section>
  );
};

export default HeroCarousel;
