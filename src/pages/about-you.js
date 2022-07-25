import React, { useState } from "react";
import Layout from "../components/layout/Layout";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import CancelIcon from "@mui/icons-material/Cancel";
import teacherPng from "../assets/images/teacher.png";
import studentPng from "../assets/images/student.png";
import { addDoc, collection } from "firebase/firestore";
import { dbase } from "../firebase-config";

const AboutYou = () => {
    
  const [yourName, set_yourName] = useState("");
  const [userType, set_userType] = useState("teacher");

  const teacherStudentcheck = (type) => {
    if (type == "teacher") {
      set_userType("teacher");
    }
    if (type == "student") {
      set_userType("student");
    }
  };

  const submitUser = () => {
    console.log("userType", userType);
    console.log("yourName", yourName);
    if (userType == "") {
      alert("Please use user type");
    }
    if (yourName == "") {
      alert("Please enter your name");
    }
    if (userType !== "" && yourName !== "") {
      if (userType == "teacher") {
        let teacherObj = {
            id: localStorage.getItem("id"),
            name: yourName,
            phone: localStorage.getItem('phone'),
            email: localStorage.getItem('email'),
        }
        console.log("teacherObj",teacherObj)

        const teacherData = collection(dbase,'teacher');
        addDoc(teacherData, {teacherObj})
        .then(response=> {
            console.log("res",response);
            window.location.href = "/create-class";
        })
        .catch (error => {
            console.log("error",error);
        })

      }
      if (userType == "student") {
        let studentObj = {
            id: localStorage.getItem("id"),
            name: yourName,
            phone: localStorage.getItem('phone'),
            email: localStorage.getItem('email'),
        }
        console.log("studentObj",studentObj)

        const studentData = collection(dbase,'student');
        addDoc(studentData, {studentObj})
        .then(response=> {
            console.log("res",response);
            window.location.href = "/join-class";
        })
        .catch (error => {
            console.log("error",error);
        })


      }
    }
  };

  return (
    <Layout>
      <section className={`min-h-[100vh] py-[40px] overflow-hidden bg-gray`}>
        <div className="container h-[100%]">
          <div className="flex justify-between lg:flex-col flex-col items-center h-[100%]">
            <div className="w-[100%] lg:text-center text-left">
              <h3 className="text-[24px] inline-block mb-[10px] text-[#6200ff] relative">
                Tell Us About You{" "}
                <span className="absolute left-[0] bottom-[0] w-[55px] h-[2px] bg-[#6200ff] "></span>
              </h3>
              <p className="text-gray-500">To Get Started Need little Info</p>
            </div>
            <div className="mt-[20px] w-[100%] max-w-[600px] mx-auto">
              <h3 className="lg:text-[22px] text-[18px] text-left block mb-[10px]">
                Are You a
              </h3>
              <div className="flex lg:gap-x-[1.5%] gap-x-[2.5%]">
                <div
                  className={`lg:w-[49%] w-[48%] bg-white border rounded-lg ${userType == "teacher"? "border-gray-600":"border-gray-200"} overflow-hidden`}
                  onClick={() => teacherStudentcheck("teacher")}
                >
                  <div className="img">
                    <img
                      src={teacherPng}
                      className="lg:h-[300px] h-[200px] mx-auto"
                    />
                  </div>
                  <div className="bg-[#6200ff] text-[#fff] text-center px-[15px] py-[8px]">
                    Teacher
                  </div>
                </div>

                <div
                  className={`lg:w-[49%] w-[48%] bg-white border rounded-lg ${userType !== "student"? "border-gray-200":"border-gray-600"} overflow-hidden`}
                  onClick={() => teacherStudentcheck("student")}
                >
                  <div className="img">
                    <img
                      src={studentPng}
                      className="lg:h-[300px] h-[200px] mx-auto"
                    />
                  </div>
                  <div className="bg-[#6200ff] text-[#fff] text-center px-[15px] py-[8px]">
                    Student
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[100%] mt-[30px]">
              <div className="max-w-[600px] mx-auto">
                <div className="mb-[15px] relative">
                  <TextField
                    type="text"
                    id="outlined-basic"
                    label="Enter Your Name"
                    variant="outlined"
                    value={yourName}
                    className="w-[100%]"
                    onChange={(e) => set_yourName(e.target.value)}
                  />
                  <span
                    className="absolute top-[50%] right-[10px] translate-y-[-50%] text-gray-600 cursor-pointer"
                    onClick={() => set_yourName("")}
                  >
                    <CancelIcon />
                  </span>
                </div>
                <div className="w-[200px] mx-auto">
                  <Button
                    variant="contained"
                    fullWidth={true}
                    sx={{ borderRadius: 50 }}
                    onClick={() => submitUser()}
                  >
                    <span className="fim capitalize block p-[3px]">
                      Continue
                    </span>
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

export default AboutYou;
