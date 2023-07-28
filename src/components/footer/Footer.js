import React from "react";

import "./footer.css";

import facebook from "../../img/icons/facebook.png";
import instagram from "../../img/icons/instagram.png";
import trustpilot from "../../img/icons/trustpilot.png";

const Footer = () => {
  return(
    <footer className="footer">
      <div className="container">
        <div className="item" id="info">
          <ul className="item__list">
            <li>TERMS AND CONDITIONS</li>
            <li>SECURITY AND PRIVACY</li>
            <li>REFUNDS AND RETURNS</li>
          </ul>
          <ul className="item__list">
            <li>DELIVERY</li>
            <li>FAQ</li>
            <li>ABOUT</li>
          </ul>
        </div>
        <div className="item" id="social">
          <a href="https://facebook.com/" className="social__item">
            <img src={facebook} alt="" className="social__icon" />
          </a>
          <a href="https://www.instagram.com/" className="social__item">
            <img src={instagram} alt="" className="social__icon" />
          </a>
          <div className="social__item">
            <a href="https://trustpilot.com/" id="trustpilot-container">
              <p>Review us on</p>
              <img src={trustpilot} alt="" className="social__icon" />
            </a>
          </div>
        </div>
        <div className="item" id="text">
          <p>Lorem Ipsum is simply dummy text of the printing and 
            typesetting industry. Lorem Ipsum has been the industry's 
            standard dummy text ever since the 1500s, when an unknown 
            printer took a galley of type and scrambled it to make a 
            type specimen book. It has survived not only five centuries, 
            but also the leap into electronic typesetting, remaining 
            essentially unchanged.</p>
        </div>
        <div className="item" id="copyright">
          <p>© 2019-2023 Sokolov O. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;