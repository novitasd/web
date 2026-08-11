import { Link } from "react-router-dom";
import "./Logo.css";

function Logo() {
  return (
    <Link to="/" className="logo">
      <h2>
        TNIS<span>.pe</span>
      </h2>
    </Link>
  );
}

export default Logo;