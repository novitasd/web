import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Catalogo from "./pages/Catalogo";
import Contacto from "./pages/Contacto";
import ProductPage from "./pages/ProductPage";

import Navbar from "./components/Navbar";
import Redes from "./components/Redes";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>

      <Redes />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/producto/1" element={<ProductPage />} />
      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;