import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DoneIcon from "@mui/icons-material/Done";
import teachingAppDashboard from "../../assets/images/teaching-app-dashboard.png";
import "./AppsSlider.css";

import app1 from "../../assets/images/app1.png";
import app2 from "../../assets/images/app2.png";
import app3 from "../../assets/images/app3.png";
import app4 from "../../assets/images/app4.png";

const AppsSlider = ({ bgGray, bgWhite }) => {
  return (
    <section
      className={` py-[70px] overflow-hidden  ${bgGray ? "bg-gray" : ""} ${
        bgWhite ? "bg-white" : ""
      }`}
    >
      <div className="w-[90%] mx-auto">
        <div className="w-[100%] flex gap-x-[15px] slide">
          <img src={app1} />
          <img src={app2} />
          <img src={app3} />
          <img src={app4} />
          <img src={app1} />
          <img src={app2} />
          <img src={app3} />
          <img src={app4} />
        </div>
      </div>
    </section>
  );
};

export default AppsSlider;
