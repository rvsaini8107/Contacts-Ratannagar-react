import {
  GusthousePage,
  TemplePage,
  SchoolPage,
  ShopsPage,
  GovtPage,
  MasjitPage,
  PrivateJobPage,
  HospitalPage,
  IronIndustriesPage,
  WoodenIndustriesPage,
} from "./Pages/AllPages";

// import ShopsPage from "./Pages/ShopsPage";
// // import GusthousePage from "./Pages/GusthousePage";
// import GovtPage from "./Pages/GovtPage";
// import MasjitPage from "./Pages/MasjitPage";
// // import TemplePage from "./Pages/TemplePage";
// import SchoolPage from "./Pages/SchoolPage";
// import PrivateJobPage from "./Pages/PrivateJobPage";
// import HospitalPage from "./Pages/HospitalPage";

import AboutUsPage from "./Pages/AboutUsPage";
import ContactUsPage from "./Pages/ContactUsPage";
import Login from "./UserLogin/UserLogin";
import Navbar from "./Pages/Navbar";
import Home from "./Pages/Home";
import UserSignup from "./UserLogin/UserSignup";
import { Routes, Route } from "react-router-dom";
import UserLogin from "./UserLogin/UserLogin";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";
import UserProfile from "./UserLogin/UserProfile";


function App() {
 
  return (
   <>

    

<ToastContainer />
    <div className="App">
      {/* <h1>Om Shri Ganeshya namhara</h1>
     <h1>Om namharaya Shivaye </h1> */}
      
      <Navbar />
      <Routes>
       
        
        <Route path="/login" element={<UserLogin />} />
        <Route path="/signup" element={<UserSignup />} />
        <Route path="/UserProfile" element={<UserProfile />} />
        

        <Route path="*" element={<Home />} />
      </Routes>
    </div>
    </>
  );
}

export default App;
