import React from "react";
import { NavLink } from "react-router-dom";

import './header.css';
import './nav_bar/NavBar.js';
import NavBar from "./nav_bar/NavBar.js";

const Header = () => {
  return(
    <header className="header">
      <div className="container">
        <div className="nav-row">
          <NavLink to="/" className="main-logo">EzzDrop</NavLink>
          <NavBar />
        </div>
      </div>
    </header>
  )
}

export default Header;