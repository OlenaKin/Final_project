import React, { useState } from "react";
import "./style.css";

function Header({ blogName }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__blogName">
          <h1>{blogName}</h1>
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
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
