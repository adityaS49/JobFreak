import React, { useState } from "react";
import style from "./Jobs.module.css";
import Navbar from "../../components/Navbar";
import { Menu } from "@mui/icons-material";
import JobCard from "../../components/JobCard";
import JobDetails from "../../components/JobDetails";
import { JobData } from "../../Data/JobsData";

const Jobs = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(0); // State to hold the selected ID

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleCardClick = (id) => {
    setSelectedId(id);
    console.log(id); // Update the selected ID when a card is clicked
  };

  return (
    <div className={`flex max-[605px]:flex-col`}>
      <button onClick={handleClick}>
        <span className={`ml-5 mt-5 ${style.hamburgerMenu}`}>
          <Menu style={{ fontSize: "2.5rem" }} />
        </span>
      </button>

      <div>
        <Navbar prop={isOpen} />
      </div>
      <div className={`w-[100%] pl-10 max-[605px]:p-0 max-[605px]:flex-col  flex overflow-hidden`}>
        <div
          className={`${style.jobcard} flex items-center  max-[605px]:pl-10 w-[40%] `}
        >
          <ul
            className={`w-[100%]  ${style.jobCardScroll} flex flex-col gap-[1rem] p-5 `}
          >
            {JobData.map((job) => (
              <li key={job.id}>
                <JobCard
                  onClick={() => handleCardClick(job.id)} // Pass the ID to the click handler
                  j={job}
                />
              </li>
            ))}
          </ul>
        </div>
        <div className={`${style.jobdetails} max-[605px]:mb-4 flex pt-5 pr-5 pl-12 w-[60%] max-[605px]:w-[100%]`}>
          <div
            className={`w-[80%]  ${style.jobdetailsWrapper} max-[605px]:w-[100%] flex flex-col rounded-[7px]`}
          >
            <JobDetails id={selectedId} data={JobData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
