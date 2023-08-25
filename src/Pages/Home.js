import React from "react";
import { categories, categoryLink } from "../Data/catagoryArray";
import { Link, NavLink } from "react-router-dom";
import elephant from "../images/elephant.png";
import wel from "../images/wel.jpg";

const Home = () => {
  return (
    <div className="homePage" >
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
      <div className="background-img-Rajasthan">
      
      </div>
      <div className="main-category-list">
        {categories.map((category, i) => (
          <Link to={categoryLink[category]} className="categories" key={i}>
            {category}
            {categoryLink.category}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
