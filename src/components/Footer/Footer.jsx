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

        <div className="Contact_box">
          {/* Contact Information */}
          <h6>Contact Us:</h6>
          <p>
            +39 234 567 890
            <span>contact@yourcompany.com</span>{" "}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
