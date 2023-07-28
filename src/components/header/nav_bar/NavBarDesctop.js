import React from "react";
import { NavLink } from "react-router-dom";

import "./nav-bar-desctop.css";

import account from "../../../img/icons/account.png";
import wallet from "../../../img/icons/wallet.png";
import box from "../../../img/icons/box.png";

const NavBarDesctop = (props) => {

  return(
    <div className="nav-menu">
      <div className="nav-menu__item" id="box">
        <NavLink to="/" className="nav-menu-item__link">
        < img src={box} alt="" className="nav-menu-item__icon" />
          <p id="balance">Cases</p>
        </NavLink>
      </div>
      
      <div className="nav-menu__item nav-menu-item__link" id="wallet" onClick={props.onWalletClick}>
        < img src={wallet} alt="" className="nav-menu-item__icon" />
        <div id="wallet-plus"><p>+</p></div>
      </div>

      <div className="nav-menu__item" id="account">
        <NavLink to="/pages/account_page/Account.js" className="nav-menu-item__link">
          < img src={account} alt="" className="nav-menu-item__icon" />
          <p id="balance">{parseFloat(props.balance).toFixed(2)} $</p>
        </NavLink>
      </div>
    </div>
  )
}

export default NavBarDesctop;