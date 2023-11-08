import "./About.css";
import img from "../assets/karl-2.jpg";

export const About = () => {
  const text = "// Key Characteristics";
  return (
    <div className="about">
      <div className="about-header">
        <h1>Karl-Yann Assah</h1>
      </div>
      <div className="about-desc">
        <p>
          <span>
            Meet Karl Yann Assah, a dynamic and accomplished young professional
            whose talents span a multitude of industries. Karl has left an
            indelible mark in fields as diverse as Management Consulting,
            Technology, Finance, Fashion, Non-profit, and Startups.
          </span>
          <br /> <br />
          <span>
            Currently building Edentity - a full fledged image consulting
            company - Karl is dedicated to providing cutting-edge solutions to
            business owners and young professionals alike, helping them overcome
            challenges in an ever-evolving economy and increasingly competitve
            landscape.
          </span>
          <br /> <br />
          <span>
            But Karl's journey extends far beyond the corporate world. He's not
            only graced the international fashion stage, working with
            prestigious brands like Givenchy, Prada, Vogue, and Canada Goose,
            but he's also proven his mettle as a high-performance athlete,
            proudly representing the University of Toronto in collegiate sports.
          </span>
          <br />
          <span>
            Karl is a true global citizen, having traveled to over 40 countries
            and lived across Africa, Europe, and the Americas.
          </span>
          <br />
          <span>
            His academic achievements are equally impressive, holding a B.A. in
            Digital Enterprise Management and currently pursuing a Masters in
            Information Systems & Design.
          </span>
          <br /> <br />
          <span>
            Karl's commitment to community service shines through his
            recognition as a recipient of the U.S President's Volunteer Service
            Award and a University of Toronto Scholarship Recipient. His
            extensive leadership experience includes founding Diversity Business
            League, Books For Africa, the largest bilingual book drive in the
            Washington D.C. Area, and spearheading initiatives for the Black
            Access to Educational Excellence Program at UTM.
          </span>
          <br /> <br />
          <span>
            In addition to his professional and academic pursuits, Karl is on
            the verge of achieving a black belt in Taekwondo, a testament to his
            dedication and discipline. With a passion for innovation, a love for
            diverse cultures, and a track record of excellence, Karl Yann Assah
            is a remarkable individual whose future promises even greater
            accomplishments.
          </span>
        </p>
        <div className="about-img">
          <img alt="image of Karl" src={img}></img>
        </div>
      </div>
      <div className="about-char">
        <h2>{text}</h2>
        <ul>
          <li>Problem-Solver</li>
          <li>Adaptable</li>
          <li>Innovative</li>
          <li>Data Driven</li>
          <li>leadership</li>
        </ul>
      </div>
    </div>
  );
};
