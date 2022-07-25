import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DoneIcon from "@mui/icons-material/Done";
import joinClass from "../../assets/images/join-class.png";
import "./ImgTextLR.css";

const ImgTextLR = ({ bgGray, bgWhite }) => {
  return (
    <section className={`min-h-[100vh] py-[40px] overflow-hidden ${bgGray ? "bg-gray" : ""} ${ bgWhite ? "bg-white" : "" }`}>
      <div className="container h-[100%]">
        <div className="flex justify-between lg:flex-row flex-col flex-col-reverse items-center h-[100%]">
          <div className="lg:w-[45%] w-[100%] flex justify-start items-start flex-col lg:pl-[70px] pl-[0] pr-[10px] lg:pt-[0] pt-[7%]"
            data-aos="fade-right"
            data-aos-delay="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="700"
          >
            <h6 className="fib lg:text-[22px] text-[16px] text-blue uppercase">grow</h6>
            <h3 className="fib lg:text-[36px] text-[25px] capitalize pb-[5px]">
              sell &#39; earn on one platform
            </h3>
            <ul>
              <li className="fir text-[20px] flex py-[7px]">
                <DoneIcon color="primary" className="mr-[7px] scale-[.8]" />
                craft automated and custom invoices
              </li>
              <li className="fir text-[20px] flex py-[7px]">
                <DoneIcon color="primary" className="mr-[7px] scale-[.8]" />
                Automate free reminders and setup suspension rules
              </li>
              <li className="fir text-[20px] flex py-[7px]">
                <DoneIcon color="primary" className="mr-[7px] scale-[.8]" />
                Collect payments from anywhere in the world
              </li>
              <li className="fir text-[20px] flex py-[7px]">
                <DoneIcon color="primary" className="mr-[7px] scale-[.8]" />
                sell pre-recorded courses
              </li>
            </ul>
          </div>
          <div className="lg:w-[55%] w-[100%] flex justify-center items-center">
            <img
              src={joinClass}
              className="w-[70%]"
              data-aos="fade-left"
              data-aos-delay="700"
              data-aos-easing="ease-in-sine"
              data-aos-duration="700"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImgTextLR;
