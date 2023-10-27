import "./Footer.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-header">
        <h3>Contact</h3>
      </div>
      <div className="footer-desc">
        <p>Connect with Karl-Yann social media!</p>
      </div>
      <div className="footer-social-wrapper">
        <ul className="footer-social">
          <li>
            <FontAwesomeIcon icon={faEnvelope} />
            <span>Mail Me</span>
          </li>

          <li>
            <FontAwesomeIcon icon={faLinkedin} />
            <span>Link Me</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faInstagram} />
            <span>Follow Me</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
