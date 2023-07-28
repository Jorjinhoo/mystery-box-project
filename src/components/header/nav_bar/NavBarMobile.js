import React, {useState} from "react";
import { NavLink } from "react-router-dom";

import "./nav-bar-mobile.css";

import account from "../../../img/icons/account.png";
import burgerMenu from "../../../img/icons/burger-menu.png";
import closeMenu from "../../../img/icons/close-menu.png";


const NavBarMobile = (props) => {

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleWalletClick = () => {
    props.onWalletClick();
    handleMenuClick();
  }

  return(
    <div className="nav-menu">
      <div className="nav-menu__item" id="account-mobile">
        <NavLink to="/pages/account_page/Account.js" className="nav-menu-item__link">
          < img src={account} alt="" className="nav-menu-item__icon" />
          <p id="balance-mobile">{parseFloat(props.balance).toFixed(2)} $</p>
        </NavLink>
      </div>
      <div className="nav-menu__item" id="burger-menu" onClick={handleMenuClick}>
        <img src={burgerMenu} alt="" />
      </div>
      <div className={`mobile-menu ${(isMobileMenuOpen) ? "mobile-menu-active" : ""}`}>
        <img src={closeMenu} alt="" onClick={handleMenuClick} className="mobeile-menu__close-icon"/>
        <ul className="mobile-menu__items">
          <li className="mobile-menu-items__item"><NavLink to={"/pages/account_page/Account.js"} onClick={handleMenuClick}>Account</NavLink></li>
          <li className="mobile-menu-items__item" onClick={handleWalletClick} >Deposit</li>
          <li className="mobile-menu-items__item"><NavLink to={"/mystery-box-project"} onClick={handleMenuClick}>Cases</NavLink></li>
        </ul>
      </div>
    </div>
  )
}

export default NavBarMobile;