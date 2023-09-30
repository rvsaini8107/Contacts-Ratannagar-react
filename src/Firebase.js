import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, getDoc,setDoc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_KEY,
    authDomain: "contactsratannagar-d4ef6.firebaseapp.com",
    projectId: "contactsratannagar-d4ef6",
    storageBucket: "contactsratannagar-d4ef6.appspot.com",
    messagingSenderId: "469346966406",
    appId: "1:469346966406:web:044f97c406a8ca277f6a07",
    measurementId: "G-H1T08EFY7Z"
  };
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export {db,auth,provider,doc,getDoc,setDoc};

