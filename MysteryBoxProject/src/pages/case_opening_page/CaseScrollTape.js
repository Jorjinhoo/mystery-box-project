import React from "react";

import "./case-scroll-tape.css";

import redPointer from "../../img/icons/red-pointer.png";

const CaseScrollTape = (props) =>{

if(props.scroll){
  console.log("START SCROLLING");
  props.setScroll();
}

  return(
    <div className="scroll-tape-container">
      <img src={redPointer} alt="" className="tape-pointer" />
      <div className="scope">
        <ul className="scope__list">
          <li className="scope-list__item">
            <img src={props.item1} alt="" />
          </li>
          <li className="scope-list__item">
            <img src={props.item2} alt="" />
          </li>
          <li className="scope-list__item">
            <img src={props.item3} alt="" />
          </li>
          <li className="scope-list__item">
            <img src={props.item4} alt="" />
          </li>
        </ul>
      </div>
    </div>
  )
}

export default CaseScrollTape;