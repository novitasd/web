import {
  FaInstagram,
  FaFacebookF,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa";

import { Link } from "react-router-dom";

import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Logo */}

        <div className="footer-brand">

          <h2>TNIS.PE</h2>

          <p>
            Descubre las mejores zapatillas para cada estilo.
            Inspirados en la cultura sneaker y el streetwear.
          </p>

          <div className="footer-social">

            <a href="#">
              <FaInstagram />
            </a>

            <a href="#">
              <FaTiktok />
            </a>

            <a href="#">
              <FaFacebookF />
            </a>

            <a href="#">
              <FaWhatsapp />
            </a>

          </div>

        </div>

        {/* Explorar */}

        <div className="footer-links">

          <h3>Explorar</h3>

          <Link to="/">Inicio</Link>

          <Link to="/catalogo">Catálogo</Link>

          <Link to="/contacto">Contacto</Link>

          <Link to="/catalogo">Modelos 3D</Link>

        </div>

        {/* Ayuda */}

        <div className="footer-links">

          <h3>Ayuda</h3>

          <a href="#">Preguntas frecuentes</a>

          <a href="#">Envíos</a>

          <a href="#">Cambios</a>

          <a href="#">Términos</a>

        </div>

        {/* Contacto */}

        <div className="footer-links">

          <h3>Contacto</h3>

          <span>Lima, Perú</span>

          <span>+51 902 824 286</span>

          <span>Lun - Sáb</span>

          <span>9:00 AM - 7:00 PM</span>

        </div>

      </div>

      <div className="footer-bottom">

        <p>
          © 2026 <strong>TNIS.PE</strong> · Todos los derechos reservados por sandro y chatgpt.
        </p>

      </div>

    </footer>
  );
}

export default Footer;