import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Catalogo from "./pages/Catalogo";
import Contacto from "./pages/Contacto";
import ProductPage from "./pages/ProductPage";

import Navbar from "./components/Navbar";
import Redes from "./components/Redes";
import Checkout from "./pages/Checkout";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>

      <Redes />
      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/catalogo" element={<Catalogo />} />
         
         <Route
    path="/checkout"
    element={<Checkout />}
/>

        {/* NUEVA RUTA PARA FILTRAR POR CATEGORÍA */}
        <Route
          path="/catalogo/:categoria"
          element={<Catalogo />}
        />

        <Route path="/contacto" element={<Contacto />} />

        {/* Producto */}
        <Route
            path="/producto/:slug"
            element={<ProductPage />}
        />

      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;