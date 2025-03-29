import React from 'react';
import Header from './Public/Header';
import Catalog from './Farmacia/catalog';
import Footer from './Public/Footer';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Catalog />
      <Footer />
    </div>
  );
}

export default App;

