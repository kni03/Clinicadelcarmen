import React from 'react';
import Header from './Public/Header';
import Preguntas from './Otros/Preguntas';
import Footer from './Public/Footer';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Preguntas />
      <Footer />
    </div>
  );
}

export default App;

