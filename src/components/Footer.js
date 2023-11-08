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
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    date: new Date() | null,
    crowdSize: "",
    location: "",
    topic: "",
    message: "",
    virtual: false,
    inPerson: false,
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
      "template_5bcuasf",
      {
        firstName: JSON.stringify(formDetails.firstName),
        lastName: JSON.stringify(formDetails.lastName),
        email: JSON.stringify(formDetails.email),
        phone: JSON.stringify(formDetails.phone),
        date: JSON.stringify(formDetails.date),
        crowdSize: JSON.stringify(formDetails.crowdSize),
        location: JSON.stringify(formDetails.location),
        topic: JSON.stringify(formDetails.topic),
        message: JSON.stringify(formDetails.message),
        virtual: JSON.stringify(formDetails.virtual),
        inPerson: JSON.stringify(formDetails.inPerson),
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
          <label>//Let's collaborate!</label>
          <form onSubmit={handleSubmit}>
            <div className="contact-wrapper">
              <div className="contCol">
                <div className="contRow">
                  <input
                    required
                    type="text"
                    value={formDetails.firstName}
                    placeholder="First Name*"
                    onChange={(e) => onFormUpdate("firstName", e.target.value)}
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
                    required
                    type="date"
                    value={formDetails.date}
                    placeholder="What is the date of the event?*"
                    onChange={(e) => onFormUpdate("date", e.target.value)}
                  />
                </div>

                <div className="contRow">
                  <input
                    required
                    type="text"
                    value={formDetails.location}
                    placeholder="location of the Event?*"
                    onChange={(e) => onFormUpdate("location", e.target.value)}
                  />
                </div>
              </div>
              <div className="contCol">
                <div className="contRow">
                  <input
                    required
                    type="text"
                    value={formDetails.lastName}
                    placeholder="Last Name*"
                    onChange={(e) => onFormUpdate("lastName", e.target.value)}
                  />
                </div>
                <div className="contRow">
                  <input
                    required
                    type="tel"
                    value={formDetails.phone}
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    placeholder="Phone number(999-999-9999)*"
                    onChange={(e) => onFormUpdate("phone", e.target.value)}
                  />
                </div>
                <div className="contRow">
                  <input
                    required
                    type="text"
                    value={formDetails.crowdSize}
                    placeholder="What is the audience size?*"
                    onChange={(e) => onFormUpdate("crowdSize", e.target.value)}
                  />
                </div>
                <div className="contRow">
                  <input
                    required
                    type="text"
                    value={formDetails.topic}
                    placeholder="Topic*"
                    onChange={(e) => onFormUpdate("topic", e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="form-checkbox">
              <label> The event is:</label>
              <div className="check-opt">
                <input
                  type="checkbox"
                  id="virtual"
                  name="virtual"
                  value={formDetails.virtual}
                  onChange={(e) => onFormUpdate("virtual", e.target.checked)}
                ></input>
                <label> Virtual</label>
              </div>
              <div className="check-opt">
                <input
                  type="checkbox"
                  id="inPerson"
                  name="inPerson"
                  value={formDetails.inPerson}
                  onChange={(e) => onFormUpdate("inPerson", e.target.checked)}
                ></input>
                <label> In Person</label>
              </div>
            </div>
            <div className="contact-text">
              <textarea
                rows="1"
                value={formDetails.message}
                placeholder="Any other notes/questions?"
                onChange={(e) => onFormUpdate("message", e.target.value)}
              ></textarea>
            </div>
            {status.message && (
              <div>
                <p className={status.success === false ? "danger" : "success"}>
                  {status.message}
                </p>
              </div>
            )}
            <div className="contact-form-btn">
              <button type="submit">{buttonText}</button>
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
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/karl-yann-assah"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                  <span>Link Me</span>
                </a>
              </li>
              <li>
                <a target="_blank" href="https://www.instagram.com/kypunch">
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
