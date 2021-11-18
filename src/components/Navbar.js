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

            </button>

        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navBarMenu"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse"  id="navBarMenu">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/signup"><button className="nav-link"> Signup </button></Link>
          </li>
          <li className="nav-item">
          <Link to="/login"><button className="nav-link"> Login </button></Link></li>
          <li className="nav-item">
          <Link to="/logout"><button className="nav-link"> Logout </button></Link>
          </li>
        </ul>


        </div>
      </nav>
    </div>
  );
};

export default NavBar;
