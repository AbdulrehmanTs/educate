import React from "react";
import Brand1 from '../../assets/images/brand1.png'
import Brand2 from '../../assets/images/brand2.png'
import Brand3 from '../../assets/images/brand3.png'
import Brand4 from '../../assets/images/brand4.png'
import Brand5 from '../../assets/images/brand5.png'

const TrustedBrands = ({bgGray, bgWhite}) => {
  return (
    <section className={`py-[40px] overflow-hidden  ${bgGray ? "bg-gray" : ""} ${bgWhite ? "bg-white" : ""}`}>
      <div className="container h-[100%]">
        <h3 className="text-center font-semibold text-[24px]">Trusted by institutions of all shapes and sizes across <span className="text-[#4d97ff]">80 countries</span></h3>
        <div className="flex flex-wrap my-[50px]">
          <div className="lg:w-[20%] w-[90%]"><img src={Brand5} alt="" /></div>
          <div className="lg:w-[20%] w-[90%]"><img src={Brand4} alt="" /></div>
          <div className="lg:w-[20%] w-[90%]"><img src={Brand3} alt="" /></div>
          <div className="lg:w-[20%] w-[90%]"><img src={Brand2} alt="" /></div>
          <div className="lg:w-[20%] w-[90%]"><img src={Brand1} alt="" /></div>
        </div>
        <div className="brandsCounts mx-auto max-w-[800px] flex flex-wrap mt-[30px] min-h-[90px] shadow-lg text-center bg-white rounded-xl">
            <div className="lg:w-[33%] md:w-[50%] w-[100%] p-[15px] flex justify-center items-center"><div><div className="text-[20px] text-[#4d97ff] font-semibold">3 million+</div><div className="text-[16px]">Teachers & Students</div></div></div>
            <div className="lg:w-[33%] md:w-[50%] w-[100%] p-[15px] lg:border-x lg:border-y-0 border-y border-gray-300 flex justify-center items-center"><div><div className="text-[20px] text-[#4d97ff] font-semibold">2 billion+</div><div className="text-[16px]">Live class minutes</div></div></div>
            <div className="lg:w-[33%] md:w-[50%] w-[100%] p-[15px] flex justify-center items-center"><div><div className="text-[20px] text-[#4d97ff] font-semibold">250k+</div><div className="text-[16px]">Quizzes and tests</div></div></div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBrands;
