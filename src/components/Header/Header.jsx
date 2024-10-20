/*import React, { useState } from "react";
import teaLogo from "../../assets/tea.png";
import { Link } from "react-router-dom"; // Use Link instead of <a>
import "./style.css";

function Header({ blogName }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="header__container">
        <Link to="/">
          <div className="header__blogName">
            <h2>{blogName}</h2>
            <img
              src={teaLogo}
              alt="Logo"
              className="header__logo"
              style={{ height: "70px" }}
            />
          </div>
        </Link>

        <button className="hamburger" onClick={toggleMenu}>
          ☰
        </button>

        <nav className={menuOpen ? "nav active" : "nav"}>
          {" "}
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/study">Study</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;*/

/*import React, { useState } from "react";
import teaLogo from "../../assets/tea.png";
import { Link } from "react-router-dom"; // Use Link instead of <a>
import "./style.css";

function Header({ blogName }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header__container">
        <Link to="/">
          <div className="header__blogName">
            <h2>{blogName}</h2>
            <img
              src={teaLogo}
              alt="Logo"
              className="header__logo"
              style={{ height: "70px" }}
            />
          </div>
        </Link>

        <button className="hamburger" onClick={toggleMenu}>
          ☰
        </button>

        {menuOpen && (
          <div className="menu-overlay">
            <button className="close-menu" onClick={closeMenu}>
              ✖
            </button>
            <nav className="nav">
              <ul>
                <li>
                  <Link to="/" onClick={closeMenu}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/study" onClick={closeMenu}>
                    Study
                  </Link>
                </li>
                <li>
                  <Link to="/contact" onClick={closeMenu}>
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;*/

import React, { useState } from "react";
import teaLogo from "../../assets/tea.png";
import { Link } from "react-router-dom"; // Use Link instead of <a>
import "./style.css";

function Header({ blogName }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header__container">
        <Link to="/">
          <div className="header__blogName">
            <h2>{blogName}</h2>
            <img
              src={teaLogo}
              alt="Logo"
              className="header__logo"
              style={{ height: "70px" }}
            />
          </div>
        </Link>

        <button className="hamburger" onClick={toggleMenu}>
          ☰
        </button>

        {/* Desktop Menu */}
        <nav className="desktop-nav">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/study">Study</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Overlay */}
        {menuOpen && (
          <div className="menu-overlay">
            <button className="close-menu" onClick={closeMenu}>
              ✖
            </button>
            <nav className="nav">
              <ul>
                <li>
                  <Link to="/" onClick={closeMenu}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/study" onClick={closeMenu}>
                    Study
                  </Link>
                </li>
                <li>
                  <Link to="/contact" onClick={closeMenu}>
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
