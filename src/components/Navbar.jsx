import { Link, NavLink } from "react-router-dom";
import { FiSearch, FiShoppingBag, FiUser } from "react-icons/fi";
import logo from "../assets/logo.jpg";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">

      <Link to="/" className="logo">
        <img src={logo} alt="PK Shoes" />
      </Link>

      <nav className="nav-links">

        <NavLink to="/">Inicio</NavLink>

        <NavLink to="/catalogo">Catálogo</NavLink>

        <NavLink to="/contacto">Contacto</NavLink>

      </nav>

      <div className="nav-icons">

        <button>
          <FiSearch />
        </button>

        <button>
          <FiUser />
        </button>

        <button>
          <FiShoppingBag />
        </button>

      </div>

    </header>
  );
}

export default Navbar;