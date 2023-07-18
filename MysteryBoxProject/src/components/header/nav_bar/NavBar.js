import React from "react";
import { NavLink } from "react-router-dom";

import "./nav-bar.css";

import account from "../../../img/icons/account.png";
import wallet from "../../../img/icons/wallet.png";
import box from "../../../img/icons/box.png";

const NavBar = () => {
  return(
    <div className="nav-menu">
      <div className="nav-menu__item" id="box">
        <NavLink to="/" className="nav-menu-item__link">
        < img src={box} alt="" className="nav-menu-item__icon" />
          <p id="balance">Cases</p>
        </NavLink>
      </div>
      
      <div className="nav-menu__item" id="wallet">
       <a className="nav-menu-item__link">
        < img src={wallet} alt="" className="nav-menu-item__icon" />
        <div id="wallet-plus"><p>+</p></div>
       </a>
      </div>

      <div className="nav-menu__item" id="account">
        <NavLink to="/pages/account_page/Account.js" className="nav-menu-item__link">
          < img src={account} alt="" className="nav-menu-item__icon" />
          <p id="balance">0.00 $</p>
        </NavLink>
      </div>
    </div>
  )
}

export default NavBar;