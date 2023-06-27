import React from "react";
import { Teams } from "../Data/Teams";
import "./TestinomialsCard.css";
const TestinomialsCard = () => {
  return (
    <section class="testinomials">
      <div class="testinomials-container">
        <div class="testinomials-info">
          <div class="testinomials-info-heading">
            <h1>MEET OUR TEAM</h1>
          </div>
          <div class="testinomials-info-paragraph">
            <p>
              You need to be aware of what others are doing, applaud their
              efforts, acknowledge their successes, and encourage them in their
              pursuits. When we all help one another, everybody wins.
             
            </p>
          </div>
        </div>
        <div class="testinomials-display">
          <input type="radio" name="slider" id="item-1" checked />
          <input type="radio" name="slider" id="item-2" />
          <input type="radio" name="slider" id="item-3" />

          <div class="cards">
            {Teams.map((u) => (
              <label class="card" for={u.id} id={u.song}>
                <div class="review">
                  <div class="review-box">
                    <div class="pics">
                      <div class="img-box">
                        <img src={u.imgSrc} alt="" />
                      </div>
                    </div>
                    <div class="review-content">
                      <div class="name">{u.name}</div>
                      <div class="posts">{u.post}</div>
                    </div>
                  </div>
                </div>
              </label>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestinomialsCard;
