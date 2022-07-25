import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DoneIcon from "@mui/icons-material/Done";
import teachingApp from "../../assets/images/teaching-app.png";
import "./ImgTextHeading.css";

const ImgTextHeading = () => {
  return (
    <section className="min-h-[100vh] py-[40px] overflow-hidden">
      <div className="container h-[100%]">
        <h1 className="fib lg:text-[45px] text-[35px] my-[10px] text-center lg:py-[30px] py-[5px]"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="700"
        >
          Why <span className="text-blue">Educate</span>
        </h1>
        <div className="flex justify-between lg:flex-row flex-col flex-col-reverse">
          <div className="lg:w-[45%] w-[100%] flex justify-start items-start flex-col pt-[7%] lg:pl-[70px] pl-[0] pr-[10px]"
            data-aos="fade-right"
            data-aos-delay="700"
            data-aos-easing="ease-in-sine"
            data-aos-duration="700"
          >
            <h6 className="fib lg:text-[22px] text-[16px] text-blue uppercase">create</h6>
            <h3 className="fib lg:text-[36px] text-[25px] capitalize pb-[5px]">
              Premium Live Sessions
            </h3>
            <ul>
              <li className="fir flex lg:text-[20px] text-[17px] py-[7px]">
                <DoneIcon color="primary" className="mr-[7px] scale-[.8]" />
                Native Zoom SDK integration - Branded environment
              </li>
              <li className="fir flex lg:text-[20px] text-[17px] py-[7px]">
                <DoneIcon color="primary" className="mr-[7px] scale-[.8]" />
                Zoom business licenses for all instructors
              </li>
              <li className="fir flex lg:text-[20px] text-[17px] py-[7px]">
                <DoneIcon color="primary" className="mr-[7px] scale-[.8]" />
                Automatic attendance
              </li>
              <li className="fir flex lg:text-[20px] text-[17px] py-[7px]">
                <DoneIcon color="primary" className="mr-[7px] scale-[.8]" />
                Encrypted recordings for live sessions
              </li>
              <li className="fir flex lg:text-[20px] text-[17px] py-[7px]">
                <DoneIcon color="primary" className="mr-[7px] scale-[.8]" />
                One click live class - no link sharing
              </li>
            </ul>
          </div>
          <div className="lg:w-[55%] w-[100%] h-[300 px] flex justify-center items-center">
            <img
              src={teachingApp}
              className="lg:w-[70%] w-[90%] lg:py-[0] py-[10px]"
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

export default ImgTextHeading;
