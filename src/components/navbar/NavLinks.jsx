import { NavLink } from "react-router-dom";
import { FiX } from "react-icons/fi";

import "./NavLinks.css";

function NavLinks({ menuOpen, setMenuOpen }) {
  return (
    <nav
      className={`nav-links ${
        menuOpen ? "show" : ""
      }`}
    >
      <button
        type="button"
        className="close-menu"
        onClick={() => setMenuOpen(false)}
        aria-label="Cerrar menú"
      >
        <FiX />
      </button>

      <NavLink
        to="/"
        onClick={() => setMenuOpen(false)}
      >
        Inicio
      </NavLink>

      <NavLink
        to="/catalogo"
        onClick={() => setMenuOpen(false)}
      >
        Catálogo
      </NavLink>

      <NavLink
        to="/contacto"
        onClick={() => setMenuOpen(false)}
      >
        Contacto
      </NavLink>
    </nav>
  );
}

export default NavLinks;