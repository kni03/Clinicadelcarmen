import React, { useState } from 'react';
import Slider from 'react-slick';
import './Preguntas.css';
import testimonials from './TestimonialsData';
import faqs from './FAQData';

const Preguntas = () => {
  const [activeFAQ, setActiveFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    autoplay: true,
    autoplaySpeed: 3000,
    adaptiveHeight: true,
    centerMode: true,
    centerPadding: '0',
  };

  return (
    <section className="preguntas-container">
      <div className="faq-container">
        <h2 className="section-title">Preguntas Frecuentes</h2>
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              {faq.question}
              <span>{activeFAQ === index ? '-' : '+'}</span>
            </div>
            {activeFAQ === index && (
              <div className="faq-answer">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="testimonials-container">
        <h2 className="section-title">Testimonios</h2>
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-item">
              <p>"{testimonial.text}"</p>
              <p><strong>- {testimonial.author}</strong></p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Preguntas;