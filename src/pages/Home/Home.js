import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import HomeCard from "../../components/HomeCard";
import style from "./Home.module.css"
import { Menu } from "@mui/icons-material";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    console.log(isOpen);
  }, [isOpen]);
 
  return (
    <div className={`flex max-[605px]:flex-col`}>
      <button onClick={handleClick}>
        <span className={`ml-5 mt-5 ${style.hamburgerMenu}`}>
          <Menu style={{ fontSize: '2.5rem' }} />
        </span>
      </button>
   
      <div>
        <Navbar prop={isOpen} />
      </div>
      <div className={`w-[100%]`}>
        <HomeCard />
      </div>
    </div>
  );
};

export default Home;
