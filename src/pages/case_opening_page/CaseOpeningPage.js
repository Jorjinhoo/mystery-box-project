import React, {useState, useEffect} from "react";
import { useLocation } from "react-router-dom";

import CaseScrollTape from "./CaseScrollTape.js";
import OpenCaseButton from "./OpenCaseButton.js";
import LowBalanceInformBanner from "./LowBalanceInformBanner.js";
import ContentItemCard from "./ContentItemCard.js";

import "./styles/case-opening-page.css";

const CaseOpeningPage = (props) =>{

  const [scroll, setScroll] = useState(false);
  const [scrollingButtonLock, setScrollingButtonLock] = useState(false);
  const [lowBalanceInform, setLowBalanceInform] = useState(false);

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
    if (scrollingButtonLock) {
      return;
    } else {
      setScrollingButtonLock(true);
      if (props.balance >= boxData.price) {
        setScroll(true); 
      } else {
        setLowBalanceInform(true); 
      }
      setScrollingButtonLock(false);
    }
  };


  return (
    <main className="main" id="case-opening-main">
      <div className="case-opening-container" id="scroll-tape-container">
        <CaseScrollTape
          setBalance={props.setBalance}
          casePrice={boxData.price}
          item01={boxData.item01}
          item02={boxData.item02}
          item03={boxData.item03}
          item04={boxData.item04}
          scroll={scroll}
          setScroll={setScroll}
          addItemToAccount={props.addItemToAccount}
        />

        <OpenCaseButton startScroll={startScroll} price={boxData.price} />
      </div>
      <div className="case-opening-container">
        <h2 className="case-content-title">CASE CONTENT</h2>
        <div className="case-content">
          <ContentItemCard item={boxData.item01} />
          <ContentItemCard item={boxData.item02} />
          <ContentItemCard item={boxData.item03} />
          <ContentItemCard item={boxData.item04} />
        </div>
      </div>

      { lowBalanceInform && ( <LowBalanceInformBanner lowBalanceInform={lowBalanceInform} setLowBalanceInform={setLowBalanceInform} />) }

    </main>
  )
}

export default CaseOpeningPage;