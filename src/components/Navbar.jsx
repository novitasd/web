import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  FiSearch,
  FiShoppingBag,
  FiUser,
  FiX,
} from "react-icons/fi";
import "./Navbar.css";

function Navbar() {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="navbar">

      <Link to="/" className="logo">
        <h2>TNIS.PE</h2>
      </Link>

      <nav className="nav-links">

        <NavLink to="/">Inicio</NavLink>

        <NavLink to="/catalogo">Catálogo</NavLink>

        <NavLink to="/contacto">Contacto</NavLink>

      </nav>

      <div className="nav-icons">

        <div
          className={`search-box ${
            searchOpen ? "active" : ""
          }`}
        >

          <FiSearch className="search-icon" />

          <input
            type="text"
            className="search-input"
            placeholder="Encuentra estilos y marcas"
            onFocus={() => setSearchOpen(true)}
          />

          {searchOpen && (
            <button
              type="button"
              className="search-close"
              onClick={() => setSearchOpen(false)}
            >
              <FiX />
            </button>
          )}

        </div>

        <button type="button">
          <FiUser />
        </button>

        <button type="button">
          <FiShoppingBag />
        </button>

      </div>

    </header>
  );
}

export default Navbar;