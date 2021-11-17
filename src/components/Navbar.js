// home signup, login/logout, addPlant, update personal
import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const NavBar = () => {
  return (



    <div className="header">
      <nav className="navbar navbar-expand-sm navbar-light bg-myRed">
        <Link to="/"><button className="navbar-brand">Home</button></Link>
         
        <button className="navbar-toggler" data-toggle="collapse" data-target='#navBarMenu'>

            <span className='navbar-toggler-icon'></span>

  


      <nav class=" col-lg-12 navbar navbar-expand-md navbar-dark pt-2 pb-2 bg-myRed">
        <Link to="/"><button class="nav-link"> Home </button></Link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navBarMenu"
        >
          <span class="navbar-toggler-icon"></span>
        </button>


        <div className="collapse navbar-collapse"  id="navBarMenu" id="collasible-nav-dropdown">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/signup"><button className="nav-link"> Signup </button></Link>
          </li>
          <li className="nav-item">
          <Link to="/login"><button className="nav-link"> Login </button></Link>

          </li>
        </ul>



        </div>
      </nav>
   </div>
  );
};

export default NavBar;
