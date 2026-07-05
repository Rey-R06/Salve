import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar__texture"></div>

        <Link to="/" className="navbar__logo">
          <svg viewBox="0 0 120 48" className="logoSvg" aria-label="Salve Punk">
            <text
              x="4"
              y="38"
              fontFamily="'Permanent Marker', cursive"
              fontSize="36"
              fill="#CC0000"
              letterSpacing="-1"
            >
              SALVE
            </text>
            <text
              x="6"
              y="38"
              fontFamily="'Permanent Marker', cursive"
              fontSize="36"
              fill="none"
              stroke="#8B0000"
              strokeWidth="0.5"
              letterSpacing="-1"
              opacity="0.4"
            >
              SALVE
            </text>
            {/* Círculo anarquía sobre la A */}
            <circle
              cx="42"
              cy="22"
              r="10"
              fill="none"
              stroke="#CC0000"
              strokeWidth="1.5"
              opacity="0.6"
            />
            <line
              x1="42"
              y1="12"
              x2="42"
              y2="32"
              stroke="#CC0000"
              strokeWidth="1"
              opacity="0.5"
            />
            <line
              x1="32"
              y1="22"
              x2="52"
              y2="22"
              stroke="#CC0000"
              strokeWidth="1"
              opacity="0.5"
            />
          </svg>
          <span className="logoPunk">PUNK</span>
        </Link>

        <ul className="navbar__links">
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/banda">La Banda</Link>
          </li>
          <li>
            <Link to="/musica">Música</Link>
          </li>
          <li>
            <Link to="/contacto">Contacto</Link>
          </li>
        </ul>

        <button className="listenBtn">
          Escuchar Ahora <span>→</span>
        </button>

        <div className="menuIcon" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? "✕" : "≡"}
        </div>
      </nav>

      <div className={`mobileMenu ${menuOpen ? "active" : ""}`}>
        <div className="mobileHeader">
          <Link
            to="/"
            className="navbar__logo"
            onClick={() => setMenuOpen(false)}
          >
            <svg
              viewBox="0 0 120 48"
              className="logoSvg"
              aria-label="Salve Punk"
            >
              <text
                x="4"
                y="38"
                fontFamily="'Permanent Marker', cursive"
                fontSize="36"
                fill="#CC0000"
                letterSpacing="-1"
              >
                SALVE
              </text>
              <circle
                cx="42"
                cy="22"
                r="10"
                fill="none"
                stroke="#CC0000"
                strokeWidth="1.5"
                opacity="0.6"
              />
              <line
                x1="42"
                y1="12"
                x2="42"
                y2="32"
                stroke="#CC0000"
                strokeWidth="1"
                opacity="0.5"
              />
              <line
                x1="32"
                y1="22"
                x2="52"
                y2="22"
                stroke="#CC0000"
                strokeWidth="1"
                opacity="0.5"
              />
            </svg>
            <span className="logoPunk">PUNK</span>
          </Link>
          <span className="close" onClick={() => setMenuOpen(false)}>
            ✕
          </span>
        </div>

        <div className="separator"></div>

        <ul>
          <li>
            <Link to="/" onClick={() => setMenuOpen(false)}>
              Inicio
            </Link>
          </li>
          <li>
            <Link to="/banda" onClick={() => setMenuOpen(false)}>
              La Banda
            </Link>
          </li>
          <li>
            <Link to="/musica" onClick={() => setMenuOpen(false)}>
              Música
            </Link>
          </li>
          <li>
            <Link to="/contacto" onClick={() => setMenuOpen(false)}>
              Contacto
            </Link>
          </li>
        </ul>

        <button className="listenBtn mobile">
          Escuchar Ahora <span>→</span>
        </button>
      </div>

      {menuOpen && (
        <div className="overlay" onClick={() => setMenuOpen(false)} />
      )}
    </>
  );
}

export default Navbar;
