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

function App() {
  return (
    <div className="App">
      {/* <h1>Om Shri Ganeshya namhara</h1>
     <h1>Om namharaya Shivaye </h1> */}

      <Navbar />
      <Routes>
        {/* <Route path="/" element={<Home />} />
        <Route path="/shops" element={<ShopsPage />} />
        <Route path="/Governments" element={<GovtPage />} />
        <Route path="/gusthouse" element={<GusthousePage />} />
        <Route path="/masjits" element={<MasjitPage />} />
        <Route path="/Schools" element={<SchoolPage />} />
        <Route path="/temples" element={<TemplePage />} />
        <Route path="/Private Workers" element={<PrivateJobPage />} />
        <Route path="/Hospitals" element={<HospitalPage />} />
        <Route path="/ironIndustry" element={<IronIndustriesPage />} />
        <Route path="/woodenIndustry" element={<WoodenIndustriesPage />} /> */}

        {/* <Route path="/about" element={<AboutUsPage />} />
        <Route path="/contact" element={<ContactUsPage />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<UserSignup />} />
        

        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
