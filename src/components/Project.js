import "./Project.css";
import $ from "jquery";
import { useState } from "react";

export const Project = () => {
  const [width, setWith] = useState(window.screen.width);

  $(window).resize(function () {
    setWith(window.screen.width);
  });
  return (
    <div className="project">
      <div className="project-header">
        <h1>Projects</h1>
        <h3>Actions Speak Louder</h3>
      </div>
      <div className="project-row">
        <div className="pvsa-img-1"></div>
        <div className="project-desc">
          <span>
            Community Developer: U.S President's Volunteer Service Award
            Recipient
          </span>
          <p>
            The U.S. President's Volunteer Service Award is a prestigious civil
            honor bestowed by the President of the United States, recognizing
            exceptional volunteer contributions to the community and the nation
            as a whole. Karl-Yann has demonstrated unwavering commitment by
            dedicating over 200 hours of his time to developing and implementing
            youth and elder care programs. His tireless efforts have not only
            enriched the lives of those he has served but have also fostered a
            stronger sense of unity and compassion within our society.
          </p>
        </div>
      </div>
      <div
        className="project-row"
        style={{
          flexDirection: width < 481 ? "column-reverse" : "",
        }}
      >
        <div className="project-desc">
          <span>Diversity Business League l DBL</span>
          <p>
            DBL provides students with experiential learning opportunities to
            manage equity, diversity, and inclusion (EDI) projects. Our EDI
            projects are offered by University of Toronto faculty & staff
            members. We offer resources from our strategic partners to
            accelerate EDI initiatives. DBL delivers exceptional student club
            events throughout the academic year to transform the university
            experience.
          </p>
        </div>
        <div className="pvsa-img-2"></div>
      </div>
      <div className="project-row">
        <div className="pvsa-img-3"></div>
        <div className="project-desc">
          <span>Black Access To Educational Excellence (BAEE UTM)</span>
          <p>
            The BAEE@UTM (Black Access to Educational Excellence) initiative,
            spearheaded by Karl-Yann, has been instrumental in providing
            prospective Black high school students with crucial support as they
            navigate their university decision-making process. This initiative
            has successfully launched programs like 'We're Talking Boss Moves
            with Black Men' among other valuable initiatives. Prospective Black
            students will have the privilege of being personally introduced to
            current UTM Black students, faculty, and a robust network of
            resources. This dedicated support system is committed to assisting
            them throughout their entire post-secondary journey, making their
            transition into university life smoother and more empowering.
          </p>
        </div>
      </div>
      <div
        className="project-row"
        style={{
          flexDirection: width < 481 ? "column-reverse" : "",
        }}
      >
        <div className="project-desc">
          <span>Books for Africa</span>
          <p>
            In 2017, Karl-Yann launched a thriving bilingual book drive in the
            Washington D.C. area, collecting thousands of textbooks, novels, and
            school supplies. He forged impactful partnerships with African
            embassies, including the Ivory Coast embassy, to support education
            in rural regions like Kokonou. This marked the inception of 'Books
            For Africa,' a campaign that has become a beacon of hope,
            illuminating the path to education for countless individuals. Karl's
            unwavering commitment to literacy and education continues to inspire
            positive change, proving that one person's dedication can transform
            lives and communities.
          </p>
        </div>
        <div className="pvsa-img-4"></div>
      </div>
    </div>
  );
};
