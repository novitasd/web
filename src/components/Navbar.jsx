import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";
import {
  FiSearch,
  FiShoppingBag,
  FiUser,
  FiX,
  FiMenu
} from "react-icons/fi";
import "./Navbar.css";

function Navbar() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const { cart } = useCart();

const totalItems = cart.reduce(
  (total, item) => total + item.quantity,
  0
);
  return (
    <header className="navbar">
      <button
  className="menu-btn"
  onClick={() => setMenuOpen(true)}
>
  <FiMenu />
</button>

      <Link to="/" className="logo">
        <h2>TNIS.PE</h2>
      </Link>

     <nav className={`nav-links ${menuOpen ? "show" : ""}`}>

    <button
        className="close-menu"
        onClick={() => setMenuOpen(false)}
    >
        <FiX />
    </button>

    <NavLink to="/" onClick={() => setMenuOpen(false)}>
        Inicio
    </NavLink>

    <NavLink to="/catalogo" onClick={() => setMenuOpen(false)}>
        Catálogo
    </NavLink>

    <NavLink to="/contacto" onClick={() => setMenuOpen(false)}>
        Contacto
    </NavLink>

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

         <Link to="/checkout" className="cart-button">

  <FiShoppingBag />

  {totalItems > 0 && (
    <span className="cart-count">
      {totalItems}
    </span>
  )}

</Link>

      </div>

    </header>
  );
}

export default Navbar;