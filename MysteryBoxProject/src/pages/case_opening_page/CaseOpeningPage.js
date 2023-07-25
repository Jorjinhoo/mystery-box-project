import React, {useState, useEffect} from "react";
import { useLocation } from "react-router-dom";

import CaseScrollTape from "./CaseScrollTape.js";
import OpenCaseButton from "./OpenCaseButton.js";

import "./case-opening-page.css";

const CaseOpeningPage = (props) =>{

  const [scroll, setScroll] = useState(false);
  const [boxData, setBoxData] = useState({});
  const location = useLocation();

  const getParamsFromURL = (search) => {
    const params = new URLSearchParams(search);
    const items = JSON.parse(params.get("items"));
    return {
      item01: items.item01,
      item02: items.item02,
      item03: items.item03,
      item04: items.item04,
      name: params.get("name"),
      price: params.get("price"),
    };
  };


  useEffect(() => {
    const params = getParamsFromURL(location.search);
    setBoxData(params);
  }, [location.search]);


  const startScroll = () => {
    (props.balance >= boxData.price) ? setScroll(true) : console.log("make a deposit");
  }
  


  return(
    <main className="main" id="case-opening-main">
      <div className="case-opening-container">
        <CaseScrollTape setBalance={props.setBalance} casePrice={boxData.price} item01={boxData.item01} item02={boxData.item02} item03={boxData.item03} item04={boxData.item04} scroll={scroll} setScroll={setScroll} />
        <OpenCaseButton startScroll={startScroll} price={boxData.price}/>
      </div>
    </main>
  )
}

export default CaseOpeningPage;