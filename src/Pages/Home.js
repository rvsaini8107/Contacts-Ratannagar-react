import React from "react";
import {categories,categoryLink} from "../Data/catagoryArray";
import { Link, NavLink } from "react-router-dom";

const Home = () => {
  
  return <div className="main-category-list">
      {categories.map((category,i) => (
       
        <Link to={categoryLink[category]} className="categories" key={i} >
          
            {category }{categoryLink.category}
          
        </Link>
      ))}
  </div>;
};

export default Home;
