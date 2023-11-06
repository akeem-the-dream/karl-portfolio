import "./Footer.css";
import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { Container, Row, Col } from "react-bootstrap";
import { send } from "emailjs-com";
import "animate.css";

export const Footer = () => {
  const formInitialDetails = {
    fullName: "",
    email: "",
    phone: "",
    message: "",
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");

    await send(
      "service_c4q5zj9",
      "template_h5jyjlw",
      {
        fullName: JSON.stringify(formDetails.fullName),
        email: JSON.stringify(formDetails.email),
        phone: JSON.stringify(formDetails.phone),
        message: JSON.stringify(formDetails.message),
      },
      "8AAQo8ozRSczXBXlu"
    )
      .then((response) => {
        setStatus({ succes: true, message: "Message sent successfully" });
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((err) => {
        setStatus({
          succes: false,
          message: "Something went wrong, please try again later.",
        });
        console.log("FAILED...", err);
      });
    setButtonText("Send");
    setFormDetails(formInitialDetails);
  };

  return (
    <div className="footer-wrapper">
      <div className="footer-header">
        <h3>Contact</h3>
      </div>
      <div className="contact-form">
        <div className="email-contact">
          <form onSubmit={handleSubmit}>
            <div className="contact-wrapper">
              <div className="contCol">
                <div className="contRow">
                  <input
                    required
                    type="text"
                    value={formDetails.fullName}
                    placeholder="Full Name*"
                    onChange={(e) => onFormUpdate("fullName", e.target.value)}
                  />
                </div>
                <div className="contRow">
                  <input
                    required
                    type="email"
                    value={formDetails.email}
                    placeholder="Email Address*"
                    onChange={(e) => onFormUpdate("email", e.target.value)}
                  />
                </div>
                <div className="contRow">
                  <input
                    type="tel"
                    value={formDetails.phone}
                    placeholder="Phone No."
                    onChange={(e) => onFormUpdate("phone", e.target.value)}
                  />
                </div>
                <div className="contRow">
                  <input
                    type="tel"
                    value={formDetails.phone}
                    placeholder="Phone No."
                    onChange={(e) => onFormUpdate("phone", e.target.value)}
                  />
                </div>
              </div>
              <div className="contCol">
                <div className="contRow">
                  <input
                    required
                    type="text"
                    value={formDetails.fullName}
                    placeholder="Full Name*"
                    onChange={(e) => onFormUpdate("fullName", e.target.value)}
                  />
                </div>
                <div className="contRow">
                  <input
                    required
                    type="email"
                    value={formDetails.email}
                    placeholder="Email Address*"
                    onChange={(e) => onFormUpdate("email", e.target.value)}
                  />
                </div>
                <div className="contRow">
                  <input
                    type="tel"
                    value={formDetails.phone}
                    placeholder="Phone No."
                    onChange={(e) => onFormUpdate("phone", e.target.value)}
                  />
                </div>
                <div className="contRow">
                  <input
                    type="tel"
                    value={formDetails.phone}
                    placeholder="Phone No."
                    onChange={(e) => onFormUpdate("phone", e.target.value)}
                  />
                </div>
              </div>
            </div>
            <form className="form-checkbox" required>
              <label> The Event is:*</label>
              <div className="check-opt">
                <input
                  type="checkbox"
                  id="vehicle1"
                  name="vehicle1"
                  value="Bike"
                ></input>
                <label for="vehicle1"> I have a bike</label>
              </div>
              <div className="check-opt">
                <input
                  type="checkbox"
                  id="vehicle2"
                  name="vehicle2"
                  value="Car"
                ></input>
                <label for="vehicle2"> I have a car</label>
              </div>
            </form>
            <div className="contact-text">
              <textarea
                rows="1"
                value={formDetails.message}
                placeholder="Any other notes/questions?"
                onChange={(e) => onFormUpdate("message", e.target.value)}
              ></textarea>
            </div>
            {status.message && (
              <div className="contRow">
                <p className={status.success === false ? "danger" : "success"}>
                  {status.message}
                </p>
              </div>
            )}
            <div className="contact-form-btn">
              <button type="submit">
                {buttonText}
              </button>
            </div>
          </form>
        </div>
        <div className="social-contact">
          <div className="footer-desc">
            <p>Connect with Karl-Yann social media!</p>
          </div>
          <div className="footer-social-wrapper">
            <ul className="footer-social">
              <li>
                <a href="https://www.linkedin.com/in/karl-yann-assah">
                  <FontAwesomeIcon icon={faLinkedin} />
                  <span>Link Me</span>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/kypunch">
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
