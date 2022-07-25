import React from "react";
import { Button } from "@mui/material";
import "./FeaturesSection.css";
import teaching from "../../assets/images/teaching.png";
import img1 from "../../assets/images/features/feature1.png";
import img2 from "../../assets/images/features/feature2.png";
import img3 from "../../assets/images/features/feature3.png";
import FeatureCard from "../feature-card/FeatureCard";

const features = [
  {
    img: img1,
    title: "Daily live classes",
    des: "Chat with educators, ask questions, answer live pools, and get your doubts cleared - all while the class is going on",
  },
  {
    img: img2,
    title: "Daily live classes",
    des: "Chat with educators, ask questions, answer live pools, and get your doubts cleared - all while the class is going on",
  },
  {
    img: img3,
    title: "Daily live classes",
    des: "Chat with educators, ask questions, answer live pools, and get your doubts cleared - all while the class is going on",
  },
  {
    img: img1,
    title: "Daily live classes",
    des: "Chat with educators, ask questions, answer live pools, and get your doubts cleared - all while the class is going on",
  },
  {
    img: img2,
    title: "Daily live classes",
    des: "Chat with educators, ask questions, answer live pools, and get your doubts cleared - all while the class is going on",
  },
  {
    img: img3,
    title: "Daily live classes",
    des: "Chat with educators, ask questions, answer live pools, and get your doubts cleared - all while the class is going on",
  },
];

const FeaturesSection = () => {
  return (
    <section className="FeaturesSection-section py-[70px]">
      <div className="container h-[100%]">
        <div className="flex justify-center gap-x-[1.5%] flex-wrap">
          {features.map((value) => (
            <FeatureCard data={value} key={value.title} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
