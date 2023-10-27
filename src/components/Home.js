import React from "react";
import "./Home.css";

export const Home = () => {
  return (
    <div className="home-wrapper">
      <div className="banner">
        <div>
          <span>
            TECHNOLOGY PROFESSIONAL, ENTREPRENEUR, PR SPECIALIST, INTERNATIONAL
            MODEL, SCHOLAR
          </span>
          <div className="banner-video">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/ClJ_2F7WsG8?si=GGqm79Lw_M_YY_jk"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
      <div className="quote-wrapper">
        <p>
          <span>[GIVE YOURSELF A FIGHTING CHANCE],</span>
          <span>WHAT IF IT TURNS OUT BETTER THAN YOU EVER IMAGINED?</span>
          <span className="quote-name">KARL-YANN ASSAH</span>
        </p>
      </div>
      <div className="project-row-wrapper">
        <div>
          <label>KARL-YANN ASSAH</label>
          <p>Professional Experience</p>
        </div>
        <div>
          <label>EDENTITY</label>
          <p>Elevating Personal Branding</p>
        </div>
        <div>
          <label>IMPACT</label>
          <p>Action Speaks Louder</p>
        </div>
      </div>
      <div className="info-row-wrapper">
        <label>READ THIS</label>
        <div className="info-row">
          <div className="news-block">
            <div className="news-vid">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/-PQr8T9-sTU?si=EYlA15c0SyXteJSN"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
            <div className="news-desc">
              <p>
                Karl-Yann explains his debut in modeling, how he got discovered
                and how he gained the confidence to launch his career as
                international fashion model.
              </p>
            </div>
          </div>
          <div className="podcast-block">
            <div className="podcast-img"></div>
            <div className="podcast-desc"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
