// home signup, login/logout, addPlant, update personal
import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const NavBar = () => {
  return (
    <div class="header">
      <nav class="navbar navbar-expand-sm navbar-light bg-myRed">
        

        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navBarMenu"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse"
          id="navBarMenu"
          id="collasible-nav-dropdown"
        >
          <ul class="navbar-nav">
            <li>
              <Link to="/">
                <button class="navbar-brand">Home</button>
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/signup">
                <button class="nav-link"> Signup </button>
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/login">
                <button class="nav-link"> Login </button>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
