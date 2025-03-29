import React from 'react';
import Header from './Public/Header';
import Carousel from './Consultas/Consultas';
import Footer from './Public/Footer';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Carousel />
      <Footer />
    </div>
  );
}

export default App;

