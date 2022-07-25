import React from "react";
import Layout from "../components/layout/Layout";
import ClassroomPng from "../assets/images/classroom.png";
import { Button } from "@mui/material";
import TextField from '@mui/material/TextField';

const CreateClassroom = ({ bgGray, bgWhite }) => {
    return (
        <Layout>
            <section className={`min-h-[100vh] py-[40px] overflow-hidden  ${bgGray ? "bg-gray" : ""} ${bgWhite ? "bg-white" : ""}`}>
                <div className="container h-[100%]">
                    <div className="flex justify-between lg:flex-col flex-col items-center h-[100%]">
                        <div className="w-[100%] lg:text-center text-left">
                            <h3 className="text-[24px] inline-block mb-[10px] text-[#6200ff] relative">Create your Classroom <span className="absolute left-[0] bottom-[0] w-[55px] h-[2px] bg-[#6200ff] "></span></h3>
                            <img
                                src={ClassroomPng}
                                className="w-[100%] lg:py-[0] py-[10px] max-w-[400px] mx-auto"
                                data-aos="fade-right"
                                data-aos-delay="200"
                                data-aos-easing="ease-in-sine"
                                data-aos-duration="700"
                            />
                        </div>
                        <div className="w-[100%] mt-[30px]"
                            data-aos="fade-left"
                            data-aos-delay="900"
                            data-aos-easing="ease-in-sine"
                            data-aos-duration="700"
                        >
                            <div className="max-w-[600px] mx-auto">
                                <div className="mb-[15px]"><TextField type="text" id="outlined-basic" helperText="Eg: 12th class" label="Enter Classroom Name" variant="outlined" className="w-[100%] " /></div>
                                <div className="mb-[15px]"><TextField type="text" id="outlined-basic" helperText="Eg: Maths" label="Enter Subject Name" variant="outlined" className="w-[100%] " /></div>
                                <div>
                                    <Button variant="contained" fullWidth="true">
                                        <span className="fim capitalize block p-[3px]">Create Classroom</span>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default CreateClassroom;