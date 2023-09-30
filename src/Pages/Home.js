import React from "react";
import { categories, categoryLink } from "../Data/catagoryArray";
import { Link, NavLink } from "react-router-dom";
import elephant from "../images/elephant.png";
import cam from "../images/camal.png";
import { Routes, Route } from "react-router-dom";
import ContactUsPage from "./ContactUsPage";
import Footer from "./Footer";
import { motion, Variants } from "framer-motion";

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

  const nameHeading: Variants = {
    offscreen: {
      x: -300,
    },
    onscreen: {
      x: 0,
      rotate: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };
  const developerHeading: Variants = {
    offscreen: {
      x: 300,
    },
    onscreen: {
      x: 0,
      rotate: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };
  const nameHeading2: Variants = {
    offscreen: {
      y: 300,
    },
    onscreen: {
      y: 0,
      rotate: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };
  const elephantVariants: Variants = {
    offscreen: {
      x: 90,
    },
    onscreen: {
      x: 0,
      rotate: 0,
      transition: {
        type: "spring",
        bounce: 0.9,
        duration: 9,
      },
    },
  };

  return (
    <div className="homePage">
      <div className="welcome">
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          className="wlc-left"
        >
          <motion.h1 className="welcome-h1" variants={nameHeading}>
            Welcome To Contacts Ratannagar
          </motion.h1>
          <motion.h2
            className="welcome-h2"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
          >
            <motion.span className="welcome-myName" variants={developerHeading}>
              - Developer
            </motion.span>
            <motion.span
              variants={nameHeading2}
              className="welcome-h2-myName"
            >
              ShriGanesh Saini
            </motion.span>
          </motion.h2>
        </motion.div>
        <motion.div
          className="wlc-right"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
        >
          <motion.img
            // initial={{ opacity: 0 }}
            // whileInView={{ opacity: 1 }}
            // animate={{
            //   x: -15,
            //   y: 0,
            //   scale: 1,
            //   // rotate: 360,
            //   translateX: "-12px",
            //   transitionProperty: "all",
            //   transitionDuration: "4s",
            //   transitionTimingFunction: "linear",
            // }}
            variants={elephantVariants}
            src={elephant}
            alt={elephant}
            className="elephant"
          />
        </motion.div>
      </div>
      <ComponentBackgroundImageDiv />
      {/* <div to={categoryLink[category]} className="categories" key={i}></div> */}

      <div className="info-data-main">
        <div className="main-category-list">
          {categories.map((category, i) => (
            <div
              onClick={() => HandelClick(categoryLink[category])}
              className={`categories ${
                categoryThis == categoryLink[category] ? " active_btn" : ""
              }`}
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
      <AboutUsPage />
      {/* footer */}
      <Footer />
    </div>
  );
};

export default Home;
