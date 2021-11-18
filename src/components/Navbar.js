// home signup, login/logout, addPlant, update personal
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import  mobile from "./menu-icon.svg";

const NavBar = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  let style = {
    display: "none",
  }

  if (hamburgerOpen === true ) {
    style.display = "";
  }



  return (
    <div className="navigation">
      <div className="desktop">
        <ul className="links">
          <Link to="/">
            <button className="d-btn">
              <li>Home</li>
            </button>
          </Link>

          <Link to="/signup">
            <button className="d-btn">
              <li>Sign Up</li>
            </button>
          </Link>

          <Link to="/login">
            <button className="d-btn">
              <li>Log In </li>
            </button>
          </Link>

          <Link to="/logout">
            <button className="d-btn">
              <li>Log Out</li>
            </button>
          </Link>
        </ul>
      </div>
      {/* Mobile Nav */}
      <div className="mobile">
         <img className="hamburger" alt="hamburger" src={ mobile } onClick={toggleHamburger} />
        <ul style={style} className="mobile-links">
          <Link to="/">
            <li>Home</li>
          </Link>

          <Link to="/signup">
            <li>Sign Up</li>
          </Link>

          <Link to="/login">
            <li>Log In </li>
          </Link>

          <Link to="/logout">
            <li>Log Out</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
