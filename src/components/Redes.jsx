import { FaFacebook, FaTiktok, FaInstagram } from "react-icons/fa";
import "./Redes.css";

function TopBar() {
  return (
    <div className="topbar">

      {/* Izquierda: redes con iconos */}
      <div className="left">
        <a href="https://instagram.com" target="_blank">
          <FaInstagram />
        </a>

        <a href="https://facebook.com" target="_blank">
          <FaFacebook />
        </a>

        <a href="https://tiktok.com" target="_blank">
          <FaTiktok />
        </a>
      </div>

      {/* Centro: mensaje */}
      <div className="center">
        ELEVA TU ESTILO A OTRO NIVEL 
      </div>

      {/* Derecha: contacto */}
      <div className="right">
        <span>+51 999 999 999</span>
      </div>

    </div>
  );
}

export default TopBar;