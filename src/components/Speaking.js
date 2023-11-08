import "./Speaking.css";
import Pdf from "../assets/Edentity-Speaking-Sheet-Rate-Final.pdf";

export const Speaking = () => {
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
                keeps you at the same level & complacency gives you regret. It’s
                up to you to do the work for what matters the most”. Enjoy the
                show! and don’t forget, Around A Glass always win.
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
          Black student in STEM, receiving the U.S President’s Volunteer Service
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
      </div>
    </div>
  );
};
