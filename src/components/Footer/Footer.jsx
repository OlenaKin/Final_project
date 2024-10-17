import React from "react";
import teaLogo from "../../assets/tea.png";
import { Link } from "react-router-dom";
import "./style.css"; // Import CSS for styling the footer

const Footer = ({ blogName }) => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
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

        <div className="Contact">
          {/* Contact Information */}
          <h4>Contact Us:</h4>
          <p>
            <i className="fas fa-phone"></i> +39 234 567 890
          </p>
          <p>
            <i className="fas fa-envelope"></i> contact@yourcompany.com
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
