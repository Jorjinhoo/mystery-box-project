import React from "react";
import { NavLink } from "react-router-dom";

import "./box.css";


const Box = (props) => {
  return(
    <div className="box-card">
      <NavLink to={`/pages/case_opening_page/CaseOpeningPage.js?items=${encodeURIComponent(JSON.stringify(props.items))}
                    &name=${props.name}&price=${props.price}`} className="elements">
        <div className="elements__item" id="item-foto">
          <img src={props.caseLogo} alt="" className="elements-item__box" />
          <img src={props.caseItemLogo} alt="" className="elements-item__item" />
        </div>
        <div className="elements__item">
          <p className="elements-item__name">{props.name}</p>
          <div id="price">
            <p>{props.price} $</p>
          </div>
        </div>
      </NavLink>
    </div>
  )
}

export default Box;