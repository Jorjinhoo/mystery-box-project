import React, {useState} from "react";

import CaseScrollTape from "./CaseScrollTape.js";
import OpenCaseButton from "./OpenCaseButton.js";

import "./case-opening-page.css";

import item1 from "../../img/items_imgs/clothing/dior-white-bag.webp";
import item2 from "../../img/items_imgs/clothing/jordan1-dark.webp";
import item3 from "../../img/items_imgs/clothing/tnf-puffer.webp";
import item4 from "../../img/items_imgs/gadgets/airpods-max.webp";

const CaseOpeningPage = () =>{

  const [scroll, setScroll] = useState(false);


  const startScroll = () => {
    setScroll(true);
  }


  return(
    <main className="main" id="case-opening-main">
      <div className="case-opening-container">
        <CaseScrollTape item1={item1} item2={item2} item3={item3} item4={item4} scroll={scroll} setScroll={setScroll} />
        <OpenCaseButton startScroll={startScroll}/>
      </div>
    </main>
  )
}

export default CaseOpeningPage;