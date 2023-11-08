import React from "react";
import "./Home.css";
import img1 from "../assets/karl-1.jpeg";
import img2 from "../assets/edentity-logo.png";
import img3 from "../assets/dbl.jpeg";

export const Home = () => {
  return (
    <div className="home-wrapper">
      <div className="banner">
        <div>
          <h1>
            Karl-Yann Assah: Technology Professional, Entrepreneur, Pr
            Specialist, International Model, Scholar
          </h1>
          <div className="banner-video">
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
        </div>
      </div>
      <div className="quote-wrapper">
        <p>
          <span>"[GIVE YOURSELF A FIGHTING CHANCE],</span>
          <span>WHAT IF IT TURNS OUT BETTER THAN YOU EVER IMAGINED?"</span>
          <span className="quote-name">KARL-YANN ASSAH</span>
        </p>
      </div>
      <div className="project-row-wrapper">
        <div className="project-1">
          <img alt="Karl" src={img1}></img>
          <label>KARL-YANN ASSAH</label>
          <p>Professional Experience</p>
        </div>
        <div className="project-2">
          <img alt="EDENTITY" src={img2}></img>
          <label>EDENTITY</label>
          <p>Elevating Personal Branding</p>
        </div>
        <div className="project-3">
          <img alt="IMPACT" src={img3}></img>
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
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            <div className="news-desc">
              <div className="news-desc-sub">
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
          <div className="news-block">
            <div className="news-vid">
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
            <div className="news-desc">
              <div className="news-desc-sub">
                <p>Podcast</p>
                <p>'Around A Glass' - Episode #9</p>
              </div>
              <p>
                Filled with value and intelligence, the ninth episode was shared
                with around the modeling industry, personal branding and
                self-awareness. Thrilled to share a rich discussion around a
                glass, Karl-Yann reminds us how important it is to push
                ourselves in order to attract opportunities. Having an valuable
                presence is vital depends on the career path because credibility
                comes with that as well. Taking risk and being willing to be
                uncomfortable allow us to grow. To dedicate his life to become
                better and leave a legacy are his goals. With that, I leave you
                with one of his quote “complacency kills dreams, complacency
                keeps you at the same level & complacency gives you regret. It’s
                up to you to do the work for what matters the most”. Enjoy the
                show! and don’t forget, Around A Glass always win.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
