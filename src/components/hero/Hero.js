import React from "react";
import { Button } from "@mui/material";
import "./hero.css";
import teaching from "../../assets/images/teaching.png";

const Hero = () => {
  return (
    <section className="hero-section overflow-hidden">
      <div className="container h-[100%]">
        <div className="flex justify-between h-[100%] md:flex-row flex-col py-[30px]">
          <div className="w-[100%] md:w-[45%] flex justify-center items-start flex-col">
            <h1
              className="fim capitalize text-[#373e52] lg:text-[60px] text-[40px] font-semibold lg:leading-[70px] leading-[50px] mb-[40px]"
              data-aos="fade-right"
              data-aos-delay="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="700"
            >
              India's Largest Learning platform
            </h1>
            <Button
              variant="contained"
              size="large"
              data-aos="fade-right"
              data-aos-delay="700"
              data-aos-easing="ease-in-sine"
              data-aos-duration="700"
            >
              <span className="fim capitalize md:py-[10px] py-[2px] px-[20px] text-[22px]">
                Start Learning
              </span>
            </Button>
          </div>
          <div className="w-[100%] md:w-[55%] pt-[30px] md:pt-[0] bg-[pin k] h-[100% ] flex justify-center items-center">
            <img
              src={teaching}
              className="w-[100%] h-[40% ]"
              data-aos="fade-left"
              data-aos-delay="1400"
              data-aos-easing="ease-in-sine"
              data-aos-duration="700"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
