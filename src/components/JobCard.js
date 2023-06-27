import React from "react";
import styles from "./JobCard.module.css";
import { CurrencyRupee, Money, Star, Work } from "@mui/icons-material";

const JobCard = ({ j, onClick}) => {
  return (
    <div  onClick={onClick} className={` ${styles.jobcardBanner} p-5 bg-[#fefdfc]  text-black` }>
      <div className={`${styles.title} text-[24px]`}>{j.title}</div>
      <div className={`${styles.company} text-[18px]`}>
        <span className={`mr-1`}> {j.company}</span>
        <span className={`text-[16px]`}>
          {j.rating}
          <Star className={`mb-[4px]`} fontSize={"12px"} />{" "}
        </span>
      </div>
      <div className={`font-medium`}>{j.place}</div>
      <div className={` font-normal text-[14px] mt-2 flex-wrap  flex gap-2`}>
        <span className={`rounded-sm bg-[#cdcccb] pl-2 pr-2 pt-1 pb-1`}>
          <Money className={`mb-[3px]`} fontSize={"12px"} />
          <CurrencyRupee className={`mb-[3px]`} fontSize={"12px"} />
          {j.salary}
        </span>
        <span className={`rounded-sm bg-[#cdcccb] p-1`}>
          <Work className={`mb-[3px] mr-[4px]`} fontSize={"12px"} />
          {j.role}
        </span>
      </div>
      <div className={`${styles.descriptions}  mt-1 text-[14px]`}>
        <ul className={`${styles.bulletList}`}>
          {j.description.map((item, index) => (
            <li className={`break-normal mt-[-4px]`} key={index}>
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className={`text-[12px] font-medium mt-2 `}>
        Posted {j.period} ago{" "}
      </div>
    </div>
  );
};

export default JobCard;
