
import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";

console.log(process.env.REACT_APP_FIREBASE_KEY,"api");
const firebaseConfig = {

  apiKey: "AIzaSyAi2eA5VC4oLP_q6oBwjzpNyP_VmSbu2yg",

  authDomain: "contactsratannagarreact.firebaseapp.com",

  projectId: "contactsratannagarreact",

  storageBucket: "contactsratannagarreact.appspot.com",

  messagingSenderId: "473319059360",

  appId: "1:473319059360:web:dafd49551ccccafb183ec5",

  measurementId: "G-13G522D3ES"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
 
