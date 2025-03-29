import React, { useRef } from "react";
import Slider from "react-slick";
import './Hero.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const slides = [
  {
    id: 1,
    image: "/Images/heroA.png",
    title: "Cuidado compasivo",
    description: "Poniendo a las pacientes primero todos los días.",
    link: "/#farmacia",
  },
  {
    id: 2,
    image: "/Images/heroB.png",
    title: "Servicios de alta calidad",
    description: "Ofreciéndote los mejores servicios de salud.",
    link: "/#services", // Link to "Nuestros Servicios" part of the homepage
  },
  {
    id: 3,
    image: "/Images/heroC.png",
    title: "Expertos de confianza",
    description: "Profesionales con experiencia dedicados a su salud.",
    link: "/#",
  },
];

const isValidUrl = (url) => {
  try {
    const parsedUrl = new URL(url, window.location.origin);
    return parsedUrl.origin === window.location.origin && parsedUrl.pathname.startsWith('/');
  } catch (err) {
    return false;
  }
};

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
    <section className="carousel-container">
      <Slider ref={sliderRef} {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className="carousel-slide">
            {isValidUrl(slide.link) ? (
              <a href={slide.link} rel="noopener noreferrer">
                <img src={slide.image} alt={slide.title} className="carousel-image" />
                <div className="overlay">
                  <h1 className="hero-title">{slide.title}</h1>
                  <p className="hero-description">{slide.description}</p>
                  <a href={slide.link} className="hero-button" rel="noopener noreferrer">
                    Ver más
                  </a>
                </div>
              </a>
            ) : (
              <div>
                <img src={slide.image} alt={slide.title} className="carousel-image" />
                <div className="overlay">
                  <h1 className="hero-title">{slide.title}</h1>
                  <p className="hero-description">{slide.description}</p>
                  <span className="hero-button disabled">
                    Ver más
                  </span>
                </div>
              </div>
            )}
          </div>
        ))}
      </Slider>

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