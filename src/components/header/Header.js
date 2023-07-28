import React, {useState, useEffect} from "react";
import { NavLink } from "react-router-dom";

import './header.css';
import NavBarDesctop from "./nav_bar/NavBarDesctop.js";
import NavBarMobile from "./nav_bar/NavBarMobile";

const Header = (props) => {

  const [isMobileScreen, setIsMobileScreen] = useState(false);

  const handleResize = () => {
    setIsMobileScreen(window.innerWidth <= 500);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return(
    <header className="header">
      <div className="container">
        <div className="nav-row">
          <NavLink to="/mystery-box-project" className="main-logo">EzzDrop</NavLink>
          {isMobileScreen ? (
            <NavBarMobile onWalletClick={props.onWalletClick} balance={props.balance} />
          ) : (
            <NavBarDesctop onWalletClick={props.onWalletClick} balance={props.balance} />
          )}
        </div>
      </div>
    </header>
  )
}

export default Header;