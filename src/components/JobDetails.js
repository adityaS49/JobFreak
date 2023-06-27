import React from "react";
import styles from "./JobDetails.module.css";

import {
  Star,
  CurrencyRupee,
  BookmarkBorderOutlined,
  AccessTimeOutlined,
  WorkOutlineOutlined,
  MoneyOutlined,
} from "@mui/icons-material";
const JobDetails = ({ id, data }) => {
  console.log(data[id].title);
  return (
    <>
      <div className="jobDetailsTop">
        <div
          className={` ${styles.jobcardBanner} flex flex-col gap-1 rounded-sm border-b-2 solid border-[#243c5a] p-5`}
        >
          <div className={`${styles.title} text-[24px]`}>{data[id].title}</div>
          <div className={`${styles.company} text-[18px]`}>
            <span className={`mr-1`}>{data[id].company}</span>
            <span className={`text-[16px]`}>
              4
              <Star className={`mb-[4px]`} fontSize={"12px"} />{" "}
            </span>
          </div>
          <div className={`font-medium`}>{data[id].place}</div>
          <div className={` font-normal text-[14px] mt-2  flex gap-2`}>
            <span className={`rounded-sm bg-[#cdcccb] pl-2 pr-2 pt-1 pb-1`}>
              <CurrencyRupee
                className={`mb-[3px] font-medium`}
                fontSize={"12px"}
              />
              {data[id].salary}
            </span>
          </div>
          <div className={`${styles.JobDetails} flex gap-1`}>
            <button
              className={`w-[120px] h-[50px] text-white rounded-[5px] border-2 font-medium mt-2 bg-[#2555a7]`}
            >
              <a target="blank" href={data[id].JobLink}>
                Apply Now
              </a>
            </button>
            <button
              className={` w-[50px] h-[50px] mt-2 rounded-[6px]  bg-[#dcdddf]`}
            >
              <BookmarkBorderOutlined style={{ fontSize: "2.3rem" }} />
            </button>
          </div>
        </div>
      </div>
      <div className={`${styles.JobDetailsMiddle} mb-[4rem]`}>
        <div className={`${styles.jobDetailsScroll}`}>
          <div
            className={` border-b-2 solid rounded-[5px]  border-[#b0b2b4] flex flex-col gap-4 p-5`}
          >
            <div className={`text-[20px] font-semibold`}>
              <h1>Job details</h1>
            </div>
            <div className={`flex flex-col gap-2`}>
              <span className={`${styles.salary}`}>
                <MoneyOutlined /> Salary
              </span>
              <span>
                <span className={`rounded-sm bg-[#cdcccb] pl-2 pr-2 pt-1 pb-1`}>
                  <CurrencyRupee style={{ fontSize: "1rem" }} />
                  {data[id].salary}
                </span>
              </span>
            </div>
            <div className={`${styles.JobType} flex flex-col gap-2`}>
              <span className={`${styles.salary}`}>
                <WorkOutlineOutlined /> Job type
              </span>
              <span>
                <span className={`rounded-sm bg-[#cdcccb] pl-2 pr-2 pt-1 pb-1`}>
                  {data[id].role}
                </span>
              </span>
            </div>
            <div className={`${styles.shift} flex flex-col gap-2 `}>
              <span className={`${styles.salary}`}>
                <AccessTimeOutlined /> Shift and Schedule
              </span>
              <span>
                <span
                  className={`rounded-sm bg-[#cdcccb]  pl-6 pr-6 pt-1 pb-1`}
                >
                  {data[id].shift}
                </span>
              </span>
            </div>
            <div className={`${styles.benifits}  font-medium `}>
              <div className={`text-[18px]`}>Benifits & Perks</div>
              <div className={`text-[14px]`}>{data[id].benifits}</div>
            </div>
          </div>
          <div
            className={` border-b-2 solid rounded-[5px]  border-[#b0b2b4] flex flex-col gap-4 p-5`}
          >
            <div className={`text-[20px] font-semibold`}>
              <h1>Qualifications</h1>
            </div>
            <div className={`text-[#6f6f6f] font-normal`}>
              <ul className={`${styles.bulletList}`}>
                {data[id].Qualifications.map((item, index) => (
                  <li className={`break-normal mt-[-4px]`} key={index}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div
            className={` border-b-2 solid rounded-[5px]  border-[#b0b2b4] flex flex-col gap-4 p-5`}
          >
            <div className={`text-[20px] font-semibold`}>
              <h1>Job Description</h1>
            </div>
            <div className={`text-[#6f6f6f] font-normal `}>
              <div className={` w-[90%] max-[1200px]:mb-[4rem]`}>
              <ul className={`${styles.bulletList}`}>
                {data[id].fullDetails.map((item, index) => (
                  <li className={`break-normal mt-[-4px]`} key={index}>
                    {item}
                  </li>
                ))}
              </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobDetails;
