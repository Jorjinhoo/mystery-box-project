import React from "react";

import "./open-case-button.css";


const OpenCaseButton = (props) =>{

  const handleButtonClick = () => {
    props.startScroll();
  }

  return(
    <div className="open-case-button" onClick={handleButtonClick}>
      Open for 5 $
    </div>
  )
}

export default OpenCaseButton;