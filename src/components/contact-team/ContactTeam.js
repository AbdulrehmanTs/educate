import React from "react";
import { Button } from "@mui/material";
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/material/TextareaAutosize';

const GetApp = ({ bgGray, bgWhite }) => {
  return (
    <section className={`min-h-[100vh] py-[40px] overflow-hidden ${bgGray ? "bg-gray" : ""} ${bgWhite ? "bg-white" : ""}`}>
      <div className="container h-[100%]">
        <div className="flex justify-between lg:flex-row flex-col items-center h-[100%]">
          <div className="lg:w-[45%] w-[100%] flex justify-start items-start flex-col lg:pl-[70px] pl-[0] pr-[10px] lg:pt-[0] pt-[7%]"
            data-aos="fade-right"
            data-aos-delay="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="700"
          >
            <h3 className="fib lg:text-[34px] text-[25px] capitalize pb-[8px]">
              Contact Our Team
            </h3>
            <div>
              <p className="text-[16px] mb-[35px]">We're heppy to answer your queries & Get you shared on wise</p>
              <div className="font-medium text-[18px]">
                <a className="block">sales@Educate.live</a>
                <a className="block">+91 7831818181</a>
                <a className="block">@educatelive</a>
              </div>
            </div>
          </div>
          <div className="lg:w-[55%] w-[100%] flex justify-center items-center">
            <div className="teamFoemContainer mt-[20px] border border-gray-500 overflow-hidden rounded-lg shadow-lg max-w-[400px] w-[100%]">
              <div className="text-center text-[#fff] bg-[#6200ff] font-medium text-[22px] py-[4px] ">Have a question</div>
              <div className="teamFoem py-[40px] px-[30px] ">
                <div className="mb-[15px]"><TextField type="text" id="outlined-basic" label="Name" variant="outlined" className="w-[100%] " /></div>
                <div className="mb-[15px]"><TextField type="text" id="outlined-basic" label="Phone Number" variant="outlined" className="w-[100%] " /></div>
                <div className="mb-[15px]"><TextField type="text" id="outlined-basic" label="Email" variant="outlined" className="w-[100%] " /></div>
                <div className="mb-[15px]"><TextareaAutosize aria-label="empty textarea" placeholder="Please Write Message" className="focus:border-gray-600" style={{ width: '100%', outline: 0, border: '1px solid #d1d1d1', padding: '16.5px 14px', borderRadius: '3px', minHeight: '100px' }} /></div>
                <div>
                  <Button variant="contained" fullWidth="true" sx={{ width: '40%', display: 'inline-block' }}>
                    <span className="fim capitalize block p-[3px]">Contact Us</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetApp;
