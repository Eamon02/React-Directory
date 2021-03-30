import React from "react";
import logo from "../logo.svg";
import "../styles/NavBar.css";

function NavBar() {
  return (
    <>
      <nav>
        <div class="nav-wrapper blue">
        <img src={logo} className="App-logo sidenav-trigger" alt="logo" />
          <a href="#!" class="brand-logo">
           Reacty Directory
          </a>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
