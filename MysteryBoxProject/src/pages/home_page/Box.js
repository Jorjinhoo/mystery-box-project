import React from "react";
import { NavLink } from "react-router-dom";

import "./box.css";


const Box = (props) => {
  return(
    <div className="box-card">
      <NavLink to="/pages/case_opening_page/CaseOpeningPage.js" className="elements">
        <div className="elements__item" id="item-foto">
          <img src={props.box} alt="" className="elements-item__box" />
          <img src={props.item} alt="" className="elements-item__item" />
        </div>
        <div className="elements__item">
          <p1>{props.name}</p1>
          <div id="price">
            <p2>{props.price} </p2><p3>$</p3>
          </div>
        </div>
      </NavLink>
    </div>
  )
}

export default Box;