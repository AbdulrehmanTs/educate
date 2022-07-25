import React, { useEffect, useState } from "react";
import { createUserWithEmailAndPassword, signInWithPhoneNumber } from "firebase/auth";
import { auth, signInWithGoogle } from "../../firebase-config";
import Button from "@mui/material/Button";
import googleLogo from "../../assets/images/logo/google.png";
import Layout from "../layout/Layout";
import { onAuthStateChanged, RecaptchaVerifier } from "firebase/auth"
import { useNavigate } from "react-router-dom";
import { TailSpin } from "react-loading-icons";




const Login = () => {
  let navigate = useNavigate()
  const [registerEmail, set_registerEmail] = useState("");
  const [registerPassword, set_registerPassword] = useState("");
  const [loginEmail, set_loginEmail] = useState("");
  const [loginPassword, set_loginPassword] = useState("");
  const [number, setNumber] = useState("")
  const [otp, setOtp]  = useState("")
  const [user, setUser]  = useState()
  const [expandPhone, setExpandPhone]  = useState(true)
  const [expandOtp, setExpandOtp]  = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  
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


  
  if(user){
    navigate('/about-you')
  }

  useEffect(()=> {
    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser)
      }
    )

  }, [])

  const signInWithumber = (e) => {
    e.preventDefault();
    if(number.length >= 12){
      window.recaptchaVerifier = new RecaptchaVerifier('recapcha', {
        'callback': (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          setExpandPhone(false)
          setExpandOtp(true)
          
        }
      }, auth);
      let appVerifier = window.recaptchaVerifier;
      signInWithPhoneNumber(auth, "+" + number, appVerifier)
      .then(confirmationResult=> {
        window.confirmationResult = confirmationResult
      })
      .catch((err)=> {
        console.log(err)
      })
    }else {
      alert("Enter Correct Phone Number")
    }
  };


  const verifyOtp = () => {
    if(otp.length === 6){
      let confirmationResult = window.confirmationResult;
      confirmationResult.confirm(otp).then((result)=> {
        const user = result.user;
        
      }).catch((err)=> {
        console.log(err)
      })
    }
  }
  


  return (
    <>
    <Layout>

   
      <div className="min-h-[60vh] flex justify-center my-10 items-center gap-x-[10px]">
        

        <div className="w-[450px] p-[35px] border-[1px] border-gray-300 rounded-[10px]">
          <h1 className="text-4xl text-center mb-[20px]">Login</h1>
          <button
            onClick={() => signInWithGoogle()}
            className="text-[18px] w-[100%] py-[10px] border-[1px] border-gray-300 bg-[#fff] text-gray-700 flex justify-center mt-4 items-center"
          >
            <img src={googleLogo} className="w-[50px] mr-3"/>
            Login with Google
          </button>


          <h1 className="text-2xl text-center my-[20px]">login with Number</h1>

          {
            expandPhone && (
              <div className="flex my-4">
                
                <input type="number" placeholder="+1 " value={number} onChange={(e)=> setNumber(e.target.value)} />
                <Button onClick={(e)=> signInWithumber(e)} >Submit</Button>
              </div>

            )
          }
          {
            isLoading && (
              <div className=" w-[100%] flex justify-center">
                <TailSpin stroke="#1976d2" fill="#1976d2" />
              </div>
            )
          }

          {
            expandOtp && (
              <div className="my-4">
                <h4 className="">OTP</h4>
                <div className="flex">
                  <input type="number" placeholder="123456" value={otp} onChange={(e)=> setOtp(e.target.value)} />
                  <Button onClick={()=> verifyOtp()} >Submit</Button>
                </div>
              </div>

            )
          }


          <div className="">
            <div id="recapcha"></div>
          </div>
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
