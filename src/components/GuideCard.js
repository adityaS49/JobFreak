import React from "react";
import "./GuideCard.css";
const GuideCard = () => {
  return (
    <div className="about">
      <div className="aboutWrapperBody">
        <div className="aboutBanners">
          <div className="aboutUsHeading">
            <h1>Guidance From Us</h1>
          </div>
          <div className="aboutUsParas">
            <p>
              All Company names and brands are the Intellectual Property of
              their respective owners. All company , product , and service names
              used in this website are for identification purposes only. We are
              not associated with any company/organization whose jobs posted on
              jobfreak.in , We are just an information provider for jobs and
              internships
            </p>
          </div>
        </div>
        <div class="container">
          <div class="cardsss">
            <div class="card__body">
              <span class="tag tag-blue">Technology</span>
              <h4>Reliability</h4>
              <p>
              Being dependable and trustworthy, fulfilling commitments, and consistently delivering high-quality work.
              </p>
            </div>
          </div>
          <div class="cardsss">
            <div class="card__body">
              <span class="tag tag-red">Existance</span>
              <h4>Adaptability</h4>
              <p>
              Willingness to embrace change, flexibility in adjusting to new tasks or situations, and ability to learn and grow.
              </p>
            </div>
          </div>
          <div class="cardsss">
            <div class="card__body">
              <span class="tag tag-brown">Ethnicity</span>
              <h4>Strong work ethic</h4>
              <p>
              Being motivated, diligent, and taking pride in one's work, going above and beyond to achieve goals and meet deadlines.
              </p>
            </div>
          </div>
          <div class="cardsss">
            <div class="card__body">
              <span class="tag tag-blue">Management</span>
              <h4>Time management</h4>
              <p>
              Prioritizing tasks, managing workload efficiently, and being able to meet deadlines effectively.
              </p>
            </div>
          </div>
          <div class="cardsss">
            <div class="card__body">
              <span class="tag tag-brown">Business</span>
              <h4>Professionalism</h4>
              <p>
              Conducting oneself in a professional manner, displaying integrity, and maintaining a positive attitude even in challenging situations.
              </p>
            </div>
          </div>
          <div class="cardsss">
            <div class="card__body">
              <span class="tag tag-red">Mentality</span>
              <h4>Race to your heart content</h4>
              <p>
              Showing initiative, being self-driven, and continuously seeking ways to enhance skills and contribute to the organization's success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuideCard;
