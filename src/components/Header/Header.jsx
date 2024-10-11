import React, { useState } from "react";
import teaLogo from "../../assets/tea.png";
import "./style.css";

function Header({ blogName, text }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      {/*<div className="header__container">
        <div className="header__blogName">
          <h1>{blogName}</h1>
        </div>*/}
      <div className="header__container">
        {/* Blog Name and Logo */}
        <div className="header__blogName">
          {/* Render the imported image */}
          <h2>{blogName}</h2>
          <img
            src={teaLogo}
            alt="Logo"
            className="header__logo"
            style={{ height: "80px" }}
          />
        </div>

        {/* Hamburger menu button for mobile */}
        <button className="hamburger" onClick={toggleMenu}>
          ☰
        </button>

        {/* Conditionally apply 'active' class based on menuOpen state */}
        <nav className={menuOpen ? "nav active" : "nav"}>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/about">Study</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
