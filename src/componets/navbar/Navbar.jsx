import { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <h2>SALVE PUNK</h2>
      </div>

      <div
        className={`hamburger ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/Banda">La Banda</Link></li>
        <li>
          <button className="listen-btn">
            Escuchar Ahora
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;