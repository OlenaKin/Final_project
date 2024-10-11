import React from "react";
import teaLogo from "../../assets/tea.png";
import "./style.css"; // Import CSS for styling the footer

const Footer = ({ blogName }) => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Blog Name and Logo */}
        <div className="footer__blogName">
          <h2>{blogName}</h2>
          <img src={teaLogo} alt="Logo" className="footer__logo" />
        </div>

        {/* Navigation Links */}
        <div className="footer-section__links">
          <ul>
            <li>
              <a href="/home">Home</a>
            </li>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/services">Services</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>

        <div className="Contact">
          {/* Contact Information */}
          <h4>Contact Us</h4>
          <p>
            <i className="fas fa-phone"></i> +1 234 567 890
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
