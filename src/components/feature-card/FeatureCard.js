import React from "react";
import { Button } from "@mui/material";
import "./FeatureCard.css";
import teaching from "../../assets/images/teaching.png";

const FeatureCard = ({ data }) => {
  return (
    <div className="max-w-[345px] lg:w-[32%] sm:w-[49%] mb-[50px]">
      <img src={data.img} />
      <h3 className="fib py-[20px] text-[24px] text-[#000000c2]">{data.title}</h3>
      <p className="fir text-[14px]">{data.des}</p>
    </div>
  );
};

export default FeatureCard;
