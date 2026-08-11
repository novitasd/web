import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Catalogo from "./pages/Catalogo";
import Contacto from "./pages/Contacto";
import ProductPage from "./pages/ProductPage";

import Navbar from "./components/navbar/Navbar";
import Redes from "./components/Redes";
import Checkout from "./pages/Checkout";
import Footer from "./components/Footer";

import ScrollToTop from "./components/ScrollToTop";

import { Toaster } from "react-hot-toast";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
        <Toaster
    position="top-center"
    toastOptions={{
      duration: 2500,
      style: {
        borderRadius: "14px",
        background: "#111",
        color: "#fff",
        padding: "14px 18px",
      },
    }}
  />
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