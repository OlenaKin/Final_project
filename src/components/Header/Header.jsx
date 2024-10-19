import React, { useState } from "react";
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
        {/* Blog Name and Logo */}
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

        {/* Hamburger menu button for mobile */}
        <button className="hamburger" onClick={toggleMenu}>
          ☰
        </button>

        {/* Conditionally apply 'active' class based on menuOpen state */}
        <nav className={menuOpen ? "nav active" : "nav"}>
          <ul>
            <li>
              <Link to="/">Home</Link> {/* Use Link instead of <a href> */}
            </li>

            <li>
              <Link to="/study">Study</Link> {/* Corrected the path */}
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

export default Header;
