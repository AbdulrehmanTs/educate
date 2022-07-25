import React from "react";
import Layout from "../components/layout/Layout";
import JoiningBg from "../assets/images/join-class-bg.png";
import { Button } from "@mui/material";
import TextField from '@mui/material/TextField';

const JoinClass = () => {
    return (
        <Layout>
            {/* <section className="joining-class overflow-hidden relative">
                <div className="container h-[100%]">
                    <div className="flex justify-between lg:h-[90vh] sm:h-[80vh] h-[30vh] flex-row py-[30px]">
                        <div className="w-[45%] flex lg:items-center items-end">
                            <h1 className="capitalize text-[#6200ff] lg:text-[60px] md:text-[30px] text-[24px] font-semibold lg:leading-[70px] md:leading-[40px] leading-[30px] mb-[40px]"
                                data-aos="fade-right"
                                data-aos-delay="200"
                                data-aos-easing="ease-in-sine"
                                data-aos-duration="700"
                            >
                                Join <br /> Classroom
                            </h1>
                        </div>
                        <div className="w-[55%] pt-[30px] md:pt-[0] bg-[pin k] h-[100% ] flex justify-center items-center">
                            <img
                                src={JoiningBg}
                                className="lg:w-[50%] w-[60%] lg:py-[0] py-[10px] absolute top-0 right-0 h-[90%] z-[-1]"
                                data-aos="fade-left"
                                data-aos-delay="1400"
                                data-aos-easing="ease-in-sine"
                                data-aos-duration="700"
                            />
                        </div>
                    </div>
                </div>
            </section> */}
            <section className="joining-class py-[40px] overflow-hidden">
                <div className="container"> 
                    <div className="w-[100%] mt-[30px]">
                        <div className="max-w-[600px] mx-auto relative">
                        <div className="flex justify-between flex-row py-[30px] mb-5 min-h-[260px]">
                        <div className="w-[45%] flex lg:items-center items-end">
                            <h1 className="capitalize text-[#6200ff] lg:text-[60px] sm:text-[50px] text-[24px] font-semibold lg:leading-[70px] sm:leading-[50px] leading-[30px] mb-[40px]"
                                data-aos="fade-right"
                                data-aos-delay="200"
                                data-aos-easing="ease-in-sine"
                                data-aos-duration="700"
                            >
                                Join <br /> Classroom
                            </h1>
                        </div>
                        <div className="w-[55%] pt-[30px] md:pt-[0] bg-[pin k] h-[100% ] flex justify-center items-center">
                            <img
                                src={JoiningBg}
                                className="lg:w-[50%] w-[50%] lg:py-[0] py-[10px] absolute top-0 right-0 z-[-1]"
                                data-aos="fade-left"
                                data-aos-delay="1400"
                                data-aos-easing="ease-in-sine"
                                data-aos-duration="700"
                            />
                        </div>
                    </div>
                            <div className="mb-[15px] relative"><TextField type="text" id="outlined-basic" helperText="ID Shared by your teacher" label="Enter Classroom ID" variant="outlined" className="w-[100%] " /> <span className="absolute bottom-0 right-[10px] text-[14px] text-[#6200ff] ">10/10</span></div>
                            <div>
                                <Button variant="contained" fullWidth="true">
                                    <span className="fim capitalize block p-[3px]">Create Classroom</span>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default JoinClass;