import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA6U3PPZKHAH9D74JTNx626TN2rNvgvC_c",
  authDomain: "educate-bd4a0.firebaseapp.com",
  projectId: "educate-bd4a0",
  storageBucket: "educate-bd4a0.appspot.com",
  messagingSenderId: "920683354436",
  appId: "1:920683354436:web:ba04dbdad3d66db9ac5f11",
  measurementId: "G-2Y2TG8X3V6"

  // apiKey: "AIzaSyCSKOLma_cRMDDwYwAjimikOtPfCpi5xJk",
  // authDomain: "testing-ac9fc.firebaseapp.com",
  // projectId: "testing-ac9fc",
  // storageBucket: "testing-ac9fc.appspot.com",
  // messagingSenderId: "833952318707",
  // appId: "1:833952318707:web:120217aa9d06a4bc59e386",
  // measurementId: "G-WK45QVQ52M"
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log("result", result);
      if(result.operationType == "signIn") {
        console.log("redirect now");

        const id = result.user.uid;
        const name = result.user.displayName;
        const email = result.user.email;
        const phone = result.user.phoneNumber;

        localStorage.setItem("id",id)
        // localStorage.setItem("name",name)
        localStorage.setItem("email",email)
        localStorage.setItem("phone",phone)

        window.location.href = '/about-you';
      }
    })
    .catch((error) => {
      console.log("error", error);
    });
};


export const logOut = () => {
  signOut(auth).then((result)=> {
    window.location.href = '/login';
  }).catch((err)=> {
    console.log(err)
  })
}

export const dbase = getFirestore(app);