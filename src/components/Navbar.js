// home signup, login/logout, addPlant, update personal
import React from "react";


const NavBar = () => {
  return (
    <div class="header">
      <nav class="navbar navbar-expand-sm navbar-light bg-light">
        <button class="navbar-brand">Home</button>
        <button class="navbar-toggler" data-toggle="collapse" data-target='#navBarMenu' >

            <span class='navbar-toggler-icon'></span>
        </button>
        <div class="collapse navbar-collapse" id="navBarMenu">
        <ul class="navbar-nav">
          <li class="nav-item">
            <button class="nav-link"> Signup </button>
          </li>
          <li class="nav-item">
            <button class="nav-link">
             Log-In
            </button>
          </li>
        </ul>

        </div>
        

       

        
      </nav>
    </div>
  );
};

export default NavBar;
