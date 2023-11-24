import React, { useState } from "react";
import "./Speaking.css";
import Pdf from "../assets/Edentity-Speaking-Sheet-Rate-Final.pdf";
import { send } from "emailjs-com";
import "animate.css";

export const Speaking = () => {
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
  const colabText = "//Let's collaborate!";
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
    <div className="speaking">
      <div className="speaking-header">
        <h1>Speaking</h1>
      </div>
      <div className="speaking-info-row-wrapper">
        <div className="speaking-info-row">
          <div className="speaking-news-block">
            <div className="speaking-news-vid">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/-PQr8T9-sTU?si=EYlA15c0SyXteJSN"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            <div className="speaking-news-desc">
              <div className="speaking-news-desc-sub">
                <p>News</p>
                <p>CP24 News - Toronto's #1 Breakfast TV Show</p>
              </div>
              <p>
                Karl-Yann explains his debut in modeling, how he got discovered
                and how he gained the confidence to launch his career as
                international fashion model.
              </p>
            </div>
          </div>
          <div className="speaking-news-block">
            <div className="speaking-news-vid">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/kksOWG3RIK0?si=9UuKIhG94rvMFiGO"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            <div className="speaking-news-desc">
              <div className="speaking-news-desc-sub">
                <p>Podcast</p>
                <p>'Around A Glass' - Episode #9</p>
              </div>
              <p>
                Filled with value and intelligence, the ninth episode was shared
                with{" "}
                <a
                  href="https://www.instagram.com/kypunch"
                  target="_blank"
                  rel="noreferrer"
                >
                  @kypunch
                </a>{" "}
                around the modeling industry, personal branding and
                self-awareness. Thrilled to share a rich discussion around a
                glass, Karl-Yann reminds us how important it is to push
                ourselves in order to attract opportunities. Having an valuable
                presence is vital depends on the career path because credibility
                comes with that as well. Taking risk and being willing to be
                uncomfortable allow us to grow. To dedicate his life to become
                better and leave a legacy are his goals. With that, I leave you
                with one of his quote “complacency kills dreams, complacency
                keeps you at the same level & complacency gives you regret. It`s
                up to you to do the work for what matters the most”. Enjoy the
                show! and don`t forget, Around A Glass always win.
              </p>
            </div>
          </div>
          <div className="speaking-news-block">
            <div className="speaking-news-vid">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/ClJ_2F7WsG8?si=GGqm79Lw_M_YY_jk"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            <div className="speaking-news-desc">
              <div className="speaking-news-desc-sub">
                <p>Keynote Speech</p>
                <p>Lifelong Learning Institute</p>
              </div>
              <p>
                Nunc egestas leo lorem, vel condimentum turpis mattis non.
                Vivamus ornare fermentum lacinia. Proin in nibh ac nunc commodo
                vulputate. Ut eget erat arcu. Ut in fermentum velit.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="speaking-quote-row">
        <p>
          ENSURE YOUR EVENT LINGERS IN HEARTS AND MINDS WITH A SPEAKER WHO
          COMMANDS ATTENTION AND LEAVES A MARK
        </p>
      </div>
      <div className="speaking-footer-wrapper">
        <p>&#127775; Elevate Your Event with Karl-Yann Assah &#127775;</p>
        <p>
          Get ready to transform your event into an unforgettable experience.
          Meet Karl-Yann Assah, a dynamic speaker with a unique blend of
          insights and charisma.
        </p>
        <br />
        <p>
          &#128293; Passionate Advocate: Karl-Yann is a leading advocate for
          educational empowerment, inspiring change on every stage he graces.
        </p>
        <p>
          &#127897; Engaging Speaker: With a captivating presence, he
          effortlessly connects with diverse audiences, leaving a profound
          impact.
        </p>
        <p>
          &#127758; Diverse Background: From being a varsity athlete to an
          international fashion model, navigating the challenges of being a
          Black student in STEM, receiving the U.S President`s Volunteer Service
          Award and working in the fascinating realm of Tech (Artificial
          Intelligence), he has amassed a wealth of insights, perspectives and
          stories.
        </p>
        <p>
          &#128640; Empowerment: As an international student, Karl-Yann
          understands the challenges and triumphs of diverse journeys, making
          him a powerful voice for empowerment.
        </p>
        <br />
        <p>
          Invite Karl-Yann Assah to your event, and watch as inspiration
          unfolds. Book now for an unforgettable experience!
        </p>
        <br />
        <br />
        <div className="speaking-footer-btn">
          <a href={Pdf} target="_blank" rel="noreferrer">
            Download Karl-Yann's MediaKit
          </a>
        </div>
        <div className="email-contact">
          <label>{colabText}</label>
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
                <div className="contRow-date">
                  Date of the event?*
                  <input
                    required
                    type="date"
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
                    placeholder="Phone(###-###-####)*"
                    onChange={(e) => onFormUpdate("phone", e.target.value)}
                  />
                </div>
                <div className="contRow">
                  <input
                    required
                    type="text"
                    value={formDetails.crowdSize}
                    placeholder="The audience size?*"
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
                placeholder="notes/questions?"
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
      </div>
    </div>
  );
};
