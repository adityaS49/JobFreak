import React from "react";
import styles from "./HomeCard.module.css";
import { useNavigate } from "react-router-dom";
import { ArrowRightAlt } from "@mui/icons-material";

const HomeCard = () => {
  const navigate = useNavigate();

  const navigateTo = (route) => {
    navigate(route);
  };

  return (
    <div className={`${styles.home}`}>
      <div className={`w-[100%] h-[100vh] object-cover`}>
        <div className={`${styles.homeBanner}`}>
        <img src="./assets/ImageBanner.png" className={`${styles.bannerImg}`} alt="" />
        </div>
        <div className={`${styles.bannerBody}`}>
          <div className=" flex flex-1 h-[100%]  items-center justify-center ">
            <h1
              className={`${styles.bannerTitle} w-[70%] text-[50px] text-center`}
            >
              The secret of getting ahead is getting started.
            </h1>
          </div>
          <div
            className={`${styles.bannerHeading}  items-center justify-center text-[30px] flex flex-2`}
          >
            <h2 className={`text-center`}>Work to become, not to acquire</h2>
          </div>
          <div className={`w-[100%] mt-5 flex items-center justify-center`}>
            <div
              className={` text-[white] items-center justify-center w-40  h-12 rounded mt-4 ${styles.PostComments}`}
            >
              <button type="submit" onClick={()=>navigateTo("/jobs")} className={`ml-2  w-36 text-[22px] h-12`}>
                Find Jobs <ArrowRightAlt style={{fontSize: "26px"}} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
