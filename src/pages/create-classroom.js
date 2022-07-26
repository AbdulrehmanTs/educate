import React, { useState, useEffect } from "react";
import Layout from "../components/layout/Layout";
import ClassroomPng from "../assets/images/classroom.png";
import { Button } from "@mui/material";
import TextField from '@mui/material/TextField';
import { onAuthStateChanged, RecaptchaVerifier } from "firebase/auth"
import { auth, signInWithGoogle, dbase } from "../firebase-config";
import { addDoc, collection, doc, getDocs } from "firebase/firestore"; 

const CreateClassroom = ({ bgGray, bgWhite }) => {

    const [className, set_className] = useState('');
    const [subjectName, set_subjectName] = useState('');
    const [teacherId, set_teacherId] = useState('');

    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            set_teacherId(currentUser.uid)
        })
    }, [])

    const createClassroom = () => {
        let classRoomObj = {};
        classRoomObj = {
            className: className,
            subjectName: subjectName,
            teacherId: teacherId,
        }

        const classRoomData = collection(dbase,'classroom');
        addDoc(classRoomData, classRoomObj)
        .then(response=> {
            console.log("cr res",response);
            // alert('Class Room created.');
            window.location.href='/class-room-created';
        })
        .catch (error => {
            console.log("cr error",error);
        })
    }
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
                                <div className="mb-[15px]"><TextField type="text" id="outlined-basic" helperText="Eg: 12th class" label="Enter Classroom Name" variant="outlined" className="w-[100%]" value={className} onChange={(e) => set_className(e.target.value)} /></div>
                                <div className="mb-[15px]"><TextField type="text" id="outlined-basic" helperText="Eg: Maths" label="Enter Subject Name" variant="outlined" className="w-[100%]" value={subjectName} onChange={(e) => set_subjectName(e.target.value)} /></div>
                                <div>
                                    <Button variant="contained" fullWidth={true} onClick={() => createClassroom()}>
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