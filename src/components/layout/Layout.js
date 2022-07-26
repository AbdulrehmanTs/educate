import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import Navigation from "./Navigation";
import { onAuthStateChanged } from "firebase/auth"
import { auth, dbase } from "../../firebase-config";
import { collection, getDocs } from "firebase/firestore";
import Strip from "../strip/strip";


const Layout = ({ children }) => {
  const [teachers, setTeachers] = useState([])
  const [students, setStudents] = useState([])
  const [exists, setExists] = useState(false)
  const [user, set_user] = useState({})
  const [strip, set_showStrip] = useState(false)

  const getData = async (ref, set) => {
    await getDocs(ref).then((snapshot) => {
      let users = []
      snapshot.docs.forEach((doc) => {
        users.push({ ...doc.data() })
      })
      set(users)
    }).catch((err) => {
      console.log(err)
    })
  }

  const teacherRef = collection(dbase, "teacher");
  const studentRef = collection(dbase, "student");

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      set_user(currentUser)
      console.log('currentUser', currentUser)
    }
    )
    getData(teacherRef, setTeachers)
    getData(studentRef, setStudents)
  }, [])

  console.log('layout user', user)


  useEffect(() => {
    let checkUser = [...teachers, ...students].filter(item =>
      item?.email === user?.email || item?.phone === user?.phoneNumber
    )
    if (checkUser.length < 1){
      setExists(false)
    }else{
      setExists(true)
    }

    if (user && !exists && window.location.pathname !== '/about-you') {
      console.log("path", window.location.pathname)
        set_showStrip(true);
    }else if(user && exists && window.location.pathname !== '/about-you'){
      set_showStrip(false)
    } else{
      set_showStrip(false)
    }

  }, [teachers, students, user])

  
  console.log("teachers--",teachers)
  console.log("students--",students)
  console.log("currentUser--",user)
  console.log("exist--",exists)
  console.log("strip--",strip)
  
  // if (exists.length > 0) {
  //   console.log("exists[0].status",exists[0].status)
  // }

 


  return (
    <>
      {strip &&
        <Strip />
      }
      <Navigation />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
