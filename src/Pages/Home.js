import React from "react";
import { categories, categoryLink } from "../Data/catagoryArray";
import { Link, NavLink } from "react-router-dom";
import elephant from "../images/elephant.png";
import cam from "../images/camal.png";
import { Routes, Route } from "react-router-dom";
import ContactUsPage from "./ContactUsPage";
import Footer from "./Footer";

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
} from "./AllPages";
import AboutUsPage from "./AboutUsPage";

const Home = () => {
  const [categoryThis, setCategoryThis] = React.useState("ShopsPage");
  const HandelClick = (category) => {
    console.log(category, "clicked category");
    setCategoryThis(category);
  };
  const ComponentBackgroundImageDiv = (nameClass) => (
    <div className="background-img-Rajasthan class1"></div>
  );
  return (
    <div className="homePage">
      <div className="welcome">
        <div className="left">
          <h1 className="welcome-h1">Welcome To Contacts Ratannagar</h1>
          <h2 className="welcome-h2">
            Developer{" "}
            <span className="welcome-h2-myName">ShriGanesh Saini</span>
          </h2>
        </div>
        <div className="right">
          <img src={elephant} alt={elephant} className="elephant" />
        </div>
      </div>
      <ComponentBackgroundImageDiv />
      {/* <div to={categoryLink[category]} className="categories" key={i}></div> */}

      <div className="info-data-main">
        <div className="main-category-list">
          {categories.map((category, i) => (
            <div
              onClick={() => HandelClick(categoryLink[category])}
              className="categories"
              key={i}
            >
              {category}
              {categoryLink.category}
            </div>
          ))}
        </div>
        <div className="infoBox">
          {categoryThis == "ShopsPage" && <ShopsPage />}
          {categoryThis == "SchoolPage" && <SchoolPage />}
          {categoryThis == "TemplePage" && <TemplePage />}
          {categoryThis == "GusthousePage" && <GusthousePage />}
          {categoryThis == "HospitalPage" && <HospitalPage />}
          {categoryThis == "PrivateJobPage" && <PrivateJobPage />}
          {categoryThis == "MasjitPage" && <MasjitPage />}
          {categoryThis == "WoodenIndustriesPage" && <WoodenIndustriesPage />}
          {categoryThis == "IronIndustriesPage" && <IronIndustriesPage />}
          {categoryThis == "GovtPage" && <GovtPage />}
        </div>
      </div>
      {/* background image show  */}
      <ComponentBackgroundImageDiv nameClass="class1" />
      {/* ContactUsPage here  */}
      <ContactUsPage />
      {/* backgoround image show */}
      <div className="background-img-Rajasthan class2"></div>
      {/* about us  */}
      {/* <AboutUsPage /> */}
      {/* footer */}
      <Footer />


    </div>
  );
};

export default Home;
