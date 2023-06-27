import { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import GuideCard from "../../components/GuideCard";
import { Menu } from "@mui/icons-material";
import style from "./Guide.module.css";

const Guide = () => {
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
          <Menu style={{ fontSize: "2.5rem" }} />
        </span>
      </button>
      <div>
        <Navbar prop={isOpen} />
      </div>
      <div className={`w-[100%]`}>
        <GuideCard />
      </div>
    </div>
  );
};

export default Guide;
