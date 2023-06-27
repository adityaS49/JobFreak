import React from "react";
import style from "./Navbar.module.css";
import { Home, Analytics, Assignment, Group } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const Navbar = ({ prop,  }) => {
  const navigate = useNavigate();

  const navigateTo = (route) => {
    navigate(route);
  };

  return (
    <aside
      className={`${prop ? style.expanded:style.aside}  flex flex-col w-[230px] gap-10 p-2 h-[100vh] bg-[#7d8185]`}
    >
      <div className=" flex-2 mt-10 flex items-center justify-center max-[605px]:mb-20">
        <img src="/assets/Logo.png" className="w-[150px] h-[80px]" alt="" />
      </div>
      <nav className="w-[100%] flex-1 mt-5 items-center justify-center">
        <ul className={`flex flex-col items-center gap-5 justify-center w-[100%] border-b-[grey] ${style.navList}`}>
          <li onClick={() => navigateTo("/")}>
            <span>
              <Home />
            </span>
            <span>Home</span>
          </li>
          <li onClick={() => navigateTo("/about")}>
            <span>
              <Analytics />
            </span>
            <span>About</span>
          </li>
          <li onClick={() => navigateTo("/guide")}>
            <span>
              <Assignment />
            </span>
            <span>Guide</span>
          </li>
          <li onClick={() => navigateTo("/contact")}>
            <span>
              <Group />
            </span>
            <span>Contact</span>
          </li>
        </ul>
      </nav>
      <div className={`flex-2 max-[605px]:mt-[200px]`}>
        <h6 className="text-[10px] text-center text-white opacity-4">Terms & Conditions / Privacy Policy</h6>
        <h5 className="text-[12px] text-center text-white">Copyright@2023 All rights reserved</h5>
      </div>
    </aside>
  );
};

export default Navbar;
