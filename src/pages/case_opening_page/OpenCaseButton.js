import React from "react";

import "./styles/open-case-button.css";


const OpenCaseButton = (props) =>{

  const handleButtonClick = () => {
    props.startScroll();
  }

  return(
    <div className="open-case-button" onClick={handleButtonClick}>
      Open for {props.price} $
    </div>
  )
}

export default OpenCaseButton;