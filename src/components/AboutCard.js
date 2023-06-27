import React from "react";
import "./AboutCard.css";
import { Diversity2, Facebook, Instagram, LinkedIn, Public,CatchingPokemon, Telegram } from "@mui/icons-material";
import TestinomialsCard from "./TestinomialsCard";
const AboutCard = () => {
  return (
    <div className="about">
      <div className="aboutWrapper">
        <div className="aboutBanner">
          <div className="aboutUsHeading">
            <h1>About Us</h1>
          </div>
          <div className="aboutUsPara">
            <p className={`w-[90%]`}>
              At Job Freak We Post daily updates on internships and jobs
              postings ! ! Our aim is to empower the youth of our country and
              make them Self-dependent. By providing them job/internships all
              kinds of opportunities from various sectors, sharing knowledge and
              make them competent enough so that they could excel in any field.{" "}
            </p>
          </div>
          <div className="socials">
            <div className="socialsIcons">
              <span>
               <a target="blank" href="https://www.instagram.com/job_freak/"> <Instagram className="icons" style={{ fontSize: "3rem" }} /></a>
              </span>
              <span>
                <LinkedIn  className="icons"  style={{ fontSize: "3rem" }} />
              </span>
              <span>
                <Facebook  className="icons"  style={{ fontSize: "3rem" }} />
              </span>
              <span>
              <a target="blank" href="https://t.me/JobFreak"><Telegram  className="icons"  style={{ fontSize: "3rem" }} /></a>
    
              </span>
            </div>
          </div>
        </div>
        <div className="meetUsBanner">
          <div className="meetUsLogoCard">
            <div className="meetUsLogo">
            <img src="./assets/teams.jpeg" alt="" />
            </div>
          </div>

          <div className="meetUsHeading">
            <h1>Our Objective</h1>
          </div>
          <div className="meetUsPara">
            <p>
              We are all verty different.We were born in different cities, at
              different times , we love different food, music, and movies. But
              we have something that unites us all. It is our company.We are its
              heart. We are not just a team, we are family.
            </p>
          </div>
          <div className="meetUsCardSection">
            <div className="meetUsCard">
              <div className="meetUsCardLogo">
              <Diversity2  style={{ fontSize: "4rem" }}/>
              </div>
              <div className="meetUsCardHeading">Creativity</div>
              <div className="meetUsCardPara"><p>It is ability to think outside the box. we make decisions, create something new!</p></div>
            </div>
            <div className="meetUsCard">
              <div className="meetUsCardLogo">
              <Public style={{ fontSize: "4rem" }}/>
              </div>
              <div className="meetUsCardHeading">WorldWide</div>
              <div className="meetUsCardPara"><p>Far and away the best prize that life has to offer is the chance to work hard at work worth doing</p></div>
            </div>
            <div className="meetUsCard">
              <div className="meetUsCardLogo">
              <CatchingPokemon style={{ fontSize: "4rem" }}/>
              </div>
              <div className="meetUsCardHeading">Environment</div>
              <div className="meetUsCardPara"><p>Culture is simply a shared way of doing something with a passion and positivity.</p></div>
            </div>
          </div>  
        </div>
        <div className="testinomialsCards">
        <TestinomialsCard/>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
