import React, { useEffect, useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, signInWithGoogle } from "../../firebase-config";
import Button from "@mui/material/Button";
import googleLogo from "../../assets/images/logo/google.png";
import Layout from "../layout/Layout";
import { onAuthStateChanged } from "firebase/auth"
import { useNavigate } from "react-router-dom";


const Login = () => {
  const navigate = useNavigate()
  const [registerEmail, set_registerEmail] = useState("");
  const [registerPassword, set_registerPassword] = useState("");
  const [loginEmail, set_loginEmail] = useState("");
  const [loginPassword, set_loginPassword] = useState("");
  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log("user", user);
    } catch (error) {
      console.log("error.message", error.message);
    }
    // console.log("registerEmail", registerEmail);
    // console.log("registerPassword", registerPassword);
    // console.log("loginEmail", loginEmail);
    // console.log("loginPassword", loginPassword);
  };


  const [user, setUser]  = useState()

  onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
    }
  )

  useEffect(()=> {
    if(user){
      navigate('/about-you')
    }
  }, [])
  return (
    <>
    <Layout>

   
      <div className="min-h-[60vh] flex justify-center items-center gap-x-[10px]">
        

        <div className="w-[450px] p-[35px] border-[1px] border-gray-300 rounded-[10px]">
          <h1 className="text-4xl text-center mb-[20px]">Login</h1>
          <button
            onClick={() => signInWithGoogle()}
            className="text-[18px] w-[100%] py-[10px] border-[1px] border-gray-300 bg-[#fff] text-gray-700 flex justify-center mt-4 items-center"
          >
            <img src={googleLogo} className="w-[50px] mr-3"/>
            Login with Google
          </button>
        </div>
      </div>

      {/* <div className="text-center pb-[50px]">
        <h4>User Logged In:</h4>

        <button>Sign Out</button>
      </div> */}
    </Layout>
    </>
  );
};

export default Login;
