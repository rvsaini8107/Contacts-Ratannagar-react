import React,{useState} from "react";
import { NavLink } from "react-router-dom";
import logoNav from "../images/list.png";
import closeBtn from "../images/closeBtn.png";


const Navbar = () => {
  const [listStatus,setListStatus] = useState(true);
  const [classUpdate,setClassUpdate] = useState("displayNone");
  const HeandlerListClick = ()=>{
    setListStatus(!listStatus);
    if(!listStatus){
      setClassUpdate("displayNone")
    }
    else{
      setClassUpdate("displayBlock")
    }
    console.log("clicked");
  }

  return (
    <div className="main-navbar">
      <nav className="navbar">
        <h1>Contacts Ratannagar</h1>
        {logoNav&&<img src={listStatus ?logoNav:closeBtn} onClick={() => HeandlerListClick()} className="logo-nav" alt="" />}
        <div className="links ">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About Us</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/signup">SignUp</NavLink>
        </div>
      </nav>
      <div className={`links-menu ${classUpdate}`} >
        <div className="link-div-menu">
        <NavLink to="/" onClick={() => HeandlerListClick()}>Home</NavLink>
          <NavLink to="/about" onClick={() => HeandlerListClick()}>About Us</NavLink>
          <NavLink to="/contact" onClick={() => HeandlerListClick()}>Contact</NavLink>
          <NavLink to="/signup" onClick={() => HeandlerListClick()}>SignUp</NavLink>
          </div>
       
          
        </div>
    </div>
  );
};

export default Navbar;
