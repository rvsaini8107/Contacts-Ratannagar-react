import React, { useState } from "react";
import { NavLink, Navigate } from "react-router-dom";
import logoNav from "../images/list.png";
import closeBtn from "../images/closeBtn.png";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../Firebase";
import { toast } from "react-toastify";
import { signOut } from "firebase/auth";
import logoutIcon from "./../images/logout.png";

const Navbar = ({setAboutScroll, setContactScroll}) => {
  const [listStatus, setListStatus] = useState(true);
  const [classUpdate, setClassUpdate] = useState("displayNone");
  const [user, error] = useAuthState(auth);
  const HeandlerListClick = () => {
    setListStatus(!listStatus);
    if (!listStatus) {
      setClassUpdate("displayNone");
    } else {
      setClassUpdate("displayBlock");
    }
    console.log("clicked");
  };
  function Logout() {
    try {
      signOut(auth)
        .then(() => {
          // Sign-out successful.
          toast.success("Logout Successful");
          Navigate("/");
        })
        .catch((error) => {
          // An error happened.
          toast.error(error.message);
        });
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
  }

  return (
    <>
      <div className="main-navbar">
        <nav className="navbar">
          <h1>Contacts Ratannagar</h1>
          {logoNav && (
            <img
              src={listStatus ? logoNav : closeBtn}
              onClick={() => HeandlerListClick()}
              className="logo-nav"
              alt=""
            />
          )}
          <div className="links ">
            <NavLink to="/">Home</NavLink>
            {/* <NavLink to="/about" >About Us</NavLink> */}
            <a href="#about">About Us</a>
            <a href="#contact">Contact</a>
            {/* <NavLink to="/contact" >Contact</NavLink> */}
            {/* {!user && <NavLink to="/signup">SignUp</NavLink>}
            {!user && <NavLink to="/login">Login</NavLink>} */}
            {user && (
              <div className="profile-img-user-logout">
              <NavLink to="/UserProfile">
                <div className="profile-img">
                  <img
                    className="user-profile-img"
                    src={
                      user
                        ? user.photoURL
                        : "https://www.w3schools.com/howto/img_avatar.png"
                    }
                    alt=""
                  />
                </div>
                </NavLink>
                {logoutIcon?<img src={logoutIcon} alt="" className="logout-btn" onClick={() => Logout()} />
                :
                <p className="logout-btn" onClick={() => Logout()}>Logout</p>
                }
              </div>
            )}
          </div>
        </nav>
        <div className={`links-menu ${classUpdate}`}>
          <div className="link-div-menu">
            <NavLink to="/" onClick={() => HeandlerListClick()}>
              Home
            </NavLink>
            <NavLink to="/about" onClick={() => HeandlerListClick()}>
              About Us
            </NavLink>
            <NavLink to="/contact" onClick={() => HeandlerListClick()}>
              Contact
            </NavLink>
            {/* {!user && (
              <NavLink to="/signup" onClick={() => HeandlerListClick()}>
                SignUp
              </NavLink>
            )}
            {!user && (
              <NavLink to="/login" onClick={() => HeandlerListClick()}>
                Login
              </NavLink>
            )} */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
