import "./Footer.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";
import "animate.css";

export const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-header">
        <h3>Contact</h3>
      </div>
      <div className="contact-form">
        <div className="social-contact">
          <div className="footer-desc">
            <p>Connect with Karl-Yann social media!</p>
          </div>
          <div className="footer-social-wrapper">
            <ul className="footer-social">
              <li>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/karl-yann-assah"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                  <span>Link Me</span>
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.instagram.com/kypunch"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                  <span>Follow Me</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
