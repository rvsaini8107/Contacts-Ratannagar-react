import React from 'react'
import {NavLink} from 'react-router-dom'
const Navbar = () => {
  return (
    <div className="main-navbar">
         <nav className='navbar'>
      <h1>Contacts Ratannagar</h1>
      <div className="links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About Us</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/signup">SignUp</NavLink>
      </div>  
    </nav>
    </div>
   
  )
}

export default Navbar
