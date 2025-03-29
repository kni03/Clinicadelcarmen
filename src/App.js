import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Paginas/home.js";
import Consultas from "./components/Paginas/consultas.js";
import Urgencia from "./components/Paginas/urgencia.js";
import Preguntas from "./components/Paginas/preguntas.js";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/consultas" element={<Consultas />} />
        <Route path="/faq" element={<Preguntas />} />
        <Route path="/urgencia" element={<Urgencia />} />
        <Route path="/whatsapp" element={<Consultas />} />
      </Routes>
    </Router>
  );
}

export default App;