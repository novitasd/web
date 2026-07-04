import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa";

import "./Redes.css";

function TopBar() {
  return (
    <div className="topbar">

      <div className="topbar-social">

        <a href="https://instagram.com" target="_blank" rel="noreferrer">
          <FaInstagram />
        </a>

        <a href="https://facebook.com" target="_blank" rel="noreferrer">
          <FaFacebookF />
        </a>

        <a href="https://tiktok.com" target="_blank" rel="noreferrer">
          <FaTiktok />
        </a>

      </div>

      <div className="topbar-message">
        Envíos a todo el Perú · Calidad PK 
      </div>

      <div className="topbar-contact">

        <FaWhatsapp />

        <span>+51 902 824 286</span>

      </div>

    </div>
  );
}

export default TopBar;