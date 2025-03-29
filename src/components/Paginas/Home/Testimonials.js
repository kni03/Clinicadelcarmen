import React from 'react';
import Slider from 'react-slick';
import './Testimonials.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section className="testimonials">
      <Slider {...settings} className="testimonial-list">
        <div className="testimonial-item">
          <p>"The staff at Cliníca del Carmen are amazing! They took great care of me."</p>
          <h4>- John Doe</h4>
        </div>
        <div className="testimonial-item">
          <p>"Excellent service and very professional."</p>
          <h4>- Jane Smith</h4>
        </div>
        <div className="testimonial-item">
          <p>"I had a wonderful experience at Cliníca del Carmen. Highly recommend!"</p>
          <h4>- Maria Garcia</h4>
        </div>
      </Slider>
    </section>
  );
};

export default Testimonials;