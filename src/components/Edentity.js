import "./Edentity.css";
import img from "../assets/edentity-logo.png";

export const Edentity = () => {
  return (
    <div className="edentity">
      <div className="edentity-header">
        <h1>Edentity</h1>
        <h3>Enhancing Your Electronic Identity </h3>
      </div>
      <div className="edentity-body">
        <div className="edentity-text">
          <p>
            Edentity is a dynamic company dedicated to assisting young
            professionals in refining their personal brand through a fusion of
            fashion, digital strategy, and academic success services. Our
            comprehensive approach encompasses wardrobe renewal to enhance the
            visual appeal of our clients' personal style, digital strategy to
            bolster their online branding presence across platforms like
            Instagram and LinkedIn, and academic support to help them excel in
            their educational pursuits.
          </p>
          <p>
            Our core mission is to empower young professionals, particularly
            minorities, in projecting an authentic and confident personal brand
            that aligns with their unique identity, supports their professional
            goals, and helps them thrive academically. We firmly believe that by
            offering an integrated service that combines fashion, digital
            strategy, and academic support, we can equip our clients with the
            tools they need to unlock their full potential in all aspects of
            their lives.
          </p>
          <p>
            Recognizing an unmet need in the market for a service tailored to
            the specific requirements of this demographic, we are poised to
            capture a substantial share of this underserved market.Edentity
            prides itself on delivering outstanding service and tangible
            outcomes for our clients. Our team is composed of seasoned fashion
            stylists, digital marketing experts, and academic mentors, all
            dedicated to the success of our clients. We are committed to
            providing a personalized and tailored experience that caters to the
            unique needs and objectives of each individual.
          </p>
          <p>
            Edentity stands at the forefront of transforming how young
            professionals, especially minorities, approach personal branding,
            career advancement, and academic success. Our distinctive blend of
            fashion, digital strategy, and academic support services positions
            us as a catalyst for our clients' holistic growth and success. We
            eagerly anticipate the opportunities that lie ahead and look forward
            to partnering with you to achieve your personal branding, career,
            and academic goals.
          </p>
        </div>
        <div className="edentity-img">
          <img alt="edentity Logo" src={img}></img>
        </div>
      </div>
      <div className="edentity-footer">
        <div className="footer-btn">
          <a href="https://edentityglobal.com" target="_blank" rel="noreferrer">
            Visit Webpage
          </a>
          <a
            href="https://instagram.com/edentitygroup"
            target="_blank"
            rel="noreferrer"
          >
            Visit Instagram
          </a>
        </div>
        <h2>ARE YOU READY TO ELEVATE YOUR PERSONAL BRAND?</h2>
      </div>
    </div>
  );
};
